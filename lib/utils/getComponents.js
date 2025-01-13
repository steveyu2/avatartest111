/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */
import { pickComponent } from './pickComponent.js';
export function getComponents({ prng, options }) {
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
    const headComponent = pickComponent({
        prng,
        group: 'head',
        values: options.head,
    });
    const clothesComponent = pickComponent({
        prng,
        group: 'clothes',
        values: options.clothes,
    });
    const decoComponent = pickComponent({
        prng,
        group: 'deco',
        values: options.deco,
    });
    return {
        'body': bodyComponent,
        'face': faceComponent,
        'head': headComponent,
        'clothes': clothesComponent,
        'deco': decoComponent,
    };
}
;