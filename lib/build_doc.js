'use strict';

var path = require('path');
var Validate = require('./validate');
var executor = require('./command_execute');
var ymlFiles = require('./list_files');

var tmpApiFile = 'api.yml';
var apiFiles = ymlFiles.apiFiles.join(' ');
var tmpDefinitionFile = 'definition.yml';
var definitionFiles = ymlFiles.definitionFiles.join(' ');
var generalFiles = ymlFiles.generalFiles;
generalFiles.push(tmpApiFile);
generalFiles.push(tmpDefinitionFile);
generalFiles = generalFiles.join(' ');

var cmds = ['echo start Concatenating ...', 'rm -f final.yml']

var extendApiCmd = 'yaml-cat --format yaml --indent 2 --extend paths --merge ' +
  apiFiles + ' --output ' + tmpApiFile;

var extendDefinitionCmd = 'yaml-cat --format yaml --indent 2 --extend definitions --merge ' +
  definitionFiles + ' --output ' + tmpDefinitionFile;

var finalCmd = 'yaml-cat --format yaml --indent 2 --merge ' +
  generalFiles + ' --output final.yml';

var finalJsonCmd = 'yaml-cat --format json --indent 2 --merge ' +
  generalFiles + ' --output public/final.json';

cmds = cmds.concat([
  extendApiCmd,
  extendDefinitionCmd,
  finalCmd,
  finalJsonCmd
]);

var removeCmd = 'rm ' + tmpApiFile + ' ' + tmpDefinitionFile;

cmds = cmds.concat([
  'echo done',
  // 'echo clean up ....',
  removeCmd
]);

var isYmlValid = Validate.ymlValidate(
  ymlFiles.generalFiles.concat(ymlFiles.apiFiles));

if (isYmlValid) {
  executor.exec(cmds, function () {
    Validate.swaggerValidate('final.yml');
  });
};
