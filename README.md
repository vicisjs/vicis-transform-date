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

Example data.

```javascript
const serializer = Vicis.factory();

const model = { createdAt: new Date(), };
serializer.data(model);
```

Default serializer behaviour.

```javascript
console.log(serializer.toString());
// {"createdAt":"2020-06-15T12:30:30.290Z"}
```

Default with plugin - ISO 8601.

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toDateTime(),
});
console.log(serializer.toString());
// {"createdAt":"2020-06-15T12:30:30.290+03:00"}
```

Unix Timestamp.

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toUnix(),
});
console.log(serializer.toString());
// {"createdAt":1584141035290}
```

ISO with configuration.

```javascript
const keepLocalTime = true; // default is true
const keepOffset = true; // default is true
const utcOffset = "+06:00"; // default is undefined
serializer.transform({
  createdAt: VicisTransformDate.toISO(keepLocalTime, keepOffset, utcOffset),
});
console.log(serializer.toString());
// {"createdAt":"2020-06-15T12:30:30.290+06:00"}
```

Formatted string.

```javascript
const format = "YYYY-MM-DD";
serializer.transform({
  createdAt: VicisTransformDate.toFormat(format),
});
console.log(serializer.toString());
// {"createdAt":"2020-06-15"}
```

From configuration. Priority: unixTimestamp, format, anything else for iso formatting.

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
console.log(serializer.toString());
// {"createdAt":"2020-06-15T12:30:30.000+03:00"}
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
