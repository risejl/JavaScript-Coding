// Solution 1: `XHR` based
/**
 * @param {Object} options
 */

function ajax(options) {
  const xhr = new XMLHttpRequest();

  options = options ?? {};
  options.type = (options.type ?? "GET").toUpperCase();
  options.dataType = options.dataType ?? "json";
  const params = options.data;

  if (options.type === "GET") {
    xhr.open("GET", options.url + "?" + param, true);
    xhr.send(null);
  } else if (options.type === "POST") {
    xhr.open("POST", options.url, true);
    xhr.send(params);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let status = xhr.status;
      if (status >= 200 && status < 300) {
        options.success && options.success(xhr.responseText, xhr.responseXML);
      } else {
        options.fail && options.fail(status);
      }
    }
  };
}

// Solution 2: `fetch` based
function ajax(method, url) {
  fetch(url, {
    method,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Fetch error", error));
}

// Usage example
ajax({
  type: "post",
  dataType: "json",
  data: {},
  url: "https://xxxx",
  success: function (text, xml) {
    console.log(text);
  },
  fail: function (status) {
    console.log(status);
  },
});
