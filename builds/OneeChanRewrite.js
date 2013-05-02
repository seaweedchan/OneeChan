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

  $.frag = function() {
    return d.createDocumentFragment();
  };

  $.nodes = function(nodes) {
    var frag, node, _i, _len;

    if (!(nodes instanceof Array)) {
      return nodes;
    }
    frag = $.frag();
    for (_i = 0, _len = nodes.length; _i < _len; _i++) {
      node = nodes[_i];
      frag.appendChild(node);
    }
    return frag;
  };

  $.add = function(parent, el) {
    return parent.appendChild($.nodes(el));
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

  $.el = function(tag, properties) {
    var el;

    el = d.createElement(tag);
    if (properties) {
      $.extend(el, properties);
    }
    return el;
  };

  $.asap = function(test, cb) {
    if (test()) {
      return cb();
    } else {
      return setTimeout($.asap, 25, test, cb);
    }
  };

  $.addStyle = function(css, id) {
    var style;

    style = $.el('style', {
      id: id,
      textContent: css
    });
    $.asap((function() {
      return d.head;
    }), function() {
      return $.add(d.head, style);
    });
    return style;
  };

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
          return div.textContent = 'x';
        }
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
      if (Main.browser.gecko || $("link[rel='stylesheet']", d.head)) {
        Main.insertCSS();
      } else {
        $.ready(function() {
          return Main.insertCSS();
        });
      }
      return $.ready(function() {
        return Main.DOMLoaded();
      });
    },
    insertCSS: function() {
      var css;

      css = "";
      if (!$.id("ch4SS")) {
        return $.addStyle(css, 'ch4SS');
      }
    }
  };

  Main.init();

}).call(this);
