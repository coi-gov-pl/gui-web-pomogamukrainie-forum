/**
 * Documentation for ads portal
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Location } from './location';

export interface JobOfferSearchCriteria {
  location?: Location;
  industry?: JobOfferSearchCriteria.IndustryEnum;
  workTime?: JobOfferSearchCriteria.WorkTimeEnum;
  contractType?: JobOfferSearchCriteria.ContractTypeEnum;
  mode?: JobOfferSearchCriteria.ModeEnum;
  language?: Array<JobOfferSearchCriteria.LanguageEnum>;
  lang?: JobOfferSearchCriteria.LangEnum;
}
export namespace JobOfferSearchCriteria {
  export type IndustryEnum =
    | 'RESEARCH'
    | 'BANKING'
    | 'CONSTRUCTION'
    | 'CALL_CENTER'
    | 'E_COMMERCE'
    | 'EDUCATION'
    | 'ENERGETICS'
    | 'FINANCES'
    | 'BEAUTY'
    | 'GASTRONOMY'
    | 'HOTEL'
    | 'HR'
    | 'ENGINEERING'
    | 'IT'
    | 'LOGISTICS'
    | 'MARKETING'
    | 'REAL_ASSETS'
    | 'CUSTOMER_SERVICE'
    | 'MANUAL_JOB'
    | 'CONSULTING'
    | 'MANUFACTURING'
    | 'PUBLIC_SECTOR'
    | 'SALES'
    | 'TRANSPORT'
    | 'HEALTH'
    | 'MISC';
  export const IndustryEnum = {
    Research: 'RESEARCH' as IndustryEnum,
    Banking: 'BANKING' as IndustryEnum,
    Construction: 'CONSTRUCTION' as IndustryEnum,
    CallCenter: 'CALL_CENTER' as IndustryEnum,
    ECommerce: 'E_COMMERCE' as IndustryEnum,
    Education: 'EDUCATION' as IndustryEnum,
    Energetics: 'ENERGETICS' as IndustryEnum,
    Finances: 'FINANCES' as IndustryEnum,
    Beauty: 'BEAUTY' as IndustryEnum,
    Gastronomy: 'GASTRONOMY' as IndustryEnum,
    Hotel: 'HOTEL' as IndustryEnum,
    Hr: 'HR' as IndustryEnum,
    Engineering: 'ENGINEERING' as IndustryEnum,
    It: 'IT' as IndustryEnum,
    Logistics: 'LOGISTICS' as IndustryEnum,
    Marketing: 'MARKETING' as IndustryEnum,
    RealAssets: 'REAL_ASSETS' as IndustryEnum,
    CustomerService: 'CUSTOMER_SERVICE' as IndustryEnum,
    ManualJob: 'MANUAL_JOB' as IndustryEnum,
    Consulting: 'CONSULTING' as IndustryEnum,
    Manufacturing: 'MANUFACTURING' as IndustryEnum,
    PublicSector: 'PUBLIC_SECTOR' as IndustryEnum,
    Sales: 'SALES' as IndustryEnum,
    Transport: 'TRANSPORT' as IndustryEnum,
    Health: 'HEALTH' as IndustryEnum,
    Misc: 'MISC' as IndustryEnum,
  };
  export type WorkTimeEnum = 'FULL_TIME' | 'PART_TIME' | 'TEMPORARY';
  export const WorkTimeEnum = {
    FullTime: 'FULL_TIME' as WorkTimeEnum,
    PartTime: 'PART_TIME' as WorkTimeEnum,
    Temporary: 'TEMPORARY' as WorkTimeEnum,
  };
  export type ContractTypeEnum = 'EMPLOYMENT' | 'SPECIFIC_TASK' | 'MANDATE' | 'B2B';
  export const ContractTypeEnum = {
    Employment: 'EMPLOYMENT' as ContractTypeEnum,
    SpecificTask: 'SPECIFIC_TASK' as ContractTypeEnum,
    Mandate: 'MANDATE' as ContractTypeEnum,
    B2B: 'B2B' as ContractTypeEnum,
  };
  export type ModeEnum = 'ONSITE' | 'TELEWORK' | 'MIXED';
  export const ModeEnum = {
    Onsite: 'ONSITE' as ModeEnum,
    Telework: 'TELEWORK' as ModeEnum,
    Mixed: 'MIXED' as ModeEnum,
  };
  export type LanguageEnum = 'UA' | 'PL' | 'EN' | 'RU';
  export const LanguageEnum = {
    Ua: 'UA' as LanguageEnum,
    Pl: 'PL' as LanguageEnum,
    En: 'EN' as LanguageEnum,
    Ru: 'RU' as LanguageEnum,
  };
  export type LangEnum = 'UA' | 'PL' | 'EN' | 'RU';
  export const LangEnum = {
    Ua: 'UA' as LangEnum,
    Pl: 'PL' as LangEnum,
    En: 'EN' as LangEnum,
    Ru: 'RU' as LangEnum,
  };
}
