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

export interface TranslationOfferDefinitionDTO {
  title: string;
  description: string;
  mode: Array<TranslationOfferDefinitionDTO.ModeEnum>;
  location?: Location;
  language: Array<TranslationOfferDefinitionDTO.LanguageEnum>;
  phoneNumber?: string;
}
export namespace TranslationOfferDefinitionDTO {
  export type ModeEnum = 'STATIONARY' | 'WITH_ACCESS' | 'ONLINE' | 'BY_EMAIL' | 'BY_PHONE';
  export const ModeEnum = {
    Stationary: 'STATIONARY' as ModeEnum,
    WithAccess: 'WITH_ACCESS' as ModeEnum,
    Online: 'ONLINE' as ModeEnum,
    ByEmail: 'BY_EMAIL' as ModeEnum,
    ByPhone: 'BY_PHONE' as ModeEnum,
  };
  export type LanguageEnum = 'UA' | 'PL' | 'EN' | 'RU';
  export const LanguageEnum = {
    Ua: 'UA' as LanguageEnum,
    Pl: 'PL' as LanguageEnum,
    En: 'EN' as LanguageEnum,
    Ru: 'RU' as LanguageEnum,
  };
}
