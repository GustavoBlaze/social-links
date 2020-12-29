import React from "react";

import {
  Container,
  Avatar,
  Name,
  Description,
  ButtonsContainer,
  Button,
} from "./styles";

import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";

import profilePicture from "../../assets/img/profile-picture.jpeg";

import GlobalStyles from "../../styles/global";

function Home() {
  return (
    <>
      <Container>
        <Avatar src={profilePicture} />
        <Name>Luiz Gustavo</Name>
        <Description>
          Desenvolvedor Front-end React | Node.js | React Native
        </Description>

        <ButtonsContainer>
          <Button style={{animationDelay: '0s'}} className="instagram" href="https://www.instagram.com/dev_luiz/">
            <Instagram />
            <p>Instagram</p>
          </Button>

          <Button style={{animationDelay: '.3s'}} className="github" href="https://github.com/GustavoBlaze">
            <Github />
            <p>Github</p>
          </Button>

          <Button style={{animationDelay: '.6s'}} className="linkedin" href="https://www.linkedin.com/in/luiz-gustavo-avelino/">
            <Linkedin />
            <p>Linkedin</p>
          </Button>

          <Button style={{animationDelay: '.9s'}} className="email" href="mailto:gustavoblaze1524@gmail.com">
            <Email />
            <p>Email</p>
          </Button>
        </ButtonsContainer>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default Home;
