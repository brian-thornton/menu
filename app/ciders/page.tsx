import { ciders as beers } from '#/app/data/beer';
import Beers from '../components/Beers';

export default function Page() {
  return (
    <Beers beers={beers} type="Ciders & Seltzers" />
  );
}
