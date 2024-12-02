const box = document.getElementsByClassName("box")[0];
const hash = window.location.hash;

class HashRouter {
  constructor(hashStr, cb) {
    this.hashStr = hashStr;
    this.cb = cb;
    this.watchHash();
    this.watch = this.watchHash.bind(this);
    window.addEventListener("hashchange", this.watch);
  }

  watchHash() {
    let hash = window.location.hash.slice(1);
    this.hashStr = hash;
    this.cb(hash);
  }
}

new HashRouter("red", (color) => {
  box.style.background = color;
});
