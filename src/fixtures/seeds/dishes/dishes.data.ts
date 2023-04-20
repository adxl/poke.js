import { Dish } from "src/domains/dishes/dishes.entity";
import { DeepPartial } from "typeorm";

export const data: DeepPartial<Dish[]> = [
  {
    id: "089190b3-b4f2-4071-a269-ae1e243cb051",
    size: {
      id: "83113fa7-52e7-4f68-ad83-ad831ebaaba1",
    },
    base: {
      id: "20289153-361d-4cc8-9edd-d5ce5157f851",
    },
    proteins: [
      {
        id: "fb2e4e77-7cda-454f-893d-43c9a2abfce0",
      },
    ],
    toppings: [],
  },
  {
    id: "089190b3-b4f2-4071-a269-ae1e243cb052",
    size: {
      id: "83113fa7-52e7-4f68-ad83-ad831ebaaba2",
    },
    base: {
      id: "20289153-361d-4cc8-9edd-d5ce5157f853",
    },
    proteins: [
      {
        id: "fb2e4e77-7cda-454f-893d-43c9a2abfce0",
      },
    ],
    toppings: [
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb0",
      },
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb1",
      },
    ],
  },
  {
    id: "089190b3-b4f2-4071-a269-ae1e243cb053",
    size: {
      id: "83113fa7-52e7-4f68-ad83-ad831ebaaba1",
    },
    base: {
      id: "20289153-361d-4cc8-9edd-d5ce5157f854",
    },
    proteins: [
      {
        id: "fb2e4e77-7cda-454f-893d-43c9a2abfce3",
      },
      {
        id: "fb2e4e77-7cda-454f-893d-43c9a2abfce4",
      },
    ],
    toppings: [
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb4",
      },
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb5",
      },
    ],
  },
  {
    id: "089190b3-b4f2-4071-a269-ae1e243cb054",
    size: {
      id: "83113fa7-52e7-4f68-ad83-ad831ebaaba4",
    },
    base: {
      id: "20289153-361d-4cc8-9edd-d5ce5157f852",
    },
    proteins: [],
    toppings: [
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb5",
      },
    ],
  },
  {
    id: "089190b3-b4f2-4071-a269-ae1e243cb055",
    size: {
      id: "83113fa7-52e7-4f68-ad83-ad831ebaaba3",
    },
    base: {
      id: "20289153-361d-4cc8-9edd-d5ce5157f851",
    },
    proteins: [
      {
        id: "fb2e4e77-7cda-454f-893d-43c9a2abfce1",
      },
    ],
    toppings: [
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb5",
      },
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb6",
      },
    ],
  },
  {
    id: "089190b3-b4f2-4071-a269-ae1e243cb056",
    size: {
      id: "83113fa7-52e7-4f68-ad83-ad831ebaaba4",
    },
    base: {
      id: "20289153-361d-4cc8-9edd-d5ce5157f853",
      name: "Nouilles",
      price: 2,
    },
    proteins: [
      {
        id: "fb2e4e77-7cda-454f-893d-43c9a2abfce0",
      },
      {
        id: "fb2e4e77-7cda-454f-893d-43c9a2abfce2",
      },
    ],
    toppings: [
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb2",
      },
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb3",
      },
      {
        id: "74a40adf-d830-455f-9490-183f631dfdb5",
      },
    ],
  },
];
