import {
  Category,
  City,
  SocialService,
  SocialServicesRequest,
  CategoriesRequest,
  OnlineSocialServicesRequest
} from '@/lib/definitions';
import {createUrl, doAPICall} from '@/lib/utils';


function transformJsonIntoSocialServicesList(input: any) {
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

const createSocialApiRequest = function (cityId: number, categoryId: number) {
  return createUrl('/social?ct=') + cityId + '&c=' + categoryId;
}
const createOnlineSocialApiRequest = function (categoryId: number) {
  return createUrl('/social/online?ct=') + '&c=' + categoryId;
}
const createCategoryApiRequest = function (cityId: number) : string {
  return createUrl((cityId == -5)? '/categories/online': '/categories?ct=' + cityId);
}


export async function fetchSocialServices(categoryId: string, cityId: string) {

  const requestParameters = SocialServicesRequest.safeParse(
    { categoryId: categoryId, cityId: cityId }
  );

  if (requestParameters.success) {
    const response: Response = await doAPICall(createSocialApiRequest(requestParameters.data.cityId, requestParameters.data.categoryId));
    if (response.ok) {
      return transformJsonIntoSocialServicesList(await response.json());
    }
    console.warn("Unknown social service response: ", response);
    return [];
  } else {
    if (cityId != undefined && cityId !== '') {
      if (categoryId != undefined && categoryId !== '') {
        console.warn("Stop by parameters while requesting socialservices: ", categoryId, "; ", cityId);
      }
    }
    return [];
  }
}

export async function fetchOnlineSocialServices(categoryId: string): Promise<SocialService[]> {

  const requestParameters = OnlineSocialServicesRequest.safeParse(
    { categoryId: categoryId}
  );

  if (requestParameters.success) {
    const response: Response = await doAPICall(createOnlineSocialApiRequest(requestParameters.data.categoryId));
    if (response.ok) {
      return transformJsonIntoSocialServicesList(await response.json());
    }
    console.warn("Unknown online social service response: ", response);
    return [];
  } else {
      if (categoryId != undefined && categoryId !== '') {
        console.warn("Stop by parameters while requesting socialservices: ", categoryId);
      }
    }
    return [];
}


export async function fetchCategories(cityId: any) {

  const transformJsonIntoCategoryList = function (input: any) {
    const categories: Category[] = input.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    return categories;
  };

  const requestParameters = CategoriesRequest.safeParse(
    { cityId: cityId }
  );

  if (requestParameters.success) {
    const result: Response = await doAPICall(createCategoryApiRequest(requestParameters.data.cityId));
    if (result.ok) {
      return transformJsonIntoCategoryList(await result.json());
    }
    console.log("Unknown response:\r\n", result);
    return [];
  } else {
    if (cityId != undefined && cityId !=  "") {
      console.warn("For categories, I can't parse cityid: ", cityId, "; message: ", requestParameters.error.message);
    }
    return [];
  }
}

export async function fetchCities() {
  function transformJsonIntoCityList(input: any) {
    const cities: City[] = input.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        lat: item.latitude,
        lon: item.longitude
      };
    });
    return cities;
  }
  const result = await doAPICall(createUrl("/cities"));
  return transformJsonIntoCityList(await result.json());
}
