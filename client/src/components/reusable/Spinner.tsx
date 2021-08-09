import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

interface props {
  type: string;
  isMob?: boolean;
  nf?: boolean;
}

const Spinner = ({ type, isMob, nf }: props) => {
  const styling = css`
    display: block;
    align-self: center;
    position: absolute;
    top: ${type === 'modal' ? '9rem' : '50%'};
    left: ${type === 'general' && '50%'};
    transform: ${type === 'general' && 'translate(-50%, -50%)'};
    top: ${isMob && '20rem'};
    top: ${nf && '43vw'};
  `;

  return <BeatLoader css={styling} color={type === 'general' || isMob ? '#4D270C' : 'white'} />;
};

export default Spinner;
