{log}  = console
{exec} = require 'child_process'
fs     = require 'fs'

STYLE     = 'style.css'
SCRIPT    = 'OneeChan.user.js'

option '-o', '--output [DIR]', 'Specify output location.'

task 'build', (options) ->
  OUTPUT = options.output || SCRIPT
  css = fs.readFileSync STYLE, 'utf8'
  css = css.replace /(\/\*[^\*]+\*\/|\t|\r|\n|\s{4})/g, ''
  css = css.replace /;}/g, '}'
  css = css.replace /\s(\+|\?|:|(?:!|=)==)(?:\s|\n)/g, '$1'
  ujs = fs.readFileSync SCRIPT, 'utf8'
  fs.writeFileSync OUTPUT, ujs.replace /css\s=.+;/, "css = \"#{css}\";", 'utf8', (err) ->
    throw err if err
  log 'Build Successful!'

option '-v', '--version [VERSION]', 'Release a new version.'

task 'new', (options) ->
  {version} = options
  return log 'ERROR! No version provided.' unless version
  data = fs.readFileSync SCRIPT, 'utf8'
  fs.writeFileSync SCRIPT, data.replace /(\/\s@version\s+|VERSION\s+=\s\")[\d\.]+/g, "$1#{version}", 'utf8', (err) ->
    throw err if err

task 'upgrade', (options) ->
  {version} = options
  return log 'ERROR! No version provided.' unless version
  data = fs.readFileSync SCRIPT, 'utf8'
  exec "git tag -a #{version} -m '#{version}' && git tag -af stable -m '#{version}' && git push --tags"

task 'update', (options) ->
  {version} = options
  return log 'ERROR! No version provided.' unless version
  data = fs.readFileSync SCRIPT, 'utf8'
  exec "git tag -af #{version} -m '#{version}' && git tag -af stable -m '#{version}' && git push --tags"