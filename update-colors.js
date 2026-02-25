const fs = require('fs');
const path = require('path');

const map = {
  'iloko-navy': 'iloko-red',
  'iloko-gold': 'iloko-yellow',
  'iloko-crimson': 'iloko-green',
  'iloko-bg': 'white', // use tailwind white instead of iloko-white? No, we have iloko-white
  // replace specific text-iloko-blue with text-iloko-red so it's readable
  'text-iloko-blue': 'text-iloko-red',
  'border-iloko-blue': 'border-iloko-red',
};

function walkSync(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
}

const files = walkSync('./src');

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;
  
  // replace map exact strings
  for (const [key, value] of Object.entries(map)) {
    content = content.replace(new RegExp(key, 'g'), value);
  }

  // Also replace 'iloko-bg' just in case it's iloko-white
  content = content.replace(/iloko-bg/g, 'iloko-white');

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated ' + f);
  }
});
