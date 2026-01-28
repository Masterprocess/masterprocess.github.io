import { Button, Container, Group, Text } from "@mantine/core";
import { GithubIcon } from "@mantinex/dev-icons";
import classes from "./HeroTitle.module.css";

export function HeroTitle() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
        Hi, I’m{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          inherit
        >
          Zoe Rackley
        </Text>
        .
        <br />
        I design systems that make complex products feel obvious.
      </h1>

      <Text className={classes.description} c="dimmed">
        Product design, design systems, and front-end implementation focused on clarity,
        durability, and shipping work that lasts.
      </Text>

        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            component="a"
            href="#projects"
          >
            View projects
          </Button>

          <Button
            component="a"
            href="https://github.com/Masterprocess"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
