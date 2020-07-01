/* eslint-disable import/no-cycle */
import showProject from './showProject';
import allProjects from './allProjects';
import allSteps from './allSteps';

const sidebar = () => {
  const content = document.getElementById('body');

  const template = `
                
                <div class="sidenav">
                    <div class="general">
                        <div id="all_projects">All Projects</div>
                        <div id="all_steps">All Steps</div>
                    </div>
                
                    <div class="projects_text">
                        Your Projects
                    </div>
                    <div id="projects" class='d-flex flex-column text-center overflow-auto'>
                        ...
                    </div>
                    
                </div>

                <div class="main container mt-5" id='main'>
                    
                </div>

    `;
  content.innerHTML += template;

  const projectList = document.getElementById('projects');

  Object.entries(localStorage).forEach((item) => {
    const projectListName = `
        <a class = 'projects_link'>${item[0]}</a>
        `;
    projectList.innerHTML += projectListName;
  });

  const projects = document.getElementsByClassName('projects_link');
  for (let i = 0; i < projects.length; i += 1) {
    const insideText = projects[i].textContent;
    projects[i].addEventListener('click', () => {
      showProject(insideText);
    });
  }
  const showAllProjects = document.getElementById('all_projects');
  showAllProjects.addEventListener('click', () => {
    allProjects();
  });
  const showAllSteps = document.getElementById('all_steps');
  showAllSteps.addEventListener('click', () => {
    allSteps();
  });
};
export default sidebar;