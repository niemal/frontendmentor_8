export const COLORS = {
  dark_gray: "hsl(0, 0%, 63%)",
  black: "hsl(0, 0%, 0%)",
  black_fade: "hsla(0, 0%, 0%, 0.75)",
  white: "hsl(0, 0%, 100%)",
  very_dark_gray: "hsl(0, 0%, 27%)",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth1: 1450,
  exclusiveWidth2: 1250,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth1: `(max-width: ${BREAKPOINTS.exclusiveWidth1 / 16}rem)`,
  exclusiveWidth2: `(max-width: ${BREAKPOINTS.exclusiveWidth2 / 16}rem)`,
};
