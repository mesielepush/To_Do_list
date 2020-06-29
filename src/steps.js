const steps = ( project, title, description, date,priority,status) => {
                    const stepTitle = title;
                    const stepDescription = description;
                    const stepDate = date;
                    const stepPriority = priority;
                    const stepProject = project;
                    const stepStatus = status;
                
                return {
                    stepTitle,
                    stepDescription,
                    stepDate, stepPriority,
                    stepProject,
                    stepStatus
                };
            }
export default steps
