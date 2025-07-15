import {NEVER, z} from "zod";

export type Category = {
  id: number;
  name: string;
};

export type City = {
  id: number;
  name: string;
};

export type SocialService = {
  id: string;
  name: string;
  address: string;
  postCode: string;
  city: string;
  website: string;
  categories: Category[];
};

export const SocialServicesRequest = z.object({
  categoryId: z.string().transform( (val, ctx) => {
    try {
      const n= Number.parseInt(val);
      if (n.toString() == val) { return n; }
      throw new Error("input is not a number");
    } catch (e) {
      ctx.addIssue({
        code: "custom",
        message: "Not a number",
      });
      return NEVER;
    }
  }),
  cityId: z.coerce.bigint(),
});

export const CategoriesRequest = z.object({
  cityId: z.string().transform( (val, ctx) => {
    try {
      const n= Number.parseInt(val);
      if (n.toString() == val) { return n; }
      throw new Error("input is not a number");
    } catch (e) {
      ctx.addIssue({
        code: "custom",
        message: "Not a number",
      });
      return NEVER;
    }
  }),
});
