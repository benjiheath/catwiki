import styled from 'styled-components';
import Search from './Search';
import { HeroImgL, HeroImgM, HeroImgS } from '../../img';
import { ReactComponent as logo } from '../../img/CatwikiLogo.svg';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Heading>Get to know more about your cat breed</Heading>
      <Search />
    </Container>
  );
};

export default Header; /*








Styling */

const Container = styled.header`
  width: 100%;
  height: var(--header-half);
  background-image: url(${HeroImgL});
  background-position: center;
  background-size: cover;
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;

  padding: var(--section-pad);
  padding-bottom: 5rem;
  margin-top: 3.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1300px) {
    background-image: url(${HeroImgM});
  }

  @media (max-width: 600px) {
    background-image: url(${HeroImgS});

    height: 200px;
    padding-bottom: 0;
  }
`;
const Heading = styled.h1`
  font-size: 2.4rem;
  color: white;
  font-weight: 500;
  width: 39rem;

  @media (max-width: 600px) {
    width: 30rem;
    margin: 1rem 0;
    font-size: 2.2rem;
  }
`;

const Logo = styled(logo)`
  width: 30rem;
  height: 12rem;

  path {
    fill: white;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 30px;
  }
`;
