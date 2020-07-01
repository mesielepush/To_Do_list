/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
import Storage from './storage';
import setListeners from './setListeners';
import eraseProject from './eraseProject';
import showStep from './showStep';
import saveStep from './saveStep';

const showProject = (name) => {
  const content = document.getElementById('main');
  const thisProject = Storage.read(name);

  content.innerHTML = '';
  const template = `
                    <div class="step_div" id='step_div'>
                        <div class="allsteps_title d-flex justify-content-center align-items-center">
                            <span style='font-size:2rem'>${name}</span>
                        </div>
                        <div class="single_step d-flex align-items-center" style='margin-bottom: 3rem;'>
                            <div class="project_name_fix d-flex justify-content-center align-items-center" data-toggle="modal" data-target="#new_step_modal" id='new_step'>NewStep</div>
                            <div class="step_name_fix d-flex justify-content-center align-items-center">${thisProject.projectDescription}</div>
                            
                            <div class="completed_link d-flex align-items-center" id='${name}'>
                                <svg width="32" height="32" viewBox="0 0 145.4 145.4" >
                                    
                                    <path d="M72.7,0a72.7,72.7,0,1,0,72.7,72.7A72.7,72.7,0,0,0,72.7,0Zm41.5,55.43L68.66,101.84a7.56,7.56,0,0,1-10.77,0L31.23,75a7.57,7.57,0,0,1,.08-10.74l1.17-1.14a7.56,7.56,0,0,1,10.6,0L57.66,77.59a7.57,7.57,0,0,0,10.68,0l33.82-34a7.57,7.57,0,0,1,10.72,0l1.27,1.27A7.58,7.58,0,0,1,114.2,55.43Z"/>
                                    
                                </svg>
                            </div>
                            <div class="death_line_fix d-flex align-items-center">Death Line</div>
                            <div class="priority_fix d-flex justify-content-center align-items-center">Priority</div>
                        </div>
                        
                    </div>

                    <div class="modal fade" id="new_step_modal" tabindex="-1" role="dialog" aria-labelledby="new_step_modal" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                                <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Step Name:</label>
                                        <input type="text" class="form-control" id="step-name">
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Description:</label>
                                        <input class="form-control" id="step-description">
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Death Line:</label>
                                        <input type="date" class="form-control" id="death_line_step">
                                    </div>
                                    <div class="form-group">
                                        <label for="priority">Priority</label>
                                        <select class="form-control" id="priority_step">
                                        <option hidden="" selected="">Priority</option>
                                        <option value="high">High</option>
                                        <option value="moderate">Moderate</option>
                                        <option value="low">Low</option>
                                        </select>
                                    </div>
                                </form>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal" id = 'save_step' >Save</button>
                                </div>
                            </div>
                        </div>
                </div>
    `;
  content.innerHTML += template;


  const steps = thisProject.projectSteps;
  const newStep = document.getElementById('save_step');
  newStep.addEventListener('click', () => {
    saveStep(thisProject), showProject(name);
  });

  // eslint-disable-next-line max-len
  const sortedSteps = Object.keys(steps).sort((a, b) => new Date(steps[a].stepDate) - new Date(steps[b].stepDate));
  sortedSteps.forEach((item) => {
    showStep(steps[item]);
  });
  setListeners();
  const toDelete = document.getElementById(name);
  toDelete.addEventListener('click', () => {
    eraseProject(name);
  });
};
export default showProject;