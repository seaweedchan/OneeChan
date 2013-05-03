Options =
  saveAndClose: true
  init: ->
    a = $("<a id='OneeChanLink' title='OneeChan Settings'>").bind("click", $SS.options.show)
    $("#shortcuts>.shortcut:last-of-type").before a

  show: ->
    unless $("#overlay").exists()
      overlay = $("<div id=overlay>").bind("click", $SS.options.close)
      tOptions = $("<div id=themeoptions class=reply>").bind("click", (e) ->
        e.stopPropagation()
      )
      optionsHTML = "<ul id=toNav>" + "<li><label class=selected for=tcbMain>Main</label></li>" + "<li><label for=tcbThemes>Themes</label></li>" + "<li><label for=tcbMascots>Mascots</label></li>" + "</ul><div id=toWrapper><input type=radio name=toTab id=tcbMain hidden checked><div id=tMain>" + "<p><a class=trbtn name=loadSysFonts title='Reqiures flash'>" + ((if $SS.fontList then "System Fonts Loaded!" else "Load System Fonts")) + "</a>" + "<span id=SSVersion>OneeChan v" + VERSION + "</span>" + "<a href='https://raw.github.com/seaweedchan/OneeChan/stable/OneeChan.user.js' id=updatelink target='_blank'>Update</a><span class=linkdelimiter> | </span>" + "<a href='https://raw.github.com/seaweedchan/OneeChan/master/changelog' id=changeloglink target='_blank'>Changelog</a><span class=linkdelimiter> | </span>" + "<a href='https://github.com/seaweedchan/OneeChan/issues' id=issueslink target='_blank'>Issues</a></p>"

      key = undefined
      val = undefined
      des = undefined
      for key of defaultConfig
        continue  if (key is "Style Scrollbars" and not $SS.browser.webkit) or key is "Nav Link Delimiter" or /^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key)
        val = $SS.conf[key]
        des = defaultConfig[key][1]
        if (defaultConfig[key][4] is true) and (key is "Non-Sidebar Custom Margin")
          pVal = $SS.conf[defaultConfig[key][2]]
          id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3]
          optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" + ((if pVal isnt defaultConfig[key][3] then "hidden" else "")) + "><span>" + key + "</span><input name='Non-Sidebar Custom Margin' type=text value=" + $SS.conf["Non-Sidebar Custom Margin"] + "px></label>"
        else if (defaultConfig[key][4] is true) and (key is "Sidebar Side Custom Margin")
          pVal = $SS.conf[defaultConfig[key][2]]
          id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3]
          optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" + ((if pVal isnt defaultConfig[key][3] then "hidden" else "")) + "><span>" + key + "</span><input name='Sidebar Side Custom Margin' type=text value=" + $SS.conf["Sidebar Side Custom Margin"] + "px></label>"
        else if val is "header"
          optionsHTML += "<label class='mOption header'><span>" + key + "</span></label>"
        else if defaultConfig[key][4] is true # sub-option
          pVal = $SS.conf[defaultConfig[key][2]]
          id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3]
          optionsHTML += "<label class='mOption subOption " + id + "' title=\"" + des + "\"" + ((if pVal isnt defaultConfig[key][3] then "hidden" else "")) + "><span>" + key + "</span><input" + ((if val then " checked" else "")) + " name='" + key + "' type=checkbox></label>"
        else if Array.isArray(defaultConfig[key][2]) # select
          opts = (if key is "Font Family" then $SS.fontList or defaultConfig[key][2] else defaultConfig[key][2])
          cFonts = []
          optionsHTML += "<span class=mOption title=\"" + des + "\"><span>" + key + "</span>" + "<select name='" + key + "'" + ((if defaultConfig[key][3] is true then " hasSub" else "")) + ">"
          i = 0
          MAX = opts.length

          while i < MAX
            name = undefined
            value = undefined
            if typeof opts[i] is "object"
              name = opts[i].name
              value = opts[i].value
            else
              name = value = opts[i]
            cFonts.push value  if key is "Font Family"
            optionsHTML += "<option" + ((if key is "Font Family" then " style=\"font-family:" + $SS.formatFont(value) + "!important\"" else "")) + " value='" + value + "'" + ((if value is val then " selected" else "")) + ">" + name + "</option>"
            ++i
          optionsHTML += "<option style=\"font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important\" value='" + $SS.conf["Font Family"] + "' selected>" + $SS.conf["Font Family"] + "</option>"  if key is "Font Family" and cFonts.indexOf($SS.conf["Font Family"]) is -1
          optionsHTML += "</select></span>"
        else if key is "Font Size"
          optionsHTML += "<span class=mOption title=\"" + des + "\"><span>" + key + "</span>" + "<input type=text name='Font Size' value=" + $SS.conf["Font Size"] + "px></span>"
        else if key is "Menu Button Content"
          optionsHTML += "<span class=mOption title='" + des + "'><span>" + key + "</span>" + "<input type=text name='" + key + "' value=" + $SS.conf["Menu Button Content"] + "></span>"
        else if key is "Hide Button Content"
          optionsHTML += "<span class=mOption title='" + des + "'><span>" + key + "</span>" + "<input type=text name='" + key + "' value='" + $SS.conf["Hide Button Content"] + "'></span>"
        else if key is "Themes"
          optionsHTML += "</div><input type=radio name=toTab id=tcbThemes hidden><div id=tThemes>"
        else if key is "Mascots"
          optionsHTML += "</div><input type=radio name=toTab id=tcbMascots hidden><div id=tMascot>"
        # checkbox
        else
          optionsHTML += "<label class=mOption title=\"" + des + "\"><span>" + key + "</span><input" + ((if val then " checked" else "")) + " name='" + key + "' " + ((if defaultConfig[key][3] is true then " hasSub" else "")) + " type=checkbox></label>"
      optionsHTML += "</div></div><div><a class=trbtn name=save title='Hold any modifier to prevent window from closing'>Save</a><a class=trbtn name=cancel>Cancel</a></div>"
      tOptions.html optionsHTML
      overlay.append tOptions
      
      # options window
      $("#toNav li label", tOptions).bind "click", (e) ->
        return  if $(this).hasClass("selected")
        $("#toNav li label.selected").removeClass "selected"
        $(this).addClass "selected"

      $("[hasSub]", tOptions).bind "change", ->
        id = @name.replace(/\s/g, "_") + $(this).val()
        sub = $("." + id)
        if sub.exists()
          sub.each ->
            $(this).show()

        else
          $("[class*='" + @name.replace(/\s/g, "_") + "']").each ->
            $(this).hide()


      $("a[name=save]", tOptions).bind "click", $SS.options.save
      $("a[name=cancel]", tOptions).bind "click", $SS.options.close
      $(document).bind("keydown", $SS.options.keydown).bind "keyup", $SS.options.keyup
      
      # main tab
      $("input[name='Font Size']", tOptions).bind "keydown", (e) ->
        val = parseInt($(this).val())
        bitmap = $(this).parent().nextSibling().children("input[name='Bitmap Font']").val()
        if e.keyCode is 38 and (val < MAX_FONT_SIZE or bitmap)
          $(this).val ++val + "px"
        else $(this).val --val + "px"  if e.keyCode is 40 and (val > MIN_FONT_SIZE or bitmap)

      $("a[name=loadSysFonts]", tOptions).bind "click", $SS.options.loadSystemFonts  unless $SS.fontList
      
      # themes tab
      $SS.options.createThemesTab tOptions
      
      # mascots tab
      $SS.options.createMascotsTab tOptions
      $(document.body).append overlay