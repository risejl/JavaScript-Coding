function lazyload() {
  const imgs = document.getElementsByTagName("img");
  const viewHeight = document.documentElement.clientHeight;
  const scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (let i = 0; i < imgs.length; i++) {
    const offsetHeight = imgs[i].offsetTop;

    if (offsetHeight < viewHeight + scrollHeight) {
      const src = imgs[i].dataset.src;

      if (src) {
        imgs[i].src = src;
      }
    }
  }
}

window.addEventListener("scroll", lazyload);
