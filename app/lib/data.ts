import {Category, City, SocialService} from './definitions';
import {createUrl, doAPICall} from './utils';

export async function fetchSocialServices(category: string, city: string) {
  function createSocialServices(input: any) {
    const resultSocialServices: SocialService[] = input.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        address: item.address,
        postCode: item.postCode,
        city: item.city,
        website: item.website,
        categories: item.categories,
      };
    });
    return resultSocialServices;
  }

  if (! category) {
    return [];
  }

  const request = createUrl('/social') + (category ? '?c=' + category : '') + (city ? '&ct=' + city : '');
  const result = await doAPICall(request);

  return createSocialServices(await result.json());
}

export async function fetchCategories() {
  function createCategories(input: any) {
    const categories: Category[] = input.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    return categories;
  }

  const result = await doAPICall(createUrl('/categories'));
  return createCategories(await result.json());
}

export async function fetchCities() {
  function createCategories(input: any) {
    const cities: City[] = input.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    return cities;
  }

  const result = await doAPICall(createUrl("/cities"));
  return createCategories(await result.json());
}
