import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

interface props {
  type: string;
  isMob?: boolean;
}

const Spinner = ({ type, isMob }: props) => {
  const styling = css`
    display: block;
    align-self: center;
    position: absolute;
    top: ${type === 'modal' ? '9rem' : '50%'};
    left: ${type === 'general' && '50%'};
    transform: ${type === 'general' && 'translate(-50%, -50%)'};
    top: ${isMob && '20rem'};
  `;

  const determineColor = () => {
    if (type === 'general' || isMob) {
      return '#4D270C';
    }
    if (type === 'modal' && !isMob) {
      return 'white';
    }
  };

  return <BeatLoader css={styling} color={type === 'general' || isMob ? '#4D270C' : 'white'} />;
};

export default Spinner;
