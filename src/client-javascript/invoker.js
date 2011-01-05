var node = [];
$(document).ready(function () {
/*
  		   	planet('#drawing-surface', "svg")
  				.line({x1 : 0, y1 : 0, x2 : 100, y2 : 100, strokeColor : "#45D", strokeWidth : 1})
  				.line({x1 : 100, y1 : 100, x2 : 90, y2: 100, strokeColor : "#45D", strokeWidth : 1})
  				.line({x1 : 100, y1 : 100, x2 : 100, y2: 90, strokeColor : "#45D", strokeWidth : 1});
  				*/

/*			
			planet('#drawing-surface', "canvas")
				.path({
					startx : 0,
					starty : 0,
					points : [
						{x : 100, y: 0},
						{x : 100, y: 100},
						{x : 50, y: 50}
					],
					strokeColor : "#45D",
					// fillColor : "#287",
					strokeWidth : 1,
					close : false
				});
			
			*/

	var earth = planet('#drawing-surface', "svg"), n;

    for (i = 0, il = data.length; i < il; i++) {
        node[i] = new nodes({
            x: data[i].x,
            y: data[i].y,
            w: data[i].w,
            h: data[i].h
        });

        earth.box({
            position: {
                x: data[i].x,
                y: data[i].y
            },
            size: {
                w: data[i].w,
                h: data[i].h
            },
            cornerRadius: 5,
            strokeColor: "#333",
            fillColor: "#ddd",
            strokeWidth: 1

        });
    }

    earth.elbow({
        origin: {
            direction: "down",
            x: node[0].connectors.down.x,
            y: node[0].connectors.down.y
        },
        target: {
            x: node[1].connectors.up.x,
            y: node[1].connectors.up.y
        },
        strokeColor: "#333",
        fillColor: "#ddd",
        strokeWidth: 1
    }).elbow({
        origin: {
            direction: "down",
            x: node[1].connectors.down.x,
            y: node[1].connectors.down.y
        },
        target: {
            x: node[2].connectors.up.x,
            y: node[2].connectors.up.y
        },
        strokeColor: "#333",
        fillColor: "#ddd",
        strokeWidth: 1
    }).elbow({
        origin: {
            direction: "down",
            x: node[1].connectors.down.x,
            y: node[1].connectors.down.y
        },
        target: {
            x: node[3].connectors.up.x,
            y: node[3].connectors.up.y
        },
        strokeColor: "#333",
        fillColor: "#ddd",
        strokeWidth: 1
    }).elbow({
        origin: {
            direction: "down",
            x: node[2].connectors.down.x,
            y: node[2].connectors.down.y
        },
        target: {
            x: node[4].connectors.up.x,
            y: node[4].connectors.up.y
        },
        strokeColor: "#333",
        fillColor: "#ddd",
        strokeWidth: 1
    }).elbow({
        origin: {
            direction: "down",
            x: node[2].connectors.down.x,
            y: node[2].connectors.down.y
        },
        target: {
            x: node[5].connectors.up.x,
            y: node[5].connectors.up.y
        },
        strokeColor: "#333",
        fillColor: "#ddd",
        strokeWidth: 1
    });

/*
			
			planet('#drawing-surface', "svg")
				.box({
					position : {x : 5, y : 5},
					size : {w : 100, h : 50},
					cornerRadius: 5,
					strokeColor : "#333",
					fillColor : "#ddd",
					strokeWidth : 1
					
				}).box({
					position : {x : 80, y : 100},
					size : {w : 100, h : 50},
					cornerRadius: 5,
					strokeColor : "#333",
					fillColor : "#ddd",
					strokeWidth : 1
					
				}).elbow({
					origin : {
						direction : "down",
						x : node1.connectors.down.x,
						y : node1.connectors.down.y,
					},
					target : {
					
						direction : "left",
						x : node2.connectors.left.x,
						y : node2.connectors.left.y,
					
					},
					strokeColor : "#3a3",
					strokeWidth : 1
					
				}).elbow({
					origin : {
						direction : "right",
						x : node1.connectors.right.x,
						y : node1.connectors.right.y,
					},
					target : {
					
						direction : "up",
						x : node2.connectors.up.x,
						y : node2.connectors.up.y,
					
					},
					strokeColor : "#a33",
					strokeWidth : 1
					
				}).elbow({
					origin : {
						direction : "right",
						x : node1.connectors.right.x,
						y : node1.connectors.right.y,
					},
					target : {
					
						direction : "left",
						x : node2.connectors.left.x,
						y : node2.connectors.left.y,
					
					},
					strokeColor : "#33a",
					strokeWidth : 1
					
				}).elbow({
					origin : {
						direction : "down",
						x : node1.connectors.down.x,
						y : node1.connectors.down.y,
					},
					target : {
					
						direction : "up",
						x : node2.connectors.up.x,
						y : node2.connectors.up.y,
					
					},
					strokeColor : "#838",
					strokeWidth : 1
					
				});
				
			
			*/

});