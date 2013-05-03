// ==UserScript==
// @name         OneeChanRewrite
// @version      5.0.0
// @namespace    OneeChanRewrite
// @description  Customize 4chan to your liking right on the page itself.
// @license      GPLv3; https://github.com/seaweedchan/OneeChan/blob/master/LICENSE 
// @match        *://www.4chan.org/
// @match        *://boards.4chan.org/*
// @match        *://sys.4chan.org/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_openInTab
// @run-at       document-start
// @updateURL 	 https://github.com/seaweedchan/OneeChan/raw/stable/builds/OneeChan.meta.js
// @downloadURL  https://github.com/seaweedchan/OneeChan/raw/stable/builds/OneeChan.user.js
// @icon         data:image/png;base64,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
// ==/UserScript==
(function() {
  var $, $$, Conf, Config, Main, c, d, doc, g,
    __slice = [].slice;

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
    DOMLoaded: function() {
      var div;

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
      /*
      unless Main.browser.webkit
        checkbox = $$ "input[type=checkbox]", d.body
        checkbox.RiceCheck()
      
      if Conf["Smart Tripcode Hider"]
        name = $("input[name=name]")
        TripHider.init name
        TripHider.handle name
      */

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

      css = ".mobile { display: none; }";
      if (!$.id("ch4SS")) {
        return $.addStyle(css, 'ch4SS');
      }
    }
  };

  Main.init();

  Config = {
    hasGM: typeof GM_deleteValue !== "undefined",
    init: function() {
      var key, parseVal;

      parseVal = function(key, val) {
        var MAX, i, ret;

        if (/^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key)) {
          if (key === "Selected Theme") {
            return parseInt(val);
          } else if (key === "NSFW Theme") {
            return parseInt(val);
          } else {
            if (key === "Selected Mascots" && val === 0) {
              return 0;
            }
          }
          i = 0;
          MAX = val.length;
          ret = [];
          while (i < MAX) {
            ret[i] = parseInt(val[i]);
            ++i;
          }
          return ret;
        }
        if (Array.isArray(val) && typeof val[0] !== "object") {
          return val[0];
        } else {
          return val;
        }
      };
      Conf = [];
      for (key in defaultConfig) {
        Conf[key] = parseVal(key, this.get(key));
      }
      Conf["Small Font Size"] = (Conf["Font Size"] > 11 && !Conf["Bitmap Font"] ? 12 : Conf["Font Size"]);
      Conf["Sidebar Position String"] = (Conf["Sidebar Position"] !== 2 ? "right" : "left");
      return Conf["Sidebar Position oString"] = (Conf["Sidebar Position"] !== 2 ? "left" : "right");
    },
    get: function(name) {
      var val;

      val = (this.hasGM ? GM_getValue(NAMESPACE + name) : localStorage.getItem(NAMESPACE + name));
      if (val !== undefined) {
        return JSON.parse(val);
      }
      return defaultConfig[name];
    },
    set: function(name, val) {
      name = NAMESPACE + name;
      if (typeof val !== "number") {
        val = JSON.stringify(val);
      }
      if (this.hasGM) {
        GM_setValue(name, val);
      } else {
        localStorage.removeItem(name, val);
      }
      return localStorage.setItem(name, val);
    }
  };

}).call(this);
