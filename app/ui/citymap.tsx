import Browsermap from '@/ui/browsermap';
import {City} from "@/lib/definitions";
import {fetchCities} from "@/lib/data";

export default async function cityMapGenerator(params: any) {
    const availableCities: City[] = await fetchCities();

    const myCity: City[] = [{id: 2, name: 'Berlin', lat: 52.52, lon: 13.405 } ];
    console.log(availableCities);
    return (<Browsermap cities={availableCities}></Browsermap>);
}
