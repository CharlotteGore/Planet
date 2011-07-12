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
	
	var supportedModes = {
		vml : function(){
		
			var doesSupport = 'untested';

			return function(){

				if(doesSupport==='untested'){

					var a, b, headElement = document.getElementsByTagName("head")[0], styleElement, HTMLTagRef;
			
					a = document.createElement('div');
					a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
					b = a.firstChild;
			
					document.getElementsByTagName("body")[0].appendChild(a);
			
					b.style.behavior = "url(#default#VML)";
			
					doesSupport = b ? typeof b.adj == "object": true;
			
					$(a).remove();
			
					if(doesSupport){
							headElement = document.getElementsByTagName("head")[0];
							styleElement = document.createElement("style");
							styleElement.type = "text/css";
							headElement.appendChild(styleElement);
							styleElement.styleSheet.cssText = "v\\:rect, v\\:roundrect,v\\:textbox, v\\:line, v\\:polyline, v\\:curve, v\\:arc, v\\:oval, v\\:image, v\\:shape, v\\:group, v\\:skew, v\\:stroke, v\\:fill { behavior:url(#default#VML); display:inline-block }";
	
							HtmlTagRef = document.getElementsByTagName('HTML')[0];
							HtmlTagRef.setAttribute('xmlns:v','urn:schemas-microsoft-com:vml');
					
							document.namespaces.add("v","urn:schemas-microsoft-com:vml");
	
					}

				}
			
				return doesSupport;

			};
		}(),
		svg : function(){
			return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
		}(),
		canvas : function(){
			
			var doesSupport = 'untested';

			return function(){
				
				if(doesSupport==='untested'){

					var elem = document.createElement('canvas');
					if(elem.getContext && elem.getContext('2d')){
						doesSupport = true;
					}else{
						doesSupport = false;
					}

				}

				return doesSupport;

			};
		}()
	},
	
	planet;

	
	planet = function( selector, mode ){
		// selects VML, VML not supported: Try Canvas, then SVG, then abort
		// selects SVG, SVG not supported: Try VML, then Canvas, then abort
		// selects Canvas, Canvas not supported: Try VML, then SVG, then abort.
		
		var priority = ["canvas","svg","vml"], i, il;
		
		if(mode && supportedModes[mode]()){
			return new planet[mode].init( selector );
		}else{
			for(i = 0, il = priority.length; i < il ;i++){
			
				if(supportedModes[priority[i]]()){
					return new planet[priority[i]].init( selector );
				}
			
			}
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
		defaultPen : {
					strokeType : "none",
					fillType : "none",
					strokeWidth : 1,
					strokeColor : "#000",
					fillColor : "#000",
					gradientColor1 : "#000",
					gradientColor2 : "#FFF"
		},
	
		vml : {
			init : function( selector ){
			
				this.container = $(selector);
				this.mode = "vml";
				
				this.pen = {};
				this.pen.extend = planet.extend;
				this.pen.extend(planet.defaultPen);
				
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
				
				this.pen = {};
				this.pen.extend = planet.extend;
				this.pen.extend(planet.defaultPen);
				return this;
			},
            createGradient : function( color1, color2 ){

                var id, gradient, child;

                this.gradientUID ? this.gradientUID++ : this.gradientUID = 1;
                
                id = 'user-grad-' + this.gradientUID;

                if(!this.defsContainer){
                
                    this.defsContainer = document.createElementNS(this.svgNS,'defs');
                    this.container.append(this.defsContainer);

                }

                gradient = document.createElementNS(this.svgNS, 'linearGradient');
                gradient.setAttributeNS(null, 'id', id);

                // need to calculate x1, x2, y1 and y2

                gradient.setAttributeNS(null, 'x1', '0%');
                gradient.setAttributeNS(null, 'y1', '0%');
                gradient.setAttributeNS(null, 'x2', '0%');
                gradient.setAttributeNS(null, 'y2', '100%');
                gradient.setAttributeNS(null, 'spreadMethod', 'pad');
                gradient.setAttributeNS(null, 'gradientUnits', 'objectBoundingBox');

                child = document.createElementNS(this.svgNS, 'stop');
                child.setAttributeNS(null, 'offset', '0%');
                child.setAttributeNS(null, 'stop-color', color1);
                
                $(gradient).append(child);

                child = document.createElementNS(this.svgNS, 'stop');
                child.setAttributeNS(null, 'offset', '100%');
                child.setAttributeNS(null, 'stop-color', color2);

                $(gradient).append(child);

                $(this.defsContainer).append(gradient);

                return id;

            }
		},
		canvas : {
			init : function( selector ){
				var canvas, container = $(selector);
				
				this.canvas = document.createElement("canvas");
				
				$(this.canvas)
					.attr('height', container.height())
					.attr('width', container.width());
				
				container.append(this.canvas);
				
				this.container = this.canvas.getContext('2d');
				
				this.mode = "canvas";
				
				this.pen = {};
				this.pen.extend = planet.extend;
				this.pen.extend(planet.defaultPen);
				
				return this;
			}
		},
		getSupportedMethods : function(){
			var methods = [];
			
			if(isVMLSupported){
				methods.push("vml");
			}

			if(isSVGSupported){
				methods.push("svg");
			}
			
			
			if(isCanvasSupported){
				methods.push("canvas");
			}
			
			return methods;
		}
	});
	
	planet.vml.init.prototype = planet.vml;
	planet.svg.init.prototype = planet.svg;
	planet.canvas.init.prototype = planet.canvas;
	
	// hook extend into the various prototypes
	planet.svg.extend = planet.canvas.extend = planet.vml.extend = planet.extend;	

	var setDrawAttributes = {
		setDrawAttributes : function( obj ){

			this.pen.extend( obj );

			return this;
		}
	};
	
	planet.vml.extend(setDrawAttributes);
	planet.svg.extend(setDrawAttributes);
	planet.canvas.extend(setDrawAttributes);