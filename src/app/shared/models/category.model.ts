export interface Category {
  name: CategoryNameKey;
  icon: string;
  path?: string;
  disabled?: boolean;
  selected?: boolean;
}

export enum CategoryNameKey {
  ACCOMMODATION = 'ACCOMMODATION',
  MATERIAL_HELP = 'MATERIAL_HELP',
  TRANSPORT = 'TRANSPORT',
  HEALTH = 'HEALTH',
  LEGAL_HELP = 'LEGAL_HELP',
  WORK = 'WORK',
  TRANSLATIONS = 'TRANSLATIONS',
  MISC = 'MISC',
}
