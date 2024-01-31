import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function Component() {
  return (
    <Footer container className="bg-blue-700 rounded-none shadow-none">
      <FooterCopyright
        className="text-gray-200"
        href="#"
        by="Datagem"
        year={2024}
      />
      <FooterLinkGroup className="text-gray-200">
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/login">Log In</FooterLink>
        <FooterLink href="/signup">Sign Up</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
