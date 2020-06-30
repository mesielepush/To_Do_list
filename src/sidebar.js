import Storage from './storage'
import show_project from './show_project'
const sidebar =()=>{
    const content = document.getElementById('body');
    
    const template = `
                
                <div class="sidenav">
                    <div class="general">
                        <a href="#about">All Projects</a>
                        <a href="#services">All Steps</a>
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
        var inside_text = projects[i].textContent
        console.log(inside_text)
        projects[i].addEventListener('click', ()=>{
            show_project(inside_text);
         })
    }
};
export default sidebar