import styled from "styled-components";
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

const Image = styled.img`
    height: 30px;
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Image src="./images/logo.png" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          {/* Social icons */}
          <SocialIcons />
        </Flex>

        <p>&copy; 2023 Admiral Simo. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
