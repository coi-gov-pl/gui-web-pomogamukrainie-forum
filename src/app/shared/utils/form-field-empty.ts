export function formFieldEmpty(value: any): boolean {
  return value === null || value === undefined || value === '' || value?.length === 0;
}
