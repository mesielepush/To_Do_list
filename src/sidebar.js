import Storage from './storage'
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
        <a>${item[0]}</a>
        `
        console.log(item)
        project_list.innerHTML+= project_list_name
    }) 

    
};
export default sidebar