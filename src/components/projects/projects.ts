import { Project as ProjectType } from './types';
import eman from '../../assets/eman.png';
import fcuk from '../../assets/fcuk.png';
import star from '../../assets/star.png';
import waaw from '../../assets/waaw.png';
import bambi from '../../assets/bambi.png';
import bambiIcon from '../../assets/bambi-icon.png';
import nangIcon from '../../assets/nang-icon.png';
import nang from '../../assets/nang.png';
import myValentine from '../../assets/my-valentine.png';
import myValentineIcon from '../../assets/my-valentine-icon.png';

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
    description:
      'Valentines day website I made for my girlfriend. Click to place memories from our relationship!',
    id: 2,
    letter: 'm',
    title: 'my valentine',
    icon: myValentineIcon,
    img: myValentine,
    link: 'https://campbelldocherty.github.io/c-heart-n/',
    bg: 'rgb(246, 193, 64)',
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
    description: 'Portfolio site for London based jeweler, Bambi!',
    id: 5,
    letter: 'e',
    title: 'Jewels by Bam',
    icon: bambiIcon,
    img: bambi,
    link: 'https://jewelsbybam.com',
    bg: 'salmon',
  },
  {
    description:
      'Pre party website for NANG. Slide the puzzle pieces to complete the image and unlock the party poster.',
    id: 6,
    letter: 'l',
    title: 'Nang land',
    icon: nangIcon,
    img: nang,
    link: 'https://campbelldocherty.github.io/NANG/',
    bg: 'rgb(94, 156, 255)',
  },
  {
    description: 'Some test text before I put the real thing in!',
    id: 7,
    letter: 'l',
    title: 'Hope Tala',
    icon: '',
  },
];
