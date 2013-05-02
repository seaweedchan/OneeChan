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