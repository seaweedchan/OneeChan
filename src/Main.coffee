Main = 
  browser: {}

  DOMLoaded: (reload) ->
    # Options.init()

    unless reload
      unless $('*[xmlns]') or $.id ('ctxmenu-main')
        $.rm $ "link[rel='stylesheet']", d.head

      if div = $('#globalMessage *[style]')
        div.removeAttribute 'style'

      if div = $.id('ctxmenu-main')
        $.addClass doc, 'catalog'

      if div = $('.cataloglink>a')
        div.textContent = 'C'

      if div = $('.closeIcon')
        div.textContent = 'x'

      console.log("hello")

#   Pages.init();
#   RiceInputs.init();
#   LogoReflect.init();

  init: (reload) ->
    unless reload
      return  if /^about:neterror/.test(doc.documentURI)
      localStorage["4chan-settings"] = "{ \"disableAll\" : true }"
      m_VERSION = undefined
      Main.browser.webkit = /AppleWebKit/.test(navigator.userAgent)
      Main.browser.gecko = /Gecko\//.test(navigator.userAgent)
      ###
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
    ###

    if reload
      # insertCSS()
      Main.DOMLoaded true
    else
      # unless $("link[rel='stylesheet']", d.head) or ($(doc.head) and Main.browser.gecko)
      # $.ready =>
      #   insertCSS()
      #else
      #  insertCSS()
      $.ready =>
        Main.DOMLoaded()
      Main.DOMLoaded()

Main.init()
