# short-number

Convert number to readable number. Example 1000000 to 1M

[![Publish Package](https://github.com/lytieuphong/short-number/actions/workflows/publish-package.yaml/badge.svg)](https://github.com/lytieuphong/short-number/actions/workflows/publish-package.yaml) [![Test](https://github.com/lytieuphong/short-number/actions/workflows/test.yaml/badge.svg)](https://github.com/lytieuphong/short-number/actions/workflows/test.yaml)

## How to use

```js 
import {ShortNumber} from '@lytieuphong/short-number';

console.log(ShortNumber(1000000)); // 1M
console.log(ShortNumber(1000)); // 1K
```
