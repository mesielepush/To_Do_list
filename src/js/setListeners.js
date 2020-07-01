import Storage from './storage';
import erase_step from './erase_step';

const setListeners = () => {
  Object.entries(localStorage).forEach((item) => {
    const project_name = item[0];
    const project = Storage.read(project_name);
    const project_steps = project.projectSteps;
    const keys_ = Object.keys(project_steps);
    for (let i = 0; i < Object.keys(project_steps).length; i++) {
      const step = project_steps[keys_[i]];
      const erase = document.getElementById(project_steps[keys_[i]].stepTitle);

      if (erase) {
        erase.addEventListener('click', () => {
          erase_step(step, project),

          false;
        });
      }
    }
  });
};
export default setListeners;