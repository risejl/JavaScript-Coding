/**
 * @return {object}
 */

function getTagCount() {
  const result = {};
  const documentTags = document.getElementsByTagName("*");

  for (const node of documentTags) {
    const tagName = node.tagName.toLowerCase();

    if (!Object.hasOwn(result, tagName)) {
      result[tagName] = 1;
    } else {
      result[tagName] += 1;
    }
  }

  return result;
}

// Usage example
console.log(getTagCount()); // Example output: { html: 1, head: 1, body: 1, div: 2, script: 1 }
