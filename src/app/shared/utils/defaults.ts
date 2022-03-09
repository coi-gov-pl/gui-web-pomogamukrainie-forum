export function defaults<T>(defaults: Partial<T> = {}) {
  return {
    ...defaults,
  } as T;
}
