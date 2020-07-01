import step from './step'
import Storage from './storage'
const allsteps = () =>{
    const content = document.getElementById('main');
    content.innerHTML ='';
    const template = `
            <div class="step_div" id='step_div'>
                <div class="allsteps_title d-flex justify-content-center align-items-center">
                    <span>Every Single Step</span>
                </div>
                <div class="single_step d-flex align-items-center" style='margin-bottom: 3rem;'>
                    <div class="project_name_fix d-flex justify-content-center align-items-center">Project</div>
                    <div class="step_name_fix d-flex justify-content-center align-items-center">Step</div>
                    <div class="erase_link d-flex align-items-center">
                        <svg width="32" height="32" xmlns="">

                            <path id="svg_1" fill-rule="evenodd" fill="#333333" d="m29.98,6.819c-0.096,-1.57 -1.387,-2.816 -2.98,-2.816l-3,0l0,-1l0,-0.002c0,-1.657 -1.344,-3 -3,-3l-10,0c-1.657,0 -3,1.343 -3,3l0,0.001l0,1l-3,0c-1.595,0 -2.885,1.246 -2.981,2.816l-0.019,0l0,1.183l0,1c0,1.104 0.896,2 2,2l0,0l0,17c0,2.209 1.791,4 4,4l16,0c2.209,0 4,-1.791 4,-4l0,-17l0,0c1.104,0 2,-0.896 2,-2l0,-1l0,-1.182l-0.02,0zm-19.98,-3.817c0,-0.553 0.447,-1 1,-1l10,0c0.553,0 1,0.447 1,1l0,1l-12,0l0,-1zm16,25c0,1.102 -0.898,2 -2,2l-16,0c-1.103,0 -2,-0.898 -2,-2l0,-17l20,0l0,17zm2,-20.001l0,1l-24,0l0,-1l0,-0.999c0,-0.553 0.447,-1 1,-1l22,0c0.553,0 1,0.447 1,1l0,0.999z" clip-rule="evenodd"/>
                            <path id="svg_2" fill-rule="evenodd" fill="#333333" d="m9,28.006l2,0c0.553,0 1,-0.447 1,-1l0,-13c0,-0.553 -0.447,-1 -1,-1l-2,0c-0.553,0 -1,0.447 -1,1l0,13c0,0.553 0.447,1 1,1zm0,-14.001l2,0l0,13l-2,0l0,-13z" clip-rule="evenodd"/>
                            <path id="svg_3" fill-rule="evenodd" fill="#333333" d="m15,28.006l2,0c0.553,0 1,-0.447 1,-1l0,-13c0,-0.553 -0.447,-1 -1,-1l-2,0c-0.553,0 -1,0.447 -1,1l0,13c0,0.553 0.447,1 1,1zm0,-14.001l2,0l0,13l-2,0l0,-13z" clip-rule="evenodd"/>
                            <path id="svg_4" fill-rule="evenodd" fill="#333333" d="m21,28.006l2,0c0.553,0 1,-0.447 1,-1l0,-13c0,-0.553 -0.447,-1 -1,-1l-2,0c-0.553,0 -1,0.447 -1,1l0,13c0,0.553 0.447,1 1,1zm0,-14.001l2,0l0,13l-2,0l0,-13z" clip-rule="evenodd"/>
                            
                        </svg>
                    </div>
                    <div class="completed_link d-flex align-items-center">
                        <svg width="32" height="32" viewBox="0 0 145.4 145.4">
                            
                            <path d="M72.7,0a72.7,72.7,0,1,0,72.7,72.7A72.7,72.7,0,0,0,72.7,0Zm41.5,55.43L68.66,101.84a7.56,7.56,0,0,1-10.77,0L31.23,75a7.57,7.57,0,0,1,.08-10.74l1.17-1.14a7.56,7.56,0,0,1,10.6,0L57.66,77.59a7.57,7.57,0,0,0,10.68,0l33.82-34a7.57,7.57,0,0,1,10.72,0l1.27,1.27A7.58,7.58,0,0,1,114.2,55.43Z"/>
                            
                        </svg>
                    </div>
                    <div class="death_line_fix d-flex align-items-center">Death Line</div>
                    <div class="priority_fix d-flex justify-content-center align-items-center">Priority</div>
                </div>
                
            </div>
    `;
    
    content.innerHTML += template;
    Object.entries(localStorage).forEach((item)=>{
        const steps_content = document.getElementById('step_div');
        const project_name = item[0];
        const project_steps = Storage.read(item[0]).projectSteps
        const render_project= `
                            <div class="allsteps_title d-flex justify-content-center align-items-center">
                                <span>${project_name}</span>
                            </div>   
        `
        steps_content.innerHTML += render_project
        
        for (var i = 0; i < Object.keys(project_steps).length; i++) {
            const keys_ = Object.keys(project_steps)
            console.log('PODER CONTAGIARME:: ',project_steps[keys_[i]])
            const single_step = `
                <div class="single_step d-flex align-items-center" >
                    <div class="project_name d-flex justify-content-center align-items-center">${keys_[i]}</div>
                    <div class="step_name d-flex justify-content-center align-items-center">${project_steps[keys_[i]].stepDescription}</div>
                    <div class="erase_link d-flex align-items-center">
                        <svg width="32" height="32" xmlns="">

                            <path id="svg_1" fill-rule="evenodd" fill="#333333" d="m29.98,6.819c-0.096,-1.57 -1.387,-2.816 -2.98,-2.816l-3,0l0,-1l0,-0.002c0,-1.657 -1.344,-3 -3,-3l-10,0c-1.657,0 -3,1.343 -3,3l0,0.001l0,1l-3,0c-1.595,0 -2.885,1.246 -2.981,2.816l-0.019,0l0,1.183l0,1c0,1.104 0.896,2 2,2l0,0l0,17c0,2.209 1.791,4 4,4l16,0c2.209,0 4,-1.791 4,-4l0,-17l0,0c1.104,0 2,-0.896 2,-2l0,-1l0,-1.182l-0.02,0zm-19.98,-3.817c0,-0.553 0.447,-1 1,-1l10,0c0.553,0 1,0.447 1,1l0,1l-12,0l0,-1zm16,25c0,1.102 -0.898,2 -2,2l-16,0c-1.103,0 -2,-0.898 -2,-2l0,-17l20,0l0,17zm2,-20.001l0,1l-24,0l0,-1l0,-0.999c0,-0.553 0.447,-1 1,-1l22,0c0.553,0 1,0.447 1,1l0,0.999z" clip-rule="evenodd"/>
                            <path id="svg_2" fill-rule="evenodd" fill="#333333" d="m9,28.006l2,0c0.553,0 1,-0.447 1,-1l0,-13c0,-0.553 -0.447,-1 -1,-1l-2,0c-0.553,0 -1,0.447 -1,1l0,13c0,0.553 0.447,1 1,1zm0,-14.001l2,0l0,13l-2,0l0,-13z" clip-rule="evenodd"/>
                            <path id="svg_3" fill-rule="evenodd" fill="#333333" d="m15,28.006l2,0c0.553,0 1,-0.447 1,-1l0,-13c0,-0.553 -0.447,-1 -1,-1l-2,0c-0.553,0 -1,0.447 -1,1l0,13c0,0.553 0.447,1 1,1zm0,-14.001l2,0l0,13l-2,0l0,-13z" clip-rule="evenodd"/>
                            <path id="svg_4" fill-rule="evenodd" fill="#333333" d="m21,28.006l2,0c0.553,0 1,-0.447 1,-1l0,-13c0,-0.553 -0.447,-1 -1,-1l-2,0c-0.553,0 -1,0.447 -1,1l0,13c0,0.553 0.447,1 1,1zm0,-14.001l2,0l0,13l-2,0l0,-13z" clip-rule="evenodd"/>
                            
                        </svg>
                    </div>
                    <div class="completed_link d-flex align-items-center">
                            <svg width="32" height="32" viewBox="0 0 145.4 145.4">
                                
                                <path d="M72.7,0a72.7,72.7,0,1,0,72.7,72.7A72.7,72.7,0,0,0,72.7,0Zm41.5,55.43L68.66,101.84a7.56,7.56,0,0,1-10.77,0L31.23,75a7.57,7.57,0,0,1,.08-10.74l1.17-1.14a7.56,7.56,0,0,1,10.6,0L57.66,77.59a7.57,7.57,0,0,0,10.68,0l33.82-34a7.57,7.57,0,0,1,10.72,0l1.27,1.27A7.58,7.58,0,0,1,114.2,55.43Z"/>
                                
                            </svg>
                        </div>
                        <div class="death_line_fix d-flex align-items-center">Death Line</div>
                        <div class="priority_fix d-flex justify-content-center align-items-center">Priority</div>
                    </div>
                    `
            steps_content.innerHTML += single_step
        }
        
        
    }) 
    
}
export default allsteps