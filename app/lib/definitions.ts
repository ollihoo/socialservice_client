import {NEVER, RefinementCtx, z} from "zod";

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

function addMessageToCtx(ctx: RefinementCtx, message: string) {
  ctx.addIssue({
    code: "custom",
    message: message,
  });
}

function getStringToIntTransformer() {
  return z.string().transform((val, ctx) => {
    try {
      const n = Number.parseInt(val);
      if (n.toString() == val) {
        return n;
      }
    } catch (e) {
    }
    addMessageToCtx(ctx, "Not a number");
    return NEVER;
  });
}

export const SocialServicesRequest = z.object({
  categoryId: getStringToIntTransformer(),
  cityId: getStringToIntTransformer(),
});

export const CategoriesRequest = z.object({
  cityId: getStringToIntTransformer(),
});
