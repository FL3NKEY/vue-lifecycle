# vue-lifecycle
A Vue.js lifecycle directives.

## Install
**Via npm** `npm install vue-lifecycle --save`

``` js
import VueLifecycle from 'vue-lifecycle';
//OR
var VueLifecycle = require('vue-lifecycle');

Vue.use(VueLifecycle);
```

**Via script tag**
``` html
<script src="path/to/vue.js">
<script src="path/to/node_modules/vue-lifecycle/dist/vue-lifecycle.min.js"></script>
<script>
	Vue.use(VueLifecycle);
</script>
```
## Usage
### Created
``` html
<some-component v-on-created="someFunction"></some-component>
```

### Mounted
``` html
<some-component v-on-mounted="someFunction"></some-component>
```

### Destroyed
``` html
<some-component v-on-destroyed="someFunction"></some-component>
```