import { Project as ProjectType } from './types';
import eman from '../../assets/eman.png';
import fcuk from '../../assets/fcuk.png';
import star from '../../assets/star.png';
import waaw from '../../assets/waaw.png';

export const projects: ProjectType[] = [
  {
    description:
      'Outfit generator made from photos I took of the guests at the No Format party! (Excuse the load times it was early days haha!)',
    id: 0,
    letter: 'c',
    title: 'FCUK',
    icon: eman,
    img: fcuk,
    link: 'https://www.noformat.world',
    bg: 'rgb(210, 55, 75)',
  },
  {
    description:
      'Portfolio site for London based DJ duo, WAAW. Control a star using the movement of your phone to collect power ups and tracks!',
    id: 1,
    letter: 'a',
    title: 'waaw',
    icon: star,
    img: waaw,
    link: 'https://campbelldocherty.github.io/waaw/',
    bg: 'rgb(191, 128, 242)',
  },
  {
    description: 'Some test text before I put the real thing in!',
    id: 2,
    letter: 'm',
    title: 'my valentine',
    icon: '',
  },
  {
    description: 'Some test text before I put the real thing in!',
    id: 3,
    letter: 'p',
    title: '360 portraits',
    icon: '',
  },
  {
    description: 'Some test text before I put the real thing in!',
    id: 4,
    letter: 'b',
    title: 'based god',
    icon: '',
  },
  {
    description: 'Some test text before I put the real thing in!',
    id: 5,
    letter: 'e',
    title: '19 Horses',
    icon: '',
  },
  {
    description: 'Some test text before I put the real thing in!',
    id: 6,
    letter: 'l',
    title: 'Nang land',
    icon: '',
  },
  {
    description: 'Some test text before I put the real thing in!',
    id: 7,
    letter: 'l',
    title: 'Hope Tala',
    icon: '',
  },
];
