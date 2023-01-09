//MARVEL API

export interface SuperheroDataWrapper {
  data: SuperheroDataContainer;
}

export interface SuperheroDataContainer {
  total: number;
  results: SuperheroData[];
}

export interface SuperheroData {
  id: string;
  name: string;
  thumbnail: SuperheroDataThumbnail;
  comics: SuperheroDataComicsList;
  stories: SuperheroDataStoriesList;
  series: SuperheroDataSeriesList;
}

export interface SuperheroDataThumbnail {
  path: string;
  extension: string;
}

export interface SuperheroDataComicsList {
  available: number;
}

export interface SuperheroDataStoriesList {
  available: number;
}

export interface SuperheroDataSeriesList {
  available: number;
}
