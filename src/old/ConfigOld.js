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