import { ShortNumber } from ".";

describe("FormatHelpers.ShortNumber", () => {
    it('Must be a number', () => {
        expect(() => { ShortNumber("abc" as any) }).toThrow(TypeError)
        expect(() => { ShortNumber("123ret" as any) }).toThrow(TypeError)
    });
    it('< 1000, Should return input', () => {
        expect(ShortNumber(1)).toEqual(1);
        expect(ShortNumber(1.2314)).toEqual(1.2314);
    });
    it('< 1,000,000 should return x K', () => {
        expect(ShortNumber(1000)).toEqual("1 K");
        expect(ShortNumber(1468.2314)).toEqual("1.5 K");
        expect(ShortNumber(1968.2314)).toEqual("2 K");
    });
    it('< 1,000,000,000 should return x M', () => {
        expect(ShortNumber(1000234)).toEqual("1 M");
        expect(ShortNumber(1465648.2314)).toEqual("1.5 M");
        expect(ShortNumber(1965648.2314)).toEqual("2 M");
    });
    it('< 1,000,000,000,000 should return x B', () => {
        expect(ShortNumber(1003430234)).toEqual("1 B");
        expect(ShortNumber(1465634348.2314)).toEqual("1.5 B");
        expect(ShortNumber(1965000648.2314)).toEqual("2 B");
    });

    it('< 1,000,000,000,000,000 should return x TB', () => {
        expect(ShortNumber(1003430234000)).toEqual("1 TB");
        expect(ShortNumber(1465634348000.2314)).toEqual("1.5 TB");
        expect(ShortNumber(1965000648000.2314)).toEqual("2 TB");
        expect(ShortNumber(19065000648000.2314)).toEqual("19.1 TB"); //TB
    });

    it('< 1,000,000,000,000,000,000 should return x MB', () => {
        expect(ShortNumber(100343023400000000)).toEqual("100.3 MB"); //MB
    });

    it('More than K tỉ, return error', () => {
        // expect(() => { ShortNumber(10000000000000000000) }).toEqual(RangeError);
        expect(() => { ShortNumber(1003430234000000000000) }).toThrow(RangeError)
        expect(() => { ShortNumber(-100343023400000000000) }).toThrow(RangeError)
    });
})