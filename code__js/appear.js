const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}


const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
    }
  })
}

  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll(".reveal-1").forEach(function(r) {
    observer.observe(r)
})