import { Box, Container } from '@mantine/core';

export type StoryWrapperAttributes = {
  canvas?: {
    center?: boolean;
    maxWidth?: number;
  };
};

type StoryWrapperProps<Props extends Record<string, unknown>> = {
  attributes?: StoryWrapperAttributes;
  component: React.ComponentType<Props>;
  props?: Props;
};

export function StoryWrapper<Props extends Record<string, unknown>>({
  attributes,
  component: Component,
  props,
}: StoryWrapperProps<Props>) {
  const maxWidth = attributes?.canvas?.maxWidth ?? undefined;
  const isCentered = attributes?.canvas?.center ?? false;

  return (
    <Container fluid px={0} style={{ maxWidth: maxWidth ?? 'none' }}>
      <Box
        style={{
          margin: isCentered ? '0 auto' : undefined,
          width: '100%',
        }}
      >
        <Component {...(props ?? ({} as Props))} />
      </Box>
    </Container>
  );
}
