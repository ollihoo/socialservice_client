export type Revenue = {
  month: string;
  revenue: number;
};

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
