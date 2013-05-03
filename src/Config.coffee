Config =
  hasGM: typeof GM_deleteValue isnt "undefined"
  init: ->
    parseVal = (key, val) ->
      if /^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key)
        if key is "Selected Theme"
          return parseInt(val)
        else if key is "NSFW Theme"
          return parseInt(val)
        else return 0  if key is "Selected Mascots" and val is 0
        i = 0
        MAX = val.length
        ret = []

        while i < MAX
          ret[i] = parseInt(val[i])
          ++i
        return ret
      (if (Array.isArray(val) and typeof val[0] isnt "object") then val[0] else val)

    Conf = []
    for key of defaultConfig
      Conf[key] = parseVal(key, @get(key))
    Conf["Small Font Size"] = (if Conf["Font Size"] > 11 and not Conf["Bitmap Font"] then 12 else Conf["Font Size"])
    Conf["Sidebar Position String"] = (if Conf["Sidebar Position"] isnt 2 then "right" else "left")
    Conf["Sidebar Position oString"] = (if Conf["Sidebar Position"] isnt 2 then "left" else "right")

  get: (name) ->
    val = (if @hasGM then GM_getValue(NAMESPACE + name) else localStorage.getItem(NAMESPACE + name))
    return JSON.parse(val)  unless val is `undefined`
    defaultConfig[name]

  set: (name, val) ->
    name = NAMESPACE + name
    val = JSON.stringify(val)  if typeof val isnt "number"
    (if @hasGM then GM_setValue(name, val) else localStorage.removeItem(name, val))
    localStorage.setItem(name, val)