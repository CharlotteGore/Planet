/*!
 * Planet v@VERSION - a simple cross-platform path drawing library 
 * http://charlottegore.com
 *
 * Copyright 2010, Charlotte Gore
 * Licensed under the MIT license.
 *
 *
 * Date: 
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
		
		if(doesSupport){
				var headElement = document.getElementsByTagName("head")[0],
				styleElement = document.createElement("style");
				styleElement.type = "text/css";
				headElement.appendChild(styleElement);
				styleElement.styleSheet.cssText = "v\:rect, v\:roundrect, v\:line, v\:polyline, v\:curve, v\:arc, v\:oval, v\:image, v\:shape, v\:group, v\:skew, v\:stroke, v\:fill { behavior:url(#default#VML); display:inline-block }";

		}
		
		return doesSupport;
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
	
	planet = function( selector, mode ){
		
		if(!mode){
			if(isCanvasSupported){
				mode = "canvas";
			}else if(isVMLSupported){
				mode = "vml";
			}else if(isSVGSupported){
				mode = "svg";
			}
		}
		
		try{
			return new planet[mode].init( selector );
		}catch(e){
			throw(e);
		}
	};
	
	planet.extend = function(){
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
	
	planet.extend({
		vml : {
			init : function( selector ){
			
				this.container = $(selector);
				this.mode = "vml";
				return this;
			}
		},
		svg : {
			init : function( selector ){
				// For SVG, we create an SVG element in the SVG namespace and append to the 
				// container, setting the size appropriately. 
				var svg, container = $(selector);
			
				this.svgNS = "http://www.w3.org/2000/svg";
				
				svg = document.createElementNS(this.svgNS, "svg");
				svg.setAttributeNS(null, "version", "1.1");
				svg.setAttributeNS(null, "style", "position:absolute;top:0;left:0");
				
				$(svg)
					.css("width",container.width())
					.css("height",container.height());
				
				this.container = $(svg);
				
				container.append(this.container);
				
				this.mode = "svg"; 
				return this;
			}
		},
		canvas : {
			init : function( selector ){
				var canvas, container = $(selector);
				
				canvas = document.createElement("canvas");
				
				$(canvas)
					.attr('height', height)
					.attr('width', width);
				
				container.append(canvas);
				
				this.container = canvas.getContext('2d');
				
				this.mode = "canvas";
				return this;
			}
		}
	});
	
	// references to make things easier...
	planet.vml.init.prototype = planet.vml;
	planet.svg.init.prototype = planet.svg;
	planet.canvas.init.prototype = planet.canvas;
	
	// hook extend into the various prototypes
	planet.svg.extend = planet.canvas.extend = planet.vml.extend = planet.extend;	

 