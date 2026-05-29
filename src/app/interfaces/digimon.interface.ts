import { DigimonImage } from './digimon.interface';

export interface DigimonLevel {
  id: number;
  level: string;
}

export interface Digimon {
  id: number;
  name: string;
  image: DigimonImage;
  levels: DigimonLevel[];
}

export interface DigimonResponse {
  pageable: {
    currentPage: number;
    elementsOnPage: number;
    totalElements: number;
    totalPages: number;
    nextPage: string | null;
    previousPage: string | null;
  };
  content: Digimon[];
}