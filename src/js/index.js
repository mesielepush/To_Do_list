import '../styles/style.scss';
import Storage from './storage';
import navbar from './navbar';
import Project from './projects';

navbar();
localStorage.clear();
const stepOne = {
  stepTitle: 'Design UI',
  stepDescription: 'Make a general structure for the interface',
  stepDate: '2020-07-15',
  stepProject: 'ToDo list on pure JS',
  stepStatus: true,
  stepPriority: 'high',
};
const stepTwo = {
  stepTitle: 'General Backend',
  stepDescription: 'Create the general models like Projects and Steps',
  stepDate: '2020-07-16',
  stepProject: 'ToDo list on pure JS',
  stepStatus: true,
  stepPriority: 'moderate',
};
const stepThree = {
  stepTitle: 'Beautify interface',
  stepDescription: 'Make the interface beautiful so your work seems "profesional" as they say...',
  stepDate: '2020-07-17',
  stepProject: 'ToDo list on pure JS',
  stepStatus: true,
  stepPriority: 'low',
};

const one = Project;
one.projectName = 'ToDo THING on JS';
one.projectDescription = 'Make a To Do list on JS';
one.projectSteps = {
  'Design UI': stepOne,
  'General Backend': stepTwo,
  'Beautify interface': stepThree,
};

Storage.create(one.projectName, one);


const stepOneOne = {
  stepTitle: 'Learn the rules',
  stepDescription: "I mean... that's the least you can do",
  stepDate: '2020-07-18',
  stepProject: 'Learn to Play Go',
  stepStatus: true,
  stepPriority: 'high',
};
const stepTwoOne = {
  stepTitle: 'Check Videos',
  stepDescription: 'See other people playing, they know the how...',
  stepDate: '2020-07-19',
  stepProject: 'Learn to Play Go',
  stepStatus: true,
  stepPriority: 'low',
};
const stepThreeOne = {
  stepTitle: 'Play 10',
  stepDescription: "Play ten times online, you're going to lose, but... that's the point",
  stepDate: '2020-07-20',
  stepProject: 'Learn to Play Go',
  stepStatus: true,
  stepPriority: 'high',
};

const two = Project;
two.projectName = 'Learn to Play Go';
two.projectDescription = 'This is self explanatory';
two.projectSteps = {
  'Learn the rules': stepOneOne,
  'Check Videos': stepTwoOne,
  'Play 10': stepThreeOne,
};

Storage.create(two.projectName, two);