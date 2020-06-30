import step from './step'
const save_step = ()=>{
    function cleanForm() {
        const fields = ['step-name','step-description','death_line_step','priority_step'];
        fields.forEach((item) => {
          document.querySelector(`#${item}`).value = '';
        });
      }
    
      const one = step;
      const s_name = document.querySelector('#step-name').value;
      const s_description = document.querySelector('#step-description').value;
      const s_death_line = document.querySelector("#death_line_step").value;
      const s_priority = document.querySelector("#priority_step").value;
      one.projectName = p_name;
      one.projectDescription = p_description;
      cleanForm();
      Storage.create(one.projectName,one)
      
      navbar()
    
};


export default save_step