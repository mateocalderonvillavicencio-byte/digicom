export interface Digimon {
  id: number;
  name: string;
  href: string;
  image: string;
  levels?: DigimonLevel[];
  types?: DigimonType[];
  attributes?: DigimonAttribute[];
}

export interface DigimonImage {
  href: string;
  transparent: boolean;
}

export interface DigimonLevel {
  id: number;
  level: string;
}

export interface DigimonType {
  id: number;
  type: string;
}

export interface DigimonAttribute {
  id: number;
  attribute: string;
}

export interface DigimonDetail extends Digimon {
  images: DigimonImage[];
  descriptions?: DigimonDescription[];
}

export interface DigimonDescription {
  origin: string;
  language: string;
  description: string;
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