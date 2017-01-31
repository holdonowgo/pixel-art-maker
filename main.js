(function(){
  let body = document.getElementsByTagName('body')[0];
  let divCanvas = document.getElementById('canvas');
  let mouseDown = false;

  for (var j = 0; j < 3500; j++) {
    let canvas = document.createElement('div');
    canvas.style.border = "thin solid grey";
    canvas.style.width = '1.1%';
    canvas.style.float = 'left';
    canvas.style.paddingBottom = '1.1%';
    canvas.style.backgroundColor = 'white';

    canvas.addEventListener('click', function() {
      this.style.backgroundColor = document.getElementById('picker').value;
    });

    canvas.addEventListener('mousedown', function() {
      mousedown = true;
    });

    canvas.addEventListener('mouseup', function() {
      mousedown = false;
    });

    canvas.addEventListener('mouseover', function() {
      if(mousedown) {
        this.style.backgroundColor = document.getElementById('picker').value;
      }
    });

    divCanvas.appendChild(canvas);
  }
  let textNode = document.createTextNode('CURRENT COLOR => ');
  divCanvas.appendChild(textNode);

  var input = document.createElement("input");
  input.type = "color";
  input.id = 'picker'
  divCanvas.appendChild(input);

  console.log(input.value);

})();
