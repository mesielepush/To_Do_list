
const step = (title, description, date, priority) => {
  const stepTitle = title;
  const stepDescription = description;
  const stepDate = date;
  const stepPriority = priority;
  const stepProject = '';
  const stepStatus = true;

  return {
    stepTitle,
    stepDescription,
    stepDate,
    stepPriority,
    stepProject,
    stepStatus,
  };
};
export default step;
