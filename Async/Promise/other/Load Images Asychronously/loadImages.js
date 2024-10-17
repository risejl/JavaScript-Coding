function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load image at ${url}`));
    
    img.src = url;
  });
}

function loadImages(urls) {
  const promises = urls.map(url => loadImage(url));
  
  return Promise.all(promises)
    .then(images => {
      images.forEach(img => document.body.appendChild(img));
      console.log('All images loaded successfully!');
    })
    .catch(err => {
      console.error(err);
    });
}

// Usage example
const imageUrls = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300?random=1',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=3',
  'https://picsum.photos/200/300?random=4'
];

loadImages(imageUrls);