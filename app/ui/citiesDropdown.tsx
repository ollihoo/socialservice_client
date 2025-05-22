'use client';
import { City } from '../lib/definitions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function CitiesDropdown({ cities }: { cities: City[] }) {
  const QUERY_PARAM = 'cit';
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSelection = (event: any) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value) {
      params.set(QUERY_PARAM, event.target.value);
    } else {
      params.delete(QUERY_PARAM);
    }
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <div>
        <label htmlFor="categoryDropdown" className="sr-only">
          Choose a category;
        </label>
        <select
          id="categoryDropdown"
          value={searchParams.get(QUERY_PARAM)?.toString()}
          onChange={handleSelection}
        >
          <option value="">
            Welche Stadt?
          </option>
          {cities.map((city: City) => {
            return (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
