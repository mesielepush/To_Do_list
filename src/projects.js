const { default: steps } = require("./steps");

const Project = (name) =>{
    const projectName = name;
    const projectSteps = [];
    
    const addStep = (step) => {
        projectSteps.push(step)
    };
    return {
        projectName,
        projectSteps,
        addStep,
    }
}
export default Project