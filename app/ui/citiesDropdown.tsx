'use client';
import { City } from '@/lib/definitions';
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
    <div className="relative flex flex-1 shrink-0">
      <div>
        <label htmlFor="cityDropdown" className="sr-only">
          Choose a category
        </label>
        <select
          id="cityDropdown"
          value={searchParams.get(QUERY_PARAM)?.toString()}
          onChange={handleSelection}
        >
          <option value="">
            Onlineberatung oder Stadtsuche?
          </option>
          <option key={'online'} value={-5}>-- Onlineberatung --</option>
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
