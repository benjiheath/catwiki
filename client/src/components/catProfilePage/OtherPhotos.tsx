import styled from "styled-components";
import Photo from "./Photo";
import { useCatProfileContext } from "../../contexts/CatProfile/CatProfileContext";

const OtherPhotos = () => {
  const { data, loading } = useCatProfileContext();

  return (
    <>
      {data && !loading && (
        <Container>
          <Heading>Other photos</Heading>
          <Gallery>
            {data.images.map((img: any, i: any) => (
              <Photo img={img} key={i} />
            ))}
          </Gallery>
        </Container>
      )}
    </>
  );
};

export default OtherPhotos;

const Container = styled.div`
  width: 100%;
  margin-bottom: 8rem;
`;

const Heading = styled.h2`
  font-size: 3.6rem;
  font-weight: 600;
  color: var(--text-brown);
  margin-bottom: 3rem;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  grid-auto-rows: min-content;
  grid-gap: 4rem;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fit, minmax(205px, 1fr));
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
`;
