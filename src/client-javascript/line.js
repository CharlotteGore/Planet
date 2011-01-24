/* line.js */

	// usage: planetObject.line({x1 : number, y1 : number, x2 : number, y2 : number});

	var line = {
	
		line : function( obj ){
			// Basically a line is very short stroked path, making this is a shortcut to Path.
			this.path({
				points : [
					{x : obj.x1, y : obj.y1},
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