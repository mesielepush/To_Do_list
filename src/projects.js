
const Project = ((name, description) =>{
    const projectName = name;
    const projectDescription = description;
    const projectSteps = [];
    
    const addStep = (step) => {
        step.stepProject = name;
        projectSteps.push(step)
    };
    return {
        projectName,
        projectSteps,
        projectDescription,
        addStep,
    }
})();
export default Project