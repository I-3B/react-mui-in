import zod from "zod-i18n-map/locales/ar/zod.json";
import admin from "./admin.json";
import auth from "./auth.json";
import common from "./common.json";
import layout from "./layout.json";
import validation from "./validation.json";
const language = {
  common,
  validation,
  layout,
  zod,
  admin,
  auth,
} as const;
export default language;
