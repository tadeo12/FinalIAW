//TODO usar stores para que los distintos componentes tengan esta data

import { writable} from "svelte/store";


export const data= writable([
    {
      "id": 1,
      "title": "ejemplo 1",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    },
    {
      "id": 2,
      "title": "ejemplo 2",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    },
    {
      "id": 3,
      "title": "ejemplo 3",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":4
    },
    {
      "id": 4,
      "title": "ejemplo 4",
      "opinion": "HOLA, este es un mensaje de ejemplo",
      "score":1
    },
    {
      "id": 5,
      "title": "ejemplo 5",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    },
    {
      "id": 6,
      "title": "ejemplo 6",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    },
    {
      "id": 7,
      "title": "ejemplo 7",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    },
    {
      "id": 8,
      "title": "ejemplo 8",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    },
    {
      "id": 9,
      "title": "ejemplo 9",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    },
    {
      "id": 10,
      "title": "ejemplo 10",
      "opinion": "Some quick example text to build on the card title and make up the bulk of the card's content.",
      "score":5
    }
  ]);