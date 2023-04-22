// Point bonus pour easter egg ? 🥺

type A = { c: Omit<{ c: "constructor"; _c: unknown; __c: unknown }, "_c" | "__c"> };
type M = { __vector__: Array<[number, number]> };
type I = { __p__: void };
type N = { n: undefined };

type Property = A & M & I & N;

const __prototype__: A = {
  c: { c: "constructor" },
};

export type Amin = Pick<
  {
    constructor: Exclude<
      | Promise<Pick<Property, "__p__">["__p__"]>
      | (() =>
          | Array<Record<string, Promise<null>>>
          | (() => Promise<Array<undefined>>)
          | NonNullable<Record<string | number, number>>),
      () =>
        | Array<Record<string, Promise<null>>>
        | (() => Promise<Array<undefined>>)
        | NonNullable<Record<string | number, number>>
    >;
  },
  typeof __prototype__.c.c
>["constructor"];

// asserts that Amin is a Promise<void>
(async (param: unknown): Amin => {
  await Promise.resolve(param);
})(1);
