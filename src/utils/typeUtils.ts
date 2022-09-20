export function assertNotUndefined<T>(data: T | undefined): asserts data is T {
  if (data === undefined) {
    throw new Error(`'undefined' was found unexpectedly`);
  }
}