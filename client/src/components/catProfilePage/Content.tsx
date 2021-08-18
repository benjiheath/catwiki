import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCatProfileContext } from '../../contexts/CatProfile/CatProfileContext';
import Attribute, { Key } from './Attribute';
import { useHistory } from 'react-router';
import { LooseObject } from '../../types';

const Content = () => {
  const { loading, data, getBreedDataHandler } = useCatProfileContext();

  const history = useHistory();

  const { id } = useParams<{ id: string }>();

  const updateDbVisits = async () => {
    try {
      const url =
        process.env.REACT_APP_ENV === 'dev'
          ? 'http://localhost:3001'
          : 'https://catwiki-api-bjd.herokuapp.com';

      const {
        data: { status },
      } = await axios.post(`${url}/visits/${id}`);

      if (status.name === 'error') {
        history.push({ pathname: '/404' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBreedDataHandler(id);
    updateDbVisits();
  }, []);

  return (
    <>
      {data && !loading && (
        <Container>
          <Img src={data.img} />
          <CatInfoContainer>
            <Name>{data.name}</Name>
            <Description>{data.description}</Description>
            <Detail>
              <Key>Temperament:</Key>
              <DetailValue>{data.temperament}</DetailValue>
            </Detail>
            <Detail>
              <Key>Origin:</Key>
              <DetailValue>{data.origin}</DetailValue>
            </Detail>
            <Detail>
              <Key>Life Span:</Key>
              <DetailValue>{data.life_span}&nbsp;years</DetailValue>
            </Detail>
            {data.attributes.map((attr: LooseObject, idx: number) => (
              <Attribute key={idx} attr={attr} />
            ))}
          </CatInfoContainer>
        </Container>
      )}
    </>
  );
};

export default Content; /*





*/ // Styling

const Container = styled.div`
  margin: 3.5rem auto;
  width: 95%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1300px) {
    margin: 3.5rem 0;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Img = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
  border-radius: 24px;

  @media (max-width: 1300px) {
    width: calc(150px + 12vw);
    height: calc(150px + 12vw);
  }
`;

const CatInfoContainer = styled.div`
  width: 55%;

  @media (max-width: 1300px) {
    width: 60%;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
  }
`;

const Name = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  color: var(--text-brown);
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text-brown);
  margin-bottom: 3rem;

  @media (max-width: 750px) {
    text-align: justify;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 6rem;
  }
`;

const Detail = styled.div`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  display: flex;
`;

const DetailValue = styled.p`
  font-weight: 500;
  margin-left: 0.5rem;
`;
