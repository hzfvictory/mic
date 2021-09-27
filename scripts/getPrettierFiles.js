const glob = require('glob');

const getPrettierFiles = () => {
  let files = [];
  const jsFiles = glob.sync('**/**/**', {
    ignore: ['**/node_modules/**', '**/**/node_modules/**', '**/build/**', '**/dist/**'],
  });

  files = [...jsFiles];
  if (!files.length) {
    return;
  }
  return files;
};

module.exports = getPrettierFiles;
