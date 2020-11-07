![Vicis](.github/assets/banner.webp?raw=true "Vicis")

# « Vicis Transform Date »

Vicis transformation plugin for date and time.

•• [Vicis Documentation](https://vicis.js.org) •• [JavaScript Repository](https://github.com/r37r0m0d3l/vicis) •• [Deno Repository](https://github.com/r37r0m0d3l/deno-vicis) ••

[![npm](https://badgen.net/npm/v/@vicis/transform-date?&icon=npm&label=npm&color=DD3636)](https://www.npmjs.com/package/@vicis/transform-date)
[![downloads](https://badgen.net/npm/dt/@vicis/transform-date?&icon=terminal&label=downloads&color=009688)](https://www.npmjs.com/package/@vicis/transform-date)
[![stars](https://badgen.net/github/stars/r37r0m0d3l/vicis-transform-date?&icon=github&label=stars&color=ffcc33)](https://github.com/r37r0m0d3l/vicis-transform-date)
[![types](https://badgen.net/npm/types/@vicis/transform-date?&icon=typescript&label=types&color=1E90FF)](https://github.com/r37r0m0d3l/vicis-transform-date/blob/master/dist/vicis-transform-date.d.ts)
[![build](https://badgen.net/travis/r37r0m0d3l/vicis-transform-date?&icon=travis&label=build)](https://travis-ci.org/r37r0m0d3l/vicis-transform-date)
[![lgtm](https://badgen.net/lgtm/grade/g/r37r0m0d3l/vicis-transform-date?&icon=lgtm&label=lgtm:js/ts&color=00C853)](https://lgtm.com/projects/g/r37r0m0d3l/vicis-transform-date/alerts/)

---

## 💬 Usage

Require CommonJS.

```javascript
const { Vicis } = require("vicis");
const { VicisTransformDate } = require("@vicis/transform-date");
```

Import as ECMAScript module.

```javascript
import { Vicis } from "vicis";
import { VicisTransformDate } from "@vicis/transform-date";
```

Export separately as functions.

```javascript
import {
  VicisTransformDate,
  toDateTime, toFormat, toHourMinSec, toISO,
  toISO8601, toRFC2822, toUnix, toYearMonthDay,
} from "@vicis/transform-date";
```

## API

```javascript
const serializer = Vicis.factory();

const model = { createdAt: new Date(), };
serializer.data(model);
```

### Default serializer behaviour

```javascript
console.log(serializer.getData());
```

```json
{ "createdAt": "2020-06-15T12:30:45.290Z" }
```

### toDateTime()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toDateTime(),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

### toFormat()

```javascript
const format = "YYYY-MM-DD HH:mm:ss";
serializer.transform({
  createdAt: VicisTransformDate.toFormat(format),
});
```

```json
{ "createdAt": "2020-06-15 12:30:45" }
```

### toHourMinSec()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toHourMinSec(),
});
```

```json
{ "createdAt": "12:30:45" }
```

### toISO()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toISO(),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000Z" }
```

### toISO8601()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toISO8601(),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

### toRFC2822()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toRFC2822(),
});
```

```json
{ "createdAt": "Mon, 15 Jun 2020 12:30:45 GMT" }
```

### toUnix()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toUnix(),
});
```

```json
{ "createdAt": 1592224245000 }
```

### toYearMonthDay()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toYearMonthDay(),
});
```

```json
{ "createdAt": "2020-06-15" }
```

### toDateTime() with configuration

Priority: unixTimestamp, format, anything else for iso formatting.

```javascript
const config = {
  format: undefined,
  keepLocalTime: true,
  keepOffset: true,
  unixTimestamp: false,
  utcOffset: undefined,
};
serializer.transform({
  createdAt: VicisTransformDate.toDateTime(config),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

## ⚠ For test purposes only ⚠

If you are 💯 sure that you have correct dates and UTC offsets.

```javascript
serializer.transform({
  createdAt: VicisTransformDate,
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

## 🗺️ My other projects

[Full list here](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
