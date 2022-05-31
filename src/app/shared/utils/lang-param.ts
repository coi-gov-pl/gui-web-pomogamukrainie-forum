export function langParam(lang: string): string {
  const langCode = lang.split('_')[0];
  switch (langCode) {
    case 'uk':
      return 'UA';
    default:
      return langCode.toUpperCase();
  }
}
