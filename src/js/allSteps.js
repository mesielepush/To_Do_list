/* eslint-disable import/no-cycle */
import Storage from './storage';
import showStep from './showStep';
import setListeners from './setListeners';

const allsteps = () => {
  const content = document.getElementById('main');
  content.innerHTML = '';
  const template = `
            <div class="step_div" id='step_div'>
                <div class="allsteps_title d-flex justify-content-center align-items-center">
                    <span>Every Single Step</span>
                </div>
                
            </div>
    `;

  content.innerHTML += template;
  Object.entries(localStorage).forEach((item) => {
    const stepsContent = document.getElementById('step_div');
    const projectName = item[0];
    const { projectSteps } = Storage.read(item[0]);
    const renderProject = `
                            <div class="allsteps_title d-flex justify-content-center align-items-center mt5">
                                <span>${projectName}</span>
                            </div>   
        `;
    stepsContent.innerHTML += renderProject;
    const keys = Object.keys(projectSteps);
    for (let i = 0; i < Object.keys(projectSteps).length; i += 1) {
      showStep(projectSteps[keys[i]]);
    }
    setListeners();
  });
};
export default allsteps;
