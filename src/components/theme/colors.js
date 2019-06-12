export const turquoise = {
  t100: '#EAFAFC',
  t300: '#92E4ED',
  t500: '#2CCADD',
  t700: '#198D9B',
  t900: '#0D4B52',
};
export const _blue = {
  b100: '#E9F4FF',
  b300: '#72BAFF',
  b500: '#0080FA',
  b700: '#0055A5',
  b900: '#002950',
};
export const red = {
  r100: '#FEF0F0',
  r300: '#F8B3B2',
  r500: '#F16664',
  r700: '#AD1210',
  r900: '#5F0A09',
};
export const green = {
  g100: '#EDFBF3',
  g300: '#8CE5B2',
  g500: '#2ECC71',
  g700: '#1E874B',
  g900: '#0F4124',
};
export const _yellow = {
  y100: '#FFFADD',
  y300: '#FFEA77',
  y500: '#FFD700',
  y700: '#AA8F00',
  y900: '#554800',
};
export const orange = {
  o100: '#FFF2E2',
  o300: '#FFD39E',
  o500: '#FFA538',
  o700: '#D17300',
  o900: '#7C4400',
};

export const _purple = {
  pu100: '#F0E7F4',
  pu300: '#C6A0D5',
  pu500: '#944EB0',
  pu700: '#633475',
  pu900: '#311A3A',
};

export const neutral = {
  n100: '#F9FAFB',
  n200: '#EAEBED',
  n300: '#CFD0D5',
  n500: '#868A96',
  n700: '#545862',
  n800: '#3D3F46',
  n900: '#25272B',
};

export const coolNeutral = {
  cn100: '#f7f8fc',
};

export const white = '#FFFFFF';
export const black = '#0E0E10';
export const dark = neutral.n700;
export const primary = turquoise.t500;
export const secondary = dark;
export const success = green.g500;
export const error = red.r500;
export const warning = orange.o500;
export const grey = neutral.n500;
export const info = _blue.b500;
export const blue = _blue.b500;
export const purple = _purple.pu500;
export const yellow = _yellow.y500;

export default {
  white,
  black,
  primary,
  secondary,
  success,
  error,
  warning,
  dark,
  blue,
  purple,
  yellow,
  info,
  ...neutral,
  ...coolNeutral,
  ...turquoise,
  ..._blue,
  ...green,
  ..._yellow,
  ...red,
  ...orange,
  ..._purple,
};
