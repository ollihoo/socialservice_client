import { lusitana } from '../ui/fonts';
import CitiesDropDown from '../ui/citiesDropdown';
import { City } from '../lib/definitions';
import { fetchCities } from '../lib/data';
import InputForms from "@/app/ui/adminservices/inputForms";

export default async function Page(props: { searchParams?: Promise<{ cat: string, cit: string }> }) {
  const searchParams = await props.searchParams;
  const selectedCity: string = searchParams?.cit || '';
  let availableCities: City[] = await fetchCities();
  availableCities.push( { id: 0, name: "Andere Städte" });

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl antialiased md:text-2xl`}>
        Fehlende Beratungsstellen eintragen...
      </h1>
      <CitiesDropDown cities={availableCities} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <InputForms city={selectedCity} cities={availableCities}></InputForms>
      </div>
    </main>
  );
}
