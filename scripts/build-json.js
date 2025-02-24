const { v7: uuidv4 } = require('uuid');

(async () => {
  const { createAvatar } = await import('@dicebear/core');
  const style = await import('../avatar/lib/index.js');
  const path = require('path');
  const fs = require('fs');

  /** 用json文件数组 */
  // const jsonFile = fs.readFileSync(
  //   path.resolve(__dirname, 'json.json'),
  //   'utf8'
  // );
  // const data = JSON.parse(jsonFile);

  /** 用随机id生成 */
  const data=Array.from({length:1000}).map((v,i)=>uuidv4());

  data.forEach((seed,i) => {
    const svgPath = path.resolve(__dirname, '../build/avatar', `${i}.svg`);

    if (false === fs.existsSync(svgPath)) {
      if (false === fs.existsSync(path.dirname(svgPath))) {
        fs.mkdirSync(path.dirname(svgPath), { recursive: true });
      }

      fs.writeFileSync(svgPath, createAvatar(style, { seed: seed }).toString());
    }
  });
})();
