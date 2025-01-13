/**
 * Do not change this file manually! This file was generated with the "Dicebear Exporter"-Plugin for Figma.
 *
 * Plugin: https://www.figma.com/community/plugin/1005765655729342787
 */

import type { StyleSchema } from '@dicebear/core';

export const schema: StyleSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "body": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "basic"
        ]
      },
      "default": [
        "basic"
      ]
    },
    "clothes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "01",
          "02",
          "03"
        ]
      },
      "default": [
        "01",
        "02",
        "03"
      ]
    },
    "deco": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "01",
          "02",
          "03"
        ]
      },
      "default": [
        "01",
        "02",
        "03"
      ]
    },
    "face": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "circle",
          "cube",
          "bear",
          "normal",
          "smile"
        ]
      },
      "default": [
        "normal",
        "smile"
      ]
    },
    "head": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "01",
          "02",
          "03"
        ]
      },
      "default": [
        "01",
        "02",
        "03"
      ]
    }
  }
};
