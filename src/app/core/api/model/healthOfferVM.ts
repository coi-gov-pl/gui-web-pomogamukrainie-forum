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

export interface HealthOfferVM {
  id: number;
  userFirstName: string;
  title: string;
  description: string;
  phoneNumber?: string;
  phoneCountryCode?: string;
  modifiedDate?: string;
  detectedLanguage?: HealthOfferVM.DetectedLanguageEnum;
  mode: Array<HealthOfferVM.ModeEnum>;
  specialization: HealthOfferVM.SpecializationEnum;
  location?: Location;
  language: Array<HealthOfferVM.LanguageEnum>;
  type: HealthOfferVM.TypeEnum;
}
export namespace HealthOfferVM {
  export type DetectedLanguageEnum = 'UA' | 'PL' | 'EN' | 'RU';
  export const DetectedLanguageEnum = {
    Ua: 'UA' as DetectedLanguageEnum,
    Pl: 'PL' as DetectedLanguageEnum,
    En: 'EN' as DetectedLanguageEnum,
    Ru: 'RU' as DetectedLanguageEnum,
  };
  export type ModeEnum = 'IN_FACILITY' | 'AT_HOME' | 'ONLINE' | 'BY_PHONE';
  export const ModeEnum = {
    InFacility: 'IN_FACILITY' as ModeEnum,
    AtHome: 'AT_HOME' as ModeEnum,
    Online: 'ONLINE' as ModeEnum,
    ByPhone: 'BY_PHONE' as ModeEnum,
  };
  export type SpecializationEnum =
    | 'GENERAL'
    | 'PEDIATRICS'
    | 'PSYCHOLOGY'
    | 'GYNECOLOGY'
    | 'NURSING'
    | 'STOMATOLOGY'
    | 'MISC';
  export const SpecializationEnum = {
    General: 'GENERAL' as SpecializationEnum,
    Pediatrics: 'PEDIATRICS' as SpecializationEnum,
    Psychology: 'PSYCHOLOGY' as SpecializationEnum,
    Gynecology: 'GYNECOLOGY' as SpecializationEnum,
    Nursing: 'NURSING' as SpecializationEnum,
    Stomatology: 'STOMATOLOGY' as SpecializationEnum,
    Misc: 'MISC' as SpecializationEnum,
  };
  export type LanguageEnum = 'UA' | 'PL' | 'EN' | 'RU';
  export const LanguageEnum = {
    Ua: 'UA' as LanguageEnum,
    Pl: 'PL' as LanguageEnum,
    En: 'EN' as LanguageEnum,
    Ru: 'RU' as LanguageEnum,
  };
  export type TypeEnum = 'HEALTH';
  export const TypeEnum = {
    Health: 'HEALTH' as TypeEnum,
  };
}
