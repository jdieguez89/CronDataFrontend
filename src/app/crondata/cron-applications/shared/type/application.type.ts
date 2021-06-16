import {AppCategoryType} from './app-category.type';

export class ApplicationType {
  appDescription?: string;
  appIcon!: string;
  appIntall!: string;
  appName!: string;
  appPathResource!: string;
  appShort!: string;
  appCategory!: AppCategoryType;
  id!: number;
}
