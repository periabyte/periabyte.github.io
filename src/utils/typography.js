import Typography from "typography";
import moragaTheme from "typography-theme-moraga";
moragaTheme.headerWeight = 400;
const typography = new Typography(moragaTheme);

export const { scale, rhythm, options } = typography;
export default typography;
