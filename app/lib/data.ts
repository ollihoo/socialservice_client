import {Category, City, SocialService, SocialServicesRequest, CategoriesRequest} from './definitions';
import {createUrl, doAPICall} from './utils';

export async function fetchSocialServices(category: string, cityId: string) {

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

  const requestParameters = SocialServicesRequest.safeParse(
    { categoryId: category, cityId: cityId }
  );

  if (requestParameters.success) {
    const request = createUrl('/social?ct=')
      + requestParameters.data.cityId
      + '&c=' + requestParameters.data.categoryId;
    const result = await doAPICall(request);
    return createSocialServices(await result.json());
  } else {
    console.log("ERROR: "+requestParameters.error.message);
    return [];
  }
}

export async function fetchCategories(cityId: any) {
  function createCategories(input: any) {
    const categories: Category[] = input.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    return categories;
  }

  const requestParameters = CategoriesRequest.safeParse(
    { cityId: cityId }
  );

  if (requestParameters.success) {
    const request = createUrl('/categories') + '?ct=' + requestParameters.data.cityId;
    const result = await doAPICall(request);
    return createCategories(await result.json());
  } else {
    console.log("ERROR: "+requestParameters.error.message);
    return [];
  }
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
