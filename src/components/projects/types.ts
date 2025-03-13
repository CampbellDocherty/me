export type Project = {
  id: number;
  letter: string;
  title: string;
  description: string;
};
export type Coords = {
  [key: number]: { x: number; y: number };
};
