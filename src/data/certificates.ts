import Fundamentos from '../assets/certificates/Fundamentos.png';
import Frontend from '../assets/certificates/Frontend.png';
import Backend from '../assets/certificates/Backend.png';
import CS from '../assets/certificates/CS.png';
import Formacao from '../assets/certificates/Formacao.png';

interface ICertificates {
  name: string;
  image: string;
  url: string;
}

const certificates: ICertificates[] = [
  {
    name: 'Certificado de Fundamentos',
    image: Fundamentos,
    url: 'https://www.credential.net/d04dfc89-c142-4188-b713-e5e14ebac754#acc.wpcme5IY'
  },
  {
    name: 'Certificado de Frontend',
    image: Frontend,
    url: 'https://www.credential.net/c505fff5-758d-43cc-9a73-a5bc289c1905#acc.cRCKUA1w'
  },
  {
    name: 'Certificado de Backend',
    image: Backend,
    url: 'https://www.credential.net/eb14e194-f1d1-4dec-afa6-bb3dbff01cb1#acc.7WBtqCO9'
  },
  {
    name: 'Certificado de Ciência da Computação',
    image: CS,
    url: 'https://www.credential.net/63e4ee22-5472-4c07-a353-52ac84940afd#acc.KPjpry9D'
  },
  {
    name: 'Certificado de Desenvolvimento Web',
    image: Formacao,
    url: 'https://www.credential.net/e561ac36-d451-4110-87eb-30d883afdfd8#acc.f4PMEBcZ'
  },
];

export default certificates;
