import { lusitana } from '@/ui/fonts';
import SocialServicesTable from '@/ui/dashboard/socialServicesTable';
import CategoriesDropdown from '@/ui/categoriesDropdown';
import CitiesDropDown from '@/ui/citiesDropdown';
import { Category, City } from '@/lib/definitions';
import {fetchCategories, fetchCities} from '@/lib/data';

export default async function Page(props: { searchParams?: Promise<{ cat: string, cit: string }> }) {
  const searchParams = await props.searchParams;
  const selectedCategory: string = searchParams?.cat || '';
  const selectedCity: string = searchParams?.cit || '';
  const availableCategories: Category[] = await fetchCategories(selectedCity);
  const availableCities: City[] = await fetchCities();

  return (
    <main>
      <h2 className={`${lusitana.className} mb-4 text-xl antialiased md:text-2xl`}>
        Beratungsstellen
      </h2>
      <div className="flex flex-row items-center gap-1 p-7 nd:flex-row md:gap-8 rounded-2xl bg-gray-300">
        <div>
          <CitiesDropDown cities={availableCities} />
        </div>
        <div>
           <CategoriesDropdown categories={availableCategories} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
         <SocialServicesTable category={ selectedCategory } city={selectedCity}  />
      </div>
    </main>
  );
}
