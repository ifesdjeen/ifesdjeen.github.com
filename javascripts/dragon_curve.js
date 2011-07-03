var boxSize = 1
var canvas = document.getElementById('canvas_t');
var ctx = canvas.getContext('2d');
var drawnLines = []
var drawnLinesLength = []
var duplicates = []
var colorSet = [200, 0, 0]
var color = 150
// Extending natives a bit
// Ruby-style each functon. For those who don't like to write "for" cycle gazillion times
 Array.prototype.each = function(fn, bind) {
    for (var i = 0, l = this.length; i < l; i++) fn.call(bind, this[i], i, this);
};

// Same thing as each, just goes another direction. From the very end to beginning.
Array.prototype.each_backward = function(fn, bind) {
    for (var i = this.length - 1; i >= 0; i--) fn.call(bind, this[i], i, this);
};

// Ruby-style map method. Returns a copy of an array after given function got applied to each element
Array.prototype.map_backward = function(fn, bind) {
    var newArr = []
    this.each_backward(function(el) {
        newArr.push(fn.call(bind, el))
    })
    return newArr
}

// Repeats certain action Number number of times
Number.prototype.times = function(fn, bind) {
    for (var i = 0; i < this; i++) fn.call(bind, i, this);
};

// Returns random number, no magic
Number.prototype.random = function()
 {
    var rnd = Math.round(Math.random() * this)
    while (rnd < 50) {
        rnd = Math.round(Math.random() * this)
    }
    return rnd
}

/*
 * Dragon Curve class, draws a Dragon Curve
 *   @instanceName - in order to be able to draw several curves simultaneously, we just store the instance name.
 *     There're better ways of doing that
 *   @initialCurve - what are the first two steps of the curve. beware, that Dragon Curve rule should be applied for
 *     the first two elements as well. Represented as angle, direction of the step:
 *         0 is a vertical line, going up,
 *         90 is a horizontal line, going from left to right
 *         180 is a vertical line, going down
 *         270 is a horizontal line, going from right to left
 *   @color - initial color for the first drawn box in curve
 *   @colorChangePattern - function that's responsible for color change, if we want to draw a gradient curve, or something like that
 */
function DragonCurve(instanceName, initialCurve, color, colorChangePattern) {
    this.color = color
    this.colorChangePattern = colorChangePattern
    this.instanceName = instanceName
    this.curve = initialCurve
    //[ 0, 90 ]
    // Default x and y values
    this.x = 260
    this.y = 250

    // Whether the color pattern is on being incremented right now
    this.up = true

    // Identifies whether the line is vertical or no
    this.isVertical = function(line)
    {
        return line.x == line.x1 ? true: false
    }

    // Creates patterns to make sure whether we have any filled rectangles on the left or right side
    this.createPatterns = function(x, y, x1, y1, yAxis) {
        if (yAxis === undefined)
        yAxis = false
        var indexes = [boxSize, -boxSize];
        var patterns = []
        indexes.each(function(index) {
            patterns.push({
                x: x,
                y: y,
                x1: x + (!yAxis ? index: 0),
                y1: y + (yAxis ? index: 0),
                matched: 0
            })
            patterns.push({
                x: x + (!yAxis ? index: 0),
                y: y + (yAxis ? index: 0),
                x1: x1 + (!yAxis ? index: 0),
                y1: y1 + (yAxis ? index: 0),
                matched: 0
            })
            patterns.push({
                x: x1,
                y: y1 + (yAxis ? index: 0),
                x1: x1 + (!yAxis ? index: 0),
                y1: y1,
                matched: 0
            })
        })
        return patterns;
    },

    // Draws a line by giving initial coordinates and an offset for both axes.
    this.drawLineRelative = function(ctx, x, y, xoffset, yoffset)
    {
        var x1 = x + xoffset
        var y1 = y + yoffset
        var currentLine = {
            x: x,
            y: y,
            x1: x1,
            y1: y1
        }
        var vertical = this.isVertical(currentLine)
        var patterns = this.createPatterns(x, y, x1, y1, !vertical)

        // a bit of optimization, if there're less than 3 curves matched, there's no sense to check which patterns matched
        var patternsMatched = 0

        var timeStarted = new Date().getTime()
        patterns.each(function(pattern) {
            if (drawnLines[pattern.x + "," + pattern.y] !== undefined) {
                drawnLines[pattern.x + "," + pattern.y].each(function(line) {
                    if ((line.x == pattern.x && line.y == pattern.y && line.x1 == pattern.x1 && line.y1 == pattern.y1)) {
                        pattern.matched += 1
                        patternsMatched++;
                    }
                })
            }
            if (drawnLines[pattern.x1 + "," + pattern.y1] !== undefined) {
                drawnLines[pattern.x1 + "," + pattern.y1].each(function(line) {
                    if (line.x1 == pattern.x && line.y1 == pattern.y && line.x == pattern.x1 && line.y == pattern.y1) {
                        pattern.matched += 1
                        patternsMatched++;
                    }
                })
            }
        })
        if (patternsMatched >= 3 && patterns[0].matched > 0 && patterns[1].matched > 0 && patterns[2].matched > 0) {
            ctx.fillStyle = "rgb(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ")";
            this.colorChangePattern.call(this)
            if ((vertical && yoffset > 0) || (xoffset > 0))
            ctx.fillRect(x, y, boxSize, boxSize);
            if ((vertical && yoffset < 0) || (xoffset < 0))
            ctx.fillRect(x, y, (vertical ? 1: -1) * boxSize, (vertical ? -1: 1) * boxSize);
        }
        if (patterns[3].matched > 0 && patterns[4].matched > 0 && patterns[5].matched > 0) {
            ctx.fillStyle = "rgb(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ")";
            this.colorChangePattern.call(this)
            if ((vertical && yoffset > 0) || (xoffset > 0))
            ctx.fillRect(x, y, (vertical ? -1: 1) * boxSize, (vertical ? 1: -1) * boxSize);
            if ((vertical && yoffset < 0) || (xoffset < 0))
            ctx.fillRect(x, y, -boxSize, -boxSize);
        }

        // That's some hardcore JavaScript caching here. In order to just navigate through the points that may
        // be relevant for the currently drawn line, we should be able to get the access by the key
        if (yoffset > 0 || xoffset > 0) {
            if (!drawnLines[x + "," + y])
            {
                drawnLines[x + "," + y] = []
            }
            // Although, for each point line can go up and down, left or right. So, we should
            // store all four drawn lines here to match later on.
            drawnLines[x + "," + y].push({
                x: x,
                y: y,
                x1: x1,
                y1: y1
            })
        }
        else {
            if (!drawnLines[x1 + "," + y1])
            {
                drawnLines[x1 + "," + y1] = []
            }
            drawnLines[x1 + "," + y1].push({
                x1: x,
                y1: y,
                x: x1,
                y: y1
            })
        }

        ctx.moveTo(x, y);
        ctx.lineTo(x1, y1);
        //        ctx.stroke();
        // document.getElementById("timeFrame").innerText = (timeStarted - new Date().getTime());
    }

    // Calculates dragon curve and calls rendering function
    this.drawDragon = function(step)
    {
        if (step == 0) {
            this.drawCurve();
            return;
        }
        // first we calculate the curve, then render it
        this.curve = this.curve.concat(this.turn90(this.curve))
        this.drawDragon(--step)
    }

    // Curve step, stored for Async operations, such as timeout
    this.curveStep = 0

    // Draws the Dragon Curve itself
    this.drawCurve = function()
    {
        var curveState = this.curve;
        if (this.curveStep < curveState.length) {
            switch (curveState[this.curveStep]) {
            case 0:
                this.drawLineRelative(ctx, this.x, this.y, 0, -boxSize)
                this.y += -boxSize
                break;
            case 90:
                this.drawLineRelative(ctx, this.x, this.y, boxSize, 0)
                this.x += boxSize
                break;
            case 180:
                this.drawLineRelative(ctx, this.x, this.y, 0, boxSize)
                this.y += boxSize
                break;
            case 270:
                this.drawLineRelative(ctx, this.x, this.y, -boxSize, 0)
                this.x -= boxSize
                break;
            }
            this.curveStep++;
            setTimeout(this.instanceName + ".drawCurve()", 1);
        }
    },
    // Take the previous curve, and turn it 90 degrees
    this.turn90 = function(previousState)
    {
        return previousState.map_backward(function(segment) {
            if (segment < 270)
            return segment + 90
            else
            return 0
        })
    }
};

//DragonCurve.drawDragon(11);
var steps = 15
var a = 0
var b = 0
var c = 0
var d = 0


function reset() {
    ctx.clearRect(0, 0, 1300, 1500);

    a = new DragonCurve("a", [0, 90], [color.random(), color.random(), color.random()],
    function() {
        var color1 = 0
        var color2 = 1
        if (this.up) {
            this.color[color1] += 1
            this.color[color2] += 1
        }
        else {
            this.color[color1] -= 1
            this.color[color2] -= 1
        }
        if (this.color[color1] == 200) {
            this.up = false
        }
        if (this.color[color2] == 50) {
            this.up = true
        }
    })

    b = new DragonCurve("b", [90, 180], [color.random(), color.random(), color.random()],
    function() {
        var color1 = 1
        var color2 = 2
        if (this.up) {
            this.color[color1] += 1
            this.color[color2] += 1
        }
        else {
            this.color[color1] -= 1
            this.color[color2] -= 1
        }
        if (this.color[color1] == 200) {
            this.up = false
        }
        if (this.color[color2] == 50) {
            this.up = true
        }
    })
    c = new DragonCurve("c", [180, 270], [color.random(), color.random(), color.random()],
    function() {
        var color1 = 0
        var color2 = 2
        if (this.up) {
            this.color[color1] += 1
            this.color[color2] += 1
        }
        else {
            this.color[color1] -= 1
            this.color[color2] -= 1
        }
        if (this.color[color1] == 200) {
            this.up = false
        }
        if (this.color[color2] == 50) {
            this.up = true
        }
    })
    d = new DragonCurve("d", [270, 0], [color.random(), color.random(), color.random()],
    function() {
        var color1 = 0
        var color2 = 1
        var color3 = 2
        if (this.up) {
            this.color[color1] += 1
            this.color[color2] += 1
            this.color[color3] += 1
        }
        else {
            this.color[color1] -= 1
            this.color[color2] -= 1
            this.color[color3] -= 1
        }
        if (this.color[color1] == 200) {
            this.up = false
        }
        if (this.color[color2] == 50) {
            this.up = true
        }
    })

    a.drawDragon(steps)
    b.drawDragon(steps)
    c.drawDragon(steps)
    d.drawDragon(steps)
}

reset()