/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */

function virtualize(element) {
  const virtualNode = {
    type: element.tagName.toLowerCase(),
    props: {},
  };

  // handle attributes
  Array.from(element.attributes).forEach((attribute) => {
    const name = attribute.name === "class" ? "className" : attribute.name;
    virtualNode.props[name] = attribute.value;
  });

  // handle children
  const children = Array.from(element.childNodes).map((child) => {
    return child.nodeType === Node.TEXT_NODE
      ? child.textContent
      : virtualize(child);
  });

  // assign children
  virtualNode.props.children = children.length === 1 ? children[0] : children;

  return virtualNode;
}

/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(obj) {
  if (typeof obj === "string") {
    return document.createTextNode(obj);
  }

  const {
    type,
    props: { children, ...attrs },
  } = obj;
  let element = document.createElement(type);
  for (let attr in attrs) {
    element.setAttributeNS(null, attr, attrs[attr]);
  }

  let childrenAttr = Array.isArray(children) ? children : [children];
  for (let child of childrenAttr) {
    element.append(render(child));
  }
  return element;
}
