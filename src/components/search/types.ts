// export interface ProductType {
//   id: string;
//   masterData: {
//     current: {
//       name: {
//         'en-US': string;
//       };
//       description: {
//         'en-US': string;
//       };
//       masterVariant: {
//         prices: Array<PriceType>;
//         images: Array<ImagesType>;
//         attributes: Array<AttributesType>;
//       };
//     };
//     published: boolean;
//   };
//   key: string;
// }
export type PokemonUrlData = {
  name: string;
  url: string;
};

export type PokemonTypes = {
  type: { name: string };
};

export type PokemonSearchProps = {
  onPokemoDataChange: (data: PokemonData[]) => void;
};
export type PokemonCataloghProps = { pokemonsData: PokemonData[] };
export type PokemonCardProps = { pokemonsCard: PokemonData; key: number };
export type PokemonSearchState = {
  searchValue: string;
};
export type PokemonCatalogState = {
  pokemonsData: PokemonData[];
};

export type PokemonData = {
  id: number;
  name: string;
  types: string;
};
