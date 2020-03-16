# Vicis Transform Date

Vicis transformation plugin for date and time.

[🗎 Vicis Documentation 🗎](https://vicis.js.org)

[![NPM Version](https://img.shields.io/npm/v/@vicis/transform-date.svg?style=flat)]()
[![NPM Downloads](https://img.shields.io/npm/dt/@vicis/transform-date.svg?style=flat)]()
[![Dependency Status](https://david-dm.org/r37r0m0d3l/vicis-transform-date.svg)](https://david-dm.org/r37r0m0d3l/vicis-transform-date)
[![devDependencies Status](https://david-dm.org/r37r0m0d3l/vicis-transform-date/dev-status.svg)](https://david-dm.org/r37r0m0d3l/vicis-transform-date?type=dev)

---

## Usage

Require CommonJS.

```javascript
const { Vicis } = require("vicis");
const { VicisTransformDate } = require("@vicis/transform-date");
```

Import as ECMAScript module.

```javascript
import { Vicis } from "vicis/es";
import { VicisTransformDate } from "@vicis/transform-date/es";
```

Export separately as functions.

```javascript
const {
  VicisTransformDate,
  toDateTime, toFormat, toHourMinSec, toISO,
  toISO8601, toRFC2822, toUnix, toYearMonthDay,
} = require("@vicis/transform-date");
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

---

*If you use this project don't forget to give a ⭐
[star](https://github.com/r37r0m0d3l/vicis) ⭐ to it on GitHub!*

---

Discover more:

-   🔎[Consono](https://consono.js.org)🔎 -
  The most informative and correct variable inspector for JavaScript on the web.

-   🌠[OF](https://of.js.org)🌠 - Promise wrapper with some sugar.

-   🔩[Local Storage Fallback](https://github.com/r37r0m0d3l/fallback-local-storage)🔩 -
  Universal localStorage fallback.

-   🔄[Publish Subscribe](https://publish-subscribe.js.org)🔄 -
  JavaScript implementation of the Publish-Subscribe pattern.

-   🧰[Vicis](https://vicis.js.org)🧰 -
  Presentation and transformation layer for data output in RESTful APIs.

Or find useful these tools:

-   🧾[JSON Sorter](https://r37r0m0d3l.github.io/json_sort)🧾 - Neat online JSON sorter.
