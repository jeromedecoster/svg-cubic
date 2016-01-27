
module.exports = Cubic

function Cubic(opt) {
  if (!(this instanceof Cubic)) return new Cubic(opt)

  var _w = 100
  Object.defineProperty(this, 'w', {
    get: function() { return _w },
    set: function(val) {
      if (typeof val != 'number') return
      _w = val >= 0 ? val : 0
    }
  })
  var _h = 100
  Object.defineProperty(this, 'h', {
    get: function() { return _h },
    set: function(val) {
      if (typeof val != 'number') return
      _h = val >= 0 ? val : 0
    }
  })
  var _d = 'bottom'
  Object.defineProperty(this, 'd', {
    get: function() { return _d },
    set: function(val) {
      if (val != 'bottom' && val != 'left' && val != 'top' && val != 'right') return
      _d = val
    }
  })

  opt      = opt || {}
  this.w   = opt.w
  this.h   = opt.h
  this.d   = opt.d
  this.p1  = opt.p1  != undefined ? opt.p1  : 0
  this.p1a = opt.p1a != undefined ? opt.p1a : 0
  this.p1b = opt.p1b != undefined ? opt.p1b : 0
  this.p2  = opt.p2  != undefined ? opt.p2  : 0
  this.p2a = opt.p2a != undefined ? opt.p2a : 0
  this.p2b = opt.p2b != undefined ? opt.p2b : 0
}

Cubic.prototype.path = function() {
  var w   = this.w
  var h   = this.h
  var p1  = this.p1
  var p1a = this.p1a
  var p1b = this.p1b
  var p2  = this.p2
  var p2a = this.p2a
  var p2b = this.p2b

  if (this.d == 'bottom') return 'M0 0 V' + p1 +
    ' C' + p1b       + ' ' + (p1+p1a) + ' ' + (w/2-p2b) + ' ' + (p2+p2a) + ' ' + (w/2) + ' ' + p2 +
    ' C' + (w/2+p2b) + ' ' + (p2+p2a) + ' ' + (w-p1b)   + ' ' + (p1+p1a) + ' ' + w     + ' ' + p1 +
    ' V0 z'

  if (this.d == 'top') return 'M0 ' + h + ' V' + (h-p1) +
    ' C' + p1b       + ' ' + (h-p1-p1a) + ' ' + (w/2-p2b) + ' ' + (h-p2-p2a) + ' ' + (w/2) + ' ' + (h-p2) +
    ' C' + (w/2+p2b) + ' ' + (h-p2-p2a) + ' ' + (w-p1b)   + ' ' + (h-p1-p1a) + ' ' + w     + ' ' + (h-p1) +
    ' V' + h + ' z'

  if (this.d == 'left') return 'M' + w + ' 0 H' + (w-p1) +
    ' C' + (w-p1-p1a) + ' ' + p1b       + ' ' + (w-p2-p2a) + ' ' + (h/2-p2b) + ' ' + (w-p2) + ' ' + (h/2) +
    ' C' + (w-p2-p2a) + ' ' + (h/2+p2b) + ' ' + (w-p1-p1a) + ' ' + (h-p1b)   + ' ' + (w-p1) + ' ' + h +
    ' H' + w + ' z'

  if (this.d == 'right') return 'M0 0 H' + p1 +
    ' C' + (p1+p1a) + ' ' + p1b       + ' ' + (p2+p2a) + ' ' + (h/2-p2b) + ' ' + p2 + ' ' + (h/2) +
    ' C' + (p2+p2a) + ' ' + (h/2+p2b) + ' ' + (p1+p1a) + ' ' + (h-p1b)   + ' ' + p1 + ' ' + h +
    ' H0 z'
}

Cubic.prototype.svg = function() {
  var el = document.createElement('div')
  el.innerHTML = '<svg viewBox="0 0 ' + this.w + ' ' + this.h + '" preserveAspectRatio="none">' +
  '<path d="' + this.path() + '"></path></svg>'
  return el.removeChild(el.firstChild)
}

