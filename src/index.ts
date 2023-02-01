import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Pets } from './components/list/list';
import { PET } from './mocks/pets';

import './index.scss';

const headerApp = new Header('#root');
const petsApp = new Pets('#root', PET);
const footerApp = new Footer('footer');
