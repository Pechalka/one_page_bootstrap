var child_process = require('child_process'),
    exec = child_process.exec,
    spawn = child_process.spawn,
    colors = require('colors'),
    read = require('read');

module.exports = function(grunt) {

  // grunt.registerMultiTask('clean', 'Cleans the database', function(){

  // });

//grunt.registerTask('test', function(target, env){});

    grunt.registerTask('modul', function(name){
        grunt.file.mkdir('./../site/moduls/' + name);

        //todo : use template, register in requerjs, register in reqierejs optimazer

        var modulText = 'define([\n' +
    '"//moduls/users/vm/index",\n' +
    '"app",\n' +
    '"vent"],\n' + 
    'function(\n' +
    '    //IndexView,\n' + 
    '    app, vent) {\n' +
    '    \n' +
    'return {\n' +
    '    //index : function(){\n' +      
    '    //    app.content(new IndexView({}));\n' +
    '    //}\n' +
    '}\n' +
'}); \n';

        grunt.file.write('./../site/moduls/' + name + '/modul.js', modulText);
        console.log('create modul: ' + name);
    });

    grunt.registerTask('view', function(modul, name) {
        grunt.file.mkdir('./../site/moduls/' + modul);
        grunt.file.mkdir('./../site/moduls/' + modul + '/tpl');
        grunt.file.mkdir('./../site/moduls/' + modul + '/vm');

        var jsText = '\n' + 
'define(["knockout", "text!./../tpl/' + name +'.html", "vent"], function(ko, template, vent) {\n' +
'    return function(model){\n' +
'        var self = this;\n' +
'\n' +        
'        self.html = template;\n' +
'    }\n' +
'});\n';
        grunt.file.write('./../site/moduls/' + modul + '/vm/' + name + '.js', jsText);

        var htmlText = '';
        grunt.file.write('./../site/moduls/' + modul + '/tpl/' + name + '.html', htmlText);

        //todo: use template, register js in main.js
    });
}