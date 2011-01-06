/* 

	THIS IS JUNK CODE 
	
*/

var nodes = function( obj ){

	this.x = obj.x;
	this.y = obj.y;
	this.hw = obj.w / 2;
	this.hh = obj.h / 2;
	
	this.connectors = {
		up : {
			x : ( this.x + this.hw ),
			y : ( this.y )		
		},
		down : {
			x : ( this.x + this.hw ),
			y : ( this.y + this.hh + this.hh )
		},
		left : {
			x : ( this.x ),
			y : ( this.y + this.hh )
		},
		right : {
			direction : "e",
			x : (this.x + this.hw + this.hw),
			y : ( this.y + this.hh )
		}

	};
	
	return this;

};

var data = [
	{x : 120, y : 0, w : 200, h : 59},
	{x : 120, y : 150, w : 200, h : 159},
	{x : 360, y : 330, w : 200, h : 60},
	{x : 0, y : 330, w : 200, h : 59},
	{x : 240, y : 450, w : 200, h : 59},
	{x : 480, y : 450, w : 200, h : 59}
];

var node = [];
$(document).ready(function () {


	var earth = planet('#drawing-surface'), n;
	
	earth.setDrawAttributes({
		strokeColor: "#ddd",
		strokeType : "line",
		fillType : "gradient",
		fillColor: "#eee",
		gradientColor1: "#ccc",
		gradientColor2: "#eee",
        strokeWidth: 1
	});

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
            cornerRadius: 5
        });
    }
	
	earth.setDrawAttributes({
		strokeColor: "#999",
		fillType : "none",
		strokeType : "line",
        strokeWidth: 2
	});

    earth.elbow({
        origin: {
            direction: "down",
            x: node[0].connectors.down.x,
            y: node[0].connectors.down.y
        },
        target: {
            direction: "up",
            x: node[1].connectors.up.x,
            y: node[1].connectors.up.y
        },
        type : "directional"
    }).elbow({
        origin: {
            direction: "right",
            x: node[1].connectors.right.x,
            y: node[1].connectors.right.y
        },
        target: {
            direction: "up",
            x: node[2].connectors.up.x,
            y: node[2].connectors.up.y
        },
        type: "directional"
    }).elbow({
        origin: {
            direction: "left",
            x: node[1].connectors.left.x,
            y: node[1].connectors.left.y
        },
        target: {
            direction: "up",
            x: node[3].connectors.up.x,
            y: node[3].connectors.up.y
        },
        type: "directional"
    }).elbow({
        origin: {
            direction: "down",
            x: node[2].connectors.down.x,
            y: node[2].connectors.down.y
        },
        target: {
            direction : "up",
            x: node[4].connectors.up.x,
            y: node[4].connectors.up.y
        },
        type: "directional"
    }).elbow({
        origin: {
            direction: "down",
            x: node[2].connectors.down.x,
            y: node[2].connectors.down.y
        },
        target: {
            direction: "up",
            x: node[5].connectors.up.x,
            y: node[5].connectors.up.y
        },
        type: "directional"
    });

	


});