import {AppCategoryType} from './app-category.type';

export class ApplicationType {
  appDescription!: string;
  appIcon!: string;
  installationLink!: string;
  appName!: string;
  appPathResource!: string;
  appShort!: string;
  appCategory!: AppCategoryType;
  id?: number;
  isInstalled!: boolean;
  uid!: string;
}
