/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

export interface Options {
  body?: (
    | 'basic'
  )[];
  face?: (
    | 'circle'
    | 'cube'
    | 'bear'
    | 'normal'
    | 'smile'
  )[];
  head?: (
    | '01'
    | '02'
    | '03'
  )[];
  clothes?: (
    | '01'
    | '02'
    | '03'
  )[];
  deco?: (
    | '01'
    | '02'
    | '03'
  )[];
}

export type ColorPickCollection = Record<string, string>;

export type ComponentGroup = Record<string, ComponentGroupItem>;
export type ComponentGroupCollection = Record<string, ComponentGroup>;
export type ComponentGroupItem = (
  components: ComponentPickCollection,
  colors: ColorPickCollection
) => string;
export type ComponentPickCollection = Record<string, ComponentPick>;
export type ComponentPick =
  | {
      name: string;
      value: ComponentGroupItem;
    }
  | undefined;
