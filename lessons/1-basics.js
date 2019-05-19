/**
 * Please convert this file to Typescript.
 * You might discover a bug!
 *
 * Lessons:
 *  Typescript language features:
 *   1. Parameter types
 *   2. Return types
 *   3. Interfaces
 *
 *  VSCode features:
 *   1. Autocomplete
 *   2. Hovering
 */

function sortByName(people) {
  return people.sort((a, b) => {
    return a.name.localCompare(b.name);
  });
}
