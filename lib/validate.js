'use strict';

var SwaggerParser = require('swagger-parser');
var YamlValidator = require('yaml-validator');

var swaggerValidate = function(api_file_path) {
  console.log('>>>> Sawagger validating <<<<');

  SwaggerParser.validate(api_file_path, function(err, api) {
    if (err) {
      // Error
      console.log('Error in ' + api_file_path);
      console.error(err);
    }
    else {
      // Success
      console.log('Successfully build ' + api_file_path);
      console.log("API name: %s, Version: %s", api.info.title, api.info.version);
    }
  });
};

var ymlValidate = function(files, options) {
  console.log('>>> YML file validating <<<');
  var isValid = true;
  var defaultOptions = {
    log: false,
    structure: false,
    yaml: false,
    writeJson: false,
    onWarning: function (error, filepath) {
      isValid = false;
      console.log(filepath + ' has error: ' + error);
    }
  };
  options = options || defaultOptions;
  var validator = new YamlValidator(options);

  validator.validate(files);
  validator.report();

  if (!isValid)
    console.log('<<<< Yml is valid >>>>');

  return isValid;
};

module.exports.swaggerValidate = swaggerValidate;
module.exports.ymlValidate = ymlValidate;





