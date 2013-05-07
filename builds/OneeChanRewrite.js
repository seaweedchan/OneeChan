(function() {
  var $, $$, Conf, Config, Main, Options, c, d, doc, g,
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

  $.add = function(parent, el) {
    return parent.appendChild($.nodes(el));
  };

  $.prepend = function(parent, el) {
    return parent.insertBefore($.nodes(el), parent.firstChild);
  };

  $.after = function(root, el) {
    return root.parentNode.insertBefore($.nodes(el), root.nextSibling);
  };

  $.before = function(root, el) {
    return root.parentNode.insertBefore($.nodes(el), root);
  };

  $.replace = function(root, el) {
    return root.parentNode.replaceChild($.nodes(el), root);
  };

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

      Options.init();
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
      $.asap((function() {
        return $("link[rel='stylesheet']", d.head);
      }), Main.insertCSS());
      return $.ready(function() {
        return Main.DOMLoaded();
      });
    },
    insertCSS: function() {
      var css;

      css = ".mobile {\n	display: none;\n}\n/* Some original Yotsuba CSS */\ndiv.post div.file .fileThumb {\n	float: left;\n	margin-left: 20px;\n	margin-right: 20px;\n	margin-top: 3px;\n	margin-bottom: 5px;\n}\n.postContainer {\n	display: block;\n}\ndiv.post blockquote.postMessage {\n	display: block;\n}\ndiv.post {\n	margin: 4px 0;\n}\n#delform div.reply:not([hidden]), div.image_expanded {\n	display: table;\n}\ndiv.thread {\n	margin: 0px;\n	clear: both;\n}\ntable.flashListing {\n	border-spacing: 1px;\n	margin-left: auto;\n	margin-right: auto;\n}\ndiv.pagelist div.pages {\n	padding: 4px;\n}\n.globalMessage {\n	text-align: center;\n}\n.prettyprint {\n    padding: 5px;\n    display: inline-block;\n    max-height: 400px;\n    overflow-x: auto;\n    max-width: 600px;\n}\nspan.spoiler {\n    color: rgb(0, 0, 0) !important;\n    background: none repeat scroll 0% 0% rgb(0, 0, 0) !important;\n}\nspan.spoiler:hover, span.spoiler:focus {\n    color: rgb(255, 255, 255) !important;\n}";
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

  Options = {
    saveAndClose: true,
    init: function() {
      var a;

      a = $.el('span', {
        className: 'shortcut',
        innerHTML: '[<a href=javascript:; id=OneeChanLink title="OneeChan Settings">OneeChan</a>]'
      });
      return $.before($("#shortcuts>.shortcut:last-of-type"), a);
    },
    show: function() {
      var MAX, cFonts, des, i, id, key, name, optionsHTML, opts, overlay, pVal, tOptions, val, value;

      if (!$("#overlay").exists()) {
        overlay = $("<div id=overlay>").bind("click", $SS.options.close);
        tOptions = $("<div id=themeoptions class=reply>").bind("click", function(e) {
          return e.stopPropagation();
        });
        optionsHTML = "<ul id=toNav>" + "<li><label class=selected for=tcbMain>Main</label></li>" + "<li><label for=tcbThemes>Themes</label></li>" + "<li><label for=tcbMascots>Mascots</label></li>" + "</ul><div id=toWrapper><input type=radio name=toTab id=tcbMain hidden checked><div id=tMain>" + "<p><a class=trbtn name=loadSysFonts title='Reqiures flash'>" + ($SS.fontList ? "System Fonts Loaded!" : "Load System Fonts") + "</a>" + "<span id=SSVersion>OneeChan v" + VERSION + "</span>" + "<a href='https://raw.github.com/seaweedchan/OneeChan/stable/OneeChan.user.js' id=updatelink target='_blank'>Update</a><span class=linkdelimiter> | </span>" + "<a href='https://raw.github.com/seaweedchan/OneeChan/master/changelog' id=changeloglink target='_blank'>Changelog</a><span class=linkdelimiter> | </span>" + "<a href='https://github.com/seaweedchan/OneeChan/issues' id=issueslink target='_blank'>Issues</a></p>";
        key = void 0;
        val = void 0;
        des = void 0;
        for (key in defaultConfig) {
          if ((key === "Style Scrollbars" && !$SS.browser.webkit) || key === "Nav Link Delimiter" || /^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key)) {
            continue;
          }
          val = $SS.conf[key];
          des = defaultConfig[key][1];
          if ((defaultConfig[key][4] === true) && (key === "Non-Sidebar Custom Margin")) {
            pVal = $SS.conf[defaultConfig[key][2]];
            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
            optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" + (pVal !== defaultConfig[key][3] ? "hidden" : "") + "><span>" + key + "</span><input name='Non-Sidebar Custom Margin' type=text value=" + $SS.conf["Non-Sidebar Custom Margin"] + "px></label>";
          } else if ((defaultConfig[key][4] === true) && (key === "Sidebar Side Custom Margin")) {
            pVal = $SS.conf[defaultConfig[key][2]];
            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
            optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" + (pVal !== defaultConfig[key][3] ? "hidden" : "") + "><span>" + key + "</span><input name='Sidebar Side Custom Margin' type=text value=" + $SS.conf["Sidebar Side Custom Margin"] + "px></label>";
          } else if (val === "header") {
            optionsHTML += "<label class='mOption header'><span>" + key + "</span></label>";
          } else if (defaultConfig[key][4] === true) {
            pVal = $SS.conf[defaultConfig[key][2]];
            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
            optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" + (pVal !== defaultConfig[key][3] ? "hidden" : "") + "><span>" + key + "</span><input" + (val ? " checked" : "") + " name='" + key + "' type=checkbox></label>";
          } else if (Array.isArray(defaultConfig[key][2])) {
            opts = (key === "Font Family" ? $SS.fontList || defaultConfig[key][2] : defaultConfig[key][2]);
            cFonts = [];
            optionsHTML += "<span class=mOption title=\"" + des + "\"><span>" + key + "</span>" + "<select name='" + key + "'" + (defaultConfig[key][3] === true ? " hasSub" : "") + ">";
            i = 0;
            MAX = opts.length;
            while (i < MAX) {
              name = void 0;
              value = void 0;
              if (typeof opts[i] === "object") {
                name = opts[i].name;
                value = opts[i].value;
              } else {
                name = value = opts[i];
              }
              if (key === "Font Family") {
                cFonts.push(value);
              }
              optionsHTML += "<option" + (key === "Font Family" ? " style=\"font-family:" + $SS.formatFont(value) + "!important\"" : "") + " value='" + value + "'" + (value === val ? " selected" : "") + ">" + name + "</option>";
              ++i;
            }
            if (key === "Font Family" && cFonts.indexOf($SS.conf["Font Family"]) === -1) {
              optionsHTML += "<option style=\"font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important\" value='" + $SS.conf["Font Family"] + "' selected>" + $SS.conf["Font Family"] + "</option>";
            }
            optionsHTML += "</select></span>";
          } else if (key === "Font Size") {
            optionsHTML += "<span class=mOption title=\"" + des + "\"><span>" + key + "</span>" + "<input type=text name='Font Size' value=" + $SS.conf["Font Size"] + "px></span>";
          } else if (key === "Themes") {
            optionsHTML += "</div><input type=radio name=toTab id=tcbThemes hidden><div id=tThemes>";
          } else if (key === "Mascots") {
            optionsHTML += "</div><input type=radio name=toTab id=tcbMascots hidden><div id=tMascot>";
          } else {
            optionsHTML += "<label class=mOption title=\"" + des + "\"><span>" + key + "</span><input" + (val ? " checked" : "") + " name='" + key + "' " + (defaultConfig[key][3] === true ? " hasSub" : "") + " type=checkbox></label>";
          }
        }
        optionsHTML += "</div></div><div><a class=trbtn name=save title='Hold any modifier to prevent window from closing'>Save</a><a class=trbtn name=cancel>Cancel</a></div>";
        tOptions.html(optionsHTML);
        overlay.append(tOptions);
        $("#toNav li label", tOptions).bind("click", function(e) {
          if ($(this).hasClass("selected")) {
            return;
          }
          $("#toNav li label.selected").removeClass("selected");
          return $(this).addClass("selected");
        });
        $("[hasSub]", tOptions).bind("change", function() {
          var sub;

          id = this.name.replace(/\s/g, "_") + $(this).val();
          sub = $("." + id);
          if (sub.exists()) {
            return sub.each(function() {
              return $(this).show();
            });
          } else {
            return $("[class*='" + this.name.replace(/\s/g, "_") + "']").each(function() {
              return $(this).hide();
            });
          }
        });
        $("a[name=save]", tOptions).bind("click", $SS.options.save);
        $("a[name=cancel]", tOptions).bind("click", $SS.options.close);
        $(document).bind("keydown", $SS.options.keydown).bind("keyup", $SS.options.keyup);
        $("input[name='Font Size']", tOptions).bind("keydown", function(e) {
          var bitmap;

          val = parseInt($(this).val());
          bitmap = $(this).parent().nextSibling().children("input[name='Bitmap Font']").val();
          if (e.keyCode === 38 && (val < MAX_FONT_SIZE || bitmap)) {
            return $(this).val(++val + "px");
          } else {
            if (e.keyCode === 40 && (val > MIN_FONT_SIZE || bitmap)) {
              return $(this).val(--val + "px");
            }
          }
        });
        if (!$SS.fontList) {
          $("a[name=loadSysFonts]", tOptions).bind("click", $SS.options.loadSystemFonts);
        }
        $SS.options.createThemesTab(tOptions);
        $SS.options.createMascotsTab(tOptions);
        return $(document.body).append(overlay);
      }
    }
  };

}).call(this);
