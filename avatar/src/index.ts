/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

/*!
 * smartmoney (@dicebear/smartmoney)
 *
 * Code licensed under MIT License.
 * Copyright (c) 2025 Florian Körner
 *
 * Design "smartmoney" by bydfi licensed under CC BY 4.0. / Remix of the original.
 * License: https://creativecommons.org/licenses/by/4.0/
 */

import type { StyleCreate, StyleMeta } from '@dicebear/core';
import { escape } from '@dicebear/core';

import type { Options } from './types.js';
import { getComponents } from './utils/getComponents.js';
import { getColors } from './utils/getColors.js';

export const meta: StyleMeta = {
  title: 'smartmoney',
  creator: 'bydfi',
  license: {
    name: 'CC BY 4.0',
    url: 'https://creativecommons.org/licenses/by/4.0/',
  },
};

export const create: StyleCreate<Options> = ({ prng, options }) => {
  const components = getComponents({ prng, options });
  const colors = getColors({ prng, options });

  return {
    attributes: {
      viewBox: '0 0 320 320',
      fill: 'none',
      'shape-rendering': 'auto'
    },
    body: `<rect width="320" height="320" fill="white"/>${components.bg?.value(components, colors) ?? ''}${components.body?.value(components, colors) ?? ''}${components.clothes?.value(components, colors) ?? ''}${components.head?.value(components, colors) ?? ''}${components.face?.value(components, colors) ?? ''}`,
    extra: () => ({
      ...Object.entries(components).reduce<Record<string, string | undefined>>(
        (acc, [key, value]) => {
          acc[key] = value?.name;
          return acc;
        },
        {}
      ),
      ...Object.entries(colors).reduce<Record<string, string>>(
        (acc, [key, value]) => {
          acc[`${key}Color`] = value;
          return acc;
        },
        {}
      ),
    }),
  };
};

export { schema } from './schema.js';
export type { Options } from './types.js';
