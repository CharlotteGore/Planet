
	var elbow = {
	
		elbow : function( obj ){
		
			var cornerA = {}, cornerB = {}, singleLine = false, json;
		
			planet.getAlignment(obj.origin);
			planet.getAlignment(obj.target);
			
			json = {
				startx : obj.origin.x,
				starty : obj.origin.y
				//strokeColor : obj.strokeColor || "#000",
				//strokeWidth : obj.strokeWidth || 1
			};
		
			if(obj.origin.align===obj.target.align){
			
				if(obj.origin.align===1){
					
						if(obj.origin.x === obj.target.x){
							json.points = [
								{ x : obj.target.x, y : obj.target.y }
							];
							
						}else{
							
							var midY = Math.floor(obj.origin.y + ((obj.target.y - obj.origin.y) / 2));
							// vertical to vertical
							
							json.points = [
								{ x : obj.origin.x, y : midY },
								{ x : obj.target.x, y : midY },
								{ x : obj.target.x, y : obj.target.y }
							];
							
						
						}
					
					
				
				}else{
					 
					if(obj.origin.y === obj.target.y){
							json.points = [
								{ x : obj.target.x, y : obj.target.y }
							];
					} else {
					 
						var midX = Math.floor(obj.origin.x + ((obj.target.x - obj.origin.x) / 2));
						
						json.points = [
							{ x : midX, y : obj.origin.y},
							{ x : midX, y : obj.origin.y },
							{ x : obj.target.x, y : obj.target.y }
						];
							
					}
					
				}
			
			}else{
			
				if(obj.origin.align===1){
					// vertical to horizontal
					json.points = [
						{ x : obj.origin.x, y : obj.target.y},
						{ x : obj.target.x, y : obj.target.y }
					];
					
				}else{ 
					// horizontal to vertical
					json.points = [
						{ x : obj.target.x, y : obj.origin.y},
						{ x : obj.target.x, y : obj.target.y }
					];
					
				}
				// down/up to left/right = { x : obj.origin.x, y : obj.target.y },
			
			}
			
			this.path(json);
			
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