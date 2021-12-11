type Image = {
  attributes: {
    height: string
  },
  label: string
}

type MovieFetch = {
  ["im:name"]: {
    label: string;
  },
  summary: {
    label: string
  },
  ["im:image"]:Image[],
  category: {
      attributes: {
        label: string
      }
  }
}

type Movie = {
  title: string,
  summary: string,
  image: string,
  category: string
}

type Movies = Movie[]

export type {MovieFetch, Movies, Movie, Image}