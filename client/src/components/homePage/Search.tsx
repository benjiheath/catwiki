import styled from 'styled-components';
import useReactSimpleMatchMedia from 'react-simple-matchmedia';
import { useState } from 'react';
import { useHomePageContext } from '../../contexts/HomePage/HomePageContext';
import { Spinner } from '../reusable';
import ResultBlock from './ResultBlock';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiCat } from 'react-icons/gi';
import { FaSadTear } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

const Search = () => {
  const { searchLoading, cats, showModal, noResults, inputRef, handleSearch } =
    useHomePageContext();

  const [mobileModal, setMobileModal] = useState(false);
  const isMobile = useReactSimpleMatchMedia('(max-width: 600px)');

  const openMobileModal = () => {
    isMobile && setMobileModal(true);
  };

  console.log('CATS:', cats);

  return (
    <SearchContainer mob={mobileModal}>
      {mobileModal && (
        <Xcontainer onClick={() => setMobileModal(false)}>
          <CgClose />
        </Xcontainer>
      )}
      <SearchBar
        ref={inputRef}
        type='text'
        placeholder={isMobile ? 'Search' : 'Enter your breed'}
        onChange={handleSearch}
        onClick={openMobileModal}
        mob={mobileModal}
      />
      <AiOutlineSearch />

      {searchLoading && <Spinner type='modal' isMob={mobileModal} />}
      {showModal && (
        <ResultsModal mob={mobileModal}>
          <ResultsContainer mob={mobileModal}>
            {noResults ? (
              <NoResults mob={mobileModal}>
                <GiCat /> No kitties found <FaSadTear />
              </NoResults>
            ) : (
              cats.map((cat: any) => <ResultBlock cat={cat} key={cat.id} mob={mobileModal} />)
            )}
          </ResultsContainer>
        </ResultsModal>
      )}
    </SearchContainer>
  );
};

export default Search; /*











Styling */

const SearchContainer = styled.div<{ mob: boolean }>`
  margin-top: 5rem;
  width: 39rem;
  min-width: ${({ mob }) => mob && '100vw !important'};
  min-height: ${({ mob }) => mob && '100vh'};
  top: ${({ mob }) => mob && 0};
  left: ${({ mob }) => mob && 0};
  z-index: ${({ mob }) => mob && '1000'};
  background-color: ${({ mob }) => mob && 'white'};
  display: flex;
  flex-direction: column;
  position: ${({ mob }) => (mob ? 'absolute' : 'relative')};

  @media (max-width: 600px) {
    margin-top: 2rem;
    min-width: 94px;
    width: 26vw;
  }

  & > svg {
    fill: var(--text-brown);
    position: absolute;
    width: 1.9rem;
    height: 1.9rem;
    top: ${({ mob }) => (mob ? '71px !important' : '2.25rem')};
    right: ${({ mob }) => (mob ? '40px !important' : '3rem')};

    right: 3rem;

    @media (max-width: 600px) {
      top: 11px;
      width: ${({ mob }) => mob && '20px'};
      height: ${({ mob }) => mob && '20px'};
    }
  }
`;

const SearchBar = styled.input<{ mob: boolean }>`
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
      transform: ${({ mob }) => !mob && 'translateY(-150rem)'};
    }
  }

  @media (max-width: 600px) {
    height: 33px;
    font-size: ${({ mob }) => (mob ? '18px' : '12px')};
    border: ${({ mob }) => mob && '1px solid black'};
    margin-top: ${({ mob }) => mob && '20px'};
    height: ${({ mob }) => mob && '45px'};
    width: ${({ mob }) => mob && '90%'};
    align-self: ${({ mob }) => mob && 'center'};

    &:focus {
    }
  }
`;

const ResultsModal = styled.div<{ mob: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 3rem;
  padding: 1rem 0 0.5rem;
  transition-delay: ${({ mob }) => (mob ? 'none' : '85ms')};

  position: absolute;

  width: ${({ mob }) => (mob ? '100vw' : '39rem')};
  top: ${({ mob }) => (mob ? '21rem' : '8rem')};
  align-self: ${({ mob }) => mob && 'center'};

  @media (max-width: 600px) {
  }
`;

const ResultsContainer = styled.div<{ mob: boolean }>`
  width: 97%;

  padding: 0rem 1.5rem 0;
  padding: ${({ mob }) => (mob ? '0 26px' : '0rem 1.5rem 0')};
  max-height: ${({ mob }) => (mob ? 'unset' : '20rem')};

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

const NoResults = styled.span<{ mob: boolean }>`
  padding: 1rem 1.5rem;
  font-size: ${({ mob }) => (mob ? '18px' : '1.6rem')};

  display: flex;
  align-items: center;

  border-radius: 1rem;

  svg {
    margin: 0 0.5rem;
    margin: ${({ mob }) => (mob ? '0 1rem' : ' 0 0.5rem')};
  }
`;

const Xcontainer = styled.div`
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  height: 40px;
  width: 40px;
  align-self: flex-end;
  margin-right: 20px;

  & svg {
    position: initial;
    height: 18px;
    width: 18px;
  }
`;
