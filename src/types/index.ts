// Generic React types
export type ReactNode = React.ReactElement | string | number | boolean | null | undefined;

// Project type for Projects page
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
} 