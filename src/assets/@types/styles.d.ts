import "styled-components";
import { defaultTheme } from "../../styles/themes/default";

type theameType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
