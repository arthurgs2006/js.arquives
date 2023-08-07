import { spaceShip } from "./script";
import * as lodash from "lodash";
interface battleSpaceShip extends spaceShip {
  weapons: number
}

let xwing: battleSpaceShip = {
  name: "Xwing",
  pilot: "Skywalker",
  speed: 50,
  weapons: 5
}

// a exportação por commandJS não é possivel com o TS

// lodash.forInRight(