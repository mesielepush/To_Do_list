import project from './projects'
import Storage from './storage'
import navbar from './navbar'
const save_project = ()=>{
    function cleanForm() {
        const fields = ['project-name', 'project-description'];
        fields.forEach((item) => {
          document.querySelector(`#${item}`).value = '';
        });
      }
    
      const one = project;
      const p_name = document.querySelector('#project-name').value;
      const p_description = document.querySelector('#project-description').value;
      one.projectName = p_name;
      one.projectDescription = p_description;
      cleanForm();
      Storage.create(one.projectName,one)
      console.log('one; ',one);
      console.log('console log NAME: ',one.projectName)
      navbar()
    
};


export default save_project