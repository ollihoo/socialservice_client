import * as console from "node:console";
import fs from 'fs';

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

export function getInputFormConfig(): Map<string, URL> {
  const inputForms: Map<string, URL> = new Map();

  if (process.env.INPUTFORM_FILE == undefined) {
    console.error("Missing config file INPUTFORM_FILE");
    return inputForms;
  }
  try {
    const fileContents = fs.readFileSync(process.env.INPUTFORM_FILE, 'utf8');
    const config = JSON.parse(fileContents);
    parseInputFormConfiguration(config, inputForms);
  } catch (err: any) {
    console.warn('Inputform config must be a file: ', err.message);
    console.log(process.cwd());
  }
  return inputForms;
}

function parseInputFormConfiguration(config: any, inputForms: Map<string,URL>) {
  Object.keys(config).forEach(key => {
    try {
      inputForms.set(key, new URL(config[key]));
    } catch (error: any) {
      console.log('Form configuration is buggy: ', error.message);
    }
  });
}
