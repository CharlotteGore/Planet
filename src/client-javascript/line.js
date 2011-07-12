/* line.js */

  /* line.js */

	// usage: planetObject.line({x1 : number, y1 : number, x2 : number, y2 : number});

	var line = {
	
		line : function( obj ){
			// Basically a line is very short stroked path, making this is a shortcut to Path.
			this.path({
				points : [
					{x : (obj.x1 + 0.5), y : (obj.y1 + 0.5)},
					{x : (obj.x2 + 0.5), y : (obj.y2 + 0.5)}
					
				],
				close : false
			});
		
			return this;
		}
	
	};

	planet.vml.extend(line);
	planet.svg.extend(line);
	planet.canvas.extend(line);