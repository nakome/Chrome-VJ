var vj = (function() {
    'use strict';

    var video = document.querySelector('#video'),
        camera = document.querySelector('#camera'),
        frame = document.querySelector('#frame'),
        imagen = document.querySelector('#image');

    return {
        setFrame: function(element) {
            frame.src = 'library/frames/' + element + '.html';
        },
        setVideo: function(element) {
            video.src = 'library/videos/' + element;
            video.volume = 0;
        },
        setImage: function(element) {
            image.src = 'library/images/' + element;
        },
        setBackground: function(color) {
            document.body.style.background = color;
        },
        fx: function(efecto) {
            document.body.style['-webkit-filter'] = efecto;
        },
        rotate: function(deg) {
            document.body.children[0].style['-webkit-transform'] = 'rotate(' + deg + 'deg)';
        },
        zoom: function(deg) {
            document.body.children[0].style['-webkit-transform'] = 'scale(' + deg + ')';
        },
        move: function(up, down) {
            document.body.children[0].style['-webkit-transform'] = 'translate(' + up + '% ,' + down + '%)';
        },
        cam: function() {
            var onFailSoHard = function(e) {
                console.log('Reeeejected!', e);
            };
            if (navigator.webkitGetUserMedia) {
                navigator.webkitGetUserMedia({ video: true }, function(stream) {
                    camera.src = window.URL.createObjectURL(stream);
                }, onFailSoHard);
            } else {
                camera.src = 'anauu-SD.mp4'; // fallback.
            }
        },
        stopCam: function() {
            camera.pause();
            camera.src = "";
            camera.remove();
        },
        opacity: function(element, op) {
            element.style.opacity = op;
        },
        list: function() {
            console.log([
                "vj.list() // Get list",
                "//Elements \n",
                " video,frame,image,camera \n",
                "//Add Elements \n",
                "vj.setFrame('video'); // show video.html frame \n",
                "vj.setVideo('anauu-SD.mp4');  // show video anauu-SD.mpt4 \n",
                "vj.setImage('B - infestation.gif'); // show gif image \n",
                "vj.cam(); // enable camera \n",
                "vj.stopCam(); // stop camera \n",
                "vj.setBackground('black'); // background color \n",
                "//Effects for elements \n",
                "vj.opacity(video,0.8); // opacity for element \n",
                "vj.fx('blur(3px)'); // fx blur\n",
                "vj.fx('grayscale(1)'); // grayscale 1 or 0 \n",
                "vj.fx('sepia(1)'); // sepia 1 0r 0\n",
                "vj.fx('brightness(2.5)'); // brightnesss max 100\n",
                "vj.fx('contrast(5)'); // contrast max 100\n",
                "vj.fx('hue-rotate(125)'); // hue max 360 \n",
                "vj.fx('invert(1)'); // invert 1 0r 0\n",
                "vj.fx('saturate(3)'); // saturate max 100\n",
                "vj.rotate('90'); // rotate max 360 \n",
                "vj.move('90','50'); // move \n",
                "vj.zoom('0.5'); // zoom \n",
                "//Clear Element \n",
                "vj.clear(element); // clear element \n"
            ].join(''));
        },
        clear: function(element) {
            if (element === image) {
                element.src = 'assets/img/transparent.png';
            } else {
                element.src = ' ';
            }
        }

    };
})();
