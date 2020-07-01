import Storage from './storage';
import all_projects from './all_projects';

const erase_project = (name) => {
  Storage.erase(name);
  all_projects();
};
export default erase_project;