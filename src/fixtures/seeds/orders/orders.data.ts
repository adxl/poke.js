import { Order } from "src/domains/orders/orders.entity";
import { DeepPartial } from "typeorm";

export const data: DeepPartial<Order[]> = [
  {
    id: "2f3b5b04-5f7f-4f1b-bfd4-fca7c1669191",
    dishes: [
      { id: "089190b3-b4f2-4071-a269-ae1e243cb051" },
      { id: "089190b3-b4f2-4071-a269-ae1e243cb052" },
    ],
    user: {
      id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa3",
    },
  },
  {
    id: "2f3b5b04-5f7f-4f1b-bfd4-fca7c1669192",
    dishes: [{ id: "089190b3-b4f2-4071-a269-ae1e243cb053" }],
    user: {
      id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa3",
    },
  },
  {
    id: "2f3b5b04-5f7f-4f1b-bfd4-fca7c1669193",
    dishes: [{ id: "089190b3-b4f2-4071-a269-ae1e243cb054" }],
    user: {
      id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa3",
    },
  },
  {
    id: "2f3b5b04-5f7f-4f1b-bfd4-fca7c1669194",
    dishes: [{ id: "089190b3-b4f2-4071-a269-ae1e243cb055" }],
    user: {
      id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa4",
    },
  },
  {
    id: "2f3b5b04-5f7f-4f1b-bfd4-fca7c1669195",
    dishes: [{ id: "089190b3-b4f2-4071-a269-ae1e243cb056" }],
    user: {
      id: "dbe7ddd2-6bc6-4ff9-9716-fd49f8fe7aa4",
    },
  },
];
