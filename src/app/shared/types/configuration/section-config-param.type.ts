import {SectionConfigType} from './section-config.type';

export class SectionConfigParamType {
  confParamDatatype!: string;
  confParamDescription!: string;
  confParamLarge!: string;
  confParamRequired!: true;
  confParamShort!: string;
  confParamValue!: any;
  id!: number;
  modificationTime!: Date;
  modificationUser!: string;
  sectionId!: number;
  section!: SectionConfigType;
  confParamRestartRequired!: boolean;
}
