# loosely follows the jquery api:
# http://api.jquery.com/
# not chainable
$ = (selector, root=d.body) ->
  root.querySelector selector

$.extend = (object, properties) ->
  for key, val of properties
    continue unless properties.hasOwnProperty key
    object[key] = val
  return

$.DAY = 24 * ($.HOUR = 60 * ($.MINUTE = 60 * ($.SECOND = 1000)))

$.id = (id) ->
  d.getElementById id

$.ready = (fc) ->
  if d.readyState in ['interactive', 'complete']
    $.queueTask fc
    return
  cb = ->
    $.off d, 'DOMContentLoaded', cb
    fc()
  $.on d, 'DOMContentLoaded', cb

$.queueTask = do ->
  # inspired by https://www.w3.org/Bugs/Public/show_bug.cgi?id=15007
  taskQueue = []
  execTask = ->
    task = taskQueue.shift()
    func = task[0]
    args = Array::slice.call task, 1
    func.apply func, args
  if window.MessageChannel
    taskChannel = new MessageChannel()
    taskChannel.port1.onmessage = execTask
    ->
      taskQueue.push arguments
      taskChannel.port2.postMessage null
  else # XXX Firefox
    ->
      taskQueue.push arguments
      setTimeout execTask, 0
$.frag = ->
  d.createDocumentFragment()

$.nodes = (nodes) ->
  unless nodes instanceof Array
    return nodes
  frag = $.frag()
  for node in nodes
    frag.appendChild node
  frag

$.add = (parent, el) ->
  parent.appendChild $.nodes el

$.addClass = (el, className) ->
  el.classList.add className

$.rm = do ->
  if 'remove' of Element.prototype
    (el) -> el.remove()
  else
    (el) -> el.parentNode?.removeChild el

$.add = (parent, el) ->
  parent.appendChild $.nodes el

$.prepend = (parent, el) ->
  parent.insertBefore $.nodes(el), parent.firstChild

$.after = (root, el) ->
  root.parentNode.insertBefore $.nodes(el), root.nextSibling

$.before = (root, el) ->
  root.parentNode.insertBefore $.nodes(el), root

$.replace = (root, el) ->
  root.parentNode.replaceChild $.nodes(el), root

$.el = (tag, properties) ->
  el = d.createElement tag
  $.extend el, properties if properties
  el

$.asap = (test, cb) ->
  if test()
    cb()
  else
    setTimeout $.asap, 25, test, cb

$.addStyle = (css, id) ->
  style = $.el 'style',
    id: id
    textContent: css
  $.asap (-> d.head), ->
    $.add d.head, style
  style

$.rmAll = (root) ->
  # jsperf.com/emptify-element
  while node = root.firstChild
    # HTMLSelectElement.remove !== Element.remove
    root.removeChild node
  return

$.on = (el, events, handler) ->
  for event in events.split ' '
    el.addEventListener event, handler, false
  return

$.off = (el, events, handler) ->
  for event in events.split ' '
    el.removeEventListener event, handler, false
  return

$$ = (selector, root=d.body) ->
  [root.querySelectorAll(selector)...]
