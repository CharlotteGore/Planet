/*
	path.js
	
	usage: planetObj.path({startx : number, starty : number, points : [ {x : number, y : number}... ]})
*/

	
	
	
	planet.vml.extend({
	
		path : function( obj ){
		
			// This is where it starts to get fookin' hard.
			
			var path = "", width = this.width, height = this.height, i, il;
			
			var vEl = document.createElement('v:shape');
			
			$(vEl).attr('style', 'position: absolute; top: 0; left: 0; width:' + width + 'px; height: ' + height + 'px;' );
			$(vEl).attr('coordorigin', '0 0');
			$(vEl).attr('coordsize', width + ' ' + height);

			path = 'm '+Math.floor(obj.points[0].x)+','+Math.floor(obj.points[0].y)+' ';
			
			for(i = 1, il = obj.points.length; i < il ; i++){
				path += 'l '+Math.floor(obj.points[i].x)+','+Math.floor(obj.points[i].y) + ' ';
			}
			
			vEl.setAttribute('strokecolor', this.pen.strokeColor);
			vEl.setAttribute('strokeweight', this.pen.strokeWidth);

			if(this.pen.fillType !== "none" || obj.close===true){

			    path += ' x e';

			    if (this.pen.fillType === "fill") {

			        $(vEl).attr('fillcolor', this.pen.fillColor);

			    } else if (this.pen.fillType === "gradient") {

			        $(vEl).attr('fillcolor', this.pen.gradientColor1);

			        var fill = document.createElement('v:fill');
			        $(fill).attr('type', 'gradient');
			        $(fill).attr('color2', this.pen.gradientColor2);
			        $(fill).attr('method', 'linear sigma');
			        $(fill).attr('angle', '180');

			        $(vEl).append(fill);

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
		
			var d = "M "+obj.points[0].x+" "+obj.points[0].y+" ", i, il;
			
			for(i = 1, il = obj.points.length; i < il ; i++){
				d += "L"+obj.points[i].x+" "+obj.points[i].y;
			}

			var shape = document.createElementNS(this.svgNS, "path");
			
			if(this.pen.fillType !== "none" || obj.close===true){
				d += "Z";

				if (this.pen.fillType === "fill") {

				    shape.setAttributeNS(null, "fill", this.pen.fillColor);

				} else if (this.pen.fillType === "gradient") {
				    var gradId = this.createGradient(this.pen.gradientColor1, this.pen.gradientColor2);
				    shape.setAttributeNS(null, "fill", "url(#" + gradId + ")");
				}

			}else {
			
				shape.setAttributeNS(null, "fill", "none");
				
			}
			
			
			shape.setAttributeNS(null, "stroke", this.pen.strokeColor);
			shape.setAttributeNS(null, "stroke-width", this.pen.strokeWidth + "px");	
			
			shape.setAttributeNS(null, "d", d);
			
			this.container.append(shape);	
			
			return this;
		
		}
	});
	
	planet.canvas.extend({
	
		path : function( obj ){
		
			this.container.beginPath();
		
			if(this.pen.fillType !== 'none'){
				this.container.fillStyle = this.pen.fillColor;
			}
			
			if(this.pen.strokeType !== "none"){
				this.container.lineWidth = (this.pen.strokeWidth);
				this.container.strokeStyle = this.pen.strokeColor;
				
			}
		
			this.container.moveTo(obj.points[0].x  + 0.5, obj.points[0].y + 0.5);
			
			for(i = 1, il = obj.points.length; i < il ; i++){
				this.container.lineTo(obj.points[i].x + 0.5, obj.points[i].y + 0.5);
			}
			
			if(obj.close || this.pen.fillType !== 'none'){
				this.container.lineTo(obj.points[0].x + 0.5, obj.points[0].y + 0.5);
			}
			
			if(this.pen.fillType === "fill"){
				this.container.fill();
			}
			
			if(this.pen.strokeType !== "none"){
				this.container.stroke();
			}
			
			this.container.closePath();
			
			return this;
		
		}
		
	});