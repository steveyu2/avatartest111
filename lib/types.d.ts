/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */
export interface Options {
    bg?: ('10' | '11' | '05' | '06' | '07' | '08' | '09' | '04' | '03' | '01' | '02')[];
    body?: ('basic')[];
    face?: ('02' | '01')[];
    clothes?: ('05' | '06' | '04' | '03' | '01' | '02')[];
    head?: ('06' | '07' | '05' | '03' | '04' | '01' | '02')[];
    deco?: ('06' | '04' | '05' | '03' | '01' | '02')[];
}
export type ColorPickCollection = Record<string, string>;
export type ComponentGroup = Record<string, ComponentGroupItem>;
export type ComponentGroupCollection = Record<string, ComponentGroup>;
export type ComponentGroupItem = (components: ComponentPickCollection, colors: ColorPickCollection) => string;
export type ComponentPickCollection = Record<string, ComponentPick>;
export type ComponentPick = {
    name: string;
    value: ComponentGroupItem;
} | undefined;
