import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import { projects } from '../../data/projects';
import attributes from './attributes.json';
import { ProjectCard } from './ProjectCard';

export default { title: 'ProjectCard' };

export function Usage() {
  return (
    <StoryWrapper
      attributes={attributes}
      component={ProjectCard}
      props={{ project: projects[0] }}
    />
  );
}
