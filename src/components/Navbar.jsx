import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input } from "@nextui-org/react";
import { useState } from "react";
import { SearchIcon } from "./SearchIcon.jsx";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    "Project Marketplace",
    "Capstone Project Sourcing",
    "About",
    "Blog",
    "Get Started"
  ];

  const styles = {
    secondaryButton: {
      backgroundColor: '#00d084',
      color: '#fff',
      padding: '0.75rem 2rem',
    },
    navbarBrand: {
      padding: '0 0.5rem',
      fontWeight: 'bold',
      color: 'lime',
      fontSize: '1.25rem',
    },
    navbarMenuToggle: {
      color: "green"
    },
    navbarContentCenter: {
      display: 'flex',
      gap: '1rem',
    },
    linkText: {
      fontSize: '0.875rem',
      color: 'inherit',
    },
    navbarMenu: {
      backgroundColor: '#201823',
    },
    navbarMenuItemLink: {
      color: 'white',
      width: '100%',
      fontSize: '1.125rem',
    }
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          style={styles.navbarMenuToggle}
        />
          <div className="cursor-pointer m-0 p-0 hover:scale-[1.05] transition-transform duration-200 ease-in-out" onClick={() => {navigate("/")}} style={styles.navbarBrand}>KAPSTONE</div>
      </NavbarContent>

      <NavbarContent className="items-center" justify="end">
        <NavbarItem>
          <Button color="success" href="#" auto onClick={() => {navigate("/login")}} css={styles.secondaryButton}>
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu style={styles.navbarMenu}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              style={styles.navbarMenuItemLink}
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
