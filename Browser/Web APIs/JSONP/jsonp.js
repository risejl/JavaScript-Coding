/**
 * @param {string} url
 * @param {object} params
 * @param {function} callbackFn
 */

function jsonp(url, params, callbackFn) {
  function generateUrl() {
    const dataSrc = Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    return `${url}?${dataSrc}&callback=${encodeURIComponent(callbackFn)}`;
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.src = generateUrl();
    script.onerrror = function () {
      reject(new Error("JSONP request failed"));
      cleanup();
    };

    const cleanup = function () {
      document.body.removeChild(script);
      delete window[callbackFn];
    };

    window[callbackFn] = (data) => {
      resolve(data);
      cleanup();
    };

    document.body.appendChild(script);
  });
}

// Usage example
jsonp("https://api.example.com/data", { id: 123 }, "myCallback")
  .then((data) => console.log("Data received:", data))
  .catch((error) => console.error("Error:", error));
