/* eslint-disable import/no-cycle */
import project from './projects';
import Storage from './storage';
import navbar from './navbar';

const saveProject = () => {
  function cleanForm() {
    const fields = ['project-name', 'project-description'];
    fields.forEach((item) => {
      document.querySelector(`#${item}`).value = '';
    });
  }

  const one = project;
  const pName = document.querySelector('#project-name').value;
  const pDescription = document.querySelector('#project-description').value;
  one.projectName = pName;
  one.projectDescription = pDescription;
  cleanForm();
  Storage.create(one.projectName, one);

  navbar();
};


export default saveProject;