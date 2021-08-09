import styled from 'styled-components';
import { SectionContainer } from '../styledComponents';
import { Button } from '../reusable';
import { img1, img2, img3 } from '../../img';

const Info = () => {
  return (
    <Container>
      <TextContainer>
        <Heading>Why should you have a cat?</Heading>
        <Text>
          Having a cat around you can actually trigger the release of calming chemicals in your body
          which lower your stress and anxiety levels
        </Text>
        <a
          href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3317329/'
          target='_blank'
          rel='noreferrer'
        >
          <Button text='read more' />
        </a>
      </TextContainer>
      <ImgContainer>
        <Img src={img2} />
        <Img src={img1} />
        <Img src={img3} />
      </ImgContainer>
    </Container>
  );
};

export default Info; /* 





*/ // Styling

const Container = styled(SectionContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem;

  @media (max-width: 900px) {
    padding: 10rem 3rem;
  }

  @media (max-width: 750px) {
    padding: 10rem 0;
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 45%;

  @media (max-width: 750px) {
    width: unset;
    margin-bottom: 5rem;
  }
`;

const Heading = styled.h3`
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 5.8rem;
  color: var(--text-brown);
  margin-bottom: 5rem;

  &::before {
    content: '';
    display: block;
    background-color: var(--line-brown);
    border-radius: 200px;
    height: 3.5px;
    width: 7rem;
    margin-bottom: 2rem;

    @media (max-width: 750px) {
      width: 10rem;
    }
  }

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 750px) {
    width: unset;
    font-size: 40px;
    line-height: 9rem;
    margin-bottom: 7rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: currentColor;
  margin-bottom: 5rem;

  @media (max-width: 750px) {
    font-size: 18px;
    margin-bottom: 8rem;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 500px;

  @media (max-width: 750px) {
    width: 100%;
    max-height: 700px;
  }

  @media (max-width: 460px) {
    max-height: 480px;
  }
`;

const Img = styled.img`
  display: block;

  &:nth-of-type(1) {
    max-width: 47%;
    max-height: 200px;
  }
  &:nth-of-type(2) {
    max-width: 40%;
    align-self: flex-end;
    padding: 4% 4% 0 0;
  }
  &:nth-of-type(3) {
    max-width: 45%;
    margin-bottom: 10rem;
  }
`;
