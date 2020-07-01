/* eslint-disable import/no-cycle */
import Storage from './storage';
import showProject from './showProject';

const eraseStep = (step, project) => {
  delete project.projectSteps[step.stepTitle];
  Storage.update(project.projectName, project);
  showProject(project.projectName);
};
export default eraseStep;
