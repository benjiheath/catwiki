import styled from "styled-components";
import { ReactComponent as logo } from "../../img/CatwikiLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <Text>
        <Copyright>&copy;</Copyright> created by &nbsp;
        <Username href="https://github.com/benjiheath" target="_blank">
          Ben Heath
        </Username>
        &nbsp; - &nbsp; devChallenges.io 2021
      </Text>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  padding: var(--section-pad);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  width: 100%;
  height: 10rem;
  border-top-left-radius: 4.2rem;
  border-top-right-radius: 4.2rem;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: start;
    height: 120px;
  }
`;

const Logo = styled(logo)`
  path {
    fill: white;
  }

  @media (max-width: 750px) {
    height: 30px;
    width: 80px;
  }
`;

const Text = styled.p`
  color: white;
  font-weight: 400;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`;

const Copyright = styled.span`
  font-weight: 400;
  font-size: 2.4rem;
  margin-right: 1.5rem;
`;

const Username = styled.a`
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    text-shadow: 0px 0px 10px white;
  }
`;
