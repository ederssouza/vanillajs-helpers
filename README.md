# VanillaJS Helpers

JavaScript functions set to aid in your development process.

## How to use
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>

  <body>

    <script src="dist/js/vanillajs-helpers.min.js"></script>
    <script>
      // VanillaJS Helpers function
    </script>
  </body>
</html>
```

## Ajax

### vanillaAjax
```javascript
/**
 *  @param {object} obj
 *  {
 *    url: 'string',          required
 *    method: '',             required
 *    data: 'string',         required
 *    success: function(){},  required
 *    before: function(){},   [optional]
 *    complete: function(){}, [optional]
 *    error: function(){}     [optional]
 *  }
 */

vanillaAjax(obj)
```

#### Example

##### GET

```javascript
vanillaAjax({
  url: 'example.php',
  method: 'GET',
  success: function(){
    var request = this;

    if (request.status >= 200 && request.status < 400) {

      // success
      var data = JSON.parse(request.responseText);
      console.log(data);

    } else {
      // the server received the request, but returned error
    }
  },
  before: function(){
    console.log('before send');
  },
  complete: function(){
    console.log('complete');
  },
  error: function(){
    console.log('error');
  }
});
```

##### POST
```javascript
var user = {
  name: 'John Smith',
  email: 'johnsmith@github.com'
};

vanillaAjax({
  url: 'example.php',
  method: 'POST',
  data: 'data=' + encodeURIComponent(JSON.stringify(user)),
  success: function(){
    var request = this;

    if (request.status >= 200 && request.status < 400) {

      // success
      var data = JSON.parse(request.responseText);
      console.log(data);

    } else {
      // the server received the request, but returned error
    }
  },
  before: function(){
    console.log('before send');
  },
  complete: function(){
    console.log('complete');
  },
  error: function(){
    console.log('error');
  }
});
```

### vanillaAjaxGet
```javascript
/**
 *  @param {object} obj
 *  {
 *    url: 'string',          required
 *    success: function(){},  required
 *    before: function(){},   [optional]
 *    complete: function(){}, [optional]
 *    error: function(){}     [optional]
 *  }
 */

vanillaAjaxGet(obj)
```

#### Example
```javascript
vanillaAjaxGet({
  url: 'example.php',
  success: function(){
    var request = this;

    if (request.status >= 200 && request.status < 400) {

      // success
      var data = JSON.parse(request.responseText);
      console.log(data);

    } else {
      // the server received the request, but returned error
    }
  },
  before: function(){
    console.log('before send');
  },
  complete: function(){
    console.log('complete');
  },
  error: function(){
    console.log('error');
  }
});
```

### vanillaAjaxPost
```javascript
/**
 *  @param {object} obj
 *  {
 *    url: 'string',          required
 *    data: 'string',         required
 *    success: function(){},  required
 *    before: function(){},   [optional]
 *    complete: function(){}, [optional]
 *    error: function(){}     [optional]
 *  }
 */

vanillaAjaxPost(obj)
```

#### Example
```javascript
var user = {
  name: 'John Smith',
  email: 'johnsmith@github.com'
};

vanillaAjaxPost({
  url: 'example.php',
  data: 'data=' + encodeURIComponent(JSON.stringify(user)),
  success: function(){
    var request = this;

    if (request.status >= 200 && request.status < 400) {

      // success
      var data = JSON.parse(request.responseText);
      console.log(data);

    } else {
      // the server received the request, but returned error
    }
  },
  before: function(){
    console.log('before send');
  },
  complete: function(){
    console.log('complete');
  },
  error: function(){
    console.log('error');
  }
});
```

### vanillaSerialize
```javascript
/**
 *  @param {object} elem - form selector
 */

vanillaSerialize(form)
```

#### Example
```html
<form>
  <input type="text" name="name" value="John Smith">
  <input type="email" name="email" value="johnsmith@github.com">
  <button type="submit">Send</button>
</form>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var form = document.querySelector('form');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(vanillaSerialize(this));
  });
</script>
```

## Manipulation

### vanillaRemoveClass
```javascript
/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

vanillaRemoveClass(elem, elemClass)
```

#### Example
```html
<style>
  .bg { background-color: #ccc; }
</style>

<div id="wrapper" class="bg">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum, explicabo voluptatibus, ducimus quasi facere maiores sed totam autem sint ipsa illo natus consequatur ullam iure iusto nemo aliquid a.</p>
</div>

<button id="button">Action</button>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var button = document.getElementById('button');
  var elem = document.getElementById('wrapper');

  button.addEventListener('click', function(){
    vanillaRemoveClass(elem, 'bg');
  });
</script>
```

### vanillaAddClass
```javascript
/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

vanillaAddClass(elem, elemClass)
```

#### Example
```html
<style>
  .bg { background-color: #ccc; }
</style>

<div id="wrapper">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum, explicabo voluptatibus, ducimus quasi facere maiores sed totam autem sint ipsa illo natus consequatur ullam iure iusto nemo aliquid a.</p>
</div>

<button id="button">Action</button>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var button = document.getElementById('button');
  var elem = document.getElementById('wrapper');

  button.addEventListener('click', function(){
    vanillaAddClass(elem, 'bg');
  });
</script>
```

### vanillaHasClass
```javascript
/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

vanillaHasClass(elem, elemClass)
```

#### Example
```html
<style>
  .bg { background-color: #ccc; }
</style>

<div id="wrapper" class="bg">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum, explicabo voluptatibus, ducimus quasi facere maiores sed totam autem sint ipsa illo natus consequatur ullam iure iusto nemo aliquid a.</p>
</div>

<button id="button">Action</button>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var button = document.getElementById('button');
  var elem = document.getElementById('wrapper');

  button.addEventListener('click', function(){
    if(vanillaHasClass(elem, 'bg')) {
      console.log(true);

    } else {
      console.log(false);
    }
  });
</script>
```

### vanillaToggleClass
```javascript
/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

vanillaToggleClass(elem, elemClass)
```

#### Example
```html
<style>
  .bg { background-color: #ccc; }
</style>

<div id="wrapper">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum, explicabo voluptatibus, ducimus quasi facere maiores sed totam autem sint ipsa illo natus consequatur ullam iure iusto nemo aliquid a.</p>
</div>

<button id="button">Action</button>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var button = document.getElementById('button');
  var elem = document.getElementById('wrapper');

  button.addEventListener('click', function(){
    vanillaToggleClass(elem, 'bg');
  });
</script>
```

## Traversing

### vanillaClosest
```javascript
/**
 *  @param {object} elem   - selector
 *  @param {number} target - element target
 */

vanillaClosest(elem, target)
```

#### Example
```html
<div class="container">
  <div id="wrapper">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum, explicabo voluptatibus, ducimus quasi facere maiores sed totam autem sint ipsa illo natus consequatur ullam iure iusto nemo aliquid a.</p>
  </div>

  <button id="button">Action</button>
</div>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var button = document.getElementById('button');
  var elem = document.getElementById('wrapper');

  button.addEventListener('click', function(){
    console.log(vanillaClosest(this, 2)); // return body
  });
</script>
```

## Effects

### vanillaFadeOut
```javascript
/**
 *  @param {object} elem - selector
 */

vanillaFadeOut(elem)
```

#### Example
```html
<div id="wrapper">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum, explicabo voluptatibus, ducimus quasi facere maiores sed totam autem sint ipsa illo natus consequatur ullam iure iusto nemo aliquid a.</p>
</div>

<button id="button">Action</button>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var button = document.getElementById('button');
  var elem = document.getElementById('wrapper');

  button.addEventListener('click', function(){
    vanillaFadeOut(elem);
  });
</script>
```

### vanillaFadeIn
```javascript
/**
 *  @param {object} elem    - selector
 *  @param {string} display - inline-block or block (default)
 */

vanillaFadeIn(elem, display)
```

#### Example
```html
<div id="wrapper" style="display: none;">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos cum, explicabo voluptatibus, ducimus quasi facere maiores sed totam autem sint ipsa illo natus consequatur ullam iure iusto nemo aliquid a.</p>
</div>

<button id="button">Action</button>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var button = document.getElementById('button');
  var elem = document.getElementById('wrapper');

  button.addEventListener('click', function(){
    vanillaFadeIn(elem);
  });
</script>
```

## Visibility filter

### vanillaIsHidden
```javascript
/**
 *  @param {object} elem - selector
 */

vanillaIsHidden(elem)
```

#### Example
```html
<div id="wrapper" style="display: none;"></div>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var elem = document.getElementById('wrapper');
  console.log(vanillaIsHidden(elem));
</script>
```

### vanillaIsVisible
```javascript
/**
 *  @param {object} elem - selector
 */

vanillaIsVisible(elem)
```

#### Example
```html
<div id="wrapper"></div>

<script src="dist/js/vanillajs-helpers.min.js"></script>
<script>
  var elem = document.getElementById('wrapper');
  console.log(vanillaIsVisible(elem));
</script>
```

## Browser Support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | ---
IE 10+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔