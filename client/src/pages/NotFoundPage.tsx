import styled from 'styled-components';
import { Spinner } from '../components/reusable';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(`Sowwy, I couldn't find that page!`);
  const [finito, setFinito] = useState(false);
  const [imgUrl, setImgUrl] = useState('https://cdn2.thecatapi.com/images/UCifm-g71.jpg');

  useEffect(() => {
    const fn = () => {
      setTimeout(() => {
        setLoading(true);
        setMsg('wait, let me double check ....');
        setImgUrl('https://i.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.webp');

        setTimeout(() => {
          setLoading(false);
          setMsg(`Nope still not there =(`);
          setFinito(true);
          setImgUrl('https://cdn2.thecatapi.com/images/UCifm-g71.jpg');
        }, 3000);
      }, 2000);
    };

    fn();
  }, []);

  return (
    <Container>
      <Img src={imgUrl} />
      {loading && <Spinner type='general' nf={true} />}
      <Msg>{msg}</Msg>
      <Back to='/' f={finito}>
        Click here to return home
      </Back>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  position: absolute;
  top: 40vw;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 40vw;
  max-width: 1100px;
`;

const Msg = styled.p`
  margin-top: 5vw;
  font-size: 2vw;
  color: var(--text-brown);
`;

const Back = styled(Link)<{ f: boolean }>`
  margin-top: 30px;
  font-size: 1vw;
  background-color: var(--text-brown);
  color: white;
  text-decoration: none;
  padding: 3px 5px;
  transition: opacity 1s, transform 1s, box-shadow 1s;
  border: 1px solid transparent;

  opacity: ${({ f }) => (f ? '1' : '0')};
  transform: ${({ f }) => (f ? 'scale(1.25)' : 'none')};
  box-shadow: ${({ f }) => (f ? '7px 7px 3px 0px #a3a3a3' : '0px 0px 1px 0px white')};

  &:hover {
    transition: all 0.3s ease;
    background-color: white;
    color: var(--text-brown);
    border: 1px solid var(--text-brown);
    transform: translateY(-3px) scale(1.25);
    box-shadow: 11px 11px 5px 0px #a3a3a3;
  }
`;
