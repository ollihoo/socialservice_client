import Browsermap from '@/ui/browsermap';
import {City} from "@/lib/definitions";

export default async function cityMapGenerator(params: any) {
  const selCategory: string = params?.category || '';
  const selCity: string = params?.city || '';
//  const unsortedSocialservices = await fetchSocialServices(selCategory, selCity);
//  const socialServices = unsortedSocialservices.sort((a, b) => a.name.localeCompare(b.name));

  function getCityMap() {

    const myCity: City = {id: 2, name: 'Berlin', lat: 52.52, lon: 13.405 };
    return (<Browsermap city={myCity}></Browsermap>);
  }

  return <>{getCityMap()}</>;
}
