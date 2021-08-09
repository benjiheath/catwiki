import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  cat: { name: string; id: string };
  mob: boolean;
}

const ResultBlock = ({ cat, mob }: Props) => {
  return (
    <Result to={`/breeds/${cat.id}`} mob={mob}>
      {cat.name}
    </Result>
  );
};

export default ResultBlock;

const Result = styled(Link)<{ mob: boolean }>`
  padding: 1rem 1.5rem;
  top: ${({ mob }) => (mob ? '1.5rem 1.5rem' : '1rem 1.5rem')};

  font-size: 1.6rem;
  font-size: ${({ mob }) => mob && '18px'};
  margin-bottom: ${({ mob }) => mob && '16px'};

  display: block;

  border-radius: 1rem;
  cursor: pointer;
  transition: ${({ mob }) => (mob ? '0s' : '0.15s')};

  &:hover {
    background-color: #f5f5f5;
  }
`;
