import step from './step';
import navbar from './navbar';
import Storage from './storage';
import Project from './projects';

const save_step = (project) => {
  function cleanForm() {
    const fields = ['step-name', 'step-description', 'death_line_step', 'priority_step'];
    fields.forEach((item) => {
      document.querySelector(`#${item}`).value = '';
    });
  }

  const s_name = document.querySelector('#step-name').value;
  const s_description = document.querySelector('#step-description').value;
  const s_death_line = document.querySelector('#death_line_step').value;
  const s_priority = document.querySelector('#priority_step').value;
  const one = step(s_name, s_description, s_death_line, s_priority);
  cleanForm();
  one.stepProject = project.projectName;
  project.projectSteps[s_name] = one;
  Storage.update(project.projectName, project);
  navbar();
};


export default save_step;