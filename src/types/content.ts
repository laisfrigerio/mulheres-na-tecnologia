export interface CardImage {
  imageSrc: string;
  imageAlt: string;
}

export interface ContentItem {
  dataCategory?: string;
  cardLink: string;
  cardImage: CardImage;
  cardTag: string;
  cardTitle: string;
  cardDescription: string;
  cardMetaData?: string;
}

export interface HtmlAttributes {
  classNameSection: string;
  idSection?: string;
  classNameList: string;
  classNameLink: string;
}

export interface ContentSection {
  title: string;
  htmlAttributes: HtmlAttributes;
  items: ContentItem[];
}

export type ContentData = ContentSection[];
