import { Decimal128 } from "../src/Decimal128.js";

function floor(d: Decimal128): Decimal128 {
    return d.round(0, "floor");
}

export { floor };
