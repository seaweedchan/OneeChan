// ==UserScript==
// @name         OneeChan
// @version      5.0.0
// @namespace    OneeChan
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
(function()
{
    var defaultConfig =
    {
        "--Main Rice--":                     [ "header",  "" ],
        "Page Layout":
        [
            1, "Change the layout of the main content",
            [
                { name: "Fit Width",   value: 1 },
                { name: "Fit Content", value: 2 },
                { name: "Centered",    value: 3 }
            ]
        ],
        "Non-Sidebar Margin":
        [
            25, "Change the size of the margin opposite of the sidebar",
            [
                { name: "Large",    value: 65 },
                { name: "Medium",   value: 25 },
                { name: "Small",    value: 5  },
                { name: "None",     value: 1  },
                { name: "Custom",   value: 999  }
            ], true
        ],
        "Non-Sidebar Custom Margin": 
        [ 
            0, 
            "Non-Sidebar margin custom width (pixels)", 
            "Non-Sidebar Margin", 
            999,
            true
        ],
        "Sidebar Side Margin":
        [
            0, "Change the size of the margin opposite of the sidebar",
            [
                { name: "Large",    value: 65 },
                { name: "Medium",   value: 25 },
                { name: "Small",    value: 5  },
                { name: "None",     value: 0  },
                { name: "Custom",   value: 999  }
            ], true
        ],
        "Sidebar Side Custom Margin": 
        [ 
            0, 
            "Sidebar side margin custom width (pixels)", 
            "Sidebar Side Margin", 
            999,
            true
        ],
        "Underline Links":    [ false, "Underlines links" ],
        "Pages Position":
        [
            2, "Change the location of the page links",
            [
                { name: "Normal",      value: 1 },
                { name: "Fixed",          value: 2 },
                { name: "Fixed Vertical", value: 3 },
                { name: "Hidden",         value: 4 }
            ]
        ],
        "Expanded Images Cover QR": [ true, "Lets expanded images overlap the quick reply" ],
        "Menu-Only Mode":           [ true,  "Hides checkboxes and deleteform to be replaced by 4chan X menus" ],
        "Style Scrollbars":         [ false,  "Make the scroll bar match the theme" ],
        "--Sidebar--":                     [ "header",  "" ],
        "Sidebar Position":
        [
            1, "Change the position of the sidebar",
            [
                { name: "Right",    value: 1 },
                { name: "Left",     value: 2 },
                { name: "Disabled", value: 3 }
            ], true
        ],
        "Show Mascot":
        [
            false,
            "Still shows a mascot on the right side",
            "Sidebar Position",
            3,
            true
        ],
        "SS-like Sidebar":          [ false, "Optionally darkens the sidebar and adds a border like 4chan Style Script" ],
        "Board Name Position":
        [
            1, "Change the position of the board name/text board link",
            [
                { name: "Top",      value: 1 },
                { name: "Bottom", value: 2 }
            ],
        ],
        "Show Board Name":          [ true,  "Toggle visibility of the board name" ],
        "Show Text Board":          [ true,  "Toggle visibility of the text board link" ],
        "Show Logo":                [ true,  "Toggle visibility of the logo", null, true ],
        "Show Logo Reflection":     [ true,  "Toggle visibility of the logo reflection", "Show Logo", true, true ],
        "Lighter Logo":             [ false, "Toggle opacity of the logo", "Show Logo", true, true ],
        "Auto Hide Thread Watcher": [ true,  "Hides watched threads unless the mouse is over the watcher" ],
        "Slideout Announcement":    [ true, "Condense the announcement into a button in the sidebar" ],
        "Slideout Navigation Type":
        [
            1, "Change the format of the slideout navigation links",
            [
                { name: "List",      value: 1 },
                { name: "Compact",          value: 2 }
            ]
        ],
        "--Replies--":                  [ "header",  "" ],
        "Slim Replies":             [ false,  "Reduces the size of replies" ],
        "Rounded Corners":          [ true,  "Styles a few elements to have subtly rounded coreners" ], 
        "Reveal All Spoilers":      [ false, "Makes all spoilers look as if you were hovering over them" ],
        "Recolor Even Posts":       [ false,  "Makes every other post a darker color" ],
        "Use Post Info Color":      [ true, "Separate the post info by the post info colors defined in themes", null, true ],
        "Add Shadow?":              [ false, "Adds a shadow under the post info", "Use Post Info Color", true, true ],
        "Margin Between Replies":
        [
            0, "Change the position of 4chan x backlinks",
            [
                { name: "Large",      value: 6 },
                { name: "Normal (4chan default)", value: 4 },
                { name: "Minimal",  value: 0 },
                { name: "None",  value: -2 },
                { name: "Overlapping Borders", value: -3 }
            ]
        ],
        "Backlinks Position":
        [
            1, "Change the position of 4chan x backlinks",
            [
                { name: "Default",      value: 1 },
                { name: "Bottom Right", value: 2 },
                { name: "Bottom Left",  value: 3 }
            ]
        ],
        "Hide Filtered 4chan X Links":
        [
            4, "Hide Backlinks or Quotelinks that are filtered through 4chan X",
            [
                { name: "Backlinks",      value: 1 },
                { name: "Quotelinks", value: 2 },
                { name: "Both",  value: 3 },
                { name: "Disabled",  value: 4 }
            ]
        ],
        "--Posting--":                  [ "header",  "" ],
        "Post Form":
        [
            3, "Change the transition for the post form",
            [
                { name: "Slide Up",  value: 1 },
                { name: "Fade",      value: 2 },
                { name: "Fixed",     value: 3 },
                { name: "Float",     value: 4 }
            ]
        ],
        "Smart Tripcode Hider":     [ false, "Hides the name field if the value contains a tripcode" ],
        "Expanding Form Inputs":    [ false,  "Makes certain form elements expand on focus" ],
        "--Icons--":                     [ "header",  "" ],
        "Menu Button Content": [ "❖", "http://url.com/link.png or ❖" ],
        "Hide Button Content": [ "✗", "http://url.com/link.png or ✗" ],
        "--Script Settings--":                     [ "header",  "" ],
        "Disable Ads":              [ true, "Disables ads on 4chan" ],
        "--Font--":                     [ "header",  "" ],
        "Font Family":
        [
            "sans-serif", "Set the default font family",
            [
                { name: "Default",       value: "sans-serif"    },
                { name: "Monospace",     value: "monospace"     },
                { name: "Ubuntu",        value: "Ubuntu"        },
                { name: "Consolas",      value: "Consolas"      },
                { name: "Droid Sans",    value: "Droid Sans"    },
                { name: "Segoe UI",      value: "Segoe UI"      },
                { name: "Calibri",       value: "Calibri"       },
                { name: "Arial",         value: "Arial"         },
                { name: "Lucida Grande", value: "Lucida Grande" },
                { name: "Helvetica",     value: "Helvetica"     }
            ]
        ],
        "Font Size": [ 12, "Set the general size of text (Pixels)" ],
        "Bitmap Font": [ false, "Check this if you are using a bitmap font" ],
        "Themes"          : [],
        "Hidden Themes"   : [],
        "Selected Theme"  : 0,
        "NSFW Theme"      : 8,
        "Selected Mascots": 1,
        "Mascots"         : [],
        "Hidden Mascots"  : []
    },
    MAX_FONT_SIZE = 18,
    MIN_FONT_SIZE = 10,
    NAMESPACE     = "OneeChan.",
    VERSION       = "4.4.0",
    inputImages   = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAP9JREFUOMvV0CFLQ2EYxfHfrtdiURgbmCxOmFPBJgZZ0CQD0Q+goFkwabWIyWIWFgwmy7Qp7DPI3GD7ACZlYLNcy31ljG0aDHrSy3N43nOef6ZULBiifczEQ8wV7OAtGmBO4wgfOI2whsXUnMAJ8rhCJ8IxDpHDHpZwixqM5XPZBBtYxioauEgjRLjBI2bRxTneQ6EYCS4xiTu89DbONJrtP88hwnV64hm28YRqyPsFDkmSGKUYFubnsqignM7rqDWa7dcAqoLdnsXwrgZQ5QG/l8MVIxX1ZPar/lUyUOsv+aMzv+0Qw3OrM4VNrKfzB9yXioVu6LDVx+EA4/+Gwycw/Uz36O07WwAAAABJRU5ErkJggg==",
    defaultIcons  = "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",
    fontListSWF   = "http://ahodesuka.github.com/FontList.swf",
    themeInputs   =
    [
        { dName: "Body Background",  name: "bgColor",     property: "background-color" },
        { dName: "Reply Background", name: "mainColor",   property: "background-color" },
        { dName: "Reply Border",     name: "brderColor",  property: "border-color"     },
        { dName: "Input Background", name: "inputColor",  property: "background-color" },
        { dName: "Input Border",     name: "inputbColor", property: "border-color"     },
        { dName: "Post Info Background", name: "pinfoColor", property: "background-color" },
        { dName: "Post Info Border", name: "pinfobColor", property: "border-color" },
        { dName: "Backlinks",        name: "blinkColor",  property: "color"            },
        { dName: "4chan x Links",    name: "jlinkColor",  property: "color"            },
        { dName: "Links",            name: "linkColor",   property: "color"            },
        { dName: "Links Hovered",    name: "linkHColor",  property: "color"            },
        { dName: "Names",            name: "nameColor",   property: "color"            },
        { dName: "Quote",            name: "quoteColor",  property: "color"            },
        { dName: "Text",             name: "textColor",   property: "color"            },
        { dName: "Sage",             name: "sageColor",   property: "color"            },
        { dName: "Tripcodes",        name: "tripColor",   property: "color"            },
        { dName: "Titles",           name: "titleColor",  property: "color"            },
        { dName: "Timestamps",       name: "timeColor",   property: "color"            }
    ],
    $lib, $SS;

    if (!Array.isArray)
        Array.isArray = function(arg){ return Object.prototype.toString.call(arg) === "[object Array]"; };

    Number.prototype.toHexStr = function()
    {
        var s = "", v;

        for (var i = 7; i >= 0; i--)
        {
            v = (this >>> (i * 4)) & 0xf;
            s += v.toString(16);
        }

        return s;
    };

    /* STYLE SCRIPT LIBRARY */
    /* More or less based off jQuery */
    $lib = window.$ = function(selector, root)
    {
        return this instanceof $lib ?
            this.init(selector, root) : new $lib(selector, root);
    };

    $lib.prototype =
    {
        constructor: $lib,
        elems: [],
        length: function(){ return this.elems.length; },

        /* CONSTRUCTOR */
        init: function(selector, root)
        {
            if (selector == null || selector == undefined) return this;

            if (selector.constructor === $lib) return selector;
            else if (typeof selector === "string")
            {
                var root = root || document;
                var tagCheck = /^<(\w+)([^>]*)>(.*)$/.exec(selector); // No closing tag for root node.

                if (root.constructor === $lib)
                    root = root.get();

                if (tagCheck)
                {
                    var tag = document.createElement(tagCheck[1]);

                    if (tagCheck[2])
                    {
                        var attribs, atRegEx = /(\w+)=((?:"(?:[^"]+)"|'(?:[^']+)'|(?:\w+)))/g;
                        while ((attribs = atRegEx.exec(tagCheck[2])) != null)
                        {
                            var val = attribs[2];
                            if ((val[0] == '"' || val[0] === "'") && val[0] == val[val.length-1])
                                val = val.substr(1, val.length-2)

                            tag.setAttribute(attribs[1], val);
                        }
                    }

                    tag.innerHTML = tagCheck[3];

                    this.elems = [ tag ];
                }
                else if (/^#[\w-]+$/.test(selector) && root == document)
                {
                    var el;

                    if ((el = document.getElementById(selector.substr(1))) != null)
                        this.elems = [ el ];
                }
                else
                {
                    var results = root.querySelectorAll(selector);
                    this.elems = Array.prototype.slice.call(results);
                }
            }
            else if (selector.nodeType)
                this.elems = [ selector ];
            else if (Array.isArray(selector))
                this.elems = Array.prototype.slice.call(selector);

            return this;
        },

        /* DOM NODE RETRIEVAL */
        clone: function()
        {
            var ret = [];

            this.each(function(){ ret.push(this.cloneNode(true)); });

            return new $lib(ret);
        },
        elements: function()
        {
            if (!this.hasSingleEl())
                return this;

            this.elems = Array.prototype.slice.call(this.elems[0].elements);

            return this;
        },
        get: function(index)
        {
            if (index == undefined && this.elems.length === 1)
                return this.elems[0];
            else if (index == undefined && !this.hasSingleEl())
                return this.elems;

            return this.elems[index];
        },

        /* DOM MANIPULATION */
        prepend: function(el)
        {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function(){ this.insertBefore(el, this.firstChild); });
        },
        append: function(el)
        {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function(){ this.appendChild(el); });
        },
        before: function(el)
        {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function(){ this.parentNode.insertBefore(el, this); });
        },
        after: function(el)
        {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function()
            {
                if (this.nextSibling != null)
                    this.parentNode.insertBefore(el, this.nextSibling);
                else if (this.parentNode != null)
                    this.parentNode.appendChild(el);
            });
        },
        replace: function(el)
        {
            return this.each(function()
            {
                $(this).before(el).remove();
            });
        },
        html: function(html)
        {
            if (html == undefined)
                return this.elems[0].innerHTML;

            return this.each(function(){ this.innerHTML = html; });
        },
        text: function(text)
        {
            if (this.length() === 0)
                return;

            if (text == undefined)
                return this.elems[0].textContent;

            return this.each(function(){ this.textContent = text; });
        },
        appendText: function(text)
        {
            return this.each(function(){ this.textContent += text; });
        },
        attr: function(name, val)
        {
            if (val == undefined)
                if (!this.hasSingleEl())
                    return this;
                else
                    return this.elems[0].getAttribute(name);
            else if (val === "")
                return this.each(function(){ this.removeAttribute(name); });

            return this.each(function(){ this.setAttribute(name, val); });
        },
        disabled: function(bDisabled)
        {
            if (bDisabled == undefined)
                return this.elems[0].disabled;

            return this.each(function(){ this.disabled = bDisabled; });
        },
        toggle: function(bHidden)
        {
            return this.each(function()
            {
                var $this = $(this);

                if (bHidden == undefined)
                    bHidden = !($this.attr("disabled") === "true");

                $this.attr("hidden", bHidden || "");
            });
        },
        hide: function()
        {
            return this.toggle(true);
        },
        show: function()
        {
            return this.toggle(false);
        },
        val: function(val)
        {
            if (val == undefined)
            {
                var el = this.elems[0];

                if (el == undefined)
                    return false;

                switch(el.type)
                {
                    case "checkbox":
                    case "radio":
                        return el.checked == true;
                    default:
                        if (/^\d+$/.test(el.value))
                            return parseInt(el.value);
                        return el.value;
                }
            }

            return this.each(function()
            {
                switch(this.type)
                {
                    case "checkbox":
                    case "radio":
                        this.checked = val;
                        break;
                    default:
                        this.value = val;
                        break;
                }
            });
        },
        checked: function(state)
        {
            return this.each(function(){ this.checked = state; });
        },
        addClass: function(classNames)
        {
            return this.each(function()
            {
                classNames = classNames.split(" ");
                for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                    if (!$(this).hasClass(classNames[j]))
                        this.className += (this.className ? " " : "") + classNames[j];
            });
        },
        hasClass: function(className)
        {
            if (!this.hasSingleEl() || this.elems[0].className == undefined)
                return false;

            var regx = new RegExp("\\b" + className + "\\b");

            return regx.test(this.elems[0].className);
        },
        removeClass: function(classNames)
        {
            return this.each(function()
            {
                classNames = classNames.split(" ");
                for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                    if ($(this).hasClass(classNames[j]))
                    {
                        var cclassNames = this.className.split(" ");
                        this.className = "";

                        for (var k = 0, kMAX = cclassNames.length; k < kMAX; k++)
                            if (classNames[j] !== cclassNames[k])
                                this.className += (this.className ? " " : "") + cclassNames[k];
                    }
            });
        },
        toggleClass: function(classNames)
        {
            return this.each(function()
            {
                classNames = classNames.split(" ");
                for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                    if (!$(this).hasClass(classNames[j]))
                        $(this).addClass(classNames[j]);
                    else
                        $(this).removeClass(classNames[j]);
            });
        },
        remove: function()
        {
            return this.each(function(){ this.parentNode.removeChild(this); });
        },

        /* DOM TRAVERSING */
        parent: function()
        {
            if (!this.hasSingleEl()) return this;

            return new $lib(this.elems[0].parentNode);
        },
        children: function(selector)
        {
            if (!this.hasSingleEl())
                return this;
            else if (selector == null)
                selector = "*";

            return new $lib(selector, this.elems[0]);
        },
        nextSibling: function(selector)
        {
            if (!this.hasSingleEl() ? true : this.elems[0].nextSibling == null)
                return new $lib(null);

            if (selector != undefined)
            {
                var t, m = new $lib(selector, this.elems[0].parentNode),
                    s = this.elems[0].parentNode.childNodes;

                for (var i = s.length - 1; i >= 0; --i)
                {
                    if (s[i] === this.elems[0] && t == undefined) // end and no matching siblings
                        return new $lib(null);
                    else if (s[i] === this.elems[0] && t != undefined) // end and matched sibling
                        return new $lib(t);
                    else if (m.elems.indexOf(s[i]) !== -1) // this element matches the selector
                        t = s[i];
                }
            }

            return new $lib(this.elems[0].nextSibling);
        },
        previousSibling: function(selector)
        {
            if (!this.hasSingleEl() ? true : this.elems[0].previousSibling == null)
                return new $lib(null);

            if (selector != undefined)
            {
                var t, m = new $lib(selector, this.elems[0].parentNode),
                    s = this.elems[0].parentNode.childNodes;

                for (var i = 0, MAX = s.length; i < MAX; ++i)
                {
                    if (s[i] === this.elems[0] && t == undefined)
                        return new $lib(null);
                    else if (s[i] === this.elems[0] && t != undefined)
                        return new $lib(t);
                    else if (m.elems.indexOf(s[i]) !== -1)
                        t = s[i];
                }
            }

            return new $lib(this.elems[0].previousSibling);
        },

        /* EVENT METHODS */
        bind: function(type, listener)
        {
            return this.each(function(){ this.addEventListener(type, listener, false); });
        },
        unbind: function(type, listener)
        {
            return this.each(function(){ this.removeEventListener(type, listener, false); });
        },
        fire: function(evnt)
        {
            var ev = document.createEvent("HTMLEvents");

            return this.each(function()
            {
                ev.initEvent(evnt, true, true);
                this.dispatchEvent(ev);
            });
        },
        blur: function()
        {
            return this.each(function(){ this.blur(); });
        },
        click: function()
        {
            return this.each(function(){ this.click(); });
        },
        scrollIntoView: function(alignWithTop)
        {
            return this.each(function(){ this.scrollIntoView(alignWithTop); });
        },

        /* HELPER METHODS */
        delay: function(func, time)
        {
            return this.each(function()
            {
                var $this = this;
                setTimeout(function()
                {
                    func.call($this);
                }, time);
            });
        },
        each: function(func, args)
        {
            if (args != null && !Array.isArray(args))
                args = [ args ];

            for (var i = 0, MAX = this.elems.length; i < MAX; ++i)
                func.apply(this.elems[i], args || [ i ]);

            return this;
        },
        exists: function()
        {
            return this.elems.length > 0;
        },
        hasSingleEl: function()
        {
            return this.elems.length === 1;
        },

        riceCheck: function()
        {
            return this.each(function()
            {
                var click =  function(e){ e.preventDefault(); this.previousSibling.click(); };
                if (this.isRiced) return;
                else if (this.nextSibling != undefined && this.nextSibling.className === "riceCheck")
                    return $(this.nextSibling).bind("click", click);

                var div = $("<div class=riceCheck>").bind("click", click);
                $(this).hide().after(div);

                return this.isRiced = true;
            });
        },

        jsColor: function()
        {
            return this.each(function()
            {
                this.color = new $SS.jscolor.color(this);
            });
        }
    };
    /* END STYLE SCRIPT LIBRARY */

    /* STYLE SCRIPT CLASSES & METHODS */
    $SS =
    {
        browser: { },
        DOMLoaded: function(reload)
        {
            if ((!(html = $("*[xmlns]")).exists()) && (!(ctxmenu = $("#ctxmenu-main").exists())))
                $("link[rel='stylesheet']").remove();

            if ($SS.location.sub === "sys") // fix for firefux on report popups that have setTimeout.
                document.head.innerHTML = document.head.innerHTML;

            var div;

            if (reload !== true)
            {
                $SS.options.init();

                $(document).bind("QRDialogCreation", $SS.QRDialogCreationHandler)
                           .bind("QRPostSuccessful", $SS.QRPostSuccessfulHandler)
                           .bind("DOMNodeInserted",  $SS.nodeInsertedHandler);

                if ((div = $("#globalMessage *[style]")).exists())
                    div.each(function() { $(this).attr("style", ""); });

                if ((div = $("#ctxmenu-main")).exists()) {
                    $("body").addClass("catalog");
                };

                if ((div = $(".cataloglink>a")).exists()) {
                    div.text("C");
                };

                if (((style = $("body>style")).exists()) && ($SS.location.board === "b")) {
                    style.remove();
                };

                if ((div = $(".cataloglink>a")).exists() && ($SS.conf["Pages Position"] !== 3)) {
                    $(".pagelist>.pages:not(.cataloglink)").append(div);
                };


                if ((div = $(".closeIcon")).exists()) {
                    div.text("x");
                };

                if ((div = $("body>a[style='cursor: pointer; float: right;']")).exists())
                {
                    div.addClass("sight4");
                    div.text("");
                    $("#navtopright").append(div);
                };
                setTimeout(function()
                {
                    if (!$SS.QRhandled && (div = $("#qr")).exists())
                        $SS.QRDialogCreationHandler({ target: div });

                    if ((div = $("#imageType+label")).exists())
                        div.bind("change", function()
                        {
                            $(this).toggleClass("imgExpanded");
                        });

                    if ((div = $("#fs_regex")).exists())
                        div.riceCheck();

                    if ((a = $(".exlinksOptionsLink")).exists())
                    {
                        $("#navtopright").append(a);
                    };


                });
            }
            
            $SS.pages.init();

            $SS.riceInputs.init();
            $SS.logoReflect.init();

        },
        init: function(reload)
        {
            if (!reload)
            {
                if (/^about:neterror/.test(document.documentURI)) return;
                localStorage["4chan-settings"] = "{ \"disableAll\" : true }";

                var m_VERSION;
                $SS.browser.webkit = /AppleWebKit/.test(navigator.userAgent);
                $SS.browser.gecko  = /Gecko\//.test(navigator.userAgent);
                $SS.location       = $SS.getLocation();

                // correct selected theme/mascot after updating
                // and the number defaults has changed.
                if ((m_VERSION = $SS.Config.get("VERSION")) !== VERSION)
                {
                    var ntMascots = $SS.Mascots.defaults.length, // new total
                        ntThemes  = $SS.Themes.defaults.length,
                        otMascots = $SS.Config.get("Total Mascots"), // old total
                        otThemes  = $SS.Config.get("Total Themes"),
                        sMascots  = $SS.Config.get("Selected Mascots"),
                        sTheme    = $SS.Config.get("Selected Theme");

                    if (otMascots !== ntMascots && otMascots != undefined)
                    {
                        var mDiff = ntMascots - otMascots;

                        for (var i = 0, MAX = sMascots.length; i < MAX; ++i)
                            if (sMascots[i] < otMascots) break;
                            else sMascots[i] += mDiff;

                        $SS.Config.set("Selected Mascots", sMascots);
                    }

                    if (otThemes !== ntThemes && otThemes != undefined && sTheme >= otThemes)
                    {
                        sTheme += ntThemes - otThemes;
                        $SS.Config.set("Selected Theme", sTheme);
                    }

                    $SS.Config.set("VERSION", VERSION);
                    $SS.Config.set("Total Mascots", ntMascots);
                    $SS.Config.set("Total Themes", ntThemes);
                }
            }

            $SS.Config.init();
            $SS.Themes.init();
            $SS.Mascots.init();

            if (reload)
            {
                $SS.insertCSS();
                $SS.DOMLoaded(true);
            }
            else
            {
                if (!$("link[rel=stylesheet]", document.head).exists() ||
                    ($(document.head).exists() && $SS.browser.gecko))
                    $(document).bind("DOMNodeInserted", $SS.insertCSS);
                else
                    $SS.insertCSS();

                if (/complete|interactive/.test(document.readyState))
                    $SS.DOMLoaded();
                else
                    $(document).bind("DOMContentLoaded", $SS.DOMLoaded);
            }
        },

        /* STYLING & DOM */
        insertCSS: function()
        {
            var css;

            if ($("link[rel=stylesheet]", document.head).exists() || 
                ($(document.head).exists() && $SS.browser.gecko))
                $(document).unbind("DOMNodeInserted", $SS.insertCSS);
            else return;

            $SS.bHideSidebar = $SS.location.sub !== "boards" ||
                               $SS.location.board === "f";
            $SS.iSidebarSize = $SS.conf["Sidebar Position"] === 3 ? 265 : 262;
            css = "html,body,input,select,textarea,div.boardBanner>div.boardSubtitle,#boardLinks,#qr-filename-container{font-family:" + $SS.formatFont($SS.conf["Font Family"]) + ";font-size:" + $SS.conf["Font Size"] + "px}#themeoptions #toNav li label,.trbtn,#themeoptions #toWrapper>div>p{font-family:sans-serif!important;font-size:12px!important}input:focus,textarea:focus,a{outline:0!important;-moz-outline:0!important;-moz-user-focus:none!important}[draggable]{-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none}div.post div.file .fileThumb{float:left;margin-left:20px;margin-right:20px;margin-top:3px;margin-bottom:5px}.postContainer{display:block}div.post blockquote.postMessage{display:block}div.post{margin:4px 0}#delform div.reply:not([hidden]),div.image_expanded{display:table!important}div.thread{margin:0;clear:both}table.flashListing{border-spacing:1px;margin-left:auto;margin-right:auto}div.pagelist div.pages{padding:4px}.globalMessage{text-align:center}.prettyprint{padding:5px!important;display:inline-block;max-height:400px;overflow-x:auto;max-width:600px}span.spoiler{color:#000!important;background:none repeat scroll 0 0 #000!important}span.spoiler:hover,span.spoiler:focus{color:#fff!important}#delform .sideArrows[hidden],#delform div.post[hidden]{display:none!important}" + (!$SS.conf["Disable Ads"] ? "div.middlead a img{width:468px;height:60px;max-width:100%;position:relative!important;top:30px!important;margin-bottom:10px!important}div.center{margin:auto;text-align:center}" : "") + " #delform hr:not(#unread-line){margin-bottom:6px!important;margin-top:10px!important}#unread-line{border-color:" + $SS.theme.jlinkColor.hex + "!important;border-width:2px 0 0!important}#qr input:focus::-webkit-input-placeholder,#qr textarea:focus::-webkit-input-placeholder{color:transparent!important}#qr input:focus:-moz-placeholder,#qr textarea:focus:-moz-placeholder{color:transparent!important}input:not([disabled]):active,input:focus,#qr-filename-container:focus,.webkit select:focus,textarea:focus{border:1px solid " + $SS.theme.brderColor.hex + "!important;outline:1px solid " + $SS.theme.linkColor.hex + "!important;outline-offset:-2px!important}input::-moz-focus-inner{border:0;padding:0}::selection{background:" + $SS.theme.linkColor.hex + ";color:#" + ($SS.theme.linkColor.isLight ? "000" : "fff") +"!important}::-moz-selection{background:" + $SS.theme.linkColor.hex + ";color:#" + ($SS.theme.linkColor.isLight ? "000" : "fff") +"!important}hr{border:0!important;border-top:1px solid rgba(" + $SS.theme.brderColor.rgb + ",.9)!important;clear:left;margin:.3em 0!important}h1,h2,h3,h4,h5{margin:.4em 0!important}b,h3,.postInfo .name,.postInfo .subject{font-weight:" + ($SS.conf["Bitmap Font"] ? 4 : 7) + "00!important}a,span>a.replylink,#header-bar>a,blockquote a.quotelink,span.typ,span.atn,.catalog .button{" + (!$SS.conf["Underline Links"] ? "text-decoration:none;" : "") + " color:" + $SS.theme.linkColor.hex + "!important;font-weight:400!important;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s}strong,strong>a{font-weight:700!important}.filtered{text-decoration:line-through" + ($SS.conf["Underline Links"] ? " underline" : "") + "!important}a:hover,#header-bar>a:hover,div.post div.postInfo span~span.postNum a:hover,.quotelink:hover,.backlink:hover,span.lit,.useremail>.name:hover,.catalog .button:hover{color:" + $SS.theme.linkHColor.hex + "!important;text-shadow:rgba(" + $SS.theme.linkHColor.rgb + ",.2) 0 0 2px!important}.spoiler a{-webkit-transition:none;-moz-transition:none;-o-transition:none}.shortcut{font-size:0!important}.shortcut>span,.shortcut>#lastmuSettingsWindowLink{font-size:9pt!important}#updater,#thread-stats{opacity:.7}#updater::before,#thread-stats::before{content:'['}#updater::after,#thread-stats::after{content:']'}#updater{margin-right:4px!important}#updater,#thread-stats{position:relative!important;bottom:1px}.settings-link{position:relative!important;bottom:5px;padding:9px!important;opacity:.6!important;z-index:5;font-size:0!important;color:transparent!important}.settings-link:hover{opacity:1!important;cursor:pointer}a:not([href]),#playerDiv a,#playerDiv a:hover,a[href='javascript:;'],.settings-link::before{color:" + $SS.theme.jlinkColor.hex + "!important}.nameBlock>span.name,.post-author,span.com,#delform[action='https://sys.4chan.org/f/up.php'] .name{color:" + $SS.theme.nameColor.hex + "!important}.nameBlock>span.postertrip,span.tag,.post-tripcode,#delform[action='https://sys.4chan.org/f/up.php'] .postertrip{color:" + $SS.theme.tripColor.hex + "!important}.postMessage .quote,span.str,span.atv{color:" + $SS.theme.quoteColor.hex + "!important}a.forwardlink{color:" + $SS.theme.linkColor.hex + "!important}.dateTime{color:" + $SS.theme.timeColor.hex + "!important}.spoiler:not(:hover),.spoiler:not(:hover) .quote,.spoiler:not(:hover) a{color:#000!important}.postInfo .subject,.replytitle,span.kwd,#delform[action='https://sys.4chan.org/f/up.php'] .subject{color:" + $SS.theme.titleColor.hex + "!important}a.linkmail[href='mailto:sage'],a.linkmail[href='mailto:sage']:hover,#qr .warning,span.lit,span[style='color:#F00000'],span[style='color:#FF0000;font-weight:normal'],#qr #errmsg{color:" + $SS.theme.sageColor.hex + "!important;text-shadow:none!important}.pages strong>a{color:" + $SS.theme.textColor.hex + "!important}.reply,.dialog,.hidden_thread,#fs_data tr[style],.stub>a:first-child,.webkit option,div[id^=jsMath],#playerDiv,#playerListMenu,#playerListItemMenu,#playerSettings,#jsMath_float,.deleteform,#qr,table.flashListing tr:nth-of-type(2n+1),.catalog .panel{background:rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + ")!important}" + ($SS.conf["Recolor Even Posts"] ? ".replyContainer:nth-of-type(even)>div:not(.qphl):not(.sideArrows):not(.lastmuInfo){background-color:rgba(" + $SS.theme.mainColor.rgb + "," + ($SS.theme.mainColor.isLight ? "0.7" : "0.5")  + ")!important;border:1px solid rgba(" + $SS.theme.brderColor.rgb + ",.8)!important}" : "") + " .globalMessage{background:" + $SS.theme.mainColor.hex + "!important}.boxcontent,.top-box,.left-box,.box-outer,.yui-skin-sam .yuimenu .bd{background:" + $SS.theme.mainColor.hex + "!important}.box-outer,.yui-skin-sam .yuimenu .bd{border:1px solid " + $SS.theme.brderColor.hex + "!important}#ft li,#recent-images li,.boxbar,body:not([class]) .menubutton,.postContainer>.op:target,.closeIcon{background:none!important;border:0!important}#optionsmenu:not([style=='visibility:hidden;']),#filtermenu:not([style='visibility: hidden;']){top:24px!important}table.flashListing .highlightPost{background:none!important}table.flashListing .highlightPost::after{content:'●';color:#d69595;position:relative!important;left:12px!important;margin-left:-10px!important}.flashListing>tbody{padding-top:200px!important}.flashListing td:not(:last-of-type):not(.postblock){border-right:1px solid " + $SS.theme.brderColor.hex + "!important}.flashListing td{padding-left:4px!important;padding-right:4px!important;text-align:center!important}#delform[action='https://sys.4chan.org/f/up.php'],#delform[action='https://sys.4chan.org/f/up.php'] .postblock{background:none!important;border:0!important;box-shadow:none!important}html[xmlns]>body{margin-top:100px!important}#shortcuts{margin-top:1px!important}#ft ul{border-top:0!important}#ft li.first{border-left:0!important}#ft li.current,#ft li.fill{background:none!important;border:0!important}.mOption.header{cursor:auto!important;font-size:" + $SS.conf["Small Font Size"] + "px;font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important;font-weight:700!important}.mOption.header>span{margin:auto;width:100%;display:block;text-align:left;font-weight:700!important;color:" + $SS.theme.titleColor.hex + "!important}.top:not(.autohide) .catalog>#content{margin-top:20px!important}.catalog kbd{box-shadow:none!important;border-radius:none!important}.closeIcon{font-size:13px!important;font-weight:400!important}.catalog #backdrop{z-index:15}.catalog #theme{z-index:16;top:30%!important}" + ($SS.conf["Pages Position"] === 2 ? ".pagelist," : "") + " #header-bar{background:rgba(" + $SS.theme.bgColor.rgb + "," + $SS.theme.navOp + ")!important;border:0!important}#id_css::after{width:262px!important;position:fixed!important;height:21px!important;top:-2px!important;" + $SS.conf["Sidebar Position String"] + ":0!important;" + $SS.conf["Sidebar Position oString"] + ":auto!important;background-color:rgba(" + $SS.theme.bgColor.rgb + "," + $SS.theme.navOp + ")!important;content:'';display:block!important;opacity:1!important;z-index:1}a,button,input[type=checkbox],input[type=radio],input[type=button],input[type=submit],#themeoptions #tMascot div,#themeoptions #tThemes>div,.pointer,.riceCheck,.trbtn{cursor:pointer}form[name=post] tr:nth-of-type(3)>td:nth-of-type(3),img[alt=Closed],img[alt=Sticky],.deleteform,#imageType+label,#qr>form #spoilerLabel,.preview>label,.remove,.mPagelist .pages span,div.navLinks,div.navLinks a,label#prefetch{color:transparent!important;font-size:0!important}input:not([type=submit]),select,select option,textarea,#navlinks,#themeoptions label:not(.header),#themeoptions .mOption:not(.header),#themeoptions .mOption:not(.header)>span,#themeoptions #tMascot div a{font:" + $SS.conf["Small Font Size"] + "px " + $SS.formatFont($SS.conf["Font Family"]) + "!important}#qr>form #spoilerLabel::after,button,form[name=post] input[name=email]+label,form[name=post] #com_submit+label,input[type=button],input[type=submit],.deleteform::after,.preview>label::after,label#prefetch::after{font-size:" + ($SS.conf["Bitmap Font"] ? $SS.conf["Font Size"] : 12) + "px!important}.globalMessage::before,#qr>.move,#themeoptions #tMascot div a,#themeoptions #tThemes>div p a,a.useremail[href='mailto:sage']:last-of-type::before,.container::before,.deleteform::before,.trbtn,#SSVersion,#updatelink,#changeloglink,.linkdelimiter,#issueslink{font-size:" + ($SS.conf["Bitmap Font"] ? $SS.conf["Font Size"] : 12) + "px!important}" + (!($SS.conf["Show Board Name"]) || ($SS.conf["Sidebar Position"] === 3) ? ".boardBanner .boardTitle," : "") +
(!($SS.conf["Show Text Board"]) || ($SS.conf["Sidebar Position"] === 3) ? ".boardBanner .boardSubtitle," : "") +
($SS.conf["Post Form"] !== 4 ? "#qr>.move .close," : "") +
($SS.conf["Post Form"] === 3 ? "#qr>.move #autohide,#qr>.move .riceCheck," : "") +
($SS.conf["Pages Position"] === 4 ? ".pages," : "" ) +
($SS.conf["Disable Ads"] ? "div.center,body>div.center:not(:nth-of-type(2)),div.topad img,div.bottomad img,div.middlead img,form[action='https://sys.4chan.org/f/post']~div[style='text-align: center'],form[action='https://sys.4chan.org/f/up.php']>div[style='text-align: center;']," : " div.center:not(.middlead) img," ) +
(($SS.conf["Pages Position"] === 3) || ($SS.conf["Pages Position"] === 4) ? ".pages:not(.cataloglink)," : "" ) +
($SS.conf["Menu-Only Mode"] ? ".postInfo>input[type=checkbox],.postInfo>.riceCheck,.deleteform," : "") + " #imgControls .riceCheck,[hidden],.hidden:not(.postContainer),body>hr,body>form[name=post],.navLinksBot,a[href='#bottom'],.stylechanger,#absbot,#logo,#copyright,body>div.closed,.absBotText,#navbotr,.postingMode,.sideArrows:not(.hide-reply-button),#delform>hr,body>.closed>br,.board>hr:nth-last-child(2),#imageExpand,.hidden_thread+div.opContainer,.stub+div+div.post,#navtopright,#first-run,.mobile" + ($SS.conf["Pages Position"] === 3 ? ":not(.mPagelist)" : "") + ",.mobileinline,iframe[src='about:blank'],#styleSwitcher,#toggleMsgBtn,#boardNavDesktopFoot,.catalog hr,.menu-button i,.next span,.prev span{display:none!important}a.summary,a.summary:hover,blockquote>.abbr,.globalMessage>b,.globalMessage,.globalMessage strong,.globalMessage h1,.globalMessage h2,.globalMessage h3,.globalMessage span,button,div,div.autohide>a,form[name=delform],form[name=post] input[name=email]+label,form[name=post] #com_submit+label,input:not(.jsColor),#qr-filename-container,.webkit select,textarea,tr,#qr>.move,#qr>form #spoilerLabel::after,#themeoptions #toNav li label.selected,#themeoptions #toNav li label:hover,.deleteform::before,.deleteform::after,.summary,.preview>label::after,.reply,.replymode,#delform[action='https://sys.4chan.org/f/up.php'] .postblock,.mPagelist .pages span strong,.catalog #boardLinks>a.selectedBoard[href*=catalog],#header-bar a.current,table.postForm>tbody>tr>td:first-child,table.exif td,label#prefetch::after,strong[style='color:#000'],div.entry,label.entry{color:" + $SS.theme.textColor.hex + "!important}.notification>.message,.notification a{color:#fff!important}body,input,select,textarea,.replyContainer>.reply,.hidden_thread,.postInfo,.stub>a:first-child,.thread.stub,.riceCheck,.boardBanner .boardTitle,.ys_playerContainer,#qr,#qr>form>.captcha-img>img,#themeoptions #tMascot div,#themeoptions #tThemes .reply,#themeoptions #tNavLinks .navlink .handle{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}" + ($SS.conf["Rounded Corners"] ? " #delform div.reply,div.reply.highlight,#qp,#delform .postContainer,.inline div.reply,.box-outer,#prefetch," + ($SS.conf["Post Form"] === 4 ? "#qr," : "") + " .yui-skin-sam .yuimenu .bd{border-radius:3px!important}.globalMessage{border-radius:3px!important}" + ($SS.conf["Post Form"] !== 4 ? "#qr" : "") + "{border-radius:" + ($SS.conf["Sidebar Position"] === 2 ? "0 3px 0 0" : "3px 0 0 0") + "!important}.deleteform{border-radius:" + ($SS.conf["Sidebar Position"] === 2 ? "0 3px 3px 0" : "3px 0 0 3px") + "!important}" + (!$SS.conf["Sidebar Position"] === 2 ? " #id_css::after{border-radius:0 0 0 2px!important}" : "") + " " : "") + " input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:rgba(" + $SS.theme.textColor.rgb + ",.4)!important}input:-moz-placeholder,textarea:-moz-placeholder{color:rgba(" + $SS.theme.textColor.rgb + ",.4)!important}html,body{background:" + $SS.theme.bgImg.get() + $SS.theme.bgColor.hex +"!important}" + (($SS.conf["Hide Filtered 4chan X Links"] === 1) || ($SS.conf["Hide Filtered 4chan X Links"] === 3) ? ".filtered.backlink{display:none!important}" : "") + " " + (($SS.conf["Hide Filtered 4chan X Links"] === 2) || ($SS.conf["Hide Filtered 4chan X Links"] === 3) ? ".quotelink.filtered{display:none!important}" : "") + " body{margin:2px " + ((!$SS.bHideSidebar  && $SS.conf["Sidebar Position"] === 1) ? "261px 0 0 " : (!$SS.bHideSidebar && $SS.conf["Sidebar Position"] !== 3 ? "0 0 261px " + $SS.iSidebarSize + "px" : "0 0 0")) + "!important;margin-bottom:23px!important;" + ($SS.conf["Sidebar Position"] == 2 ? "margin-left:261px!important" : "") + ";padding:0!important}div[style^='text-align: center'] img{margin-top:30px!important}script+hr+div.center img{margin-top:-10px!important}.board+div.center img{margin-top:10px!important}div.center a{opacity:.2!important}div.center img{-webkit-transform:scale(.85);-moz-transform:scale(.85);-0-transform:scale(.85)}div.center a:hover{opacity:1!important}" + (!$SS.bHideSidebar ? (($SS.conf["Sidebar Position"] !== 3) && $SS.conf["SS-like Sidebar"] ? " body::before{background:rgba(" + $SS.theme.mainColor.shiftRGB(-18) + ",.8);border-" + $SS.conf["Sidebar Position oString"] + ":2px solid rgba(" + $SS.theme.mainColor.rgb + ",.9);box-shadow:" + ($SS.conf["Sidebar Position"] !== 2 ? "inset " : "") + $SS.theme.brderColor.hex + " 1px 0 0," + ($SS.conf["Sidebar Position"] === 2 ? "inset " : "") + $SS.theme.brderColor.hex + " -1px 0 0;content:'';height:100%;width:261px;position:fixed;top:-19px!important}" : "") +
($SS.conf["Sidebar Position"] !== 3 || $SS.conf["Show Mascot"] ? " body::after{background:" + $SS.mascot.img.get() + ";content:'';height:100%;width:" + ($SS.mascot.overflow ? "100%" : "26" + ($SS.conf["SS-like Sidebar"] ? 0 : 3) + "px") + ";" + (!$SS.mascot.small ? "background-size:contain;" : "") + " bottom:0!important;margin-bottom:" + $SS.mascot.offset + "px;position:fixed;z-index:2;pointer-events:none!important;" + ($SS.conf["Sidebar Position"] === 2 && $SS.mascot.flip ? " -webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-o-transform:scaleX(-1);" : "") + "}.bottom:not(.autohide) body::after{bottom:22px!important}" : "") : "") + " " + ($SS.conf["Sidebar Position"] === 2 && $SS.mascot.flip ? " label[title='Allows the mascot to be shown outside the sidebar, ignores `Prevent stretching` option']::after{content:'Disabled from left sidebar + flip mascot';color:red;font-size:12px}" : "") + " body::after," + ($SS.conf["Post Form"] !== 4 ? "#qr," :"") + " body::before{" + $SS.conf["Sidebar Position String"] + ":0!important;" + $SS.conf["Sidebar Position oString"] + ":auto!important}" + ($SS.conf["Page Layout"] === 2 ? ".op," : "") + " #jsmath_button,#jsMath_panel,#jsMath_float,#options ul,#playerDiv,#playerListMenu,#playerListItemMenu,#playerSettings,#qr,#themeoptions #toWrapper,.reply,.dialog,.hidden_thread,.stub>a:first-child{border:1px solid " + $SS.theme.brderColor.hex + "!important}.deleteform{border-" + $SS.conf["Sidebar Position oString"] + ":1px solid " + $SS.theme.brderColor.hex + "!important;border-bottom:1px solid " + $SS.theme.brderColor.hex + "!important}.globalMessage{border:1px solid " + $SS.theme.brderColor.hex + "!important}" + ($SS.conf["Sidebar Position"] === 3 ? ".globalMessage," : "") + " #delform{margin-top:24px!important}.postingMode~#delform{margin-top:22px!important}" + (!$SS.conf["Pages Position"] === 2 ? ".bottom #delform{margin-top:-10px!important}" : " .bottom #delform{margin-top:22px!important}.bottom .postingMode~#delform{margin-top:-10px!important}") + " .top.autohide #delform{margin-top:-10px!important}html:not(.fixed) #header-bar{position:absolute;left:0;right:0;top:0;z-index:2;padding:2px}#board-list{vertical-align:middle}.closed~#delform{margin-top:0!important}.deleteform,#fs_data td{border-top:1px solid " + $SS.theme.brderColor.hex + "!important}" + ($SS.conf["Reveal All Spoilers"] ? " div.post>blockquote .spoiler,.teaser s,s{color:#fff!important;text-decoration:none!important;background:none repeat scroll 0 0 #000!important}div.post>blockquote .spoiler .quote,.teaser s .quote,s .quote{color:" + $SS.theme.quoteColor.hex + "!important}div.post>blockquote .spoiler a,.teaser a,s a{color:" + $SS.theme.linkColor.hex + "!important}" : " s,.postMessage s:not(:hover) .quote{background:none repeat scroll 0 0 #000!important;color:#000!important;text-decoration:none}s:hover,s:focus{color:#FFF!important}") + " #jsmath_button{bottom:auto!important;left:0!important;top:1px!important;right:auto!important}#jsMath_panel{bottom:auto!important;left:1em!important;top:1.75em!important;right:auto!important}#watcher{position:fixed!important}#watcher>div{max-width:249px!important;width:249px!important;overflow:hidden!important}#watcher .move{font-size:0!important;height:0!important}#watcher::before{height:9px!important;font-size:12px!important;position:fixed!important;" + $SS.conf["Sidebar Position String"] + ":65px!important;" + $SS.conf["Sidebar Position oString"] + ":auto!important;min-width:15px!important;max-width:15px!important;opacity:.6;z-index:5;" + (!$SS.conf["Auto Hide Thread Watcher"] ? "display:none!important;" : "") + "}#watcher{z-index:5;padding-left:0!important}#watcher:hover::before{opacity:1;cursor:pointer}#watcher{position:fixed!important;" + ($SS.conf["Auto Hide Thread Watcher"] ? " top:-1000px!important;bottom:auto!important;" : "") + " " + ($SS.conf["Sidebar Position"] !== 2 ? " right:2px!important;left:auto!important;" : " right:auto!important;left:2px!important;") + " width:25" + ($SS.conf["SS-like Sidebar"] ? 5 : 8) + "px!important;padding-bottom:4px!important}#watcher:hover{position:fixed!important;z-index:99!important}" + ($SS.conf["Page Layout"] !== 2 ? " div.postContainer,div.replyContainer{position:relative!important}.hide-reply-button span{position:static!important;width:20px!important;height:10px!important}.hide-reply-button{width:20px!important;padding-top:1px!important}div.reply .report_button,.hide-reply-button,div.reply .menu-button:not(:hover){opacity:0!important}form .replyContainer:hover div.reply .report_button,form .replyContainer:hover div.reply .menu-button:not(:hover),form .replyContainer:hover .hide-reply-button{opacity:.6!important}div.reply input:checked{opacity:1!important}div.reply .report_button,div.reply .menu-button{position:absolute!important;right:33px!important;right:10px!important;top:3px!important;bottom:auto!important;left:auto!important}.thread>.hide-thread-button:not(.hidden_thread){position:absolute!important;top:0!important;right:31px!important;opacity:.6!important}.thread>.opContainer>.op>.postInfo>.menu-button{position:absolute!important;top:1px!important;right:15px!important;opacity:.6!important;bottom:auto!important;left:auto!important}.hidden_thread{padding:4px!important;padding-bottom:6px!important}" + ($SS.conf["Sidebar Position"] !== 1 ? ".subMenu{left:-121%!important;width:120px!important}" : "") + " .hidden_thread>.menu-button{position:absolute!important;right:18px!important;font-size:0!important;top:7px!important}.hidden_thread>a:not([class])>span,.stub>a:not([class])>span{float:right!important;margin-right:25px!important;font-size:14px!important;text-align:center!important}.hide-reply-button{position:absolute!important;right:27px!important;top:5px!important}" + ($SS.conf["Sidebar Position"] === 3 ? " .thread:first-of-type>.hide-thread-button{right:256px!important;top:1px!important}.thread:first-of-type>.opContainer>.op>.postInfo>.menu-button{right:240px!important;top:2px!important}.thread:first-of-type>.hidden_thread>.menu-button{right:240px!important;top:5px!important}.thread:first-of-type>.hidden_thread>a:not([class])>span{position:relative!important;right:226px!important;bottom:2px!important}.thread:first-of-type>.opContainer>.op>.postInfo{margin-top:7px!important}" : "") + " " : " .sideArrows{float:left!important}") + " body:not(.catalog) .thread{clear:both;margin:1px" + ($SS.conf["Page Layout"] === 1 ? ($SS.conf["Sidebar Position"] !== 2 ? " 0 1px 1px" : " 1px 1px 0") : ($SS.conf["Page Layout"] === 2 ? " 0 1px" : "")) + "!important;overflow:visible!important;padding:0!important;" + ($SS.conf["Page Layout"] !== 3 ? "padding-" + $SS.conf["Sidebar Position String"] + ":2px!important;" : "") + " position:relative;border-radius:" + ($SS.conf["Page Layout"] !== 3 ? ($SS.conf["Sidebar Position"] !== 2 ? "2px 0 0 2px" : "0 2px 2px 0") : "2px") + "}#addMascot>label::after,#qr>form>div::after," + ($SS.conf["Page Layout"] !== 2 ? ".thread .op::after," : "") + " .thread::after{clear:both;content:'';display:block}.op{border:0!important;position:relative;border-radius:" + ($SS.conf["Page Layout"] !== 3 ? ($SS.conf["Sidebar Position"] !== 2 ? "2px 0 0 2px" : "0 2px 2px 0") : "2px") + "}.hide-thread-button:not(.hidden_thread){float:left!important;margin-right:5px!important;margin-left:5px!important;z-index:2}" + ($SS.conf["Page Layout"] === 1 ? " .thread>a.hide-thread-button>span{right:2px!important}" : "") + " form[name=delform]{" + ($SS.conf["Page Layout"] !== 2 ? " " + ($SS.conf["Page Layout"] === 1 ? "border-" + $SS.conf["Sidebar Position String"] + ":0!important;" : "") : "") + " margin:" + ($SS.conf["Page Layout"] !== 3 ? ($SS.conf["Sidebar Position"] !== 2 ? "0 " + ($SS.conf["Sidebar Side Margin"] !== 999 ? ""+ $SS.conf["Sidebar Side Margin"] + "" : "" + $SS.conf["Sidebar Side Custom Margin"] + "") + "px 0 " + ($SS.conf["Non-Sidebar Margin"] !== 999 ? ""+ $SS.conf["Non-Sidebar Margin"] + "" : "" + $SS.conf["Non-Sidebar Custom Margin"] + "") + "px" : " 0 " + ($SS.conf["Non-Sidebar Margin"] !== 999 ? ""+ $SS.conf["Non-Sidebar Margin"] + "" : "" + $SS.conf["Non-Sidebar Custom Margin"] + "") + "px 0 " + ($SS.conf["Sidebar Side Margin"] !== 999 ? ""+ $SS.conf["Sidebar Side Margin"] + "" : "" + $SS.conf["Sidebar Side Custom Margin"] + "") + "px") : " 0 " + (Math.min($SS.conf["Non-Sidebar Margin"], 40) / 2 * ($SS.conf["Non-Sidebar Margin"] < 10 ? 3 : 1)) + "% 0") + ";padding:0!important;position:relative;border-radius:" + ($SS.conf["Page Layout"] !== 3 ? ($SS.conf["Sidebar Position"] !== 2 ? "4px 0 0 4px" : "0 4px 4px 0") : "4px") + "}" + (($SS.conf["Page Layout"] === 3) && !($SS.conf["Show Logo"]) ? ".webkit form[name=delform]{z-index:1}" : "") + " .thread>div>.post,.threadContainer>div>.post{" + ($SS.conf["Page Layout"] !== 2 ? "width:100%!important;" : "") + "}.thread:last-child>.postContainer:last-child>.reply{margin-bottom:1px!important}" + ($SS.conf["Menu-Only Mode"] ? " .postInfo{padding:0 3px!important}" : "" ) + " .sideArrows{margin-left:0!important;margin-right:0!important}.postContainer,.replyContainer{margin:1px 0 0!important}.replyContainer{margin-bottom:" + $SS.conf["Margin Between Replies"] + "px!important}.threadContainer{border-left:1px solid rgba(" + $SS.theme.brderColor.shiftRGB(16) + ",.8)!important;padding-left:20px!important;margin-left:1px!important}.threadContainer>.replyContainer::before{content:'-----';float:left;position:relative;width:0;right:20px;top:" + ($SS.conf["Slim Replies"] ? 2 : 3) + "5px;color:rgba(" + $SS.theme.brderColor.shiftRGB(16) + ",.8)!important;font-size:12px!important}div.post{margin:2px 0!important}.favicon{padding-top:20px!important;width:20px!important;height:0!important;display:inline-block!important;margin-right:0!important;background-repeat:no-repeat!important;position:relative!important;top:5px!important;margin-top:-5px}.favicon[src^=data]{opacity:0." + ($SS.theme.bgColor.isLight ? 3 : 2) + "!important}.favicon[src$=ico]{opacity:.8!important}" + ($SS.conf["Page Layout"] !== 2 ? " hr{margin:0!important}div.post:not(#qp):not([hidden]):not(#exlinks-options):not(#exdetails);{margin:0!important;width:100%!important}" : "" ) + " .identifyIcon{margin:0!important;vertical-align:top}.inline .report_button,#qp .report_button{position:static!important;vertical-align:middle!important}a.hide-thread-button>span,#settingsBox,.replyContainer>.reply input[type=checkbox],.replyContainer>.reply .riceCheck,.container,.hidden_thread a:first-child>span,.hide-reply-button,.report_button{z-index:2!important}.inline{background:none!important;border:0!important;overflow:visible!important}.inline div.post.reply{background:rgba(" + $SS.theme.mainColor.shiftRGB(-16) + ",.8)!important;border:1px solid rgba(" + $SS.theme.brderColor.rgb + ",.4)!important;padding:5px!important;border-radius:3px!important;box-shadow:rgba(" + $SS.theme.mainColor.shiftRGB(16) + ",.9) 0 1px 3px;overflow:visible!important;position:relative;z-index:10!important;width:auto!important}" + ($SS.conf["Page Layout"] !== 2 ? " .stub>a:not([class])>span{position:relative!important;bottom:1px!important}" : "") + " .stub>a:first-child>span,.hidden_thread a:first-child>span{vertical-align:middle!important;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out}.remove,#boardNavDesktop>a{padding:0!important}.remove,.hide-reply-button>span,a.hide-thread-button>span,.hidden_thread a:first-child>span,.hidden_thread>span,.stub>a:first-child>span{-moz-transform:scale(.65);-webkit-transform:scale(.65)}.remove{margin:0!important;text-indent:-9999px!important}.remove:hover{opacity:.75}.replyContainer>.reply>img{vertical-align:middle}.replyContainer>.reply>span{line-height:16px!important}.replyContainer>.reply,.stub>a:first-child,.hidden_thread,{padding:5px!important;" + ($SS.conf["Page Layout"] !== 2 ? "width:100%!important;" : ($SS.conf["Sidebar Position"] !== 2 ? "margin-right:1px!important;" : "")) + " border-radius:" + ((($SS.conf["Sidebar Position"] === 2) && ($SS.conf["Page Layout"] === 2)) ? ($SS.conf["Sidebar Position"] !== 2 ? "2px 0 0 2px" : "0 2px 2px 0") : "2px") + "}.highlightPost,.qphl,.replyContainer>.post:target,html .reply:target,html .reply.highlight,#post-preview{background:rgba(" + $SS.theme.mainColor.shiftRGB(4, true) + "," + $SS.theme.replyOp + ")!important;border:1px solid " + $SS.theme.linkColor.hex + "!important}.threadContainer .reply{min-width:300px!important}.op.qphl{background:none!important;border:1px solid " + $SS.theme.linkColor.hex + "!important}.op:not(.qphl){border:1px solid transparent!important}.stub{margin:1px 0 0 " + ($SS.conf["Page Layout"] === 2 ? 16 : 0) + "px!important;padding:0!important}.thread.stub{margin:1px 0!important;padding:0 " + ($SS.conf["Sidebar Position"] !== 2 ? "0 0 1px" : "1px 0 0") + "!important}.hidden_thread,.stub>a:first-child{display:" + ($SS.conf["Page Layout"] === 2 ? "inline-" : "") + "block;padding:5px}.container{" + ($SS.conf["Backlinks Position"] !== 1 ? " bottom:2px;position:absolute;" + ($SS.conf["Backlinks Position"] === 2 ? "right" : "left") + ":2px;z-index:1;" : "") + " margin-left:-2px}#qp .container{bottom:0!important}#qp div.reply{display:table!important}" + ($SS.conf["Backlinks Position"] !== 1 ? " .container::before{color:rgba(" + $SS.theme.textColor.rgb + ",.4)!important;content:'REPLIES:';padding-right:2px}" : "") + " .container>a{color:" + $SS.theme.blinkColor.hex + "!important}input[type=checkbox]:active,input[type=checkbox]:focus,.qphl{outline:0!important}.qphl{box-shadow:none!important}#qp{background:rgb(" + $SS.theme.mainColor.shiftRGB(-8) + ")!important;border:1px solid rgba(" + $SS.theme.linkColor.rgb + ",.4)!important;margin:0 0!important;max-width:65%;padding:0!important;position:fixed!important;z-index:15!important;border-radius:3px}#qp .reply{background:none!important;border:0!important;width:auto!important}a.summary{display:inline-block;line-height:16px;margin:-4px 10px 0!important;padding:0 6px;border-radius:3px}" + (!$SS.conf["Menu-Only Mode"] ? " .deleteform{bottom:0!important;height:21px;overflow:hidden;padding:2px 2px 0 18px!important;position:fixed;" + ($SS.conf["Sidebar Position"] === 3 ? " right:" + ($SS.conf["Post Form"] === 4 ? 0 : 262) +"px;" : $SS.conf["Sidebar Position String"] + ":260px;") + " width:0;white-space:nowrap;z-index:12!important;" + ($SS.conf["Page Layout"] !== 1 ? "border-radius:" + ($SS.conf["Sidebar Position"] !== 2 ? "3px 0 0 0" : "0 3px 0 0") : "") + ";-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;border-" + $SS.conf["Sidebar Position String"] + ":none!important}.deleteform:hover{" + ($SS.conf["Sidebar Position"] !== 2 ? "padding-left:2px!important;" + ($SS.conf["Sidebar Position"] === 3 ? "padding-right:4px!important;" : "") : "padding-left:0!important;padding-right:3px!important;") + " width:238px;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out}.deleteform::before{content:'X';display:inline-block;position:absolute;left:0;top:0;width:20px;height:24px;text-align:center;padding-top:1px}.deleteform:hover::before{overflow:hidden;white-space:nowrap;padding:0;width:0}.deleteform::after{content:'File Only';position:absolute;bottom:0;right:122px;line-height:24px}.deleteform input,.deleteform .riceCheck{visibility:visible!important}.deleteform input[type=checkbox],.deleteform .riceCheck{margin:2px!important;position:absolute;right:105px;bottom:4px!important;top:auto!important}.deleteform input:not([type=checkbox]){height:20px!important;margin:0 1px 0 0!important}.deleteform input[type=password]{margin-left:4px!important;width:138px!important}.deleteform:hover input[type=password]{margin-left:0!important}" : "") + " table,td:not(.hide-reply-button):not(.deleteform){border:0!important;border-spacing:0!important;table-layout:fixed!important}blockquote{margin:0!important;padding:" + ($SS.conf["Slim Replies"] ? ($SS.conf["Backlinks Position"] !== 1 ? 8 : 4) + "px 16px" : "12px 22px") + "!important}blockquote,.fileInfo{margin-left:10px!important}#qp div.reply{padding:0!important}blockquote>div[style]{border-color:" + $SS.theme.sageColor.hex + "!important}.fileInfo{padding-left:3px!important}.op,.thread.hidden{display:block!important}.expanded-image .fileThumb{z-index:" + ($SS.conf["Expanded Images Cover QR"] ? 9: 4) + "!important;position:relative!important}img[alt=Closed],img[alt=Sticky],.remove{background-image:" + $SS.theme.dIcons.get() + "!important;background-color:transparent!important;background-repeat:no-repeat;display:inline-block;height:0!important;padding-top:16px!important;vertical-align:bottom;width:16px!important}.close{height:0!important}textarea,button,input:not([type=checkbox]):not([type=radio]):not([value=Next]):not([value=Previous]),#qr-filename-container,.webkit select," + ($SS.conf["Post Form"] !== 4 ? "#qr>form>.captcha-img>img," : "#qr>form>.captcha-img,") + " .catalog kbd{border:1px solid " + $SS.theme.inputbColor.hex + "!important}button,input[type=button],input[type=file],input[type=password],input[type=submit],input[type=text]:not(.jsColor),input#fs_search,input.field,.webkit select,textarea,#qr.has-captcha>form #spoilerLabel,#options input,#qr-filename-container,.catalog kbd{background:rgba(" + $SS.theme.inputColor.rgb + "," + $SS.theme.replyOp + ")!important}button,input:not(.jsColor),textarea{-webkit-transition:background .2s,box-shadow .2s;-moz-transition:background .2s,box-shadow .2s;-o-transition:background .2s,box-shadow .2s}button:hover,#qr-filename-container:hover,input[type=button]:hover,input[type=password]:hover,input[type=submit]:hover,input[type=text]:not(.jsColor):not([disabled]):hover,input#fs_search:hover,input.field:hover,.webkit select:hover,textarea:hover,#options input:hover{background:rgba(" + $SS.theme.inputColor.hover + "," + $SS.theme.replyOp + ")!important}input[type=password]:hover,input[type=text]:not([disabled]):hover,input#fs_search:hover,input.field:hover,.webkit select:hover,textarea:hover,#options input:not[type=checkbox]:hover{box-shadow:inset rgba(0,0,0,.2) 0 1px 2px}input[type=password]:focus,input[type=text]:focus,input#fs_search:focus,input.field:focus,.webkit select:focus,textarea:focus,#options input:focus{box-shadow:inset rgba(0,0,0,.2) 0 1px 2px}textarea:focus,input[type=text]:not(.jsColor):not([disabled]):focus,input[type=password]:focus,input#fs_search:focus,input.field:focus,#options input:focus{background:rgba(" + $SS.theme.inputColor.hover + "," + $SS.theme.replyOp + ")!important}input[type=button],#qr input[type=submit]{height:22px!important;padding:0!important;text-align:center!important;vertical-align:top;width:50px}input[type=checkbox],input[type=radio],.riceCheck{background:rgba(" + $SS.theme.inputColor.rgb + "," + $SS.theme.replyOp + ")!important;border:1px solid rgb(" + $SS.theme.inputbColor.rgb + ")!important;display:inline-block;height:12px!important;margin:3px;position:relative;vertical-align:top;width:12px!important;border-radius:2px!important;-webkit-appearance:none;-webkit-transition:background .1s;-moz-transition:background .1s;-o-transition:background .1s}input[type=radio]{border-radius:10px!important}input[type=checkbox],.riceCheck{box-shadow:rgba(" + $SS.theme.mainColor.shiftRGB(32) + ",.3) 0 1px}input[type=checkbox]:hover,input[type=radio]:hover,.riceCheck:hover{background:rgba(" + $SS.theme.inputColor.hover + "," + $SS.theme.replyOp + ")!important}input[type=checkbox]:checked,input[type=checkbox]:checked+.riceCheck{box-shadow:inset rgba(0,0,0,.2) 0 1px 2px,rgba(" + ($SS.theme.mainColor.isLight ? "255,255,255" : "100,100,100")  + ",.6) 0 1px}input[type=radio]:checked{background:rgba(" + $SS.theme.inputColor.shiftRGB(40, true) + "," + $SS.theme.replyOp + ")!important;box-shadow:inset rgba(" + $SS.theme.inputColor.shiftRGB(100, true) + ",.2) 0 0 1px!important}input[type=checkbox]::before,input[type=radio]::before,input[type=checkbox]+.riceCheck::before{content:'';display:block;height:8px;margin:1px;opacity:0;width:8px;-webkit-transition:opacity .2s ease-in-out;-moz-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out}input[type=checkbox]:checked::before,input[type=radio]:checked::before,input[type=checkbox]:checked+.riceCheck::before{opacity:1}input[type=checkbox]:checked::before,input[type=checkbox]:checked+.riceCheck::before{background:" + $SS.theme.checkMark.get() + "!important}input[type=radio]:checked::before{background:" + $SS.theme.radioCheck.get() + " transparent!important}input[type=checkbox]:active,input[type=radio]:active,.riceCheck:active{background:rgba(" + $SS.theme.inputColor.shiftRGB(40, true) + "," + $SS.theme.replyOp + ")!important;box-shadow:inset rgba(" + $SS.theme.inputColor.shiftRGB(100, true) + ",.4) 0 0 3px,rgba(" + $SS.theme.mainColor.shiftRGB(64) + ",.6) 0 1px!important}input[name='Persistent QR']:not([checked]),input[name='Auto Hide QR']:not([checked]),input[name='Persistent QR']:not([checked])+.riceCheck,input[name='Auto Hide QR']:not([checked])+.riceCheck{outline:1px solid red!important}.replyContainer>.reply input[type=checkbox],.replyContainer>.reply .riceCheck,{margin-left:0!important;position:relative}span.filesize~input[type=checkbox],span.filesize~.riceCheck{top:2px}textarea,.navLinks{margin:0!important}.textarea{margin-bottom:-1px!important}td.doubledash{padding:0;text-indent:-9999px}.boardBanner{height:0!important;position:fixed;" + $SS.conf["Sidebar Position String"] + ":1px;text-align:center;top:23px;" + (!$SS.conf["Sidebar Postion"] === 3 ? "z-index:3;" : "") + "}.top.autohide .boardBanner,.bottom .boardBanner{top:0!important;z-index:4!important}.boardBanner,.boardBanner img,.boardBanner .boardTitle{width:" + ($SS.conf["Sidebar Position"] === 3 ? 261 : 259) + "px!important}.boardBanner img{height:auto!important;margin:0!important;" + (!$SS.conf["Lighter Logo"] ? "" : "opacity:.5;") + " position:relative;z-index:1}.boardBanner #bBanner{height:86.3333px;position:fixed;" + ($SS.conf["Sidebar Position"] === 3 ? "pointer-events:none!important;" : "") + "}" + ($SS.conf["Show Logo Reflection"] ? " .boardBanner #bBanner::after{background-image:-moz-element(#banner);bottom:-100%;content:'';left:0;mask:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KCTxkZWZzPg0KCQk8bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJncmFkaWVudCIgeDI9IjAiIHkyPSIxIj4NCgkJCTxzdG9wIHN0b3Atb2Zmc2V0PSIwIi8+DQoJCQk8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIgb2Zmc2V0PSIxIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxtYXNrIGlkPSJtYXNrIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBtYXNrQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+DQoJCQk8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPg0KCQk8L21hc2s+DQoJPC9kZWZzPg0KPC9zdmc+#mask);opacity:.2;position:absolute;right:0;top:100%;z-index:1;-moz-transform:scaleY(-1)}.boardBanner img{-webkit-box-reflect:below 0 -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(.1,transparent),to(rgba(255,255,255,.5)))}" : "") + " " + ($SS.conf["Board Name Position"] == 1 ? ".boardBanner .boardTitle{top:150px!important;bottom:auto}" : ".boardBanner .boardTitle{top:auto;bottom:" + (($SS.conf["Post Form"] === 1) || ($SS.conf["Post Form"] === 4) ? 90 : 360) + "px!important}") + " .boardBanner .boardTitle{position:fixed!important;bottom:auto;font-size:30px!important;font-weight:400!important;font-family:sans-serif;cursor:default!important;display:block;font-size:28px!important;letter-spacing:-3px;padding:0 10px;text-align:center;text-shadow:" + $SS.theme.mainColor.hex + " -1px -1px," + $SS.theme.mainColor.hex + " 1px -1px," + $SS.theme.mainColor.hex + " -1px 1px," + $SS.theme.mainColor.hex + " 1px 1px,rgba(0,0,0,.6) 0 2px 4px,rgba(0,0,0,.6) 0 0 10px;z-index:3;" + $SS.conf["Sidebar Position String"] + ":0;" + $SS.conf["Sidebar Position oString"] + ":auto}.boardBanner .boardTitle::selection{background:transparent!important}.boardBanner .boardTitle::-moz-selection{background:transparent!important}.boardBanner .boardSubtitle{" + ($SS.conf["Board Name Position"] == 1 ? "top:185px!important;z-index:2;" : "z-index:3;fixed!important;bottom:" + (($SS.conf["Post Form"] !== 1) && ($SS.conf["Post Form"] !== 4) ? 342 : 72) + "px;") + " text-shadow:" + $SS.theme.mainColor.hex + " -1px -1px," + $SS.theme.mainColor.hex + " 1px -1px," + $SS.theme.mainColor.hex + " -1px 1px," + $SS.theme.mainColor.hex + " 1px 1px,rgba(0,0,0,.2) 0 0 10px,#000 0 1px 5px,#000 0 -1px 5px;width:256px!important;" + $SS.conf["Sidebar Position String"] + ":0;" + $SS.conf["Sidebar Position oString"] + ":auto;position:fixed!important}.boardBanner .boardSubtitle>a{text-transform:none!important;text-shadow:" + $SS.theme.mainColor.hex + " -1px -1px," + $SS.theme.mainColor.hex + " 1px -1px," + $SS.theme.mainColor.hex + " -1px 1px," + $SS.theme.mainColor.hex + " 1px 1px,rgba(0,0,0,.2) 0 0 10px,#000 0 1px 5px,#000 0 -1px 5px!important}div.autohide>a[title='Auto-hide dialog box']{text-decoration:underline!important}.op .filesize{display:inline-block!important;margin:2px " + ($SS.conf["Page Layout"] !== 2 ? 6 : 0) + "px!important}body>span[style]~form .op .filesize{padding-left:6px!important}.inline .filesize{margin:2px 0!important}.filesize span:not([class]){font-size:0!important;visibility:hidden}.filesize span:not([class])::after{content:attr(title);visibility:visible}input:not([type=checkbox]):not([type=radio]),button,select,textarea{-webkit-appearance:none;-o-appearance:none}" + ($SS.conf["Post Form"] !== 4 ? "#qr>.move," : "") + " #options .move{cursor:default!important}#overlay,#overlay2{background:rgba(0,0,0,.5);position:fixed;top:0;left:0;height:100%;width:100%;text-align:center;z-index:999!important}#overlay::before,#overlay2::before{content:'';display:inline-block;height:100%;vertical-align:middle}#addMascot,#addTheme,#themeoptions{border:0!important;display:inline-block;position:relative;text-align:right!important;width:600px;padding:5px!important;vertical-align:middle;border-radius:5px!important}#themeoptions>div{padding:5px}.trbtn{color:" + $SS.theme.jlinkColor.hex + ";display:inline-block;line-height:18px;margin:0 2px;min-width:40px;padding:2px 10px;text-align:center;background:-webkit-linear-gradient(top,rgba(" + $SS.theme.mainColor.shiftRGB(20) + "," + $SS.theme.replyOp + "),rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + "));background:-moz-linear-gradient(top,rgba(" + $SS.theme.mainColor.shiftRGB(20) + "," + $SS.theme.replyOp + "),rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + "));background:-o-linear-gradient(top,rgba(" + $SS.theme.mainColor.shiftRGB(20) + "," + $SS.theme.replyOp + "),rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + "));border-radius:3px;box-shadow:rgba(0,0,0,.3) 0 0 2px}.trbtn:hover,#selectImage>input[type=file]:hover+.trbtn{background:rgba(60,60,60," + $SS.theme.replyOp + ");background:-webkit-linear-gradient(top,rgba(" + $SS.theme.mainColor.shiftRGB(40) + "," + $SS.theme.replyOp + "),rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + "));background:-moz-linear-gradient(top,rgba(" + $SS.theme.mainColor.shiftRGB(40) + "," + $SS.theme.replyOp + "),rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + "));background:-o-linear-gradient(top,rgba(" + $SS.theme.mainColor.shiftRGB(40) + "," + $SS.theme.replyOp + "),rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + "))}.trbtn:active,#selectImage>input[type=file]:active+.trbtn{box-shadow:inset rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 2px}.trbtn-small{padding:2px 5px;min-width:30px}#themeoptions #toNav{list-style:none;margin:0;padding:0;position:absolute;top:-26px}#themeoptions #toNav li{float:left;margin:0;padding:0}#themeoptions #toNav li label{background:rgba(" + $SS.theme.mainColor.shiftRGB(-10) + "," + $SS.theme.replyOp + ");color:#888!important;display:block;height:16px;margin:0 2px;padding:5px 10px;text-align:center;width:75px;border-radius:5px 5px 0 0;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out}#SSVersion{opacity:.5;padding-right:5px;padding-left:35px}.linkdelimiter{opacity:.4}#issueslink{padding-right:10px}#themeoptions #toWrapper{background:rgb(" + $SS.theme.mainColor.shiftRGB(-12) + ");box-shadow:inset rgba(0,0,0,.3) 0 0 5px,rgba(" + $SS.theme.mainColor.shiftRGB(32) + ",.6) 0 1px 3px;border-radius:5px}#themeoptions #toWrapper,#themeoptions #toWrapper>div{height:400px}#themeoptions #toWrapper>div{overflow:auto}#themeoptions #toWrapper>[name=toTab]:not(:checked)+div{display:none}#themeoptions #tMain .mOption,#themeoptions #tNavLinks .navlink{display:block;border-bottom:1px solid rgba(" + $SS.theme.mainColor.rgb + ",.3);border-top:1px solid rgba(0,0,0,.1);height:20px;padding:0 3px;vertical-align:top}.deleteform::before,#themeoptions #tMain .mOption span{float:left;line-height:20px!important}#themeoptions #tMain .mOption:first-child{border-top:0!important}#themeoptions #tMain .mOption:last-child{border-bottom:0!important}#themeoptions #tMain select[name='Font Family'] option{max-width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#themeoptions #tMain .subOption::before{border-bottom:1px solid rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);content:'';display:inline-block;float:left;margin-right:2px;height:50%;width:6px}#themeoptions #tMain .subOption{margin-left:16px}#themeoptions #tThemes>div{opacity:.5;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s}#themeoptions #tThemes>div:hover,#themeoptions #tThemes>div.selected,#themeoptions #tThemes>div.nsfw{opacity:1}#themeoptions #tThemes .reply{margin:2px 0!important;padding:2px!important;position:relative;text-align:left;width:100%;border-radius:2px!important}#themeoptions #tThemes>div p{bottom:4px;right:2px;margin:0;opacity:0;position:absolute;z-index:3}#themeoptions #tThemes>div:hover p{opacity:1}#themeoptions #tThemes>div p a{display:inline-block;margin:0 2px;padding:2px 5px;text-align:center;width:50px;border-radius:3px}#themeoptions #tThemes>div h3{bottom:-5px;font-size:32px!important;margin:0!important;opacity:0;position:absolute;right:300px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s}#themeoptions #tThemes>div.nsfw .h3nsfw{opacity:1;right:3px;z-index:1}#themeoptions #tThemes>div.selected .h3sfw{opacity:1;right:3px;z-index:1}#themeoptions #tThemes>div.selected.nsfw h3:not(.h3both){opacity:0!important;right:300px!important;z-index:0!important}#themeoptions #tThemes>div.selected.nsfw .h3both{opacity:1;right:3px;z-index:1}#themeoptions #tMascot{text-align:center}#themeoptions #toWrapper>div>p{bottom:10px;left:10px;position:absolute}#themeoptions #toWrapper>div>p{margin:0}#themeoptions #tMascot div{background-position:center top!important;background-repeat:no-repeat!important;background-size:cover!important;display:inline-block;height:257px;margin:2px;opacity:.75;position:relative;width:185px;border-radius:10px;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s}#themeoptions #tMascot div:hover{opacity:1}#themeoptions #tMascot div.selected,#themeoptions #tMascot div.nsfw{background-color:rgba(" + $SS.theme.linkColor.rgb + ",.6)!important;opacity:1;box-shadow:inset rgba(0,0,0,.15) 0 0 15px,rgba(" + $SS.theme.linkColor.rgb + ",.6) 0 0 2px}#themeoptions #tMascot div a{position:absolute;top:0;padding:5px 8px;background:rgba(0,0,0,.3)}#themeoptions #tMascot div a:not([href]):hover{background:rgba(0,0,0,.5)}#themeoptions #tMascot div a[title=Delete],#themeoptions #tMascot div a[title=Hide]{left:0;border-radius:10px 0}#themeoptions #tMascot div a[title=Edit]{right:0;border-radius:0 10px}#themeoptions #tNavLinks .navlink>div:not(.handle),#themeoptions #tNavLinks .navlink>label,#themeoptions #tNavLinks .navlink>a{position:relative;z-index:1}#themeoptions #tNavLinks .navlink{height:24px;padding-top:1px;position:relative;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s}#themeoptions #tNavLinks .moving{opacity:.5;-webkit-transform:scale(.95);-moz-transform:scale(.95);-0-transform:scale(.95)}#themeoptions #tNavLinks .over:not(.moving){border-top:4px double " + $SS.theme.brderColor.hex + "}#themeoptions #tNavLinks .moving~.over{border-bottom:4px double " + $SS.theme.brderColor.hex + ";border-top:1px solid rgba(0,0,0,.1)}#themeoptions #tNavLinks .navlink .handle{border-left:16px solid rgb(" + $SS.theme.brderColor.shiftRGB(8, true) + ");cursor:move;height:26px;left:0;position:absolute;top:0;width:100%;z-index:0}#themeoptions #tNavLinks label{margin:0 3px;position:relative;top:1px}#themeoptions #tNavLinks label:first-child{float:left;margin-left:18px}#themeoptions #tNavLinks label:first-child>input[type=text]{width:120px}#themeoptions #tNavLinks label>input[type=text]{width:125px}#themeoptions label>input[type=checkbox],#themeoptions label>.riceCheck{margin:4px 2px 0!important;vertical-align:bottom!important}#themeoptions span>select,#themeoptions span>input[type=text]{width:125px}#themeoptions input[type=text],#themeoptions select{max-height:22px;margin:0!important;padding:1px 3px!important}#themeoptions select{padding:1px 1px 1px 0!important}#themeoptions textarea{background:transparent!important;border:0!important;height:100%!important;width:100%!important;resize:none}#addMascot{width:350px!important}#addMascot>div{padding:5px}#addMascot>label{display:block}#addMascot>label>span,#addTheme>label>span{float:left;line-height:22px;padding-left:5px}#addMascot>label>input[type=text],#addMascot>label>select,#addMascot>label>textarea{margin-top:1px!important;width:200px}#addMascot select[name=mPosition],#addMascot input[name=mOffset][type=text]{width:80px}#addMascot>label>textarea{height:20px;line-height:20px;overflow:hidden;resize:none}#addMascot>label>input[type=checkbox],#addMascot>label>.riceCheck{margin-top:5px}#selectImage{float:left;height:24px!important;margin-top:-2px;padding-top:2px}a[name=clearIMG]{display:none;float:left;opacity:0;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out}input[name=customIMGB64]+a[name=clearIMG]{display:inline-block;opacity:1}#addTheme{text-align:left!important;width:500px!important}#addTheme>label{display:inline-block;text-align:right;width:50%}#addTheme>label#customCSS{width:100%}#addTheme>label#customCSS>textarea{height:100px;resize:vertical;width:100%}#addTheme>label>input[type=text],#addTheme>label>select{width:100px}#addTheme>div{margin-top:.6em;text-align:right}#themeoptions,#options.dialog,#themeoptions #toNav li label.selected,#themeoptions #toNav li label:hover,#addMascot,#addTheme{background:rgba(" + $SS.theme.mainColor.rgb + ",.98)!important;text-align:center}#options.dialog,#themeoptions,#addMascot,#addTheme{margin:0 auto!important;text-align:left;box-shadow:rgba(0,0,0,.6) 0 0 10px;border-radius:5px}#options{width:600px!important;z-index:1000!important}#options hr{margin:3px 0!important}#options button{vertical-align:baseline!important;width:auto!important}#options input{width:150px}#options ul{margin-right:5px;padding:2px 5px!important;border-radius:5px;box-shadow:inset rgba(" + ($SS.theme.mainColor.isLight ? "255,255,255" : "155,155,155") + ",.3) 0 0 5px}.expand-all-shortcut,.contract-all-shortcut{position:relative!important;bottom:5px;margin-right:4px!important;margin-left:6px!important;z-index:10!important;font-size:0!important;padding:9px!important;overflow:hidden;opacity:.6!important}.expand-all-shortcut:hover,.contract-all-shortcut{opacity:1!important}.menu-button{font-size:0!important;padding:7px!important;opacity:.6!important;border-radius:0!important;border:0!important}#header-bar .menu-button{position:relative!important;bottom:5px;font-size:0!important;z-index:10!important;display:inline!important;margin-right:2px!important;margin-left:2px!important}.menu-button:hover{opacity:1!important}form[name=post] input[name=email]+label,form[name=post] #com_submit+label,#qr>form #spoilerLabel::after,#imgControls label,#navlinks,#themeoptions #toNav li label,.preview>label::after{line-height:16px}#navlinks{right:230px!important;top:5px!important;height:18px;z-index:14!important}#ihover{padding-bottom:21px;z-index:15!important}body>center:nth-of-type(2){position:relative}" + (!$SS.conf["Slideout Announcement"] ? " .globalMessage{padding-" + $SS.conf["Sidebar Position oString"] + ":" + ($SS.conf["Non-Sidebar Margin"] !== 999 ? ""+ $SS.conf["Non-Sidebar Margin"] + "" : "" + $SS.conf["Non-Sidebar Custom Margin"] + "") + "px!important;margin-top:40px!important;position:static!important;background:none!important;border:0!important}.globalMessage::before{display:none!important}div.closed~.globalMessage{margin-bottom:20px!important}" : " .globalMessage{position:absolute!important;top:-1000px!important;" + ($SS.conf["Sidebar Position"] !== 2 ? " right:2px!important;left:auto!important;" : " right:auto!important;left:2px!important;") + " bottom:auto!important;padding:10px 5px!important}.globalMessage b{font-weight:100!important}table.postForm>tbody>tr>td:first-child{background-color:transparent!important}.globalMessage:hover{position:fixed!important;z-index:99!important}.globalMessage{width:248px!important}") + " body>.closed{height:18px;line-height:18px;padding:0!important}#OneeChanLink{opacity:.6!important;z-index:5;padding:8px!important;font-size:0!important;position:relative;bottom:5px;margin-left:4px}#OneeChanLink:hover{opacity:1!important;cursor:pointer}" + ($SS.conf["Pages Position"] !== 4 ? ($SS.conf["Pages Position"] === 3 ? " .mPagelist.mobile{background:transparent!important;bottom:0!important;display:block!important;height:20px;left:0!important;margin:0!important;padding:0 5px;position:fixed!important;width:auto!important;z-index:15}.mPagelist .pages{display:-webkit-box!important;display:-moz-box!important;display:box!important;height:20px;padding:0!important;text-align:center;-webkit-box-align:center!important;-moz-box-align:center!important;box-align:center!important;margin-bottom:-1px!important}.mPagelist .pages span{padding:2px}.mPagelist strong,.mPagelist a{font-size:12px!important}.mPagelist strong{color:" + $SS.theme.textColor.hex + "!important}.mPagelist a{color:" + $SS.theme.linkColor.hex + "!important}.mPagelist span[style]{display:inline-block!important;margin-top:0!important}.prev,.next{display:none!important}" : " .pagelist{width:100%!important;padding:3px 0!important;border:0!important;float:none!important;clear:both;height:15px!important;z-index:3;" + ($SS.conf["Pages Position"] === 2 ? " position:fixed!important;bottom:0!important;" : " position:absolute!important;" + $SS.conf["Sidebar Position oString"] + ":0!important;" + $SS.conf["Sidebar Position String"] + ":" + $SS.iSidebarSize + "!important;") + " text-align:center!important}.bottom .pagelist{top:0!important;bottom:auto!important}.pages,.prev,.next{display:inline-block!important;position:relative!important;bottom:10px!important;" + ($SS.conf["Post Form"] !== 4 ? "" + ($SS.conf["Pages Position"] === 1 ? $SS.conf["Sidebar Position String"] : "right") + ":131px!important;" : "") + "}.prev{margin-right:4px!important}.next{margin-left:4px!important}.next input,.next input:hover,.prev input,.prev input:hover{background:none!important;border:0!important;box-shadow:none!important}.next input,.prev input{color:" + $SS.theme.linkColor.hex + "!important}.next input:hover,.prev input:hover{color:" + $SS.theme.linkHColor.hex + "!important}.pages{text-align:center!important;border-spacing:0!important;margin:auto!important;padding-right:0!important;z-index:1;float:none!important;clear:both;word-spacing:10px!important;font-size:0!important;color:transparent!important;height:15px!important}.pages a,.pages strong>a{font-size:12px!important}.mPagelist.mobile{display:none!important}") : "") + " body>div[style='width: 100%;']+form[name=delform]{display:block!important;margin-top:43px!important;position:fixed}body>div[style='width: 100%;']+form[name=delform]{display:block!important;margin-top:43px!important;position:fixed}div[style='width: 100%; height: 450px; float: left;']{border-left:0!important;border-right:0!important;height:100%!important;margin:0 auto;margin-top:20px!important;width:100%!important}div[style='width: 100%; height: 450px; float: left;']>table{height:100%!important;padding-bottom:20px;margin-left:20px!important;width:97%!important;margin-top:20px!important}div[style='width: 100%; height: 450px; float: left;']>table td{border-left:1px solid " + $SS.theme.brderColor.hex + "!important;height:600px!important}div[style='width: 100%; height: 450px; float: left;']>table td:first-child{border-left:0!important}div[style='width: 100%; height: 450px; float: left;']>table input[type=button]{width:100px!important}div[style='width: 100%; height: 450px; float: left;']>table table td{border:0!important;height:auto!important}div[style='width: 100%; height: 450px; float: left;']>table table td b[style]{background-color:" + $SS.theme.mainColor.hex + "!important}div[style='width: 100%; height: 450px; float: left;']>table table,div[style='width: 100%; height: 450px; float: left;']>table #fs_search{width:100%!important}#fs_data tr:first-child td{border-top:0!important}#fs_status{background-color:transparent!important}a[href='.././']:hover{opacity:1}#fs_data tr:first-child td{border-top:0!important}.settingsWindowLinkBot,.exlinksOptionsLink{position:static!important;display:inline-block!important;float:" + $SS.conf["Sidebar Position oString"] + "!important}.exlinksOptionsLink{height:15px;width:15px;opacity:.6}.exlinksOptionsLink:hover{opacity:1}#playerDiv{padding:2px}#playerStyleSettingsButton{left:2px!important}#playerClose{right:2px!important}#selectImage{height:22px;line-height:22px;overflow:hidden;position:relative}#selectImage input[type=file]{cursor:pointer!important;position:absolute;top:0;left:0;z-index:1;opacity:0;width:auto!important;-webkit-transform:scale(20) translateX(-30%);-moz-transform:scale(20) translateX(-30%);-o-transform:scale(20) translateX(-30%)}ul#Alerts,ul#Alerts a:hover{color:#222!important}a[href='.././']{width:15px!important;height:15px!important;float:left;z-index:15;color:transparent!important;font-size:0!important;opacity:.6}#header-bar a.current{font-weight:700!important;font-size:13px!important}#full-board-list{font-size:0!important}#full-board-list a:not(.current){font-size:12px!important}#full-board-list a{margin-right:2px;word-spacing:2px}.hide-board-list-button::before{content:'[';font-size:12px!important;position:relative!important;right:1px;color:" + $SS.theme.textColor.hex + "!important}.hide-board-list-button::after{content:']';font-size:12px!important;color:" + $SS.theme.textColor.hex + "!important}#qr{height:auto!important;margin:0 0 0!important;padding:0 2px!important;position:fixed!important;" + ($SS.conf["Post Form"] !== 4 ? " bottom:0!important;border-top:1px solid " + $SS.theme.brderColor.hex + "!important;top:auto!important;overflow:visible!important;" + ($SS.conf["Sidebar Position"] === 3 ? " border-right:1px solid " + $SS.theme.mainColor.hex + "!important;border-bottom:1px solid " + $SS.theme.mainColor.hex + "!important;z-index:11!important;width:261px!important;" : " max-width:261px!important;min-width:261px!important;z-index:5!important;width:261px!important;") + "}#qr>.move>label{cursor:text!important}.bottom:not(.autohide) #qr{bottom:23px!important}#qr.autohide{" + ($SS.conf["Post Form"] === 1 ? " bottom:-248px!important;-webkit-transition:bottom .2s ease-in-out 1s;-moz-transition:bottom .2s ease-in-out 1s;-o-transition:bottom .2s ease-in-out 1s;" : ($SS.conf["Post Form"] === 2 ? " opacity:.2;-webkit-transition:opacity .2s ease-in-out 1s;-moz-transition:opacity .2s ease-in-out 1s;-o-transition:opacity .2s ease-in-out 1s;" : "")) + "}" + ($SS.conf["Post Form"] === 1 ? " .bottom:not(.autohide) #qr.autohide{bottom:-225px!important}" : "") + " #qr-filerm{margin-right:-7px!important;bottom:7px!important}#qr:hover,#qr.focus{bottom:0!important;" + ($SS.conf["Post Form"] === 1 ? " -webkit-transition:bottom .2s ease-in-out;-moz-transition:bottom .2s ease-in-out;-o-transition:bottom .2s ease-in-out;" : ($SS.conf["Post Form"] === 2 ? " opacity:1!important;-webkit-transition:opacity .2s ease-in-out;-moz-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out;" : "")) + "}.bottom:not(.autohide) #qr:hover,.bottom:not(.autohide) #qr:focus{bottom:23px!important}#qr.autohide>form{display:block!important}" : " " + ($SS.conf["Post Form"] !== 4 ? "width:263px!important;margin-bottom:19px!important;" : "min-width:261px!important;padding-bottom:2px!important;") + " z-index:11!important}#qr .move{margin-bottom:1px!important}#qr.autohide:not(:hover):not(.focus){padding:0 3px!important}#qr.focus>form{display:block!important}") + " " + ($SS.conf["Post Form"] === 1 ? " #delform[action='https://sys.4chan.org/f/up.php']~#qr{bottom:0!important}" : "") + " #qr>form>.captcha-img>img{width:100%}.captcha-img{min-width:0!important;min-height:0!important;border:0!important;margin-bottom:0!important}.captcha-input{margin-top:1px!important}#qr textarea{min-height:127px!important;position:relative;" + $SS.conf["Sidebar Position String"] + ":0!important;" + ($SS.conf["Post Form"] !== 4 ? "resize:none;" : "") + " width:255px;z-index:1;min-width:255px!important;max-width:255px!important}#qr-filename-container{min-width:74%!important;max-width:74%!important;margin-top:0!important}#qr:not(.has-captcha)>.move{height:26px!important}#qr>.move{line-height:18px!important;min-width:0!important;padding:2px 0 0 3px!important;padding-top:4px!important;text-align:left!important}#qr>.move select,#qr>.move .riceCheck,#qr>.move span{text-transform:none}#qr>.move select{height:19px!important;margin-top:-2px;margin-bottom:1px}#qr>form>div{position:relative}#qr>form>.captcha-img>img,#qr>form input[type=submit]{margin-top:0!important}#qr>form>div:first-child{position:relative}#dump-button{width:10.4%!important}.persona .field{float:left;height:22px;padding:3px 4px!important;" + ($SS.conf["Post Form"] !== 4 ? "margin-right:1px!important;width:75px!important;max-width:75px!important;min-width:75px!important;" : "width:29%!important;") + "}#qr>form>div:first-child+div,#qr>form>div#replies+div,#qr>form>.captcha-img{clear:both}#qr>form .field{margin-bottom:1px!important}#qr>form>.captcha-img{" + ($SS.conf["Post Form"] !== 4 ? "background:none!important;" : "") + " outline:0!important}#qr>form>.captcha-img+div{float:left;margin-right:1px;position:relative;z-index:1;" + ($SS.conf["Post Form"] !== 4 ? "" : "width:69%!important;") + "}#qr>form>.captcha-img+div input{height:22px;" + ($SS.conf["Post Form"] !== 4 ? "width:189px!important;" : "") + "}#qr>form input[type=submit]{" + ($SS.conf["Post Form"] !== 4 ? "width:65px!important;" : "width:31%!important;margin:0 -1px!important;") + "}#qr>form input[type=file]+input[type=submit]{position:absolute;right:0;top:0}#qr-spoiler-label{position:absolute!important;right:5px!important;bottom:26px!important;background-color:rgba(" + $SS.theme.inputColor.rgb + ",.5)!important}.preview>label{background:rgba(0,0,0,.75)!important;color:#fff!important}#addReply{font-size:3.5em!important}#qr .warning{z-index:2!important;padding:1px 2px;text-align:center}" + ($SS.conf["Post Form"] === 4 ? " #qr:not(.has-captcha) [type=submit]{margin:1px -1px 0 0!important;width:100%!important;float:right!important}#qr:not(.has-captcha) #spoilerLabel{bottom:5px!important}#qr:not(.has-captcha) .warning:not(:empty){padding:3px 2px!important}" : "#qr:not(.has-captcha) [type=submit]{margin:1px 0 0!important;width:255px!important;float:right!important}#qr:not(.has-captcha) #spoilerLabel{bottom:3px!important}#qr:not(.has-captcha) textarea{height:174px!important}#qr:not(.has-captcha) .warning:not(:empty){padding:3px 2px!important}") + " #menu,.subMenu{border:1px solid " + $SS.theme.brderColor.hex + "!important}.hasSubMenu:after{font-size:12px!important}#menu .focused.entry{background:rgba(" + $SS.theme.mainColor.shiftRGB(16, true) + ",.5)!important}.entry{border:0!important}input[name=name].tripping:not(:hover):not(:focus){color:transparent!important}a.useremail" + ($SS.conf["Sage Identification"] === 2 ? ":not([href='mailto:sage'])" : "") + ":last-of-type::after{vertical-align:middle}form[name=delform][action$='/f/up.php']{border:1px solid " + $SS.theme.brderColor.hex + "!important;" + ($SS.conf["Sidebar Position"] !== 3 ? " margin-" + $SS.conf["Sidebar Position String"] + ":261px!important;margin-" + $SS.conf["Sidebar Position oString"] + ":" + ($SS.conf["Non-Sidebar Margin"] !== 999 ? ""+ $SS.conf["Non-Sidebar Margin"] + "" : "" + $SS.conf["Non-Sidebar Custom Margin"] + "") + "!important;" : " margin:0 5%!important;") + " border-radius:3px!important}form[name=delform][action$='/f/up.php']>center{background:rgba(" + $SS.theme.mainColor.rgb + ",.9)!important;display:block!important;border-radius:3px!important}form[name=delform][action$='/f/up.php']>center>table{width:100%!important}form[name=delform][action$='/f/up.php'] tr{display:table-row!important}.ys_playerContainer{position:fixed!important;bottom:262px!important;margin:0!important;width:262px!important;" + $SS.conf["Sidebar Position String"] + ":0!important;z-index:3!important}.ys_playerContainer audio{width:100%!important}pre.prettyprint{background:none repeat scroll 0 0 rgba(255,255,255,.2)!important;border:1px solid #ccc!important;vertical-align:middle}span.pun{color:rgba(" + $SS.theme.textColor.rgb + ",.4)!important}div.post>blockquote .prettyprint span{font-family:monospace!important;font-size:medium!important}.prettyprint .pln{color:" + $SS.theme.textColor.hex + "}.hide-reply-button span,.hide-thread-button span{font-size:0!important}.hide-reply-button span::after,.hide-thread-button:not(.hidden_thread) span::after{content:" + ($SS.conf["Hide Button Content"].indexOf("http") === 0 ? "url(" + $SS.conf["Hide Button Content"] + ")" : "'" + $SS.conf["Hide Button Content"] + "'") + ";font-size:12px!important}.reply{padding-top:0!important;padding-left:0!important}.replyContainer>.reply>div.postInfo{padding:2px 50px 1px 12px!important;marigin-top:-1px!important}div.post div.postInfo{width:100%!important;display:block!important}" + ($SS.conf["Use Post Info Color"] ? " .replyContainer>.reply>div.postInfo{background:rgba(" + $SS.theme.pinfoColor.rgb + "," + $SS.theme.replyOp + ")!important;border-bottom:1px solid " + $SS.theme.pinfobColor.hex + "!important}" + ($SS.conf["Use Post Info Color"] && $SS.conf["Add Shadow?"] ? " .replyContainer>.reply>div.postInfo{box-shadow:0 2px 3px " + ($SS.theme.bgColor.isLight ? "#999" : "#111") + "!important;margin-bottom:3px!important}" : "") + " " : " .reply{padding-top:2px!important}") + " .thread>.replyContainer>.reply>.postInfo{padding-right:50px!important}.capcodeAdmin>span.name,.capcodeAdmin>strong.capcode{color:red!important}.capcodeMod>span.name,.capcodeMod>strong.capcode{color:purple!important}" + (!$SS.theme.bgColor.isLight ? " pre.prettyprint{background:none repeat scroll 0 0 rgba(0,0,0,.2)!important;border:1px solid rgba(204,204,204,.1)!important}" : "") + " .expand-all-shortcut{background-image:url(\"data:image/svg+xml,"+$SS.theme.icons.imgExpand+"\")!important}.contract-all-shortcut{background-image:url(\"data:image/svg+xml,"+$SS.theme.icons.imgContract+"\")!important}.globalMessage::before{content:url(\"data:image/svg+xml,"+$SS.theme.icons.announcement+"\")!important}#OneeChanLink{background-image:url(\"data:image/svg+xml,"+$SS.theme.icons.OneeChan+"\")!important}.settings-link{background-image:url(\"data:image/svg+xml,"+$SS.theme.icons._4chanX+"\")!important}.favicon{background-image:url(\"data:image/svg+xml,"+$SS.theme.icons.heart+"\")!important}.menu-button{background-image:url(\"data:image/svg+xml,"+$SS.theme.icons.menuButtonTop+"\")!important}.bottom #header-bar .menu-button{background-image:url(\"data:image/svg+xml,"+$SS.theme.icons.menuButtonBot+"\")!important}#delform div.reply.lastmuInfo{background:none!important;border:0!important;padding:0!important;padding-top:0!important;padding-left:0!important}div.reply.lastmuInfo p{display:inline-block!important}#lastmuSettingsWindowLink{display:block!important;font-size:0!important;color:transparent!important;background-repeat:no-repeat!important;height:12px!important;width:18px!important;float:" + $SS.conf["Sidebar Position oString"] + "!important;opacity:0." + ($SS.theme.bgColor.isLight ? 6 : 6) + "!important;font-size:0!important}#lastmuSettingsWindowLink:hover{opacity:1!important}.opContainer.filter_highlight,#delform .filter_highlight>div.reply{box-shadow:inset 5px 0 rgba(" + $SS.theme.sageColor.rgb + ",.5)!important}.opContainer.filter_highlight{padding-left:5px!important}" + ($SS.conf["Pages Position"] === 3 ? " .mPagelist.mobile{z-index:5!important}.pages:not(.cataloglink){bottom:auto!important;left:auto!important;margin:0!important;opacity:.75;padding:0!important;position:fixed;right:" + ($SS.conf["Page Layout"] === 3 ? (Math.min($SS.conf["Non-Sidebar Margin"], 40) / 2 * ($SS.conf["Non-Sidebar Margin"] < 10 ? 3 : 1)) + "%" : ($SS.conf["Sidebar Position"] === 3 ? "25" : "263")) + "px!important;top:47%;width:auto!important;z-index:6!important;-webkit-transform:rotate(90deg);-webkit-transform-origin:bottom right;-moz-transform:rotate(90deg);-moz-transform-origin:bottom right;-o-transform:rotate(90deg);-o-transform-origin:bottom right}" : "") +
($SS.conf["Expanding Form Inputs"] ? " .field:focus::-webkit-input-placeholder{color:transparent!important}.field:focus:-moz-placeholder{color:transparent!important}.field:focus::-moz-placeholder{color:transparent!important}.persona .field:focus{background:rgba(" + $SS.theme.inputColor.hover + ",.98)!important;left:0!important;position:absolute;width:255px!important;min-width:255px!important;max-width:255px!important}.persona .field:focus{-webkit-transition:box-shadow .2s,width .2s ease-in-out,max-width .2s ease-in-out,min-width .2s ease-in-out!important;-moz-transition:box-shadow .2s,width .2s ease-in-out,max-width .2s ease-in-out,min-width .2s ease-in-out!important;-o-transition:box-shadow .2s,width .2s ease-in-out,max-width .2s ease-in-out,min-width .2s ease-in-out!important}#qr.has-captcha #replies+div{height:128px!important}#qr:not(.has-captcha) #replies+div{height:175px!important}#qr textarea:focus{width:415px!important;min-width:415px!important;max-width:415px!important;" + ($SS.conf["Sidebar Position"] === 1 ?" " + $SS.conf["Sidebar Position String"] + ":160px!important;" : "") + " -webkit-transition:background .2s,box-shadow .2s,width .2s ease-in-out,min-width .2s ease-in-out,max-width .2s ease-in-out," + $SS.conf["Sidebar Position String"] + " .2s ease-in-out!important;-moz-transition:background .2s,box-shadow .2s,width .2s ease-in-out,min-width .2s ease-in-out,max-width .2s ease-in-out," + $SS.conf["Sidebar Position String"] + " .2s ease-in-out!important;-o-transition:background .2s,box-shadow .2s,width .2s ease-in-out,min-width .2s ease-in-out,max-width .2s ease-in-out," + $SS.conf["Sidebar Position String"] + " .2s ease-in-out!important}" : "") +
(!$SS.conf["Show Logo"] ? " .boardBanner img{display:none!important}" : "") +
($SS.conf["Style Scrollbars"] ? "::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track-piece,::-webkit-scrollbar-track{background:" + $SS.theme.brderColor.hex + "}::-webkit-scrollbar-corner,::-webkit-scrollbar-resizer{background:" + $SS.theme.brderColor.hex + "}::-webkit-scrollbar-thumb{background:rgb(" + $SS.theme.brderColor.shiftRGB(32, true) + ");border:2px solid " + $SS.theme.brderColor.hex + ";border-radius:5px}::-webkit-scrollbar-thumb:hover,::-webkit-scrollbar-thumb:active{background:rgb(" + $SS.theme.brderColor.shiftRGB(64, true) + ")}.reply ::-webkit-scrollbar-track,.reply ::-webkit-scrollbar-track-piece{border-radius:5px}": "") +
($SS.location.sub === "sys" ? " body{margin:0!important;padding:0!important}body>form[method=POST]{background:rgba(" + $SS.theme.mainColor.rgb + ",.9);margin:5px auto;max-width:625px!important;padding:5px;border-radius:5px}body>form[action='']>table{display:table!important}body>form[action='']>table fieldset{text-align:left!important}body>form[action=''],body>form[action='']>table fieldset,body>form[action='']>table #recaptcha_response_field{border:1px solid " + $SS.theme.brderColor.hex + "!important}body>form[action='']>table,body>form[action='']>table td[width]+td{text-align:center}body>form[action='']~.rules{display:block!important;margin:0 auto}body>form[action='']>table td[width='240px']{display:none!important}" : "") + $SS.theme.customCSS + "";
            if ($("#ch4SS").exists())
                $("#ch4SS").text(css);
            else
                $(document.head).append($("<style type='text/css' id=ch4SS>").text(css));
        },
        nodeInsertedHandler: function(e)
        {
            if ($(e.target).hasClass("postContainer"))
            {
                if (!$SS.browser.webkit && !$SS.conf["Hide Checkboxes"])
                    $("input[type=checkbox]", e.target).riceCheck();
            }
            else if (e.target.className === "thumbnail" ||
                     e.target.nodeName === "DIV" ||
                     e.target.id === "prefetch")
            {
                if (e.target.className === "thumbnail")
                    $(".riceFile>span", $("#qr")).text("");

                if (!$SS.browser.webkit)
                    $("input[type=checkbox]", e.target).riceCheck();
            }
        },
        QRDialogCreationHandler: function(e)
        {
            var qr = e.target;

            if ($SS.conf["Post Form"] !== 4)
                $(".move", qr).bind("click", function(){ $("form :focus", qr).blur(); });

            if ($SS.conf["Expanding Form Inputs"])
                $("#dump~input", qr).each(function(){ $(this).after($("<span>" + $(this).attr("placeholder"))); });

            $("input,textarea,select", qr).bind("focus", function(){ $("#qr").addClass("focus"); })
                                          .bind("blur", function(){ $("#qr").removeClass("focus"); });

            if ($SS.conf["Smart Tripcode Hider"])
                $("input[name=name]").each(function()
                {
                    $SS.tripHider.init($(this));
                    $SS.tripHider.handle(this);
                });

            if (!$SS.browser.webkit)
                $("input[type=checkbox]", qr).riceCheck();

            $SS.QRhandled = true;
        },

        /* CONFIG */
        Config:
        {
            hasGM: typeof GM_deleteValue !== "undefined",
            init: function()
            {
                var parseVal = function(key, val)
                {
                    if (/^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key))
                    {
                        if (key === "Selected Theme")
                            return parseInt(val);
                        else if (key === "NSFW Theme")
                            return parseInt(val);
                        else if (key === "Selected Mascots" && val === 0)
                            return 0;

                        for (var i = 0, MAX = val.length, ret = []; i < MAX; ++i)
                            ret[i] = parseInt(val[i]);

                        return ret;
                    }

                    return (Array.isArray(val) && typeof val[0] !== "object") ? val[0] : val;
                };

                $SS.conf = [];

                for (var key in defaultConfig)
                    $SS.conf[key] = parseVal(key, this.get(key));

                $SS.conf["Small Font Size"]          = $SS.conf["Font Size"] > 11 && !$SS.conf["Bitmap Font"] ? 12 : $SS.conf["Font Size"];
                $SS.conf["Sidebar Position String"]  = $SS.conf["Sidebar Position"] !== 2 ? "right" : "left";
                $SS.conf["Sidebar Position oString"] = $SS.conf["Sidebar Position"] !== 2 ? "left" : "right";
            },
            get: function(name)
            {
                var val = this.hasGM ?
                            GM_getValue(NAMESPACE + name) :
                            localStorage.getItem(NAMESPACE + name);

                if (val != undefined)
                    return JSON.parse(val);

                return defaultConfig[name];
            },
            set: function(name, val)
            {
                name = NAMESPACE + name;

                if (typeof val !== "number")
                    val = JSON.stringify(val);

                return this.hasGM ?
                        GM_setValue(name, val) :
                        localStorage.removeItem(name, val),
                        localStorage.setItem(name, val);
            }
        },

        /* OPTIONS */
        options:
        {
            saveAndClose  : true,
            init: function()
            {
                var a = $("<a id='OneeChanLink' title='OneeChan Settings'>").bind("click", $SS.options.show);
                return $("#shortcuts>.shortcut:last-of-type").before(a);
            },
            show: function()
            {
                if ($("#overlay").exists())
                    $SS.options.close();
                else
                {
                    var overlay     = $("<div id=overlay>").bind("click", $SS.options.close),
                        tOptions    = $("<div id=themeoptions class=reply>").bind("click", function(e) { return e.stopPropagation(); }),
                        optionsHTML = "<ul id=toNav>" +
                        "<li><label class=selected for=tcbMain>Main</label></li>" +
                        "<li><label for=tcbThemes>Themes</label></li>" +
                        "<li><label for=tcbMascots>Mascots</label></li>" +
                        "</ul><div id=toWrapper><input type=radio name=toTab id=tcbMain hidden checked><div id=tMain>" +
                        "<p><a class=trbtn name=loadSysFonts title='Reqiures flash'>" + ($SS.fontList ? "System Fonts Loaded!" : "Load System Fonts") + "</a>" +
                        "<span id=SSVersion>OneeChan v" + VERSION + "</span>" +
                        "<a href='https://raw.github.com/seaweedchan/OneeChan/stable/OneeChan.user.js' id=updatelink target='_blank'>Update</a><span class=linkdelimiter> | </span>" +
                        "<a href='https://raw.github.com/seaweedchan/OneeChan/master/changelog' id=changeloglink target='_blank'>Changelog</a><span class=linkdelimiter> | </span>" +
                        "<a href='https://github.com/seaweedchan/OneeChan/issues' id=issueslink target='_blank'>Issues</a></p>",
                        bindNavLinks = function(el)
                        {
                            $(".handle", el).bind("dragstart", function(e)
                            {
                                $(this.parentNode).addClass("moving");
                                e.dataTransfer.effectAllowed = "move";
                                e.dataTransfer.setData("text/plain", this.parentNode.id);
                            })
                            .bind("dragend", function(e){ $(this.parentNode).delay(function(){ $(this).removeClass("moving"); }, 1); })
                            .bind("dragenter", function(e){ $(this.parentNode).addClass("over"); })
                            .bind("dragleave", function(e){ $(this.parentNode).removeClass("over"); });
                            $(el).bind("drop", function(e)
                            {
                                var node = $("#tNavLinks>#" + e.dataTransfer.getData("text/plain"));

                                if (e.dataTransfer.getData("text/plain") !== this.id)
                                {

                                    if ($(this).nextSibling(node).exists())
                                        $(this).before(node);
                                    else
                                        $(this).after(node);
                                }

                                $(this).removeClass("over");
                                e.preventDefault();
                            })
                            .bind("dragover", function(e)
                            {
                                e.preventDefault();
                                e.dataTransfer.dropEffect = "move";
                            });
                            $("a[name=delLink]", el).bind("click", function(){ $(this).parent().remove(); });
                        },
                        key, val, des;

                    for (key in defaultConfig)
                    {
                        if ((key === "Style Scrollbars" && !$SS.browser.webkit) ||
                            key === "Nav Link Delimiter" ||
                            /^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key))
                            continue;

                        val = $SS.conf[key];
                        des = defaultConfig[key][1];

                        if ((defaultConfig[key][4] === true) && (key === "Non-Sidebar Custom Margin"))
                        {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                                id   = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" +
                                            (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span>" + key +
                                            "</span><input name='Non-Sidebar Custom Margin' type=text value=" + $SS.conf["Non-Sidebar Custom Margin"] + "px></label>";
                        }
                        else if ((defaultConfig[key][4] === true) && (key === "Sidebar Side Custom Margin"))
                        {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                                id   = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" +
                                            (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span>" + key +
                                            "</span><input name='Sidebar Side Custom Margin' type=text value=" + $SS.conf["Sidebar Side Custom Margin"] + "px></label>";
                        }
                        else if (val === "header") {
                            optionsHTML += "<label class='mOption header'><span>" + key + "</span></label>";
                        }
                        else if (defaultConfig[key][4] === true) // sub-option
                        {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                                id   = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" +
                                            (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span>" + key +
                                            "</span><input" + (val ? " checked" : "") + " name='" + key + "' type=checkbox></label>";
                        }
                        else if (Array.isArray(defaultConfig[key][2])) // select
                        {
                            var opts = key === "Font Family" ? $SS.fontList || defaultConfig[key][2] : defaultConfig[key][2],
                                cFonts = [];
                            optionsHTML += "<span class=mOption title=\"" + des + "\"><span>" + key + "</span>" +
                                           "<select name='" + key + "'" + (defaultConfig[key][3] === true ? " hasSub" : "")  + ">";

                            for (var i = 0, MAX = opts.length; i < MAX; ++i)
                            {
                                var name, value;

                                if (typeof opts[i] === "object")
                                {
                                    name  = opts[i].name;
                                    value = opts[i].value;
                                }
                                else
                                    name = value = opts[i];

                                if (key === "Font Family") cFonts.push(value);

                                optionsHTML += "<option" + (key === "Font Family" ? " style=\"font-family:" + $SS.formatFont(value) + "!important\"" : "") +
                                               " value='" + value + "'" + (value == val ? " selected" : "") + ">" + name + "</option>";
                            }

                            if (key === "Font Family" && cFonts.indexOf($SS.conf["Font Family"]) == -1)
                               optionsHTML += "<option style=\"font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important\" value='" + $SS.conf["Font Family"] + "' selected>" + $SS.conf["Font Family"] + "</option>";

                            optionsHTML += "</select></span>";
                        }
                        else if (key === "Font Size")
                        {
                            optionsHTML += "<span class=mOption title=\"" + des + "\"><span>" + key + "</span>" +
                                           "<input type=text name='Font Size' value=" + $SS.conf["Font Size"] + "px></span>";
                        }
            
                        else if (key === "Menu Button Content")
                        {
                            optionsHTML += "<span class=mOption title=\'" + des + "\'><span>" + key + "</span>" +
                                           "<input type=text name='" + key + "' value=" + $SS.conf["Menu Button Content"] + "></span>";
                        }
                        else if (key === "Hide Button Content")
                        {
                            optionsHTML += "<span class=mOption title=\'" + des + "\'><span>" + key + "</span>" +
                                           "<input type=text name='" + key + "' value='" + $SS.conf["Hide Button Content"] + "'></span>";
                        }
                        else if (key === "Themes")
                        {
                            optionsHTML += "</div><input type=radio name=toTab id=tcbThemes hidden><div id=tThemes>";
                        }
                        else if (key === "Mascots")
                        {
                            optionsHTML += "</div><input type=radio name=toTab id=tcbMascots hidden><div id=tMascot>";
                        }
                        else // checkbox
                            optionsHTML += "<label class=mOption title=\"" + des + "\"><span>" + key + "</span><input" + (val ? " checked" : "") +
                                           " name='" + key + "' " + (defaultConfig[key][3] === true ? " hasSub" : "")  + " type=checkbox></label>";
                    }

                    optionsHTML += "</div></div><div><a class=trbtn name=save title='Hold any modifier to prevent window from closing'>Save</a><a class=trbtn name=cancel>Cancel</a></div>";
                    tOptions.html(optionsHTML);
                    overlay.append(tOptions);


                    // options window
                    $("#toNav li label", tOptions).bind("click", function(e)
                    {
                        if ($(this).hasClass("selected")) return;

                        $("#toNav li label.selected").removeClass("selected");
                        $(this).addClass("selected");
                    });
                    $("[hasSub]", tOptions).bind("change", function()
                    {
                        var id  = this.name.replace(/\s/g, "_") + $(this).val(),
                            sub = $("." + id);

                        if (sub.exists())
                            sub.each(function(){ $(this).show(); });
                        else
                            $("[class*='" + this.name.replace(/\s/g, "_") + "']")
                                .each(function(){ $(this).hide(); });
                    });
                    $("a[name=save]", tOptions).bind("click", $SS.options.save);
                    $("a[name=cancel]",tOptions).bind("click", $SS.options.close);
                    $(document).bind("keydown", $SS.options.keydown)
                               .bind("keyup",   $SS.options.keyup);

                    // main tab
                    $("input[name='Font Size']", tOptions).bind("keydown", function(e)
                    {
                        var val    = parseInt($(this).val()),
                            bitmap = $(this).parent().nextSibling().children("input[name='Bitmap Font']").val();

                        if (e.keyCode === 38 && (val < MAX_FONT_SIZE || bitmap))
                            $(this).val(++val + "px");
                        else if (e.keyCode === 40 && (val > MIN_FONT_SIZE || bitmap))
                            $(this).val(--val + "px");
                    });
                    if (!$SS.fontList)
                        $("a[name=loadSysFonts]", tOptions).bind("click", $SS.options.loadSystemFonts);

                    // themes tab
                    $SS.options.createThemesTab(tOptions);

                    // mascots tab
                    $SS.options.createMascotsTab(tOptions);

                    return $(document.body).append(overlay);
                }
            },
            createThemesTab: function(tOptions)
            {
                var themes = $("#tThemes", tOptions).html(""),
                    p      = $("<p style='bottom:8px!important'>");

                p.append($("<a class=trbtn name=addTheme>Add", tOptions).bind("click", $SS.options.showTheme));
                p.append($("<a class=trbtn href='https://github.com/seaweedchan/OneeChan/wiki/Custom-Themes' target='_blank'>Custom Themes"));
                p.append($("<div id=selectImage>").append($("<input type=file riced=true>")
                 .bind("change", function()
                {
                    var file = this.files[0],
                        reader = new FileReader(),
                        val, first, valid = true, theme, div, index;

                    reader.onload = (function(tFile)
                    {
                        return function(e)
                        {
                            try
                            {
                                theme = JSON.parse(e.target.result);
                            }
                            catch (err)
                            {
                                alert("Invalid theme file!");
                                return;
                            }

                            if (theme.bgColor == undefined)
                            {
                                alert("Invalid theme file!");
                                return;
                            }

                            index = $SS.conf["Themes"].push(theme);
                            theme = new $SS.Theme(--index);
                            div   = theme.preview();
                            $("#overlay #tThemes").append(div);
                            div.fire("click").scrollIntoView(true);
                        }
                    })(file);

                    reader.readAsText(file);
                })).append($("<span class=trbtn>Import")));
                p.append($("<a class=trbtn name=restoreThemes title='Restore hidden default themes'>restore", tOptions)
                    .bind("click", function()
                    {
                        $SS.conf["Hidden Themes"] = [];
                        $("#tThemes>div[hidden]").show();
                    })
                );

                if ($SS.conf["Hidden Themes"].length === 0)
                    $("a[name=restoreThemes]", p).hide();

                themes.append(p);

                for (var i = 0, MAX = $SS.conf["Themes"].length, tTheme; i < MAX; ++i)
                {
                    tTheme = new $SS.Theme(i);
                    themes.append(tTheme.preview());
                }
            },
            createMascotsTab: function(tOptions)
            {
                var mascots = $("#tMascot", tOptions).html(""),
                    p       = $("<p>");

                p.append($("<a class=trbtn name=addMascot>Add", tOptions).bind("click", $SS.options.showMascot));
                p.append($("<a class=trbtn name=restoreMascots title='Restore hidden default mascots'>Restore", tOptions)
                    .bind("click", function()
                    {
                        $SS.conf["Hidden Mascots"] = [];
                        $("#tMascot>div[hidden]").show();
                    })
                );

                if ($SS.conf["Hidden Mascots"].length === 0)
                    $("a[name=restoreMascots]", p).hide();

                p.append($("<a class=trbtn name=selectAll>Select All", tOptions)
                    .bind("click", function(){ $("#tMascot>div:not([hidden])").each(function(){ $(this).addClass("selected") }); }));
                p.append($("<a class=trbtn name=selectNone>Select None", tOptions)
                    .bind("click", function(){ $("#tMascot>div").each(function(){ $(this).removeClass("selected") }); }));

                mascots.append(p);

                for (var i = 0, MAX = $SS.conf["Mascots"].length, tMascot; i < MAX; ++i)
                {
                    tMascot = new $SS.Mascot(i);
                    mascots.append(tMascot.preview());
                }
            },
            close: function()
            {
                $(document).unbind("keydown", $SS.options.keydown)
                           .unbind("keyup", $SS.options.keydown);

                return $("#overlay").remove();
            },
            keydown: function(e)
            {
                if (e.keyCode >= 16 && e.keyCode <= 18)
                {
                    $SS.options.saveAndClose = false;
                    $("a[name=save]").text("Apply");
                }
            },
            keyup: function(e)
            {
                if (!$SS.options.saveAndClose)
                {
                    $SS.options.saveAndClose = true;
                    $("a[name=save]").text("Save");
                }
            },
            loadSystemFonts: function(evt)
            {
                var loadFontBTN = $(evt.target),
                    getFontMessage;
                $(document.head).append($('<script type="text/javascript">' +
                "function populateFontList(fontArr)" +
                "{" +
                    "var fontList = [];" +
                    "for (var key in fontArr)" +
                        "fontList.push(fontArr[key]);" +
                    "window.postMessage(fontList, '*');" +
                "}"));
                window.addEventListener("message", getFontMessage = function(e)
                {
                    $SS.fontList = e.data;
                    var fontSelect = $("<select name='Font Family'>");

                    for (var i = 0, MAX = $SS.fontList.length; i < MAX; ++i)
                    {
                        var name, value;
                            name = value = $SS.fontList[i];

                        fontSelect.append($("<option" + " style=\"font-family:" + $SS.formatFont(value) + "!important\"" +
                                            " value='" + value + "'" + (value == $SS.conf["Font Family"] ? " selected=true" : "") + ">" + name));
                    }

                    $("select[name='Font Family']").before(fontSelect).remove();

                    $("#fontListSWF").remove();
                    window.removeEventListener("message", getFontMessage);
                    loadFontBTN.text("System Fonts Loaded!").unbind("click", $SS.options.loadSystemFonts);
                }, false);

                $(document.body).append($("<div id=fontListSWF hidden><object type='application/x-shockwave-flash'" +
                                          " data='" + fontListSWF + "'><param name=allowScriptAccess value=always></object>"));
                return loadFontBTN.text("Loading...");
            },
            save: function()
            {
                var div             = $("#themeoptions"),
                    themes          = [],
                    mascots         = [],
                    links           = [],
                    selectedMascots = [],
                    nsfwTheme,
                    selectedTheme;

                // Save main
                $("#themeoptions input[name]:not([name=toTab]), #themeoptions select").each(function()
                {
                    var name = $(this).attr("name"),
                        val  = $(this).val();

                    if (name === "Font Size")
                    {
                        val = parseInt(val);

                        if (!$("input[name='Bitmap Font']", div).val())
                            val = Math.max(Math.min(val, MAX_FONT_SIZE), MIN_FONT_SIZE);
                    }
                    else if (name === "Nav Link Delimiter")
                        val = val.replace(/\s/g, "&nbsp;");
                    else if (name === "Sidebar Side Custom Margin")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Non-Sidebar Custom Margin")
                    {
                        val = parseInt(val);
                    }


                    $SS.Config.set($(this).attr("name"), val);
                });

                // Save Themes
                $("#themeoptions #tThemes>div").each(function(index)
                {
                    var oldIndex = parseInt(this.id.substr(5));
                    if (!$SS.conf["Themes"][oldIndex].default)
                        themes.push($SS.conf["Themes"][oldIndex]);
                });

                selectedTheme = (selectedTheme = $("#themeoptions #tThemes>div.selected")).exists() ?
                    parseInt(selectedTheme.attr("id").substr(5)) : 0;

                nsfwTheme = (nsfwTheme = $("#themeoptions #tThemes>div.nsfw")).exists() ?
                    parseInt(nsfwTheme.attr("id").substr(5)) : 0;

                $SS.Config.set("Themes", themes);
                $SS.Config.set("Selected Theme", selectedTheme);
                $SS.Config.set("NSFW Theme", nsfwTheme);
                $SS.Config.set("Hidden Themes", $SS.conf["Hidden Themes"]);

                // Save Mascots
                $("#themeoptions #tMascot>div").each(function(index)
                {
                    var oldIndex = parseInt(this.id.substr(6));
                    if ($(this).hasClass("selected"))
                        selectedMascots.push(index);

                    if (!$SS.conf["Mascots"][oldIndex].default)
                        mascots.push($SS.conf["Mascots"][oldIndex]);
                });

                $SS.Config.set("Mascots", mascots);
                $SS.Config.set("Selected Mascots", selectedMascots);
                $SS.Config.set("Hidden Mascots", $SS.conf["Hidden Mascots"]);

                if ($SS.options.saveAndClose)
                    $SS.options.close();

                return $SS.init(true);
            },
            showTheme: function(tIndex)
            {
                var div, overly;

                if (typeof tIndex === "number")
                {
                    var bEdit  = true,
                        tEdit  = $SS.conf["Themes"][tIndex],
                        RPA, themeR, themePY, themePX, themeA;

                    if (tEdit.bgImg && tEdit.bgRPA)
                    {
                        RPA     = tEdit.bgRPA.split(" ");
                        themeR  = RPA[0];
                        themePY = RPA[1];
                        themePX = RPA[2];
                        themeA  = RPA[3];
                    }
                }

                div = $("<div id=addTheme>");

                var innerHTML = "<label>" +
                "<span>Theme Name:</span><input type=text name=name value='" + (bEdit ? tEdit.name : "") + "'>" +
                "</label><label>" +
                "<span>BG Image:</span><input type=text name=bgImg value='" + (bEdit ? ($SS.validImageURL(tEdit.bgImg) ? tEdit.bgImg + "'" :
                ($SS.validBase64(tEdit.bgImg) ? "[Base 64 Encoded Image]' disabled=true" : "'")) : "'") + "></label><label>" +
                "<span>BG Repeat:</span><select name=bgR>" +
                "<option" + (bEdit && themeR === "no-repeat" ? " selected" : "") + ">no-repeat</option>" +
                "<option" + (bEdit && themeR === "repeat" ? " selected" : "") + ">repeat</option>" +
                "<option" + (bEdit && themeR === "repeat-x" ? " selected" : "") + ">repeat-x</option>" +
                "<option" + (bEdit && themeR === "repeat-y" ? " selected" : "") + ">repeat-y</option>" +
                "</select></label><label>" +
                "<span>BG Attachment:</span><select name=bgA>" +
                "<option" + (bEdit && themeA === "fixed" ? " selected" : "") + ">fixed</option>" +
                "<option" + (bEdit && themeA === "scroll" ? " selected" : "") + ">scroll</option>" +
                "</select></label><label>" +
                "<span>BG Position-X:</span><select name=bgPX>" +
                "<option" + (bEdit && themePX === "left" ? " selected" : "") + ">left</option>" +
                "<option" + (bEdit && themePX === "center" ? " selected" : "") + ">center</option>" +
                "<option" + (bEdit && themePX === "right" ? " selected" : "") + ">right</option>" +
                "</select></label><label>" +
                "<span>BG Position-Y:</span><select name=bgPY>" +
                "<option" + (bEdit && themePY === "top" ? " selected" : "") + ">top</option>" +
                "<option" + (bEdit && themePY === "center" ? " selected" : "") + ">center</option>" +
                "<option" + (bEdit && themePY === "bottom" ? " selected" : "") + ">bottom</option>" +
                "</select></label><label>" +
                "<span>Reply Opacity:</span><input type=text name=replyOp value='" + (bEdit ? tEdit.replyOp : "1.0") + "'></label><label>" +
                "<span>Navigation Opacity:</span><input type=text name=navOp value='" + (bEdit ? tEdit.navOp : "0.9") + "'>" +
                "</label>";

                for (var i = 0, MAX = themeInputs.length; i < MAX; ++i)
                    innerHTML += "<label><span>" + themeInputs[i].dName + ":</span>" +
                    "<input type=text class=jsColor name=" + themeInputs[i].name + " value=" + (bEdit ? tEdit[themeInputs[i].name] : "") + "></label>";

                innerHTML += "<label id=customCSS><span>Custom CSS:</span><textarea name=customCSS>" + (bEdit ? tEdit.customCSS || "" : "") + "</textarea>" +
                "</label><div><div id=selectImage><input type=file riced=true accept='image/GIF,image/JPEG,image/PNG'>" +
                "<span class=trbtn>Select Image</span></div>" +
                "" + (bEdit && $SS.validBase64(tEdit.bgImg) ? "<input type=hidden name=customIMGB64 value='" + tEdit.bgImg + "'>" : "") + "" +
                "<a class=trbtn name=clearIMG>Clear Image</a>" +
                "<a class=trbtn name=export>Export</a>" +
                "<a class=trbtn name=" + (bEdit ? "edit" : "add") + ">Save</a><a class=trbtn name=cancel>Cancel</a></div>";

                div.html(innerHTML);
                $(".jsColor", div).jsColor();

                overlay = $("<div id=overlay2>").append(div);

                $("#selectImage>input[type=file]", div).bind("change", $SS.options.SelectImage);
                $("a[name=clearIMG]", div).bind("click", $SS.options.ClearImage);

                $("a[name=export]", div).bind("click", function()
                {
                    var theme = $SS.options.addTheme(tIndex, true);
                    window.open("data:application/json," +
                        encodeURIComponent(JSON.stringify(theme)), "Export " + theme.name);
                });

                if (bEdit)
                    $("a[name=edit]", div).bind("click", function(){ $SS.options.addTheme(tIndex); });
                else
                    $("a[name=add]", div).bind("click", $SS.options.addTheme);

                $("a[name=cancel]", div).bind("click", function(){ $("#overlay2").remove(); });

                if (bEdit)
                    $("input,textarea,select", div).bind("change", tEdit.mHandler = function()
                    {
                        tEdit.modified = true;
                        $("input,textarea,select", $("#addTheme")).unbind("change", tEdit.mHandler);
                    });

                return $(document.body).append(overlay);
            },
            addTheme: function(tIndex, exp)
            {
                var overlay = $("#overlay2"),
                    tTheme  = { },
                    makeRPA = function()
                    {
                        var RPA = [];

                        RPA.push($("select[name=bgR]",  overlay).val());
                        RPA.push($("select[name=bgPY]", overlay).val());
                        RPA.push($("select[name=bgPX]", overlay).val());
                        RPA.push($("select[name=bgA]",  overlay).val());

                        return RPA.join(" ");
                    },
                    bEdit = typeof tIndex === "number",
                    tEdit = bEdit ? $SS.conf["Themes"][tIndex] : null,
                    error = false,
                    div;

                if (!exp && bEdit && !tEdit.modified)
                    return overlay.remove();

                $("input[type=text],textarea", overlay).each(function()
                {
                    var val;

                    if (this.name === "bgImg")
                    {
                        var b64 = $("input[name=customIMGB64]", overlay);
                        val     = b64.exists() ? decodeURIComponent(b64.val()) : this.value;

                        if (val !== "" && !$SS.validImageURL(val) && !$SS.validBase64(val))
                        {
                            error = true;
                            return alert("Invalid image URL/base64.");
                        }

                        val = $SS.cleanBase64(val);
                    }
                    else if (this.name === "name")
                    {
                        val = this.value;

                        if (bEdit && tEdit.default && tEdit.name === val)
                            val += " [Modded]"
                    }
                    else
                        val = this.value;

                    if (val !== "")
                        tTheme[this.name] = val;
                });

                if (error) return;

                if (tTheme.bgImg)
                    tTheme.bgRPA = makeRPA();

                if (exp) return tTheme;

                if (bEdit && !tEdit.default)
                {
                    $SS.conf["Themes"][tIndex] = tTheme;
                    tTheme = new $SS.Theme(tIndex);
                    div    = $("#theme" + tIndex, $("#overlay"));

                    div.replace(tTheme.preview());
                }
                else
                {
                    tTheme.author = "You";
                    tIndex        = $SS.conf["Themes"].push(tTheme);
                    tTheme        = new $SS.Theme(--tIndex);
                    div           = tTheme.preview();

                    $("#overlay #tThemes").append(div);
                }

                div.fire("click").scrollIntoView(true);

                return overlay.remove();
            },
            deleteTheme: function(tIndex)
            {
                if ($SS.conf["Themes"][tIndex].default &&
                    $SS.conf["Hidden Themes"].push(tIndex) === 1)
                    $("#tThemes a[name=restoreThemes]").show();

                return $SS.conf["Themes"][tIndex].default ?
                    $("#theme" + tIndex).removeClass("selected").hide() : $("#theme" + tIndex).remove();
            },
            showMascot: function(mIndex)
            {
                var div, overly;

                if (typeof mIndex === "number")
                    var bEdit = true,
                        mEdit = $SS.conf["Mascots"][mIndex];

                div = $("<div id=addMascot>").html("<label><span>Image:</span><input type=text name=customIMG value='" +
                        (bEdit ? ($SS.validImageURL(mEdit.img) ? mEdit.img + "'" : "[Base 64 Encoded Image]' disabled=true") : "'") +
                        "></label>" +
                        "<label title='Auto goes according to the post forms position' for=null><span>Alignment/Offset:</span>" +
                        "<select name=mPosition>" +
                            "<option" + ((bEdit && !mEdit.position) || !bEdit ? " selected" : "") + ">Auto</option>" +
                            "<option" + (bEdit && mEdit.position === "top" ? " selected" : "") + ">Top</option>" +
                            "<option" + (bEdit && mEdit.position === "center" ? " selected" : "") + ">Center</option>" +
                            "<option" + (bEdit && mEdit.position === "bottom" ? " selected" : "") + ">Bottom</option>" +
                        "</select>" +
                        "<input type=text name=mOffset value='" + (bEdit && mEdit.position ? mEdit.offset + "px" : "") + "'></label>" +
                        "<label title='Prevent streching with smaller images (Width < 313px)'><span>Prevent stretching:</span>" +
                        "<input type=checkbox name=mSmall" + (bEdit && mEdit.small ? " checked" : "") + "></label>" +
                        "<label title='Horizontally flip the mascot when sidebar is on the left'><span>Flip with sidebar:</span>" +
                        "<input type=checkbox name=mFlip" + (!bEdit || (bEdit && (mEdit.flip || mEdit.flip == undefined)) ? " checked" : "") + "></label>" +
                        "<label title='Allows the mascot to be shown outside the sidebar, ignores `Prevent stretching` option'>" +
                        "<span>Allow overflow:</span><input type=checkbox name=mOverflow" + (bEdit && mEdit.overflow ? " checked" : "") + "></label>" +
                        "<label title='List of boards to display this mascot on, seperated by commas. Example: a,c,g,v,jp'><span>Boards:</span>" +
                        "<input type=text name=mBoards value='" + (bEdit && mEdit.boards ? mEdit.boards : "") + "'></label>" +
                        "<div>" +
                        "<div id=selectImage><input type=file riced=true accept='image/GIF,image/JPEG,image/PNG'>" +
                        "<span class=trbtn>Select Image</span></div>" +
                        "" + (bEdit && $SS.validBase64(mEdit.img) ? "<input type=hidden name=customIMGB64 value='" + mEdit.img + "'>" : "") + "" +
                        "<a class=trbtn name=clearIMG>Clear Image</a>" +
                        "<a class=trbtn name=" + (bEdit ? "edit" : "add") + ">Save</a><a class=trbtn name=cancel>Cancel</a></div></div>");

                overlay = $("<div id=overlay2>").append(div);

                $("#selectImage>input[type=file]", div).bind("change", $SS.options.SelectImage);
                $("a[name=clearIMG]", div).bind("click", $SS.options.ClearImage);

                if (bEdit)
                    $("a[name=edit]", div).bind("click", function(){ $SS.options.addMascot(mIndex); });
                else
                    $("a[name=add]", div).bind("click", $SS.options.addMascot);

                $("a[name=cancel]", div).bind("click", function(){ $("#overlay2").remove(); });

                return $(document.body).append(overlay);
            },
            addMascot: function(mIndex)
            {
                var overlay = $("#overlay2"),
                    bSetPos, cIMG, cPosition, cOffset, cSmall, cFlip, tMascot, bDefault;

                cIMG      = decodeURIComponent($("input[name=customIMGB64]", overlay).val() || $("input[name=customIMG]", overlay).val());
                cPosition = $("select[name=mPosition]", overlay).val().toLowerCase();
                cOffset   = parseInt($("input[name=mOffset]", overlay).val()) || 0;
                cSmall    = $("input[name=mSmall]", overlay).val();
                cFlip     = $("input[name=mFlip]", overlay).val();
                cOverflow = $("input[name=mOverflow]", overlay).val();
                cBoards   = $("input[name=mBoards]", overlay).val();
                bSetPos   = cPosition !== "auto";

                if (!$SS.validImageURL(cIMG) && !$SS.validBase64(cIMG))
                    return alert("Invalid image URL/base64.");

                cIMG     = $SS.cleanBase64(cIMG);
                bDefault = $SS.conf["Mascots"][mIndex] != undefined && $SS.conf["Mascots"][mIndex].default;

                if (typeof mIndex === "number" && !bDefault)
                {
                    $SS.conf["Mascots"][mIndex].img      = cIMG;
                    $SS.conf["Mascots"][mIndex].small    = cSmall;
                    $SS.conf["Mascots"][mIndex].flip     = cFlip;
                    $SS.conf["Mascots"][mIndex].overflow = cOverflow;

                    if (cBoards !== "")
                        $SS.conf["Mascots"][mIndex].boards   = cBoards;
                    else
                        delete $SS.conf["Mascots"][mIndex].boards;

                    if (bSetPos)
                    {
                        $SS.conf["Mascots"][mIndex].position = cPosition;
                        $SS.conf["Mascots"][mIndex].offset   = cOffset;
                    }
                    else
                    {
                        delete $SS.conf["Mascots"][mIndex].position;
                        delete $SS.conf["Mascots"][mIndex].offset;
                    }

                    tMascot = new $SS.Image(cIMG);
                    $("#mascot" + mIndex).attr("style", "background:" + tMascot.get());
                }
                else
                {
                    var tMascot = { img: cIMG, small: cSmall, flip: cFlip, overflow: cOverflow, boards: (cBoards === "" ? undefined : cBoards) };

                    if (bSetPos)
                    {
                        tMascot.position = cPosition;
                        tMascot.offset   = cOffset;
                    }

                    if (bDefault)
                        $SS.options.deleteMascot(mIndex);

                    mIndex = $SS.conf["Mascots"].push(tMascot);
                    tMascot = new $SS.Mascot(--mIndex).preview();
                    $("#tMascot").append(tMascot);
                    tMascot.fire("click").scrollIntoView(true);
                }

                return overlay.remove();
            },
            deleteMascot: function(mIndex)
            {
                if ($SS.conf["Mascots"][mIndex].default &&
                    $SS.conf["Hidden Mascots"].push(mIndex) === 1)
                    $("#tMascot a[name=restoreMascots]").show();

                return $SS.conf["Mascots"][mIndex].default ?
                    $("#mascot" + mIndex).removeClass("selected").hide() : $("#mascot" + mIndex).remove();
            },
            SelectImage: function()
            {
                var div      = $("#overlay2"),
                    parent   = $(this).parent(),
                    image    = this.files[0],
                    fileName = image.name.substr(image.name.lastIndexOf("\\") + 1),
                    reader   = new FileReader(),
                    b64, val, input;

                reader.onload = (function(tImage)
                {
                    return function(evt)
                    {
                        val = $SS.cleanBase64(evt.target.result);

                        if (!(b64 = $("input[name=customIMGB64]", div)).exists())
                        {
                            b64 = $("<input type=hidden name=customIMGB64>").val(val);
                            parent.after(b64);
                        }
                        else
                            b64.val(val);

                        if ((input = $("input[name=bgImg]", div)).exists())
                            input.val(fileName).disabled(true);
                        else
                            $("input[name=customIMG]", div).val(fileName).disabled(true);
                    }
                })(image);

                reader.readAsDataURL(image);
            },
            ClearImage: function()
            {
                var div = $("#overlay2"), input;

                $("input[name=customIMGB64]").remove();

                if ((input = $("input[name=bgImg]", div)).exists())
                    return input.val("").disabled(false);

                return $("input[name=customIMG]", div).val("").disabled(false);
            }
        },

        /* THEMES */
        Themes:
        {
            defaults:
            [
                {
                    name:       "Vimyanized Dark",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       false,
                    replyOp:    "1.0", 
                    navOp:      "0.9",
                    bgColor:    "090d0f",
                    mainColor:  "0d1114",
                    brderColor: "0b1316",
                    inputColor: "090d0f",
                    inputbColor:"0d1114",
                    pinfoColor: "0f1417",
                    pinfobColor:"0b1316",
                    blinkColor: "4797cc",
                    jlinkColor: "4270b2",
                    linkColor:  "53bdb1",
                    linkHColor: "3090b5",
                    nameColor:  "d63e34",
                    quoteColor: "96c83b",
                    textColor:  "f8f8f8",
                    sageColor:  "4f4f4f",
                    tripColor:  "d4b63c",
                    titleColor: "b88cd1",
                    timeColor:  "dddddd",
                    customCSS:  '" + ($SS.conf["Use Post Info Color"] && $SS.conf["Add Shadow?"] ? ".thread>.replyContainer>.reply>div.postInfo { box-shadow: 0px 2px 3px #0A0A0A !important; }" : "") + "'
                },
                {
                    name:        "Muted",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0",
                    navOp:       "0.9", 
                    bgColor:     "ffffff",
                    mainColor:   "f5f2e9",
                    brderColor:  "cccccc",
                    inputColor:  "ffffff",
                    inputbColor: "cccccc",
                    pinfoColor:  "ebe8df",
                    pinfobColor: "cccccc",
                    blinkColor:  "111111",
                    jlinkColor:  "bc312a",
                    linkColor:   "bc312a",
                    linkHColor:  "8e2220",
                    nameColor:   "2c64a0",
                    quoteColor:  "789922",
                    textColor:   "393735",
                    sageColor:   "990000",
                    tripColor:   "cc6563",
                    timeColor:   "333333",
                    titleColor:  "111111",
                    customCSS:   "\n\n\n\n\n\n.boardTitle {color: #BC312A !important;text-shadow: 1px 1px 1px #772E28 !important;}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}.postNum a {color: #111111 !important;}div.reply a.quotelink {color: #bc312a !important;}"
                },
                {
                    name:       "Minimalistic Mayhem",
                    author:      "!MayhemxaEo",
                    "default":   true,
                    bgImg:       false,
                    replyOp:    "1.0",
                    navOp:       "0.9",  
                    bgColor:    "191919",
                    mainColor:  "222222",
                    brderColor: "292929",
                    inputColor: "222222",
                    inputbColor:"151515",
                    pinfoColor: "262626",
                    pinfobColor:"191919",
                    blinkColor: "897399",
                    jlinkColor: "897399",
                    linkColor:  "897399",
                    linkHColor: "c617e6",
                    nameColor:  "a34443",
                    quoteColor: "8ba446",
                    textColor:  "bbbbbb",
                    sageColor:  "7c2d2d",
                    tripColor:  "96562c",
                    titleColor: "987d3e",
                    timeColor:  "bbbbbb",
                },
                {
                    name:       "Blackboard",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       false,
                    replyOp:    "1.0",
                    navOp:       "0.9",  
                    bgColor:    "0a0d1c",
                    mainColor:  "0c1021",
                    brderColor: "0e1228",
                    inputColor: "0c1021",
                    inputbColor:"080b16",
                    pinfoColor: "0d1124",
                    pinfobColor:"0c1021",
                    blinkColor: "54b12e",
                    jlinkColor: "8da6ce",
                    linkColor:  "fbde2d",
                    linkHColor: "4b65cc",
                    nameColor:  "8da6ce",
                    quoteColor: "9acf08",
                    textColor:  "f8f8f8",
                    sageColor:  "4f4f4f",
                    tripColor:  "ff6400",
                    titleColor: "ff6400",
                    timeColor:  "dddddd",
                    customCSS:  '" + ($SS.conf["Use Post Info Color"] && $SS.conf["Add Shadow?"] ? ".thread>.replyContainer>.reply>div.postInfo { box-shadow: 0px 2px 3px #0A0A0A !important; }" : "") + "'
                },
                {
                    name:        "Dark Flat",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0",
                    navOp:       "0.9",  
                    bgRPA:       "repeat top left fixed",
                    bgColor:     "1C1D1E",
                    mainColor:   "232425",
                    brderColor:  "292a2b",
                    inputColor:  "18191a",
                    inputbColor: "121314",
                    pinfoColor:  "222324",
                    pinfobColor: "292a2b",
                    blinkColor:  "6f99b4",
                    jlinkColor:  "ac9bb0",
                    linkColor:   "ac9bb0",
                    linkHColor:  "6f99b4",
                    nameColor:   "a8c6d9",
                    quoteColor:  "b3c45e",
                    textColor:   "dddddd",
                    sageColor:   "c99090",
                    tripColor:   "d4c095",
                    titleColor:  "9390c9",
                    timeColor:   "dddddd",
                },
                {
                    name:        "Photon",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0",
                    navOp:       "0.9",  
                    bgColor:     "eeeeee",
                    mainColor:   "dddddd",
                    brderColor:  "cccccc",
                    inputColor:  "ffffff",
                    inputbColor: "cccccc",
                    pinfoColor:  "dbdbdb",
                    pinfobColor: "cccccc",
                    blinkColor:  "111111",
                    jlinkColor:  "ff6600",
                    linkColor:   "ff6600",
                    linkHColor:  "ff3300",
                    nameColor:   "004a99",
                    quoteColor:  "789922",
                    textColor:   "333333",
                    sageColor:   "990000",
                    tripColor:   "ff3300",
                    timeColor:   "333333",
                    titleColor:  "002244",
                    customCSS:   "\n\n\n\n\n\n.boardTitle {color: #004a99 !important;text-shadow: 1px 1px 1px #222 !important;}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}.postNum a {color: #111111 !important;}"
                },
                {
                    name:        "Original Minimalistic Mayhem",
                    author:      "!MayhemxaEo",
                    "default":   true,
                    bgImg:       "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAAAAACoBHk5AAAAFUlEQVQIW2NgYJCRkUEmGMAsBjAXABi6AaXXHST3AAAAAElFTkSuQmCC",
                    bgRPA:       "repeat top left fixed",
                    replyOp:     "1.0",
                    navOp:       "0.9",  
                    bgColor:     "191919",
                    mainColor:   "333333",
                    brderColor:  "111111",
                    inputColor:  "222222",
                    inputbColor: "151515",
                    pinfoColor:  "2b2b2b",
                    pinfobColor: "111111",
                    blinkColor:  "559c7a",
                    jlinkColor:  "559c7a",
                    linkColor:   "559c7a",
                    linkHColor:  "c7de1a",
                    nameColor:   "2e88a6",
                    quoteColor:  "8ba446",
                    textColor:   "dddddd",
                    sageColor:   "7c2d2d",
                    tripColor:   "8c5d2a",
                    titleColor:  "486273",
                    timeColor:   "dddddd",
                    customCSS:   "\n\n\n\n\n\n#delform {background-color: #222 !important;\n}\n.subject:hover, div.post:hover .subject {\n  color: #3F8DBF !important;\n}\n.postertrip:hover, div.post:hover .postertrip {\ncolor: #CC7212 !important;\n}\n.name:hover, div.post:hover .name {\n  color: #0AAEE7 !important;\n}\n\n.name, .subject, .postertrip {\n  -webkit-transition: color .3s ease-in-out;\n  -moz-transition: color .3s ease-in-out;\n}"
                },
                {
                    name:        "Tomorrow Night", // Originally by Chris Kempson @ https://github.com/ChrisKempson/Tomorrow-Theme
                    author:      "Chris Kempson",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "1d1f21",
                    mainColor:   "282a2e",
                    brderColor:  "373b41",
                    inputColor:  "282a2e",
                    inputbColor: "1d1f21",
                    pinfoColor:  "26282b",
                    pinfobColor: "373b41",
                    blinkColor:  "cc6666",
                    jlinkColor:  "81a2be",
                    linkColor:   "81a2be",
                    linkHColor:  "cc6666",
                    nameColor:   "81a2be",
                    quoteColor:  "b5bd68",
                    textColor:   "c5c8c6",
                    sageColor:   "cc6666",
                    tripColor:   "8abeb7",
                    titleColor:  "b294bb",
                    timeColor:   "c5c8c6",
                },
                {
                    name:        "Yotsuba",
                    "default":   true,
                    bgImg:       "iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAIAAACmkByiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAFxJREFUKJFj+ndtPRMDAwMSZmRiYGTAFEPmM2IRg/EZcenBop4otYw47MSinxw16HYRZQYBPfjkUdRims1ItNmE/EOcfSTLEx2GBNTgSkc41eGLF3S7cKQr0tM2AO8LBH073E/fAAAAAElFTkSuQmCC",
                    bgRPA:       "repeat-x top center scroll",
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "ffffee",
                    mainColor:   "f0e0d6",
                    brderColor:  "d9bFb7",
                    inputColor:  "ffffff",
                    inputbColor: "aaaaaa",
                    pinfoColor:  "e8d8cf",
                    pinfobColor: "d9bfb7",
                    blinkColor:  "0000ee",
                    jlinkColor:  "0000ee",
                    linkColor:   "0000ee",
                    linkHColor:  "dd0000",
                    nameColor:   "117743",
                    quoteColor:  "789922",
                    textColor:   "800000",
                    sageColor:   "cc1111",
                    tripColor:   "228854",
                    titleColor:  "cc1105",
                    timeColor:   "800000",
                    customCSS:   '\n\n\n\n\n\n#boardNavDesktop a, .pages a, .postNum a { color: #800000 !important; } a.summary { color: #0000ee !important; } #boardNavDesktop,.pagelist,#imgControls,#id_css::after{background:rgba(254, 215, 176," + this.navOp + ")!important;}#delform,.reply,.hidden_thread,.stub{border-radius:0!important}\n.reply,.hidden_thread,.stub"+($SS.conf["Recolor Even Posts"] ? ",.replyContainer:nth-of-type(even)>div:not(.qphl):not(.sideArrows):not(.lastmuInfo)" : "")+"{border-left:1px solid "+this.mainColor.hex+"!important;border-top:1px solid "+this.mainColor.hex+"!important;}.boardTitle { text-shadow: 1px 1px 1px #772E28 !important; }.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}'
                },                                                              
                {
                    name:        "Yotsuba B",
                    "default":   true,
                    bgImg:       "iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAIAAACmkByiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUKJFjunj1HRMDAwNWzMiILsZIpDpcarDrx28GI17zUeUYiXITLrdg08PISKyfGfGYgT38cLkRm50Dbx9944KYdIUrbohNV0SoAwD1FwRwgMmDbgAAAABJRU5ErkJggg==",
                    bgRPA:       "repeat-x top center scroll",
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "eef2ff",
                    mainColor:   "d6daf0",
                    brderColor:  "b7c5d9",
                    inputColor:  "ffffff",
                    inputbColor: "aaaaaa",
                    pinfoColor:  "cfd3e8",
                    pinfobColor: "b7c5d9",
                    blinkColor:  "34345C",
                    jlinkColor:  "34345C",
                    linkColor:   "34345c",
                    linkHColor:  "dd0000",
                    nameColor:   "117743",
                    quoteColor:  "789922",
                    textColor:   "000000",
                    sageColor:   "990000",
                    tripColor:   "228854",
                    titleColor:  "0f0c5d",
                    timeColor:   "000000",
                    customCSS:   '\n\n\n\n\n\na.quotelink:not(:hover){color:#cc2200!important;}#boardNavDesktop,.pagelist,#imgControls,#id_css::after{background:rgba(210, 214, 239," + this.navOp + ")!important;}#delform,.reply,.hidden_thread,.stub{border-radius:0!important}.reply,.hidden_thread,.stub"+($SS.conf["Recolor Even Posts"] ? ",.replyContainer:nth-of-type(even)>div:not(.qphl):not(.sideArrows):not(.lastmuInfo)" : "")+"{border-left:1px solid "+this.mainColor.hex+"!important;border-top:1px solid "+this.mainColor.hex+"!important;}.boardTitle {color: #AF0A0F !important;text-shadow: 1px 1px 1px #7A070D !important;}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}.postNum a { color: #000000 !important; }'
                },
                {
                    name:        "Yotsuba Purple",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       "iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAIAAACmkByiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAPVJREFUOE91i1lywjAQROf+VySEhMW7kazFNhhSTM9YxoUrH69ed49El52lRLbrCEj/MorkVZesZGCPdzA6/2cvHduKfO8o/8YbBXmLvikOeisO7l/KH73BierXS4Yr+BPe6+NMyjA4JYLk5hSEtEs+8/ZBe47UXCIlIyfaDLmnt3u65pHBxhlIHsSCbOgDmUJBtvlIBi7ZxUiWEXPvKu1v3yR3Jbu+kdtwJ8+br+/kKrX0BuYNnTPssCXmXXqrhHZaspecwH3dJwrXbce2JtoHRTMJwXBGT8y73h/Ud0+F74uRpc+2Txoc+FPzDkaPrmjWd8gzL82jLtr9nlP8AAAAAElFTkSuQmCC",
                    bgRPA:       "repeat-x top center scroll",
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "f8f3fe",
                    mainColor:   "eeddff",
                    brderColor:  "cab7d9",
                    inputColor:  "ffffff",
                    inputbColor: "cab7d9",
                    pinfoColor:  "e7d6f7",
                    pinfobColor: "cab7d9",
                    blinkColor:  "000000",
                    jlinkColor:  "962594",
                    linkColor:   "962594",
                    linkHColor:  "b22caa",
                    nameColor:   "591177",
                    quoteColor:  "789922",
                    textColor:   "000000",
                    sageColor:   "990000",
                    tripColor:   "b22caa",
                    titleColor:  "0f0c5d",
                    timeColor:   "000000",
                    customCSS:   '\n\n\n\n\n\n#boardNavDesktop,.pagelist,#imgControls,#id_css::after{background:rgba(229, 219, 240," + this.navOp + ")!important;}#delform,.reply,.hidden_thread,.stub{border-radius:0!important}.reply,.hidden_thread,.stub"+($SS.conf["Recolor Even Posts"] ? ",.replyContainer:nth-of-type(even)>div:not(.qphl):not(.sideArrows):not(.lastmuInfo)" : "")+"{border-left:1px solid "+this.mainColor.hex+"!important;border-top:1px solid "+this.mainColor.hex+"!important;}.boardTitle {color: #591177 !important;text-shadow: 1px 1px 1px #222 !important;}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}.postNum a { color: #000000 !important; }'
                },
                {
                    name:        "安心院なじみ",
                    "default":   true,
                    bgImg:       "http://i.imgur.com/RewHm.png",
                    bgRPA:       "no-repeat right bottom fixed",
                    replyOp:     "0.9", 
                    navOp:       "0.9", 
                    bgColor:     "ffffff",
                    mainColor:   "efefef",
                    brderColor:  "d6d6d6",
                    inputColor:  "cccccc",
                    inputbColor: "bbbbbb",
                    pinfoColor:  "efefef",
                    pinfobColor: "d6d6d6",
                    blinkColor:  "f5871f",
                    jlinkColor:  "bf8040",
                    linkColor:   "bf8040",
                    linkHColor:  "bf8040",
                    nameColor:   "2b80c2",
                    quoteColor:  "718c00",
                    textColor:   "4d4d4c",
                    sageColor:   "c82829",
                    tripColor:   "3e999f",
                    titleColor:  "4d4d4d",
                    timeColor:   "4d4d4c"
                },
                {
                    name:        "Midnight Caek",
                    author:      "zixaphir",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "101010",
                    mainColor:   "1c1c1c",
                    brderColor:  "1c1c1c",
                    inputColor:  "1c1c1c",
                    inputbColor: "101010",
                    pinfoColor:  "191919",
                    pinfobColor: "1c1c1c",
                    blinkColor:  "47475b",
                    jlinkColor:  "57577b",
                    linkColor:   "57577b",
                    linkHColor:  "47475b",
                    nameColor:   "7c2d2d",
                    quoteColor:  "71793e",
                    textColor:   "909090",
                    sageColor:   "7c2d2d",
                    tripColor:   "3e7157",
                    titleColor:  "aaaaaa",
                    timeColor:   "909090",
                },
                {
                    name:        "Solarized Dark", // http://ethanschoonover.com/solarized
                    author:      "Ubuntufriend",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "073642",
                    mainColor:   "032b36",
                    brderColor:  "133942",
                    inputColor:  "073642",
                    inputbColor: "0d272e",
                    pinfoColor:  "042e3b",
                    pinfobColor: "0d272e",
                    blinkColor:  "4f5f8f",
                    jlinkColor:  "696fc0",
                    linkColor:   "696bba",
                    linkHColor:  "d33682",
                    nameColor:   "586e75",
                    quoteColor:  "859900",
                    textColor:   "93a1a1",
                    sageColor:   "cc6666",
                    tripColor:   "2aa198",
                    titleColor:  "bec2c4",
                    timeColor:   "93a1a1",
                    customCSS:   '.reply:not(.qphl){border-color:"+this.mainColor.hex+" !important}" + ($SS.conf["Use Post Info Color"] && $SS.conf["Add Shadow?"] ? ".thread>.replyContainer>.reply>div.postInfo { box-shadow: 0px 2px 3px #0d272e !important; }" : "") + "'
                },
                {
                    name:"Solarized Light",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "f0f0f0",
                    mainColor:   "fdf6e3",
                    brderColor:  "e6dfce",
                    inputColor:  "ffffff",
                    inputbColor: "cccccc",
                    pinfoColor:  "fffbf0",
                    pinfobColor: "e6dfce",
                    blinkColor:  "6c71c4",
                    jlinkColor:  "657b83",
                    linkColor:   "6c71c4",
                    linkHColor:  "d33682",
                    nameColor:   "657b83",
                    quoteColor:  "859900",
                    textColor:   "657b83",
                    sageColor:   "990000",
                    tripColor:   "2aa198",
                    titleColor:  "b58900",
                    timeColor:   "657b83",
                    customCSS:   ".boardTitle {color: #b58900 !important;text-shadow: 1px 1px 1px #999 !important;}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}.postNum a {color: #657b83 !important;}"
                },
                {
                    name:        "4chan Rewired Modded", // Originally by !K.WeEabo0o, modded by ahoka
                    author:      "ahodesuka",
                    "default":   true,
                    bgImg:       "http://oi39.tinypic.com/2h51rb4.jpg",
                    bgRPA:       "no-repeat bottom right fixed",
                    replyOp:     "0.8", 
                    navOp:       "0.9", 
                    bgColor:     "f4f4f4",
                    mainColor:   "efefef",
                    brderColor:  "d4d4d4",
                    inputColor:  "e4e4e4",
                    inputbColor: "cccccc",
                    pinfoColor:  "ffffff",
                    pinfobColor: "ffffff",
                    blinkColor:  "bf7f3f",
                    jlinkColor:  "bf7f3f",
                    linkColor:   "bf7f3f",
                    linkHColor:  "d33682",
                    nameColor:   "4c4c4c",
                    quoteColor:  "6b7a1e",
                    textColor:   "4c4c4c",
                    sageColor:   "cc6666",
                    tripColor:   "bf7f3f",
                    titleColor:  "4c4c4c",
                    timeColor:   "4c4c4c",
                    customCSS:   '\n\n\n\n\n\n"+($SS.conf["Page Layout"]===2?".opContainer{display:block!important;border:1px solid "+this.brderColor.hex+"!important;"+($SS.conf["Sidebar Position"]===3?"margin-left:-"+($SS.conf["Side Margin"]+2)+"px!important;padding-left:"+($SS.conf["Side Margin"]+2)+"px!important}.opContainer,":"}"):"")+".post.reply{background:-webkit-linear-gradient(top,rgba(244,244,244," + this.replyOp + "),rgba(239,239,239," + this.replyOp + "))!important;background:-moz-linear-gradient(top,rgba(244,244,244," + this.replyOp + "),rgba(239,239,239," + this.replyOp + "))!important;background:-o-linear-gradient(top,rgba(244,244,244," + this.replyOp + "),rgba(239,239,239," + this.replyOp + "))!important;box-shadow:0 2px 5px rgba(0,0,0,.05)!important}.reply.highlight,.qphl{border-color:rgba("+this.linkHColor.rgb+",.6)!important}'
                },
                {
                    name:        "violaceous",
                    author:      "!MaSoOdDwDw",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "121314",
                    mainColor:   "1b1b1b",
                    brderColor:  "292a2b",
                    inputColor:  "18191a",
                    inputbColor: "121314",
                    pinfoColor:  "191919",
                    pinfobColor: "1b1b1b",
                    blinkColor:  "db95e5",
                    jlinkColor:  "db95e5",
                    linkColor:   "2a7fa0",
                    linkHColor:  "3090b5",
                    nameColor:   "a497b0",
                    quoteColor:  "5aab24",
                    textColor:   "dddddd",
                    sageColor:   "4f4f4f",
                    tripColor:   "bd2b83",
                    titleColor:  "06989a",
                    timeColor:   "dddddd",
                    customCSS:   '\n\n\n\n\n\n.reply:not(.qphl){border-color:"+this.mainColor.hex+" !important}'
                },
                {
                    name:        "4chan Dark Upgrade",
                    "default":   true,
                    bgImg:       "http://img85.imageshack.us/img85/4162/4chbg.gif",
                    bgRPA:       "repeat top left fixed",
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "242424",
                    mainColor:   "333333",
                    brderColor:  "3a3a3a",
                    inputColor:  "2f2f2f",
                    inputbColor: "0f0f0f",
                    pinfoColor:  "303030",
                    pinfobColor: "3a3a3a",
                    blinkColor:  "cccccc",
                    jlinkColor:  "cccccc",
                    linkColor:   "dddddd",
                    linkHColor:  "eeeeee",
                    nameColor:   "ffffff",
                    quoteColor:  "63995b",
                    textColor:   "ffffff",
                    sageColor:   "b17385",
                    tripColor:   "a7dce7",
                    titleColor:  "999999",
                    timeColor:   "aaaaaa",
                    customCSS:   "\n\n\n\n\n\n#delform{background:rgba(22,22,22,.8)!important;border:0!important;padding:1px!important;box-shadow:rgba(0,0,0,.8) 0 0 10px;}" +
                                 ".postContainer>.reply{background-image:url(http://img714.imageshack.us/img714/3969/4ch2.gif)!important;" +
                                 "border-bottom:#1f1f1f!important;border-radius:5px!important}" +
                                 ".thread:not(.stub){background:0!important}a:not([href='javascript:;']){text-shadow:#0f0f0f 0 1px;}"
                },
                {
                    name:        "AppChan", // Originally by Zixaphir @ http://userstyles.org/styles/54149/appchan
                    author:      "Zixaphir",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "2c2c2c",
                    mainColor:   "333333",
                    brderColor:  "333333",
                    inputColor:  "333333",
                    inputbColor: "2c2c2c",
                    pinfoColor:  "303030",
                    pinfobColor: "333333",
                    blinkColor:  "4f5f8f",
                    jlinkColor:  "6688aa",
                    linkColor:   "6688aa",
                    linkHColor:  "6688aa",
                    nameColor:   "aaaaaa",
                    quoteColor:  "789922",
                    textColor:   "aaaaaa",
                    sageColor:   "aaaaaa",
                    tripColor:   "aaaaaa",
                    titleColor:  "aaaaaa",
                    timeColor:   "aaaaaa",
                    customCSS:   '" + ($SS.conf["Use Post Info Color"] && $SS.conf["Add Shadow?"] ? ".thread>.replyContainer>.reply>div.postInfo { box-shadow: 0px 2px 3px #2c2c2c !important; }" : "") + "'
                },
                {
                    name:        "Zenburned",
                    author:      "lazy",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.9", 
                    bgColor:     "3f3f3f",
                    mainColor:   "575757",
                    brderColor:  "5e5e5e",
                    inputColor:  "454545",
                    inputbColor: "888888",
                    pinfoColor:  "4d4d4d",
                    pinfobColor: "5e5e5e",
                    blinkColor:  "dca3a3",
                    jlinkColor:  "93b3a3",
                    linkColor:   "efdcbc",
                    linkHColor:  "f8f893",
                    nameColor:   "c0bed1",
                    quoteColor:  "7f9f7f",
                    textColor:   "dcdccc",
                    sageColor:   "aaaaaa",
                    tripColor:   "8cd0d3",
                    titleColor:  "aaaaaa",
                    timeColor:   "dcdccc",
                },
                {
                    name:        "ピンク",
                    author:      "DrooidKun",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0",
                    navOp:       "0.9", 
                    bgColor:     "ffffff",
                    mainColor:   "f2f2f2",
                    brderColor:  "f0f0f0",
                    inputColor:  "f0f0f0",
                    inputbColor: "dedede",
                    pinfoColor:  "ffdbed",
                    pinfobColor: "f0f0f0",
                    blinkColor:  "bf7ab4",
                    jlinkColor:  "bf7ab4",
                    linkColor:   "bf7ab4",
                    linkHColor:  "c669c9",
                    nameColor:   "cc5ec1",
                    quoteColor:  "718c00",
                    textColor:   "4d4d4c",
                    sageColor:   "c82829",
                    tripColor:   "c669c9",
                    titleColor:  "4d4d4d",
                    timeColor:   "4d4d4c",
                    customCSS:   ".boardTitle {color: #cc5ec1 !important;text-shadow: 1px 1px 1px #772E28 !important;}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}"
                },
                {
                    name:        "BakaBT",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       "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",
                    bgRPA:       "repeat top left fixed",
                    replyOp:     "1.0",
                    navOp:       "0.9", 
                    bgColor:     "f8f3fe",
                    mainColor:   "eeddff",
                    brderColor:  "c8aedd",
                    inputColor:  "ffffff",
                    inputbColor: "cab7d9",
                    pinfoColor:  "e4d4f5",
                    pinfobColor: "c8aedd",
                    blinkColor:  "83678f",
                    jlinkColor:  "962594",
                    linkColor:   "724f87",
                    linkHColor:  "b22caa",
                    nameColor:   "795c8c",
                    quoteColor:  "789922",
                    textColor:   "000000",
                    sageColor:   "990000",
                    tripColor:   "925c8d",
                    titleColor:  "0f0c5d",
                    timeColor:   "000000",
                    customCSS:   ".boardTitle {color: #854C9E !important;text-shadow: 1px 1px 1px #222 !important;}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}.postNum a { color: #83678F !important; }\n\n\nform[name='delform'], .flashListing {\nbackground-color: #FFF !important;\nborder: 1px solid #CCC !important;\npadding-left: 20px !important;\npadding-right: 20px !important;\n  -webkit-box-shadow: 5px 5px 5px rgba(128,128,128,0.5) !important;\n  box-shadow: 0px 10px 10px 2px rgba(128,128,128,0.5) !important;\n  border-radius: 3px !important;\npadding-bottom: 2px !important;\nmargin-bottom: -4px !important;\n}",
                },
                {
                    name:        "Monokai",
                    author:      "seaweed",
                    "default":   true,
                    replyOp:     "1.0",
                    navOp:       "0.9", 
                    bgColor:     "20211c",
                    mainColor:   "272822",
                    brderColor:  "2d2e27",
                    inputColor:  "20211c",
                    inputbColor: "171713",
                    pinfoColor:  "252621",
                    pinfobColor: "20211c",
                    blinkColor:  "f92672",
                    jlinkColor:  "e2db74",
                    linkColor:   "e2db74",
                    linkHColor:  "ae81ff",
                    nameColor:   "5ac0cc",
                    quoteColor:  "a2cc28",
                    textColor:   "f8f8f2",
                    sageColor:   "4f4f4f",
                    tripColor:   "fa8220",
                    titleColor:  "ae81ff",
                    timeColor:   "f8f8f2",
                },
                {
                    name:        "Yotsuba B Rewired",
                    author:      "seaweed",
                    "default":   true,
                    bgImg:       "https://goput.it/01d.png",
                    replyOp:     "0.9",
                    navOp:       "0.9",
                    bgColor:     "eef2ff",
                    mainColor:   "b7c5d9",
                    brderColor:  "b7c5d9",
                    inputColor:  "ffffff",
                    inputbColor: "aaaaaa",
                    pinfoColor:  "cfd3e8",
                    pinfobColor: "b7c5d9",
                    blinkColor:  "34345c",
                    jlinkColor:  "34345c",
                    linkColor:   "34345c",
                    linkHColor:  "dd0000",
                    nameColor:   "117743",
                    quoteColor:  "789922",
                    textColor:   "000000",
                    sageColor:   "990000",
                    tripColor:   "228854",
                    titleColor:  "0f0c5d",
                    timeColor:   "000000",
                    customCSS:   '.op .postInfo { width: 100% !important;\ndisplay: block !important;\nbackground: rgba(255,255,255," + this.replyOp + ") !important;\n" + ($SS.conf["Rounded Corners"] ? "border-radius: 3px 3px 0px 0px !important;\n" : "") + "}.op blockquote{" + ($SS.conf["Rounded Corners"] ? "border-radius: 0px 0px 3px 3px !important;\n" : "") + "background:-webkit-linear-gradient(top,rgba(255,255,255," + this.replyOp + "),rgba(242,242,242," + this.replyOp + "))!important;\nbackground:-moz-linear-gradient(top,rgba(255,255,255," + this.replyOp + "),rgba(242,242,242," + this.replyOp + "))!important;\nbackground:-o-linear-gradient(top,rgba(255,255,255," + this.replyOp + "),rgba(242,242,242," + this.replyOp + "))!important;\nbox-shadow:0 2px 2px rgba(0,0,0,.05)!important}.thread>.replyContainer>.reply{background:-webkit-linear-gradient(top,rgba(204,214,228," + this.replyOp + "),rgba(183,197,217," + this.replyOp + "))!important;\nbackground:-moz-linear-gradient(top,rgba(204,214,228," + this.replyOp + "),rgba(183,197,217," + this.replyOp + "))!important;\nbackground:-o-linear-gradient(top,rgba(204,214,228," + this.replyOp + "),rgba(183,197,217," + this.replyOp + "))!important;\nbox-shadow:0 2px 5px rgba(0,0,0,.05)!important}.reply.highlight,.qphl{border-color:rgba("+this.linkHColor.rgb+",.6)!important}"+($SS.conf["Page Layout"]===2?".opContainer{display:block!important;\nborder:1px solid "+this.brderColor.hex+"!important;\n"+($SS.conf["Sidebar Position"]===3?"margin-left:-"+($SS.conf["Side Margin"]+2)+"px!important;\npadding-left:"+($SS.conf["Side Margin"]+2)+"px!important}.opContainer,":"}"):"")+"box-shadow:0 2px 5px rgba(0,0,0,.05)!important}.reply.highlight,.qphl{border-color:rgba("+this.linkHColor.rgb+",.6)!important}a.quotelink:not(:hover){color:#cc2200!important;\n}.boardTitle {color: #AF0A0F !important;\ntext-shadow: 1px 1px 1px #7A070D !important;\n}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;\n}.postNum a { color: #000000 !important;\n }',
                    bgRPA:       "no-repeat bottom right fixed"
                },
                {
                    name:        "Ao ni sarasu", // based on jaygeegeegee's http://userstyles.org/styles/75602/last-fm-kind-of-blue
                    author:      "seaweed",
                    "default":   true,
                    replyOp:     "1.0",
                    navOp:       "0.9",
                    bgColor:     "e9eced",
                    mainColor:   "e3e7e8",
                    brderColor:  "cccccc",
                    inputColor:  "e9eced",
                    inputbColor: "cccccc",
                    pinfoColor:  "ffffff",
                    pinfobColor: "ffffff",
                    blinkColor:  "477085",
                    jlinkColor:  "477085",
                    linkColor:   "477085",
                    linkHColor:  "5d6678",
                    nameColor:   "4c4c4c",
                    quoteColor:  "6b7a1e",
                    textColor:   "4c4c4c",
                    sageColor:   "92afc2",
                    tripColor:   "5d6678",
                    titleColor:  "617d6f",
                    timeColor:   "4c4c4c",
                    customCSS:   '.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;}.boardTitle {color: #477085 !important;text-shadow: 1px 1px 1px #772E28 !important;}.post.reply{background:-webkit-linear-gradient(top,#E5E8E9,#E3E7E8)!important;background:-moz-linear-gradient(top,#E5E8E9,#E3E7E8)!important;background:-o-linear-gradient(top,#E5E8E9,#E3E7E8)!important;box-shadow:0 2px 5px rgba(0,0,0,.05)!important}.reply.highlight,.qphl{border-color:rgba("+this.linkHColor.rgb+",.6)!important} #qp .reply { box-shadow: none !important; }',
                }
            ],

            init: function()
            {
                $SS.conf["Themes"] = Array.isArray($SS.conf["Themes"]) ?
                    this.defaults.concat($SS.conf["Themes"]) : this.defaults.slice(0);

                var i      = $SS.location.nsfw ?
                                $SS.conf["NSFW Theme"] : $SS.conf["Selected Theme"],
                    tIndex = $SS.conf["Themes"][i] ? i : 0;

                $SS.theme = new $SS.Theme(tIndex); // Set the active theme.
            }
        },

        /* MASCOTS */
        Mascots:
        {
            defaults:
            [
                { img: "https://i.minus.com/ibqbz63WobNaUZ.png",                                                         "default":   true }, // akiyama mio 2
                { img: "https://i.minus.com/itXHnhcnpzlZ0.png",                                                          "default":   true }, // akiyama mio sitting
                { img: "https://i.minus.com/i9fkOkQQ0Iyov.png",                                                          "default":   true }, // Asuka Langley Soryu
                { img: "https://i.minus.com/ibp4PTT2SK6I4o.png",                                                         "default":   true }, // BLACK★ROCK SHOOTER
                { img: "https://i.minus.com/iWV2iXY4AgeAz.png",                                                          "default":   true }, // Dawn / Hikari (Pokemon)
                { img: "https://i.minus.com/iwijU3hXlJwvx.png", small: true,                                             "default":   true }, // Furudo Erika
                { img: "https://i.minus.com/ixEW2qpW09BuX.png",                                                          "default":   true }, // Gasai Yuno
                { img: "https://i.minus.com/irXtk9ydjWtsl.png",                                                          "default":   true }, // Hasekura Youko
                { img: "https://i.minus.com/i3B8dszlW3Mfw.png",                                                          "default":   true }, // Hatsune Miku
                { img: "https://i.minus.com/iDNDSbUD5pXHZ.png",                                                          "default":   true }, // Hatsune Miku 2
                { img: "https://i.minus.com/iLkr2EDaYmknX.png", offset: -120, position: "center",                        "default":   true }, // Hatsune Miku (big)
                { img: "https://i.minus.com/idk1cr4HEhd9C.png",                                                          "default":   true }, // Hirasawa Yui
                { img: "https://i.minus.com/iRRJ5VCJGpuZg.png",                                                          "default":   true }, // Horo sil (light color schemes)
                { img: "https://i.minus.com/ijEdbJABjfwzl.png",                                                          "default":   true }, // Horo sil (dark color schemes)
                { img: "https://i.minus.com/ivlNMrvf0ujOP.png",                                                          "default":   true }, // Horo sil 2 (light color schemes)
                { img: "https://i.minus.com/iRBIRu25ULJIU.png",                                                          "default":   true }, // Horo sil 2 (dark color schemes)
                { img: "https://i.minus.com/i8B0jpOGGqr8F.png",                                                          "default":   true }, // Ika Musume
                { img: "https://i.minus.com/iIKosmoehVEsl.png",                                                          "default":   true }, // Ika Musume 2
                { img: "https://i.minus.com/ibrwcAB72agjkn.png",                                                         "default":   true }, // Iwakura Lain 2
                { img: "https://i.minus.com/ib022yxCvyGw5z.png",                                                         "default":   true }, // Kagamine Rin
                { img: "https://i.minus.com/iben2goxAmh7aV.png",                                                         "default":   true }, // Kaname Madoka
                { img: "https://i.minus.com/ihyDfRynJ25vD.png",                                                          "default":   true }, // Koiwai Yotsuba
                { img: "https://i.minus.com/ijJber6Ts4www.png",                                                          "default":   true }, // Nagato Yuki
                { img: "https://i.minus.com/iAWR9o9UW5rBq.png",                                                          "default":   true }, // Nagato Yuki sil (light color schemes)
                { img: "https://i.minus.com/iM8VOtV3OIp9u.png",                                                          "default":   true }, // Nagato Yuki sil (dark color schemes)
                { img: "https://i.minus.com/ifFwGKSB0VsEh.png",                                                          "default":   true }, // Nagato Yuki + Pantsu (light color schemes)
                { img: "https://i.minus.com/ibwZZ5FlIefqwS.png",                                                         "default":   true }, // Nagato Yuki + Pantsu (dark color schemes)
                { img: "https://i.minus.com/ibtRMzjF9MS6oy.png", overflow: true,                                         "default":   true }, // Nakano Azusa
                { img: "http://i.minus.com/i87u3AnyzlVnb.png", small: true,                                              "default":   true }, // Patchouli Knowledge
                { img: "https://i.minus.com/izQNQ4akphZWn.png",                                                          "default":   true }, // Shana
                { img: "https://i.minus.com/iMUgBG7BdvMUU.png",                                                          "default":   true }, // Shinonome Hakase
                { img: "https://i.minus.com/iYuOeiFWnqP9i.png",                                                          "default":   true }, // Suzumiya Haruhi
                { img: "https://i.minus.com/iWUx3OHgNeyrS.png", offset: -120, position: "center",                        "default":   true }, // Suzumiya Haruhi 2
                { img: "https://i.minus.com/iortvyiEFHVQi.png", overflow: true,                                          "default":   true }, // asuka
                { img: "https://i.minus.com/ir1jBydJsjYtX.png",                                                          "default":   true }, // erio
                { img: "https://i.minus.com/iIoEVlv6PpsZt.png",                                                          "default":   true }, // homu
                { img: "https://i.minus.com/ilMeKtSdD4Ih9.png", offset: -90, position: "center", small: true,            "default":   true }, // kuroneko
                { img: "https://i.minus.com/i40A8T1uvg833.png", small: true,                                             "default":   true }, // lain
                { img: "https://i.minus.com/iHnv6bBdH3ElF.png",                                                          "default":   true }, // luka
                { img: "https://i.minus.com/iqVknxajfDzAD.png", offset: -90, position: "center",                         "default":   true }, // madotsuki
                { img: "https://i.minus.com/ibkEnN35Yaewt2.png", overflow: true,                                         "default":   true }, // ムゥ～りさ
                { img: "https://i.minus.com/iiEOIF7u05fIr.png", flip: false, overflow: true,                             "default":   true }, // mio
                { img: "https://i.minus.com/ieZPtyTynlwBK.png", offset: 0, position: "center",                           "default":   true }, // mokou
                { img: "https://i.minus.com/ib1pOfjwSD53sl.png", flip: false, small: true,                               "default":   true }, // shana
                { img: "https://i.minus.com/iRA9OW02HVchv.png",                                                          "default":   true }, // shiki
                { img: "https://i.minus.com/ik0hNJ61QjgD0.png",                                                          "default":   true }, // yin
                { img: "https://i.minus.com/i0v2fCxA6msfB.png",                                                          "default":   true }, // yuzuki
                { img: "https://i.minus.com/iBvqnYscczL3D.png", overflow: true,                                          "default":   true }, // patchouli 2
                { img: "https://i.minus.com/i31h7nnelAj5C.png",                                                          "default":   true }, // kefka
                { img: "https://i.minus.com/iNB442qqEYXzn.png",                                                          "default":   true }, // ciel
                { img: "https://i.minus.com/ibc2GhW4AW6tYy.png",                                                         "default":   true }, // fubuki atsuya
                { img: "https://i.minus.com/iqIGKQS61Uydk.png",                                                          "default":   true }, // inazuma 1
                { img: "https://i.minus.com/indbfcA4TS0Xb.png", small: true,                                             "default":   true }, // inazuma 2
                { img: "https://i.minus.com/ijdm4b711HIWs.png",                                                          "default":   true }, // inazuma 3
                { img: "https://i.minus.com/i2ODpJc3iRt3A.png",                                                          "default":   true }, // inazuma 4
                { img: "https://i.minus.com/i8FafJhXgAyWo.png",                                                          "default":   true }, // inazuma 5
                { img: "https://i.minus.com/i6gc70Hv8lTl6.png",                                                          "default":   true }, // inazuma 6
                { img: "https://i.minus.com/igbibpeTcWQIS.png",                                                          "default":   true }, // inazuma 7
                { img: "https://i.minus.com/ibjnPNJv4QGiUn.png",                                                         "default":   true }, // inga
                { img: "https://i.minus.com/ihhgWi5dADZKx.png",                                                          "default":   true }, // knb
                { img: "https://i.minus.com/iwp3zHABdUZn9.png", small: true,                                             "default":   true }, // knb 2
                { img: "https://i.minus.com/iP4MQ0TblOArQ.png", small: true,                                             "default":   true }, // kuroshitsuji
                { img: "https://i.minus.com/iboIUPbZAbNRiz.png",                                                         "default":   true }, // magi 1
                { img: "https://i.minus.com/ibptj9XtEE4yoi.png",                                                         "default":   true }, // magi 2
                { img: "https://i.minus.com/iJlh7Ek7QGYHf.png", small: true,                                             "default":   true }, // shinji
                { img: "https://i.minus.com/i7hTdHzxeHKuM.png", small: true,                                             "default":   true }, // shuu
                { img: "https://i.minus.com/ibvGG8EqpN9CVW.png",                                                         "default":   true }  // uta
            ],

            init: function()
            {
                $SS.conf["Mascots"] = Array.isArray($SS.conf["Mascots"]) ?
                    this.defaults.concat($SS.conf["Mascots"]) : this.defaults.slice(0);

                var eMascot = [],
                    mIndex;

                if ($SS.conf["Selected Mascots"] === 0)
                {
                    eMascot = $SS.conf["Mascots"];
                    mIndex  = Math.floor(Math.random() * eMascot.length);
                }
                else
                {
                    for (var i = 0, MAX = $SS.conf["Selected Mascots"].length, j; i < MAX; ++i)
                    {
                        j = $SS.conf["Selected Mascots"][i];

                        if ($SS.conf["Mascots"][j].boards == undefined ||
                            $SS.conf["Mascots"][j].boards.split(",").indexOf($SS.location.board) !== -1)
                            eMascot.push(j);
                    }

                    if (eMascot.length === 0)
                        return $SS.mascot = new $SS.Mascot(-1);
                    else
                        mIndex = eMascot[Math.floor(Math.random() * eMascot.length)];
                }

                $SS.mascot = new $SS.Mascot(mIndex); // Set the active mascot.
            }
        },

        pages:
        {
            hasInit: false,
            init: function()
            {
                if (this.hasInit)
                {
                    $("#pagesDrop").remove();
                    return this.hasInit = false;
                }
            }
        },

        tripHider:
        {
            hasInit: false,
            init: function(input)
            {
                if (this.hasInit && !$SS.conf["Smart Tripcode Hider"])
                {
                    $("input[name=name]").each(function()
                    {
                        $(this).unbind("blur", $SS.tripHider.handle)
                               .removeClass("tripping");
                    });
                    return this.hasInit = false;
                }
                else
                {
                    input.bind("blur", this.handle);
                    return this.hasInit = true;
                }
            },
            handle: function(e)
            {
                var $this = this.nodeName ? $(this) : $(e),
                    check = /^.*##?.+/.test($this.val());

                if (check && !$this.hasClass("tripping"))
                    $this.addClass("tripping");
                else if (!check && $this.hasClass("tripping"))
                    $this.removeClass("tripping");
            }
        },

        riceInputs:
        {
            hasInit: false,
            init: function()
            {
                if (!this.hasInit)
                {
                    if (!$SS.browser.webkit && !$SS.conf["Hide Checkboxes"])
                        $("input[type=checkbox]:not(#imageExpand)").riceCheck();
                    else if (!$SS.browser.webkit)
                        $("input#prefetch").riceCheck();

                    return this.hasInit = true;
                }
                else if (!$SS.browser.webkit &&
                         !$SS.conf["Hide Checkboxes"] &&
                         !$(".postInfo>.riceCheck").exists())
                {
                    $("input[type=checkbox]:not(#imageExpand)").riceCheck();
                    return this.hasInit = false;
                }
            }
        },

        logoReflect:
        {
            hasInit: false,
            init: function()
            {
                if (this.hasInit) return;

                var div = $("<div id=bBanner>").append($(".boardBanner>img").attr("id", "banner"));
                $(".boardBanner").prepend(div);

                return this.hasInit = true;
            }
        },

        jscolor:
        {
            getElementPos: function(e)
            {
                var e1=e, e2=e;
                var x=0, y=0;

                if (e1.offsetParent)
                    do
                    {
                        x += e1.offsetLeft;
                        y += e1.offsetTop;
                    }
                    while(e1 = e1.offsetParent);

                while((e2 = e2.parentNode) && e2.nodeName.toUpperCase() !== "BODY")
                {
                    x -= e2.scrollLeft;
                    y -= e2.scrollTop;
                }

                return [x, y];
            },
            getElementSize: function(e)
            {
                return [e.offsetWidth, e.offsetHeight];
            },
            getRelMousePos: function(e)
            {
                var x = 0, y = 0;

                if (!e)
                    e = window.event;

                if (typeof e.offsetX === "number")
                {
                    x = e.offsetX;
                    y = e.offsetY;
                }
                else if (typeof e.layerX === "number")
                {
                    x = e.layerX;
                    y = e.layerY;
                }

                return { x: x, y: y };
            },
            getViewPos: function()
            {
                if (typeof window.pageYOffset === "number")
                    return [window.pageXOffset, window.pageYOffset];
                else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
                    return [document.body.scrollLeft, document.body.scrollTop];
                else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
                    return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
                else
                    return [0, 0];
            },
            getViewSize: function()
            {
                if (typeof window.innerWidth === "number")
                    return [window.innerWidth, window.innerHeight];
                else if (document.body && (document.body.clientWidth || document.body.clientHeight))
                    return [document.body.clientWidth, document.body.clientHeight];
                else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
                    return [document.documentElement.clientWidth, document.documentElement.clientHeight];
                else
                    return [0, 0];
            },

            // TODO: remove this array.
            images:
            {
                pad: [ 181, 101 ],
                sld: [ 16, 101 ],
                cross: [ 15, 15 ],
                arrow: [ 7, 11 ]
            },

            color: function(target)
            {

                this.required = true; // refuse empty values?
                this.adjust = true; // adjust value to uniform notation?
                this.hash = false; // prefix color with # symbol?
                this.caps = false; // uppercase?
                this.slider = true; // show the value/saturation slider?
                this.valueElement = target; // value holder
                this.styleElement = target; // where to reflect current color
                this.onImmediateChange = null; // onchange callback (can be either string or function)
                this.hsv = [0, 0, 1]; // read-only  0-6, 0-1, 0-1
                this.rgb = [1, 1, 1]; // read-only  0-1, 0-1, 0-1

                this.pickerSmartPosition = true; // automatically adjust picker position when necessary
                this.pickerFace = 10; // px
                this.pickerFaceColor = "ThreeDFace"; // CSS color
                this.pickerBorder = 1; // px
                this.pickerBorderColor = "ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight"; // CSS color
                this.pickerInset = 1; // px
                this.pickerInsetColor = "ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow"; // CSS color
                this.pickerZIndex = 10000;

                this.hidePicker = function()
                {
                    if (isPickerOwner())
                        removePicker();
                };
                this.showPicker = function()
                {
                    if (!isPickerOwner())
                    {
                        var tp = $SS.jscolor.getElementPos(target); // target pos
                        var ts = $SS.jscolor.getElementSize(target); // target size
                        var ps = getPickerDims(this); // picker size
                        var a=0, b=1, c=1;
                        var l = (ts[1]+ps[1])/2;

                        var pp =
                        [
                            tp[0],
                            tp[1]+ts[1]
                        ];

                        drawPicker(pp[0], pp[1]);
                    }
                };
                this.importColor = function()
                {
                    if (!valueElement)
                    {
                        this.exportColor();
                    }
                    else
                    {
                        if (!this.adjust)
                        {
                            if (!this.fromString(valueElement.value, leaveValue))
                            {
                                styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                                styleElement.style.color = styleElement.jscStyle.color;
                                this.exportColor(leaveValue | leaveStyle);
                            }
                        }
                        else if (!this.required && /^\s*$/.test(valueElement.value))
                        {
                            valueElement.value = "";
                            styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                            styleElement.style.color = styleElement.jscStyle.color;
                            this.exportColor(leaveValue | leaveStyle);

                        }
                        else if (!this.fromString(valueElement.value))
                            this.exportColor();
                    }
                };
                this.exportColor = function(flags)
                {
                    if (!(flags & leaveValue) && valueElement)
                    {
                        var value = this.toString();

                        if (value[0] === "#")
                            value = value.substr(1);

                        valueElement.value = value;
                    }

                    if (!(flags & leaveStyle) && styleElement)
                    {
                        styleElement.style.backgroundColor = "#"+this.toString();
                        styleElement.style.color =
                            0.213 * this.rgb[0] +
                            0.715 * this.rgb[1] +
                            0.072 * this.rgb[2]
                            < 0.5 ? "#FFF": "#000";
                    }

                    if (!(flags & leavePad) && isPickerOwner())
                        redrawPad();

                    if (!(flags & leaveSld) && isPickerOwner())
                        redrawSld();
                };
                this.fromHSV = function(h, s, v, flags)
                {
                    h<0 && (h=0) || h>6 && (h=6);
                    s<0 && (s=0) || s>1 && (s=1);
                    v<0 && (v=0) || v>1 && (v=1);

                    this.rgb = HSV_RGB(
                        h===null ? this.hsv[0]: (this.hsv[0]=h),
                        s===null ? this.hsv[1]: (this.hsv[1]=s),
                        v===null ? this.hsv[2]: (this.hsv[2]=v)
                    );

                    this.exportColor(flags);
                };
                this.fromRGB = function(r, g, b, flags)
                {
                    r<0 && (r=0) || r>1 && (r=1);
                    g<0 && (g=0) || g>1 && (g=1);
                    b<0 && (b=0) || b>1 && (b=1);

                    var hsv = RGB_HSV(
                        r===null ? this.rgb[0]: (this.rgb[0]=r),
                        g===null ? this.rgb[1]: (this.rgb[1]=g),
                        b===null ? this.rgb[2]: (this.rgb[2]=b)
                    );

                    if(hsv[0] !== null)
                        this.hsv[0] = hsv[0];

                    if(hsv[2] !== 0)
                        this.hsv[1] = hsv[1];

                    this.hsv[2] = hsv[2];
                    this.exportColor(flags);
                };
                this.fromString = function(hex, flags)
                {
                    var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);

                    if (!m) return false;
                    else
                    {
                        if (m[1].length === 6)
                            this.fromRGB(
                                parseInt(m[1].substr(0,2),16) / 255,
                                parseInt(m[1].substr(2,2),16) / 255,
                                parseInt(m[1].substr(4,2),16) / 255,
                                flags);
                        else
                            this.fromRGB(
                                parseInt(m[1].charAt(0)+m[1].charAt(0),16) / 255,
                                parseInt(m[1].charAt(1)+m[1].charAt(1),16) / 255,
                                parseInt(m[1].charAt(2)+m[1].charAt(2),16) / 255,
                                flags);

                        return true;
                    }
                };
                this.toString = function()
                {
                    return (
                        (0x100 | Math.round(255*this.rgb[0])).toString(16).substr(1) +
                        (0x100 | Math.round(255*this.rgb[1])).toString(16).substr(1) +
                        (0x100 | Math.round(255*this.rgb[2])).toString(16).substr(1)
                    );
                };

                function RGB_HSV(r, g, b)
				{
                    var n = Math.min(Math.min(r,g),b);
                    var v = Math.max(Math.max(r,g),b);
                    var m = v - n;
                    if (m === 0) { return [ null, 0, v ]; }
                    var h = r===n ? 3+(b-g)/m: (g===n ? 5+(r-b)/m: 1+(g-r)/m);
                    return [ h===6?0:h, m/v, v ];
                }

                function HSV_RGB(h, s, v)
				{
                    if (h === null) { return [ v, v, v ]; }
                    var i = Math.floor(h);
                    var f = i%2 ? h-i: 1-(h-i);
                    var m = v * (1 - s);
                    var n = v * (1 - s*f);
                    switch(i) {
                        case 6:
                        case 0: return [v,n,m];
                        case 1: return [n,v,m];
                        case 2: return [m,v,n];
                        case 3: return [m,n,v];
                        case 4: return [n,m,v];
                        case 5: return [v,m,n];
                    }
                }

                function removePicker()
				{
                    delete $SS.jscolor.picker.owner;
                    window.removeEventListener("resize", removePicker, false);
                    target.blur();
                    document.getElementsByTagName("body")[0].removeChild($SS.jscolor.picker.boxB);
                }

                function drawPicker(x, y)
				{
                    if (!$SS.jscolor.picker)
                    {
                        $SS.jscolor.picker =
                        {
                            box: document.createElement("div"),
                            boxB: document.createElement("div"),
                            pad: document.createElement("div"),
                            padB: document.createElement("div"),
                            padM: document.createElement("div"),
                            sld: document.createElement("div"),
                            sldB: document.createElement("div"),
                            sldM: document.createElement("div"),
                        };

                        for(var i=0,segSize=4; i<$SS.jscolor.images.sld[1]; i+=segSize)
                        {
                            var seg = document.createElement("div");
                            seg.style.height = segSize+"px";
                            seg.style.fontSize = "1px";
                            seg.style.lineHeight = "0";
                            $SS.jscolor.picker.sld.appendChild(seg);
                        }

                        $SS.jscolor.picker.sldB.appendChild($SS.jscolor.picker.sld);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.sldB);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.sldM);
                        $SS.jscolor.picker.padB.appendChild($SS.jscolor.picker.pad);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.padB);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.padM);
                        $SS.jscolor.picker.boxB.appendChild($SS.jscolor.picker.box);
                    }

                    var p = $SS.jscolor.picker;

                    // controls interaction
                    window.addEventListener("resize", removePicker, false);
                    p.box.onmouseup = p.box.onmouseout = function() { target.focus(); };
                    p.box.onmousedown = function() { abortBlur=true; };
                    p.box.onmousemove = function(e)
                    {
                        if (holdPad || holdSld)
                        {
                            holdPad && setPad(e);
                            holdSld && setSld(e);

                            if (document.selection)
                                document.selection.empty();
                            else if (window.getSelection)
                                window.getSelection().removeAllRanges();

                            dispatchImmediateChange();
                        }
                    };
                    p.padM.onmouseup =
                    p.padM.onmouseout = function() { if (holdPad) { holdPad=false; $(valueElement).fire("change"); } };
                    p.padM.onmousedown = function(e)
                    {
                        holdPad=true;
                        setPad(e);
                        dispatchImmediateChange();
                    };
                    p.sldM.onmouseup =
                    p.sldM.onmouseout = function() { if (holdSld) { holdSld=false; $(valueElement).fire("change"); } };
                    p.sldM.onmousedown = function(e)
                    {
                        holdSld=true;
                        setSld(e);
                        dispatchImmediateChange();
                    };

                    // picker
                    var dims = getPickerDims(THIS);
                    p.box.style.width = dims[0] + "px";
                    p.box.style.height = dims[1] + "px";

                    /** MOVE TO CSS **/
                    // picker border
                    p.boxB.style.position = "fixed";
                    p.boxB.style.clear = "both";
                    p.boxB.style.left = x+"px";
                    p.boxB.style.top = y+"px";
                    p.boxB.style.zIndex = THIS.pickerZIndex;
                    p.boxB.style.border = THIS.pickerBorder+"px solid";
                    p.boxB.style.borderColor = THIS.pickerBorderColor;
                    p.boxB.style.background = THIS.pickerFaceColor;

                    // pad image
                    p.pad.style.width = $SS.jscolor.images.pad[0]+"px";
                    p.pad.style.height = $SS.jscolor.images.pad[1]+"px";

                    // pad border
                    p.padB.style.position = "absolute";
                    p.padB.style.left = THIS.pickerFace+"px";
                    p.padB.style.top = THIS.pickerFace+"px";
                    p.padB.style.border = THIS.pickerInset+"px solid";
                    p.padB.style.borderColor = THIS.pickerInsetColor;

                    // pad mouse area
                    p.padM.style.position = "absolute";
                    p.padM.style.left = "0";
                    p.padM.style.top = "0";
                    p.padM.style.width = THIS.pickerFace + 2*THIS.pickerInset + $SS.jscolor.images.pad[0] + $SS.jscolor.images.arrow[0] + "px";
                    p.padM.style.height = p.box.style.height;
                    p.padM.style.cursor = "crosshair";

                    // slider image
                    p.sld.style.overflow = "hidden";
                    p.sld.style.width = $SS.jscolor.images.sld[0]+"px";
                    p.sld.style.height = $SS.jscolor.images.sld[1]+"px";

                    // slider border
                    p.sldB.style.display = THIS.slider ? "block" : "none";
                    p.sldB.style.position = "absolute";
                    p.sldB.style.right = THIS.pickerFace+"px";
                    p.sldB.style.top = THIS.pickerFace+"px";
                    p.sldB.style.border = THIS.pickerInset+"px solid";
                    p.sldB.style.borderColor = THIS.pickerInsetColor;

                    // slider mouse area
                    p.sldM.style.display = THIS.slider ? "block" : "none";
                    p.sldM.style.position = "absolute";
                    p.sldM.style.right = "0";
                    p.sldM.style.top = "0";
                    p.sldM.style.width = $SS.jscolor.images.sld[0] + $SS.jscolor.images.arrow[0] + THIS.pickerFace + 2*THIS.pickerInset + "px";
                    p.sldM.style.height = p.box.style.height;
                    try {
                        p.sldM.style.cursor = "pointer";
                    } catch(eOldIE) {
                        p.sldM.style.cursor = "hand";
                    }

                    // load images in optimal order
                    p.padM.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhDwAPAKEBAAAAAP///////////yH5BAEKAAIALAAAAAAPAA8AAAIklB8Qx53b4otSUWcvyiz4/4AeQJbmKY4p1HHapBlwPL/uVRsFADs=')";
                    p.padM.style.backgroundRepeat = "no-repeat";
                    p.sldM.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhBwALAKECAAAAAP///6g8eKg8eCH5BAEKAAIALAAAAAAHAAsAAAITTIQYcLnsgGxvijrxqdQq6DRJAQA7')";
                    p.sldM.style.backgroundRepeat = "no-repeat";
                    p.pad.style.backgroundImage = "url('data:image/jpeg;base64,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')";
                    p.pad.style.backgroundRepeat = "no-repeat";
                    p.pad.style.backgroundPosition = "0 0";
                    /** UNTIL HERE **/

                    // place pointers
                    redrawPad();
                    redrawSld();

                    $SS.jscolor.picker.owner = THIS;
                    document.getElementsByTagName("body")[0].appendChild(p.boxB);
                }

                function getPickerDims(o)
				{
                    var dims =
                    [
                        2*o.pickerInset + 2*o.pickerFace + $SS.jscolor.images.pad[0] +
                            (o.slider ? 2*o.pickerInset + 2*$SS.jscolor.images.arrow[0] + $SS.jscolor.images.sld[0]: 0),
                            2*o.pickerInset + 2*o.pickerFace + $SS.jscolor.images.pad[1]
                    ];

                    return dims;
                }

                function redrawPad()
				{
                    // redraw the pad pointer
                    var yComponent = 1;
                    var x = Math.round((THIS.hsv[0]/6) * ($SS.jscolor.images.pad[0]-1));
                    var y = Math.round((1-THIS.hsv[yComponent]) * ($SS.jscolor.images.pad[1]-1));
                    $SS.jscolor.picker.padM.style.backgroundPosition =
                        (THIS.pickerFace+THIS.pickerInset+x - Math.floor($SS.jscolor.images.cross[0]/2)) + "px " +
                        (THIS.pickerFace+THIS.pickerInset+y - Math.floor($SS.jscolor.images.cross[1]/2)) + "px";

                    // redraw the slider image
                    var seg = $SS.jscolor.picker.sld.childNodes;

                    var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
                    for(var i=0; i<seg.length; i+=1)
                        seg[i].style.backgroundColor = "rgb("+
                            (rgb[0]*(1-i/seg.length)*100)+"%,"+
                            (rgb[1]*(1-i/seg.length)*100)+"%,"+
                            (rgb[2]*(1-i/seg.length)*100)+"%)";
                }

                function redrawSld()
				{
                    // redraw the slider pointer
                    var yComponent = 2;
                    var y = Math.round((1-THIS.hsv[yComponent]) * ($SS.jscolor.images.sld[1]-1));
                    $SS.jscolor.picker.sldM.style.backgroundPosition =
                        "0 " + (THIS.pickerFace+THIS.pickerInset+y - Math.floor($SS.jscolor.images.arrow[1]/2)) + "px";
                }

                function isPickerOwner()
				{
                    return $SS.jscolor.picker && $SS.jscolor.picker.owner === THIS;
                }

                function blurTarget()
				{
                    if (valueElement === target)
                        THIS.importColor();

                    THIS.hidePicker();
                }

                function blurValue()
				{
                    if (valueElement !== target)
                        THIS.importColor();
                }

                function setPad(e)
				{
                    var mpos = $SS.jscolor.getRelMousePos(e);
                    var x = mpos.x - THIS.pickerFace - THIS.pickerInset;
                    var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
                    THIS.fromHSV(x*(6/($SS.jscolor.images.pad[0]-1)), 1 - y/($SS.jscolor.images.pad[1]-1), null, leaveSld);
                }

                function setSld(e)
				{
                    var mpos = $SS.jscolor.getRelMousePos(e);
                    var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
                    THIS.fromHSV(null, null, 1 - y/($SS.jscolor.images.sld[1]-1), leavePad);
                }

                function dispatchImmediateChange()
				{
                    if (THIS.onImmediateChange)
                        if (typeof THIS.onImmediateChange === "string")
                            eval(THIS.onImmediateChange);
                        else
                            THIS.onImmediateChange(THIS);
                }

                var THIS = this;
                var abortBlur = false;
                var valueElement = this.valueElement,
                    styleElement = this.styleElement;
                var holdPad = false,
                    holdSld = false;
                var leaveValue = 1<<0,
                    leaveStyle = 1<<1,
                    leavePad = 1<<2,
                    leaveSld = 1<<3;

                // target
                $(target).bind("focus", THIS.showPicker)
                         .bind("blur", function()
                {
                    if (!abortBlur)
                        window.setTimeout(function(){ abortBlur || blurTarget(); abortBlur=false; });
                    else
                        abortBlur = false;
                });

                // valueElement
                if (valueElement) {
                    var updateField = function() {
                        THIS.fromString(valueElement.value, leaveValue);
                        dispatchImmediateChange();
                    };
                    $(valueElement).bind("keyup", updateField)
                                   .bind("input", updateField)
                                   .bind("blur", blurValue)
                                   .attr("autocomplete", "off");
                }

                // styleElement
                if (styleElement) {
                    styleElement.jscStyle =
                    {
                        backgroundColor: styleElement.style.backgroundColor,
                        color: styleElement.style.color
                    };
                }

                this.importColor();
            }
        },

        /* STRUCTS */
        Color: function(hex, incHover)
        {
            this.hex = "#" + hex;
            this.private_rgb = $SS.RGBFromHex(hex);
            this.rgb = this.private_rgb.join(",");
            this.isLight = $SS.isLight(this.private_rgb);
            this.shiftRGB = function(shift, smart)
            {
                var rgb = this.private_rgb.slice(0);

                shift = smart ?
                    (this.isLight ? (shift < 0 ? shift : -shift) : Math.abs(shift)) : shift;

                rgb[0] = Math.min(Math.max(rgb[0] + shift, 0), 255);
                rgb[1] = Math.min(Math.max(rgb[1] + shift, 0), 255);
                rgb[2] = Math.min(Math.max(rgb[2] + shift, 0), 255);

                return rgb.join(",");
            };

            if (incHover)
                this.hover = this.shiftRGB(16, true);
        },
        Image: function(img, RPA)
        {
            this.img = img;
            this.RPA = RPA;
            this.get = function()
            {
                if (!this.img) return "none ";

                var ret = "url('";
                if ($SS.validBase64(this.img))
                    ret += "data:image/" + $SS.typeofBase64(this.img) + ";base64," + this.img;
                else
                    ret += this.img;

                return ret + "')" + (this.RPA != undefined ? " " + this.RPA : "");
            };
        },
        Mascot: function(index)
        {
            if (index == -1) // no mascot
            {
                this.img    = new $SS.Image(null);
                this.hidden = true;
                return;
            }
            else
                var mascot = $SS.conf["Mascots"][index];

            this.index    = index;
            this.hidden   = $SS.conf["Hidden Mascots"].indexOf(index) !== -1;
            this.default  = mascot.default;
            this.position = mascot.position;
            this.overflow = mascot.overflow;
            this.flip     = mascot.flip == undefined ? true : mascot.flip;
            this.img      = new $SS.Image(mascot.img,
                "no-repeat " + (this.overflow ? $SS.conf["Sidebar Position " + ($SS.conf["Sidebar Position"] === 2 && this.flip ? "o" : "") + "String"] : "center") +
                " " + (this.position || "bottom"));
            this.small    = mascot.small || this.overflow;
            this.bOffset  = typeof mascot.offset === "number";
            this.offset   = this.bOffset ? mascot.offset : ($SS.conf["Post Form"] !== 1 ? "" + ($SS.conf["Post Form"] !== 4 ? 273 : 0) + "" : 24);
            this.boards   = mascot.boards;
            this.enabled  = $SS.conf["Selected Mascots"] === 0 || $SS.conf["Selected Mascots"].indexOf(index) !== -1;

            this.preview  = function()
            {
                var div = $("<div " + (this.hidden ? "hidden=true " : "") +
                            "id=mascot" + this.index + (this.enabled ? " class=selected" : "") +
                            " style=\"background:" + this.img.get() + "\">")
                           .html("<a title=Delete>X</a><a title=Edit>E</a>");

                $(div).bind("click", function(){ $(this).toggleClass("selected"); });

                $("a[title=Delete]", div).bind("click", function(e)
                {
                    e.stopPropagation();
                    $SS.options.deleteMascot(index);
                });
                $("a[title=Edit]", div).bind("click", function(e)
                {
                    e.stopPropagation();
                    $SS.options.showMascot(index);
                });

                return div;
            }
        },
        Theme: function(index)
        {
            var theme;

            if ((theme = $SS.conf["Themes"][index]) == undefined)
            {
                this.hidden = true;
                return;
            }

            this.index       = index;
            this.hidden      = $SS.conf["Hidden Themes"].indexOf(index) !== -1;
            this.name        = theme.name;
            this.author      = theme.author || "ahodesuka";
            this.default     = theme.default;
            this.replyBrder  = theme.replyBrder;
            this.bgImg       = new $SS.Image(theme.bgImg, theme.bgRPA);
            this.replyOp     = theme.replyOp;
            this.navOp       = theme.navOp;
            this.bgColor     = new $SS.Color(theme.bgColor);
            this.mainColor   = new $SS.Color(theme.mainColor);
            this.brderColor  = new $SS.Color(theme.brderColor);
            this.inputColor  = new $SS.Color(theme.inputColor, true);
            this.inputbColor = new $SS.Color(theme.inputbColor);
            this.pinfoColor  = new $SS.Color(theme.pinfoColor);
            this.pinfobColor = new $SS.Color(theme.pinfobColor);
            this.blinkColor  = new $SS.Color(theme.blinkColor);
            this.jlinkColor  = new $SS.Color(theme.jlinkColor);
            this.linkColor   = new $SS.Color(theme.linkColor);
            this.linkHColor  = new $SS.Color(theme.linkHColor);
            this.nameColor   = new $SS.Color(theme.nameColor);
            this.quoteColor  = new $SS.Color(theme.quoteColor);
            this.sageColor   = new $SS.Color(theme.sageColor);
            this.textColor   = new $SS.Color(theme.textColor);
            this.titleColor  = new $SS.Color(theme.titleColor);
            this.tripColor   = new $SS.Color(theme.tripColor);
            this.timeColor   = new $SS.Color(theme.timeColor || theme.textColor);
            this.checkMark   = new $SS.Image(inputImages, "no-repeat center " + (this.inputColor.isLight ? 0 : -8) + "px");
            this.radioCheck  = new $SS.Image(inputImages, "no-repeat center " + (this.inputColor.isLight ? -16 : -24) + "px");
            this.dIcons      = new $SS.Image(theme.dIcons || defaultIcons);
            this.header      = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA";
            this.icons       =
            {
                closeButton:   "<svg viewBox='0 0 30 30' hpreserveAspectRatio='true' eight='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.sageColor.rgb + ")' d='M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z'/></svg>",
                closedThread:  "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.sageColor.rgb + ")' d='M22.335,12.833V9.999h-0.001C22.333,6.501,19.498,3.666,16,3.666S9.666,6.502,9.666,10h0v2.833H7.375V25h17.25V12.833H22.335zM11.667,10C11.667,10,11.667,10,11.667,10c0-2.39,1.944-4.334,4.333-4.334c2.391,0,4.335,1.944,4.335,4.333c0,0,0,0,0,0v2.834h-8.668V10z'/></svg>",
                 stuckThread:  "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.tripColor.rgb + ")' d='M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z'/></svg>",
                 imgExpand:    "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='18' width='18' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.shiftRGB(32, true) + ")' d='M25.545,23.328,17.918,15.623,25.534,8.007,27.391,9.864,29.649,1.436,21.222,3.694,23.058,5.53,15.455,13.134,7.942,5.543,9.809,3.696,1.393,1.394,3.608,9.833,5.456,8.005,12.98,15.608,5.465,23.123,3.609,21.268,1.351,29.695,9.779,27.438,7.941,25.6,15.443,18.098,23.057,25.791,21.19,27.638,29.606,29.939,27.393,21.5z'/></svg>",
                 imgContract:  "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='18' width='18' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M25.083,18.895l-8.428-2.259l2.258,8.428l1.838-1.837l7.053,7.053l2.476-2.476l-7.053-7.053L25.083,18.895zM5.542,11.731l8.428,2.258l-2.258-8.428L9.874,7.398L3.196,0.72L0.72,3.196l6.678,6.678L5.542,11.731zM7.589,20.935l-6.87,6.869l2.476,2.476l6.869-6.869l1.858,1.857l2.258-8.428l-8.428,2.258L7.589,20.935zM23.412,10.064l6.867-6.87l-2.476-2.476l-6.868,6.869l-1.856-1.856l-2.258,8.428l8.428-2.259L23.412,10.064z'/></svg>",
                 hideButton:   "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(203,77,70)' d='M25.979,12.896,5.979,12.896,5.979,19.562,25.979,19.562z'/></svg>",
                 showButton:   "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(63,203,73)' d='M25.979,12.896 19.312,12.896 19.312,6.229 12.647,6.229 12.647,12.896 5.979,12.896 5.979,19.562 12.647,19.562 12.647,26.229 19.312,26.229 19.312,19.562 25.979,19.562z'/></svg>",
                 returnButton: "<svg viewBox='0 0 30 30' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M12.981,9.073V6.817l-12.106,6.99l12.106,6.99v-2.422c3.285-0.002,9.052,0.28,9.052,2.269c0,2.78-6.023,4.263-6.023,4.263v2.132c0,0,13.53,0.463,13.53-9.823C29.54,9.134,17.952,8.831,12.981,9.073z'/></svg>",
                 notWatched:   "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.quoteColor.rgb + ")' d='M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375zM22.979,26.209l-2.664-8.205l6.979-5.062h-8.627L16,4.729l-2.666,8.206H4.708l6.979,5.07l-2.666,8.203L16,21.146L22.979,26.209L22.979,26.209z'/></svg>",
                 watchedIco:   "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.quoteColor.rgb + ")' d='M16,22.375L7.116,28.83l3.396-10.438l-8.883-6.458l10.979,0.002L16.002,1.5l3.391,10.434h10.981l-8.886,6.457l3.396,10.439L16,22.375L16,22.375z'/></svg>",
                 menuButtonTop: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='14' width='14' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M8.037,11.166L14.5,22.359c0.825,1.43,2.175,1.43,3,0l6.463-11.194c0.826-1.429,0.15-2.598-1.5-2.598H9.537C7.886,8.568,7.211,9.737,8.037,11.166z'/></svg>",
                 menuButtonBot: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='14' width='14' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M23.963,20.834L17.5,9.64c-0.825-1.429-2.175-1.429-3,0L8.037,20.834c-0.825,1.429-0.15,2.598,1.5,2.598h12.926C24.113,23.432,24.788,22.263,23.963,20.834z'/></svg>",
                 OneeChan:     "<svg viewBox='0 0 32 32' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z'/></svg>",
                 _4chanX:      "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='18' width='18' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M28.537,9.859c-0.473-0.259-1.127-0.252-1.609-0.523c-0.943-0.534-1.186-1.316-1.226-2.475c-2.059-2.215-5.138-4.176-9.424-4.114c-1.162,0.017-2.256-0.035-3.158,0.435c-0.258,0.354-0.004,0.516,0.288,0.599c-0.29,0.138-0.692,0.147-0.626,0.697c2.72-0.383,7.475,0.624,7.116,2.966c-0.08,0.521-0.735,1.076-1.179,1.563c-1.263,1.382-2.599,2.45-3.761,3.667l0.336,0.336c0.742-0.521,1.446-0.785,2.104-0.785c0.707,0,1.121,0.297,1.276,0.433c0.575-0.618,1.166-1.244,1.839-1.853c0.488-0.444,1.047-1.099,1.566-1.178l0.949-0.101c1.156,0.047,1.937,0.29,2.471,1.232c0.27,0.481,0.262,1.139,0.521,1.613c0.175,0.324,0.937,1.218,1.316,1.228c0.294,0.009,0.603-0.199,0.899-0.49l1.033-1.034c0.291-0.294,0.501-0.6,0.492-0.896C29.754,10.801,28.861,10.035,28.537,9.859zM13.021,15.353l-0.741-0.741c-3.139,2.643-6.52,5.738-9.531,8.589c-0.473,0.443-1.452,1.021-1.506,1.539c-0.083,0.781,0.95,1.465,1.506,2c0.556,0.533,1.212,1.602,1.994,1.51c0.509-0.043,1.095-1.029,1.544-1.502c2.255-2.374,4.664-4.976,6.883-7.509c-0.312-0.371-0.498-0.596-0.498-0.596C12.535,18.451,11.779,17.272,13.021,15.353zM20.64,15.643c-0.366-0.318-1.466,0.143-1.777-0.122c-0.311-0.266,0.171-1.259-0.061-1.455c-0.482-0.406-0.77-0.646-0.77-0.646s-0.862-0.829-2.812,0.928L7.44,6.569C7.045,6.173,7.203,4.746,7.203,4.746L3.517,2.646L2.623,3.541l2.1,3.686c0,0,1.428-0.158,1.824,0.237l7.792,7.793c-1.548,1.831-0.895,2.752-0.895,2.752s0.238,0.288,0.646,0.771c0.196,0.23,1.188-0.249,1.455,0.061c0.264,0.312-0.196,1.41,0.12,1.777c2.666,3.064,6.926,7.736,8.125,7.736c0.892,0,2.021-0.724,2.948-1.64c0.925-0.917,1.639-2.055,1.639-2.947C28.377,22.567,23.704,18.309,20.64,15.643z'/></svg>",
                 _4chanSP:     "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M4.998,12.127v7.896h4.495l6.729,5.526l0.004-18.948l-6.73,5.526H4.998z M18.806,11.219c-0.393-0.389-1.024-0.389-1.415,0.002c-0.39,0.391-0.39,1.024,0.002,1.416v-0.002c0.863,0.864,1.395,2.049,1.395,3.366c0,1.316-0.531,2.497-1.393,3.361c-0.394,0.389-0.394,1.022-0.002,1.415c0.195,0.195,0.451,0.293,0.707,0.293c0.257,0,0.513-0.098,0.708-0.293c1.222-1.22,1.98-2.915,1.979-4.776C20.788,14.136,20.027,12.439,18.806,11.219z M21.101,8.925c-0.393-0.391-1.024-0.391-1.413,0c-0.392,0.391-0.392,1.025,0,1.414c1.45,1.451,2.344,3.447,2.344,5.661c0,2.212-0.894,4.207-2.342,5.659c-0.392,0.39-0.392,1.023,0,1.414c0.195,0.195,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.293c1.808-1.809,2.929-4.315,2.927-7.073C24.033,13.24,22.912,10.732,21.101,8.925z'/></svg>",
                 _4sight:      "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M29.772,26.433l-7.126-7.126c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127L29.772,26.433zM7.203,13.885c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486c-0.007,3.58-2.905,6.476-6.484,6.484C10.106,20.361,7.209,17.465,7.203,13.885z'/></svg>",
                 catalog:      "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M25.754,4.626c-0.233-0.161-0.536-0.198-0.802-0.097L12.16,9.409c-0.557,0.213-1.253,0.316-1.968,0.316c-0.997,0.002-2.029-0.202-2.747-0.48C7.188,9.148,6.972,9.04,6.821,8.943c0.056-0.024,0.12-0.05,0.193-0.075L18.648,4.43l1.733,0.654V3.172c0-0.284-0.14-0.554-0.374-0.714c-0.233-0.161-0.538-0.198-0.802-0.097L6.414,7.241c-0.395,0.142-0.732,0.312-1.02,0.564C5.111,8.049,4.868,8.45,4.872,8.896c0,0.012,0.004,0.031,0.004,0.031v17.186c0,0.008-0.003,0.015-0.003,0.021c0,0.006,0.003,0.01,0.003,0.016v0.017h0.002c0.028,0.601,0.371,0.983,0.699,1.255c1.034,0.803,2.769,1.252,4.614,1.274c0.874,0,1.761-0.116,2.583-0.427l12.796-4.881c0.337-0.128,0.558-0.448,0.558-0.809V5.341C26.128,5.057,25.988,4.787,25.754,4.626zM5.672,11.736c0.035,0.086,0.064,0.176,0.069,0.273l0.004,0.054c0.016,0.264,0.13,0.406,0.363,0.611c0.783,0.626,2.382,1.08,4.083,1.093c0.669,0,1.326-0.083,1.931-0.264v1.791c-0.647,0.143-1.301,0.206-1.942,0.206c-1.674-0.026-3.266-0.353-4.509-1.053V11.736zM10.181,24.588c-1.674-0.028-3.266-0.354-4.508-1.055v-2.712c0.035,0.086,0.065,0.176,0.07,0.275l0.002,0.053c0.018,0.267,0.13,0.408,0.364,0.613c0.783,0.625,2.381,1.079,4.083,1.091c0.67,0,1.327-0.082,1.932-0.262v1.789C11.476,24.525,10.821,24.588,10.181,24.588z'/></svg>",
                 announcement: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z'/></svg>",
                 lastmu:       "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='18' width='18' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M12.751,8.042v6.041v9.862c-0.677-0.45-1.636-0.736-2.708-0.736c-2.048,0-3.708,1.025-3.708,2.292c0,1.265,1.66,2.291,3.708,2.291s3.708-1.026,3.708-2.291V13.786l10.915-3.24v9.565c-0.678-0.45-1.635-0.736-2.708-0.736c-2.048,0-3.708,1.025-3.708,2.292c0,1.265,1.66,2.291,3.708,2.291s3.708-1.026,3.708-2.291V10.249V4.208L12.751,8.042z'/></svg>",
                 heart:        "<svg viewBox='0 0 30 30' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'>" +
                               "<path fill='rgb(" + this.textColor.rgb + ")' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>",
            };

            if (theme.customCSS)
            {
                try
                {
                    if (theme.customCSS[0] === "(")
                        theme.customCSS = "\"+".concat(theme.customCSS);
                    if (theme.customCSS[theme.customCSS.length-1] === ")")
                        theme.customCSS += "+\"";

                    this.customCSS = eval($SS.trimLineBreaks(new String('"'+theme.customCSS+'"')));
                }
                catch (e)
                {
                    alert("Error evaluating " + this.name + "'s theme.customCSS!\n" + e.message);
                    this.customCSS = theme.customCSS;
                }
            }
            else
                this.customCSS = "";

            this.preview = function()
            {
                var div = $("<div " + (this.hidden ? "hidden=true " : "") +
                        " id=theme" + this.index + " class=\'" + (($SS.conf["Selected Theme"] == $SS.conf["NSFW Theme"]) && ($SS.conf["Selected Theme"] == this.index) ? "selected nsfw" : ($SS.conf["Selected Theme"] == this.index ? "selected " : "") + ($SS.conf["NSFW Theme"] == this.index ? "nsfw " : "")) + "\'>").html("<div class=reply " +
                        "style='background-color:" + this.mainColor.hex + "!important;border:1px solid " + this.brderColor.hex + "!important;color:" + this.textColor.hex + "!important'>" +
                        "<div class=riceCheck style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;box-shadow:rgba(" + this.mainColor.shiftRGB(64) + ",.3) 0 1px;'></div>" +
                        "<span style='color:" + this.titleColor.hex + "!important; font-weight: 700 !important'>" + this.name + "</span> " +
                        "<span style='color:" + this.nameColor.hex + "!important; font-weight: 700 !important'>" + this.author + "</span>" +
                        "<span style='color:" + this.sageColor.hex + "!important'> (SAGE)</span>" +
                        "<span style='color:" + this.tripColor.hex + "!important'> !POMF.9waa</span>" +
                        "<time style='color:" + this.timeColor.hex + "'> 20XX.01.01 12:00 </time>" +
                        "<a href='javascript:;' style='color:" + this.linkColor.hex + "!important' " +
                        "onmouseover='this.setAttribute(\"style\",\"color:" + this.linkHColor.hex + "!important\")' " +
                        "onmouseout='this.setAttribute(\"style\",\"color:" + this.linkColor.hex + "!important\")'>No.22772469</a>" +
                        "<br><blockquote>Post content is right here.</blockquote>" +
                        "<p>" +
                        "<a title='Sets the SFW theme.' style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>SFW</a>" +
                        "<a title='Sets the NSFW theme.' style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>NSFW</a>" +
                        "<a title=Edit style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>Edit</a>" +
                        "<a title=Delete style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>Delete</a></p>" +
                        "<h3 class=h3nsfw>NSFW</h3>" +
                        "<h3 class=h3sfw>SFW</h3>" +
                        "<h3 class=h3both>SFW & NSFW</h3>" +
                    "</div>");

                $(div).bind("click", function()
                {
                    var $this = $(this);

                    if ($this.hasClass("selected nsfw")) return;

                    $this.parent().children(".selected").removeClass("selected");
                    $this.parent().children(".nsfw").removeClass("nsfw");
                    $this.addClass("selected nsfw");
                });

                $("a[title='Sets the SFW theme.']", div).bind("click", function(e)
                {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("selected")) return;

                    $this.parent().parent().parent().parent().children(".selected").removeClass("selected");
                    $this.parent().parent().parent().addClass("selected");
                });

                $("a[title='Sets the NSFW theme.']", div).bind("click", function(e)
                {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("nsfw")) return;

                    $this.parent().parent().parent().parent().children(".nsfw").removeClass("nsfw");
                    $this.parent().parent().parent().addClass("nsfw");
                });
                $("a[title=Delete]", div).bind("click", function(e)
                {
                    e.stopPropagation();
                    $SS.options.deleteTheme(index);
                });
                $("a[title=Edit]", div).bind("click", function(e)
                {
                    e.stopPropagation();
                    $SS.options.showTheme(index);
                });

                return div;
            }
        },




        /* HELPER METHODS */
        formatFont: function(font)
        {
            if (font === "sans-serif" || font === "monospace")
                return font;

            return "'" + font + "'";
        },
        RGBFromHex: function(hex)
        {
            var rgb = [];
            hex = parseInt(hex, 16);

            rgb[0] = (hex >> 16) & 0xFF;
            rgb[1] = (hex >> 8) & 0xFF;
            rgb[2] = hex & 0xFF;

            return rgb;
        },
        isLight: function(rgb)
        {
            return rgb[0] + rgb[1] + rgb[2] >= 400;
        },
        trimLineBreaks: function(str)
        {
            return str.replace(/(\r\n|\r|\n)/gm, "");
        },
        cleanBase64: function(b64)
        {
            return b64.replace(/^(data:image\/(?:gif|jpe?g|png);base64,)(\r\n|\r|\n)?/gmi, "");
        },
        typeofBase64: function(b64)
        {
            switch (b64.substr(0, 8))
            {
                case "PD94bWwg":
                    return "svg+xml";
                case "R0lGODlh":
                    return "gif";
                case "/9j/4AAQ":
                case "/9j/4QAY":
                    return "jpeg";
                case "iVBORw0K":
                default:
                    return "png";
            }
        },
        validBase64: function(b64)
        {
            return /^(?:data:image\/(?:gif|jpe?g|png);base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/i.test(b64);
        },
        validImageURL: function(img)
        {
            return /^https?:\/\/.+$/i.test(img);
        },
        getLocation: function(url)
        {
            var obj;

            if (typeof url === "string")
            {
                obj = document.createElement("a");
                obj.href = location.protocol + "//" + url;
            }
            else
                obj = window.location;

            var pathname = obj.pathname.substr(1).split("/");

            return {
                sub  : obj.hostname.split(".")[0],
                board: pathname[0],
                nsfw:  /^(b|d|e|f|gif|h|hr|r|s|t|u|wg|i|ic|r9k|hm|y|hc|pol|soc)$/.test(pathname[0]),
                reply: pathname[1] === "res"
            };
        }
    };
    /* END STYLE SCRIPT CLASSES */

    $SS.init();
    console.log();
})();
