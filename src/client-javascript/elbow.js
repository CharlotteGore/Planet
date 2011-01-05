
	var elbow = {
	
		elbow : function( obj ){
		
			var cornerA = {}, cornerB = {};
		
			planet.getAlignment(obj.origin);
			planet.getAlignment(obj.target);
		
			if(obj.origin.align===obj.target.align){
			
				if(obj.origin.align===1){
					// horizontal to horizontal
					var midY = obj.origin.y + ((obj.target.y - obj.origin.y) / 2);
					// vertical to vertical
					
					cornerA = {
						x : obj.origin.x,
						y : midY
					};
					
					cornerB = {
						x : obj.target.x,
						y : midY
					};
				
				}else{
					// vertical to vertical 
					var midX = obj.origin.x + ((obj.target.x - obj.origin.x) / 2);
					
					cornerA = {
						x : midX,
						y : obj.origin.y
					};
					
					cornerB = {
						x : midX,
						y : obj.target.y
					};
				
					
					
				}
				// down/up to left/right = { x : obj.origin.x, y : obj.target.y },
			
				// right angle elbow
				this.path({
					startx : obj.origin.x,
					starty : obj.origin.y,
					points : [
						{ x : cornerA.x, y : cornerA.y },
						{ x : cornerB.x, y : cornerB.y },
						{ x : obj.target.x, y : obj.target.y }
					],
					strokeColor : obj.strokeColor || "#000",
					strokeWidth : obj.strokeWidth || 1
				});
			
			}else{
			
				if(obj.origin.align===1){
					// vertical to horizontal
					cornerA = {
						x : obj.origin.x,
						y : obj.target.y
					};
				
				}else{
					// horizontal to vertical
					cornerA = {
						x : obj.target.x,
						y : obj.origin.y
					};
					
				}
				// down/up to left/right = { x : obj.origin.x, y : obj.target.y },
			
				// right angle elbow
				this.path({
					startx : obj.origin.x,
					starty : obj.origin.y,
					points : [
						{ x : cornerA.x, y : cornerA.y },
						{ x : obj.target.x, y : obj.target.y }
					],
					strokeColor : obj.strokeColor || "#000",
					strokeWidth : obj.strokeWidth || 1
				});
			
			}
			
			//obj.origin.align === obj.target.align ? alert("S bend") : alert("Right angle");
			
			return this;
		
		}
	};

	planet.extend({
		getAlignment : function(obj){
			
			if(obj.direction==="left" || obj.direction==="right"){
				obj.align = 0;
			}else{
				obj.align = 1;
			}
			return;
		}
	});

	// Path drawing functions
	
	planet.vml.extend(elbow);
	
	planet.svg.extend(elbow);
	
	planet.canvas.extend(elbow);