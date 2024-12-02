function calculateSpecificity(selector) {
  // Initialize counts for different specificity levels
  let inlineStyle = 0;
  let idCount = 0;
  let classCount = 0;
  let elementCount = 0;

  // Handle inline style
  if (selector.includes("style=")) {
    return 1000;
  }

  // Split the selector into parts
  const parts = selector.trim().split(/\s+|>/);

  parts.forEach((part) => {
    // Count IDs (#)
    idCount += (part.match(/#/g) || []).length;

    // Count classes (.), attributes [], and pseudo-classes (:)
    classCount += (part.match(/\.|\.|\[.*\]|:/g) || []).length;

    // Count elements and pseudo-elements (::)
    elementCount += (part.match(/^[a-zA-Z]|::/g) || []).length;
  });

  // Return specificity as a number
  return idCount * 100 + classCount * 10 + elementCount;
}

function compareSpecificity(selector1, selector2) {
  const spec1 = calculateSpecificity(selector1);
  const spec2 = calculateSpecificity(selector2);

  return {
    selector1Specificity: spec1,
    selector2Specificity: spec2,
    winner:
      spec1 > spec2
        ? selector1
        : spec1 < spec2
        ? selector2
        : "Equal specificity - last one wins",
  };
}

// Example comparisons
console.log(compareSpecificity("#header .nav", ".nav"));
// Output: { selector1Specificity: 110, selector2Specificity: 10, winner: '#header .nav' }

console.log(compareSpecificity("div.user", "#user"));
// Output: { selector1Specificity: 11, selector2Specificity: 100, winner: '#user' }
