import { Decimal128 } from "../../dist/esm/Decimal128.js";

describe("valueOf", () => {
    test("throws unconditionally", () => {
        expect(() => {
            return 42 - new Decimal128("42");
        }).toThrow(TypeError);
    });
});
