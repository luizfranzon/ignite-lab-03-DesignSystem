import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

import themeTest from "./themeTest";

addons.setConfig({
  theme: themeTest,
});
