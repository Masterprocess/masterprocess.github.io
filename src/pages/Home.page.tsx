import {
  AspectRatio,
  Badge,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { SiteLayout } from "../layout/SiteLayout";
import { GetInTouch } from "../components/GetInTouch/GetInTouch";
import { HeroTitle } from "../components/HeroTitle/HeroTitle";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section id="top">
        <HeroTitle />
      </section>

      <Divider my="xl" />

      {/* ABOUT */}
      <section id="about">
        <Container py="xl">
          <Paper withBorder radius="lg" p={{ base: "lg", md: "xl" }}>
            <Grid gutter={{ base: "lg", md: "xl" }} align="center">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Paper radius="lg" p={6} withBorder>
                  <AspectRatio ratio={4 / 5}>
                    <Image
                      src="/headshot.png"
                      alt="Zoe Rackley headshot"
                      radius="md"
                      fit="cover"
                    />
                  </AspectRatio>
                </Paper>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 7 }}>
                <Stack gap="md">
                  <div>
                    <Title order={1}>Zoe Rackley</Title>
                    <Text size="lg" fw={500} mt={4}>
                      I design and build systems that make complex products feel obvious.
                    </Text>
                  </div>

                  <Stack gap="sm">
                    <Text c="dimmed">
                      I’m a product-focused designer and developer with a bias toward clarity,
                      durability, and real-world constraints. I specialize in untangling complexity
                      and turning it into interfaces people can actually use.
                    </Text>

                    <Text c="dimmed">
                      My work sits at the intersection of design systems, UX strategy, and
                      implementation. I’m most effective when working end-to-end: from shaping the
                      problem through shipping something that lasts.
                    </Text>
                  </Stack>

                  <Group gap={8} mt={4}>
                    <Badge variant="light">Product design</Badge>
                    <Badge variant="light">Design systems</Badge>
                    <Badge variant="light">React</Badge>
                    <Badge variant="light">UX strategy</Badge>
                  </Group>

                  <Group mt="md">
                    <Button component="a" href="#contact">
                      Work with me
                    </Button>
                    <Button variant="outline" component="a" href="/resume.pdf">
                      View résumé
                    </Button>
                  </Group>
                </Stack>
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </section>

      <Divider my="xl" />

      {/* PROJECTS */}
      <section id="projects">
        <Container py="xl">
          <Group justify="space-between" align="flex-end">
            <div>
              <Title order={2}>Projects</Title>
              <Text c="dimmed" mt={4}>
                Selected work. Short descriptions now; link out to case studies later.
              </Text>
            </div>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} mt="lg" spacing="lg">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </SimpleGrid>
        </Container>
      </section>

      <Divider my="xl" />

      {/* CONTACT */}
      <section id="contact">
        <Container py="xl">
          <GetInTouch />
        </Container>
      </section>
    </SiteLayout>
  );
}
