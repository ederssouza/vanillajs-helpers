# VanillaJS Helpers

## Ajax

### vanillaAjax
```javascript
/**
 *	@param {object} obj
 * 	{
 *		url: 'string',          required
 *		method: '',             required
 *		data: 'string',			    required
 *		success: function(){},  required
 *		before: function(){},	  [optional]
 *		complete: function(){},	[optional]
 *		error: function(){}     [optional]
 * 	}
 */

vanillaAjax(obj)
```

### vanillaAjaxGet
```javascript
/**
 *	@param {object} obj
 *	{
 *		url: 'string',          required
 *		success: function(){},  required
 *		before: function(){},	  [optional]
 *		complete: function(){},	[optional]
 *		error: function(){}     [optional]
 *	}
 */

vanillaAjaxGet(obj)
```

### vanillaAjaxPost
```javascript
/**
 *	@param {object} obj
 *	{
 *		url: 'string',          required
 *		data: 'string',         required
 *		success: function(){},	required
 *		before: function(){},	  [optional]
 *		complete: function(){},	[optional]
 *		error: function(){}     [optional]
 *	}
 */

vanillaAjaxPost(obj)
```

### vanillaSerialize
```javascript
/**
 *  @param {object} elem - selector
 */

vanillaSerialize(form)
```

## Manipulation

### vanillaRemoveClass
```javascript
/**
 *  @param {object} elem		  - selector
 *  @param {string} elemClass	- class name
 */

vanillaRemoveClass(elem, elemClass)
```

### vanillaAddClass
```javascript
/**
 *  @param {object} elem		  - selector
 *  @param {string} elemClass	- class name
 */

vanillaAddClass(elem, elemClass)
```

### vanillaHasClass
```javascript
/**
 *  @param {object} elem		  - selector
 *  @param {string} elemClass	- class name
 */

vanillaHasClass(elem, elemClass)
```

### vanillaToggleClass
```javascript
/**
 *  @param {object} elem		  - selector
 *  @param {string} elemClass	- class name
 */

vanillaToggleClass(elem, elemClass)
```

## Traversing

### vanillaClosest
```javascript
/**
 *  @param {object} elem    - selector
 *  @param {number} target  - element target
 */

vanillaClosest(elem, target)
```

## Effects

### vanillaFadeOut
```javascript
/**
 *  @param {object} elem - selector
 */

vanillaFadeOut(elem)
```

### vanillaFadeIn
```javascript
/**
 *	@param {object} elem 	   - selector
 *	@param {string} display  - inline-block or block (default)
 */

vanillaFadeIn(elem, display)
```

## Visibility filter

### vanillaIsHidden
```javascript
/**
 *  @param {object} elem - selector
 */

vanillaIsHidden(elem)
```

### vanillaIsVisible
`vanillaIsVisible(elem)`
```javascript
/**
 *  @param {object} elem - selector
 */

vanillaIsVisible(elem)
```