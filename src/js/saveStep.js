import step from './step';
/* eslint-disable import/no-cycle */
import navbar from './navbar';
import Storage from './storage';


const saveStep = (project) => {
  function cleanForm() {
    const fields = ['step-name', 'step-description', 'death_line_step', 'priority_step'];
    fields.forEach((item) => {
      document.querySelector(`#${item}`).value = '';
    });
  }

  const sName = document.querySelector('#step-name').value;
  const sDescription = document.querySelector('#step-description').value;
  const sDeathLine = document.querySelector('#death_line_step').value;
  const sPriority = document.querySelector('#priority_step').value;
  const one = step(sName, sDescription, sDeathLine, sPriority);
  cleanForm();
  one.stepProject = project.projectName;
  project.projectSteps[sName] = one;
  Storage.update(project.projectName, project);
  navbar();
};


export default saveStep;