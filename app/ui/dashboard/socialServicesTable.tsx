import {Category, SocialService} from '../../lib/definitions';
import Link from "next/link";
import {fetchSocialServices} from "../../lib/data";


export default async function SocialServicesTable(params: any) {
  const category: string = params?.category || '';
  const unsortedSocialservices = await fetchSocialServices(category);
  const socialServices = unsortedSocialservices.sort((a, b) => a.name.localeCompare(b.name));

  function getServiceLink(socialService: SocialService) {
    if (socialService.website != null) {
      return (
          <span className="text-sm text-gray-500 sm:block">
            <Link className="underline" href={socialService.website} target="_blank">Zum Angebot der Beratungsstelle</Link>
          </span>
      )
    }
    return ``;
  }

  function showCategories(socialService: SocialService) {
    const sortedCategories = socialService.categories.sort((a, b) => a.name.localeCompare(b.name));
    return (<>
        {sortedCategories.map((entry: Category) => (
              <span
                  key={entry.id}
                  className="bg-[#8B2500] text-white px-4 py-1 rounded-md text-sm sm:text-base"
              >
            {entry.name}
          </span>
          ))}
    </>)
  }

  function getListOfServices(socialServices: SocialService[]) {
    return <>
      {socialServices.map((socialservice) => {
        return (
            <div className="col-span-1" key={socialservice.id}>
              <div className="flex grow flex-col justify-between rounded-xl">
                <div className="bg-white">
                  <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6 my-8">
                    <h2 className="text-2xl font-bold mb-2 sm:text-3xl">
                      {socialservice.name}
                    </h2>
                    <p className="text-xl mb-1">{socialservice.address}, {socialservice.postCode} {socialservice.city}</p>
                    <p className="text-gray-600 mb-4">{getServiceLink(socialservice)}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {showCategories(socialservice)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
      })}
    </>;
  }

  return (
      <>
        {getListOfServices(socialServices)}
      </>
  );
}
