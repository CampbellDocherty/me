export type Project = {
  id: number;
  letter: string;
  title: string;
  description: string;
  icon: string;
  img?: string;
  link?: string;
  bg?: string;
};
export type Coords = {
  [key: number]: { x: number; y: number };
};
