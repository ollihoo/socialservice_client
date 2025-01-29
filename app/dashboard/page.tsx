import { lusitana } from '../ui/fonts';
import SocialServicesTable from "../ui/dashboard/socialServicesTable";
import {Suspense} from "react";
import {RevenueChartSkeleton} from "../ui/skeletons";
import CategoriesDropdown from "../ui/categoriesDropdown";
import {Category} from "../lib/definitions";
import {fetchCategories} from "../lib/data";

export default async function Page(props: { searchParams?: Promise<{ cat: string; }>;}) {
  const searchParams = await props.searchParams;
  const searchCategory: string = searchParams?.cat || '';
  const availableCategories: Category[] = await fetchCategories();

  return (
      <main>
          <h1 className={`${lusitana.className} antialiased mb-4 text-xl md:text-2xl`}>
              Dashboard
          </h1>
        <div>
          <CategoriesDropdown categories={availableCategories} />
        </div>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
              <Suspense fallback={<RevenueChartSkeleton />}>
                  <SocialServicesTable category={searchCategory} />
              </Suspense>
          </div>
      </main>
  );
}