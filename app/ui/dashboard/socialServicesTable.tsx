import {Category, SocialService} from '../../lib/definitions';
import Link from "next/link";
import { fetchSocialServices} from "../../lib/data";
import styles from "../home.module.css";


export default async function SocialServicesTable(params: any) {
    const category: string = params?.category || '';
    const unsortedSocialservices = await fetchSocialServices(category);
    const socialServices = unsortedSocialservices.sort((a, b) => a.name.localeCompare(b.name));
    function getServiceLink(socialService: SocialService) {
        if (socialService.website != null) {
            return (
                <p className="text-sm text-gray-500 sm:block">
                    <Link href={socialService.website} target="_blank">Zum Angebot der Beratungsstelle</Link>
                </p>
            )
        }
        return ``;
    }

    function showCategories(socialService: SocialService) {
        const sortedCategories = socialService.categories.sort((a, b) => a.name.localeCompare(b.name));
        return (
          <ul className={styles.categorytag}>
              {
                  sortedCategories.map((entry: Category) => {
                     return (<li key={entry.id}>{entry.name}</li>);
                  })
              }
          </ul>
        );
    }

    function getListOfServices(socialServices: SocialService[]) {
        return <>
            {socialServices.map((socialservice) => {
                return (
                    <div key={socialservice.id}
                        className="flex flex-row justify-between py-2 md:grid-cols-4'">
                        <div className="flex flex-col">
                            <p className="truncate text-sm font-semibold md:text-base">
                                {socialservice.name}
                            </p>
                            <p className="truncate md:text-base">
                                {socialservice.address}, {socialservice.postCode} {socialservice.city}
                            </p>
                            {getServiceLink(socialservice)}
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            {showCategories(socialservice)}
                        </div>
                    </div>
                );
            })}
        </>;
    }

    return (
        <div className="flex w-full flex-col md:col-span-8">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                <div className="bg-white px-6">
                    {getListOfServices(socialServices)}
                </div>
            </div>
        </div>
    );
}
