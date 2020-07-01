const showStep = (step) => {
  const content = document.getElementById('step_div');
  const colors = {
    high: 'background-color:rgba(236, 15, 15, 0.6)',
    moderate: 'background-color:rgba(243, 114, 9, 0.6)',
    low: 'background-color:rgba(52, 228, 190, 0.4)',
  };
  const template = `
    <div class="single_step d-flex align-items-center">
        <div class="project_name d-flex justify-content-center align-items-center">${step.stepTitle}</div>
        <div class="step_name d-flex justify-content-center align-items-center">${step.stepDescription}</div>
        
        <div id='${step.stepTitle}' class="completed_link_fix d-flex align-items-center">
            <svg width="32" height="32" viewBox="0 0 145.4 145.4">
                
                <path d="M72.7,0a72.7,72.7,0,1,0,72.7,72.7A72.7,72.7,0,0,0,72.7,0Zm41.5,55.43L68.66,101.84a7.56,7.56,0,0,1-10.77,0L31.23,75a7.57,7.57,0,0,1,.08-10.74l1.17-1.14a7.56,7.56,0,0,1,10.6,0L57.66,77.59a7.57,7.57,0,0,0,10.68,0l33.82-34a7.57,7.57,0,0,1,10.72,0l1.27,1.27A7.58,7.58,0,0,1,114.2,55.43Z"/>
                
            </svg>
        </div>
        <div class="death_line_fix d-flex justify-content-center align-items-center">${step.stepDate}</div>
        <div class="priority d-flex justify-content-center align-items-center" style="${colors[step.stepPriority]}">${step.stepPriority}</div>
    </div>
    
    `;
  content.innerHTML += template;
};
export default showStep;
