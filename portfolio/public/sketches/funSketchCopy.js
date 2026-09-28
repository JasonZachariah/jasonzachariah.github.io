(function () {
  var CDN_SCRIPTS = [
    "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js",
    "https://cdn.jsdelivr.net/gh/IDMNYU/p5.js-speech@0.0.3/lib/p5.speech.js",
    "https://cdn.jsdelivr.net/npm/ml5@0.12.2/dist/ml5.min.js",
    "https://cdn.jsdelivr.net/gh/antiboredom/p5.riso@master/lib/p5.riso.js",
  ];

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        if (existing.dataset.loaded === "true") {
          resolve();
          return;
        }
        existing.addEventListener("load", function () {
          resolve();
        }, { once: true });
        existing.addEventListener("error", function () {
          reject(new Error("Failed to load " + src));
        }, { once: true });
        return;
      }

      var script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.dataset.loaded = "false";
      script.onload = function () {
        script.dataset.loaded = "true";
        resolve();
      };
      script.onerror = function () {
        reject(new Error("Failed to load " + src));
      };
      document.body.appendChild(script);
    });
  }

  function readGlobal(name) {
    if (window[name] !== undefined) return window[name];
    try {
      return new Function(
        "return typeof " + name + ' !== "undefined" ? ' + name + " : undefined"
      )();
    } catch (error) {
      return undefined;
    }
  }

  async function startSketch() {
    for (var i = 0; i < CDN_SCRIPTS.length; i++) {
      await loadScript(CDN_SCRIPTS[i]);
    }

    var Riso = readGlobal("Riso");
    if (Riso) window.Riso = Riso;
    var risoNoFill = readGlobal("risoNoFill");
    var drawRiso = readGlobal("drawRiso");
    var exportRiso = readGlobal("exportRiso");
    if (risoNoFill) window.risoNoFill = risoNoFill;
    if (drawRiso) window.drawRiso = drawRiso;
    if (exportRiso) window.exportRiso = exportRiso;

    if (!window.p5 || !window.ml5 || !window.Riso) {
      throw new Error("CDN libraries failed to initialize");
    }

    var myRec;
    var sentiment;
    var mostrecentword = "";
    var storedVal = 50;
    var uppercase = "";
    var squareSize;
    var color1;
    var color2;
    var myFont = "pp-sans-rounded";

    window.preload = function () {
      sentiment = ml5.sentiment("MovieReviews");
    };

    window.setup = function () {
      window._p5Instance = p5.instance;

      background(255);
      frameRate(12);

      myRec = new p5.SpeechRec("en-US", window.parseResult);
      myRec.continuous = true;
      myRec.start();

      if (windowWidth < windowHeight) {
        createCanvas((windowWidth / 11) * 10, (windowWidth / 8.5) * 10);
      } else {
        createCanvas((windowHeight / 11) * 7, (windowHeight / 8.5) * 7);
      }

      squareSize = width / 10;
      pixelDensity(1);

      color1 = new Riso("LIGHTLIME");
      color2 = new Riso("FLUORESCENTPINK");
    };

    window.draw = function () {
      clear();
      risoNoFill();

      for (var i = 0; i < width; i += squareSize) {
        var x = i;
        var y =
          height / 2 + tan((frameCount / 100 + i / width) * PI) * (height / 4);

        color2.noStroke();
        color2.fill(map(storedVal, 0, 100, 150, 0));
        color2.rect(x, y, squareSize, map(storedVal, 0, 100, 100, 0));

        color1.stroke(map(storedVal, 0, 100, 0, 150));
        color1.strokeWeight(map(storedVal, 0, 100, 1, 20));
        color1.circle(y, x, storedVal);

        if (frameCount % 60 === 0) {
          if (round(random(1, 10)) % 2 === 0) {
            color1.cutout(color2);
            color2.cutout(color1);
          } else {
            color2.cutout(color1);
            color1.cutout(color2);
          }
        }
      }

      var textGraphic = createGraphics(width, height);
      textGraphic.fill(0);
      textGraphic.textStyle(BOLD);
      textGraphic.textFont(myFont);
      textGraphic.textAlign(LEFT, CENTER);
      textGraphic.textWrap(WORD);
      textGraphic.textSize(20);

      if (mostrecentword.length > 0 && mostrecentword.length < 8) {
        textGraphic.textSize(width * (1 / mostrecentword.length));
      }

      textGraphic.text(uppercase, 10, height / 2, (width * 3) / 4);

      if (frameCount % 60 > 20) {
        color1.cutout(textGraphic);
        color2.cutout(textGraphic);
      }

      drawRiso();
    };

    window.gotResult = function (prediction) {
      storedVal = prediction.confidence * 100;
      console.log(storedVal);
    };

    window.parseResult = function () {
      mostrecentword = myRec.resultString;
      uppercase = mostrecentword.toUpperCase();
      console.log(mostrecentword, mostrecentword.length);
      sentiment.predict(mostrecentword, window.gotResult);
    };

    window.keyPressed = function () {
      if (key === "s") {
        noLoop();
        exportRiso();
      }
    };

    var mount = document.getElementById("fun-sketch-copy");
    new p5(mount || undefined);
  }

  startSketch().catch(function (error) {
    console.error(error);
    var mount = document.getElementById("fun-sketch-copy");
    if (mount) {
      mount.textContent = error.message || "Failed to load sketch";
    }
  });
})();
