import { Decimal128 } from "../../dist/esm/Decimal128.js";

export function expectDecimal128(a, b) {
    let lhs =
        a instanceof Decimal128
            ? a.toString({ preserveTrailingZeroes: true })
            : a;
    let rhs =
        b instanceof Decimal128
            ? b.toString({ preserveTrailingZeroes: true })
            : b;
    expect(lhs).toStrictEqual(rhs);
}
