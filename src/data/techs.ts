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
import sequelize from '../assets/techs/sequelize.svg';
import typescript from '../assets/techs/typescript.svg';
import mongoDB from '../assets/techs/mongoDB.svg';
import python from '../assets/techs/python.svg';

interface ITech {
  name: string;
  url: string;
}

const techData: ITech[] = [
  {
    name: 'HTML',
    url: html,
  },
  {
    name: 'CSS',
    url: css,
  },
  {
    name: 'JavaScript',
    url: javascript,
  },
  {
    name: 'Jest',
    url: jest,
  },
  {
    name: 'React',
    url: react,
  },
  {
    name: 'Redux',
    url: redux,
  },
  {
    name: 'RTL',
    url: rtl,
  },
  {
    name: 'Docker',
    url: docker,
  },
  {
    name: 'MySQL',
    url: mysql,
  },
  {
    name: 'Node.js',
    url: nodeJs,
  },
  {
    name: 'Sequelize',
    url: sequelize,
  },
  {
    name: 'TypeScript',
    url: typescript,
  },
  {
    name: 'MongoDB',
    url: mongoDB,
  },
  {
    name: 'Python',
    url: python,
  },
];

export default techData;
