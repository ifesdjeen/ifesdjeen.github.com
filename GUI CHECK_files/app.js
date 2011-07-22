
function show_points(element) {
    var data = window.data_points;

    for(x in data) {
        var points = data[x];

        for(i in points) {
            if(x == element) {
                points[i].c.show();
            } else {
                points[i].c.hide();
            }
        }
    }
}

function setup_results() {
    var data = $.ajax('results.json', {async: false});
    var data = eval("(" + data.responseText + ")");
    var img = document.getElementById("screen");
    var imgsize = {width: img.clientWidth, height: img.clientHeight};
    img.style.display = "none";

    var r = Raphael("holder", imgsize.width, imgsize.height);
    var img = r.image(img.src, 0, 0, imgsize.width, imgsize.height);

    for(x in data) {
        for(i in data[x]) {
            var p = data[x][i];
            var c = r.circle(p[0], p[1], 3);
            c.attr("fill", "#f00");
            if(x == '1') {
                c.show();
            } else {
                c.hide();
            }

            p.c = c;
        }
    }

    window.data_points = data;
}


function measure_click(e) {
    var s = document.getElementById("sample");

    var path = window.location.pathname;
    var x = e.layerX - s.x;
    var y = e.layerY - s.y;

    var url = '/Measure';
    data = {'x': x, 'y': y, 'path': path};

    $.ajax({ 'url': url, 'async': false, 'data': data })
}
