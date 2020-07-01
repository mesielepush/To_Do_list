/* eslint-disable import/no-cycle */
import Storage from './storage';
import allProjects from './allProjects';

const eraseProject = (name) => {
  Storage.erase(name);
  allProjects();
};
export default eraseProject;