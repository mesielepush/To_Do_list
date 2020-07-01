import show_project from './show_project'
import all_projects from './all_projects'
import all_steps from './all_steps';
const sidebar =()=>{
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
                    <div class="projects_text">
                        Your Steps
                    </div>
                    <div id="steps">
                        ...
                    </div>
                </div>

                <div class="main container mt-5" id='main'>
                    
                </div>

    `
    content.innerHTML += template

    const project_list = document.getElementById('projects');

    Object.entries(localStorage).forEach((item)=>{
        const project_list_name  = `
        <a class = 'projects_link'>${item[0]}</a>
        `
        project_list.innerHTML+= project_list_name
    }) 

    const projects = document.getElementsByClassName('projects_link');
    for (var i = 0; i < projects.length; i++) {
        const inside_text = projects[i].textContent
        projects[i].addEventListener('click', function(){
            show_project(inside_text);
         })
    }
    const show_all_projects = document.getElementById('all_projects')
    show_all_projects.addEventListener('click',function(){
        all_projects();
     });
    const show_all_steps = document.getElementById('all_steps')
    show_all_steps.addEventListener('click',function(){
        all_steps();
     });
};
export default sidebar