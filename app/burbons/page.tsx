import { bourbons as beers } from '#/app/data/spirits';
import Spirits from '../components/Spirits';

export default function Page() {
  return (
    <Spirits beers={beers} type="Bourbons" />
  );
}
