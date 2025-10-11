import { City } from '../../lib/definitions';
import Link from "next/link";
import { getInputFormConfig } from '../../lib/utils';

export default async function InputForms(params: any) {
  const selectedCityId: number = params? parseCityId(params.city) : NaN;
  const availableCities: City[] = params?.cities || '';
  const inputForms: Map<string, URL> = getInputFormConfig();

  const city: City|undefined = getCityById(selectedCityId, availableCities);

  function parseCityId(cityId: string) : number {
    return cityId == undefined ? NaN : parseInt(cityId);
  }

  function getCityById(cityId: number, cities: City[]): City|undefined {
    return cities.find(c => c.id === cityId);
  }

  function getUrlForInputForm(city: City|undefined) {
    if (city == undefined || !inputForms.has(city.name)) {
      return inputForms.get('default');
    }
    return inputForms.get(city.name);
  }

  function getHtmlElement(city: City|undefined, form: URL|undefined) {
    if (city == undefined || form == undefined) {
      return '';
    }
    return (
      <div className="col-span-1" >
            <div className="flex grow flex-col justify-between rounded-xl">
            <div className="bg-white">
            <div className="relative my-2 w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">{city.name}</h2>
              <p className="mb-1 text-xl">
              <Link href={form.href}>Zum Eingabeformular für {city.name}</Link>
            </p>
            </div>
            </div>
            </div>
      </div>
    );
  }

  return <>{getHtmlElement(city, getUrlForInputForm(city))}</>;
}
