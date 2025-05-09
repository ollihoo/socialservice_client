import { Revenue } from './definitions';

export function createUrl(endpoint: string): string {
  return 'http://' + process.env.BACKEND_HOST + ':' + process.env.BACKEND_PORT + endpoint;
}

export function doAPICall(request: string): any {
  try {
    return fetch(request, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    console.log('problem to fetch data: ', error.message);
    console.log('URL: ', request);
    return [];
  }
}

