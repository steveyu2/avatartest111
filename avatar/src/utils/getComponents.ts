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
  const faceComponent = pickComponent({
    prng,
    group: 'face',
    values: options.face,
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
  const decoComponent = pickComponent({
    prng,
    group: 'deco',
    values: options.deco,
  });

  return {
    'bg': bgComponent,
    'body': bodyComponent,
    'face': faceComponent,
    'clothes': clothesComponent,
    'head': headComponent,
    'deco': decoComponent,
  }
};
