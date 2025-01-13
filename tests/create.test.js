/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 * File: https://www.figma.com/file/
 */

import { createAvatar } from '@dicebear/core';
import * as style from '../lib/index.js';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { test } from 'uvu';
import { equal } from 'uvu/assert';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const data = [
  [style, { seed: 'John Doe' }],
  [style, { seed: 'Jane Doe1' }],
  [style, { seed: 'Florian2' }],
  [style, { seed: 'Aneka3' }],
  [style, { seed: 'Felix4' }],
];

data.forEach((params, key) => {
  test(`Create avatar #${key}`, async () => {
    key=params[1].seed;
    const svgPath = path.resolve(__dirname, 'static/create', `${key}.svg`);
    const jsonPath = path.resolve(__dirname, 'static/create', `${key}.json`);

    if (false === fs.existsSync(svgPath)) {
      if (false === fs.existsSync(path.dirname(svgPath))) {
        fs.mkdirSync(path.dirname(svgPath), { recursive: true });
      }

      fs.writeFileSync(svgPath, createAvatar(...params).toString());
    }

    if (false === fs.existsSync(jsonPath)) {
      if (false === fs.existsSync(path.dirname(jsonPath))) {
        fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
      }

      fs.writeFileSync(
        jsonPath,
        JSON.stringify(createAvatar(...params).toJson(), null, 2)
      );
    }

    const svg = fs.readFileSync(svgPath, { encoding: 'utf-8' });
    const json = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf-8' }));

    equal(createAvatar(...params).toString(), svg);
    equal(JSON.parse(JSON.stringify(createAvatar(...params).toJson())), json);
  });
});

test.run();
