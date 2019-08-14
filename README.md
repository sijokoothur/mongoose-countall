Mongoose countAll function

## Installation

```bash
$ npm i mongoose-countall
```
## Usage

require *mongoose-countall* package on app.js file. 
```javascript
require ('mongoose-countall');
```
Then use **countAll** function with your mongoose query
```javascript
model
  .find()
  .countAll()
  });
```
**Return value**
Promise fulfilled with object having the below properties
- count - total count of the model
