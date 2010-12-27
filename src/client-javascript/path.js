
	// Path drawing functions
	
	planet.vml.extend({
	
		path : function( obj ){
		
			// This is where it starts to get fookin' hard.
			
			var strokeColor = "", strokeWeight = "", fillColor = "", path = "", width = this.container.width(), height = this.container.height(), i, il, style;
			
			style = 'style="position: absolute; top: 0; left: 0; width:' + width + 'px; height: ' + height + 'px;"';
			
			path = 'm '+obj.startx+','+obj.starty+' ';
			
			for(i = 0, il = obj.points.length; i < il ; i++){
				path += 'l '+obj.points[i].x+','+obj.points[i].y + ' ';
			}
			
			if(obj.strokeColor){
				strokeColor = 'strokecolor="' + obj.strokeColor + '"';
				strokeWeight = "strokeweight=" + (obj.strokeWidth ? (obj.strokeWidth) : 1);
			}
			
			if(close===true || obj.fillColor){
				fillColor = 'fillcolor="' + obj.fillColor + '"';
				path += ' x e';
			}
			
			var html = '<v:shape ' + strokeColor +' coordorigin="0 0" coordsize="'+width+' '+height+'" ' + style + ' path="' + path + '"></v:shape>';
			
			this.container.append(html);

			
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
			
			if(obj.close || obj.fillColor){
				d += "Z";
			}
			
			if(obj.fillColor){
			
				shape.setAttributeNS(null, "fill", obj.fillColor);
			
			}else{
			
				shape.setAttributeNS(null, "fill", "none");
			
			}
			
			if(obj.strokeColor){
				shape.setAttributeNS(null, "stroke", (obj.strokeColor ? obj.strokeColor : "#000"));
				shape.setAttributeNS(null, "stroke-width", (obj.strokeWidth ? obj.strokeWidth : 1) + "px");	
			}else{
				shape.setAttributeNS(null, "stroke", "none");
			}
			
			
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
	
