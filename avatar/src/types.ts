/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

export interface Options {
  bg?: (
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '05'
    | '06'
    | '07'
    | '08'
    | '09'
    | '04'
    | '03'
    | '01'
    | '02'
  )[];
  body?: (
     'yellow'
  )[];
  clothes?: (
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '05'
    | '06'
    | '04'
    | '03'
    | '01'
    | '02'
    | '07'
    | '08'
    | '09'
  )[];
  head?: (
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '06'
    | '07'
    | '05'
    | '03'
    | '04'
    | '01'
    | '02'
    | '08'
    | '09'
  )[];
  face?: (
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18'
    | '19'
    | '20'
    | '21'
    | '22'
    | '23'
    | '24'
    | '25'
    | '26'
    | '27'
    | '28'
    | '29'
    | '30'
    | '31'
    | '32'
    | '33'
    | '34'
    | '35'
    | '36'
    | '37'
    | '38'
    | '39'
    | '40'
    | '41'
    | '42'
    | '43'
    | '44'
    | '02'
    | '01'
    | '09'
    | '06'
    | '07'
    | '08'
    | '03'
    | '04'
    | '05'
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
