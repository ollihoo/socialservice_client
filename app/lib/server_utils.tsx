import fs from 'fs';

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
