export interface LooseObject {
  [key: string]: any;
}

export type Timeout = { current: NodeJS.Timeout | null };

export interface Breed {
  id: number;
  breed: string;
  visits: number;
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

// export type ParsedCat = Pick<
//   Breed,
//   "name" | "id" | "description" | "temperament" | "origin" | "life_span"
// > & {
//   attributes: Pick<
//     Breed,
//     | "adaptability"
//     | "affection_level"
//     | "child_friendly"
//     | "grooming"
//     | "intelligence"
//     | "health_issues"
//     | "social_needs"
//     | "stranger_friendly"
//   >[];
// } & { img: string; images: string; visits: number };

export type ParsedCat = Pick<
  Breed,
  'name' | 'id' | 'description' | 'temperament' | 'origin' | 'life_span'
> & {
  attributes: Attributes[];
} & { img: string; images: string[]; visits: number };
