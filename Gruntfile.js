module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),

        jsSrc : [
            "bower_components/webcomponentsjs/webcomponents.min.js",
            "bower_components/jquery/dist/jquery.js",
            "bower_components/underscore/underscore.js",
            "bower_components/backbone/backbone.js",
            "bower_components/backbone.touch/dist/backbone.touch.min.js",
            "bower_components/backbone.babysitter/lib/backbone.babysitter.js",
            "src/js/App.js",
            "src/js/models/MenuItem.js",
            "src/js/collections/MenuList.js",
            "src/js/routes/Router.js",
            "src/js/Setup.js"
        ],

        cssSrc : [
            "bower_components/competent-meyerweb-reset/reset.css",
            "src/css/min.css"
        ],

        uglify : {
            options : {
                banner : "/*! <%= pkg.title %> v<%= pkg.version %> | (c) 2015 tsj4.com. build date : <%= grunt.template.today('yyyy-mm-dd') %> */\n",
                sourceMap :true,
                sourceMapIncludeSources : true,
                mangle : true
            },

            release : {
                options : {
                    compress: {
                        drop_console: true
                    }
                },
                files : {
                    "public/javascript/min.js" : "<%= jsSrc %>"
                }
            },

            development : {
                options: {
                    mangle : false,
                    compress : false,
                    beautify: true
                },
                files : {
                    "public/javascript/min.js" : "<%= jsSrc %>"
                }
            }
        },

        less : {
            production : {
                files : {
                    "src/css/min.css": "src/less/main.less"
                }
            }
        },

        cssmin : {
            combine : {
                files : {
                    'public/styles/min.css' : "<%= cssSrc %>"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask("release", ["uglify:release", "less", "cssmin"]); // TODO : include following tasks : "jasmine", "yuidoc"
    grunt.registerTask("default", ["uglify:development", "less", "cssmin"]);
}