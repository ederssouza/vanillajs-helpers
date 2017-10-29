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

function vanillaAjax(obj) {

	if(obj.url === undefined || obj.method === undefined || obj.success === undefined) {
		throw new Error('The url, method, and success parameters are required in the vanillaAjax({url: "", method: "", success: ""}). Visit https://github.com/ederssouza/vanillajs-helpers for more information.');

	} else {
		var xhr = new XMLHttpRequest();
		xhr.open(obj.method, obj.url, true);

		// success request
		xhr.addEventListener('load', obj.success);

		// before request
		if(obj.before !== undefined) xhr.addEventListener('loadstart', obj.before);

		// complete request
		if(obj.complete !== undefined) xhr.addEventListener('loadend', obj.complete);

		// error
		if(obj.error !== undefined) xhr.addEventListener('error', obj.error);

		if(obj.method === 'POST'){
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			xhr.send(obj.data);

		} else if(obj.method === 'GET') {
			xhr.send();
		}
	}
}

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

function vanillaAjaxGet(obj) {

	if(obj.url === undefined || obj.success === undefined) {
		throw new Error('The url, and success parameters are required in the vanillaAjax({url: "", success: ""}). Visit https://github.com/ederssouza/vanillajs-helpers for more information.');

	} else {
		var xhr = new XMLHttpRequest();
		xhr.open(obj.method, obj.url, true);

		// success request
		xhr.addEventListener('load', obj.success);

		// before request
		if(obj.before !== undefined) xhr.addEventListener('loadstart', obj.before);

		// complete request
		if(obj.complete !== undefined) xhr.addEventListener('loadend', obj.complete);

		// error
		if(obj.error !== undefined) xhr.addEventListener('error', obj.error);

		xhr.send();
	}
}

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

function vanillaAjaxPost(obj) {

	if(obj.url === undefined || obj.data === undefined || obj.success === undefined) {
		throw new Error('The url, data, and success parameters are required in the vanillaAjax({url: "", data: "", success: ""}). Visit https://github.com/ederssouza/vanillajs-helpers for more information.');

	} else {
		var xhr = new XMLHttpRequest();
		xhr.open(obj.method, obj.url, true);

		// success request
		xhr.addEventListener('load', obj.success);

		// before request
		if(obj.before !== undefined) xhr.addEventListener('loadstart', obj.before);

		// complete request
		if(obj.complete !== undefined) xhr.addEventListener('loadend', obj.complete);

		// error
		if(obj.error !== undefined) xhr.addEventListener('error', obj.error);

		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xhr.send(obj.data);
	}
}

/**
 *  @param {object} elem - selector
 */

function vanillaSerialize(form) {

  var result = [];

  if (typeof form === 'object' && form.nodeName === 'FORM')
    Array.prototype.slice.call(form.elements).forEach(function(control) {
      if (
        control.name &&
        !control.disabled &&
        ['file', 'reset', 'submit', 'button'].indexOf(control.type) === -1
      )
      if (control.type === 'select-multiple')
        Array.prototype.slice.call(control.options).forEach(function(option) {
          if (option.selected)
              result.push(encodeURIComponent(control.name) + '=' + encodeURIComponent(option.value));
        });
      else if (
        ['checkbox', 'radio'].indexOf(control.type) === -1 ||
        control.checked
      ) result.push(encodeURIComponent(control.name) + '=' + encodeURIComponent(control.value));
    });
    return result.join('&').replace(/%20/g, '+');
}

/**
 *  @param {object} elem    - selector
 *  @param {number} target  - element target
 */

function vanillaClosest(elem, target) {

	return target === 0 ? elem : vanillaClosest(elem.parentNode, target - 1);
}

/**
 *  @param {object} elem		  - selector
 *  @param {string} elemClass	- class name
 */

function vanillaRemoveClass(elem, elemClass){

  if (elem.classList){
    elem.classList.remove(elemClass);

  } else {
    var currentClass = elem.className;

    if(currentClass.indexOf(elemClass) > 1){
      newClass = currentClass.replace(elemClass,'');
      elem.className = newClass;
    }
  }
}

/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

function vanillaAddClass(elem, elemClass){

  if (elem.classList){
    elem.classList.add(elemClass);

  } else {
    var currentClass = elem.className;

    if(currentClass.indexOf(elemClass) < 1){
      elem.className += ' ' + elemClass;
    }
  }
}

/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

function vanillaHasClass(elem, elemClass){

  var currentClass = elem.className;

  if(currentClass.indexOf(elemClass) >= 0){
    return true;
  }
}

/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

function vanillaToggleClass(elem, elemClass){

  if (elem.classList){
    elem.classList.toggle(elemClass);

  } else {
    var currentClass = elem.className;

    if(currentClass.indexOf(elemClass) > -1){
      newClass = currentClass.replace(elemClass,"");
    } else {
      newClass = currentClass + " " + elemClass;
    }
    elem.className = newClass;
  }
}

/**
 *  @param {object} elem      - selector
 *  @param {string} elemClass - class name
 */

function vanillaFadeOut(elem){

  if(window.requestAnimationFrame){
    elem.style.opacity = 1;

    (function fade() {
      if ((elem.style.opacity -= 0.1) < 0) {
        elem.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
  } else {
    elem.style.display = "none";
  }
}

/**
 *	@param {object} elem 	   - selector
 *	@param {string} display  - inline-block or block (default)
 */

function vanillaFadeIn(elem, display){

  if(window.requestAnimationFrame){
    elem.style.opacity = 0;
    elem.style.display = display || 'block';

    (function fade() {
      var val  = parseFloat(elem.style.opacity),
          calc = (val += 0.1) > 1;
      if (!calc) {
        elem.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  } else {
    elem.style.display = display || 'block';
  }
}

/**
 *  @param {object} elem - selector
 */

function vanillaIsHidden(elem){

  var style       = window.getComputedStyle(elem),
      display     = style.getPropertyValue('display'),
      visibility  = style.getPropertyValue('visibility'),
      opacity     = style.getPropertyValue('opacity');

  if(display === 'none' || visibility === 'hidden' || opacity === '0'){
    return true;

  } else {
  	return false;
  }
}

/**
 *  @param {object} elem - selector
 */

function vanillaIsVisible(elem){

  if(!vanillaIsHidden(elem)){
    return true;

  } else {
  	return false;
  }
}