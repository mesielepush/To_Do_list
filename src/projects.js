
const Project = ((name) =>{
    const projectName = name;
    const projectSteps = [];
    
    const addStep = (step) => {
        step.stepProject = name
        projectSteps.push(step)
    };
    return {
        projectName,
        projectSteps,
        addStep,
    }
})();
export default Project