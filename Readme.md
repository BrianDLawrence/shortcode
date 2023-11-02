
# @speroautem/shortcode

A utility package to encode and decode generic encoding algorithms. By default base62 is used however other encodings such as base58 or custom will be supported in future releases. This can be used to create short URLs that are URL-safe. 

## Installation

```
$ npm install @speroautem/shortcode
```

## Example

```js
import * as shortcode from '@speroautem/shortcode';
shortcode.encode(0) //...... '0'
shortcode.encode(10)//.......'a'
shortcode.encode(1024)//.....'gw'
shortcode.decode('0')//.......0
shortcode.decode('a')//.......10
shortcode.decode('gw')//......1024

import { encode, decode } from '@speroautem/shortcode';
encode(0) //...... '0'
encode(10)//.......'a'
encode(1024)//.....'gw'
decode('0')//.......0
decode('a')//.......10
decode('gw')//......1024

```

## API

### encode(number)
  
Returns the encoded base62 representation of number

### decode(string)

Returns the decoded number decoded from the base62 string

## License

The MIT License (MIT)

Copyright &copy; 2023 Spero Autem, LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.