import { ParamsApp1 } from "./params-app1";
import { M_FR_PROFILE } from "./m-fr-profile";
import { M_ACCURACY_LEVELS } from "./m-accuracy-levels";

export const M_PARAMS_1: ParamsApp1 = {
  flowrate: M_FR_PROFILE,
  pressure: 2,
  uppper_temperature: -10,
  lower_temperature: 100,
  accuracy_level: M_ACCURACY_LEVELS[0]
};