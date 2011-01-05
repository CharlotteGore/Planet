
	// Path drawing functions
	
	planet.vml.extend({
	
		path : function( obj ){
		
			// This is where it starts to get fookin' hard.
			
			var path = "", width = this.container.width(), height = this.container.height(), i, il;
			
			var vEl = document.createElement('v:shape');
			
			$(vEl).attr('style', 'position: absolute; top: 0; left: 0; width:' + width + 'px; height: ' + height + 'px;' );
			$(vEl).attr('coordorigin', '0 0');
			$(vEl).attr('coordsize', width + ' ' + height);

			path = 'm '+Math.floor(obj.startx)+','+Math.floor(obj.starty)+' ';
			
			for(i = 0, il = obj.points.length; i < il ; i++){
				path += 'l '+Math.floor(obj.points[i].x)+','+Math.floor(obj.points[i].y) + ' ';
			}
			
			vEl.setAttribute('strokecolor', this.pen.strokeColor);
			vEl.setAttribute('strokeweight', this.pen.strokeWidth);

			if(this.pen.fillType !== "none" || obj.close===true){

				path += ' x e';
			
				if(this.pen.fillType === "fill"){
					
					vEl.setAttribute('fillcolor', this.pen.fillColor);
			
				}else if(this.pen.fillType === "gradient"){
					// do nothing yet
				}
			}else {
			
				vEl.setAttribute('filled', 'False');
				
			}
			
			
			vEl.setAttribute('path', path);
			
			this.container.append(vEl);

			
			return this;
		
		
		}
	
	});
	
	planet.svg.extend({
	
		path : function( obj ){
		
			var d = "M "+obj.startx+" "+obj.starty+" ", i, il;
			
			for(i = 0, il = obj.points.length; i < il ; i++){
				d += "L"+obj.points[i].x+" "+obj.points[i].y;
			}

			var shape = document.createElementNS(this.svgNS, "path");
			
			if(this.pen.fillType !== "none" || obj.close===true){
				d += "Z";
				
				if(this.pen.fillType === "fill"){
					shape.setAttributeNS(null, "fill", this.pen.fillColor);
				}else if(this.pen.fillType === "gradient"){
					// do nothing yet
				}
			}else {
			
				shape.setAttributeNS(null, "fill", "none");
				
			}
			
			
			shape.setAttributeNS(null, "stroke", this.pen.strokeColor);
			shape.setAttributeNS(null, "stroke-width", (this.pen.strokeWidth + 1) + "px");	
			
			shape.setAttributeNS(null, "d", d);
			
			this.container.append(shape);	
			
			return this;
		
		}
	});
	
	planet.canvas.extend({
	
		path : function( obj ){
		
			if(obj.fillColor){
				this.container.fillStyle = obj.fillColor;
			}
			
			if(obj.strokeColor){
				this.container.lineWidth = (obj.strokeWidth ? obj.strokeWidth : 1);
				this.container.strokeStyle = (obj.strokeColor ? obj.strokeColor : "#000");
				
			}
		
			this.container.moveTo(obj.startx, obj.starty);
			
			for(i = 0, il = obj.points.length; i < il ; i++){
				this.container.lineTo(obj.points[i].x, obj.points[i].y);
			}
			
			if(obj.close || obj.fillColor){
				this.container.lineTo(obj.startx, obj.starty);
			}
			
			if(obj.fillColor){
				this.container.fill();
			}
			
			if(obj.strokeColor){
				this.container.stroke();
				
			}
			
			return this;
		
		}
		
	});
	
