/* line.js */

	// usage: planetObject.line({x1 : number, y1 : number, x2 : number, y2 : number});

	var line = {
	
		line : function( obj ){
			// Basically a line is very short stroked path, making this is a shortcut to Path.
			this.path({
				startx : obj.x1,
				starty : obj.y1,
				points : [
					{x : obj.x2, y : obj.y2}
					
				],
				close : false
			});
		
			return this;
		}
	
	};

	planet.vml.extend(line);
	
	planet.svg.extend(line);
	
	planet.canvas.extend(line);