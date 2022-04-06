import { Navbar } from "@mantine/core";
import { NavBarLinks } from "./NavBarLinks";
import { NavBarUser } from "./NavBarUser";

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavBar(props: Props) {
  const { opened, setOpened } = props;

  return (
    <Navbar
      p="md"
      // Breakpoint at which navbar will be hidden if hidden prop is true
      hiddenBreakpoint="sm"
      // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
      hidden={!opened}
      // when viewport size is less than theme.breakpoints.sm navbar width is 100%
      // viewport size > theme.breakpoints.sm – width is 300px
      // viewport size > theme.breakpoints.lg – width is 400px
      width={{ sm: 275, lg: 300 }}
    >
      <Navbar.Section grow mt="md">
        <NavBarLinks setOpened={setOpened} />
      </Navbar.Section>

      <Navbar.Section>
        <NavBarUser />
      </Navbar.Section>
    </Navbar>
  );
}
