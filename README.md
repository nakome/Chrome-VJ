# Chrome Vj

Chrome VJ is very simply, you can convert Chrome in  app for live acts or presentations and use console  for comands.

### Requirements

  - [Node.js](https://nodejs.org)

## Install

Open folder of Chrome-VJ on  shell.


    // install node modules on folder
    npm install connect serve-static



Paste your videos,images and frames on library, I add example for first experience :);


Start App


    // init server
    node  server.js



Go to  http://localhost:9625 open inspector and enjoy.

**Note:**  If you need enable other Webcam on laptop go to  Chome settings,advanced  and choose your Webcam,remember connect before open chrome or restart chrome.





### Available Commands


    vj.list() // Get list//Elements
     video,frame,image,camera
    //Add Elements
    vj.setFrame('video'); // show video.html frame
    vj.setVideo('1.mp4');  // show video anauu-SD.mpt4
    vj.setImage('1.gif'); // show gif image
    vj.cam(); // enable camera
    vj.stopCam(); // stop camera
    vj.setBackground('black'); // background color
    //Effects for elements
    vj.opacity(video,0.8); // opacity for element
    vj.fx('blur(3px)'); // fx blu
    vj.fx('grayscale(1)'); // grayscale 1 or 0
    vj.fx('sepia(1)'); // sepia 1 0r 0
    vj.fx('brightness(2.5)'); // brightnesss max 10
    vj.fx('contrast(5)'); // contrast max 10
    vj.fx('hue-rotate(125)'); // hue max 360
    vj.fx('invert(1)'); // invert 1 0r 0
    vj.fx('saturate(3)'); // saturate max 10
    vj.rotate('90'); // rotate max 360
    vj.move('90','50'); // move
    vj.zoom('0.5'); // zoom
    //Clear Element
    vj.clear(element); // clear element


Sorry for my English and enjoy ;)
