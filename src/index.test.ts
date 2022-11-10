import { formatShortNumber } from ".";

describe("FormatHelpers.formatShortNumber", () => {
    it('Must be a number', () => {
        expect(() => { formatShortNumber("abc" as any) }).toThrow(TypeError)
        expect(() => { formatShortNumber("123ret" as any) }).toThrow(TypeError)
    });
    it('< 1000, Should return input', () => {
        expect(formatShortNumber(1)).toEqual(1);
        expect(formatShortNumber(1.2314)).toEqual(1.2314);
    });
    it('< 1,000,000 should return x K', () => {
        expect(formatShortNumber(1000)).toEqual("1 K");
        expect(formatShortNumber(1468.2314)).toEqual("1.5 K");
        expect(formatShortNumber(1968.2314)).toEqual("2 K");
    });
    it('< 1,000,000,000 should return x M', () => {
        expect(formatShortNumber(1000234)).toEqual("1 M");
        expect(formatShortNumber(1465648.2314)).toEqual("1.5 M");
        expect(formatShortNumber(1965648.2314)).toEqual("2 M");
    });
    it('< 1,000,000,000,000 should return x B', () => {
        expect(formatShortNumber(1003430234)).toEqual("1 B");
        expect(formatShortNumber(1465634348.2314)).toEqual("1.5 B");
        expect(formatShortNumber(1965000648.2314)).toEqual("2 B");
    });

    it('< 1,000,000,000,000,000 should return x TB', () => {
        expect(formatShortNumber(1003430234000)).toEqual("1 TB");
        expect(formatShortNumber(1465634348000.2314)).toEqual("1.5 TB");
        expect(formatShortNumber(1965000648000.2314)).toEqual("2 TB");
        expect(formatShortNumber(19065000648000.2314)).toEqual("19.1 TB"); //TB
    });

    it('< 1,000,000,000,000,000,000 should return x MB', () => {
        expect(formatShortNumber(100343023400000000)).toEqual("100.3 MB"); //MB
    });

    it('More than K tỉ, return error', () => {
        // expect(() => { formatShortNumber(10000000000000000000) }).toEqual(RangeError);
        expect(() => { formatShortNumber(1003430234000000000000) }).toThrow(RangeError)
        expect(() => { formatShortNumber(-100343023400000000000) }).toThrow(RangeError)
    });
})