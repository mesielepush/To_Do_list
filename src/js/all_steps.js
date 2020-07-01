import Storage from './storage'
import show_step from './show_step';
import setListeners from './setListeners'
const allsteps = () =>{
    const content = document.getElementById('main');
    content.innerHTML ='';
    const template = `
            <div class="step_div" id='step_div'>
                <div class="allsteps_title d-flex justify-content-center align-items-center">
                    <span>Every Single Step</span>
                </div>
                
            </div>
    `;
    
    content.innerHTML += template;
    Object.entries(localStorage).forEach((item)=>{
        const steps_content = document.getElementById('step_div');
        const project_name = item[0];
        const project_steps = Storage.read(item[0]).projectSteps
        const render_project= `
                            <div class="allsteps_title d-flex justify-content-center align-items-center mt5">
                                <span>${project_name}</span>
                            </div>   
        `
        steps_content.innerHTML += render_project
        const keys_ = Object.keys(project_steps)
        for (var i = 0; i < Object.keys(project_steps).length; i++) {
            
            show_step(project_steps[keys_[i]])
            
        }
        setListeners()
        
    })
    
    
    
}
export default allsteps

    
    