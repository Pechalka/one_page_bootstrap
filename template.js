
'use strict';

// Basic template description.
exports.description = 'generate simple project with express jquery knockout twitter.bootstrap';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'generate simple project with express jquery knockout twitter.bootstrap';

// Template-specific notes to be displayed after question prompts.
exports.after = 'now: npm install, npm start';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({type: 'node'}, [
     init.prompt('name'),
     init.prompt('version'),
  ], function(err, props) {

    props.dependencies = {
      'express': '3.2.3'
    };

    var files = init.filesToCopy(props);
    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
