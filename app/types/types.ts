export interface ProjectDetailsProps {
  appName: string;
  appPhoto: string;
  appDescription: string;
  appTags: string[];
  appStoreLink: string;
  playStoreLink: string;
  previewVideo: string;
  isReverseOrder: boolean;
}

export interface AppProps {
  link: string;
}
