export interface DigimonImage {
  href: string;
}

export interface DigimonLevel {
  id: number;
  level: string;
}

export interface DigimonAttribute {
  id: number;
  attribute: string;
  color: string;
}

export interface DigimonType {
  id: number;
  type: string;
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