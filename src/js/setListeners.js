/* eslint-disable import/no-cycle */
import Storage from './storage';
import eraseStep from './eraseStep';

const setListeners = () => {
  Object.entries(localStorage).forEach((item) => {
    const projectName = item[0];
    const project = Storage.read(projectName);
    const { projectSteps } = project;
    const keys = Object.keys(projectSteps);
    for (let i = 0; i < Object.keys(projectSteps).length; i += 1) {
      const step = projectSteps[keys[i]];
      const erase = document.getElementById(projectSteps[keys[i]].stepTitle);

      if (erase) {
        erase.addEventListener('click', () => {
          eraseStep(step, project);
        });
      }
    }
  });
};
export default setListeners;