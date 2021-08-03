import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

interface prop {
  cat: { name: string; id: any };
}

const ResultBlock = ({ cat }: prop) => {
  return (
    <Result to={`/breeds/${cat.id}`} onClick={() => console.log(cat.id)}>
      {cat.name}
    </Result>
  );
};

export default ResultBlock;

const Result = styled(Link)`
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  display: block;

  border-radius: 1rem;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    background-color: #f5f5f5;
  }
`;
