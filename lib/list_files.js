var path = path || require('path');
var fs = fs || require('fs');
// Add files according to the order
var base_path = './api_doc/';

var getFileNames = function (dir_path) {
  fs.readdir(dir_path, (err, files) => {
    return files;
  })
};

var pathSync = function (dir, filelist) {
  var files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function (file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = pathSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

var generalFiles = [
  'api_doc/general.yml'
];

var apiDirPath = base_path + 'api'
var apiFiles = pathSync(apiDirPath).sort();

var definitionDirPath = base_path + 'definitions'
var definitionFiles = pathSync(definitionDirPath).sort();

module.exports.apiFiles = apiFiles;
module.exports.definitionFiles = definitionFiles;
module.exports.generalFiles = generalFiles;
