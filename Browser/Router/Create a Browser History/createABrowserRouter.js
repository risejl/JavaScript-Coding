class BrowserHistory {
  constructor(url) {
    this._history = url ? [url] : [];
    this._currIdx = 0;
  }

  visit(url) {
    this._history.length = this._currIdx + 1;
    this._history.push(url);
    this._currIdx += 1;
  }

  get current() {
    return this._history.at(this._currIdx);
  }

  goBack() {
    if (this._currIdx <= 0) {
      return;
    }
    this._currIdx -= 1;
  }

  forward() {
    if (this._currIdx >= this._history.length - 1) {
      return;
    }
    this._currIdx += 1;
  }
}

// Usage example
const browser = new BrowserHistory("https://example.com");
console.log(browser.current); // Output => "https://example.com"

browser.visit("https://example.org");
console.log(browser.current); // Output => "https://example.org"

browser.goBack();
console.log(browser.current); // Output => "https://example.com"

browser.forward();
console.log(browser.current); // Output => "https://example.org"

browser.goBack();

// After visiting multiple URLs and going back and forth
console.log(browser.current); // Output => "https://example.com"
