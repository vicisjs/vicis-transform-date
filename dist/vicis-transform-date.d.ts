export interface IVicisTransformDateConfig {
  format?: string;
  keepLocalTime?: boolean;
  keepOffset?: boolean;
  unixTimestamp?: boolean;
  utcOffset?: number | string;
}

declare namespace VicisTransformDate {
  function toDateTime(config?: IVicisTransformDateConfig): Function;
  function toFormat(format?: string): Function;
  function toISO(
    keepLocalTime?: boolean,
    keepOffset?: boolean,
    utcOffset?: number | string,
  ): Function;
  function toUnix(): Function;
}

export { VicisTransformDate };
