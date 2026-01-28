import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { ProjectCard } from './ProjectCard';

export default { title: 'ProjectCard' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={ProjectCard} />;
}
