import { IconHeart, IconExternalLink } from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import type { Project } from "../../data/projects";
import classes from "./ProjectCard.module.css";

type Props = {
  project: Project;
  onLike?: (slug: string) => void; // optional hook for later
};

export function ProjectCard({ project, onLike }: Props) {
  const badges = project.badges ?? [];

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      {project.imageSrc ? (
        <Card.Section>
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            height={180}
          />
        </Card.Section>
      ) : null}

      <Card.Section className={classes.section} mt="md">
        <Group justify="space-between" align="flex-start">
          <Stack gap={2} style={{ flex: 1 }}>
            <Text fz="lg" fw={600} lineClamp={1}>
              {project.title}
            </Text>
            {project.subtitle ? (
              <Text size="sm" c="dimmed" lineClamp={1}>
                {project.subtitle}
              </Text>
            ) : null}
          </Stack>

          {project.featured ? (
            <Badge size="sm" variant="light">
              Featured
            </Badge>
          ) : null}
        </Group>

        <Text fz="sm" mt="xs" lineClamp={3}>
          {project.description}
        </Text>
      </Card.Section>

      {badges.length ? (
        <Card.Section className={classes.section}>
          <Text mt="md" className={classes.label} c="dimmed">
            Highlights
          </Text>
          <Group gap={7} mt={5}>
            {badges.map((b) => (
              <Badge
                variant="light"
                key={b.label}
                leftSection={b.emoji ? b.emoji : undefined}
              >
                {b.label}
              </Badge>
            ))}
          </Group>
        </Card.Section>
      ) : null}

      <Group mt="xs">
        <Button
          radius="md"
          style={{ flex: 1 }}
          component="a"
          href={project.primaryLink.href}
          target={project.primaryLink.external ? "_blank" : undefined}
          rel={project.primaryLink.external ? "noreferrer" : undefined}
          rightSection={project.primaryLink.external ? <IconExternalLink size={16} /> : undefined}
        >
          {project.primaryLink.label}
        </Button>
      </Group>
    </Card>
  );
}
