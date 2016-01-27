
const domready = require('domready')
require('gsap')

const Cubic = require('..')

function illustration(el) {

  function render() {
    path.setAttribute('d', cubic.path())
  }

  var out  = {p1:220, p1a:0, p1b:0,  p2:260, p2b:75, w:250, h:437, ease:Back.easeOut, onUpdate:render}
  var over = {p1:60,  p1a:5, p1b:30, p2:45,  p2b:65,               ease:Expo.easeOut, onUpdate:render}

  var cubic = Cubic(out)
  var path = el.querySelector('path')

  // test svg node creation on first item, insert svg after img node
  if (!path) {
    var img = el.querySelector('img')
    img.parentNode.insertBefore(cubic.svg(), img.nextSibling)
    path = el.querySelector('path')
  }

  render()

  el.addEventListener('mouseover', function() {
    TweenMax.to(cubic, .25, over)
  })

  el.addEventListener('mouseout', function() {
    TweenMax.to(cubic, .25, out)
  })
}

function all(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector))
}

domready(function() {
  all('.Illustration').forEach(function(e) {
    illustration(e)
  })
})
