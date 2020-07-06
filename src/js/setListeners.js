/* eslint-disable import/no-cycle */
import Storage from './storage';
import eraseStep from './eraseStep';
import saveStep from './saveStep';
import showProject from './showProject';

const setListeners = () => {
  Object.entries(localStorage).forEach((item) => {
    const projectName = item[0];
    const project = Storage.read(projectName);
    const { projectSteps } = project;
    const keys = Object.keys(projectSteps);
    for (let i = 0; i < Object.keys(projectSteps).length; i += 1) {
      const step = projectSteps[keys[i]];
      const erase = document.getElementById(projectSteps[keys[i]].stepTitle);
      const newStep = document.getElementById(`save_${projectSteps[keys[i]].stepTitle.replace(/ /g, '_')}`);


      if (erase) {
        erase.addEventListener('click', () => {
          eraseStep(step, project);
        });
        newStep.addEventListener('click', () => {
          const title = projectSteps[keys[i]].stepTitle.replace(/ /g, '_');
          saveStep(project, title);
          eraseStep(step, project);
          showProject(projectName);
        });
      }
    }
  });
};
export default setListeners;