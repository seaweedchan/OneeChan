// ==UserScript==
// @name          OneeChan
// @author        seaweedchan
// @description   Customize 4chan to your liking right on the page itself.
// @namespace     seaweedchan.github.com
// @version       4.3.5
// @run-at        document-start
// @include       *://www.4chan.org/
// @include       *://boards.4chan.org/*
// @include       *://sys.4chan.org/*
// @updateURL     https://raw.github.com/seaweedchan/OneeChan/stable/OneeChan.user.js
// ==/UserScript==

(function()
{
    var defaultConfig =
    {
        "--Main Rice--":                     [ "header",  "" ],
        "Layout":
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
        "Navigation Bar Position":
        [
            1, "Sets the position of the navigation bar",
            [
                { name: "Top",    value: 1 },
                { name: "Bottom", value: 2 },
                { name: "Normal", value: 3 },
                { name: "Hidden", value: 4 }
            ]
        ],
        "Custom Navigation Links":  [ true,  "Use specified links instead of showing all boards", null, true ],
        "Use Title Text for Selected Board": [ false, "Use the title specified in Nav Links for the text of a selected board", "Custom Navigation Links", true, true ],
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
        "Updater and Stats Position":
        [
            1, "Set the updater/stats position",
            [
                { name: "Fixed",       value: 1    },
                { name: "Floating",    value: 3    }
            ], true
        ],
        "Add Background to Updater/Stats": 
        [ 
            false, 
            "Adds a background over the updater and stats for positioning over other elements", 
            "Updater and Stats Position", 
            3, 
            true 
        ],
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
        "Navlinks Position":
        [
            1, "Change the location of the up and down arrow links",
            [
                { name: "Top",      value: 1 },
                { name: "Bottom",          value: 2 }
            ]
        ],
        "Disable Pages Navlinks":   [ true, "Disables pages navlinks" ],
        "--Replies--":                  [ "header",  "" ],
        "Slim Replies":             [ false,  "Reduces the size of replies" ],
        "Rounded Corners":          [ true,  "Styles a few elements to have subtly rounded coreners" ], 
        "Reveal All Spoilers":      [ false, "Makes all spoilers look as if you were hovering over them" ],
        "Recolor Even Posts":       [ false,  "Makes every other post a darker color" ],
        "Use Post Info Color":      [ false, "Separate the post info by the post info colors defined in themes", null, true ],
        "Add Shadow?":              [ true, "Adds a shadow under the post info", "Use Post Info Color", true, true ],
        "Margin Between Replies":
        [
            2, "Change the position of 4chan x backlinks",
            [
                { name: "Large",      value: 6 },
                { name: "Normal (4chan default)", value: 4 },
                { name: "Minimal",  value: 2 },
                { name: "None",  value: 0 },
                { name: "Overlapping Borders", value: -2 }
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
        "--Emoji--":                  [ "header",  "" ],
        "Emoji Icons":              [ true, "Show icons for different e-mails.\nUse one of the following words in the email field to get the appropriate emoji, case-insensitive:\n\nneko\nmadotsuki\nsega\nsakamoto\nbaka\nponyo\nrabite\narch\ncentos\ndebian\nfreebsd\nopenbsd\nfedora\ngentoo\nmint\nosx\nrhel\nsabayon\ntrisquel\nslackware\nubuntu\nwindows\ngnu\nplan" ],
        "Emoji Position":
        [
            1, "Changes the location of emoji icons",
            [
                { name: "Before", value: 1 },
                { name: "After",  value: 2 }
            ]
        ],
        "Sage Identification":
        [
            3, "Adds identification to posts that do not bump threads.",
            [
                { name: "None", value: 1 },
                { name: "Text", value: 2 },
                { name: "Icon", value: 3 }
            ]
        ],
        "--Icons--":                     [ "header",  "" ],
        "Icon Theme":
        [
            "OneeChan", "Set the icon theme",
            [
                { name: "OneeChan",       value: "OneeChan"    },
                { name: "4chan SS (Raphael)",     value: "SS"     }
            ]
        ],
        "Icon Position":
        [
            2, "Set the icon position",
            [
                { name: "Icons at top",       value: 1    },
                { name: "Below Logo",         value: 2    }
            ]
        ],
        "Menu Button Content": [ "❖", "http://url.com/link.png or ❖" ],
        "Menu Button Offset": [ "0", "" ],
        "Menu Button OHO": [ "0", "" ],
        "Menu Button OVO": [ "0", "" ],
        "Menu Button RHO": [ "0", "" ],
        "Menu Button RVO": [ "0", "" ],
        "Hide Button Content": [ "✗", "http://url.com/link.png or ✗" ],
        "Hide Button Offset": [ "0", "" ],
        "Hide Button OHO": [ "0", "" ],
        "Hide Button OVO": [ "0", "" ],
        "Hide Button RHO": [ "0", "" ],
        "Hide Button RVO": [ "0", "" ],
        "--Script Settings--":                     [ "header",  "" ],
        "Disable Ads":              [ true, "Disables ads on 4chan" ],
        "Show/Hide Menu Entry":     [ true, "Replaces the hide/show post button with a menu entry" ],
        "--Font--":                     [ "header",  "" ],
        "Font":
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
        "Nav Links":
        [
            { text: "a", title: "Anime & Manga", link: "boards.4chan.org/a/"  },
            { text: "b", title: "Random",     link: "boards.4chan.org/b/"  },
            { text: "c", title: "Anime/Cute",     link: "boards.4chan.org/c/"  },
            { text: "d", title: "Hentai/Alternative",    link: "boards.4chan.org/d/"  },
            { text: "e", title: "Ecchi",  link: "boards.4chan.org/e/" },
            { text: "f", title: "Flash",  link: "boards.4chan.org/f/" },
            { text: "g", title: "Technology",  link: "boards.4chan.org/g/" },
            { text: "gif", title: "Animated GIF",  link: "boards.4chan.org/gif/" },
            { text: "h", title: "Hentai",  link: "boards.4chan.org/h/" },
            { text: "hr", title: "High Resolution",  link: "boards.4chan.org/hr/" },
            { text: "k", title: "Weapons",  link: "boards.4chan.org/k/" },
            { text: "m", title: "Mecha",  link: "boards.4chan.org/m/" },
            { text: "o", title: "Auto",  link: "boards.4chan.org/o/" },
            { text: "p", title: "Photo",  link: "boards.4chan.org/p/" },
            { text: "r", title: "Request",  link: "boards.4chan.org/r/" },
            { text: "s", title: "Sexy Beautiful Women",  link: "boards.4chan.org/s/" },
            { text: "t", title: "Torrents",  link: "boards.4chan.org/t/" },
            { text: "u", title: "Yuri",  link: "boards.4chan.org/u/" },
            { text: "v", title: "Video Games",  link: "boards.4chan.org/v/" },
            { text: "vg", title: "Video Game Generals",  link: "boards.4chan.org/vg/" },
            { text: "w", title: "Anime/Wallpapers",  link: "boards.4chan.org/w/" },
            { text: "wg", title: "Wallpapers/General",  link: "boards.4chan.org/wg/" },
            { text: "i", title: "Oekaki",  link: "boards.4chan.org/i/" },
            { text: "ic", title: "Artwork/Critique",  link: "boards.4chan.org/ic/" },
            { text: "r9k", title: "ROBOT9001",  link: "boards.4chan.org/r9k/" },
            { text: "cm", title: "Cute/Males",  link: "boards.4chan.org/cm/" },
            { text: "hm", title: "Handsome Men",  link: "boards.4chan.org/hm/" },
            { text: "y", title: "Yaoi",  link: "boards.4chan.org/y/" },
            { text: "3", title: "3DCG",  link: "boards.4chan.org/3/" },
            { text: "adv", title: "Advice",  link: "boards.4chan.org/adv/" },
            { text: "an", title: "Animals & Nature",  link: "boards.4chan.org/an/" },
            { text: "cgl", title: "Cosplay & EGL",  link: "boards.4chan.org/cgl/" },
            { text: "ck", title: "Food & Cooking",  link: "boards.4chan.org/ck/" },
            { text: "co", title: "Comics & Cartoons",  link: "boards.4chan.org/co/" },
            { text: "diy", title: "Do-It-Yourself",  link: "boards.4chan.org/diy/" },
            { text: "fa", title: "Fashion",  link: "boards.4chan.org/fa/" },
            { text: "fit", title: "Health & Fitness",  link: "boards.4chan.org/fit/" },
            { text: "hc", title: "Hardcore",  link: "boards.4chan.org/hc/" },
            { text: "int", title: "International",  link: "boards.4chan.org/int/" },
            { text: "jp", title: "Otaku Culture",  link: "boards.4chan.org/jp/" },
            { text: "lit", title: "Literature",  link: "boards.4chan.org/lit/" },
            { text: "mlp", title: "Pony",  link: "boards.4chan.org/mlp/" },
            { text: "mu", title: "Music",  link: "boards.4chan.org/mu/" },
            { text: "n", title: "Transportation",  link: "boards.4chan.org/n/" },
            { text: "po", title: "Papercraft & Origami",  link: "boards.4chan.org/po/" },
            { text: "pol", title: "Politically Incorrect",  link: "boards.4chan.org/pol/" },
            { text: "sci", title: "Science & Math",  link: "boards.4chan.org/sci/" },
            { text: "soc", title: "Social",  link: "boards.4chan.org/soc/" },
            { text: "sp", title: "Sports",  link: "boards.4chan.org/sp/" },
            { text: "tg", title: "Traditional Games",  link: "boards.4chan.org/tg/" },
            { text: "toy", title: "Toys",  link: "boards.4chan.org/toy/" },
            { text: "trv", title: "Travel",  link: "boards.4chan.org/trv/" },
            { text: "tv", title: "Television & Film",  link: "boards.4chan.org/tv/" },
            { text: "vp", title: "Pokémon",  link: "boards.4chan.org/vp/" },
            { text: "wsg", title: "Worksafe GIF",  link: "boards.4chan.org/wsg/" },
            { text: "x", title: "Paranormal",  link: "boards.4chan.org/x/" },
            { text: "rs", title: "Rapidshares",  link: "rs.4chan.org" },
            { text: "status", title: "4chan Status",  link: "status.4chan.org" },
            { text: "q", title: "4chan Discussion",  link: "boards.4chan.org/q/" },
            { text: "@", title: "4chan Twitter",  link: "twitter.com/4chan" }
        ],
        "Nav Link Delimiter":
        [
            "&nbsp;", "Sets the character which will separate navigation links"
        ],
        "Themes"          : [],
        "Hidden Themes"   : [],
        "Selected Theme"  : 0,
        "NSFW Theme"      : 8,
        "Selected Mascots": 1,
        "Mascots"         : [],
        "Hidden Mascots"  : []
    },
    MAX_FONT_SIZE = 16,
    MIN_FONT_SIZE = 10,
    NAMESPACE     = "OneeChan.",
    VERSION       = "4.3.5",
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

        /* INPUT RICE */
        riceFile: function()
        {
            return this.each(function()
            {
                if ($(this).attr("riced")) return;

                var div = $("<div class=riceFile><div>Browse...</div><span></span>");
                $(this).attr("riced", true)
                       .bind("change", function(){ $(this).nextSibling("span").text($("#qr.dump").exists() ? "" : this.files[0].name); })
                       .bind("focus", function(){ $(this).nextSibling("div").addClass("focus"); })
                       .bind("blur", function(){ $(this).nextSibling("div").removeClass("focus"); })
                       .parent().prepend(div.prepend(this));
            });
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

                if (!(html = $("*[xmlns]")).exists())
                    if ((link = $("*[rel='stylesheet']")).exists())
                        link.each(function() { $(this).attr("href", ""); });

                if ((div = $(".pagelist>.next")).exists())
                {
                    $("body").append(div);
                    $("body>.next>form").attr("onclick","location=this.action; return false;");
                    $("body>.next>form").html("<a href='javascript:;' class='nextl' title='Next Page'>►</a>");
                    $("body>.next>span").text("►");
                };

                if ((div = $(".pagelist>.prev")).exists())
                {
                    $("body").append(div);
                    $("body>.prev>form").attr("onclick","location=this.action; return false;");
                    $("body>.prev>form").html("<a href='javascript:;' class='prevl' title='Previous Page'>◄</a>");
                    $("body>.prev>span").text("◄");
                };

                if ((div = $("body>a[style='cursor: pointer; float: right;']")).exists())
                {
                    div.addClass("sight4");
                    div.text("");
                    $("#navtopright").append(div);
                };
                if ((div = $("body>.navLinks>a[href='.././']")).exists())
                {
                    div.addClass("return");
                    $("#navtopright").prepend(div);
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

            $SS.nav.init();
            $SS.pages.init();

            $SS.menuEntries.init();

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
                    if (/^1\.[0-6].*/.test(m_VERSION))
                    {
                        /* fix old nav links that had hard coded protocols */
                        var links = $SS.Config.get("Nav Links");

                        for (var i = 0, MAX = links.length; i < MAX; ++i)
                            if (/^https?:\/\/.*/.test(links[i].link))
                                links[i].link = links[i].link.replace(/^https?:\/\//, "");

                        $SS.Config.set("Nav Links", links);
                    }

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
            css = "html, body, input, select, textarea, div.boardBanner > div.boardSubtitle, #boardLinks{font-family:"+$SS.formatFont($SS.conf["Font"])+";font-size:"+$SS.conf["Font Size"]+"px}#themeoptions #toNav li label, .trbtn, #themeoptions #toWrapper > div > p {font-family:sans-serif !important;font-size:12px !important}input:focus, textarea:focus, a{outline:none!important;-moz-outline:none!important;-moz-user-focus:none!important}[draggable]{-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none}div.post div.file .fileThumb {float: left;margin-left: 20px;margin-right: 20px;margin-top: 3px;margin-bottom: 5px}.postContainer {display: block}div.post blockquote.postMessage {display: block}div.post {margin: 4px 0}#delform div.reply:not([hidden]), div.image_expanded {display: table !important}div.thread {margin: 0px;clear: both}table.flashListing {border-spacing: 1px;margin-left: auto;margin-right: auto}div.pagelist div.pages {padding: 4px}.globalMessage {text-align: center}.prettyprint {padding: 5px !important;display: inline-block;max-height: 400px;overflow-x: auto;max-width: 600px}span.spoiler {color: rgb(0, 0, 0) !important;background: none repeat scroll 0% 0% rgb(0, 0, 0) !important}span.spoiler:hover, span.spoiler:focus {color: rgb(255, 255, 255) !important}"+(!$SS.conf["Use Post Info Color"]?"#delform div.reply{padding-top: "+($SS.conf["Slim Replies"]?4:8)+"px !important;padding-left: 10px !important}":"")+"#delform .sideArrows[hidden], #delform div.post[hidden] {display: none !important}"+(!$SS.conf["Disable Ads"]?"img.middlead {width: 468px;height: 60px;max-width: 100%;position: relative !important;top: 30px !important;margin-bottom: 10px !important}div.center {margin: auto;text-align: center}":"")+"#delform hr {margin-bottom: 6px !important;margin-top: 10px !important}#qr input:focus::-webkit-input-placeholder, #qr textarea:focus::-webkit-input-placeholder {color: transparent !important}#qr input:focus:-moz-placeholder, #qr textarea:focus:-moz-placeholder {color: transparent !important}input:not([disabled]):active,input:focus,.webkit select:focus,textarea:focus{border:1px solid "+$SS.theme.brderColor.hex+"!important;outline:1px solid "+$SS.theme.linkColor.hex+"!important;outline-offset:-2px!important}input::-moz-focus-inner{border:0;padding:0}::selection{background:"+$SS.theme.linkColor.hex+";color:#"+($SS.theme.linkColor.isLight?"000":"fff") +"!important}::-moz-selection{background:"+$SS.theme.linkColor.hex+";color:#"+($SS.theme.linkColor.isLight?"000":"fff") +"!important}hr{border:0!important;border-top:1px solid rgba("+$SS.theme.brderColor.rgb+",.9)!important;clear:left;margin:.3em 0!important}h1,h2,h3,h4,h5{margin:.4em 0!important}b,h3,.postInfo .name,.postInfo .subject{font-weight:"+($SS.conf["Bitmap Font"]?4:7)+"00!important}a,span>a.replylink,"+(!$SS.conf["Custom Navigation Links"]?"#boardNavDesktop>a,":"")+"blockquote a.quotelink,span.typ, span.atn{"+(!$SS.conf["Underline Links"]?"text-decoration:none;":"")+"color:"+$SS.theme.linkColor.hex+"!important;font-weight:normal!important;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s}.filtered {text-decoration:line-through"+($SS.conf["Underline Links"]?" underline":"")+"!important}a:hover,"+(!$SS.conf["Custom Navigation Links"]?"#boardNavDesktop>a:hover,":"")+"div.post div.postInfo span~span.postNum a:hover,.quotelink:hover,.backlink:hover,span.lit,.useremail>.name:hover{color:"+$SS.theme.linkHColor.hex+"!important;text-shadow:rgba("+$SS.theme.linkHColor.rgb+",.2) 0 0 2px!important}.spoiler a{-webkit-transition:none;-moz-transition:none;-o-transition:none}#navtopright .settingsWindowLink {position: fixed !important;background-image: url('');top: "+(2+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?106:19):0)))+"px !important;"+$SS.conf["Sidebar Position String"]+": 24px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important;opacity: .6 !important;height: 14px !important;width: 15px !important;z-index: 5;font-size: 0 !important;color: transparent !important}#navtopright .settingsWindowLink:hover {  opacity: 1 !important;  cursor: pointer}a:not([href]),#playerDiv a,#playerDiv a:hover,a[href='javascript:;'],#navtopright #settingsWindowLink,#navtopright .settingsWindowLink::before,#menu>.entry{color:"+$SS.theme.jlinkColor.hex+"!important}.nameBlock>span.name,span.com,#delform[action='https://sys.4chan.org/f/up.php'] .name{color:"+$SS.theme.nameColor.hex+"!important}.nameBlock>span.postertrip,span.tag,#delform[action='https://sys.4chan.org/f/up.php'] .postertrip{color:"+$SS.theme.tripColor.hex+"!important}.postMessage .quote,span.str, span.atv{color:"+$SS.theme.quoteColor.hex+"!important}a.forwardlink{color:"+$SS.theme.linkColor.hex+"!important}.dateTime{color:"+$SS.theme.timeColor.hex+"!important}.spoiler:not(:hover),.spoiler:not(:hover) .quote,.spoiler:not(:hover) a{color:#000!important}.postInfo .subject,.replytitle,span.kwd,#delform[action='https://sys.4chan.org/f/up.php'] .subject{color:"+$SS.theme.titleColor.hex+"!important}a.linkmail[href='mailto:sage'],a.linkmail[href='mailto:sage']:hover,#qr .warning,span.lit,span[style='color:#F00000'],span[style='color:#FF0000;font-weight:normal'], #qr #errmsg{color:"+$SS.theme.sageColor.hex+"!important;text-shadow:none!important}.reply,.hidden_thread,#fs_data tr[style],.stub>a:first-child,.webkit option,div[id^=jsMath],#playerDiv,#playerListMenu,#playerListItemMenu,#playerSettings,#jsMath_float,.deleteform,#qr .warning,table.flashListing tr:nth-of-type(2n+1){background:rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.replyOp+")!important}"+($SS.conf["Recolor Even Posts"]?".replyContainer:nth-of-type(even) > div:not(.qphl):not(.sideArrows):not(.lastmuInfo) {background-color:rgba("+$SS.theme.mainColor.rgb+", "+($SS.theme.mainColor.isLight?"0.7":"0.5") +")!important;border:1px solid rgba("+$SS.theme.brderColor.rgb+", 0.8) !important}":"")+".globalMessage, #boardNavDesktopFoot{background:"+$SS.theme.mainColor.hex+"!important}.boxcontent, .top-box, .left-box, .box-outer, .yui-skin-sam .yuimenu .bd{background:"+$SS.theme.mainColor.hex+"!important}.box-outer, .yui-skin-sam .yuimenu .bd{border: 1px solid "+$SS.theme.brderColor.hex+" !important}#ft li, #recent-images li, .boxbar, body:not([class]) .menubutton, .postContainer>.op:target{background: none !important;border: none !important}#optionsmenu:not([style=='visibility:hidden;']), #filtermenu:not([style='visibility: hidden;']) {top: 24px !important}table.flashListing .highlightPost {background: none !important}table.flashListing .highlightPost::after {content: '●';color: rgb(214, 149, 149);position: relative !important;left: 12px !important;margin-left: -10px !important}.flashListing > tbody{padding-top: 200px !important}.flashListing td:not(:last-of-type):not(.postblock) {border-right: 1px solid "+$SS.theme.brderColor.hex+" !important}.flashListing td {padding-left: 4px !important;padding-right: 4px !important;text-align: center !important}#delform[action='https://sys.4chan.org/f/up.php'], #delform[action='https://sys.4chan.org/f/up.php'] .postblock {background: none !important;border: none !important;box-shadow: none !important}html[xmlns] > body {margin-top: 100px !important}#ft ul {border-top: none !important}#ft li.first {border-left: none !important}#ft li.current, #ft li.fill {background: none !important;border: none !important}.mOption.header {cursor: auto !important;font-size:"+$SS.conf["Small Font Size"]+"px;font-family:"+$SS.formatFont($SS.conf["Font"])+"!important;font-weight: bold !important}.mOption.header>span {margin: auto;width: 100%;display: block;text-align: left;font-weight: bold !important;color:"+$SS.theme.titleColor.hex+"!important}"+($SS.conf["Pages Position"]===2?".pagelist,":"")+"#boardNavDesktop{background:rgba("+$SS.theme.bgColor.rgb+","+$SS.theme.navOp+")!important}"+(($SS.conf["Updater and Stats Position"]===2) && ($SS.conf["Add Background to Updater/Stats"])?"#updater .move, #stats {background:rgba("+$SS.theme.bgColor.rgb+",0.7)!important}":"")+"#id_css::after {width: 262px !important;position: fixed !important;height: 21px !important;top: -2px !important;"+$SS.conf["Sidebar Position String"]+": 0px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important;background-color:rgba("+$SS.theme.bgColor.rgb+","+$SS.theme.navOp+")!important;content: '';display: block !important;opacity: 1 !important;z-index: 1}a,button,input[type=checkbox],input[type=radio],input[type=button],input[type=submit],#themeoptions #tMascot div,#themeoptions #tThemes>div,.pointer,.riceCheck,.trbtn{cursor:pointer}form[name=post] tr:nth-of-type(3)>td:nth-of-type(3),img[alt=Closed],img[alt=Sticky],.deleteform,#boardNavDesktop,#navtopright,#imageType+label,#qr>form #spoilerLabel,.preview>label,.remove,.mPagelist .pages span,div.navLinks,div.navLinks a,label#prefetch{color:transparent!important;font-size:0!important}#qr>form>div:first-child .field:not(#dump):focus+span,input:not([type=submit]),select,select option,textarea,#navlinks,#themeoptions label:not(.header),#themeoptions label:not(.header)>span,#themeoptions #tMascot div a,#updater label,#updater span,#boardNavDesktopFoot,#boardNavDesktopFoot a,#boardNavDesktop>a:not(#lastmuSettingsWindowLink):not(.current){font:"+$SS.conf["Small Font Size"]+"px "+$SS.formatFont($SS.conf["Font"])+"!important}"+($SS.conf["Custom Navigation Links"]?"#boardNavDesktop>a, #boardNavDesktop>select{color:transparent!important;font-size:0!important}":"")+"#qr>form #spoilerLabel::after,button,form[name=post] input[name=email]+label,form[name=post] #com_submit+label,input[type=button],input[type=submit],#stats .move,#updater span,#updater .move,#stats span,.deleteform::after,.preview>label::after,.riceFile div,label#prefetch::after{font-size:"+($SS.conf["Bitmap Font"]?$SS.conf["Font Size"]:12)+"px!important}.globalMessage::before,#qr>.move,#themeoptions #tMascot div a,#themeoptions #tThemes>div p a,a.useremail[href='mailto:sage']:last-of-type::before,.container::before,.deleteform::before,.riceFile span,.trbtn,#SSVersion,#updatelink,#changeloglink,.linkdelimiter,#issueslink{font-size:"+($SS.conf["Bitmap Font"]?$SS.conf["Font Size"]:12)+"px!important}"+(!($SS.conf["Show Board Name"]) || ($SS.conf["Sidebar Position"]===3)?".boardBanner .boardTitle,":"") +(!($SS.conf["Show Text Board"]) || ($SS.conf["Sidebar Position"]===3)?".boardBanner .boardSubtitle,":"") +($SS.conf["Post Form"]!==4?"#qr>.move .close,":"") +($SS.conf["Post Form"]===3?"#qr>.move #autohide,#qr>.move .riceCheck,":"") +($SS.conf["Pages Position"]===4?".pages,":"" ) +($SS.conf["Disable Ads"]?"div.center,body > div.center:not(:nth-of-type(2)),img.topad,img.bottomad,img.middlead,form[action='https://sys.4chan.org/f/post'] ~ div[style='text-align: center'],form[action='https://sys.4chan.org/f/up.php']>div[style='text-align: center;'],":"div.center img:not(.middlead)," )+(($SS.conf["Pages Position"]===3) || ($SS.conf["Pages Position"]===4)?".pages,":"" ) +($SS.conf["Menu-Only Mode"]?".postInfo>input[type=checkbox],.postInfo>.riceCheck,.deleteform,":"") +($SS.conf["Show/Hide Menu Entry"]?".hide_thread_button:not(.hidden_thread),.hide_reply_button:not(.stub),":"")+"#boardNavDesktop>select,#imgControls .riceCheck,[hidden],.hidden:not(.postContainer),body>hr,body>form[name=post],.navLinksBot,a[href='#bottom'],.stylechanger,#absbot,#logo,#copyright,body>div.closed,.absBotText,#navbotr,.postingMode,.sideArrows:not(.hide_reply_button),#delform>hr,"+($SS.conf["Custom Navigation Links"]?"#boardNavDesktop>a,":"")+"body>.closed>br,.board>hr:nth-last-child(2),#imageExpand,.hidden_thread+div.opContainer,.stub+div+div.post,#navtopright a:not([class]):not(#lastmuSettingsWindowLink),#first-run,.mobile"+($SS.conf["Pages Position"]===3?":not(.mPagelist)":"")+",.mobileinline,iframe[src='about:blank']{display:none!important}a.summary,a.summary:hover,blockquote>.abbr,.globalMessage>b,.globalMessage, .globalMessage strong, .globalMessage h1, .globalMessage h2, .globalMessage h3,.globalMessage span,button,div,div.autohide>a,form[name=delform],form[name=post] input[name=email]+label,form[name=post] #com_submit+label,input:not(.jsColor),.webkit select,textarea,tr,#navtopright>a:last-child::before,#qr>.move,#qr>form #spoilerLabel::after,#stats span,#themeoptions #toNav li label.selected,#themeoptions #toNav li label:hover,.deleteform::before,.deleteform::after,.summary,.preview>label::after,.reply,.replymode,#delform[action='https://sys.4chan.org/f/up.php'] .postblock,.mPagelist .pages span strong,#boardLinks>a.selectedBoard,#boardNavDesktop>a.current,#boardNavDesktopFoot>a.current,table.postForm > tbody > tr > td:first-child,table.exif td,label#prefetch::after,strong[style='color:#000'] {color:"+$SS.theme.textColor.hex+"!important}body,input,select,textarea,.replyContainer>.reply,.hidden_thread,.postInfo,.stub>a:first-child,.thread.stub,.riceFile,.riceCheck,.boardBanner .boardTitle,.ys_playerContainer,#qr,#qr>form>.captchaimg>img,#themeoptions #tMascot div,#themeoptions #tThemes .reply,#themeoptions #tNavLinks .navlink .handle{box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}"+($SS.conf["Add Background to Updater/Stats"]?"#updater .move, #stats {border-radius: 1px !important}":"")+""+($SS.conf["Rounded Corners"]?"#delform div.reply,div.reply.highlight,#qp,#delform .postContainer,.inline div.reply,.box-outer,#prefetch,"+($SS.conf["Post Form"]===4?"#qr,":"")+".yui-skin-sam .yuimenu .bd {border-radius: 3px !important}.globalMessage, #boardNavDesktopFoot {border-radius: 3px !important}"+($SS.conf["Post Form"]!==4?"#qr":"")+"{border-radius: "+($SS.conf["Sidebar Position"]===2?"0 3px 0 0px":"3px 0 0 0")+" !important}.deleteform {border-radius: "+($SS.conf["Sidebar Position"]===2?"0 3px 3px 0px":"3px 0 0 3px")+" !important}"+(!$SS.conf["Sidebar Position"]===2?"#id_css::after{border-radius: 0px 0px 0px 2px !important}":"")+"":"")+"input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:rgba("+$SS.theme.textColor.rgb+",.4)!important}input:-moz-placeholder,textarea:-moz-placeholder{color:rgba("+$SS.theme.textColor.rgb+",.4)!important}html, body {background:"+$SS.theme.bgImg.get()+$SS.theme.bgColor.hex +"!important}"+(($SS.conf["Hide Filtered 4chan X Links"]===1) || ($SS.conf["Hide Filtered 4chan X Links"]===3)?".filtered.backlink{display: none !important}":"")+""+(($SS.conf["Hide Filtered 4chan X Links"]===2) || ($SS.conf["Hide Filtered 4chan X Links"]===3)?".quotelink.filtered{display: none !important}":"")+"body{margin:0px "+((!$SS.bHideSidebar  && $SS.conf["Sidebar Position"]===1)?"261px 0 0" :(!$SS.bHideSidebar && $SS.conf["Sidebar Position"]!==3?"0 0 261px "+$SS.iSidebarSize+"px":"0 0 0"))+"!important;margin-bottom:23px!important;"+($SS.conf["Sidebar Position"] == 2?"margin-left: 261px !important":"")+";padding:0!important;"+((($SS.conf["Navigation Bar Position"]===2) || ($SS.conf["Navigation Bar Position"]===4)) && ($SS.conf["Pages Position"]!==2)?"margin-top: -15px !important;":"")+"}"+($SS.conf["Navigation Bar Position"]!==1?"#boardLinks":"")+" {padding-"+$SS.conf["Sidebar Position oString"]+": "+($SS.conf["Non-Sidebar Margin"]!==999?""+ $SS.conf["Non-Sidebar Margin"]+"":""+$SS.conf["Non-Sidebar Custom Margin"]+"")+"px !important;padding-"+$SS.conf["Sidebar Position String"]+":  "+($SS.conf["Sidebar Side Margin"]!==999?""+ $SS.conf["Sidebar Side Margin"]+"":""+$SS.conf["Sidebar Side Custom Margin"]+"")+"px !important}div[style^='text-align: center'] img{margin-top: 30px !important}script+hr+div.center img {margin-top: -10px !important}.board+div.center img {margin-top: 10px !important}div.center a{opacity: 0.2 !important}div.center img{-webkit-transform:scale(.85);-moz-transform:scale(.85);-0-transform:scale(.85)}div.center a:hover{opacity: 1.0 !important}"+(!$SS.bHideSidebar ?(($SS.conf["Sidebar Position"]!==3) && $SS.conf["SS-like Sidebar"]?"body::before {background:rgba("+$SS.theme.mainColor.shiftRGB(-18)+",.8);border-"+$SS.conf["Sidebar Position oString"]+":2px solid rgba("+$SS.theme.mainColor.rgb+",.9);box-shadow:"+($SS.conf["Sidebar Position"]!==2?"inset ":"")+$SS.theme.brderColor.hex+" 1px 0 0,"+($SS.conf["Sidebar Position"]===2?"inset ":"")+$SS.theme.brderColor.hex+" -1px 0 0;content:'';height:100%;width:261px;position:fixed;top:"+($SS.conf["Navigation Bar Position"]===1?0:-19)+"px!important}":"") +($SS.conf["Sidebar Position"]!==3 || $SS.conf["Show Mascot"]?"body::after{background:"+$SS.mascot.img.get()+";content:'';height:100%;width:"+($SS.mascot.overflow?"100%":"26"+($SS.conf["SS-like Sidebar"]?0:3)+"px")+";"+(!$SS.mascot.small?"background-size:contain;":"")+"bottom:"+($SS.conf["Navigation Bar Position"]!==2?0:-1)+"px!important;margin-bottom:"+$SS.mascot.offset+"px;position:fixed;z-index:2;pointer-events: none !important;"+($SS.conf["Sidebar Position"]===2 && $SS.mascot.flip?"-webkit-transform:scaleX(-1);-moz-transform:scaleX(-1);-o-transform:scaleX(-1);":"")+"}":""):"")+""+($SS.conf["Sidebar Position"]===2 && $SS.mascot.flip?"label[title='Allows the mascot to be shown outside the sidebar, ignores `Prevent stretching` option']::after {content: 'Disabled from left sidebar+flip mascot';color: red;font-size: 12px}":"")+"body::after,"+($SS.conf["Post Form"]!==4?"#qr," :"")+"body::before{"+$SS.conf["Sidebar Position String"]+":0!important;"+$SS.conf["Sidebar Position oString"]+":auto!important}"+($SS.conf["Layout"]===2?".op,":"")+"#jsmath_button,#jsMath_panel,#jsMath_float,#options ul,#playerDiv,#playerListMenu,#playerListItemMenu,#playerSettings,#qr,#themeoptions #toWrapper,.reply,.hidden_thread,.stub>a:first-child{border:1px solid "+$SS.theme.brderColor.hex+"!important}.deleteform{border-"+$SS.conf["Sidebar Position oString"]+":1px solid "+$SS.theme.brderColor.hex+"!important;border-bottom:1px solid "+$SS.theme.brderColor.hex+"!important}.globalMessage, #boardNavDesktopFoot {border: 1px solid "+$SS.theme.brderColor.hex+"!important}"+($SS.conf["Sidebar Position"]===3?".globalMessage,":"")+"#updater{border-right:1px solid "+$SS.theme.brderColor.hex+"!important}#delform{margin-top:18px!important}"+($SS.conf["Sidebar Position"]===2?".postingMode ~ #delform {margin-top: 10px !important}":"")+".closed~#delform{margin-top:0!important}.deleteform,#fs_data td{border-top:1px solid "+$SS.theme.brderColor.hex+"!important}"+($SS.conf["Reveal All Spoilers"]?"div.post > blockquote .spoiler{color: white !important}div.post > blockquote .spoiler .quote{color:"+$SS.theme.quoteColor.hex+"!important}div.post > blockquote .spoiler a{color:"+$SS.theme.linkColor.hex+"!important}":"")+"#jsmath_button{bottom:auto!important;left:0!important;top:1px!important;right:auto!important}#jsMath_panel{bottom:auto!important;left:1em!important;top:1.75em!important;right:auto!important}"+($SS.conf["Auto Hide Thread Watcher"]?"#watcher::before{top: "+(2+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?106:19):0)))+"px !important}#watcher:hover{top: "+(17+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?104:19):0)))+"px !important}":"#watcher{top: "+(20+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?104:19):($SS.conf["Updater and Stats Position"]===1?($SS.conf["Show Logo"]?102:17):0))))+"px !important}#watcher>.move {text-decoration: none !important;cursor: auto !important}#watcher>.move:only-child {height: 16px !important;text-align: center !important}#watcher>.move:only-child::after {content: 'Click the hearts to watch threads:  ' url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].watcher+"') !important;font-size: 12px !important;color: "+$SS.theme.textColor.hex+" !important;text-decoration: none !important;opacity: 0.4}")+"#watcher{position: fixed !important}#watcher > div{  max-width: 249px !important;  width: 249px !important;  overflow: hidden !important}#watcher .move{  font-size: 0px !important;  height: 0px !important}#watcher::before{height: 9px !important;font-size: 12px !important;position: fixed !important;"+$SS.conf["Sidebar Position String"]+": 65px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important;min-width: 15px !important;max-width: 15px !important;opacity: 0.6;z-index: 5;"+(!$SS.conf["Auto Hide Thread Watcher"]?"display: none !important;":"")+"}#watcher{  z-index: 5;  padding-left: 0px !important}#watcher:hover::before{  opacity: 1;  cursor: pointer}#watcher {position: fixed !important;"+($SS.conf["Auto Hide Thread Watcher"]?"top: -1000px !important;bottom: auto !important;":"")+"  "+($SS.conf["Sidebar Position"]!==2?"   right: 2px !important;left: auto !important;  ":"   right: auto !important;left: 2px !important;  ")+"width: 25"+($SS.conf["SS-like Sidebar"]?5:8)+"px !important;padding-bottom: 4px !important}#watcher:hover{position: fixed !important;z-index: 99 !important}#boardNavDesktopFoot::after {top: "+(2+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?106:19):0)))+"px !important;border: none !important;position: fixed !important;"+$SS.conf["Sidebar Position String"]+": 45px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important;z-index: 6 !important;opacity: 0.6}#boardNavDesktopFoot:hover::after {opacity: 1;cursor: pointer}#boardNavDesktopFoot {visibility: visible !important;position: absolute !important;overflow-y: scroll !important;top: -1000px !important;bottom: auto !important;width: 238px !important;color: transparent !important;padding: 3px 10px 35px 10px !important;height: 50px !important;text-align: center !important;word-spacing: -3px !important}#boardNavDesktopFoot:hover {z-index: 99 !important;top: "+(17+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?105:19):0)))+"px !important;position: fixed !important}"+($SS.conf["Slideout Navigation Type"]===1?"#boardNavDesktopFoot a {position: relative;z-index: 1;display: block !important;margin-bottom: -15px !important}#boardNavDesktopFoot {height: 300px !important;padding-bottom: 0px !important;padding-top: 0px !important;word-spacing: 0px !important;text-rendering: geometricPrecision !important}#boardNavDesktopFoot a[href*='/a/'] {margin-top: -12px !important}#boardNavDesktopFoot a::after{content: ' - ' attr(title) !important;font-size: 12px !important}#boardNavDesktopFoot a[href*='//boards.4chan.org/']::after,#boardNavDesktopFoot a[href*='//rs.4chan.org/']::after{content: '/ - ' attr(title) !important;font-size: 12px !important}#boardNavDesktopFoot a[href*='//boards.4chan.org/']::before,#boardNavDesktopFoot a[href*='//rs.4chan.org/']::before {content: '/' !important;font-size: 12px !important}#boardNavDesktopFoot {  "+$SS.conf["Sidebar Position String"]+": 2px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important}":"#boardNavDesktopFoot {overflow-y: hidden !important;  "+$SS.conf["Sidebar Position String"]+": 20px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important}#boardNavDesktopFoot:hover {  "+$SS.conf["Sidebar Position String"]+": 2px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important}")+""+($SS.conf["Layout"]!==2?"div.postContainer, div.replyContainer{position: relative !important}.sideArrows a, .sideArrows span{position: static !important;width: 20px !important;height: 10px !important}.sideArrows{width: 20px !important;padding-top: 1px !important}div.reply .report_button, .sideArrows, div.reply .menu_button{opacity: 0 !important}form .replyContainer:not(:hover) div.reply .report_button, form .replyContainer:not(:hover) div.reply .menu_button, form .replyContainer:not(:hover) .sideArrows {-webkit-transition: opacity .3s ease-out 0s !important;-moz-transition: opacity .3s ease-out 0s !important;-o-transition: opacity .3s ease-out 0s !important}  form .replyContainer:hover div.reply .report_button, form .replyContainer:hover div.reply .menu_button, form .replyContainer:hover .sideArrows{opacity: 1 !important;-webkit-transition: opacity .3s ease-in .5s !important;-moz-transition: opacity .3s ease-in .5s !important;-o-transition: opacity .3s ease-in .5s !important} div.reply input:checked{opacity: 1 !important}div.reply .report_button, div.reply .menu_button{position: absolute !important;right: 33px !important;right: 13px !important;top: "+($SS.conf["Use Post Info Color"]?5:7)+"px !important}.thread > .hide_thread_button:not(.hidden_thread) {position: absolute !important;top: 0px !important;right: 31px !important;opacity: 0.6 !important}.thread > .opContainer > .op > .postInfo > .menu_button{position: absolute !important;top: 1px !important;right: 15px !important;opacity: 0.6 !important}.thread > .opContainer > .op > .postInfo > .menu_button:hover, .thread > .hide_thread_button:not(.hidden_thread):hover {opacity: 1.0 !important}.hidden_thread {padding: 4px !important;padding-bottom: 6px !important}"+($SS.conf["Sidebar Position"]!==1?".subMenu {left: -121% !important;width: 120px !important}":"")+".hidden_thread > .menu_button {position: absolute !important;right: 18px !important;font-size: 0px !important;top: 7px !important}.hidden_thread > a:not([class]) > span, .stub > a:not([class]) > span {float: right !important;margin-right: 25px !important;font-size: 14px !important;text-align: center !important}.sideArrows a{position: absolute !important;right: 27px !important;top: "+($SS.conf["Use Post Info Color"]?5:7)+"px !important}"+($SS.conf["Sidebar Position"]===3?".thread:first-of-type>.hide_thread_button{right: 256px !important;top: 1px !important}.thread:first-of-type>.opContainer>.op>.postInfo>.menu_button{right: 240px !important;top: 2px !important}.thread:first-of-type>.hidden_thread>.menu_button{right: 240px !important;top: 5px !important}.thread:first-of-type>.hidden_thread>a:not([class])>span {position: relative !important;right: 226px !important;bottom: 2px !important}.thread:first-of-type>.opContainer>.op>.postInfo { margin-top: 7px !important; }":"")+"":".sideArrows {float: left !important; }")+".thread{clear:both;margin:1px"+($SS.conf["Layout"]===1?($SS.conf["Sidebar Position"]!==2?" 0 1px 1px":" 1px 1px 0"):($SS.conf["Layout"]===2?" 0 1px":""))+"!important;overflow:visible!important;padding:0!important;"+($SS.conf["Layout"]!==3?"padding-"+$SS.conf["Sidebar Position String"]+":2px!important;":"")+"position:relative;border-radius:"+($SS.conf["Layout"]!==3?($SS.conf["Sidebar Position"]!==2?"2px 0 0 2px":"0 2px 2px 0"):"2px")+"}#addMascot>label::after,#qr>form>div::after,#updater div>label::after,"+($SS.conf["Layout"]!==2?".thread .op::after,":"")+".thread::after{clear:both;content:'';display:block}.op{border:0!important;position:relative;border-radius:"+($SS.conf["Layout"]!==3?($SS.conf["Sidebar Position"]!==2?"2px 0 0 2px":"0 2px 2px 0"):"2px")+"}.hide_thread_button:not(.hidden_thread){float: left !important;margin-right: 5px !important;margin-left: 5px !important;z-index: 2}html .inline .report_button, html .inline .menu_button {opacity: 1 !important;position: relative !important;top: -2px !important;right: 1px !important}"+($SS.conf["Layout"]===1 ?($SS.conf["Show/Hide Menu Entry"]?".hidden_thread>.menu_button,":"")+".thread>a.hide_thread_button>span{right:2px!important}":"")+"form[name=delform]{"+($SS.conf["Layout"]!==2?""+($SS.conf["Layout"]===1?"border-"+$SS.conf["Sidebar Position String"]+":0!important;":""):"")+"margin:"+($SS.conf["Layout"]!==3 ?($SS.conf["Sidebar Position"]!==2?"0 "+($SS.conf["Sidebar Side Margin"]!==999?""+ $SS.conf["Sidebar Side Margin"]+"":""+$SS.conf["Sidebar Side Custom Margin"]+"")+"px 0 "+($SS.conf["Non-Sidebar Margin"]!==999?""+ $SS.conf["Non-Sidebar Margin"]+"":""+$SS.conf["Non-Sidebar Custom Margin"]+"")+"px" :"0 "+($SS.conf["Non-Sidebar Margin"]!==999?""+ $SS.conf["Non-Sidebar Margin"]+"":""+$SS.conf["Non-Sidebar Custom Margin"]+"")+"px 0 "+($SS.conf["Sidebar Side Margin"]!==999?""+ $SS.conf["Sidebar Side Margin"]+"":""+$SS.conf["Sidebar Side Custom Margin"]+"")+"px") :"0 "+(Math.min($SS.conf["Non-Sidebar Margin"], 40) / 2 * ($SS.conf["Non-Sidebar Margin"] < 10?3:1))+"% 0")+";padding:0!important;position:relative;border-radius:"+($SS.conf["Layout"]!==3?($SS.conf["Sidebar Position"]!==2?"4px 0 0 4px":"0 4px 4px 0"):"4px")+"}"+(($SS.conf["Layout"]===3) && !($SS.conf["Show Logo"])?".webkit form[name=delform] {z-index: 1}":"")+".thread>div>.post{"+($SS.conf["Layout"]!==2?"width:100% !important;":"")+"}.thread:last-child>.postContainer:last-child>.reply{margin-bottom:1px!important}"+($SS.conf["Menu-Only Mode"]?".postInfo{padding:0 3px!important}":"" )+".sideArrows{margin-left:0!important;margin-right:0!important}.postContainer,.replyContainer{margin:1px 0 0!important}.replyContainer{margin-bottom:"+$SS.conf["Margin Between Replies"]+"px !important}.threadContainer{border-left:1px solid rgba("+$SS.theme.brderColor.shiftRGB(-16)+", .4)!important;padding-left:5px!important}div.post{margin:2px 0!important}.favicon {padding-top: 15px !important;width: 15px !important;height: 0px !important;display: inline-block !important;margin-right: 5px !important;background-repeat: no-repeat !important;position: relative !important;top: 4px !important}.favicon[src^='data'] {opacity: 0."+($SS.theme.bgColor.isLight?3:2)+" !important}.favicon[src$='ico'] {opacity: 0.8 !important}"+($SS.conf["Layout"]!==2?"hr{margin:0!important}div.post:not(#qp):not([hidden]):not(#exlinks-options){margin:0!important;width:100% !important}":"" )+".identifyIcon{margin:0!important;vertical-align:top}.report_button{background-position:0 -16px;vertical-align:top!important;"+($SS.conf["Layout"]!==2?"position:absolute;right:12px;top:0;":"")+"}.inline .report_button,#qp .report_button{position:static!important;vertical-align:middle!important}a.hide_thread_button>span,#settingsBox,.replyContainer>.reply input[type=checkbox],.replyContainer>.reply .riceCheck,.container,.hidden_thread a:first-child>span,.hide_reply_button,.report_button{z-index:2!important}.inline{background:none!important;border:0!important;overflow:visible!important}.inline div.post.reply{background:rgba("+$SS.theme.mainColor.shiftRGB(-16)+",.8)!important;border:1px solid rgba("+$SS.theme.brderColor.rgb+",.4)!important;padding:5px!important;border-radius:3px!important;box-shadow:rgba("+$SS.theme.mainColor.shiftRGB(16)+",.9) 0 1px 3px;overflow:visible!important;position:relative;z-index:10!important;width:auto!important}"+($SS.conf["Layout"]!==2 ?".stub>.menu_button{position:absolute;right:16px;top:6px;z-index:3}.stub > a:not([class]) > span {position: relative !important;bottom: 1px !important}":"")+"a.hide_thread_button>span,.hide_reply_button:not(.stub)>a:first-child>span{background-position:-80px 0}.stub>a:first-child>span,.hidden_thread a:first-child>span{background-position:-80px -16px;vertical-align:middle!important;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out}.remove{background-position:-16px -16px!important}.remove,#boardNavDesktop>a{padding:0!important}.menu_button{background-position:-32px -16px!important;display: inline !important}.remove,.hide_reply_button:not(.stub)>a:first-child>span,a.hide_thread_button>span,.hidden_thread a:first-child>span,.hidden_thread>span,.stub>a:first-child>span{-moz-transform:scale(.65);-webkit-transform:scale(.65)}.remove{margin:0!important;text-indent:-9999px!important}.remove:hover{opacity:.75}.replyContainer>.reply>img{vertical-align:middle}.replyContainer>.reply>span{line-height:16px!important}.replyContainer>.reply,.stub>a:first-child,.hidden_thread,{padding:5px!important;"+($SS.conf["Layout"]!==2?"width:100% !important;":($SS.conf["Sidebar Position"]!==2?"margin-right:1px!important;":""))+"border-radius:"+($SS.conf["Layout"]!==3 && !($SS.conf["Sidebar Position"]!==2 && $SS.conf["Layout"]===2) ?($SS.conf["Sidebar Position"]!==2?"2px 0 0 2px":"0 2px 2px 0"):"2px")+"}"+(!$SS.conf["Use Post Info Color"]?".replyContainer>.reply{padding-top:2px!important}":"")+".highlightPost,.qphl,.replyContainer>.post:target,html .reply:target,html .reply.highlight{background:rgba("+$SS.theme.mainColor.shiftRGB(4, true)+","+$SS.theme.replyOp+")!important;border:1px solid "+$SS.theme.linkColor.hex+"!important}.opContainer.qphl{background: none !important;border:1px solid "+$SS.theme.linkColor.hex+"!important}.opContainer:not(.qphl) {border:1px solid transparent !important}.stub{margin:1px 0 0 "+($SS.conf["Layout"]===2 && !$SS.conf["Show/Hide Menu Entry"]?16:0)+"px!important;padding:0!important}.thread.stub{margin:1px 0px!important;padding:0 "+($SS.conf["Sidebar Position"]!==2?"0 0 1px":"1px 0 0")+"!important}.hidden_thread,.stub>a:first-child{display:"+($SS.conf["Layout"]===2?"inline-":"")+"block;padding:5px}.container{"+($SS.conf["Backlinks Position"]!==1?"bottom:2px;position:absolute;"+($SS.conf["Backlinks Position"]===2?"right":"left")+":2px;z-index:1;":"")+"margin-left:-2px}#qp .container {bottom: 0px !important}#qp div.reply {display: table !important}"+($SS.conf["Backlinks Position"]!==1?".container::before{color:rgba("+$SS.theme.textColor.rgb+",.4)!important;content:'REPLIES:';padding-right:2px}":"")+".container>a{color:"+$SS.theme.blinkColor.hex+"!important}input[type=checkbox]:active,input[type=checkbox]:focus,.qphl{outline:none!important}.qphl {box-shadow: none !important}#qp{background:rgb("+$SS.theme.mainColor.shiftRGB(-8)+")!important;border:1px solid rgba("+$SS.theme.linkColor.rgb+",.4)!important;margin:0 10px!important;max-width:65%;padding:5px;position:fixed!important;z-index:15!important;border-radius:3px}#qp .reply{background:none!important;border:none!important;width:auto!important}a.summary{display:inline-block;line-height:16px;margin:-4px 10px 0!important;padding:0 6px;border-radius:3px}"+(!$SS.conf["Menu-Only Mode"]?".deleteform{bottom:0px!important;height:21px;overflow:hidden;padding:2px 2px 0 18px!important;position:fixed;"+($SS.conf["Sidebar Position"]===3?"right:"+($SS.conf["Post Form"]===4?0:262) +"px;" :$SS.conf["Sidebar Position String"]+":260px;")+"width:0;white-space:nowrap;z-index:12!important;"+($SS.conf["Layout"]!==1?"border-radius:"+($SS.conf["Sidebar Position"]!==2?"3px 0 0 0":"0 3px 0 0"):"")+";-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;border-"+$SS.conf["Sidebar Position String"]+": none !important}.deleteform:hover{"+($SS.conf["Sidebar Position"]!==2?"padding-left:2px!important;"+($SS.conf["Sidebar Position"]===3?"padding-right:4px!important;":"") :"padding-left:0!important;padding-right:3px!important;")+"width:238px;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out}.deleteform::before{content:'X';display:inline-block;position:absolute;left:0;top:0;width:20px;height:24px;text-align:center;padding-top:1px}.deleteform:hover::before{overflow:hidden;white-space:nowrap;padding:0;width:0}.deleteform::after{content:'File Only';position:absolute;bottom:0;right: 122px;line-height:24px}.deleteform input,.deleteform .riceCheck{visibility:visible!important}.deleteform input[type=checkbox],.deleteform .riceCheck{margin:2px!important;position:absolute;right:105px;bottom:4px!important;top:auto!important}.deleteform input:not([type=checkbox]){height:20px!important;margin:0 1px 0 0!important}.deleteform input[type=password]{margin-left:4px!important;width:138px!important}.deleteform:hover input[type=password]{margin-left:0!important}":"")+"table,td:not(.hide_reply_button):not(.deleteform){border:0!important;border-spacing:0!important;table-layout:fixed!important}blockquote{margin:0!important;padding:"+($SS.conf["Slim Replies"]?($SS.conf["Backlinks Position"]!==1?8:4)+"px 16px":"12px 22px")+"!important}"+(!$SS.conf["Use Post Info Color"]?"#delform div.reply{padding-top: "+($SS.conf["Slim Replies"]?4:8)+"px !important;padding-left: 10px !important}":"blockquote, .fileInfo {margin-left: 10px !important}#qp div.reply {padding-top: "+($SS.conf["Slim Replies"]?4:8)+"px !important;padding-left: 10px !important}")+"blockquote>div[style]{border-color:"+$SS.theme.sageColor.hex+"!important}.fileInfo{padding-left:3px!important}.op,.thread.hidden{display:block!important}.image_expanded .fileThumb{z-index:"+($SS.conf["Expanded Images Cover QR"]?13: 4)+"!important;position: relative !important}img[alt=Closed],img[alt=Sticky],.remove{background-image:"+$SS.theme.icons.get()+"!important;background-color:transparent!important;background-repeat:no-repeat;display:inline-block;height:0!important;padding-top:16px!important;vertical-align:bottom;width:16px!important}.close {height:0!important}img[alt=Closed]{background-position:0 0!important}img[alt=Sticky]{background-position:-16px 0!important}textarea,button,input:not([type=checkbox]):not([type=radio]),.webkit select,"+($SS.conf["Post Form"]!==4?"#qr>form>.captchaimg>img,":"#qr>form>.captchaimg,")+".riceFile{border:1px solid "+$SS.theme.inputbColor.hex+"!important}button,input[type=button],input[type=file],input[type=password],input[type=submit],input[type=text]:not(.jsColor),input#fs_search,input.field,.webkit select,textarea,#qr.captcha > form #spoilerLabel,.riceFile,#options input{background:rgba("+$SS.theme.inputColor.rgb+","+$SS.theme.replyOp+")!important}button,input:not(.jsColor),textarea,.riceFile input~div{-webkit-transition:background .2s,box-shadow .2s;-moz-transition:background .2s,box-shadow .2s;-o-transition:background .2s,box-shadow .2s}button:hover,input[type=button]:hover,input[type=password]:hover,input[type=submit]:hover,input[type=text]:not(.jsColor):not([disabled]):hover,input#fs_search:hover,input.field:hover,.webkit select:hover,textarea:hover,#options input:hover,.riceFile input:hover+div,.riceFile input:focus+div,.riceFile div.focus{background:rgba("+$SS.theme.inputColor.hover+","+$SS.theme.replyOp+")!important}input[type=password]:hover,input[type=text]:not([disabled]):hover,input#fs_search:hover,input.field:hover,.webkit select:hover,textarea:hover,#options input:not[type=checkbox]:hover{box-shadow:inset rgba(0,0,0,.2) 0 1px 2px}input[type=password]:focus,input[type=text]:focus,input#fs_search:focus,input.field:focus,.webkit select:focus,textarea:focus,#options input:focus{box-shadow:inset rgba(0,0,0,.2) 0 1px 2px}textarea:focus,input[type=text]:not(.jsColor):not([disabled]):focus,input[type=password]:focus,input#fs_search:focus,input.field:focus,#options input:focus{background:rgba("+$SS.theme.inputColor.hover+","+$SS.theme.replyOp+")!important}button,input[type=button],input[type=submit],.riceFile div{height:22px!important;margin-top:1px!important;padding:0!important;text-align:center!important;vertical-align:top;width:50px}input[type=checkbox],input[type=radio],.riceCheck{background:rgba("+$SS.theme.inputColor.rgb+","+$SS.theme.replyOp+")!important;border:1px solid rgb("+$SS.theme.inputbColor.rgb+")!important;display:inline-block;height:12px!important;margin:3px;position:relative;vertical-align:top;width:12px!important;border-radius:2px!important;-webkit-appearance:none;-webkit-transition:background .1s;-moz-transition:background .1s;-o-transition:background .1s}input[type=radio]{border-radius:10px!important}input[type=checkbox],.riceCheck{box-shadow:rgba("+$SS.theme.mainColor.shiftRGB(32)+",.3) 0 1px}input[type=checkbox]:hover,input[type=radio]:hover,.riceCheck:hover{background:rgba("+$SS.theme.inputColor.hover+","+$SS.theme.replyOp+")!important}input[type=checkbox]:checked,input[type=checkbox]:checked+.riceCheck{box-shadow:inset rgba(0,0,0,.2) 0 1px 2px,rgba("+($SS.theme.mainColor.isLight?"255,255,255":"100,100,100") +",.6) 0 1px}input[type=radio]:checked{background:rgba("+$SS.theme.inputColor.shiftRGB(40, true)+","+$SS.theme.replyOp+")!important;box-shadow:inset rgba("+$SS.theme.inputColor.shiftRGB(100, true)+",.2) 0 0 1px!important}input[type=checkbox]::before,input[type=radio]::before,input[type=checkbox]+.riceCheck::before{content:'';display:block;height:8px;margin:1px;opacity:0;width:8px;-webkit-transition:opacity .2s ease-in-out;-moz-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out}input[type=checkbox]:checked::before,input[type=radio]:checked::before,input[type=checkbox]:checked+.riceCheck::before{opacity:1}input[type=checkbox]:checked::before,input[type=checkbox]:checked+.riceCheck::before{background:"+$SS.theme.checkMark.get()+"!important}input[type=radio]:checked::before{background:"+$SS.theme.radioCheck.get()+" transparent!important}input[type=checkbox]:active,input[type=radio]:active,.riceCheck:active{background:rgba("+$SS.theme.inputColor.shiftRGB(40, true)+","+$SS.theme.replyOp+")!important;box-shadow:inset rgba("+$SS.theme.inputColor.shiftRGB(100, true)+",.4) 0 0 3px,rgba("+$SS.theme.mainColor.shiftRGB(64)+",.6) 0 1px!important}input[name='Persistent QR']:not([checked]), input[name='Auto Hide QR']:not([checked]),input[name='Persistent QR']:not([checked])+.riceCheck, input[name='Auto Hide QR']:not([checked])+.riceCheck {outline: 1px solid red !important}.replyContainer>.reply input[type=checkbox],.replyContainer>.reply .riceCheck,{margin-left:0!important;position:relative}span.filesize~input[type=checkbox],span.filesize~.riceCheck{top:2px}textarea,.navLinks{margin:0!important}td.doubledash{padding:0;text-indent:-9999px}.boardBanner{height:0px !important;position:fixed;"+$SS.conf["Sidebar Position String"]+":1px;text-align:center;top:20px;"+(!$SS.conf["Sidebar Postion"]===3?"z-index: 3;":"")+"}.boardBanner,.boardBanner img,.boardBanner .boardTitle{width:"+($SS.conf["Sidebar Position"]===3?261:259)+"px!important}.boardBanner img{height:auto!important;margin:0!important;"+(!$SS.conf["Lighter Logo"]?"":"opacity:.5;")+"position:relative;z-index:1}.boardBanner #bBanner{height:86.3333px;position:fixed;"+($SS.conf["Sidebar Position"]===3?"pointer-events: none !important;":"")+"}"+($SS.conf["Show Logo Reflection"]?".boardBanner #bBanner::after{background-image:-moz-element(#banner);bottom:-100%;content:'';left:0;mask:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KCTxkZWZzPg0KCQk8bGluZWFyR3JhZGllbnQgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJncmFkaWVudCIgeDI9IjAiIHkyPSIxIj4NCgkJCTxzdG9wIHN0b3Atb2Zmc2V0PSIwIi8+DQoJCQk8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIgb2Zmc2V0PSIxIi8+DQoJCTwvbGluZWFyR3JhZGllbnQ+DQoJCTxtYXNrIGlkPSJtYXNrIiBtYXNrVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBtYXNrQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+DQoJCQk8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPg0KCQk8L21hc2s+DQoJPC9kZWZzPg0KPC9zdmc+#mask');opacity:.2;position:absolute;right:0;top:100%;z-index:1;-moz-transform:scaleY(-1)}.boardBanner img{-webkit-box-reflect:below 0 -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(.1,transparent),to(rgba(255,255,255,.5)))}":"")+""+($SS.conf["Board Name Position"] == 1?".boardBanner .boardTitle { top: 150px !important; bottom: auto; }":".boardBanner .boardTitle {  top: auto; bottom: "+(($SS.conf["Post Form"]===1) || ($SS.conf["Post Form"]===4)?90:360)+"px !important}")+".boardBanner .boardTitle{position: fixed !important;bottom: auto;font-size: 30px !important;font-weight: 400 !important;font-family: sans-serif;cursor:default!important;display:block;font-size:28px!important;letter-spacing:-3px;padding:0 10px;text-align:center;text-shadow:"+$SS.theme.mainColor.hex+" -1px -1px,"+$SS.theme.mainColor.hex+" 1px -1px,"+$SS.theme.mainColor.hex+" -1px 1px,"+$SS.theme.mainColor.hex+" 1px 1px,rgba(0,0,0,.6) 0 2px 4px,rgba(0,0,0,.6) 0 0 10px;z-index:3;"+$SS.conf["Sidebar Position String"]+": 0px; "+$SS.conf["Sidebar Position oString"]+": auto}.boardBanner .boardTitle::selection{background:transparent!important}.boardBanner .boardTitle::-moz-selection{background:transparent!important}.boardBanner .boardSubtitle{"+($SS.conf["Board Name Position"] == 1?"top: 185px !important; z-index: 2;":"z-index: 3; fixed !important; bottom:"+(($SS.conf["Post Form"]!==1) && ($SS.conf["Post Form"]!==4)?342:72)+"px;")+"text-shadow:"+$SS.theme.mainColor.hex+" -1px -1px,"+$SS.theme.mainColor.hex+" 1px -1px,"+$SS.theme.mainColor.hex+" -1px 1px,"+$SS.theme.mainColor.hex+" 1px 1px,rgba(0,0,0,.2) 0 0 10px,#000 0 1px 5px,#000 0 -1px 5px;width: 256px !important;"+$SS.conf["Sidebar Position String"]+": 0px; "+$SS.conf["Sidebar Position oString"]+": auto;position: fixed !important}.boardBanner .boardSubtitle>a{text-transform:none!important;text-shadow:"+$SS.theme.mainColor.hex+" -1px -1px,"+$SS.theme.mainColor.hex+" 1px -1px,"+$SS.theme.mainColor.hex+" -1px 1px,"+$SS.theme.mainColor.hex+" 1px 1px,rgba(0,0,0,.2) 0 0 10px,#000 0 1px 5px,#000 0 -1px 5px!important}div.autohide>a[title='Auto-hide dialog box']{text-decoration:underline!important}.op .filesize{display:inline-block!important;margin:2px "+($SS.conf["Layout"]!==2?6:0)+"px!important}body>span[style]~form .op .filesize{padding-left:6px!important}.inline .filesize{margin:2px 0!important}.filesize span:not([class]){font-size:0!important;visibility:hidden}.filesize span:not([class])::after{content:attr(title);visibility:visible}input:not([type=checkbox]):not([type=radio]),button,select,textarea{-webkit-appearance:none;-o-appearance:none}#options .move,"+($SS.conf["Post Form"]!==4?"#qr>.move,":"")+"#stats .move,#updater .move{cursor:default!important}#overlay,#overlay2{background:rgba(0,0,0,.5);position:fixed;top:0;left:0;height:100%;width:100%;text-align:center;z-index:999!important}#overlay::before,#overlay2::before{content:'';display:inline-block;height:100%;vertical-align:middle}#addMascot,#addTheme,#themeoptions{border:0!important;display:inline-block;position:relative;text-align:right!important;width:600px;padding:5px;vertical-align:middle;border-radius:5px!important}#themeoptions>div{padding:5px}.trbtn{color:"+$SS.theme.jlinkColor.hex+";display:inline-block;line-height:18px;margin:0 2px;min-width:40px;padding:2px 10px;text-align:center;background:-webkit-linear-gradient(top,rgba("+$SS.theme.mainColor.shiftRGB(20)+","+$SS.theme.replyOp+"),rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.replyOp+"));background:-moz-linear-gradient(top,rgba("+$SS.theme.mainColor.shiftRGB(20)+","+$SS.theme.replyOp+"),rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.replyOp+"));background:-o-linear-gradient(top,rgba("+$SS.theme.mainColor.shiftRGB(20)+","+$SS.theme.replyOp+"),rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.replyOp+"));border-radius:3px;box-shadow:rgba(0,0,0,.3) 0 0 2px}.trbtn:hover,#selectImage>input[type=file]:hover+.trbtn{background:rgba(60,60,60,"+$SS.theme.replyOp+");background:-webkit-linear-gradient(top,rgba("+$SS.theme.mainColor.shiftRGB(40)+","+$SS.theme.replyOp+"),rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.replyOp+"));background:-moz-linear-gradient(top,rgba("+$SS.theme.mainColor.shiftRGB(40)+","+$SS.theme.replyOp+"),rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.replyOp+"));background:-o-linear-gradient(top,rgba("+$SS.theme.mainColor.shiftRGB(40)+","+$SS.theme.replyOp+"),rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.replyOp+"))}.trbtn:active,#selectImage>input[type=file]:active+.trbtn{box-shadow:inset rgba(0,0,0,.3) 0 0 2px,rgba(0,0,0,.3) 0 0 2px}.trbtn-small{padding:2px 5px;min-width:30px}#themeoptions #toNav{list-style:none;margin:0;padding:0;position:absolute;top:-26px}#themeoptions #toNav li{float:left;margin:0;padding:0}#themeoptions #toNav li label{background:rgba("+$SS.theme.mainColor.shiftRGB(-10)+","+$SS.theme.replyOp+");color:#888!important;display:block;height:16px;margin:0 2px;padding:5px 10px;text-align:center;width:75px;border-radius:5px 5px 0 0;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out}#SSVersion{opacity:.5;padding-right:5px;padding-left: 35px}.linkdelimiter{opacity:.4}#issueslink {padding-right:10px}#themeoptions #toWrapper{background:rgb("+$SS.theme.mainColor.shiftRGB(-12)+");box-shadow:inset rgba(0,0,0,.3) 0 0 5px,rgba("+$SS.theme.mainColor.shiftRGB(32)+",.6) 0 1px 3px;border-radius:5px}#themeoptions #toWrapper,#themeoptions #toWrapper>div{height:400px}#themeoptions #toWrapper>div{overflow:auto}#themeoptions #toWrapper>[name=toTab]:not(:checked)+div{display:none}#updater label,#themeoptions #tMain .mOption,#themeoptions #tNavLinks .navlink{display:block;border-bottom:1px solid rgba("+$SS.theme.mainColor.rgb+",.3);border-top:1px solid rgba(0,0,0,.1);height:20px;padding:0 3px;vertical-align:top}#updater label {width: 100%;float: left}#updater label input {float: right}#updater input.field {height: 18px !important}#updater input[type='number'] {width: 3em !important}#updater>div>input[name='Update Now'] {margin-right: 28px !important}#updater .riceCheck {position: relative !important;top: 1px !important}#updater:hover {height: 200px !important}.deleteform::before,#themeoptions #tMain .mOption span{float:left;line-height:20px!important}#themeoptions #tMain .mOption:first-child,#updater div:first-child label{border-top:0!important}#themeoptions #tMain .mOption:last-child,#updater div:nth-last-of-type(3) label{border-bottom:0!important}#themeoptions #tMain select[name=Font] option{max-width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#themeoptions #tMain .subOption::before{border-bottom:1px solid rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);content:'';display:inline-block;float:left;margin-right:2px;height:50%;width:6px}#themeoptions #tMain .subOption{margin-left:16px}#themeoptions #tThemes>div{opacity:.5;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s}#themeoptions #tThemes>div:hover,#themeoptions #tThemes>div.selected,#themeoptions #tThemes>div.nsfw{opacity:1}#themeoptions #tThemes .reply{margin:2px 0!important;padding:2px!important;position:relative;text-align:left;width:100%;border-radius:2px!important}#themeoptions #tThemes>div p{bottom:4px;right:2px;margin:0;opacity:0;position:absolute;z-index:3}#themeoptions #tThemes>div:hover p{opacity:1}#themeoptions #tThemes>div p a{display:inline-block;margin:0 2px;padding:2px 5px;text-align:center;width:50px;border-radius:3px}#themeoptions #tThemes>div h3{bottom:-5px;font-size:32px!important;margin:0!important;opacity:0;position:absolute;right:300px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s}#themeoptions #tThemes>div.nsfw .h3nsfw{opacity:1;right:3px;z-index:1}#themeoptions #tThemes>div.selected .h3sfw{opacity:1;right:3px;z-index:1}#themeoptions #tThemes>div.selected.nsfw h3:not(.h3both) {opacity:0 !important;right:300px !important;z-index:0 !important}#themeoptions #tThemes>div.selected.nsfw .h3both {opacity:1;right:3px;z-index:1}#themeoptions #tMascot{text-align:center}#themeoptions #toWrapper>div>p{bottom:10px;left:10px;position:absolute}#themeoptions #toWrapper>div>p{margin:0}#themeoptions #tMascot div{background-position:center top!important;background-repeat:no-repeat!important;background-size:cover!important;display:inline-block;height:257px;margin:2px;opacity:.75;position:relative;width:185px;border-radius:10px;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s}#themeoptions #tMascot div:hover{opacity:1}#themeoptions #tMascot div.selected, #themeoptions #tMascot div.nsfw{background-color:rgba("+$SS.theme.linkColor.rgb+",.6)!important;opacity:1;box-shadow:inset rgba(0,0,0,.15) 0 0 15px, rgba("+$SS.theme.linkColor.rgb+",.6) 0 0 2px}#themeoptions #tMascot div a{position:absolute;top:0;padding:5px 8px;background:rgba(0,0,0,.3)}#themeoptions #tMascot div a:not([href]):hover{background:rgba(0,0,0,.5)}#themeoptions #tMascot div a[title=Delete],#themeoptions #tMascot div a[title=Hide]{left:0;border-radius:10px 0 10px 0}#themeoptions #tMascot div a[title=Edit]{right:0;border-radius:0 10px 0 10px}#themeoptions #tNavLinks .navlink>div:not(.handle), #themeoptions #tNavLinks .navlink>label, #themeoptions #tNavLinks .navlink>a{position:relative;z-index:1}#themeoptions #tNavLinks .navlink{height:24px;padding-top:1px;position:relative;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s}#themeoptions #tNavLinks .moving{opacity:.5;-webkit-transform:scale(.95);-moz-transform:scale(.95);-0-transform:scale(.95)}#themeoptions #tNavLinks .over:not(.moving){border-top:4px double "+$SS.theme.brderColor.hex+"}#themeoptions #tNavLinks .moving~.over{border-bottom:4px double "+$SS.theme.brderColor.hex+";border-top:1px solid rgba(0,0,0,.1)}#themeoptions #tNavLinks .navlink .handle{border-left:16px solid rgb("+$SS.theme.brderColor.shiftRGB(8, true)+");cursor:move;height:26px;left:0;position:absolute;top:0;width:100%;z-index:0}#themeoptions #tNavLinks label{margin:0 3px;position:relative;top:1px}#themeoptions #tNavLinks label:first-child{float:left;margin-left:18px}#themeoptions #tNavLinks label:first-child>input[type=text]{width:120px}#themeoptions #tNavLinks label>input[type=text]{width:125px}#themeoptions label>input[type=checkbox],#themeoptions label>.riceCheck{margin:4px 2px 0!important;vertical-align:bottom!important}#themeoptions span>select,#themeoptions span>input[type=text]{width:125px}#themeoptions input[type=text],#themeoptions select{height:20px;margin:0!important;padding:1px 3px!important}#themeoptions select{padding:1px 1px 1px 0!important}#themeoptions textarea{background:transparent!important;border:0!important;height:100%!important;width:100%!important;resize:none}#addMascot{width:350px!important}#addMascot>div{padding:5px}#addMascot>label{display:block}#addMascot>label>span,#addTheme>label>span{float:left;line-height:22px;padding-left:5px}#addMascot>label>input[type=text],#addMascot>label>select,#addMascot>label>textarea{margin-top:1px!important;width:200px}#addMascot select[name=mPosition],#addMascot input[name=mOffset][type=text]{width:80px}#addMascot>label>textarea{height:20px;line-height:20px;overflow:hidden;resize:none}#addMascot>label>input[type=checkbox],#addMascot>label>.riceCheck{margin-top:5px}#selectImage{float:left;height:24px!important;margin-top:-2px;padding-top:2px}a[name=clearIMG]{display:none;float:left;opacity:0;-webkit-transition:all .2s ease-in-out;-moz-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out}input[name=customIMGB64]+a[name=clearIMG]{display:inline-block;opacity:1}#addTheme{text-align:left!important;width:500px!important}#addTheme>label{display:inline-block;text-align:right;width:50%}#addTheme>label#customCSS{width:100%}#addTheme>label#customCSS>textarea{height:100px;resize:vertical;width:100%}#addTheme>label>input[type=text],#addTheme>label>select{width:100px}#addTheme>div{margin-top:.6em;text-align:right}#themeoptions,#options.dialog,#themeoptions #toNav li label.selected,#themeoptions #toNav li label:hover,#addMascot,#addTheme{background:rgba("+$SS.theme.mainColor.rgb+",.98)!important;text-align:center}#options.dialog,#themeoptions,#addMascot,#addTheme{margin:0 auto!important;text-align:left;box-shadow:rgba(0,0,0,.6) 0 0 10px;border-radius:5px}#options{width:600px!important;z-index:1000!important}#options hr{margin:3px 0!important}#options button{vertical-align:baseline!important;width:auto!important}#options input{width:150px}#options ul{margin-right:5px;padding:2px 5px!important;border-radius:5px;box-shadow:inset rgba("+($SS.theme.mainColor.isLight?"255,255,255":"155,155,155")+",.3) 0 0 5px}"+($SS.conf["Icon Position"]===2?"#imgControls{height:18px;position:fixed!important;top:0;width:100px!important;"+$SS.conf["Sidebar Position String"]+":"+(($SS.conf["Sidebar Position"]!==3) && ($SS.conf["SS-like Sidebar"])?159:162)+"px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important;z-index:14}label#prefetch{bottom:auto!important;line-height:16px!important;position:fixed!important;"+$SS.conf["Sidebar Position String"]+":"+(($SS.conf["Sidebar Position"]!==3) && ($SS.conf["SS-like Sidebar"])?133:136)+"px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important;top: 2px !important;z-index:15!important}label#prefetch::after {content: 'P' !important}.webkit #imgControls #imageType{background:none!important}"+($SS.conf["Updater and Stats Position"]===1?"#updater{position: fixed !important;top: 0px !important;"+$SS.conf["Sidebar Position String"]+":0!important;"+$SS.conf["Sidebar Position oString"]+":auto!important;bottom: auto !important;height: 16px !important}#stats{position: fixed !important;top: 0px !important;"+$SS.conf["Sidebar Position String"]+":13px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important;bottom: auto !important;width: 80px !important;height: 16px !important;z-index:14!important}":"")+"":"#imgControls{height:24px;z-index:14}#imgControls:not(:hover) {width: 20px !important;position: fixed;top: -500px}#imgControls:hover {width:130px!important}#imgControls:hover {position: fixed !important;top: 15px !important;"+$SS.conf["Sidebar Position String"]+":130px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important}#imgControls:hover #imageType {position: fixed !important;top: 18px !important;"+$SS.conf["Sidebar Position String"]+":181px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important}#imgControls:not(:hover) label:first-of-type {position:fixed!important;top:-1px;"+($SS.conf["Sidebar Position"]!==2?"right:24"+($SS.conf["SS-like Sidebar"]?3:5)+"px!important;left:auto!important;":"left:24"+($SS.conf["SS-like Sidebar"]?3:5)+"px!important;right:auto!important;")+"}#imgControls:hover label:first-of-type {position: fixed !important;top: -1px !important;"+($SS.conf["Sidebar Position"]!==2?"right:24"+($SS.conf["SS-like Sidebar"]?3:5)+"px!important;left:auto!important;":"left:24"+($SS.conf["SS-like Sidebar"]?3:5)+"px!important;right:auto!important;")+"}#imgControls:not(:hover) > #imageType {display: none !important}#imgControls:not(:hover)+#prefetch:not(:hover) {display: none !important;position: fixed;top: -500px}#imgControls:hover+#prefetch, #prefetch:not([type='checkbox']):hover {width: 70px !important;padding-left: 3px !important;padding-right: 3px !important;position: fixed !important;top: 19px !important;"+$SS.conf["Sidebar Position String"]+":102px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important;background-color:rgba("+$SS.theme.mainColor.rgb+","+$SS.theme.navOp+")!important}label#prefetch::after {content: 'Prefetch?' !important}"+($SS.conf["Updater and Stats Position"]===1?"#updater{position: fixed !important;top: "+(18+($SS.conf["Show Logo"]?87:0))+"px !important;"+$SS.conf["Sidebar Position String"]+":4px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important;bottom: auto !important;height: 16px !important}#stats{position: fixed !important;top: "+(18+($SS.conf["Show Logo"]?87:0))+"px !important;"+$SS.conf["Sidebar Position String"]+":155px!important;"+$SS.conf["Sidebar Position oString"]+":auto!important;width: 100px !important;bottom: auto !important;height: 16px !important}":"")+"")+".webkit #imgControls #imageType,.webkit #boardNavDesktop>select{border:0!important;padding:1px 1px 1px 0}.webkit #boardNavDesktop>select{background:none!important}#imgControls #imageType{margin:0!important;height:18px!important;width:77px!important}#imgControls #imageType{float:  "+$SS.conf["Sidebar Position String"]+" !important}.webkit #boardNavDesktop>select{padding:0 4px!important;width:auto!important}#imgControls label:first-of-type input{  display: none !important}#imgControls label:first-of-type::after{position: relative !important;top: 4px !important;z-index: 10 !important;margin:1px;overflow:hidden;opacity: 0.6 !important;"+($SS.conf["Sidebar Position"]!==2?"left: 3px !important;":"")+"}#imgControls label:hover:first-of-type::after{  opacity: 1 !important}#imgControls .preload,label#prefetchz`{height:15px;"+$SS.conf["Sidebar Position oString"]+":24px;padding:1px 5px 3px!important;position:absolute}label#prefetch{line-height:16px!important;z-index:15!important}#prefetch .riceCheck, #prefetch input {float: left !important;position: relative !important;bottom: 1px !important}form[name=post] input[name=email]+label,form[name=post] #com_submit+label,#qr>form #spoilerLabel::after,#imgControls label,#navlinks,#stats .move,#themeoptions #toNav li label,#updater span,#updater .move,.preview>label::after{line-height:16px}#updater{border: none !important;position:fixed!important;height:18px;line-height:18px;overflow:hidden;z-index:14!important;text-align: left !important}#updater:hover{height:auto!important;padding-bottom:3px}#updater #count.new{background-color:transparent!important}#updater label{line-height:20px!important;text-align:left!important}#updater .move {margin-top: 2px;padding-right: 2px;padding-left: 2px}#stats {margin-top: 2px;padding-right: 2px;padding-left: 2px}#updater input,#updater .riceCheck{float:right}#updater input:not([type=checkbox]){margin:1px!important}#updater input[type=button]{margin-right:3px!important;padding:0 5px!important;width:auto!important}#updater input[type=text]{height:19px!important;width:40px!important}#updater:not(:hover){background:transparent!important}#stats{line-height:16px}"+($SS.conf["Navlinks Position"] == 1?"#navlinks{"+($SS.conf["Sidebar Position"]!==2?"right:"+(130 - ($SS.conf["Icon Position"]===2?30:0))+"px !important;":"left:"+(130 - ($SS.conf["Icon Position"]===2?30:0))+"px;right:auto!important;")+"top:2px !important;height:18px;z-index:14!important}.next, .prev {"+(!$SS.conf["Disable Pages Navlinks"]?"display: inline !important;":"display: none !important;")+"position: fixed !important;top: 2px !important;z-index: 14 !important}.next input, .prev input {display: none !important}.next {"+($SS.conf["Sidebar Position"]!==2?"right:"+(114 - ($SS.conf["Icon Position"]===2?30:0))+"px !important;":"left:"+(162- ($SS.conf["Icon Position"]===2?30:0))+"px;right:auto!important;")+"}.prev {"+($SS.conf["Sidebar Position"]!==2?"right:"+(162 - ($SS.conf["Icon Position"]===2?30:0))+"px !important;":"left:"+(114 - ($SS.conf["Icon Position"]===2?30:0))+"px;right:auto!important;")+"top: 2px !important}":"#navlinks{"+($SS.conf["Sidebar Position"]!==2?"right:280px !important;":"left:280px;right:auto!important;")+"bottom: -1px !important;top: auto !important;height:18px;z-index:14!important}.next, .prev {display: inline !important;position: fixed !important;bottom: 4px !important;z-index: 14 !important}.next input, .prev input {display: none !important}.next {"+($SS.conf["Sidebar Position"]!==2?"right:264px !important;":"left:312px;right:auto!important;")+"}.prev {"+($SS.conf["Sidebar Position"]!==2?"right:312px !important;":"left:264px;right:auto!important;")+"bottom: 4px !important}" )+"#ihover{padding-bottom:21px;z-index:15!important}body>center:nth-of-type(2){position:relative}"+(!$SS.conf["Slideout Announcement"]?".globalMessage {padding-"+$SS.conf["Sidebar Position oString"]+": "+($SS.conf["Non-Sidebar Margin"]!==999?""+ $SS.conf["Non-Sidebar Margin"]+"":""+$SS.conf["Non-Sidebar Custom Margin"]+"")+"px !important;margin-top: 40px !important;position: static !important;background: none !important;border: none !important}.globalMessage::before {display: none !important}div.closed ~ .globalMessage {margin-bottom: 20px !important}":".globalMessage {position: absolute !important;top: -1000px !important; "+($SS.conf["Sidebar Position"]!==2?"right: 2px !important;left: auto !important;":"right: auto !important;left: 2px !important;")+"bottom: auto !important;padding: 10px 5px 10px 5px !important}.globalMessage b{font-weight: 100 !important}.globalMessage::before{height: 9px !important;position: fixed !important;"+$SS.conf["Sidebar Position String"]+": "+(85 - ($SS.conf["Auto Hide Thread Watcher"]?0:18))+"px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important;min-width: 15px !important;max-width: 15px !important;padding-botom: 5px !important;opacity:0.6;z-index: 5 !important}.globalMessage::before{top: 108px !important;top: "+(2+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?106:19):0)))+"px !important}.globalMessage:hover{top: "+(17+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?105:19):0)))+"px !important;position: fixed !important}.globalMessage:hover::before{opacity: 1;cursor: pointer}table.postForm > tbody > tr > td:first-child{background-color: transparent !important} .globalMessage:hover{position: fixed !important;z-index: 99 !important}.globalMessage{width: 248px !important}")+"body>.closed{height:18px;line-height:18px;padding:0!important}"+($SS.conf["Navigation Bar Position"]===1?"#bNavWrapper{"+($SS.conf["Sidebar Position"]!==2?"margin-left:-"+($SS.iSidebarSize - 3)+"px!important;":"")+"height:19px;left:0!important;line-height:18px;overflow:hidden !important;position:fixed!important;text-align:center;top:0!important;width:100%!important;z-index:14!important}"+(!$SS.conf["Custom Navigation Links"]?""+($SS.conf["Sidebar Position"]===2?"#bNavWrapper {margin-left:"+$SS.iSidebarSize+"px!important;position:relative}#boardNavDesktop{height:19px!important;margin-right:"+($SS.iSidebarSize - 3)+"px!important;position:relative}":"#boardNavDesktop{height:19px!important;margin-left:"+($SS.iSidebarSize - 3)+"px!important;position:relative}")+"":""+($SS.conf["Sidebar Position"]===2?"#bNavWrapper {margin-left:"+$SS.iSidebarSize+"px!important;position:relative}#boardLinks{margin-right:"+$SS.iSidebarSize+"px!important;position:relative}":"#boardLinks{margin-left:"+$SS.iSidebarSize+"px!important;position:relative}")+"")+"":"#bNavWrapper{"+($SS.conf["Sidebar Position"]!==2?"margin-left:-"+($SS.iSidebarSize - 3)+"px!important;":"")+"height:19px;left:0!important;line-height:18px;overflow-y:hidden;position:fixed!important;text-align:center;bottom:0!important;width:100%!important;z-index:14!important}"+(!$SS.conf["Custom Navigation Links"]?"#boardNavDesktop{height:19px!important;margin-left:"+$SS.iSidebarSize+"px!important;position:relative}":"#boardLinks{margin-left:"+$SS.iSidebarSize+"px!important;position:relative}")+"")+"#navtop,#navtopright{float:none!important;height:18px}#navtop a{text-shadow:rgba(0,0,0,.2) 0 0 3px}#navtop>div{line-height:20px}#navtopright{margin-top: 1px !important;font-size: 0 !important}#OneeChanLink {position: fixed !important;top: "+(2+(($SS.conf["Icon Position"]===2?($SS.conf["Show Logo"]?106:19):0)))+"px !important;"+$SS.conf["Sidebar Position String"]+": 5px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important;opacity: .6 !important;height: 15px !important;width: 15px !important;z-index: 5}#OneeChanLink:hover {  opacity: 1 !important;  cursor: pointer}"+($SS.conf["Navigation Bar Position"]===3?"#bNavWrapper{"+($SS.conf["Sidebar Position"]!==2?"margin-left:-"+$SS.iSidebarSize+"px!important;":"")+"height:19px;left:0!important;line-height:18px;overflow-y:hidden;position:static!important;text-align:center;width:100%!important;z-index:14!important;position: absolute !important;top: 0px !important}"+(!$SS.conf["Custom Navigation Links"]?"#boardNavDesktop{height:18px!important;margin-left:"+$SS.iSidebarSize+"px!important;position:relative}":"#boardLinks{margin-left:"+$SS.iSidebarSize+"px!important;position:relative}")+"":"")+""+($SS.conf["Navigation Bar Position"]===4?"#boardNavDesktop, #bNavWrapper {position: fixed !important;top: -1000px !important;bottom: auto !important}":"")+""+(!$SS.conf["Custom Navigation Links"]?"#boardNavDesktop a {margin: 0 1px 0 2px !important}#navtop{bottom:0;display:inline-block!important;height:20px;padding:3px 6px 6px;position:relative;width:500px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out}#navtop::before{color:"+$SS.theme.jlinkColor.hex+";content:'Navigation';display:block;font-size:"+$SS.conf["Small Font Size"]+"px;line-height:14px!important}#navtop:hover{background:rgb("+$SS.theme.mainColor.rgb+");bottom:48px;height:64px;line-height:0!important;border-radius:3px;box-shadow:rgba(0,0,0,.2) 0 0 5px}#navtop>a{padding:2px!important}#navtop>a,#navtop>span{display:inline!important;line-height:18px}":"")+($SS.conf["Pages Position"]!==4 ?($SS.conf["Pages Position"]===1?".pagelist {width: 100% !important;padding: 3px 0px !important;background: none !important;border: none !important;float: none !important;clear:both;margin-bottom: 10px !important;height: 10px !important;position: absolute !important}.pages {width: 500px !important;text-align: center !important;border-spacing: 0 !important;margin: auto !important;padding-right: 0 !important;z-index: 1;float: none !important;clear:both;position: relative !important;bottom: 5px !important;"+($SS.conf["Post Form"]!==4?"right: 131px !important;":"")+"word-spacing: 10px !important;font-size: 0px !important;color: transparent !important}.pages a {color:"+$SS.theme.linkColor.hex+"!important}.pagelist .pages strong{color:"+$SS.theme.textColor.hex+"!important}.pages a, .pages strong {font-size: 12px !important}":".mPagelist.mobile{background:transparent!important;bottom:0!important;display:block !important;height:20px;left:0!important;margin:0!important;padding:0 5px;position:fixed!important;width:auto!important;z-index:15}.mPagelist .pages{display:-webkit-box!important;display:-moz-box!important;display:box!important;height:20px;padding:0!important;text-align:center;-webkit-box-align:center!important;-moz-box-align:center!important;box-align:center!important;margin-bottom: -1px !important}.mPagelist .pages span{padding:2px}.mPagelist strong, .mPagelist a {font-size: 12px !important}.mPagelist strong {color: "+$SS.theme.textColor.hex+" !important}.mPagelist a {color: "+$SS.theme.linkColor.hex+" !important}"):"")+""+($SS.conf["Pages Position"]===2?".pagelist {width: 100% !important;padding: 3px 0px !important;border: none !important;float: none !important;clear:both;margin-bottom: 10px !important;height: 15px !important;position: fixed !important;"+($SS.conf["Navigation Bar Position"]!==2?"bottom: -10px !important;":"top: 0px !important;")+"z-index: 3}.pages {width: 500px !important;text-align: center !important;border-spacing: 0 !important;margin: auto !important;padding-right: 0 !important;z-index: 1;float: none !important;clear:both;position: relative !important;bottom: 3px !important;"+($SS.conf["Post Form"]!==4?"right: 131px !important;":"")+"word-spacing: 10px !important;font-size: 0px !important;color: transparent !important;height: 15px !important}.pages a {color:"+$SS.theme.linkColor.hex+"!important}.pagelist .pages strong{color:"+$SS.theme.textColor.hex+"!important}.pages a, .pages strong {font-size: 12px !important}.mPagelist.mobile {display: none !important}":"")+"body>div[style='width: 100%;']+form[name=delform]{display:block!important;margin-top:43px!important;position:fixed}#navtopright>.sight4{font-size: 0px !important;float: "+$SS.conf["Sidebar Position oString"]+" !important;width: 15px !important;height: 15px !important;opacity: 0.6 !important;background-repeat: no-repeat !important}#navtopright>.sight4:hover{  opacity: 1 !important}body>div[style='width: 100%;']+form[name=delform] {display:block!important;margin-top:43px!important;position:fixed}div[style='width: 100%; height: 450px; float: left;'] {border-left:0!important;border-right:0!important;height:100%!important;margin:0 auto;margin-top: 20px !important;width:100%!important}div[style='width: 100%; height: 450px; float: left;']>table {height:100%!important;padding-bottom:20px;margin-left: 20px !important;width: 97% !important;margin-top: 20px !important}div[style='width: 100%; height: 450px; float: left;']>table td {border-left:1px solid "+$SS.theme.brderColor.hex+"!important;height:600px!important}div[style='width: 100%; height: 450px; float: left;']>table td:first-child {border-left:0!important}div[style='width: 100%; height: 450px; float: left;']>table input[type=button] {width:100px!important}div[style='width: 100%; height: 450px; float: left;']>table table td {border:0!important;height:auto!important}div[style='width: 100%; height: 450px; float: left;']>table table td b[style] {background-color:"+$SS.theme.mainColor.hex+"!important}div[style='width: 100%; height: 450px; float: left;']>table table,div[style='width: 100%; height: 450px; float: left;']>table #fs_search {width:100%!important}#fs_data tr:first-child td {border-top:0!important}#fs_status {background-color: transparent !important}a[href='.././']:hover{opacity:1}#fs_data tr:first-child td{border-top:0!important}#navtopright {display: block !important;position: fixed !important;width: "+($SS.conf["Sidebar Position"]!==2?"131":"135")+"px !important;top: "+(1+(($SS.conf["Icon Position"]===2 ?($SS.conf["Show Logo"]?106:19): 0)))+"px !important;"+$SS.conf["Sidebar Position String"]+": "+((($SS.conf["Sidebar Position"]!==3) && ($SS.conf["SS-like Sidebar"])?105:108)+(($SS.conf["Icon Position"]===2?20:0)))+"px !important;"+$SS.conf["Sidebar Position oString"]+": auto !important}.settingsWindowLinkBot, .exlinksOptionsLink {position: static !important;display: inline-block !important;float: "+$SS.conf["Sidebar Position oString"]+" !important}.exlinksOptionsLink {height: 15px;width: 15px;opacity: 0.6}.exlinksOptionsLink:hover {opacity: 1}#navtopright>a:not(.settingsWindowLink) {margin-right: 6px !important}#playerDiv {padding:2px}#playerStyleSettingsButton {left:2px!important}#playerClose {right:2px!important}#navtopright .settingsWindowLinkBot {opacity: .6 !important;height: 13px !important;width: 14px !important;z-index: 5;font-size: 0 !important;color: transparent !important}#navtopright .settingsWindowLinkBot:hover {  opacity: 1 !important;  cursor: pointer}.riceFile,#selectImage{height:22px;line-height:22px;overflow:hidden;position:relative}.riceFile input[type=file],#selectImage input[type=file]{cursor:pointer!important;position:absolute;top:0;left:0;z-index:1;opacity:0;width:auto!important;-webkit-transform:scale(20) translateX(-30%);-moz-transform:scale(20) translateX(-30%);-o-transform:scale(20) translateX(-30%)}.riceFile div{display:inline-block;line-height:20px!important;margin:0!important;padding:0 10px!important}.riceFile span{display:inline-block;max-width:173px;overflow:hidden;padding:0 5px!important;text-overflow:ellipsis;white-space:nowrap}ul#Alerts,ul#Alerts a:hover{color:#222!important}a[href='.././']{width: 15px !important;height: 15px !important;float: left;z-index:15;color: transparent !important;font-size: 0px !important;opacity: .6}#boardLinks>a.selectedBoard, #boardNavDesktop>a.current, #boardNavDesktopFoot>a.current{font-weight: bold !important}#boardNavDesktop>a.current:not(.selectedBoard), #boardNavDesktopFoot>a.current{font-size: 13px !important}#qr{height:auto!important;margin:0 0 0px!important;padding:0px 2px !important;position:fixed!important;"+($SS.conf["Post Form"]!==4?"bottom:0!important;border-top:1px solid "+$SS.theme.brderColor.hex+"!important;top:auto!important;overflow:visible!important;"+($SS.conf["Sidebar Position"]===3?"border-right:1px solid "+$SS.theme.mainColor.hex+" !important;border-bottom:1px solid "+$SS.theme.mainColor.hex+" !important;z-index:11!important;width:261px!important;":"max-width:261px!important;min-width:261px!important;z-index:5!important;width:261px!important;")+"}#qr.autohide{"+($SS.conf["Post Form"]===1?"bottom:-248px!important;-webkit-transition:bottom .2s ease-in-out 1s;-moz-transition:bottom .2s ease-in-out 1s;-o-transition:bottom .2s ease-in-out 1s;" :($SS.conf["Post Form"]===2?"opacity:.2;-webkit-transition:opacity .2s ease-in-out 1s;-moz-transition:opacity .2s ease-in-out 1s;-o-transition:opacity .2s ease-in-out 1s;":""))+"}"+($SS.conf["Post Form"]===1?"#qr.autohide.dump:not(.focus):not(:hover){bottom:-341px!important}":"")+"#qr:hover,#qr.focus{bottom:0!important;z-index:11!important;"+($SS.conf["Post Form"]===1?"-webkit-transition:bottom .2s ease-in-out;-moz-transition:bottom .2s ease-in-out;-o-transition:bottom .2s ease-in-out;" :($SS.conf["Post Form"]===2?"opacity:1!important;-webkit-transition:opacity .2s ease-in-out;-moz-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out;":""))+"}#qr.autohide>form{display:block!important}":""+($SS.conf["Post Form"]!==4?"width:263px!important;margin-bottom:19px!important;":"min-width:261px!important;padding-bottom: 2px !important;")+"z-index:11!important}#qr .move{margin-bottom:1px!important}#qr.autohide:not(:hover):not(.focus){padding:0 3px!important}#qr.focus>form{display:block!important}")+""+($SS.conf["Post Form"]===1?"#delform[action='https://sys.4chan.org/f/up.php'] ~ #qr {bottom: 0px !important}":"")+"#qr>form>.captchaimg>img{height:48px!important;max-width:300px;width:100%}#qr textarea{min-height:127px !important;position:relative;"+$SS.conf["Sidebar Position String"]+":0;"+($SS.conf["Post Form"]!==4?"resize:none;":"")+"width:255px;z-index:1;-webkit-transition:background .2s,box-shadow .2s,width .2s ease-in-out,"+$SS.conf["Sidebar Position String"]+" .2s ease-in-out!important;-moz-transition:background .2s,box-shadow .2s,width .2s ease-in-out,"+$SS.conf["Sidebar Position String"]+" .2s ease-in-out!important;-o-transition:background .2s,box-shadow .2s,width .2s ease-in-out,"+$SS.conf["Sidebar Position String"]+" .2s ease-in-out!important}#qr:not(.captcha)>.move{height: 26px !important}#qr>.move{line-height:18px!important;min-width:0!important;padding:2px 0 0 3px!important;padding-top: 4px !important;text-align:left!important}#qr>.move select, #qr>.move .riceCheck, #qr>.move span{text-transform:none}#qr>.move select{height:19px!important}#qr>form>div{position:relative}#qr>form>div:first-child #dump,#qr>form>.captchaimg>img,#qr>form input[type=submit],#qr>form input[type=file],#qr>form .riceFile{margin-top:0!important}#qr>form .riceFile,#qr>form input[type=file]{float:right;width:100%}#qr>form>div:first-child{position:relative}#qr>form>div:first-child #dump{float:left;height:22px!important;width:24px!important}#qr>form>div:first-child .field:not(#dump){float:left;height:22px;padding:3px 4px!important;"+($SS.conf["Post Form"]!==4?"margin-left:1px!important; width:76px!important;":"width: 29%!important;")+"}#qr>form>div:first-child .field:not(#dump)+span{color:rgba("+$SS.theme.textColor.rgb+",0)!important;font-size:0!important;position:absolute;right:"+$SS.iSidebarSize+"px;top:4px;white-space:nowrap;z-index:-1}#qr>form>div:first-child .field[name=sub]{margin-right:0!important}#qr>form>div:first-child+div,#qr>form>div#replies+div,#qr>form>.captchaimg{clear:both}#qr>form .field,#qr>form>.captchaimg{margin-bottom:1px!important}#qr>form>.captchaimg{"+($SS.conf["Post Form"]!==4?"background: none !important;":"")+"outline:none!important}#qr>form>.captchaimg+div{float:left;margin-right:1px;position:relative;z-index:1;"+($SS.conf["Post Form"]!==4?"":"width: 69% !important;")+"}#qr>form>.captchaimg+div input{height:22px;"+($SS.conf["Post Form"]!==4?"width:189px!important;":"")+"}#qr>form input[type=submit]{"+($SS.conf["Post Form"]!==4?"width:65px!important;":"width: 31% !important; margin: 0px -1px !important;")+"}#qr>form input[type=file]+input[type=submit]{position:absolute;right:0;top:0}#spoilerLabel .riceCheck{position: relative !important;bottom:1px !important}#qr>form #spoilerLabel{bottom:1px;position:absolute;right:8px;z-index:2}#qr>form #spoilerLabel::after,.preview>label::after{content:'Spoiler?'}.preview>label{background:rgba(0,0,0,.75)!important;color:#fff!important}#addReply{font-size:3.5em!important}#qr .warning{z-index: 2 !important;padding: 1px 2px;text-align:center}"+($SS.conf["Post Form"]===4?"#qr:not(.captcha) [type='submit'] {margin: 1px -1px 0px 0px !important;width: 100% !important;float: right !important}#qr:not(.captcha) #spoilerLabel {bottom: 5px !important}#qr:not(.captcha) .warning:not(:empty) {padding: 3px 2px !important}":"#qr:not(.captcha) [type='submit'] {margin: 1px 0px 0px 0px !important;width: 255px !important;float: right !important}#qr:not(.captcha) #spoilerLabel {bottom: 3px !important}#qr:not(.captcha) textarea {height: 174px !important}#qr:not(.captcha) .warning:not(:empty) {padding: 3px 2px !important}")+"#menu,.subMenu{border:1px solid "+$SS.theme.brderColor.hex+"!important;z-index:16}.hasSubMenu:after{font-size:12px!important}#menu .focused.entry{background:rgba("+$SS.theme.mainColor.shiftRGB(16, true)+", .5)!important}input[name=name].tripping:not(:hover):not(:focus){color:transparent!important}a.useremail"+($SS.conf["Sage Identification"]===2?":not([href='mailto:sage'])":"")+":last-of-type::after{vertical-align:middle}form[name=delform][action$='/f/up.php']{border:1px solid "+$SS.theme.brderColor.hex+"!important;"+($SS.conf["Sidebar Position"]!==3?"margin-"+$SS.conf["Sidebar Position String"]+": 261px !important;margin-"+$SS.conf["Sidebar Position oString"]+": "+($SS.conf["Non-Sidebar Margin"]!==999?""+ $SS.conf["Non-Sidebar Margin"]+"":""+$SS.conf["Non-Sidebar Custom Margin"]+"")+" !important;":"margin: 0px 5% !important;")+"border-radius:3px!important}form[name=delform][action$='/f/up.php']>center{background:rgba("+$SS.theme.mainColor.rgb+", .9)!important;display:block!important;border-radius:3px!important}form[name=delform][action$='/f/up.php']>center>table{width:100%!important}form[name=delform][action$='/f/up.php'] tr{display:table-row!important}.ys_playerContainer{position:fixed!important;bottom:"+($SS.conf["Navigation Bar Position"]!==2?262:287)+"px!important;margin:0!important;width:262px!important;"+$SS.conf["Sidebar Position String"]+":0!important;z-index:3!important}.ys_playerContainer audio{width:100%!important}pre.prettyprint{background: none repeat scroll 0% 0% rgba(255, 255, 255, 0.2) !important;border: 1px solid rgb(204, 204, 204) !important;vertical-align:middle}span.pun {color:rgba("+$SS.theme.textColor.rgb+",.4)!important}div.post > blockquote .prettyprint span{font-family:monospace!important;font-size:medium!important}.prettyprint .pln{color:"+$SS.theme.textColor.hex+"}.sideArrows span, .hide_thread_button span, .menu_button {font-size: 0px !important}.sideArrows span::after, .hide_thread_button:not(.hidden_thread) span::after {content: "+($SS.conf["Hide Button Content"].indexOf("http")===0?"url("+$SS.conf["Hide Button Content"]+")":"'"+$SS.conf["Hide Button Content"]+"'")+";font-size: 12px !important}.menu_button::after {content: "+($SS.conf["Menu Button Content"].indexOf("http")===0?"url("+$SS.conf["Menu Button Content"]+")":"'"+$SS.conf["Menu Button Content"]+"'")+";font-size: 12px !important}"+($SS.conf["Layout"]!==2?".replyContainer>.sideArrows span::after {position: relative;bottom: "+(2+$SS.conf["Hide Button RVO"])+"px !important;left: "+(1+$SS.conf["Hide Button RHO"])+"px !important}.webkit .sideArrows span::after {right: -9px !important}.hide_thread_button span::after {position: relative;bottom: "+$SS.conf["Hide Button OVO"]+"px !important;left: "+(-2+$SS.conf["Hide Button OHO"])+"px !important}.op>.postInfo>.menu_button::after {position: relative;bottom: "+(2+$SS.conf["Menu Button OVO"])+"px !important;left: "+$SS.conf["Menu Button OHO"]+"px !important}.replyContainer>.reply>.postInfo>.menu_button::after {position: relative;bottom: "+(2+$SS.conf["Menu Button RVO"])+"px !important;left: "+(-2+($SS.conf["Menu Button RHO"]))+"px !important}.inline .menu_button::after {bottom: "+$SS.conf["Menu Button RVO"]+"px !important;left: "+$SS.conf["Menu Button RHO"]+"px !important;top: 1px !important}":".menu_button {margin-right: 3px !important}.op>.postInfo>.menu_button::after {position: relative;bottom: "+$SS.conf["Menu Button OVO"]+"px !important;left: "+$SS.conf["Menu Button OHO"]+"px !important}.replyContainer>.reply>.postInfo>.menu_button::after {position: relative;bottom: "+(1+$SS.conf["Menu Button RVO"])+"px !important;left: "+$SS.conf["Menu Button RHO"]+"px !important}.postingMode ~ #delform>.board>.thread>.opContainer>.op>.postInfo>.menu_button::after {position: relative;top: -1px !important}.sideArrows span::after {position: relative;bottom: "+(2+$SS.conf["Hide Button RVO"])+"px !important;left: "+$SS.conf["Hide Button RHO"]+"px !important}.hide_thread_button span::after {position: relative;bottom: "+(-2+$SS.conf["Hide Button OVO"])+"px !important;right: 4px !important;left: "+$SS.conf["Hide Button OHO"]+"px !important}.inline .menu_button::after {bottom: "+$SS.conf["Menu Button RVO"]+"px !important;left: "+$SS.conf["Menu Button RHO"]+"px !important;top: 1px !important}")+""+($SS.conf["Use Post Info Color"]?".reply {padding-top: 0px !important;padding-left: 0px !important}.thread>.replyContainer>.reply>div.postInfo {background: rgba("+$SS.theme.pinfoColor.rgb+","+$SS.theme.replyOp+")!important;border-bottom: 1px solid "+$SS.theme.pinfobColor.hex+" !important;padding: "+($SS.conf["Slim Replies"]?2:4)+"px 50px "+($SS.conf["Slim Replies"]?2:4)+"px 10px !important;marigin-top: -1px !important}div.post div.postInfo {width: 100% !important;display: block !important}"+($SS.conf["Use Post Info Color"] && $SS.conf["Add Shadow?"]?".thread>.replyContainer>.reply>div.postInfo {box-shadow: 0px 2px 3px "+($SS.theme.bgColor.isLight?"#999":"#111")+" !important;margin-bottom: 3px !important}":"")+"":"")+".thread>.replyContainer>.reply>.postInfo {padding-right: 50px !important}.capcodeAdmin>span.name, .capcodeAdmin>strong.capcode {color: red !important}.capcodeMod>span.name, .capcodeMod>strong.capcode {color: purple !important}"+(!$SS.theme.bgColor.isLight?"pre.prettyprint{background: none repeat scroll 0% 0% rgba(0, 0, 0, 0.2) !important;border: 1px solid rgba(204, 204, 204,.1) !important}":"")+"#navtopright .settingsWindowLinkBot {background-image: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].soundp+"') !important}.exlinksOptionsLink {background: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons":"darkIcons"].exlinks+"') !important}#imgControls label:first-of-type::after {content: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].expand+"')!important}#watcher::before {content: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].watcherb+"')!important}#navtopright>.sight4 {background-image: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].foursight+"') !important}a[href='.././'] {background-image: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].returnb+"')!important}.globalMessage::before {content: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].gmessage+"')!important}#OneeChanLink{  background-image: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].oclink+"') !important}#navtopright .settingsWindowLink{  background-image: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].navtopr+"') !important}#boardNavDesktopFoot::after {  content: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].slidenav+"') !important}#lastmuSettingsWindowLink {  background-image: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons":"darkIcons"].lastmu+"') !important}.favicon{  background-image: url('"+$SS.theme[$SS.theme.bgColor.isLight?"lightIcons"+($SS.conf['Icon Theme'])+"":"darkIcons"+($SS.conf['Icon Theme'])+""].watcher+"') !important}"+($SS.conf["Icon Theme"]==="SS"?".globalMessage::before {margin-right:6px !important}.globalMessage::before, a[href='.././'] {margin-top:1px !important}#watcher::before {margin-right:4px !important}#OneeChanLink,#navtopright .settingsWindowLink,#boardNavDesktopFoot::after {height:15px !important}#OneeChanLink {width:13px !important;margin-right:1px !important}#navtopright .settingsWindowLink {width:16px !important}a[href='.././'] {width:18px !important}a[href='.././'],#imgControls label:first-of-type::after {height:13px !important}#imgControls label:first-of-type::after {margin-top:-5px !important}#navtopright .settingsWindowLinkBot {width:15px !important}":"")+"#delform div.reply.lastmuInfo{background: none !important;border: none !important;padding: 0px !important;padding-top: 0px !important;padding-left: 0px !important}div.reply.lastmuInfo p {display: inline-block !important}#lastmuSettingsWindowLink {display: block !important;font-size: 0px !important;color: transparent !important;background-repeat: no-repeat !important;height: 12px !important;width: 18px !important;float: "+$SS.conf["Sidebar Position oString"]+" !important;opacity: 0."+($SS.theme.bgColor.isLight?6:6)+" !important;font-size: 0px !important}#lastmuSettingsWindowLink:hover {opacity: 1.0 !important}.opContainer.filter_highlight,#delform .filter_highlight>div.reply{box-shadow:inset 5px 0 rgba("+$SS.theme.sageColor.rgb+",.5)!important}.opContainer.filter_highlight {padding-left: 5px !important}"+($SS.conf["Pages Position"]===3?".mPagelist.mobile{z-index: 5 !important}.pages{bottom:auto!important;left:auto!important;margin:0!important;opacity:.75;padding:0!important;position:fixed;right:"+($SS.conf["Layout"]===3 ?(Math.min($SS.conf["Non-Sidebar Margin"], 40) / 2 * ($SS.conf["Non-Sidebar Margin"] < 10?3:1))+"%":""+($SS.conf["Sidebar Position"]===3?"25":"263")+"px")+"!important;top:47%;width:auto!important;z-index:6!important;-webkit-transform:rotate(90deg);-webkit-transform-origin:bottom right;-moz-transform:rotate(90deg);-moz-transform-origin:bottom right;-o-transform:rotate(90deg);-o-transform-origin:bottom right}":"") +($SS.conf["Expanding Form Inputs"]?".field:focus::-webkit-input-placeholder{color:transparent!important}.field:focus:-moz-placeholder{color:transparent!important}#qr>form>div:first-child .field:not(#dump):focus{background:rgba("+$SS.theme.inputColor.hover+",.98)!important;left:24px!important;position:absolute;width:230px!important}#qr>form>div:first-child .field:not(#dump):focus+span{color:rgba("+$SS.theme.textColor.rgb+",.4)!important;right:6px;z-index:3;-webkit-transition:right .3s ease-in-out,color .3s ease-in-out;-moz-transition:right .3s ease-in-out,color .3s ease-in-out;-o-transition:right .3s ease-in-out,color .3s ease-in-out}#qr textarea:focus,#qr>form>div:first-child .field:not(#dump):focus{-webkit-transition:box-shadow .2s,width .2s ease-in-out!important;-moz-transition:box-shadow .2s,width .2s ease-in-out!important;-o-transition:box-shadow .2s,width .2s ease-in-out!important}#qr.captcha #replies+div{height:128px!important}#qr:not(.captcha) #replies+div {height: 175px !important}#qr textarea{position:absolute}#qr textarea:focus{width:415px!important}":"") +(!$SS.conf["Show Logo"]?".boardBanner img{display: none !important}":"") +($SS.conf["Style Scrollbars"]?"::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track-piece,::-webkit-scrollbar-track{background:"+$SS.theme.brderColor.hex+"}::-webkit-scrollbar-corner,::-webkit-scrollbar-resizer{background:"+$SS.theme.brderColor.hex+"}::-webkit-scrollbar-thumb{background:rgb("+$SS.theme.brderColor.shiftRGB(32, true)+");border:2px solid "+$SS.theme.brderColor.hex+";border-radius:5px}::-webkit-scrollbar-thumb:hover,::-webkit-scrollbar-thumb:active{background:rgb("+$SS.theme.brderColor.shiftRGB(64, true)+")}.reply ::-webkit-scrollbar-track,.reply ::-webkit-scrollbar-track-piece{border-radius:5px}": "") +($SS.conf["Sage Identification"]!==1?"a.useremail[href*='sage']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Sage']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='SAGE']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{color:"+$SS.theme.sageColor.hex+"!important;content:"+($SS.conf["Sage Identification"]===2?"' (SAGE)'":"url('"+$SS.theme.emoji.sage+"')")+";margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}":"") +($SS.conf["Emoji Icons"]?"a.useremail[href*='neko']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Neko']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='NEKO']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.neko+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='madotsuki']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Madotsuki']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='MADOTSUKI']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.madotsuki+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='sega']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Sega']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='SEGA']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.sega+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Sakamoto']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='sakamoto']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='SAKAMOTO']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.sakamoto+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='baka']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Baka']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='BAKA']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.baka+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='PONYO']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='ponyo']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Ponyo']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.ponyo+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='RABITE']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='rabite']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Rabite']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.rabite+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Arch']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='ARCH']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='arch']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.arch+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Centos']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='CENTOS']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='centos']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.centos+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Debian']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='DEBIAN']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='debian']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url("+$SS.theme.emoji.debian+");margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Fedora']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='FEDORA']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='fedora']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.fedora+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Freebsd']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='FREEBSD']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='freebsd']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.freebsd+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Gentoo']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='GENTOO']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='gentoo']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.gentoo+"');  margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Mint']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='MINT']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='mint']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.mint+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='OSX']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='osx']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.osx+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Rhel']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='RHEL']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='rhel']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.rhel+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Sabayon']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='SABAYON']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='sabayon']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.sabayon+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Slackware']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='SLACKWARE']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='slackware']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.slackware+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Trisquel']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='TRISQUEL']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='trisquel']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.trisquel+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Ubuntu']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='UBUNTU']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='ubuntu']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.ubuntu+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='Windows']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='WINDOWS']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='windows']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.windows+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='OPENBSD']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='OpenBSD']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='openbsd']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.openbsd+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='GNU']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='gnu']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Gnu']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.gnu+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}a.useremail[href*='PLAN']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='plan']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+",a.useremail[href*='Plan']:last-of-type::"+($SS.conf["Emoji Position"]===1?"before":"after")+"{content:url('"+$SS.theme.emoji.plannine+"');margin-"+($SS.conf["Emoji Position"]===1?"right":"left")+": 4px !important}":"") +($SS.location.sub==="sys"?"body{margin:0!important;padding:0!important}body>form[method='POST']{background:rgba("+$SS.theme.mainColor.rgb+",.9);margin:5px auto;max-width:625px!important;padding:5px;border-radius:5px}body>form[action='']>table{display:table!important}body>form[action='']>table fieldset{text-align:left!important}body>form[action=''],body>form[action='']>table fieldset,body>form[action='']>table #recaptcha_response_field{border:1px solid "+$SS.theme.brderColor.hex+"!important}body>form[action='']>table,body>form[action='']>table td[width]+td{text-align:center}body>form[action='']~.rules{display:block!important;margin:0 auto}body>form[action='']>table td[width='240px']{display:none!important}":"")+$SS.theme.customCSS+"";
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

            $("input[type=file]").riceFile().bind("click", function(e)
            {
                if (e.shiftKey)
                    return $(this).nextSibling("span").text("");
            });

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
                return $("div#bottom").replace(a);
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
                        "<li><label for=tcbNavLinks>Nav Links</label></li>" +
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
                            var opts = key === "Font" ? $SS.fontList || defaultConfig[key][2] : defaultConfig[key][2],
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

                                if (key === "Font") cFonts.push(value);

                                optionsHTML += "<option" + (key === "Font" ? " style=\"font-family:" + $SS.formatFont(value) + "!important\"" : "") +
                                               " value='" + value + "'" + (value == val ? " selected" : "") + ">" + name + "</option>";
                            }

                            if (key === "Font" && cFonts.indexOf($SS.conf["Font"]) == -1)
                               optionsHTML += "<option style=\"font-family:" + $SS.formatFont($SS.conf["Font"]) + "!important\" value='" + $SS.conf["Font"] + "' selected>" + $SS.conf["Font"] + "</option>";

                            optionsHTML += "</select></span>";
                        }
                        else if (key === "Font Size")
                        {
                            optionsHTML += "<span class=mOption title=\"" + des + "\"><span>" + key + "</span>" +
                                           "<input type=text name='Font Size' value=" + $SS.conf["Font Size"] + "px></span>";
                        }
                        else if (key === "Menu Button OHO")
                        {
                            optionsHTML += "";
                        }
                        else if (key === "Menu Button OVO")
                        {
                            optionsHTML += "";
                        }
                        else if (key === "Menu Button RHO")
                        {
                            optionsHTML += "";
                        }
                        else if (key === "Menu Button RVO")
                        {
                            optionsHTML += "";
                        }
                        else if (key === "Hide Button OHO")
                        {
                            optionsHTML += "";
                        }
                        else if (key === "Hide Button OVO")
                        {
                            optionsHTML += "";
                        }
                        else if (key === "Hide Button RHO")
                        {
                            optionsHTML += "";
                        }
                        else if (key === "Hide Button RVO")
                        {
                            optionsHTML += "";
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
                        else if (key === "Menu Button Offset")
                        {
                            optionsHTML += "<span class=mOption title='Menu Button Offset'><span>Menu Button Offset</span>" +
                                           "<input style='width: 40px !important;' name='Menu Button OHO' type=text title='OP Horizontal Offset: Positive value to move right, negative value to move left' value=" + $SS.conf["Menu Button OHO"] + "px>" +
                                           "<input style='width: 40px !important;' name='Menu Button OVO' type=text title='OP Vertical Offset: Positive value to move up, negative value to move down' value=" + $SS.conf["Menu Button OVO"] + "px>" +
                                           "<input style='width: 40px !important;' name='Menu Button RHO' type=text title='Reply Horizontal Offset: Positive value to move right, negative value to move left' value=" + $SS.conf["Menu Button RHO"] + "px>" +
                                           "<input style='width: 40px !important;' name='Menu Button RVO' type=text title='Reply Vertical Offset: Positive value to move up, negative value to move down' value=" + $SS.conf["Menu Button RVO"] + "px></span>";
                        } 
                        else if (key === "Hide Button Offset")
                        {
                            optionsHTML += "<span class=mOption title='Hide Button Offset'><span>Hide Button Offset</span>" +
                                           "<input style='width: 40px !important;' name='Hide Button OHO' type=text title='OP Horizontal Offset: Positive value to move right, negative value to move left' value=" + $SS.conf["Hide Button OHO"] + "px>" +
                                           "<input style='width: 40px !important;' name='Hide Button OVO' type=text title='OP Vertical Offset: Positive value to move up, negative value to move down' value=" + $SS.conf["Hide Button OVO"] + "px>" +
                                           "<input style='width: 40px !important;' name='Hide Button RHO' type=text title='Reply Horizontal Offset: Positive value to move right, negative value to move left' value=" + $SS.conf["Hide Button RHO"] + "px>" +
                                           "<input style='width: 40px !important;' name='Hide Button RVO' type=text title='Reply Vertical Offset: Positive value to move up, negative value to move down' value=" + $SS.conf["Hide Button RVO"] + "px></span>";
                        } 
                        else if (key === "Themes")
                        {
                            optionsHTML += "</div><input type=radio name=toTab id=tcbThemes hidden><div id=tThemes>";
                        }
                        else if (key === "Mascots")
                        {
                            optionsHTML += "</div><input type=radio name=toTab id=tcbMascots hidden><div id=tMascot>";
                        }
                        else if (key === "Nav Links")
                        {
                            var links = $SS.conf["Nav Links"];
                            optionsHTML += "</div><input type=radio name=toTab id=tcbNavLinks hidden><div id=tNavLinks>" +
                                           "<p><a class=trbtn name=addLink>add</a>" +
                                           "<label>Delimiter: " +
                                           "<input type=text name='Nav Link Delimiter' value='" + $SS.conf["Nav Link Delimiter"] +
                                           "' style='width:40px' title='" + defaultConfig["Nav Link Delimiter"][1] + "'> Suggestions: \" \", \" - \", \"\/ \/\", \" • \"</p>";

                            if (links != undefined)
                                for (var i = 0, MAX = links.length; i < MAX; ++i)
                                    optionsHTML += "<div id=navlink" + i + " class=navlink><label>Text: <input type=text value='" + links[i].text + "'></label>" +
                                                   "<label style='float:left;'>Title: <input type=text value='" + links[i].title + "'></label>" +
                                                   "<label style='float:left;'>Link: <input type=text value='" + links[i].link + "'></label>" +
                                                   "<a class=trbtn name=delLink>remove</a><div class=handle draggable=true style='margin-top:1px;'></div></div>";
                        }
                        else // checkbox
                            optionsHTML += "<label class=mOption title=\"" + des + "\"><span>" + key + "</span><input" + (val ? " checked" : "") +
                                           " name='" + key + "' " + (defaultConfig[key][3] === true ? " hasSub" : "")  + " type=checkbox></label>";
                    }

                    optionsHTML += "</div></div><div><a class=trbtn name=save title='Hold any modifier to prevent window from closing'>save</a><a class=trbtn name=cancel>cancel</a></div>";
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

                    // nav links tab
                    $("a[name=addLink]", tOptions).bind("click", function()
                    {
                        var el = $("<div id=navlink" + $("#tNavLinks>.navlink").length() + " class=navlink>")
                                .html("<label>Text: <input type=text></label>" +
                                      "<label style='float:left;'>Title: <input type=text></label>" +
                                      "<label style='float:left;'>Link: <input type=text value='boards.4chan.org/'></label>" +
                                      "<a class=trbtn name=delLink>remove</a><div class=handle draggable=true></div>");
                        bindNavLinks(el);
                        $("#tNavLinks").append(el);
                    });
                    $("#tNavLinks .navlink", tOptions).each(function(){ bindNavLinks(this); });

                    return $(document.body).append(overlay);
                }
            },
            createThemesTab: function(tOptions)
            {
                var themes = $("#tThemes", tOptions).html(""),
                    p      = $("<p style='bottom:8px!important'>");

                p.append($("<a class=trbtn name=addTheme>add", tOptions).bind("click", $SS.options.showTheme));
                p.append($("<a class=trbtn href='https://github.com/seaweedchan/OneeChan/wiki/Custom-Themes' target='_blank'>custom themes"));
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

                p.append($("<a class=trbtn name=addMascot>add", tOptions).bind("click", $SS.options.showMascot));
                p.append($("<a class=trbtn name=restoreMascots title='Restore hidden default mascots'>restore", tOptions)
                    .bind("click", function()
                    {
                        $SS.conf["Hidden Mascots"] = [];
                        $("#tMascot>div[hidden]").show();
                    })
                );

                if ($SS.conf["Hidden Mascots"].length === 0)
                    $("a[name=restoreMascots]", p).hide();

                p.append($("<a class=trbtn name=selectAll>select all", tOptions)
                    .bind("click", function(){ $("#tMascot>div:not([hidden])").each(function(){ $(this).addClass("selected") }); }));
                p.append($("<a class=trbtn name=selectNone>select none", tOptions)
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
                    $("a[name=save]").text("apply");
                }
            },
            keyup: function(e)
            {
                if (!$SS.options.saveAndClose)
                {
                    $SS.options.saveAndClose = true;
                    $("a[name=save]").text("save");
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
                    var fontSelect = $("<select name=Font>");

                    for (var i = 0, MAX = $SS.fontList.length; i < MAX; ++i)
                    {
                        var name, value;
                            name = value = $SS.fontList[i];

                        fontSelect.append($("<option" + " style=\"font-family:" + $SS.formatFont(value) + "!important\"" +
                                            " value='" + value + "'" + (value == $SS.conf["Font"] ? " selected=true" : "") + ">" + name));
                    }

                    $("select[name=Font]").before(fontSelect).remove();

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
                    else if (name === "Menu Button OHO")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Menu Button OVO")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Menu Button RHO")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Menu Button RVO")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Hide Button OHO")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Hide Button OVO")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Hide Button RHO")
                    {
                        val = parseInt(val);
                    }
                    else if (name === "Hide Button RVO")
                    {
                        val = parseInt(val);
                    }

                    $SS.Config.set($(this).attr("name"), val);
                });

                // Save Themes
                $("#themeoptions #tThemes>div").each(function(index)
                {
                    if (!$SS.conf["Themes"][index].default && !this.hidden)
                        themes.push($SS.conf["Themes"][index]);
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
                    if ($(this).hasClass("selected"))
                        selectedMascots.push(index);

                    if (!$SS.conf["Mascots"][index].default && !this.hidden)
                        mascots.push($SS.conf["Mascots"][index]);
                });

                $SS.Config.set("Mascots", mascots);
                $SS.Config.set("Selected Mascots", selectedMascots);
                $SS.Config.set("Hidden Mascots", $SS.conf["Hidden Mascots"]);

                // Save nav links
                $("#themeoptions #tNavLinks>.navlink").each(function()
                {
                    var nLink = {};

                    $(this).children("input").each(function(index)
                    {
                        if (index === 0)
                            nLink.text = $(this).val();
                        else if (index === 1)
                            nLink.title = $(this).val();
                            nLink.link = $(this).val();
                    });

                    if (nLink.text !== "" && nLink.link !== "" && nLink.link !== "")
                        links.push(nLink);
                });

                $SS.Config.set("Nav Links", links);

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
                "<span>Navigation Opacity:</span><input type=text name=navOp value='" + (bEdit ? tEdit.navOp : "0.8") + "'>" +
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
                "<a class=trbtn name=" + (bEdit ? "edit" : "add") + ">" + (bEdit ? "edit" : "add") + "</a><a class=trbtn name=cancel>cancel</a></div>";

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

                return $("#theme" + tIndex).removeClass("selected").removeClass("nsfw").hide();
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
                        "<a class=trbtn name=" + (bEdit ? "edit" : "add") + ">" + (bEdit ? "edit" : "add") + "</a><a class=trbtn name=cancel>cancel</a></div></div>");

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

                    mIndex  = $SS.conf["Mascots"].push(tMascot);
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

                return $("#mascot" + mIndex).removeClass("selected").hide();
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
                    navOp:      "0.8",
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8",  
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
                    navOp:       "0.8",  
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
                    navOp:       "0.8",  
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
                    navOp:       "0.8",  
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
                    navOp:       "0.8",  
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    customCSS:   '\n\n\n\n\n\n"+($SS.conf["Layout"]===2?".opContainer{display:block!important;border:1px solid "+this.brderColor.hex+"!important;"+($SS.conf["Sidebar Position"]===3?"margin-left:-"+($SS.conf["Side Margin"]+2)+"px!important;padding-left:"+($SS.conf["Side Margin"]+2)+"px!important}.opContainer,":"}"):"")+".post.reply{background:-webkit-linear-gradient(top,rgba(244,244,244," + this.replyOp + "),rgba(239,239,239," + this.replyOp + "))!important;background:-moz-linear-gradient(top,rgba(244,244,244," + this.replyOp + "),rgba(239,239,239," + this.replyOp + "))!important;background:-o-linear-gradient(top,rgba(244,244,244," + this.replyOp + "),rgba(239,239,239," + this.replyOp + "))!important;box-shadow:0 2px 5px rgba(0,0,0,.05)!important}.reply.highlight,.qphl{border-color:rgba("+this.linkHColor.rgb+",.6)!important}'
                },
                {
                    name:        "violaceous",
                    author:      "!MaSoOdDwDw",
                    "default":   true,
                    bgImg:       false,
                    replyOp:     "1.0", 
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    navOp:       "0.8", 
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
                    customCSS:   '.op .postInfo { width: 100% !important;\ndisplay: block !important;\nbackground: rgba(255,255,255," + this.replyOp + ") !important;\n" + ($SS.conf["Rounded Corners"] ? "border-radius: 3px 3px 0px 0px !important;\n" : "") + "}.op blockquote{" + ($SS.conf["Rounded Corners"] ? "border-radius: 0px 0px 3px 3px !important;\n" : "") + "background:-webkit-linear-gradient(top,rgba(255,255,255," + this.replyOp + "),rgba(242,242,242," + this.replyOp + "))!important;\nbackground:-moz-linear-gradient(top,rgba(255,255,255," + this.replyOp + "),rgba(242,242,242," + this.replyOp + "))!important;\nbackground:-o-linear-gradient(top,rgba(255,255,255," + this.replyOp + "),rgba(242,242,242," + this.replyOp + "))!important;\nbox-shadow:0 2px 2px rgba(0,0,0,.05)!important}.thread>.replyContainer>.reply{background:-webkit-linear-gradient(top,rgba(204,214,228," + this.replyOp + "),rgba(183,197,217," + this.replyOp + "))!important;\nbackground:-moz-linear-gradient(top,rgba(204,214,228," + this.replyOp + "),rgba(183,197,217," + this.replyOp + "))!important;\nbackground:-o-linear-gradient(top,rgba(204,214,228," + this.replyOp + "),rgba(183,197,217," + this.replyOp + "))!important;\nbox-shadow:0 2px 5px rgba(0,0,0,.05)!important}.reply.highlight,.qphl{border-color:rgba("+this.linkHColor.rgb+",.6)!important}"+($SS.conf["Layout"]===2?".opContainer{display:block!important;\nborder:1px solid "+this.brderColor.hex+"!important;\n"+($SS.conf["Sidebar Position"]===3?"margin-left:-"+($SS.conf["Side Margin"]+2)+"px!important;\npadding-left:"+($SS.conf["Side Margin"]+2)+"px!important}.opContainer,":"}"):"")+"box-shadow:0 2px 5px rgba(0,0,0,.05)!important}.reply.highlight,.qphl{border-color:rgba("+this.linkHColor.rgb+",.6)!important}a.quotelink:not(:hover){color:#cc2200!important;\n}.boardTitle {color: #AF0A0F !important;\ntext-shadow: 1px 1px 1px #7A070D !important;\n}.boardSubtitle, .boardBanner .boardSubtitle > a{text-shadow: none !important;\n}.postNum a { color: #000000 !important;\n }',
                    bgRPA:       "no-repeat bottom right fixed"
                },
                {
                    name:        "Ao ni sarasu", // based on jaygeegeegee's http://userstyles.org/styles/75602/last-fm-kind-of-blue
                    author:      "seaweed",
                    "default":   true,
                    replyOp:     "1.0",
                    navOp:       "0.8",
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

        nav:
        {
            hasInit: false,
            init: function()
            {
                if (!this.hasInit)
                {
                    var select = $("#boardSelectMobile"),
                    links      = $SS.conf["Nav Links"],
                    div, a     = [];

                    if (!$("#bNavWrapper").exists())
                    {
                        div = $("#boardNavDesktop").prepend(select.bind("change", function(e)
                        {
                            location.href = location.href.replace(/(\.org\/).+\/.*$/, "$1" + e.target.value + "/");
                        }));

                        $("option[value=" + $SS.location.board + "]", select).attr("selected", "true");
                        $(document.body).prepend($("<div id=bNavWrapper>").append(div));
                    }

                    if ($SS.conf["Custom Navigation Links"])
                    {
                        if (links == undefined) return;

                        for (var i = 0, MAX = links.length; i < MAX; ++i)
                            a.push("<a title='" + links[i].title + "' href='" + window.location.protocol + "//" + links[i].link + "'" +
                                ($SS.location.board == $SS.getLocation(links[i].link).board ? " class=selectedBoard" : "") + ">" + (($SS.conf["Use Title Text for Selected Board"]) && (links[i].title !== "undefined") && (links[i].title !== "") ? "" + ($SS.location.board == $SS.getLocation(links[i].link).board ? "" + links[i].title + "" : "" + links[i].text + "") + "" : "" + links[i].text + "") + "</a>");

                        if ((div = $("#boardLinks")).exists())
                            return div.html(a.join($SS.conf["Nav Link Delimiter"]));

                        if ((div = $("#pagesDrop")).exists())
                            return div.after($("<div id=boardLinks>").html(a.join($SS.conf["Nav Link Delimiter"])));

                        $("#boardNavDesktop").prepend($("<div id=boardLinks>").html(a.join($SS.conf["Nav Link Delimiter"])));
                        return this.hasInit = true;
                    }
                }
                else if ((div = $("#boardLinks")).exists())
                {
                    div.remove();

                    if (!$SS.conf["Custom Navigation Links"])
                        return this.hasInit = false;

                    this.hasInit = false;
                    return this.init();
                }
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

        menuEntries:
        {
            hasInit: false,
            init: function()
            {
                if (!this.hasInit && $SS.conf["Show/Hide Menu Entry"])
                {
                    var a = document.createElement("a");
                    var onclick;
                    a.href = "javascript:;";

                    var open = function(post)
                    {
                        if (post.isInlined)
                            return false;

                        var p         = $(post.el),
                            bIsHidden = p.attr("hidden") !== null;

                        if (p.hasClass("op") && p.parent().previousSibling(".hidden_thread").exists())
                            bIsHidden = true;

                        a.textContent = (bIsHidden ? "Show" : "Hide") + " this post";

                        a.removeEventListener("click", onclick);
                        onclick = function()
                        {
                            var pc = $("#pc" + post.ID);

                            if (pc.hasClass("opContainer"))
                                pc.previousSibling().click();
                            else
                                pc.children(".hide_reply_button:first-child>a").click();
                        };
                        a.addEventListener("click", onclick);

                        return true;
                    };

                    this.createEntry(a, open);
                    return this.hasInit = true;
                }
            },
            createEntry: function(a, func)
            {
                return document.dispatchEvent(new CustomEvent("AddMenuEntry",
                {
                    detail: {
                        el   : a,
                        open : func
                    }
                }));
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

                    if ($SS.location.board === "f")
                        $(".postarea input[type=file]").riceFile();

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
            this.icons       = new $SS.Image(theme.icons || defaultIcons);
            this.header      = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA";
            this.emoji       =
            {
                sage:       this.header + "A4AAAAOCAMAAAAolt3jAAABa1BMVEUAAACqrKiCgYIAAAAAAAAAAACHmX5pgl5NUEx/hnx4hXRSUVMiIyKwrbFzn19SbkZ1d3OvtqtpaWhcX1ooMyRsd2aWkZddkEV8vWGcpZl+kHd7jHNdYFuRmI4bHRthaV5WhUFsfGZReUBFZjdJazpGVUBnamYfHB9TeUMzSSpHgS1cY1k1NDUyOC8yWiFywVBoh1lDSEAZHBpucW0ICQgUHhBjfFhCRUA+QTtEQUUBAQFyo1praWspKigWFRZHU0F6j3E9Oz5VWFN0j2hncWONk4sAAABASDxJWkJKTUgAAAAvNC0fJR0DAwMAAAA9QzoWGhQAAAA8YytvrFOJsnlqyT9oqExqtkdrsExpsUsqQx9rpVJDbzBBbi5utk9jiFRuk11iqUR64k5Wf0JIZTpadk5om1BkyjmF1GRNY0FheFdXpjVXhz86XSp2yFJwslR3w1NbxitbtDWW5nNnilhFXTtYqDRwp1dSijiJ7H99AAAAUnRSTlMAJTgNGQml71ypu3cPEN/RDh8HBbOwQN7wVg4CAQZ28vs9EDluXjo58Ge8xwMy0P3+rV8cT73sawEdTv63NAa3rQwo4cUdAl3hWQSWvS8qqYsjEDiCzAAAAIVJREFUeNpFx7GKAQAYAOD/A7GbZVAWZTBZFGQw6LyCF/MIkiTdcOmWSzYbJVE2u1KX0J1v+8QDv/EkyS0yXF/NgeEILiHfyc74mICTQltqYXBeAWU9HGxU09YqqEvAElGjyZYjPyLqitjzHSEiGkrsfMWr0VLe+oy/djGP//YwfbeP8bN3Or0bkqEVblAAAAAASUVORK5CYII=",
                neko:       this.header + "BMAAAARCAMAAAAIRmf1AAACoFBMVEUAAABnUFZoUVddU1T6+PvFwLzn4eFXVlT/+vZpZGCgm5dKU1Cfnpz//flbWljr5uLp5OCalpNZWFb//f3r6+n28ff9+PRaVVH59Pr//vr38vj57/Dp7eyjn5zq8O5aVVJbYV9nVFhjUFRiWFlZVlFgZGOboJzm5uZhamfz9/bt8fDw6+drb26bl5j/8/lkX1z06uldWFS5r61UT0tfWlbDwr3Ew76moqNRTU7Mx8P75OpeY19pWl1XW1qzr6x5eHaLiojv7+1UT0xIU0uzqadVS0nV0MxkZGT5+PPk497///ra29Xq5eFtY2H28e2hnJignJlUUE1dXV2vrqxkY2FkYF/m3d5vZmfDuruhl5aZlJHx8O75+PZWVVP29vT/9fTj3trv6ubh5eRdXFqTkpBOTUtqZmX88/RMQ0T78vPEvr7HwcHDwsDq6ef///3Gx8H++fXEv7tZWVedmZZXXVudnJp0c3FZU1f79fnb1dlXUVVjXWFrZmy8t7359/qLj455e3q4s69vamZjX1zy4+avpaReWFz/+f1NR0vu6Ozp4+f48/lnYmi8ur3Iw7/69fHz7+xbV1SZmJZVUk1ZV1zq5ez++f/c196uqbDn4uj9+P7z7vRVVVXt6ORiXl/OycXHw8CPi4ihoJ5aWF3/+v/k3+axrLOsp67LzMZYU1m2sq9dWF5WUU1WUk/Au7eYlJGqpqObmphYVV749f7p5Or38fPu6OpiXFz38fH79vLz7urv6+hhYF5cWWKal6D//f/Z09Xg29exraqbl5RqaW6kpKTq5uPv7Of/+PDj29D//vP18Ozs5+OloJymoZ1ZVVJZWVlkYF2hnpmblIyspJmVjYKQi4enop5STUlRTUpcWUhqY1BgWT9ZUjhcV1NiXVkkhke3AAAABHRSTlMA5vjapJ+a9wAAAP9JREFUGBk9wA1EAwEAhuHv3dTQAkLiUlJFJWF0QDLFYDRXIMkomBgxNIYxhOk4wwCqQhQjxgxSGIsALFA5BiYbMZHajz1oJlx51sBJpf6Gd3zONcrqm/r1W8ByK0r+XV1LXyOLLnjW6hMGpu0u1IzPSdO17DgrGC6AadrVodGcDQYbhguP6wAvAaC0BRZQalkUQ8UQDz5tAof0XbejOFcV5xiUoCfjj3O/nf0ZbqAMPYmzU18KSDaRQ08qnfw+B2JNdAEQt2O5vctUGjhoIBU4ygPsj2Vh5zYopDK73hsirdkPTwGCbSHpiYFwYVVC/17pCFSBeUmoqwYQuZtWxx+BVEz0LeVKIQAAAABJRU5ErkJggg==",
                madotsuki:  "data:image/gif;base64,R0lGODlhFAAPALMAABwHHHIAABEREZhtjZt1ckUYNHkYJrdyhreKilYtO2tFTOe+pYZFTFY+Qf///wAAACH5BAEAAA4ALAAAAAAUAA8AAARr0MkpmWU0Zzb4xRrFHN8XVp/CqIp6smsrt2HTzHd+K5qt+0BeppGwIRrHI7FIaTiWiEVDKkUkmImnwZmILr7ghdWRMGSJxnDYei1QioCFQPCdIwAJdwjgBSMIACcTAAEIhgQBgYKDAY2JIREAOw==",
                sega:       this.header + "CwAAAALBAMAAAD2A3K8AAAAMFBMVEUAAACMjpOChImytLmdnqMrKzDIyM55dnkODQ94foQ7PkXm5Olsb3VUUVVhZmw8Sl6klHLxAAAAAXRSTlMAQObYZgAAANFJREFUGJVjYIACRiUlJUUGDHBk4syTkxQwhO3/rQ/4ZYsuymi3YEFUqAhC4LCJZJGIi1uimKKjk3KysbOxsaMnAwNLyqoopaXhttf2it1anrJqke1pr1DlBAZhicLnM5YXZ4RWlIYoezx0zrjYqG6czCDsYRzxIko6Q/qFaKy0690Ij0MxN8K2MIhJXF+hsfxJxuwdpYGVaUU3Mm5bqgKFOZOFit3Vp23J3pgsqLxFUXpLtlD5bgcGBs45794dn6mkOVFQUOjNmXPPz8ysOcAAANw6SHLtrqolAAAAAElFTkSuQmCC",
                sakamoto:   this.header + "BEAAAAQCAYAAADwMZRfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAxVJREFUOE+Nk19IU1EYwK+GQQTVQ39egh6ibKlzw91z7rn3bvfOmddNszl1bjKXc5rJJGmBUr7Yg9qTD0IalFgRBEYg6EDQQB+GovQyQgiaUZsoLcgHMcr069w7MgcGXfi453zn+37fv3MYZt/n99e76tzVj4JN/hP79fvXnV3hnNabwUBjoOHcgTYOu/JQspgTzsqKgn9BfD4vkWTzur287PqLVy+zM+yePB7KsRXLywTjnSpnZctBkPCdW8ccDuU55vBO8RXbkC/oP5ph19V5+7LIky0OY1BKbZEbLcFSt7u6pN7jLmltCVrr3DV5jY3+KovFEsccB1KJNVpefe10BqS2tqqO4/AuphBB4L/LkrRqNgtJs1lMypLls1kU38mytMLz/E8VIlutqVqX6/weZG52OttRXjbE0cP/FYLRlpVjDXuQ/r77x2XZPKkCHA4HBAIBkCQpAygIAvh8Pu2MZgO0Lz+QSa/sQfwN9RfpVN66XC6Ynp6GhYUFGBwczAC1t7fD0tISxONx6O7upgHILmsqvLcHodOggfiV/v5+SCaT4HQ6IRaLgdfr1bIRRREmJyfBZrNBNBqF+fl5sNsdgE2GiAbp6bmbdbXC7qWQbxMTE7C2tgY6nQ5SqRSEw2ENopaoZpCXlwdTU1NaoECgCbgiU6y8QH+ECYWaTymK7TWdys7MzIwGaWtrg42NDejo6AB1WjU1NZo+FArB2NgYrK6uQrAlCASxn2z6wkuMp87VIAhkE2MEAwMDkEgkYHx8HBYXF0HtkQpRy1BLiEQisLy8rPVNKSsFjEzrXH4+z1hlS4xDhKadNu7t7YPR0VHweDzAEVWfHru6HxkZgeHhYVAURYNjkylVWKArZjjMzqmdVi+QCsLUkQiEjvDvncEkvU7/qQ0Vgukeo48Go87IiCJnZNmipxiz7wXEbVDnbUxQOgM12h9n6qTq6NvapRdtkwaP0XK8RmPuYSbxYfaQ/sJJhjfknuFRURUi7AMOozcCwl94hLZp5F+EioDQVwqYI6jomZU1NFtM+rOSxZjVazcyvwHr/p/Kws1jegAAAABJRU5ErkJggg==",
                baka:       this.header + "BAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAA0pJREFUOE91k3tI01EUx39JOpA0H4jNx0pbD3XTalISWf8YFlEgldqDsBLLyqjEKBCiLLWiggh6/KEV1WZ7OaelLZvDdDafNW1JFraWe/32+01FrUZ9uy4ylLpw4Z5z7/nc77n3HIqaMRIjZJyEcNX+uFCFeGmI/GZciEIsCFJUTvoAzDz+1y7K76MSwhX5hXl6z+WSbrzU2KB8YEGDwgrTaxZ3b7xHcaHhR3xw7Z5/UviB1ReP5XSg3+TAqYJOxMzWISFIC0GQDomhTVA9skCnsaAwp/vnMq66dBokNuBR9uFd7T9Z1zCunjci0qcRJUVdoJ3DYOhRnC/qBZ+jQbfeCc+37yjY2UEg0iwvJE0k9l8Z+8xqHmTgot0QLdQgTaQFQ2AsOzlHvOu1S5pwOLsHHo8HjHMCq2MazNvTlByKHyrJLDvdR25jMWRxYx5HjeMH2r1BDOOeguRua4OI14jx8a8YH5tA+al3EHKlW6mYOapb2oZBOOwMbEMseAE12L+jjUh3w+VipyAZ65oxn1NP/GMYGR6Ftn4Qsf7qa9S82Y/l/X122G0uL2TbxmZEz1WhXW8mUol8moXu+SCi/OoQ6VsDh3UUwyQ1k9GOaI5MTkX4yWTGHutvgI1F28sviAlRgxeoRm62HvsyW8En9pZ1TYgi6TntoyQtFm86rVgUoJZRvDnKMmXVAGxWmkAYOBwudBqGcHCvHulrGpGT2Uy+z4yT+QYsCXtCUpp8GxbKhx8gDK0ro+KjJGvzdjfDZnN6VdisLD5/JjArQ2zW66PJOj2lEZtStaBphkwah7K6kMJ/GEulp1bMWhAmMbTozOQRaWRtfoZVgjo4iRra4SYgGi26TwjxVeDKhR7Y7U606ixICq9tr7hd7+OthRWL7yUnJ1WPmXotqLhpRICPHCePtuFV6xdUPTAhcWEtRHEqfHpPyto4hPXLXnzflSEJnFaN3OCKDcsFsrEntR9RUmxARLAUgT5iBPuJsXWDBj0dZjRU9yNV+PTbpjTp9OA/pOSk24nRkXf1J462oPxcJ65f6ULlHSMulepRerYDgvj7A0cKpNz/tyTZqbzXO4t0ZZGQJ34RH11lFHIlA8LIqreCCMUZRY3cd2bwL/5/RmjNSXqtAAAAAElFTkSuQmCC",
                ponyo:      this.header + "BAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAuNJREFUOE+Nk3tI01EUx39BTytConQTt1am07m5abi5KT5S8z2dj1yOEMUC7aUgIoimlmUEWX9kBZGWaamEmE6U1BI1XNPNGTrnHs33IwuSXrL4NgcJ0mNdOHDh3PPhnPP9XoKwcroJYvMQiRSicHCQKCgUyZC9/T5rNet5KUFs0zCZbZMsFmZ9fTEjEEBDp4/KSSSb/4JoGIyWaTYbiykpWEhOxhSHAzWD0aqkUGhWAcVkW58xlvuPhfh4zItEmOHxYDR3MhcdDaNAsKJydAz5IySKRNjEUmy88vjOVaU8F0iPCqCNjEBHkC/UYaGYFwqxmJoKLYOhkxPElg0QsbNtTlmox9yjRD9UCbnoOR+J/lwRWtOCcdXfDc2BPpg0d7CQlIQZPh9KKlVkAQjJ2x2zmOSsQu7hpzUJfBhLjsNQmADjxcT10Bcl4rE4EHc5LjBEhEPn7f1WTqXSLQB/s1Tp7vslsoIkyPPiMJAbi86McBguiaHKjoEqR4jJy2K0nAxApzMN5iUGrclrKVaz2fUvuF4tRbxDKA90w5VjTFyLZKHpTBSq4/1QnxGB2qxoVIZx0JopRCPHFSNOThfWZzfrXDcZEowH4iA05ATg68hDtBaL0HAuCm3lJ9Bfcx2fFNUoi/DCjRgfNHHd1wCZA2TyXjNkE6F0cBDpPFiojeNi8EkJdFoN3vXch0nbBJOhDd907dANv8JITxNqziag3ZsJbUDAwLin50Q9QWwl1qSYoNOVvUcOoqOqAAa9Fu9H2/F9+B5WZLcwOyxFX18flLI+VASyMGVeoJHD+Tzq5BS1PoaKRrNT8127P74swsq4FCa9FKvqBqwaOiz3hdEuLKueYSyECT2LNW0eIfo3E/WmEbvnG1MUJnWdpWhDGDvxQXZHo+RR0uW2tnv+auPX+TvtJm7zKpaen/4y2yjBUlcxlvtvmvT16ZWDpQeoVv3/60F/NrHjTf4ugazIXtJ8ivjnz/sJ+yGQRjcqUdIAAAAASUVORK5CYII=",
                rabite:     this.header + "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",
                arch:       this.header + "BAAAAAQCAMAAAAoLQ9TAAABCFBMVEUAAAAA//8rqtVAqtUQj88tpdIYks46otwVldUbktEaldMjldM2qNcXk9IWktQZkdIYlc8mnNUXlNEZktEZlNIYktIWlNMXktE7o9klmdMXktFHqdkXk9EWk9EYk9IlmtQXlNEXktAWk9AWlNEYlNFDptkZldMYk9E4otg/p9kXktEXk9AXlNA4otclmdQXk9IYktEXlNEwn9YXk9IXk9FFp9o3otgXk9FPrdwXk9E2otdCptkXk9E/ptkcldIXk9Edl9IXk9EjmdUXk9EXk9EXk9EbldIcldIjmdMmmtQsndUvntYyn9YyoNYzoNc0odc1odc2odc6pNg7pNg9pdlDp9pJqttOrdzlYlFbAAAARXRSTlMAAQYMEBEVFhgcHR0mLS8zNTY3PT4/RU1kdXp6e3+Cg4WIiYqMjZGXl5mbnqSnrbS3zMzV3OPk7Ozv8fT29vf4+fz8/f7SyXIjAAAAmUlEQVR4XlXI1WLCUBQF0YM3SHB3a1B3l7Bx1///E6ANkDtva0jKbCW2XIH1z2hiZEZ4uUgxo7JedTQye/KN/Sb5tbJ+7V9OXd1n+O+38257TL+tah3mADAwSMM7wzQWF4Hff6ubQIZIAIb6vxEF4CZyATXhZa4HwEnEA+2QgoiyQDnIEWkjVSBBZBqXbCRlKYo8+Rwkyx54AOYfFe7HhFa7AAAAAElFTkSuQmCC",
                centos:     this.header + "BAAAAAQCAMAAAAoLQ9TAAAB5lBMVEUAAADy8tng4Ovs9tnk5O3c7bX44LLduNO1tdDh7r/eutj43q2kocX23az07N+qqsvUqcmXl7331ZXJj7r40o/Pn8T42qP63KjNw9n21p3Y387Ml7732JzR55z05MSxtMLGn8TC4Hx8eqt8e62Af6/B4HnG4oPC4HzH44fBf7LCgbOkoMTcsrmtn8PWqcfFtKrj4Jvs2ZOz2FnMqLXT3KfY5p60Z6NUU5XRuqHzwWSywqDn3JaiiLWahrWhkry5zJjRmqm1Z6P1wmb1y319fK632mK5cKi5nH+73Gu73Gy73W283W+9eK17e6y1yZS3aqRZWJdcW5ldXJplXZppaKBwb6VwcKV5eKswL306OYNPTpGkfK+m0kGpUJWq1EnEqIuXK3+Xh7ahP4qhkryMfK6BgK+CdpGMaKKMa6O9ea2+eq6+oYW/eq+NbqWVlL2Wlr7AjanA4HnA4HrBkqbBlafB33rCgbLCmKjCxIzC1mSs1UytV5mtxIWt1lCuz2evWpuvXJywxYzHjrvH4oXIjrrN2HXO5pTO5pXUlYnUlYvVl5Hb0G7e0XTg03rhr5fpzHPpzXTp0Hvtz3/wrDHytknyt0zyuE3yuVHzvVr0wGP1x3T1yHf1yXe0ZaL2zYP30o730pD31ZeRIcF5AAAAQ3RSTlMAFBkbHEhJS0xMTk5UWWBsd4SEiIiPkJCVlZaam6CjpK29wMPDxMTFxcnK193e3+Dg4uTn5+fo6e/v8/P4+fn7/P7+J4XBAAAAAOBJREFUeF5Vj1OvAwEYBb/yGlu717atLW0b17Zt2/6nze42TTpvMw8nOZCAmwUpiIY6c5IiLi9tPX64GairqszHQ4X2VB64v1Cs6PxMPJSdHM777s6/jyaMRGiRLyyrb88OpjZ3CzAXrm1sqzSNNeN7kVBPNgB7cG51abE5l9cXDces7emQ1uadHhutFUg6gpPKkSIqQGavwz7r7O/+/3t/rSdjI9XDM3qz4fr3B/3iA0aJTG9x71+9oR/PLDwUe2wm19bly+fTIxHyEETatbPewGEw6Mk/tKZCEqSQQUlIHB/QNBEjjVN1AAAAAElFTkSuQmCC",
                debian:     this.header + "A0AAAAQCAYAAADNo/U5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAZ5JREFUOE+Nkk0oBHEYxv8fu5GQj3JwcaDkIAc5IpR87M7MKnIVJVKclaIQ5Sy5OLkgR7n5OigcSNpmd2c2Vyfl4KT8/muWiVU79TTv+7zv837NCBF6PG1X+NpZyEYSD9mIc+tHnBPe23B9xKrCuTmbQA/JKfABrhBswa1hH4A38IwfOxPdX1qcjiCQxO5NyrjKV70TnSbeRPwJvGN3i4yyqnEucPY8ZZX9GSEgGK+RvFfyjk2VKZxzBNG8wJWWgh/xtDOeUXZ7Slr6TrSLYL9N4SMgYTTcwdc2ArvJcElhSVcM6mCNSV8n9hA59yTU5UWMG6HIbLhIWlglgWiC2L4Z79qTdo40D6ISuOWwKCWHyk9Fv8ldpUHOuGTuynwSBUynddPdlbEosVpP9Eu4FnOsRzUYNTsdmZN/d5LDiqM0w+2CMdAFFsFGWgfXxZnheqe/z+0puwEM0HHYV3Z9Sgz8TEz7GkQvpuJ/36ggj2AaHLrSlkULWV5x+h2E8xkZL16YVjGNaAUscfZ/f6c/k9ywLKI2MMcRWl0RLy007idmRbQJ7RIfDAAAAABJRU5ErkJggg==",
                freebsd:    this.header + "BAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAABIAAAASABGyWs+AAAABmJLR0QA/wD/AP+gvaeTAAADXklEQVQYGQXBS2wUZQDA8f83j33M9rF9d7u4loaWklaDpkSo9KDGaIKUaGxshD2YSPRiuDVeTDyhBxosJCoa40ktpAkPDcUqAYVIpUSUPrAulEdD2bbb7e7ObGcfM/P5+4kwKDvq6yJ1FYYcvb+YAkqAHo/HQ7FYrFIoCiurq9ZXJ06YSOkA+kBzfX06bys3zHxS9EL0tXDVyZfefacqV+X/ZSJx5+qLbx98LhaL9RiGEZWlEsWC/Thd9q6Pf3vs2u6Orc83rFsvTwwfLf5obgywT1Vjh2Hh+rbNsnTssJdNLedK5aIrpSuldKVXKsnH4+Pyn6FDXn5tMef9O+3NvdkvP1V4+EYw2AoQ+KSx8dRYS6NXXnwovaItXduSrrkinWxGOmZWJi9OyOK9m1LmsjIz9IH8QUMOd3WfAQwNKCy2tJwbHB5+XasPaxIHmc4g7WWEZ1MquBiRFlJTf1E7+Tl/H/8asavPzTY1nWd2ZkMDRPeBeHPz5ojwsilEQCBvTSKunCF3M8FSNkBGVTHDYYrLj8jVNhDZ2SMa2zo3MTamaIC/u6Ojr3DtrOrvP0BpdATnyBeIhTxpR5ABUlKSUlXS1dWstbVxdz6hPL0l1quGqkLaKwNvVcjEXNRd/4mit4Z19DjefBEPyCKxgQJQcF28dBrHNDGTSZSezsjeff0hraa2Vs2vrvit81O4vj9xLJcC4ADrQA7YAGqBGsAql/EtLdFQE/L7dF1XZmdnSrbPMJfXoLDmolQK8gJyQBowgQhQDRQBD+hsraVhd4e5MH+/oExfvWLJ9q3/3S7qMpNH2hsS40kFS4EUUAMA2IANRIBXv4uzuO67c2PykqkA5YmZ6bN18YPi0Yoknxc4AsJPCMLVAk2BLKDosCWqs/PZaulkuxk9fekcUBAAQGDks5FT0W++3NuYuC0DVUL4DIEdlIQDAj0IRkigaMjArkFx0tf523sffrQHyKsAgHPhwoXLL+yP9/kePNhk5ExUTyKFkJVAUAiCFZrQup4Rv9ftuLV/6ONBYBVABQAArMvJ5MXW7duD6P62sD8UrPAFRU1TpeCpCnGvPZr7WW///v0jpw+VC9ZdAAABAAAAAMLo7drWrmQyPWG/r8tnaGIjaM05ujr16x/ZBFh5AACA/wGZnIuw4Z4A3AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMi0wNy0wNFQxMDowOTo0OS0wNDowMOPVpFwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTItMDctMDRUMTA6MDk6NDktMDQ6MDCSiBzgAAAAAElFTkSuQmCC",
                fedora:     this.header + "BAAAAAQCAMAAAAoLQ9TAAABPlBMVEUAAAApQXIpQXIpQXIqQ3UpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIpQXIqQ3QpQXIpQXIqRHYpQXIpQXIqQ3QqRHYpQXI8brT///8uTYMpQnM5Zqg5ZqnS1+I4ZaY4ZactSn8uRnYrQ3MrRXgsRHUsR3s8bbM8brMtSX4wUosxVI01XZw2X50vUIguToQvR3c6X5o6aKs6aq08Un8qQnM9VIFDWINJXohKcKlXapEqQ3UvUIc2X55bhcBdcJVgcpdhfapmd5tuk8dxgqJ1hKR5jbB6iah/m8Shudq3v9C4wNG/x9bFy9nFzNnFzNrIz9zK0NzK0t/O2+3P1eA2YaDU2eTb3+jb4Oje4urj6fHm6e/s7/Tz9fj3+fz7/P38/f3+/v83YaEa/NNxAAAAHnRSTlMABAoVGyY1SVlpeIuQsLfDzdHW4+3y8/b39/n6+vr4+ns8AAAAyklEQVR4XiWN5XrDMAxF75KOknYdZJS0klNmHjMzMzO9/wvMcH7I37mSJShsJ+5NjMT6umDoHyXDcI/2qJadh++P3cle1de+9yPe3/bTY92wzfzr7wGtP3JrAI72BZGVtcAdQlwHy+JS1pDbBE9qamZF3BYrjQxPEXwKc6dC8bXFm0QIpmt8kn0Rn093q82UCtK8oXZckwFJzuulV8bHkajPyXdbnJnARfDHs0trz+JQ+5AFvzp/L0+cL2qPAINUPrq5OC6p/64F/AMnrST+Dq/r7QAAAABJRU5ErkJggg==",
                gentoo:     this.header + "BAAAAAQCAMAAAAoLQ9TAAAB9VBMVEUAAAD///+AgICqqv+AgIC/v9+Ojqqii9GAgKptYZKQkOmPj/ddUYBgW4eVjeCTgfiWjO5wbJaZkvPBvepkXomYkNldV4Bzbpl6dJ+Uj7ynoO6Vi+1qZI63se2mnudjXYjOy+GCfaqZjvWlm/Pc2e+Oh7NeWIOWjfeXjeW1sd+gl+diXIfp5/KHgKnn5/F2cZx6c6ZgWoXc2e6dltrAvNu0scrX1eTOyujCvup4c5qpovVpY43///+6uPPJyPXq6fvm5vrz8/z8/P7+/v/d3PixqvmxrPSyrfe0sPO0sfS3tMve2/3r6vy6ufPz8/3d3fi3tM63tPO4tsu5tsu5tvO6tfe6t/Vva5KRjKy7tvW7t/W9vPO/vM+/vvPCwfPEw/TFwvTFxOfGxfTGxvTHxvTIx/TJx/aTiOrNzPXNzfXQzfnRzuHS0fbS0vbT0uHU0e/U0uTU0/bW0+zW1ffX1vfY1/jZ2Pjb2/jc2uSTiemVkLSlnvbe3PTe3vng3fzg3f3g4Pnh4Pnh4fri4enj4/nk5Prl5Prm4/ymn/bn5vro5/rp6O/p6funoPWsqs3t7Pvt7fXv7vzv7v3w7/nx7/3y8f3y8v3z8vytqPWuqPX09P319P319P719f339v739/34+P35+f37+/+uqev9/f6vqvSwrPQAR0dcAAAAPHRSTlMAAQIDBAgJCwwVFyAsNUFHSVBneH+Bh4mVmZmanKCxsrK2tr3ExtDW19rb4ODl5u3t7u/w8/T6+/z9/f4MkNJ1AAAA8ElEQVR4XjXNw5aDURSE0YrRtm3b54+dtm3btm3bz9k3Wek9+2pSYFwT8ibzE93hwAtdJqK3nZo4J9hFXbP+vFHOthV6gnGzstZq94wdCs4UCCDymQ2v7X0LdYoSQ0MIENRYzJbRlPTTHu73ZNAL8vivmVui98PpzuqffX0mIPHJGtOQenukteJ+aS3b9htNpDnT9TeZH1bHAwBRMhGpd6e6uNrLoRgxBKmsX47nBlp678ojpEA40fejcmW4e/No0V8IIPfj6eKgbEJ3ZUnzgE1OqWp9Q3VeWRAsg51f1dZ8c31RmAsc+N5JGbG+zvj3BzDCPrzMDC9SAAAAAElFTkSuQmCC",
                mint:       this.header + "BAAAAAQCAMAAAAoLQ9TAAACVVBMVEUAAADh4eEAAAAAAAAAAAAAAAAAAAAsLCyXl5dgYGCnp6eTk5N3d3fBwcGqqqq8vLzNzc3Ozs7Ozs7Pz8/Pz9DQ0NHR0dLS0tLS0tPT09Pf3t/Pz8/i4eLb29vZ2drZ2tna2dra2trf3t/u7O/u7e/u7O/r6+vt7O/w7/Lw8PDy8fTz8fXz8fbx8fHz8/P19fb49/j49/n6+vuPxlmWyGOx437h9NDr9eD6/fj////+/v75/vTA5Jv6/fb7/fnL5bDL5q+AxjeDxUCEzTyGxUaGzjyHxkiHzz6J0D+Kxk6K0kCLyE2M00WNy06P00mSz1OUyF+W2FGX1FiY0F6Z02CZ21ac0Wiez2yfz2+f2mOh4GCi4GOi4WKi4mOk12+k3Wul32um1Hin0nun4G6n5Gin5Wmo23Op2Huq1n+q43Cr526s4Hit23+v6XSw34Cw34Gw6nWx4IKy4IOy44Cy63ez146z34az4IWz4YW03Y217nu38H2625e645G74pK83pu98Iq984W+4ZjA4px0tzDA5ZrB8ZDC5p7D55/E947F6KHF+JHH4qvH6qTI46/K5LLL5LN1tzLL5bN1uTDL57DM5bPM6qzM66/N5rTP6LbP6bTR6rfS573T67vT7LrV7r3X68XX7MHX773Y77/Y9rvZ8cHa7cjd88bi88/j8tTk8djk9tHm8trn89vo89zo9N3p9N3p9d7p9tvq9d/s+93s/dzy+erz+O73+vT4/PX5/fT5/fX5/vN1uzB3vTD6/ff6/fh5uTj8/fv9/vr9/vx8wjV/xDmrMRH0AAAAOXRSTlMAAAECAwQJDzk/RUlNU3F0kpSVlpeYmpucnaKjpKWqqqqtu8LExMTEzdTU1NXY4evy8vP+/v7+/v6LaR1mAAABD0lEQVR4XiXI03bEABAA0KltW9kaW3eSZW3btm3btm3b/q4mp/fxgqKOtpamhrqaqoqykrQYABh+PVMU9fjE5Xp8o54kgPHN0EBHU2N5YXZykiua0HHd2759VF2Sk5IYE5GGsmCEWLV1kVWwt5O+3x/qpgsy8k4ja+cJl2/v5C22tlgCAHtw9TQSa4s+AzfPSm0BRNl9SydhWJzLC567KrNhgrNwHIJ5qTz/2f9w7Jw/DNqIjVr04exW0AEOXcN3Ab7enr9eDW2VTJgehONyc2Z8XP5YdD0Tcuhcc4/r45OjGX51TEjYPbh8THRPvbz+CHusgSZlT7rP8PkCwfQKaQUi9Igr6JsRBMFiWZgb/AHKElRzKopZJQAAAABJRU5ErkJggg==",
                osx:        this.header + "BAAAAAQCAMAAAAoLQ9TAAABrVBMVEUAAAD///////+qqqr///+ZmZn///+qqqqAgID///////+tra339/eAgICoqKjx8fGMjIzm5ubh4eGPj4/g4ODIyMiAgICSkpKLi4vS1tbPz8+Xl5eMjIypqanIyMjW1tZ2dnbR0dGamprFxcV3d3d+fn60tbV3d3dcXFx3d3epqal7fHxxcXF+foCnp6hYWFhyc3Ojo6SMjI5fX196enp+fn6Li4xERERqamqgoKFpaWmFhoeen6A/Pz9QUFCWlpeSk5SUlZWUlZaOjo+Tk5RHR0cuLi5YWFgwMDAeHh40NDQ3Nzc6OjpcXF1rbG0XFxdSU1NVVVVXV1dZWVlbW1tnZ2lwcHABAQEEBAQXFxchISI+P0BISUpaW1xHR0kNDg4qKyszNDU1NTY9Pj8NDQ1cXF4XFxhSU1QSEhIDAwMrKywtLS4uLi4wMDFHSElISEggISE0NDVJSktNTU1FRUVWVlhGRkYEBAVBQUE0NTZQUVJQUVMFBQUqKitWV1lXV1daWlpaWlw+Pj8bGxtcXV9dXV1fX19fYGFgYGBkZGRlZmhpaWlsbGxwcHB2dna844Y9AAAAV3RSTlMAAQIDAwUFBggMDhkeICMkKCgqMDIzPj9ERFBib4CCg4iMjZCcnp+jqamrw83W1tvb3ePl6Ojp6+vs7u7v8PHy9PT09PT3+vr7/f39/f39/v7+/v7+/v50ou7NAAAA30lEQVR4XkXIY3vDYABG4SepMdq2bRSz/capzdm2fvOuDO397Rw0Ly4tz2QAQPbcxuZ2E/STJwfxPhWgG355fRrVAIVb1zeP9UDLfiSwkAcADe8fn7tFxWuEXFRDoer/OgoMTRBCumj8yJwPBo8Zhpk14U856/HI8n0ZUtpZ1udrSzfVneA4roNKjdrwpcMRilb8d8G60+lKnrpWcn9bO+B23w2O8Tzfq4aiNSZJqzn5O4Kw16h06fPZ+VUlUHfo97+VAEb7rSh2UgDd4/U+TBlQY7FMj5gBIGvcarVVfQPVPTG94D0j9QAAAABJRU5ErkJggg==",
                rhel:       this.header + "BAAAAAQCAMAAAAoLQ9TAAABj1BMVEUAAAD///////8AAAD///////8AAAD///8AAAD///////8AAAD///8AAAD+/v4AAAAAAAAAAAArKysAAAD///////8AAAAAAAAAAAAAAAD///8AAAAAAAAAAAD///8AAAD///8AAAAAAAAAAAAAAAB5eXn+/v5JSUnKysrS0tJ5eXmqqqqxsrL+/v4ZCgknJyeHh4eIiIjo6OgZCAdOTk7t7e3///8GCwwPAAArKyv19fX29vb9/f0EAAD////+/v4AAAAGBgYHAAAJAAAMAAANAQAPAQAVAQFyCQV9fX2pIRzmEQjn5+cBAAAFAAAAAADnEQjvEgn////uEQjyEgnsEQjzEgnxEgljBwPaEAj9EwnwEglHBQJHBQNNBQIBAAB3CQR5CQSHCgWLCgWRCgWTCwadDAWmDAapDAa/DgfKDwjWEAgGAADh4eHiEQjmEQjmEQkKAADoEQgLAQDtEQgMAQDuEQnvEQjvEQkPAQAfAgEuAwEvAwE8BAL1Egn3Egn4Egn6Egk+BAL+/v5CBQJrB0muAAAAT3RSTlMAAAMEBAkYGhsbMTRLUmpvcHeIjLe6vcHCxM3P0NbW3Ojp6u/w9ff5+fn6+vr6+/v7+/v8/Pz9/f39/f39/f7+/v7+/v7+/v7+/v7+/v7+Q8UoNAAAAO5JREFUeF4tiwVPA0EYRL9SXIsWl+LuxfcOd2Z3764quLu788NZNrxkksmbDP2R7vH6GioLs+iffEzNXd4+TqPErUUpVqMOvwgdzMPn1rv5vPsVeufBTaBK/bH2FPvkEUuIG5jIIc+sHYn/HJ3dC/Hxuo4y8s44dzwBbFkisHN8bVIdXs6jb+H97aCwbHEIqgcml64CD7YllNkAVQC940MLYe5YzvIeQAXNrd19Roc5MdzfdQLUUKaUYyuG9I8y1g4gj6hIak4X5cBIT2MquZJrJdOqpY11ZpAiqVwbY/C7KY1cRCrZxX4pWXVuiuq/hs49kg4OyP4AAAAASUVORK5CYII=",
                sabayon:    this.header + "BAAAAAQCAMAAAAoLQ9TAAABvFBMVEUAAAAcUaYdVKwAAAAAAAUABAwWRY4YSZYhZtIhaNYHDx0KCgoFDBcKCgoRMmYSNm0fXL0fXb8AAAAYS5gaTp8fXLwgXsEGBgYFBQUZSpgZTZ4JFSgODg4IEiIOJkwOKVIkW7EnXbQLGzUTExMKGC8LHjwMIkITExMiIiIPEBEPJ00QEhMXOXAaPncOJEgoXbApXbEcHBwwMDAEAgAfHRgQDgo3NC8AAAAHBwcKCgoLCwsJCQkaGhofHx8lJSUwMDA0NDQ4ODiRkZEICQocHBweHh4GBgYHCg8mJiYnJycpKSkrKystLS0uLi4ICAgODg43NzcRERF1dXUUFBSjo6O1tbUbGxsEBAMLGS8MDA0iIiIjIyMkJCQNDQ0NHTYKCQkoKCgPDw8QEBArMDkKCgkRERIREhMxMTEyMjISIz00Njk1NTU2NjYCAgIVFRU5OTo5P0c8PD0+Pj4/QURAQEBHR0dKSkpMTExSUlJiYmJlZWVnZ2cWFhZ2dnZ4eHh8fHx9fX2FhYUXFxeVlZWXl5eYmJiZmZmcnJwZGRmlpaWrq6usrKyvr68KFiq/v7/FxcXY2Nji4uLn5+ft7e0yif9uAAAAN3RSTlMAAAApKSkqKioqg4OEhISEhoa1tra3t7y9vr7S09PT09TU+Pj5+fn5+/v7+/v7+/v7/v7+/v7+70RY/wAAAPpJREFUeF4dyWNjw2AUBeC7dfYyorM6rx1exKltzLZt2/rDa/J8OgBVVlFDX39jcTZoUqCse251a2dvu6ccUtWlanLQ4Vpel+ThlWq1l3wEz58tx4dOt1dMlAJk9A5gMjG75LHwo46hzkwosGOMbejumoRvubC9EOrMviT0E0Us9fvN9dA6zxJCNv6+ECGsb6oNWsgmpZT9/UTUZo3Em6AW34guTL4jiAudiCM1kLcw8/SmHERfT1/eueBiDqR1GK1n9w+K8nglxYxd6QAML4ztXoQuj8YFgWcgqdJp8qzty26vaboCNIxBCshyQDKov0aXr29v1ufq1PwPx5Q7bCoh6eoAAAAASUVORK5CYII=",
                trisquel:   this.header + "BAAAAAQCAMAAAAoLQ9TAAABjFBMVEX///8AAAAAAAAAAAAAADMAAGYAAAAAHFUAGWYAF10AImYAIGAAHloAHGMAKGsAGmYAJmYAJGEAKnUAJ1gAMXYAJnEAJGQAI2EAK28AK3cAGTEAMHgALXEALXgALG0AFUAAI2oAK3EAMngANoYALXMANIAAM4IANIIAL3gANIcANokANoQANYQAOY0ANIYANooAN4kAN40AOY0APZMANIUAOY0AO5AAPZUAPJAAP5MAPpQAQJUAOYsAPpYANoUAPpoAPpUAM4AAQJkAPZIAPJEAQpgAN4cAPpQAPZUAPJEAO4oAOosAOo8AQJoAOYsAO44AQpsAO48AQp0AP5UAQpoARJwAQ58ARaAAQZgAQ54AQ50AQpgARaIARqMARaMARaIAR6QARaIARaEASakARKEAR6MASqsARKEASKcAR6MARqYAR6UATbEATa8ARqUARKAAR6oARqMASKgATK8AR6QATbIATbAASq0AR6cASKgASqwAR6UASKcATa8ASqoASqwAS6wASKoAS60ATbHn4CTpAAAAhHRSTlMAAQIFBQUGCQoLDxAREhMUFBUYGhobHB0eHh8gIiIjJCQkJCYoLC0xMTE0NDo6Oz1BQUNHSUxOVFVVVldaWl5iY2RkZWZoamtsb3FycnR1ent9f4KDhIiJioyNkJGYm5+foqOkpqamqKmqrKytsLKzs7e4uLy8v8TFxcXGx8rO0NXY2eZc4XYcAAAA00lEQVR4XkWN1VoCUQAG/3NWtwh7CTsQJOyk7BaDxuxA6bbrxf32gt25m7kZqDRYxziooDV7+1AalMUavQh2AsEZoWvzigLun+T17/c8QiJZ7qu2QKiNmyZthdcR1/as353jIeU1GxMHo5XHdqPFeX8IaDMdHPYN6dRN7LR4qQewdTa35HWkyh+fbxERAMjwlAWJv3CPSKDQ+H7XvHdkV4Pua3Gtm4sPKIF/WV8dop4VKBw/NU33B3x1JbTt+XwhkJQoqRfWvHOy28uqH8JIdomR/R+s9yR3Cso77AAAAABJRU5ErkJggg==",
                slackware:  this.header + "BAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AcEDi0qZWWDgAAAAx1JREFUOMt9kktoXHUchb/ffc1M7rySSdJMOknFPMRitLgoNKKI8ZHGKkgrjU8SitidimSh2UkXoQmoO1dGQSxJjdvOtqSaqlR0USEGSjVJGxuSmWR6M3fu4/93YX0g4rc9HA6cc4Q7DI+fpzz7PA8++2mxvZAeBZ4xhHtFcJRmXWsWvb36/OLcyxf5B/KHeYHy7DmGx1+YSDjmWTdlobTGMAStQGkNoLXS4tXDq7u7tUcWz49tA8jR8QUuzB5n5NTCV13F9JEo1JJwTLKuzU61QiOMcd0UDb+BncwQK3Rl15eNja3ui/Njq8aF2eMcO/XlBz0H8oO2ZUkum6A13WB99TtyzXlaCi24SaFa+ZFCzsG2DNnfkdbFjsI1APPhk+d6ujqznycdCxFozadYWvyMpx47wa+bPkGksKwUNnsk3TaCGASRXDZh5LpHXPPg4Rcni+3uYBxrtBbQghlscOVKmYHeEm0ZIZ9xyLffw41ND6VAa43SmjiMByzHYtjzwr9arfshxf5jOKlvKZfn8es77N2uks24PPfSFD/9Uvt7AtPKWmEU9d645eHYJo5tcKi/FX/zG+zmQxQH+rANk862DOW5N/hhaY64cJSa5xNFCgDDILZACMKYWAmh73HmzFsMlBQJ06LeiMinE1S3KzRCm5rXIIoUIoKIYCVM36urZFbEoiBLNMIhAE6/NsSB7h6SKZdL8xsUOnpx9j1KbTdARACIowArYe1ergfNT2i0mIbJys0GI6PT3N1/hJvrPxOFdRJNBQIy/FapI4Bpgohgcjuw+jq8jy8tV55MNBWI4ohS802CpizKv8q+FgALZAfYgSyAZtNro1oLaU1VvxCA029Oraxs7u/tKnXiNjn8HyKwur6lI++6vPK4V7IA7u+1Dyu1tr183ddNbkHuXP8/zEIYeFqiLRl6YO/p0bHJdflT/PD9qZa1W+ry99fcvlAlcZwUpuUAglIRYVgnDEIOlna4q0M/NPnuO1/PzMwg/045O/XeibUt5/Xangx6viSVFpK2jtMpvdyWCz+5ryf10clX3/amp6eZmJjgd441URWWJY8BAAAAAElFTkSuQmCC",
                ubuntu:     this.header + "BAAAAAQCAMAAAAoLQ9TAAABKVBMVEX////ojFzplGf1zbnqnHLvs5P10b3yuZv1xKrytZXvtJXys5LysI32waT0n3HxiVHwg0jxhk31kFn0h0zxf0P0hUrveTv2iU3yfkD1hEfyejv5eDLybSX0aR7zZxvyayH6ZxnxZBj4YhH7XAb5WALlUQLeTwHgUAHeTgHfTwD65NzdTQDdTQHdTgD31MfcTgLcTADcTQD////xt5/31Mf54dfmfE/dUAbeVQ/jcUDcTgHeWBnnflHohFvpjGbqkGztnX342Mz53dLgXiP65d399PHdUgrtoYLyu6Xzvaf76eLfXB/rkm/fWhvupojwrpTeVhTgYSfgYynzwa30xbL1ybnngFT31snngljhZS3539XhZzDiajbibDn77OX88Ovrl3X99vTjbz1fisGCAAAAMHRSTlMABgYGBwcHJiorMDA1NXGHjY2Nl5mZmZyfn6O5u8XHzc3X193j9fj4+vr6/f39/f08OUojAAAAx0lEQVR4Xi3HZVbDYBhGwQctWqzFPXiQ+36pu+LubvtfBKcN82/UEhld2vWXxyL6F92gbTPabse8hU/uHMx1SZoyyJWPTwq1Rs7GpYE9+Cg+OJcs1MHvU9y4fnrN31yUm18vMCIPjtw3QMndw4rs8ieVzAAcBlewpe1KM3uaBuD3Dda1BhWXAsi6AFY1a2SqifxZ+rnxWYcJDRkUS3fO1R5vwe+XZgw4D4L3RAJiknoXCVX3WeiUpJ5pIxTvVmg45pl5k4Ot/AGV2iqZBWgJJAAAAABJRU5ErkJggg==",
                windows:    this.header + "BIAAAAQCAYAAAAbBi9cAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAA+pJREFUOE+F0n84FHYcB3CWSsL9ojo/6ik64c6PnTjmSS0limmrpBm2G002y++xzXRz6zE0R4nbw+RnTj/WD4sbanLkkAe55ccYlyNme4SrO9u9d13PI3/saZ+/vs/3831ez+f9eb5aWsuqy2mjRYeNUa7YmtjfTico7jNJ8z0eG24NB9vvnDrvufzpq89Npnr8VjMddNmuRh9rDfp36mFg91oM7qPIc5JdbDJq3An/JfCu7Hl53W2lpS220pP2OuniN299jAYbYizSENIoAgbCTdrTKtxOJVdvGo8psUwKy7Vxe4ez1YEVudGP8YEZzyveInFJ6mZRHHqYazDspw/pJwTIuERM5JIwmUdGdyo9K7/BszGzzg6fXzZHGJ8KvzQqXKOpoIeZLjofWR++BPWyCEnPY4xFGEKWQcLjMjKmr1MwfcMYwmz/Y4KOgNki0V5k1dkjUWCK93Kp2PMFFawos8cm1gZ2GqjLXktL4mbQPHLQ4B9ZDFE5+S356fQlyuJMqzH++HnTo6ui2OO1ko9Ul+4fxfd3d4F7k4YTReqpuFS88bGZUE2QNNDobuIq8Q5CduHb7lFJaTnvnym9ergjMWD/FG8zf+aKS3G9JO5C01Asah6wUXrvALKEDoitMMHhDKrKJdg8RU2s0EB2EWWur8dd7PDPFv6dUC0Gv3kAN36VPRGP/5k5NS6lljWxG0TDiSr1VKhoPwhevRMSqkwRxDObc/DavGtpP6zoi8XOyZfhnyNEvKANBU0P8VPfI/wyNCGXSn7wlEmyA9KrgmOKGth3eDVvPfyywq2dnUEv2R9qG2rLsH7xJXziKnWcI8tlTvEC7Mu8hROlImTU9aKqcwQ1vWOihWFu+sJknmph5CvxQh87c7bNh/NXo03hrMCosyvLmMNgMF7TQL6J1dsZIUVwjKqEO+cajp5vxPN439U/gKBt8PTcYHzL/BgHCyOf4unAISj6mFC2bYC82kB5Ls460NHRUVsDeYSXpGw7UgC7sAtwShDgzdM38W7BbURXtqpqhfmB8sEQuXwoCM/6faGQuGCxyxyKWhIm+PrSD495WL3cT0hhi8Whc3NbAs9KaOyCTvrJ8qkdX19XBeTUDU00+55USFzVU2yHstcaix0mUAjJkJeuRU868Ucmk0lcguiBnMAVxjbbdHV1yeq8+u4Hgo22huSG+iQXp83ftaxW3lsPZcs6KG5T8OwaAfJiPcxlrVRVRhvF02i0F/t5VbHZ7JWDfErKTLnhE3mFPuRFepg/uxqz6TqLv6euGj3ut87t/4ylvre3t3ZehOWWO1zjSFEqMVP4GfGb/DBykJcjmaZOoLsc+hcVY/LaAgcTQAAAAABJRU5ErkJggg==",
                openbsd:    this.header + "BAAAAAQCAYAAAFo9M/3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoYAykIPu64pQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADTklEQVQ4y32RXUxTdxjGn3N6eujoKT3SUkuk3VoBGfVjgFXAsZ7WkipyYXQbuu3CzUXZmGRbssnFEseFkWzgcGzGXky9MWL8TsC4IeFgtK4oAqOnG5vMVl1pCMVWQD7b/y5M6jLdflfvxfPked/nBQA0NDSChqnGVrLuGkES742NhJAdhAKAuk9yyUs5Gry7RQMZAARCWgivpQiPe71P5DUfH0xaqTL7m/iiLkJmphawa+e4SM2PvUyC4yUIBu8CnAQKAK53rCA5OUtQtStVpJ4Gw/FOBddZVKhCfq4MP4n6+at+DUsJm/e0G9JZzYEvI2tHwlEYjDxomkZ+3nG8WroRtHihZVOhVlorDQzh0okhcByDP4ZGcf+X9XAsvY5/RsBa7Kq5H/CqLctKyl/g08S2i6fq8W/MS3P34T9wNDVYSeDX1eTD9xhiLXbtB/Akwmmv6Kr+ICFkLpGhtNSM3qsSstS3oX8lSsmsxS6ZVn3j6PvVVqhUcvC8AtPxVPxwygVKvngN89WOjgVprggGA4eenjB4nsXsTASpC63I0wVTZYPR11FoKRB8Ax54PCFk6BhMTk5CPR3GSbHouGzknr/bYFq9EAvfc9Tu1sLjHcXNKxLuTOTgzOlOe7IHBc/beAXWpWmXlz8a84nhcLQ+ecVzsAEQrMWuMX+f9HZF2YPZ28FVSNfoPWqOzMUmqYMAJm7+/OOzXQFwHGpyEV+vi+yvtxBC9pDmpgJC4tvI3mo9GTitIxvW24nT7ug67HY/3eDs2bbyrVsrY2day70rV6kRfDAHk5lDLJqAmmeRiD9GJDKHvwb74R8G0mkTPjrQTTG122xkTTbwaV2b1H4u16JQKXGr7yG2b8/H1MQ09IsTSEmRwzf4CCwzD+dmE1re8CI7wwi5XNlFf9vaTXX4dWJg4LLl7h05fpNGwNAMWpp9CIVYNO/tRCzGwpDFQaVMQTS2CKY0BWr3GVGWNSXKACDDaA4Mh976pq9f5Sy09GgKlmeAMIBKzUKpU+BFoxJecRhUfAbMxDi4eADfHVmE79v7q575gvvYeVvjZ58LD5mwsKUyX0hnf0feslnQCWD4zxnc6reKisxsfH2oscqcmTmK/+Ow252cna7K52r+Bky6PqmoT5HBAAAAAElFTkSuQmCC",
                gnu:        this.header + "BAAAAAQCAYAAAFo9M/3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoYAywUV5gQrwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAADcElEQVQ4y43Tb0jjBRzH8c9v+7nNMebcUW21Cc78g/wcuhByIScoMRwoTBmFlZCmIJ14axqkgoYIkXIqKIVBEuJNUBEUPRlpqDC3Q2Ex0nTezun2YOaPLXNIv7Vvj7zgiOj1+PPk/eADjuNEuHN6ekqMw+H4IzMz8xChUCjV1NT0JbO7uxtfXFy8NZvNr21tbd0AAEQikY6I0m1tbQbx2NjYZiqV+vn29jY+PDw8xhYWFj45PDzcb25uhlQqfSTief6X0dFRpqKigvF4PPPipaWlY7lcXhCLxXJnZmY+ZTY2NnzX19ePGxsbHw0MDLivrq5mc3Jy2pPJZLVWq/2cdbvdDSzLholoNJ1OMy6Xq0Ymk5HNZktOTU29qMgA8HYqlaKDgwNKp9M0PT09BgAM/iGuqqoimUx2yPP8U5/P9wEAMB0dHRUKheJHiUTyeGhoqAUAnE7nR0qlsjcQCLwjlsvlz+bm5mQWi0VSWlr6bXV1tU6hUMj6+/vfN5lMN0xxcfG1zWZ7SETTSqWSGhoamPHxcajV6s+8Xu9Xou7u7t9VKtW00+mkSCTC6PV6aDQa8Dw/Wl9fP8UAQCgUosvLSyovL2eWl5dRUFBw7Ha7v9vc3By5K3g1EAg8FQSBiIguLi4IgBwA2LtEjuPuJxKJ62AwKFpdXf0eQBIvYVmW/cLlchEAWK1WAADT09NzX6PR/OTz+eKVlZUzKpVqTyqVvsnzfLCkpGSrtrb2t97eXnFeXl5ZKpWyZ2RkPPP7/UUnJyefGI3GU+zt7aU4jotOTk7mAUBfX1+b1Wq9kcvlBIAcDgctLCyQxWKhoqIi6uzs/BoAVlZW3qqpqbllZmdnf1hfX//Q4/HEzWbzX+3t7fcMBgMFg0EYjUYmEolAEAREo1Hk5+fT+fk5Mzg4GD86OpJ0dXXJGQBoaWl5Ra/XP6yrq3tQVlam2N7ehslkAsuySCaTUKvVSCQS2NnZSXAcJxYEQTEyMvKeIAhLDADY7fZ7BoPhm6ysLFpbWzuan5//WKvVvsHzPEWjUSYSiSA3N5d0Oh0TjUaf+/1+S2Nj46/4FwYAr7e2tnbF4/E/iYjC4TCFw+F0LBaj/f19mpiYeID/IAagAyABYLXb7cLZ2Rml02nyer3POY6rwv8hEr34u0IkEk1mZ2cTgGMA7768/RtL5JKsGzrLIgAAAABJRU5ErkJggg==",
                plannine:   this.header + "AwAAAAPCAYAAAGn5h7fAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AoYAzE15J1s7QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAACAElEQVQoz3WSz4sSARTHvzMjygpqYg3+KIhkE83DKtKlf0C9SrTRuZNEx0VowU6CuSeJNlwwpEO2kJ6SQBiIUAzFjRDF4wrjKosnGx3HmdehFDfpe/2+z/s++D5gU7IsEwRByICIiAEAIiIAYAFAXsjYVr/fLxMRNVvN+prJ5/OA3+/XERFNf02JyeVyDx0OxyvLNQsnimLKfcf9KRQKXQAAnE6nlf5qMpnQycnbP/kAoKoqsSwLAJhOp+AAwOv1otvtpqxWq73dbt/r9XqvEQ6HUalUEvF4XLd5IpvNZqlerzd5nlf6/f6tTCZjBACk0+nb+XxeW4UrikLJZPImAGA0Gq0NIqJyuSyyANDr9Q5Wu1utFvR6/SULAI1G4+vK8Pv90DTtGwsAJpPpaGUYDAZ0Op3PHAAEg8H3tVqtbrtu21sqyxuRSOQJk0ql9IvF4r7b7f7pcrlejkaj57IsH58Pzp8dvjhc/lsBk0gkbLFYrFqtVvd27+4qOk733ePxPDCbzVBVFfP5fCiK4rvhxfDN/qP9wSasGwwGMv1HiqJQsVg8ZlfTHMepkiR1t05gGJBGmM/nMBqNj9nN9kql0lNN064ARISzH2cQBAGz2ewLu2na7XYLwzBbvxYIBBCNRrFj3BmsAZ/PZ+J5/kOhUIAkSVeA8XiMZqt5efrx9OA3GfcgvyVno9cAAAAASUVORK5CYII=",
            };
            this.lightIcons =
            {
                lastmu:     this.header + "BIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAnxJREFUOE9jYGdnZ4Bh36AkkejY1Jjy8spyd8/gJAtrdzlkeRA7MDSZ2dkt1MHe0TvKwMhWDSYPNqSwpJ4xPauwPC2z+GtRSe3/tMyifxmZBf8Dg6J+e/sET9TRt2AFqfPwiWSPS0g/UFhY8T8vr/hPbGzKH2+fkEyQHNignPyyJqDm/+mZ+dsCgqNsBQQERXQNzA1CQ6NnBgRF//PzD5sHUhcbmxwRl5D5z8MzIJSXl58nICiqNjAoshxsUGBoomZGdvGf6NiUZUABZnSvePmGVAeFxv3z8gl1BKop8fIJ+84vKMqGro4hNS2nJSE556eCkrokuiSIr65lzBocGvc4Iipxk7NbgAWQ/TcgKHKdq2eotZmFKxM8jOISMtYCbbyMzRCYWGRUUpV/UMwfLT0LJV//8MTg0Ng3SclZ/0PDEx6Fh8cWqqrrMTPEJWasACq6gc8gKztvUf+g2G9ePsHdIHUSUvK8do6e8aHhsft9/CP/u3sFtjKERsQXA6P8r6mlsyo2w/yC4vlExaSZg0Jj57l5Br7V0TfnRkky/uFrgQ55wGBi6SLqHxzzARiQB63sPLmQFfVOWcSakpa3zs0zyNfLJ8TAxz/8n4OzTy6ymoiopJX+QVEPwdEPdGJISHji74io5Buh4XHZ9s4BLsBwScnOKzsPDIt/kVFxWSB1QMOAtkd/BoZTnotnuFtmdlEXMIz/+vqH9sFTtV9AqHNwaMzltMzC/0UlVf9z88r/A1350N0zIA5oCCMkBk0EXd18twPF/+XklQITbvGviKiE+fwCwpxwg6DOZZKUUdJU1zZ2k1fSMASKgVM0OlZW1ZI3s3AwFRIRF4PJAQD/x9OpN+UMQgAAAABJRU5ErkJggg==",
                exlinks:    this.header + "A8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADLSURBVDhPY2CAgvT0dAUgdiACK8D0gOm0tLQeIP4P1EgQg9SB1IM1gmyECUBtRzUZ1WUgtTCLFECaHaC2YtWE4kQky0D6UDQDDXGEugLkNBAuIUoz1O8wzcrompD5UJcibMamGWQzEP8AYj4gPgLEXVB1oIDFqRnkZGUgZgHiR0C8F4hfALEQMZrhzgZqSIb6vxzmdGKdLQS18RLU+dhthsY3emh3QZ3NAaUnwNIFRlThC2HkZIzsbPJTGHLaRksgsISCjYakbUpyFQCv+BgrcF6dawAAAABJRU5ErkJggg==",

            };
            this.darkIcons =
            {
                lastmu:     this.header + "BIAAAAMCAYAAABvEu28AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAiRJREFUOE9jEBUVZYDhzz/+i/z//z8GiMtv3XmWtH7TPjlkeRD77///zBcuP3I4dORc1NTpi9Rg8mBDgBoZQZqB+CsQg8A/EPH9x//fT5+9ndjdN50VpO7Rs8/sQOEDUDV/gPSfp8/eZYLkYAY1QSW3ffv539bQ0Eikp3+aAVBs5rcf//+9e/9tHtTCCJAlt+88DtXQ0OIBytUCLSsHGwR0qibIZCBeBhRgRvfKk+fvqoHO+/fk2XtHoJqSJ88+fDcwMmNDVwfyVgsQ/0xOzZJElwTxa+o7WIHyj4F404XLdy2A9F+gS9bduPPCevnKbUzwMAJKrAXaeBmbITAxoJqqrz/+/2ntnKz09v33RCD/DTQoHgHpwpKyWmaQi1YAFd3AZ9D23SdEgWq+PXn2thukzts3iPfgkTPxQL3737z/+f/W3SetIIOKQc5dtmqLKjbDvvz4z+fk7MEMdPW8m3eevO3um8aNrA7owrVASx4wLF21VfTrz/8fgIYd3L77GBeyIqAYKHzW3bzz1PfJs3cGb95//3f81OVcNDUrgQY9hEV/CFDDbyC+AcTZx05ddwHSKUB8HhTdQJwF0gw0DGT7Z6Ar8q7feeUGFO8C+ebt+6998FT97sNXZ6DgZWggwqiHt+48jgMawgiJwU7BS5dvbYcaDlLzC4jnGxiacMINgjqXKSA4UrOmocMtKTXbECgGTtHoOCevWH75yo2mltZ2YjA5AIE4w6UM8YutAAAAAElFTkSuQmCC",
                exlinks:    this.header + "A8AAAAPCAYAAAA71pVKAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAz0lEQVQ4T6WTsQ3CMBREU1BQUWQCS1nEzIJHQGKHiIKF6KicjhGoGIEO7sL94BgLLCieolj/fGfn0oQQGjIMgwO+AmeaURhj3IM7hF/hHOepGx1tQe7TzuaQJOOsGTmKvVyLonQD20TzfibG4lopGI1sq8Q6u4m7XJS+vzmXxHQGN7ACJ9Brjhf7ip2JGbkDC3ABR3AFbY14ig3BRuffWfTa2K0cz4pfdtb3zm+7V+ylngfrxezMXPx0w2mN09i/NyztdlYQK0rp+ez2P3/VA4VYH+avXGv4AAAAAElFTkSuQmCC",

            };
            this.lightIconsOneeChan =
            {
                watcher:    this.header + "A8AAAANCAYAAAB2HjRBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAUdJREFUOE+NUs1qwmAQjFDqoQVtn6EU74qBgKSHhEQpWmN+G0I0RMx72HNvpYdeepGeCz6AryJ9iSJtv86EBtRqa2BYdmdm9/v2iyT9fLZtV33f7wGR67o1y7JKpBiRX7IO3FBXePII8mo0Gi0nk4nIskykaboKw3Da7/fLjMxZJw/dG/W5EYJKHMfL8Xgs1gHDBybNGLc56uGr0nydJAmnHQzq4etJ3W73FkcRLBwK6uELpU6nc4F7vQ+HQ3EooF/BV5M0TSuhyxSFzyiKxH+gDvo7+vKlqap6hE4PQRB8gRT7QB66R+o3nqvVah232+1nz/MEtvwLrJum+UTdhrFIFEUpQ/CCdxTrcByHxhn5ncai2Gw2TwzDmONPEsRgMBDIX2VZ3j1xuxsaVLCQBd5S6Lo+R37658Rtsl6vn+OY941G42yf8Rt18QIhvsalsAAAAABJRU5ErkJggg==",
                foursight:  this.header + "A4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABxUlEQVQ4T42Su0vbURTHE1MdCsUMBUWwWDNIJ8Eieb/f7xCTkAxZYgL5JZItEvIgYjIIGkUXBV26dAiiIgUHoYgKgjj8Gjrof+Mnm+Z26IUvXO45n+8959yrULAMBoPabDYHLRbLptVqPUI99nnONEg1zBEWATWJksPhuAmHw9fJZPJnLBa7dLvd9zab7RADjclkUgogAS/Q70QicVwoFKzlcvlrsVhczGQy6z6f7w64Tc64ANrt9qbf779Kp9PL7XZbhRS9Xk9ZrVY/RyKRXafT+WA0GicF0OVyHXg8nr1AIDA1GsRwFfAJ83kBBNoi+IOS5t4GdTrdOC1UMX6k5BkBDAaDeYK39FGgpE/DBK1WO8FAjJidcWs/Ho9/FMBsNvstFAqdUM4NE94BkFADowvO/mJ6zl5oQ1Gv1z9IkvQ9lUrtk/RA0rCnRwZzjn5RroxhH7M1vV7/fkjdblfZbDYnO53OUqPR8DFZE5qt1WoLXq/3lHd+BpZpZRN4ConvOtoLn6JMBTLwC/AAeIOfJpY+CnLrdDQa3QEe0MYQlik78s9vOHpYqVTm6XebKcvoD0+48l9gq9UaK5VKGl6giKRcLvflFdiFmgo4Nc2XAAAAAElFTkSuQmCC", 
                navtopr:    this.header + "A8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAARhJREFUOE9j8PX1ZUDCbEA2N5oYsjyIzQeTR5eYAJS4DsTzgFgMzRBOIH8WEB8E4nKQHEwzE1QhC5DuTktL+w+k5yJpBmmcD8QFQLwciFcja54K5IhCFSuDNEMNEAKKIWtcATIciKOQNa8BcjYAsS0Q70TSbATkd0BthGmMR/dzGEwDMg31nwGQngTEPUAM14hsM8jv4UC8Dt0QqAEgF4HkUQIYPbRhUbEMiws0idEMMgCkkKAB2GyOAWrcAw19vAYga5YAaigC4gNArAB1Iig1YTNAAznAWIGc7UB8AYj10PwGNwBquDmQXoCsuRjIOQ/EIBqW2pBdBTYAiJOAWAWIlyBrzsFiI7YM0QRUNxOIVZE1Yws4gmIA3NYVkcQXjeIAAAAASUVORK5CYII=",
                expand:     this.header + "A8AAAAOCAYAAADwikbvAAAABHNCSVQICAgIfAhkiAAAArlJREFUKJFdks1rE1EUxc+deTPxY1KbRONYkrhIUxuLVhS1xaZiFbpSF0JAEIqSgoIbCyJCd7rwPxBLi4IutCsLtqn4tRDdVRsFRVsK1aYkdhpjG21m5s17Lmz8OrsD53K49/4oEAgme3t732m6BgJAUDA3P/f21s2buwAQAPT0nH4djUR2SAhIAbjcxcDAjQQTwvthWQuoVCrQNA2h0EZnPJs9L6UUWFU2O3YunU4/KZUWfa7rwjAMSCldBattKmNQFAV1/jpt9+49vYqi6ABARKy5OXksEKjXGWNQGQNBAQAwAFiz1of1fsOWQujFLwVqb2s7JSFldmzsTCrVefXIka6L+XyeDMMvmaa53HV0AFCJSG1KbDs8MnL/JOfcisfjByrfK7SztbW1oSFytKOj44RlWaTrPjk1NXXnyeNHF6KR2I7cm9wQ4S8REetIdV45eLDzkrWwQOFwGJZlIRgKYWJi4vbD8fGMEMKp5VX8K/FpdvZZNBrrMs3NW8vlMkzTRLHw5eO9e3e7pZTu32Hlv2ElHo8fM7eYO5eWlhAMBlEsFrHOWBdLJrf3ENE/ZSpjbG0qlbq2uLj4IRKJHuru7h5yHDuw2TTtly9eXm9paWm27aoRi8W6lpeXC7ZdLbe3t/fn8/nn5PP56jOZzNev5W/vfboeZkwNhTeFq6Njo32Tk5M3Ghsbj6fT6aFSqRTg3KusVKvz9RvqmgYHBwMKAFRXbEgpkpy7oUB98PuD0Qd9uVxuAICYnp4eGR4ezvj9/pLrOoYQXlN1xf6zs4SAxzmEEMjP5+dnZmYeSim92hELhcKrz5/nipxzeJxD4hd8TFWZEQyGvC0NDeoq24m9+/Zdfvb06dka2/v3t/UnGhPJGtu2Y3tEpBMRqZqmGUT0++eeJ7jncbvmGWM+RVFYzUsppeM4yz8BiX4xBiN+bfoAAAAASUVORK5CYII=",
                watcherb:   this.header + "A8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAALhJREFUOE+tkl0RgzAQhJFQCUhBAhJ4yENnMIEDJFRKJVRCJSCh3HfsMQfTFzI87CS5n+zuJU0ppalFdSOE9zY/x3EwvAzvBM7D2d7ObMnO8BUWW38JnCPXxSXeLDYKesNsYI+CNuWIE/Oce1YBAZgfYjtIVBNKyENAfUvzhDcp4AIvOvtT3CVrFlMNMwQb8x/PTHb3lXwSD8mb55CnBBP9SGKeNvuYdn+YdvYnpmvvXPO/7/2eVxSsk6VHBDjH8sAAAAAASUVORK5CYII=",
                returnb:    this.header + "A8AAAAPCAQAAACR313BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGNJREFUGNNjYKAaiC2IXY9LyiH2fuz/2P3YpBRi9wOl/mORjhWIbYBKgeB7oEIIbIgVAEnfR5JEhf2Yuu8DeQ2x/UBTgCYh7J6PajdEC6rL9+ORBgsGgO3DJY2kMAHkegbaAgCK4libswvDKwAAAABJRU5ErkJggg==",
                gmessage:   this.header + "A8AAAAPCAQAAACR313BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK5JREFUGNN1kE0VxCAMhCMBCZVQCUhAwp6+cyXEARKQgIRIQAISKiF7oEvp7ts5zuTNT0QukCgYhpHZZQU7DcdQFKXhVMItnjS25TzSaQQRIdCxi37hw3iyHJwfIxQnTgcnCkaZpscti9DIgvNaMlc5Y4KTHvIchWKCkSexUZf+jfysdvxWC3OjkLCxn0CjrW+JX2/xGcSG4XQKSqXjOH6HDg+lYhSURBkH8h9E4htm9nkTaedRxgAAAABJRU5ErkJggg==",
                oclink:     this.header + "A8AAAAPCAQAAACR313BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUGNOFkVERwCAMQyMBKZOAhEng69lCChImYRKQkH0AG7fdjfaHpmmbFmkyMoWstxGIEgljTJKIhCd59IQp9+voBHaMOUmdnqgYs41qcxLYKZhCJFCxbrZJvUfz2LCm1liappoiYUxu8AiHVw2cPIXf6sXsl/L6Vb7c++9qi5v//dgFAGGyWuspVmQAAAAASUVORK5CYII=",
                soundp:     this.header + "A8AAAAOCAYAAADwikbvAAAABGdBTUEAAK/INwWK6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABGklEQVQ4T2PIy8tjIBcT0siIZLAFkF0LxFxADBYHaWaCcaAKmYF0DxCnoLkoHcj/D8STYeIgzcimSwP5q6CK2qGKeIG0IBArAfE9IP4CxLIwm0EGSAGxCxDfh2oE2QByIkhuLhDvhbI9ofLLYJoDgIzXQPwPSSNIcx1UQzBUPA7KfwRVD/ZzJpomkEYQrocqBoXBKyCeB+UfB9IvYDZnE9DMD5T/DMQzoJrPAunnMM2mQMZWIL6NZgjMzzVQcUsgzQ3Eb5A1w+JaGCgIC2nkAKsGindAbS2BGlQBsxkUz8iJJReqABTXyOJWQP4vIH4MxKCEAg4wUDwjxzVIzAOI7dA0wwI2FSZOKHkiy8sBNVlDNcKTJykGoKgFAHcmTzHKv9mBAAAAAElFTkSuQmCC",
                slidenav:   this.header + "A8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEVQTFRFAAAAZ2dnzczMZ2dnzczMZ2dntLOzZ2dnq6qqZ2dnZ2dnZ2dnkI+PZ2dnjIyMqKenZ2dnZ2dnZ2dndXR0e3t7Z2dndHR03/W/BgAAABV0Uk5TABAQICAwQGBggI+fn6+vr7/P3+/vEpdk4gAAAHlJREFUCB0FwYEBgjAQBLDUCghY/aLn/qOagOWoqmMBtJHMmsnZoM2cHf3MbBjZAFtOlpzA+jbSHelwf/1WPbua8PjkiVmqcP/ke0OVmnjl+4Cr7OnW3/MGPbue4b0CI50zG2DLgTYzOvrIbNCO5KorORqg71W1d/gDBFEGZ/GMsaMAAAAASUVORK5CYII=",
            };
            this.darkIconsOneeChan  =
            {
                watcher:    this.header + "A8AAAANCAYAAAB2HjRBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAVxJREFUOE+NUk9LwmAYnxB5KND6DBF+jD6AYOeiT2PnbtGhSxc3UC8DPXhrOzj/nHaYom7qjA1ExQ1B2qiefo9kpGlt8OPh+f15npf3nSB8fb1eLzkcDjPAjWVZqXa7HWOJK/pz5oFL9q0zqwrxYj6f20EQUBiGtFgsQtd1s4ZhxLlyzzzr8L2wfxWEITGZTOzlckk/gcCbbds5rtvadDq1kUtyOO37Pm+LDPYjlxF0Xb/CUcjzvMhgP3LXQqPROHMc53U2m1FUwB8ilxIURYlhShbE+3g8pv/APvhvObe6tEqlctBsNu9Ho9EHRNoH1uF7YP/Gc5XL5cN6vf40GAwIt/wLzGua9si+jeC6kWU5XqvVJLwj9fv9b5imSeBzrO8MrslCoXBUrVZL3W6X8DdRp9Mh9HKxWNy9cXtaPp9P4EKeW60WqapawsDjPzdui6IonuKYd5IknewLfgJOZetJvjo1rgAAAABJRU5ErkJggg==",
                foursight:  this.header + "A4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABMElEQVQ4T43Sv0tCURjGce3XIIQNgiEkdRuiKTCaFBoTAuHin6BBkWstBUmTYD/IxSCXlgaJihAaAokKgmi4SUP9LXe4fZ84OegBHT6cy33f595zXk7Idd1QEARTWMchznGMIuYxqp5e/6EtGp7wiCvc4xV1Ew7bgmsU27jAKuawhF284ADjtuA+hQesaFue52kXYcRwgjdEbcEahVPEe4u8K+ADji1YoXCJWd/3u0PQ9rCDdyRsQU3vGRuYNFOe4DmNGzQRsQUXKTSgqR5BE97DHb5wazuGBjGGZZxBg9CZtD0FWvDMX0us3SH9nYkXmmIUKWSRwQwWcI1v8wFdkLj6+26EZbLbJvTD2kFZ4WGC0zTq7AoprK3nBgbNURyaqyb0yZofNjhCsy78JjT15C/x/tsEsx0iiwAAAABJRU5ErkJggg==",
                navtopr:    this.header + "A8AAAAPCAYAAAA71pVKAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABAklEQVQ4T2PYsWMHAxJmA7K50cSQ5UFsPpg8isSZM2f+wzBQgRiaIZxA/iwgPgjE5SA5mGYmqEIWNANg8iCN84G4AIiXA/FquGaQBiBHFGqAMpLtQkAxZI0rgPxuII5C0Qw1wBbNZiOgog6ojTCN8eh+DkPWhGaAAVDxJCDuAWK4RmQ/g/wWjscAW5A8WgDCAww51PmwGQLUqEmMZpBBmsQYgJ4AQPwYIN4DCn1CBiBrlgBqKALiA0CsAHUiLi9oIAcYK5CzHYgvALEemt/gBkANNwfSC5A1FwM554EYRMNSG0YgAuWSgFgFiJcga87BYiO2DNEEVDcTiFWRNWMLOIJiAARDOk9b1IHWAAAAAElFTkSuQmCC",
                expand:     this.header + "A8AAAAOCAYAAADwikbvAAAABHNCSVQICAgIfAhkiAAAArJJREFUKJFdkktIVHEYxc//u68Zu6YxEmQ6rXylTcxoIYxB1qI2GWpOBY25KBojiBYhY7ornHHjrhcVJEG2G92FLYIuuHECiczSMHsROI756Dpz753/v0UOmL/dB+dwOHyHeb3empGRF9OKqoABYIwwPf3+XTgc9gEAY4w9HX42Vbu/5oAQHEIAtm2jo+NMBdm2bWazGayurGB1dRXLy8tWPB6/hk2EECI2cKc7nU5nU6kU0uklmOYfcM5tAgDLsiFJEoQQKCoqUtra2i/LsqwCABHJR5ubW0pKPKqiKNB1HQADANA/AYOT41khIDY2TBbqCF2I9vY+IiL5ypXI7avd3TczmQxTFFVkspYlBAcASEQkBYNNx/v7bp03zY2Uz+cLcp5jhxsbDzY0HDp17uy59nR6iTmOI8bHXz0bGhq6UVdXd2BsbOwxtkJEciTSPTCZTHLDMEQymRSGYYjJZFL09fcP56vkYdgGY4zu3bv/OhDwH8nlcnC73Zib+/wpFOqo5Zw7/4VtNwaDwZaq6qqDQgioqopMJgNPicd74sTJi0QkbdVLqqq6I5FIbGFh4aPf72/u6Yk+KS4uKhaANfJ85G59oL7acWw9EKg/triY+rW2tva7q6urb2pq6g3Tdb04kUgsL3z99mFnYeHu0tI9HiKyBwcHrycSiQdNTU2nY7HYYyLatb6+bn3/8fNL2d7SytbW1l0EALIso6qyoqa8vMxj286feDx+fXR09KEQghuGMRqNRi9ZlrXucrnUfd7ySs7F1j//qy5JEubn539OTEy85JznNhfGZ2Zm3s7Ozn4jImiaBmDTrGmazhjlNJcLjDH4fL6KC+FwlDHG8tvu7LzY5/cHajRNg6pqKCjYkZMkSWVEJLndbj0vBgDHcRzbtrP5W1EUTZZleeveTdNc+ws+2ynEoUJI0AAAAABJRU5ErkJggg==",
                watcherb:   this.header + "A8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACpQTFRFAAAA0dLU0dLU0dLU0dLU0dLU0dLU0dLU0dLU0dLU0dLU0dLU0dLU0dLUmYS1qAAAAA10Uk5TABAgQFBggI+fv8/f74aeqbgAAABVSURBVAjXnY0xDsMwEMNo+5TYPen/3+2SpUCXlhvBgfAH2uecrcdWt5O4ewHIdVtTvmXB9BoRoIzy5DqsDIAszvXRlyfItS3kXRZA9StJ0l1f/z/xBlXVAtkqW+Q3AAAAAElFTkSuQmCC",
                returnb:    this.header + "A8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1QTFRFAAAA5OHk5OHk5OHk5OHk5OHk5OHk5OHk5OHk5OHk5OHk5OHk5OHk5OHk5OHkJaAqNQAAAA50Uk5TABAgQFBgcICPn6+/3+9ACPafAAAASElEQVQI15XMyxKAIAxD0eCr1ZT8/+eKDCOw07O700mBT45rrDXEXgul3sn0yCwsAaGBv/cw86xc92fbl0v7z7mBzeeudhJ/3aoUA1Vr0uhDAAAAAElFTkSuQmCC",
                gmessage:   this.header + "A8AAAAPCAQAAACR313BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK5JREFUGNN1kF0RxCAMhCMBCZVQCUhAwkmohDhAAhKQEAPfDBKQUAm5B3qU3s3t425mfyJygUTBMIzMLivYaTiGoigNpxJu8aSxLeeRTiOICIGOXfQLH8aT5eD8GKE4cTo4UTDKND1uWYRGFpzXkrnKGROc9JDnKBQTjDyJjbr0b+RnteO3WpgbhYSN/QQabX1L/HqLzyA2DKdTUCodx/E7dHgoFaOgJMo4kP8gEt+mlap7ZbvCVgAAAABJRU5ErkJggg==",
                oclink:     this.header + "A8AAAAPCAQAAACR313BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUGNOFkVENwCAMRE8CUiYBCZOAM6Rg4CWTMAlIuH0AG9mS0f7Q67W9FmkyMoWstxGIEgljTJKIhCd59IQp9+voBHaMOUmdnqgYs41qcxLYKZhCJFCxbrZJvUfz2LCm1liappoiYUxu8AiHVw2cPIXf6sXsl/L6Vb7c++9qi5v//dgFtjLxtKnNCFwAAAAASUVORK5CYII=",
                soundp:     this.header + "A8AAAAOCAYAAADwikbvAAAABGdBTUEAAK/INwWK6QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAABG0lEQVQ4T2O4dOkSA7mYkEZGJIMtgOxaIOYCYrA4SDMTjANVyAyke4A4Bc1F6UD+fyCeDBMHaUY2XRrIXwVV1A5VxAukBYFYCYjvAfEXIJaF2QwyQAqIXYD4PlQjyAaQE0Fyc4F4L5TtCZVfBtMcAGS8BuJ/SBpBmuugGoKh4nFQ/iOoerCfM9E0gTSCcD1UMSgMXgHxPCj/OJB+AbM5m4BmfqD8ZyCeAdV8Fkg/h2k2BTK2AvFtNENgfq6BilsCaW4gfoOsGRbXwkBBWEgjB1g1ULwDamsJ1KAKmM1MUAmYIblQBaC4Rk5EVkD+LyB+DMSghAIOMFA8I8c1SMwDiO3QNMMCNhUmTih5IsvLATVZQzXCkycpBqCoBQCET0VYtxt+GAAAAABJRU5ErkJggg==",
                slidenav:   this.header + "A8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1QTFRFAAAAzczMzczMzczMzczMzczMzczMzczMzczMzczMzczMzczMzczMzczMzczMdShx9gAAAA50Uk5TABAgMEBggI+fr7/P3+82uMT1AAAAb0lEQVQIHQXBiQHDIAwEMOE8gGlu/3ErgWt297wAYyenT7IGjJNVqJUzsPMAniyuLODedspMQe3cKq8+8HxZOK0b9eUb6NYHO98Dv/am3FkDKq/Ktm9gp1h5AE8mxsku1M4ZMGby618yB6De7n4L/v79BDw2df22AAAAAElFTkSuQmCC",
            };
            this.lightIconsSS =
            {
                watcher:    this.header + "A8AAAANCAYAAAB2HjRBAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATDAAAEwwBeUQCqQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEgSURBVCiRnc4xS0JhFMbx//vcpMk1aKuxIaItcFCwzbWlXZH7BcKlqS0/wMX3/Qp9BFuCIHCIaBCcGoSwCIemyPueFguVC5VnfM7zOxxnZqRpuhNjvAQqwCZwJ+k8y7L7NE0PY4wXwBHwAdxKOsuy7Mk1m81dSQ9AmeX5NLMr59wJUFrZvccYDzYkdQsgQMk5d1qQA5QldTV/dZ2pCJitiWdyzvXXkc65vvI87wCv/7SveZ53FEKYmFkDmP4RTs2sEUKYCMB7P5BUB95+gW+S6t77AYAzs59Nu93eB/rAVgF8AY57vd7jd7CEAVqt1p6ka2B7IX6OMdZDCMPFrlbPhxCGZlYDxvNobGa1VViIAbz3oyRJqsBNkiRV7/2oqPcFqExuTvxGhCUAAAAASUVORK5CYII=",
                foursight:  this.header + "A8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPoQAAD6EBci1ukwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFRSURBVCiRjZKxSgNBEIa/WYWDPIGtlUjagGCppYmIb5BiWbGzsU2utFEJWCwpTGdAFCw00cIyVV4jKVJKIFVubCZyOWLIVsP8880/M6yoKgBpmrrRaHQhIlWgAsyAIdCNMT6z4omq4r3fdc49AQerioDXJEnqrVbrJ5/cEhE3nU57BirQEZEbEfkABNgD9ufz+U6tVntbcvbeX4rIg4G1GON7viCEcAXcAmRZdtxut78XmrMdATpFECDGeAcMAJxz1bzm7DiIyOc/+wJ8WU2lCM8sLq2BSwCqOinCQxPOVlFpmm4DJ+bcK8Jdi0/tOEvgeDy+B8oG9/O6qCohhBfg3HID27FkjuV8vxhjM+9MkiR14NFyh0ATuC6AAI0Qwh8si+8J4L0/cs5VRaSiqhMR6YlIP8syDzSKEyzB6545LjVwG5GA7Zrmcxs7FyYgxtj8BZUke3hPBGK6AAAAAElFTkSuQmCC", 
                navtopr:    this.header + "BEAAAAPCAYAAAACsSQRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAQJwAAECcBUfGu8QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIiSURBVDiNbZI9aFRBFIXPmYcbVm0WUuxPrSBY2BkrG0U0Yrmo6IIE5+2PRLAQEiIrysYQTOHiy2bmZRtXDSIYi9iJkkIbEZuAvQgRwSpRXHjOtcjb8LK7B6Y5c+83Z+4Mq9XqwSiKPojIwzAMn4qIIJbW+jnJEwC2AXyK1xtjzDckpIIg2AbwheQTrfVCb4MkPc+bJnlZRBoichjAIoANrfXFJIQiglqtlo2iqANgVCl1ptVq/USfSqXSgXQ6/QvASGxNGWPmAEABQBAEP4wxp0led86t+r6f64ek0+mJBAAAKrVaLbubJCmt9TGSi865YhiG32OvSvKxiKx7nncliiIqpZ4BGCO5MAABgEqlclREQpKXnHOnAIyT/J1KpSaazWY3Bp8k+R7ACzVAANBqtTZE5JqIrJD8C2AfyeUeAACstetKqbF8Pn91aJJyuXxIRJZJhiLSie23AKwx5mV//QDE9/3jANZIfnbO/SN5bk8D+SiXy92q1+uu5+25jtb6AoB3AEZF5AiABoDXyRoRubm5ubkyOTk5MgDxfb9C8hWA/Tu1MmOt/Sgi7f74IlLsdrurxWLR24WUy+VZ7PxGLy66Ya3txANcA3B7YHDA2UwmMwsA9H0/EJFq4pRpa+2D/g6t9X2SM332nyiKsso5t5Uw54YB4kR3SN4DkHyJ+Xa7vaUKhcI0gLsA5o0xU8MAPS0tLdVJngfwFUA1n883AOA/s1bzhv6M9LwAAAAASUVORK5CYII=",
                expand:     this.header + "A0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMmwAADJsBwcsw5QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGVSURBVCiRZdAxaxNxGAbw53nTC1kcLotwg1Dq4OIUNI4HKm5aHA4EaStJOAUR/ABy3DcoQYSLSisWBIcOAQWROrlY4UYXEUG9EwcTSJYQyD0uabme7/o+vz/P+2ev13tD8qekd41G46Df709QmU6nc8pxHF/SFUlnjeR3ACHJ/fl8vlkFAOA4zpakIYAHZpaZpIOjpaSLcRxbGQRBUJN0qZR5X2u3238AfAXwF8DmZDJZTdN06Pu+giCoua67B+CWpOdm9mSxWLylJABAHMeW5/kzAHdI7o5Go7DZbL6UFJB8miRJqGX4GFUhgB8AzgBIBoPBPZWCJ/pHUVSMx+O7JfDN87z7ZfAfCsPQcV331RJ8AbCW5/lO9XOsDAC8BnATwLbneedJ7gK4nWXZCchut3vazLqSLpC8AWA7SZKHRzdmWbZDcmP5wEcz26+1Wq11ko9JnisDAPB9X2maDqfT6RqADQDXi6L4ZCSvlur+RmWiKCpIHh5XIy+vkFwB8Kgoig8kP1cRANTr9Rez2ewXyWuSVv8B5z24yF5Xg3UAAAAASUVORK5CYII=",
                watcherb:   this.header + "BMAAAAPCAYAAAAGRPQsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAE7sAABO7AdUPGRsAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAR1JREFUOE9j+P//PwO1MNUMAjkIq2FpaWn8qampgenp6d1A9lEg/gDEe4C4AihugMsnGIYBDYgEanoJxP/x4OVAOUl0Q+GGZWVlyQIN2oFmwCmgmAdUzgModwpJ/iPQlVnIBoINy8jIUAAqeoBm0FkgnxXkAiBOgdIgPkgc2dWLQkND2cBhhsOg/6AwS0lJEQdq/AHV/APEB4lj8f7B5ORkIQagxAFsYQPUpA30YhyyHIgPEsehfit1XYYnzM7n5uayI4cZlH8eZ5jBYgMYHjJARdvQFJ4DessTFJsgGih3Dkn+PdbYRI5eoOJQIH6KL50BDVkIjDgxnOkMWSI2NpYbaJg3ELcD8WEgfg/EO4G4GOgDTaJzACWZnqoZHQC5FqThKUERBgAAAABJRU5ErkJggg==",
                returnb:    this.header + "BIAAAANCAYAAACkTj4ZAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAARywAAEcsBZQmoawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAE0SURBVCiRnZK7SgNhEEbPbDaVFiqxMJWQysYqEEQQxbewMsLuz+ob2MRLIdpqik2KlIKNZUArGzXI2qQRESzyCBYqcf+xWgxrYmJOOQyHby6iqvTDGLMBFMIwPOzbkELSIs/zFh3HOQVWgLaqXotIrKqfwDPQ7na7T41G46OvqFwuT2Wz2QMR2QYyQwLEwLnrurvVarUDIIAYY7ZU9QiYHWWMHt6BkzAM98T3/TNg55+CNJuZKIqaxWKxAywBE2OK5sbdUZq3YVe7A66AaWAGKAAlwEmJXn6JEgb9URAE89baByCX1ETkcqBoEMaYHPAKTCY1VV1NR/wTz/MWgGaPxKrqca1WuxkpURAEy9bafWCNn/20rbV+vV6/B3BHSRLH8bqIlIBHoAXc5vP5i0ql8pX0fAMVp32CnGA5AAAAAABJRU5ErkJggg==",
                gmessage:   this.header + "BEAAAANCAYAAABPeYUaAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAARIwAAESMBCblIYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFSSURBVCiRjZOxSgNBEIa/meypRDsbGyVgETtBUBE7K0vfwELkTO4lTOEbJLmkUPAtrOxEbEQRwTQSFYKFYh02d2NhlBC9w79Z2Pnn4x92R8yMUVWr1XKSJHvAElAG5oEXoAM8FAqF42az2RntkW9IFEXzg8HgENgFCmQrAU6dc4eNRuPlB1KpVEppml4CcznN43pV1Y04jrsSRdGs9/5iGH1ct6q6k6bpHTDzR70TBMGmeu8PMgAAaRzHXbLHK3vvD1REtnIiB2PnL4nIlprZ6j8gLstgZisKPOVAXK1WywQMk1yriJzleBZ6vd59HsTMzrXf7x8BHxmex3a7XQb6GfVOEAQtLRaLU8B0hqkUhuENMPFH7VVVt+v1+rt676Oh6Q24Akb3YBJYBmTkLgFOnHNrw+fHqeqjiKy0Wq0bM7MwDBfNbB9YF5ESX7/4mZzd+QTxR3y/8SjLkgAAAABJRU5ErkJggg==",
                oclink:     this.header + "A4AAAAPCAYAAADUFP50AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAQLgAAEC4BpzxEcAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFPSURBVCiRjdGxS5tBGMfx73NvVHDIFihRFxGkg81/4FBKF50Krl3kjUcyOlWQqDiqOLhcIk7pX1AqOnQQZwcHQYeAoHMytA6R9/K4JOXAXPS23/Pch+c5TlSV2KlUKvPe+31gFjhwzh0PeiaGrLXfvPfXwBJwFaIoFBFR1V1gArjrdDqrYb9arX4YCtM0XQQ+9uNMoVAYDzYpee9/5iIT/wZx0nu/Ya1tZln2lCTJ71FvvA2Dqv5Q1ZskSe6BKVX9FYPrkTrAs4jsvYLW2u/ATgRdACXnXEvCfyyXy19E5BQY65f+ichXEWllWTbeaDQeB3f/wzRNPxljLoF8v5ep6nK9Xj8fNtr00bQx5jRAiEg5hgCSdrud7/V6f4C5oL7lnDuMIQDT7XaPgIWgduKc2x6FBqt+DvJZsVhcewsBGBHZBB6AZi6XW6nVatl74AsEfnf9zypFqwAAAABJRU5ErkJggg==",
                soundp:     this.header + "A8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUiwAAFIsBztsATgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAF9SURBVCiRjZMxa1NRFIC/c2+S0kXo5OSiLimUFCwE6SAoSAX/QaGhkLyExIz9AYGOgouYXIigg5OLf0C7WmhTB0vaQsdmbCgdmvDeu8clgdfaB+/A4XK/ez84nHsPqkpattvtB0EQvE87N6REtVp9Op1OfwNv56zZbC61Wq1H8/29cqPReGWt3QeKSR5F0VYURWe1Wq0IIKp6S6zX6++AD0Buhk7z+fx6GIYvrbWHcRz/AU7G4/FzCYLgS8J9CGzcKeTUe79pjDlQ1R3gUkQ+q+q2ASqJvCsC0O/3ByLyS0R2vfc/gGsRWU9tWDJUVb33n4AFa20JGABrmWQAETmbrY+Bc+BJZhlYmcknIrKsqsNMcqfTyQE7wNVkMjlW1ZIx5iAHfE3cu6/bjEajZ8CqiFQKhUIALAJ7md4ZKAOvvfd/jTFHwJ5z7s1/ZTvnPorIBnCZYFfOue/W2hfAjTGmCinfs9fr/YzjuAwMkzwMw29AqdvtXgCkTlSWqfoHbL3YN5vPIGkAAAAASUVORK5CYII=",
                slidenav:   this.header + "A8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOSQAADkkBuSjvGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIDSURBVCiRpZMxaFNRFIa/c997QuKgYrWUoIMoBRUcFHcRwQ5W6lo63txGOkgQoYhEnDtVYntfBgcHFcFgOlRBKCgutVDoIASxokOkIAUhabHvheNgKo+AU8/6n+9e/v/+V1SV7BSLxVFgREQuAMNAU1VXgMU4jhvZXdmFrbWDQRDMqeoYsKWqq8aYz6p6ETgNICL1brdbqtVqGwBmFzTGrKnqNWA6iqLjURRdzefzN733Z4DbwG9VHTPGrFlrBwFCgN6NR4GGqh5MkuQd8C1N0+/OuS1gBVjq2TgSBMEccEOstaMi8grwqvpGRGaAEz1bz4EvwDlgOgzDr2maOmBGVa8bYAQgDMP7cRzXgyC4ksnkEjAhIu+NMRvVarUNzAKbwIgUi8WPQM57fzaT+KyITKnqW2PMwvz8/MNsypOTk69V9bDp+VjOioVCoQzcAl7s7Ow8K5fLuayuquvAsAGawKmsWKlUUu/9bJIkT6IoGu90Oku99/93PtAUa+2ciEwAh7z3CX3jnHsElIBtEVkYGhoab7VaP1X1qQEWgf3AnX4QIEmSCvADyKnqeqvVmgIOAIsmjuOGiNSBe9ba8/1wu93eBPLAY1VdBh6ISD2O44YB6Ha7JeCXMeaDc+6ucy7ahQcGBk7ytyB5EXkJbPf2/9vtDrAKfAKOAZeBff3dlr38qj/Ek+9wXdcEIAAAAABJRU5ErkJggg==",
            };
            this.darkIconsSS  =
            {
                watcher:    this.header + "A8AAAANCAYAAAB2HjRBAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAATDAAAEwwBeUQCqQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAElSURBVCiRndExS8NAGMbx/yUnTp0EwU3dHMSaHEToUlCnri6Ofgnp4uRmP4RfwG9gHQUDSRtx6CYOBalFOnQS7/I62EobYtE+43Pv7w7eUyJClmWbzrkroAasAg8icmGM6SZJsq+UugQOgA/g3vf982q1+qLiON7yff8RqDCfT+AGOAFWCmdj59ye1lq3RKQImYDTkh6gorVueSJS+2VgYUSk5gF2GQxYD2gviduetbYJDP8Jh9baphdF0SDP8wYw+iMc5XneiKJooEQEgMl/3gJrC+C7iBwbY7oAPxggTdNdvnewXgLfgKMwDJ+mxRwG6HQ6OyJyB2zM1K9KqcMgCHqzs17x+iAIes65OtCfVH3nXL0IS1+eJkmSbeAaODPGPJfNfAFVD3ZJJofjVAAAAABJRU5ErkJggg==",
                foursight:  this.header + "A8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPoQAAD6EBci1ukwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFSSURBVCiRjZK9SgNREIXP2ZttluA7WNtlL2yvpWuQvIGCIHY+gckLaBr7dAZEO/GnkFRCwiQPYqdNipA9Njeyu8aQqe6dmW/OmculJISIptPpOclckgcwl2Qkh2ma3mNNUBImk8muc+4OQLauSdLjcrk8ybLsu5xvAIhKoCQNoih6BZAAOJbUJtlxzn0BOK0om9kFgFsAAnCUpulTucHMLkleAwDJg1ar9f67J8k8WBvUQQDw3t+Q/AjXvFyLwuMgWP0v3oKAr8AA5uGcbICTYPuzrmzhfLyOGo1GDUmHAFAUxXMFJjkMltpmdlkHm81mH8AeAMRx/FKuUxLM7IFkJ1j7CDsmQXFv1Syp573vVuDxeLzjnOuTPNmw958BLH1PzGazfQC5JE/ysyiK5ziOXxaLxRnJq/qACrwpzKxbHxBtRQLw3ncl9cq5rZXLDlbDfgAqSqZxu7LqvAAAAABJRU5ErkJggg==",
                navtopr:    this.header + "BEAAAAPCAYAAAACsSQRAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAQJwAAECcBUfGu8QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIkSURBVDiNbZPBS1RRFMZ/5z6HwILZtLC11kJC4t03jOEiF0VkEK0ko4KQFkqroCLRTZFJ6CIqF2mbrKQGcmO7IFzU5t07ieg/IC0iaDNjOTHzPC0a5fGcb/mdc3733I97ZWNj49D29vYXVZ2Ooug1oDTlvX8LnAS2VDUWkRj4aK3dJCXT3d29BXwTkVflcnkmVZMgCMaMMZdV9aGIHANmgXXn3KU0RFSVOI47giBYUNXDuVzubE9Pz08yWltbO1iv138BB5rWPWvtFIABKBQKP8IwPGOMudFoNJa890eykHq9PpwCAIzEcdyxt0lacRyfEJHZJEkGi8Xi92Y2o8AzYKWtre1KrVaTIAjeiEgvMLMPAuCcOy4ic0EQDCVJcho4D/zO5/PDXV1df5uHnTLGfBaRd2YfAYiiaB24niTJoojUgJyqzu8CmhGsqGpvpVK52nKT1dXVo41GY94YM6eqCwAi8klVX1hrS9n+fRDvfRFYBjyQAAOZmSfW2lvATkuIc+6CiCwC7cDmzs7OkDHmNnAxA3qfz+ev7V5vLxPv/YiIfGgCVFXHC4XCVxF52SK2wUqlslQqlYI9iPd+kv+vMWg23YyiaAEgDMNlEbmTpajquc7OzkkAcc49B0ZT9TFr7aPskPf+ATCesf/UarUOA1RT5lQrAIC1dgK4T+qDisjjvr6+qqiqKZfLE0B7GIZ3WwHScs4NiMg08LRarc719/c3/gG16eq880HcpgAAAABJRU5ErkJggg==",
                expand:     this.header + "A0AAAANCAYAAABy6+R8AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAMmwAADJsBwcsw5QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFrSURBVCiRbdC/axNxGMfx9/O9O5ILcXYTJK5dctE4CiqOQocOWmqFQFoQwT/A/6GrqCTFguBBB6GDSIqDgWDvu3aTQqu4Z0ggCfdx6clx9dmeH6+Hh8eyLDsyswvgy3K5HHW73SmVGI/H1+I4vifpAXDLSTqT1Jd0GIbhsyoAqNfr25I+Ay+B3845Nyqaku4ArgzSNA2Au6XSVxdF0TdJPUkDM9v03g8KmKZp0Gq1DoAnwHtJvcViMTJJxQaXZdk7M3sODOM47s/n8w/ABvA2SZI+IIAyqsJz4IaZvWm327sFoHo/kDcajZ0CAD+n0+mLMriCvPfRbDb7eAlOgVaz2RxU51wZAJ/MbF3SXpIka8Cw+hwAm0wm14Mg6JnZbeCxpL1Op/OqWHoJtoChpO+1Wu3QvPdPJR0AVED5OftmtglgZutO0sPSwB+uRm5mP/4leX4/BELgdZ7nx865k/8gVqvVfhRFv4BHwM2/T1Cj04N8t8oAAAAASUVORK5CYII=",
                watcherb:   this.header + "BMAAAAPCAYAAAAGRPQsAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAE7sAABO7AdUPGRsAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAShJREFUOE9j+P//PwO1MNUMAjkIq2FnzpzhP3v2bCCQ7gbSR4H0h9OnT+8B0hWnTp0ywOUTDMOAmiKBml4C8X9cGGjBcqCcJLqhcMOANsoCFexANgCo6RQQe4DkQDSIjyT/EcjOQjYQbNj58+cVgBIP0FxyFshnBbkAiFOgNIgPEoe7GmjBoqtXr7KBwwyHQf9BYXbixAlxoMYfUM0/QHxoWKIEATBoDh47dkyIASh5AFvYAL2mDVQUhywH4oPEcYTlVuq6DE+Ynb99+zY7cphB+edxhhksNoDhIQP08jY0L5wDes0TFJsgGih3Dkn+PdbYRI5eoIJQIH6KL50B5RZevHhRDGc6Q5YAKuQGavAG4nYgPgzEIFfsBOJioOs1ic4BlGR6qmZ0ABhFYWChRzlkAAAAAElFTkSuQmCC",
                returnb:    this.header + "BIAAAANCAYAAACkTj4ZAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAARywAAEcsBZQmoawAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEjSURBVCiRpZK7SsRQFEX3VksLlbEXprKxmEyYQpAr/oWVWFjoH0zloxBt9R8EG0tBKxt1SHIJpBERLPyEMKjgvdsqOMRkjLrKw2Gxz4OSUEWSJOsA2kEQHFQ2lGBZZK1d8t6fkFwBkAG4luRIvkt6lJQNh8MHY8xbpShN0xnn3D6AbQCTPwRwks4k9cMwfClEjON4k+QhgPkmY4zwKum42+3uMoqiU5I7vxSU2fhvooLBX3dUJh97NUl3AK5IzkqaA9Am2QMwURI9fRMV1P1RmqYLzrkIQGukfFErqiNJkhaAZwDTRc17b8oRx2KtXZR0OSLxAI7CMLxplCiO42UAeyRX8bWfjORWp9O5B4CpJklIrgHoSbIABiRv8zw/N8Z8FD2fKGWfiTnDv6EAAAAASUVORK5CYII=",
                gmessage:   this.header + "BEAAAANCAYAAABPeYUaAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAARIwAAESMBCblIYAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFRSURBVCiRjZMxSxxBGIaf7/suGtCrbNIYDiw2nYuzawh2V1n6D1IEQfBP2OQ/pFHwX1jJNRKOuw0rIriNnF5zRYJ1OGbGQhM25nbxbQbmfb6XGWZeiTFS13g8ToAvwAcRSYB1YBpjrIAb4DjLsqo+I39CRqPRupkdxRg/A0azvIiceu+P8jyf/g0py7Lnvf8OvGsZfqmZmX1K03Qiw+FwzcwugGQBeGlme977K2B1gV9573dUVQ8aAgBCmqYTmq+XqOqBiki/5chvXqz/SUT6CuSvCOm0MFsK3LUAncFg0BYA8EOBsxbgfbfbvW5LiDGeq5l9BR4amFvnXAL8bvCrEMK3znw+f6uqKw1QryiKElha4M3MbNc590tV9fAZ+gkMgXoPloFNQGp7XkROQgjbz89PR0RuQwhbWZaVQCyKYgPYBz4CPZ5+8X29O865f7rzCGbCcV15UAOIAAAAAElFTkSuQmCC",
                oclink:     this.header + "A4AAAAPCAYAAADUFP50AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAQLgAAEC4BpzxEcAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFESURBVCiRjc+xSgNBFIXh/042EbZILaiNjVhoYLZIJ0HERivB1kbQB7ATBBVLtbKwEG3iIxi0FKtlJ7tYWqTSN4hhQUKuTVZWko1Od+bwzdwrqkrRcc4tiMgFMA9cBkFwk3WmCMVxvCUir8CGqrbzaBIUVT0DpoA33/d382UURdNjYRRFK8DiMM4BlaxLkqRmjLn3xkFjTDcX/TRND5MkaQK9wWDwkI00Atvttg/0CtYAuC7a8WAC+gLOR6Bzbgc4HSdE5BmoBUHQ+TWqc25NRFpAeXj1aYxZL5VKnTRNK/V6/ePnkQzGcbysqi9Addj1RWTTWvs07ncDEIbhrKq2cggR2StCACYMw6rneS1gJoeOrbV3RQjAlMvlK2Aph26ttSeTEICnqqtZUNXHbre7/xcCMCJyBLyratP3/e1Go9H/D/wG5GVzE44n/EYAAAAASUVORK5CYII=",
                soundp:     this.header + "A8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAUiwAAFIsBztsATgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFuSURBVCiRnZNBaxNBGIafd7NZ8RDBkyB4qb1EkDXMQpEeBIVSwX8gKIJ48tp/IXgRb4IePIh/QWmOkUw2QpQ2hYCXXgs9GZaE10sWanUl+MLHMO/MM3zfNzPYpikGg8GlGOOLpvWEBpVluZmm6QB4UHuTyeTycDi8Vs//Co/H43u2vwDds35VVY+SJDkqy7ILINu/gTHG55JeAunKmi6Xy+1Wq3XX9kjSV0mHs9nstmKMb2vQ9hVJu+cSmUp6aDsCe7ZPJL2R9EQxRvNvTUMI3dFo9AnYrqrqapZlP4APjQ07J9t+DVzIsiyXVALFujCSjlanbAAz4PraMHBzNR7avgEcrAX3+/0U2ANO0zT9DuRATIF39aaGbtPpdAJwy/bjxWLxTNJF2/tr3TOwBexI+mZ7bHu/KIr7f6RdFMWrJEl2gZPaCyGchhA+2r4D/Gy320+h4Xn2er3PkraAg7P+fD5/D+R5nh/Xdf73r/oFwxzmKpmdZMgAAAAASUVORK5CYII=",
                slidenav:   this.header + "A8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOSQAADkkBuSjvGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIHSURBVCiRpZMxSNRxHMU/7+d58i+wlnKIAqMSDIz8/+3GLiLIIcPWaA6jISKCiCjaIicboqmhRQk6cpEmpQg5/d9JQoFkRi1lg5CWXnbHa7niOmjqu37fe1++3/e+sk1jpWk6IKnfdiKpy/aCpNT2RJIk441Y/SYXi8WOTCZzHxgE1oE54C1wBOiu4wvVanUol8stA4QG4jxwCrhWq9X2RFF0cnNz80IcxweBK8APYDCTycwXi8UOgAxAfeJOSeO2t7e0tDyvVCof2traPpbL5XUgtT0pqQvYUcef0ezs7ICkp5IeAM9sDwN7AWyPAe8kHQKuRVH0fmNj4zwwbPt0kNQPUKvVbvX29hZsn/hzEOmYpHPAi9bW1uXu7u5vwAiwIqk/2E6A1319fZ8BkiRZAu4BBl4Bd+M4vtPT0/MFII7jn8Cs7STU7ZhptGBtbe0ycEnS4xDC6PT0dMTftSSpK9R93N/Yyefz1TiOR1ZXVx/ZPpvNZifTNB1oWGeX7YUgKQUOl0ql1iZ18vl8xfYBICdptFQqjU1NTWVsH5WUBtsTwFbbV5vJACGEm8AnIAKW2tvbLwLbbE+EeuQKkm6Uy+W4mby4uLgCbLH9UNKM7dtAIUmS8QBQrVaHgK+2X6Zper1xhc7Ozn3AZF3gCbBRx/8z29+BOdtvQgi7bR8HsjRlW//zVb8AuJ4O4IlbzAsAAAAASUVORK5CYII=",
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
