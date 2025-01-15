(async () => {
  const { createAvatar } = await import('@dicebear/core');
  const style = await import('../avatar/lib/index.js');
  const path = require('path');
  const fs = require('fs');

  const jsonFile = fs.readFileSync(
    path.resolve(__dirname, 'json.json'),
    'utf8'
  );
  const data = JSON.parse(jsonFile);

  data.forEach((seed) => {
    const svgPath = path.resolve(__dirname, 'build/avatar', `${seed}.svg`);

    if (false === fs.existsSync(svgPath)) {
      if (false === fs.existsSync(path.dirname(svgPath))) {
        fs.mkdirSync(path.dirname(svgPath), { recursive: true });
      }

      fs.writeFileSync(svgPath, createAvatar(style, { seed: seed }).toString());
    }
  });
})();
