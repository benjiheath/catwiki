export interface LooseObject {
  [key: string]: any;
}

//*************** CONTEXT

export type Timeout = { current: NodeJS.Timeout | null };

export interface ProviderProps {
  children: React.ReactNode;
}

// homepage context

type SimpleDispatcher = () => void;
type BoolDispatcher = (value: boolean) => void;

interface HomePageDispatchers {
  setCats: (value: NameAndId[]) => void;
  setTopVisits: (value: ParsedCat[]) => void;
  successfulSearch: (value: NameAndId[]) => void;
  initSearch: SimpleDispatcher;
  inputIsEmpty: SimpleDispatcher;
  noResultsHandler: SimpleDispatcher;
  setLoading: BoolDispatcher;
  setNoResults: BoolDispatcher;
  setSearchLoading: BoolDispatcher;
  setShowModal: BoolDispatcher;
}

interface HomePageMisc {
  handleSearch: () => void;
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

interface HomePageState {
  cats: NameAndId[] | null;
  loading: boolean;
  noResults: boolean;
  searchLoading: boolean;
  showModal: boolean;
  topVisits: null | ParsedCat[];
}

export type HomeContext = HomePageDispatchers & HomePageMisc & HomePageState;
export type useHomeCtx = () => HomeContext;

// cat profile page context

export interface CatProfContext {
  data: ParsedCat;
  loading: boolean;
  getBreedDataHandler: (id: string) => void;
}
export type useCatProfContext = () => CatProfContext;

//*************** API/STATE DATA

export interface NameAndId {
  name: string;
  id: string;
}

export interface Breed {
  id: number;
  breed: string;
  visits?: number;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
}

export interface Cat {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Attributes {
  [key: string]: number;
}

export type ParsedCat = Pick<
  Breed,
  'name' | 'id' | 'description' | 'temperament' | 'origin' | 'life_span'
> & {
  attributes: Attributes[];
} & { img: string; images: string[]; visits?: number };
