import html from '../assets/techs/html.svg';
import css from '../assets/techs/css.svg';
import javascript from '../assets/techs/javascript.svg';
import jest from '../assets/techs/jest.svg';
import react from '../assets/techs/react.svg';
import redux from '../assets/techs/redux.svg';
import rtl from '../assets/techs/rtl.svg';
import docker from '../assets/techs/docker.svg';
import mysql from '../assets/techs/mysql.svg';
import nodeJs from '../assets/techs/nodeJs.svg';
import prisma from '../assets/techs/prisma.svg';
import typescript from '../assets/techs/typescript.svg';
import mongoDB from '../assets/techs/mongoDB.svg';
import python from '../assets/techs/python.svg';

interface ITech {
  name: string;
  image: string;
  url: string;
}

const techData: ITech[] = [
  {
    name: 'HTML',
    image: html,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    image: css,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    image: javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'Jest',
    image: jest,
    url: 'https://jestjs.io/',
  },
  {
    name: 'React',
    image: react,
    url: 'https://react.dev/',
  },
  {
    name: 'Redux',
    image: redux,
    url: 'https://redux.js.org/',
  },
  {
    name: 'RTL',
    image: rtl,
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
  },
  {
    name: 'Docker',
    image: docker,
    url: 'https://www.docker.com/',
  },
  {
    name: 'MySQL',
    image: mysql,
    url: 'https://www.mysql.com/',
  },
  {
    name: 'Node.js',
    image: nodeJs,
    url: 'https://nodejs.org/',
  },
  {
    name: 'Prisma',
    image: prisma,
    url: 'https://sequelize.org/',
  },
  {
    name: 'TypeScript',
    image: typescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'MongoDB',
    image: mongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'Python',
    image: python,
    url: 'https://www.python.org/',
  },
];

export default techData;
