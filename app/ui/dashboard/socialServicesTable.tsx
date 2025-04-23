import { Category, SocialService } from '../../lib/definitions';
import Link from 'next/link';
import { fetchSocialServices } from '../../lib/data';

export default async function SocialServicesTable(params: any) {
  const category: string = params?.category || '';
  const unsortedSocialservices = await fetchSocialServices(category);
  const socialServices = unsortedSocialservices.sort((a, b) => a.name.localeCompare(b.name));

  function getServiceLink(socialService: SocialService) {
    if (socialService.website != null) {
      return (
        <span className="text-sm text-gray-500 sm:block">
          <Link className="underline" href={socialService.website} target="_blank">
            Zum Angebot der Beratungsstelle
          </Link>
        </span>
      );
    }
    return ``;
  }

  function showCategories(socialService: SocialService) {
    const sortedCategories = socialService.categories.sort((a, b) => a.name.localeCompare(b.name));
    const firstCategories = sortedCategories.slice(0, 2);

    return (
      <>
        {firstCategories.map((entry: Category) => (
          <span
            key={entry.id}
            className="rounded-md bg-[#8B2500] px-4 py-1 text-sm text-white sm:text-base"
          >
            {entry.name}
          </span>
        ))}

        {sortedCategories.length >= 3 && (
          <span className="group rounded-md bg-[#8B2500] px-4 py-1 text-sm text-white sm:text-base">
            ...
            <div className="absolute left-1/2 top-full z-50 mb-2 w-full -translate-x-1/2 transform rounded bg-gray-800 px-2 py-2 text-sm text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <div className="flex flex-wrap gap-2">
                {sortedCategories.map((entry: Category) => (
                  <span
                    className="mb-1 rounded-md bg-[#8B2500] px-4 py-1 text-sm text-white last:mb-0 sm:text-base"
                    key={entry.id}
                  >
                    {entry.name}
                  </span>
                ))}
              </div>
            </div>
          </span>
        )}
      </>
    );
  }

  function getListOfServices(socialServices: SocialService[]) {
    return (
      <>
        {socialServices.map((socialservice) => {
          return (
            <div className="col-span-1" key={socialservice.id}>
              <div className="flex grow flex-col justify-between rounded-xl">
                <div className="bg-white">
                  <div className="relative my-2 w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
                    <h2 className="mb-2 text-2xl font-bold sm:text-3xl">{socialservice.name}</h2>
                    <p className="mb-1 text-xl">
                      {socialservice.address}, {socialservice.postCode} {socialservice.city}
                    </p>
                    <p className="mb-4 text-gray-600">{getServiceLink(socialservice)}</p>
                    <div className="mt-4 flex flex-wrap gap-2">{showCategories(socialservice)}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return <>{getListOfServices(socialServices)}</>;
}
