/**
 * @param {HTMLElement} el - element to be wrapped
 */

function $(el) {
  return {
    css: function (propertyName, value) {
      el.style[propertyName] = value;
      return this;
    },
  };
}

// Usage example
$("#button")
  .css("color", "#fff")
  .css("backgroundColor", "#000")
  .css("fontWeight", "bold");
