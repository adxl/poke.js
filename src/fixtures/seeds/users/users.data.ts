import { User } from "src/domains/users/users.entity";

export const data: User[] = [
  {
    id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa1",
    firstName: "Sami",
    lastName: "Z",
    email: "sami@poke.fr",
    password: "password",
    isAdmin: true,
    orders: [],
  },
  {
    id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa2",
    firstName: "Thomas",
    lastName: "G",
    email: "thomas@poke.fr",
    password: "password",
    isAdmin: true,
    orders: [],
  },
  {
    id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa3",
    firstName: "Adel",
    lastName: "S",
    email: "adel@poke.fr",
    password: "password",
    isAdmin: false,
    orders: [],
  },
  {
    id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa4",
    firstName: "Jérémy",
    lastName: "J",
    email: "jeremy@poke.fr",
    password: "password",
    isAdmin: false,
    orders: [],
  },
];
