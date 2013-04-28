module.exports = (grunt) ->
  pkg = grunt.file.readJSON 'package.json'
  concatOptions =
    process:
      data: pkg

  shellOptions =
    stdout:      true
    stderr:      true
    failOnError: true

  # Project configuration.
  grunt.initConfig
    pkg: pkg
    concat:
      css:
        options: concatOptions
        src: [
          'test.css'
        ]
        dest: 'styleMain.css'

      coffee:
        options: concatOptions
        src: [
          'test.coffee'
        ]
        dest: 'main.coffee'

    coffee:
      script:
        src:  'main.coffee'
        dest: 'script.js'

    shell:
      commit:
        options: shellOptions
        command: [
          'cake build'
        ].join(' && ')
        stdout: true

    config: { 
      testfile: 'stylnew.css'
    }

    string-replace:
        build:
          files: {
            'OneeChan.user.js': 'OneeChan.user.js'
          },
          options:
            replacements: [
              { 
                pattern: /css\s=.+;/,
                replacement: '<script><%= grunt.file.read('stylnew.css') %></script>'
              }
            ]

  grunt.loadNpmTasks 'grunt-bump'
  grunt.loadNpmTasks 'grunt-concurrent'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compress'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.loadNpmTasks 'grunt-string-replace'

  grunt.registerTask 'build', [
    'concat:css'
    'concat:coffee'
    'coffee:script'
  ]

  grunt.registerTask 'caketest', [
    'shell:commit'
  ]