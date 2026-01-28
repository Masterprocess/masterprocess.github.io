import { AppShell, Container, Group, Anchor, Title, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { HeaderSimple } from "../components/HeaderSimple/HeaderSimple";
import { FooterSimple } from "../components/FooterSimple/FooterSimple";

type Props = { children: React.ReactNode };

export function SiteLayout({ children }: Props) {
  return (
    <AppShell

    >
      <AppShell.Header>
        <HeaderSimple />
      </AppShell.Header>

      <AppShell.Main>
        {children}
        <footer>
          <FooterSimple />
        </footer>
      </AppShell.Main>
    </AppShell>
  );
}
