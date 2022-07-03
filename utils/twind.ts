import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
import * as colors from 'twind/colors'

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      colors: {
        colors,
        'theme-light': '#FEEEDA',
        'theme-dark': '#FFDDBF',
        'theme-blue': '#4E5E80',
        'card-theme': '#FFF8F2'
      },
    },
  },
};
if (IS_BROWSER) setup(config);
