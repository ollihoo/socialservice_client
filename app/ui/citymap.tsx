import Browsermap from '@/ui/browsermap';
import {City} from "@/lib/definitions";
import {fetchCities} from "@/lib/data";

export default async function cityMapGenerator() {
    const availableCities: City[] = await fetchCities();
    return (<Browsermap cities={availableCities}></Browsermap>);
}
