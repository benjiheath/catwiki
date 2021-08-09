import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHomePageContext } from '../../contexts/HomePage/HomePageContext';
import { Spinner } from '../reusable';
import ResultBlock from './ResultBlock';
import { GiCat } from 'react-icons/gi';
import { FaSadTear } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import useReactSimpleMatchMedia from 'react-simple-matchmedia';

const Search = () => {
  const { searchLoading, cats, showModal, noResults, inputRef, handleSearch } =
    useHomePageContext();

  const isMobile = useReactSimpleMatchMedia('(max-width: 600px)');

  return (
    <SearchContainer>
      <SearchBar
        ref={inputRef}
        type='text'
        placeholder={isMobile ? 'Search' : 'Enter your breed'}
        onChange={handleSearch}
      />
      <AiOutlineSearch />

      {searchLoading && <Spinner type='modal' />}
      {showModal && (
        <ResultsModal>
          <ResultsContainer>
            {noResults ? (
              <NoResults>
                <GiCat /> No kitties found <FaSadTear />
              </NoResults>
            ) : (
              cats.map((cat: any) => <ResultBlock cat={cat} key={cat.id} />)
            )}
          </ResultsContainer>
        </ResultsModal>
      )}
    </SearchContainer>
  );
};

export default Search; /*




*/ // STYLES

const SearchContainer = styled.div`
  margin-top: 5rem;
  width: 39rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 600px) {
    margin-top: 2rem;
  }

  svg {
    fill: var(--text-brown);
    position: absolute;
    width: 1.9rem;
    height: 1.9rem;
    top: 2.25rem;
    right: 3rem;
  }
`;

const SearchBar = styled.input`
  height: 6.5rem;
  border-radius: 4rem;
  padding: 2rem 3rem; // left marg
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  width: 100%;

  &::placeholder {
    color: var(--text-brown);
  }

  &:not(:focus) {
    & ~ div {
      transform: translateY(-150rem);
    }
  }
`;

const ResultsModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 3rem;
  padding: 1rem 0 0.5rem;
  transition-delay: 80ms;

  position: absolute;
  width: 39rem;
  top: 8rem;
`;

const ResultsContainer = styled.div`
  width: 97%;

  padding: 0rem 1.5rem 0;
  max-height: 20rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    transform: translateX(-2rem);
    height: 20%;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3rem;
    border: 3px solid #bdbdbd;
  }
`;

const NoResults = styled.span`
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  border-radius: 1rem;
  transition: 0.15s;

  svg {
    margin: 0 0.5rem;
  }
`;
function useref() {
  throw new Error('Function not implemented.');
}
