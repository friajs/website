import constants from "../../constants";

export function isXs() {
  const width = window.innerWidth;
  return width < constants.breakpoints.sm;
}

export function isSm() {
  const width = window.innerWidth;
  return width >= constants.breakpoints.sm && width < constants.breakpoints.md;
}

export function isMd() {
  const width = window.innerWidth;
  return width >= constants.breakpoints.md && width < constants.breakpoints.lg;
}

export function isLg() {
  const width = window.innerWidth;
  return width >= constants.breakpoints.lg && width < constants.breakpoints.xl;
}

export function isXl() {
  const width = window.innerWidth;
  return width >= constants.breakpoints.xl;
}