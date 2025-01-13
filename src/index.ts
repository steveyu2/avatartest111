/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

/*!
 * avatar_test (@dicebear/avatartest)
 *
 * Code licensed under MIT License.
 * Copyright (c) 2025 Florian Körner
 *
 * Design "avatar_test" by byd licensed under CC BY 4.0. / Remix of the original.
 * License: https://creativecommons.org/licenses/by/4.0/
 */

import type { StyleCreate, StyleMeta } from '@dicebear/core';
import { escape } from '@dicebear/core';

import type { Options } from './types.js';
import { getComponents } from './utils/getComponents.js';
import { getColors } from './utils/getColors.js';

export const meta: StyleMeta = {
  title: 'avatar_test',
  creator: 'byd',
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
      viewBox: '0 0 600 600',
      fill: 'none',
      'shape-rendering': 'auto'
    },
    body: `<rect width="600" height="600" transform="translate(.7)" fill="#CB5574"/><g transform="translate(1.3)">${components.body?.value(components, colors) ?? ''}</g>${components.face?.value(components, colors) ?? ''}<g transform="translate(.3)">${components.head?.value(components, colors) ?? ''}</g><g transform="translate(.3)">${components.clothes?.value(components, colors) ?? ''}</g><g transform="translate(-.3)">${components.deco?.value(components, colors) ?? ''}</g>`,
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
