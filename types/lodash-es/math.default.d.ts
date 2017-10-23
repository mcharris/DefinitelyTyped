import add from "./add";
import ceil from "./ceil";
import divide from "./divide";
import floor from "./floor";
import max from "./max";
import maxBy from "./maxBy";
import mean from "./mean";
import meanBy from "./meanBy";
import min from "./min";
import minBy from "./minBy";
import multiply from "./multiply";
import round from "./round";
import subtract from "./subtract";
import sum from "./sum";
import sumBy from "./sumBy";

declare const defaultExport: {
  add: typeof add;
  ceil: typeof ceil;
  divide: typeof divide;
  floor: typeof floor;
  max: typeof max;
  maxBy: typeof maxBy;
  mean: typeof mean;
  meanBy: typeof meanBy;
  min: typeof min;
  minBy: typeof minBy;
  multiply: typeof multiply;
  round: typeof round;
  subtract: typeof subtract;
  sum: typeof sum;
  sumBy: typeof sumBy;
};
export default defaultExport;