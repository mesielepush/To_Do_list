import Storage from './storage'
import show_project from './show_project'
import setListeners from './setListeners'
const all_projects = ()=>{
    const content = document.getElementById('main')
    content.innerHTML = '';

    Object.entries(localStorage).forEach((item)=>{
        const project = Storage.read(item[0])

        const project_show  = `
        <div class="step_div " id='step_div'>
            <div class="allprojects_title d-flex justify-content-center align-items-center" id='${project.projectName}'>
                <span style='font-size:2rem' >${project.projectName}</span>
            </div>
            <div class="single_step d-flex align-items-center" style='margin-bottom: 3rem;'>
                <div class="project_name_fix d-flex justify-content-center align-items-center" data-toggle="modal" data-target="#new_step_modal" id='new_step'>Description</div>
                <div class="step_name_fix d-flex justify-content-center align-items-center">${project.projectDescription}</div>
                
                <div class="completed_link_fix d-flex align-items-center">
                    <svg width="32" height="32" viewBox="0 0 145.4 145.4" >
                        
                        <path d="M72.7,0a72.7,72.7,0,1,0,72.7,72.7A72.7,72.7,0,0,0,72.7,0Zm41.5,55.43L68.66,101.84a7.56,7.56,0,0,1-10.77,0L31.23,75a7.57,7.57,0,0,1,.08-10.74l1.17-1.14a7.56,7.56,0,0,1,10.6,0L57.66,77.59a7.57,7.57,0,0,0,10.68,0l33.82-34a7.57,7.57,0,0,1,10.72,0l1.27,1.27A7.58,7.58,0,0,1,114.2,55.43Z"/>
                        
                    </svg>
                </div>
                
            </div>
            
        </div>
        `
        content.innerHTML+= project_show
    })
    const projects = document.getElementsByClassName('allprojects_title');
    for (var i = 0; i < projects.length; i++) {
        const name = projects[i].id
        projects[i].addEventListener('click', function(){
            show_project(name);
         })
    }
}
export default all_projects