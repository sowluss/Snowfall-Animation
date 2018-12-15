
  
  function init() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let w = canvas.width;
    let h = canvas.height;

    let bkg = new Image();
    bkg.src = 'winter-lg.jpeg'; 

    let flakes = [];

    function snowFall() {
      context.clearRect(0, 0, w, h);
      context.drawImage(bkg, 0, 0);
      addFlake();
      snow();
    };

    function addFlake() {
      let x = Math.ceil(Math.random() * w);
      var s = Math.ceil(Math.random() * 4);
      flakes.push({'x': x, 'y': 0, 's': s});
    };

    function snow() {
      for(var i = 0; i < flakes.length; i++) {
        let flake = flakes[i];
        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.7)";
        context.arc(flake.x, flakes[i].y+=flake.s/2, flake.s/2, 0, 2 * Math.PI);
        context.fill();
        if(flakes[i].y > h) {
          flakes.splice(i, 1);
        }
      };
    };

    setInterval(snowFall, 20);
  };

  window.onload = init;



