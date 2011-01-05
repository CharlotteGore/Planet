var node = [];
$(document).ready(function () {


	var earth = planet('#drawing-surface', "svg"), n;
	
	earth.setDrawAttributes({
		strokeColor: "#ddd",
		strokeType : "line",
		fillType : "fill",
		fillColor: "#eee",
		gradientColor1: "#d9d9d9",
		gradientColor2: "#eee",
		gradientAngle : 0,
        strokeWidth: 2
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
		strokeColor: "#ddd",
		fillType : "none",
		strokeType : "line",
        strokeWidth: 5
	});

    earth.elbow({
        origin: {
            direction: "down",
            x: node[0].connectors.down.x,
            y: node[0].connectors.down.y
        },
        target: {
            x: node[1].connectors.up.x,
            y: node[1].connectors.up.y
        }
    }).elbow({
        origin: {
            direction: "right",
            x: node[1].connectors.right.x,
            y: node[1].connectors.right.y
        },
        target: {
            x: node[2].connectors.up.x,
            y: node[2].connectors.up.y
        }
    }).elbow({
        origin: {
            direction: "left",
            x: node[1].connectors.left.x,
            y: node[1].connectors.left.y
        },
        target: {
            x: node[3].connectors.up.x,
            y: node[3].connectors.up.y
        }
    }).elbow({
        origin: {
            direction: "down",
            x: node[2].connectors.down.x,
            y: node[2].connectors.down.y
        },
        target: {
            x: node[4].connectors.up.x,
            y: node[4].connectors.up.y
        }
    }).elbow({
        origin: {
            direction: "down",
            x: node[2].connectors.down.x,
            y: node[2].connectors.down.y
        },
        target: {
            x: node[5].connectors.up.x,
            y: node[5].connectors.up.y
        }
    });

	


});