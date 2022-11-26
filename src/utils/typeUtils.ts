export function assertNotUndefined<T>(data: T | undefined): asserts data is T {
  if (data === undefined) {
    throw new Error(`'undefined' was found unexpectedly`);
  }
}

export function assertNotNull<T>(data: T | null): asserts data is T {
  if (data === null) {
    throw new Error(`'null' was found unexpectedly`);
  }
}