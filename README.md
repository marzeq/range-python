# range-python

A port of the Python range function to JavaScript

## Usage:

```ts
import range from "range-python"

// just like in python, this returns a generator, so we have to convert it to an array first

[...range(10)]
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

[...range(10, 20)]
// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

[...range(10, 20, 2)]
// [10, 12, 14, 16, 18]

[...range(10, 0, -1)]
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```
