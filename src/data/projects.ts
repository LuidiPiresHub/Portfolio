import thumbnailRecipesAppLight from '../assets/projects/RecipesAppLight.png';
import thumbnailRecipesAppDark from '../assets/projects/RecipesAppDark.png';
import thumbnailPixelsArt from '../assets/projects/PixelsArt.png';
import thumbnailAdvogada from '../assets/projects/Advogada.png';
import thumbnailPokedex from '../assets/projects/Pokedex.png';
import thumbnailClockJS from '../assets/projects/ClockJS.png';

interface IProject {
  name: string;
  description: string;
  thumbnail: string[];
  demoUrl: string;
  githubUrl: string;
}

const projectData: IProject[] = [
  {
    thumbnail: ['https://placehold.co/300x300?text=E-CommerceX'],
    name: 'E-CommerceX',
    description: 'Loja virtual fullstack com React, TypeScript, Node, Express, Prisma e PostgreSQL. Permite visualizar produtos, adicionar ao carrinho e finalizar compras.',
    demoUrl: 'https://luidi-pires-ecommerce.vercel.app',
    githubUrl: 'https://github.com/LuidiPiresHub/E-CommerceX'
  },
  {
    thumbnail: [thumbnailRecipesAppDark, thumbnailRecipesAppLight],
    name: 'Recipes App',
    description: 'App de receitas feito com React e TypeScript. Permite visualizar receitas, favoritar, compartilhar e acompanhar o progresso na cozinha.',
    demoUrl: 'https://luidi-pires-recipes-app.vercel.app',
    githubUrl: 'https://github.com/LuidiPiresHub/Recipes-App'
  },
  {
    thumbnail: [thumbnailPixelsArt],
    name: 'Pixels Art',
    description: 'Ferramenta de pixel art com React e TypeScript. Usuários podem desenhar na grade, salvar e compartilhar suas criações com amigos.',
    demoUrl: 'https://luidi-pires-pixels-art.vercel.app',
    githubUrl: 'https://github.com/LuidiPiresHub/Pixels-Art'
  },
  {
    thumbnail: [thumbnailAdvogada],
    name: 'Advogada Criminalista',
    description: 'Site institucional feito com React e TypeScript. Apresenta os serviços, áreas de atuação e contato de uma advogada criminalista.',
    demoUrl: 'https://advogada-criminalista.vercel.app',
    githubUrl: 'https://github.com/LuidiPiresHub/Advogada-Criminalista'
  },
  {
    thumbnail: [thumbnailPokedex],
    name: 'Pokedex',
    description: 'Aplicação feita com React e TypeScript. Permite buscar e visualizar pokémons pelo nome ou ID usando a API PokéAPI.',
    demoUrl: 'https://luidi-pires-pokedex.vercel.app',
    githubUrl: 'https://github.com/LuidiPiresHub/Pokedex'
  },
  {
    thumbnail: [thumbnailClockJS],
    name: 'Clock JS',
    description: 'Relógio analógico romano feito com React e TypeScript. Exibe a hora atual com design estilizado em tempo real.',
    demoUrl: 'https://luidi-pires-clock-js.vercel.app',
    githubUrl: 'https://github.com/LuidiPiresHub/Clock-JS'
  },
];

export default projectData;
