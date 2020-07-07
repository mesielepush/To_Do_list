/* eslint-disable import/no-cycle */
import saves from './saveProject';
import sidebar from './sidebar';

const navbar = () => {
  const content = document.getElementById('body');
  content.innerHTML = '';

  const template = `
                <nav class="navbar d-flex justify-content-center">
                    <a class="navbar-brand" href="#">easy2do</a>
                    <a class="new_buttton d-flex justify-content-center align-items-center" id = 'new_project' data-toggle="modal" data-target="#new_project_modal"> NEW </a>
                    
                </nav>
                

                <div class="modal fade" id="new_project_modal" tabindex="-1" role="dialog" aria-labelledby="new_project_modal" aria-hidden="true">
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
                            <label for="recipient-name" class="col-form-label">Project Name:</label>
                            <input type="text" class="form-control" id="project-name">
                            </div>
                            <div class="form-group">
                            <label for="message-text" class="col-form-label">Description:</label>
                            <input class="form-control" id="project-description">
                            </div>
                        </form>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" id = 'save' >Save</button>
                        </div>
                    </div>
                    </div>
                </div>
    `;
  content.innerHTML += template;
  sidebar();
  const start = document.getElementById('save');
  start.addEventListener('click', () => {
    saves();
  });
};
export default navbar;