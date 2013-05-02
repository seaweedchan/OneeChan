(function() {
  var $, $$, Conf, Config, Main, c, d, doc, g,
    __slice = [].slice;

  Config = {
    Main: {
      'Miscellaneous': {
        'Test': [true, 'This option is a placeholder.']
      }
    }
  };

  Conf = {};

  c = console;

  d = document;

  doc = d.documentElement;

  g = {
    VERSION: '5.0.0',
    NAMESPACE: 'OneeChanRewrite.',
    boards: {},
    threads: {},
    posts: {}
  };

  $ = function(selector, root) {
    if (root == null) {
      root = d.body;
    }
    return root.querySelector(selector);
  };

  $.extend = function(object, properties) {
    var key, val;

    for (key in properties) {
      val = properties[key];
      if (!properties.hasOwnProperty(key)) {
        continue;
      }
      object[key] = val;
    }
  };

  $.DAY = 24 * ($.HOUR = 60 * ($.MINUTE = 60 * ($.SECOND = 1000)));

  $.id = function(id) {
    return d.getElementById(id);
  };

  $.ready = function(fc) {
    var cb, _ref;

    if ((_ref = d.readyState) === 'interactive' || _ref === 'complete') {
      $.queueTask(fc);
      return;
    }
    cb = function() {
      $.off(d, 'DOMContentLoaded', cb);
      return fc();
    };
    return $.on(d, 'DOMContentLoaded', cb);
  };

  $.queueTask = (function() {
    var execTask, taskChannel, taskQueue;

    taskQueue = [];
    execTask = function() {
      var args, func, task;

      task = taskQueue.shift();
      func = task[0];
      args = Array.prototype.slice.call(task, 1);
      return func.apply(func, args);
    };
    if (window.MessageChannel) {
      taskChannel = new MessageChannel();
      taskChannel.port1.onmessage = execTask;
      return function() {
        taskQueue.push(arguments);
        return taskChannel.port2.postMessage(null);
      };
    } else {
      return function() {
        taskQueue.push(arguments);
        return setTimeout(execTask, 0);
      };
    }
  })();

  $.debounce = function(wait, fn) {
    var args, exec, lastCall, that, timeout;

    lastCall = 0;
    timeout = null;
    that = null;
    args = null;
    exec = function() {
      lastCall = Date.now();
      return fn.apply(that, args);
    };
    return function() {
      args = arguments;
      that = this;
      if (lastCall < Date.now() - wait) {
        return exec();
      }
      clearTimeout(timeout);
      return timeout = setTimeout(exec, wait);
    };
  };

  $.addClass = function(el, className) {
    return el.classList.add(className);
  };

  $.rm = (function() {
    if ('remove' in Element.prototype) {
      return function(el) {
        return el.remove();
      };
    } else {
      return function(el) {
        var _ref;

        return (_ref = el.parentNode) != null ? _ref.removeChild(el) : void 0;
      };
    }
  })();

  $.rmAll = function(root) {
    var node;

    while (node = root.firstChild) {
      root.removeChild(node);
    }
  };

  $.on = function(el, events, handler) {
    var event, _i, _len, _ref;

    _ref = events.split(' ');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      event = _ref[_i];
      el.addEventListener(event, handler, false);
    }
  };

  $.off = function(el, events, handler) {
    var event, _i, _len, _ref;

    _ref = events.split(' ');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      event = _ref[_i];
      el.removeEventListener(event, handler, false);
    }
  };

  $$ = function(selector, root) {
    if (root == null) {
      root = d.body;
    }
    return __slice.call(root.querySelectorAll(selector));
  };

  Main = {
    browser: {},
    DOMLoaded: function(reload) {
      var div;

      if (!reload) {
        if (!($('*[xmlns]') || $.id('ctxmenu-main'))) {
          $.rm($("link[rel='stylesheet']", d.head));
        }
        if (div = $('#globalMessage *[style]')) {
          div.removeAttribute('style');
        }
        if (div = $.id('ctxmenu-main')) {
          $.addClass(doc, 'catalog');
        }
        if (div = $('.cataloglink>a')) {
          div.textContent = 'C';
        }
        if (div = $('.closeIcon')) {
          div.textContent = 'x';
        }
        return console.log("hello");
      }
    },
    init: function(reload) {
      var m_VERSION,
        _this = this;

      if (!reload) {
        if (/^about:neterror/.test(doc.documentURI)) {
          return;
        }
        localStorage["4chan-settings"] = "{ \"disableAll\" : true }";
        m_VERSION = void 0;
        Main.browser.webkit = /AppleWebKit/.test(navigator.userAgent);
        Main.browser.gecko = /Gecko\//.test(navigator.userAgent);
        /*
        	    Main.location = getLocation()
        	    
        	    correct selected theme/mascot after updating
        	    and the number defaults has changed.
        
        	    if (m_VERSION = Config.get("VERSION")) isnt VERSION
        	      ntMascots = Mascots.defaults.length # new total
        	      ntThemes = Themes.defaults.length
        	      otMascots = Config.get("Total Mascots") # old total
        	      otThemes = Config.get("Total Themes")
        	      sMascots = Config.get("Selected Mascots")
        	      sTheme = Config.get("Selected Theme")
        	      if otMascots isnt ntMascots and otMascots isnt `undefined`
        	        mDiff = ntMascots - otMascots
        	        i = 0
        	        MAX = sMascots.length
        
        	        while i < MAX
        	          if sMascots[i] < otMascots
        	            break
        	          else
        	            sMascots[i] += mDiff
        	          ++i
        	        Config.set "Selected Mascots", sMascots
        	      if otThemes isnt ntThemes and otThemes isnt `undefined` and sTheme >= otThemes
        	        sTheme += ntThemes - otThemes
        	        Config.set "Selected Theme", sTheme
        	      Config.set "VERSION", VERSION
        	      Config.set "Total Mascots", ntMascots
        	      Config.set "Total Themes", ntThemes
        	  Config.init()
        	  Themes.init()
        	  Mascots.init()
        */

      }
      if (reload) {
        Main.DOMLoaded(true);
      } else {
        $.ready(function() {
          return Main.DOMLoaded();
        });
      }
      return Main.DOMLoaded();
    }
  };

  Main.init();

}).call(this);
