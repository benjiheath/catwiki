import { NextFunction, Request, Response } from 'express';

export interface ExpressAsync {
  req: Request;
  res: Response;
  next: NextFunction;
}

export interface ErrorException extends Error {
  status: string;
  statusCode: number;
}

export interface BreedFromDB {
  id: number;
  breed: string;
  visits: number;
}

// API DATA

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
