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

$.debounce = (wait, fn) ->
  lastCall = 0
  timeout  = null
  that     = null
  args     = null
  exec = ->
    lastCall = Date.now()
    fn.apply that, args
  ->
    args = arguments
    that = this
    if lastCall < Date.now() - wait
      return exec()
    # stop current reset
    clearTimeout timeout
    # after wait, let next invocation execute immediately
    timeout = setTimeout exec, wait


$.addClass = (el, className) ->
  el.classList.add className

$.rm = do ->
  if 'remove' of Element.prototype
    (el) -> el.remove()
  else
    (el) -> el.parentNode?.removeChild el

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
