export interface IAboutMe {
  _id: string;
  description: string;
  language: string;
}

export interface Schema {
  aboutme: Array<IAboutMe>;
  projects: string[];
  routes: string[];
}