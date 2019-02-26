# getBetween(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numItemsToIgnoreAtEachEnd,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Returns everything between `numItemsToIgnoreAtEachEnd` in `array`.  
Does not modify `array`.


Examples:
```
let arr = [1,2,3,4,5,6,7,8,9,10];
let middle = getBetween(2, arr); // ignores first 2 and last 2 items.
// middle is now [3,4,5,6,7,8]

middle = getBetween(4, arr); // ignores first 4 and last 4 items.
// middle is now [5,6]
```

## Installation
`npm i  @writetome51/array-get-between`


## Loading
```
// if using TypeScript:
import {getBetween} from '@writetome51/array-get-between'
    
// if using ES5 JavaScript:
var getBetween = require('@writetome51/array-get-between').getBetween;
```