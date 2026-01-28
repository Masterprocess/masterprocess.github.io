import { axe, render } from '@/test-utils';
import attributes from './attributes.json';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  axe([<ProjectCard key="1" {...(attributes as any)} />]);

  it('renders correctly', () => {
    render(<ProjectCard {...(attributes as any)} />);
  });
});
