module.exports = function(grunt) { //Wrapper

    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // import package.json

        uglify: {
            options: {
                banner: '/*Author: Eric Chen , ericitnz@gmail.com*/' // Copy right
            },
            build: {
                src: 'source/js/edvantages.js', //source js
                dest: 'dist/js/edvantage.min.js' //target js
            }
        },

        less:{
            development: {
                options:{
                    banner:'/*Author: Eric Chen, ericitnz@gmail.com*/'
                },
                files:{
                    'dist/css/edu.css':'source/less/edu.less',
                    'dist/css/bootstrap.css':'source/bootstrap-3.3.6/less/bootstrap.less'

                }
            }
        },

        cssmin:{
            target: {
                files: {
                    'dist/css/bootstrap.min.css':'dist/css/bootstrap.css'
                }
            }
        },

        'html-inspector': {
            options: {
                parameters: 'noglobals=true'
            },
            all: {
                src: ['dist/*.html']
            }
        },

        watch:{   
            js:{
                files:[
                'source/js/edvantages.js'  //要监控的js
                ],
                tasks:['uglify']
            },
            script:{
                files:[
                'source/less/header.less',
                'source/less/main.less',
                'source/bootstrap-3.3.6/less/navbar.less'
                ],
                tasks:['less']
            },
            css:{
                files: [
                'dist/css/bootstrap.css'
                ],
                tasks: ['cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');     // 载入 "uglify" 插件任务
    grunt.loadNpmTasks('grunt-contrib-watch');  //载入watch插件人物
    grunt.loadNpmTasks('grunt-contrib-less');  //载入watch插件人物
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 
    grunt.loadNpmTasks('grunt-html-inspector'); //HTML检查

    grunt.registerTask('default', ['watch','html-inspector']);     // 定义默认需要执行的任务
};