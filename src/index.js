import './styles/style.scss';
import empty from './empty';
import Project from './projects';
import step from './step';

const one = Project;
one.projectName = 'Popotito'
const one_step = step( 'Something to do', 'I do somethings and such', '15/05/2020','High',true)
one.addStep(one_step)
console.log(one.projectSteps)
