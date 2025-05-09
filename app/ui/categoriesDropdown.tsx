'use client';
import { Category } from '../lib/definitions';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function CategoriesDropdown({ categories }: { categories: Category[] }) {
  const QUERY_PARAM = 'cat';
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
          <option>
            Gesuchte Kategorie
          </option>
          {categories.map((category: Category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
