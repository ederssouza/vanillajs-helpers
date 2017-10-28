/**
 *  @param {object} obj -
 *  {
 *  	 url: 'string',						required
 *  	 method: '',							required
 *  	 data: '',								required
 *  	 success: function(){},		required
 *  	 before: function(){}, 		[optional]
 *  	 complete: function(){}, 	[optional]
 *  	 error: function(){} 			[optional]
 *  }
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
 *  @param {object} obj -
 *  {
 *  	 url: 'string',						required
 *  	 success: function(){},		required
 *  	 before: function(){}, 		[optional]
 *  	 complete: function(){}, 	[optional]
 *  	 error: function(){} 			[optional]
 *  }
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
 *  @param {object} obj -
 *  {
 *  	 url: 'string',						required
 *  	 data: '',								required
 *  	 success: function(){},		required
 *  	 before: function(){}, 		[optional]
 *  	 complete: function(){}, 	[optional]
 *  	 error: function(){} 			[optional]
 *  }
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
 *  @param {object} elem 		- selector
 *  @param {number} target	- element target
 */

function vanillaClosest(elem, target) {

	return target === 0 ? elem : vanillaClosest(elem.parentNode, target - 1);
}

/**
 *  @param {object} elem 			- selector
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