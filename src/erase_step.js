import Storage from './storage'
import show_project from './show_project'
const erase_step = (step,project)=>{
    delete project.projectSteps[step.stepTitle],
    Storage.update(project.projectName,project),
    show_project(project.projectName)
}
export default erase_step
