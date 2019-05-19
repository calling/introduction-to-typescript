/**
 * Please convert this file to Typescript.
 * You might discover a bug!
 */

function sortByName(people) {
  return people.sort((a, b) => {
    return a.name.localCompare(b.name);
  });
}
