/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

import type { Prng } from '@dicebear/core';
import type { Options, ComponentPickCollection } from '../types.js';
import { pickComponent } from './pickComponent.js';

type Props = {
  prng: Prng,
  options: Options
}

export function getComponents({ prng, options }: Props): ComponentPickCollection {
  const bgComponent = pickComponent({
    prng,
    group: 'bg',
    values: options.bg,
  });
  const bodyComponent = pickComponent({
    prng,
    group: 'body',
    values: options.body,
  });
  const clothesComponent = pickComponent({
    prng,
    group: 'clothes',
    values: options.clothes,
  });
  const headComponent = pickComponent({
    prng,
    group: 'head',
    values: options.head,
  });
  const faceComponent = pickComponent({
    prng,
    group: 'face',
    values: options.face,
  });

  return {
    'bg': bgComponent,
    'body': bodyComponent,
    'clothes': clothesComponent,
    'head': headComponent,
    'face': faceComponent,
  }
};
