const {
  VicisTransformDate,
  toDateTime,
  toFormat,
  toHourMinSec,
  toISO,
  toISO8601,
  toRFC2822,
  toUnix,
  toYearMonthDay,
} = require("../dist/index.cjs");

process.env.TZ = "Etc/Greenwich";

const date = "2020-06-15 12:30:45 +00:00";
const utcOffset = "+00:00";

describe("Imported functions", () => {
  it("toDateTime()", () => {
    expect(toDateTime({ utcOffset })(date)).toBe("2020-06-15T12:30:45.000+00:00");
  });
  it("toFormat()", () => {
    expect(toFormat(undefined, utcOffset)(date)).toBe("2020-06-15 12:30:45");
  });
  it("toHourMinSec()", () => {
    expect(toHourMinSec(utcOffset)(date)).toBe("12:30:45");
  });
  it("toISO()", () => {
    expect(toISO(undefined, undefined, utcOffset)(date)).toBe("2020-06-15T12:30:45.000Z");
  });
  it("toISO8601()", () => {
    expect(toISO8601(undefined, utcOffset)(date)).toBe("2020-06-15T12:30:45.000+00:00");
  });
  it("toRFC2822()", () => {
    expect(toRFC2822(utcOffset)(date)).toBe("Mon, 15 Jun 2020 12:30:45 GMT");
  });
  it("toUnix()", () => {
    expect(toUnix(utcOffset)(date)).toBe(1592224245000);
  });
  it("toYearMonthDay()", () => {
    expect(toYearMonthDay(utcOffset)(date)).toBe("2020-06-15");
  });
});

describe("Class static methods", () => {
  it("VicisTransformDate.toDateTime()", () => {
    expect(VicisTransformDate.toDateTime({ utcOffset })(date)).toBe("2020-06-15T12:30:45.000+00:00");
  });
  it("VicisTransformDate.toFormat()", () => {
    expect(VicisTransformDate.toFormat(undefined, utcOffset)(date)).toBe("2020-06-15 12:30:45");
  });
  it("VicisTransformDate.toHourMinSec()", () => {
    expect(VicisTransformDate.toHourMinSec(utcOffset)(date)).toBe("12:30:45");
  });
  it("VicisTransformDate.toISO()", () => {
    expect(VicisTransformDate.toISO(undefined, undefined, utcOffset)(date)).toBe("2020-06-15T12:30:45.000Z");
  });
  it("VicisTransformDate.toISO8601()", () => {
    expect(VicisTransformDate.toISO8601(undefined, utcOffset)(date)).toBe("2020-06-15T12:30:45.000+00:00");
  });
  it("VicisTransformDate.toRFC2822()", () => {
    expect(VicisTransformDate.toRFC2822(utcOffset)(date)).toBe("Mon, 15 Jun 2020 12:30:45 GMT");
  });
  it("VicisTransformDate.toUnix()", () => {
    expect(VicisTransformDate.toUnix(utcOffset)(date)).toBe(1592224245000);
  });
  it("VicisTransformDate.toYearMonthDay()", () => {
    expect(VicisTransformDate.toYearMonthDay(utcOffset)(date)).toBe("2020-06-15");
  });
});
