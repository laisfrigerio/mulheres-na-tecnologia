export interface CardItem {
  dataCategory?: string;
  cardLink: string;
  cardImage?: {
    imageSrc: string;
    imageAlt: string;
  };
  cardTag?: string;
  cardTitle: string;
  cardDescription?: string;
  cardMetaData?: string;
}
