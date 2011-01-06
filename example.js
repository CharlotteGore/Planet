var node = [];
$(document).ready(function () {


	var earth = planet('#drawing-surface', "svg"), n;
	
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