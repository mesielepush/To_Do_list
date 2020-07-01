
const Project = ((name, description) => {
  const projectName = name;
  const projectDescription = description;
  const projectSteps = {};

  return {
    projectName,
    projectSteps,
    projectDescription,
  };
})();
export default Project;