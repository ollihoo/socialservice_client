import {
  Category,
  InvoicesTable,
  SocialService,
} from './definitions';

export function fetchFilteredInvoices(query: string, currentPage: number) {
  console.log("Query: "+query+"; currentPage: "+ currentPage);
  const data : InvoicesTable[] = [];
  data.push({
    id: "aaaaaaaaaa",
    name: "Mr. Smith",
    image_url: "/wespe.jpg",
    email: "alan@smith.org",
    amount: 240000,
    customer_id: "werewww",
    status: 'pending',
    date: "2024-11-12"
  });
  return data;
}

export async function fetchInvoicesPages(query: string) {
  console.log("request for page "+query);
  // another request for the pagination to the database?? ;-(
  // simulating, that it's two pages...
  return 2;
}

export async function fetchSocialServices(category: string) {
  const backend = "http://" + process.env.BACKEND_HOST + ":" + process.env.BACKEND_PORT + "/social";
  const request= category? "?c="+category:"";

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

  let res;
    try {
       res = await fetch(backend+request, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      return createSocialServices(data);
    } catch (error: any) {
      console.log("request problem: ", error.message);
      console.log("URL: ", backend);
      return [];
    }
}

export async function fetchCategories () {

  function createCategories(input: any) {
    const categories: Category[] = input.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
      };
    });
    return categories;
  }

  let result;
  const requestUrl = "http://" + process.env.BACKEND_HOST + ":" + process.env.BACKEND_PORT + "/categories";

  try {
    result = await fetch(requestUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.log("categories problem: ", error.message);
    console.log("URL: ", requestUrl);
    return [];
  }
  const data = await result.json();
  return createCategories(data);
}