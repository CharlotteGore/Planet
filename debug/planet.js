/*!
 * Planet v0.0.0 - a simple cross-platform path drawing library 
 * http://charlottegore.com
 *
 * Copyright 2010, Charlotte Gore
 * Licensed under the MIT license.
 *
 *
 * Date: Sun Dec 19 11:05:34 2010 +0000
 */
 
 (function(window){
	// Bunch of helper functions to detect browser functionality...
	
	// VML..
	var isVMLSupported = function(){
		
		var a, b, doesSupport;
		
		a = document.createElement('div');
		a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
		b = a.firstChild;
		
		$('body').append(a);
		
		b.style.behavior = "url(#default#VML)";
		
		doesSupport = b ? typeof b.adj == "object": true;
		
		$('body').remove(a);
		
		return doesSupport;
	
		/*
		var b, doesSupport;
        
        $('body').append('<div id="_planet_vml_test_"><v:shape id="vml_flag1" adj="1" /></div>');
        
        b = $('#vml_flag1')[0];
        b.style.behavior = "url(#default#VML)";
        doesSupport = b ? typeof b.adj == "object": true;
        
        $('#_planet_vml_test_').remove();
	  
	    return doesSupport;
	    */
	}(),
	
	// SVG...
	isSVGSupported = function(){
		 return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
	}(),
	
	// Canvas...
	isCanvasSupported = function(){
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	}(),
	
	// Manual Forcing (mostly to deliberately choose SVG over Canvas, or for Unit testing purposes)
	isForcedMode = function(){
		return window.forcePlanetMode;
	}(),
	
	planet;
	
	// Priority is Forced->Canvas->VML->SVG->Die
	if(isForcedMode){
	
		planet = function( selector ){
			return new planet.fn.init( window.forcePlanetMode, selector );
		};
	
	}else if(isCanvasSupported){
	
		planet = function( selector ){
			return new planet.fn.init( "canvas", selector );
		};
	
	}else if(isVMLSupported){
	
		planet = function( selector ){
			return new planet.fn.init( "vml", selector );
		};
		
	}else if(isSVGSupported){
	
		planet = function( selector ){
			return new planet.fn.init( "svg", selector );
		};
	
	}else{
		throw("This browser does not support VML, SVG or Canvas.");
	}
	
	planet.fn = planet.prototype = {
		// init..
		init : function( mode, selector ){
			if($(selector).length > 0 && mode){
				if(mode==="vml"){
					// with vml the container is all that's necessary
					this.container = $(selector);
					
					// override the path renderer...
					this.path = this._pathVML;
					
					return this;
				
				}else if(mode==="svg"){
				
					// SVG elements need to be created in a namespace...
					this.svgNS = "http://www.w3.org/2000/svg";
					
					// Which means creating an SVG node as well, child of the selector, becomes the container..
					var svg = document.createElementNS(this.svgNS, "svg");
					svg.setAttributeNS(null, "version", "1.1");
					
					this.container = $(svg);
					
					$(selector).append(this.container);
					
					// override the path renderer
					this.path = this._pathVML;
					
					return this;
					
				}else if(mode==="canvas"){
					// create a canvas element, return the 2d context.
					var canvas = document.createElement("canvas");
					
					$(selector).append(canvas);
					
					this.container = canvas.getContext('2d');
					
					this.path = this._pathCanvas;
				
				}

			}else{
				throw("Unable to detect a mode, or unable to initialise " + selector + " as a container, $('" + selector + "').length = 0, meaning it doesn't exist.");
			}
			return this;
		}
	};

	
	planet.fn.init.prototype = planet.fn;
	
	planet.fn.extend = planet.extend = function(){
		// Based on code in jQuery
		var target = this, i = 0, length = arguments.length, options, name, src, copy;
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging object literal values or arrays
					if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};	
	

 
	// Path drawing functions
	planet.fn.extend({
	
		_pathVML : function( obj ){
		
		},
		
		_pathSVG : function( obj ){
		
		},
		
		_pathCanvas : function( obj ){
		
		}
	
	});
	
/* outro.js */

	window.planet = planet;

})(window);


