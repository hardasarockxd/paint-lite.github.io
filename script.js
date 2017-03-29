var doc = document;
var cId = 0;
var idCont;
(function(){
function add(e) {
  if(e.target.className == 'circle'){
    return false;
  };
  cId++;
  var idC = cId;
  var area = doc.getElementById('area');
  var values = doc.getElementsByClassName('values');
  var circle = doc.createElement('div');
  var bgColor = doc.getElementById('bgColor');
  var radioButtons = doc.getElementsByClassName('radioButton');
  var c,r,g,b;
  var editor = doc.getElementById('editor');
  var editorC = doc.getElementsByClassName('editorC');
  var btn = doc.getElementById('button');
  circle.className = 'circle';
  circle.id = cId;
    for (var i = 0; i < radioButtons.length; i++) {
      if(radioButtons[i].checked && radioButtons[i].value=='rectangle'){
        circle.className ='rectangle';
        break;
      };
    };
  function hexToRgbA(hex){
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        r = (c>>16)&255;
        g = (c>>8)&255;
        b = c&255;
        return 'rgba('+[r, g, b].join(',')+',1)';
    }
    throw new Error('Bad Hex');
}
hexToRgbA(bgColor.value);
if(r > 100 && g > 150 && b > 100){
  circle.style.border = "1px solid black";
};
  circle.style.backgroundColor = bgColor.value;
  circle.oncontextmenu = function() {
    editorC[0].value = this.style.width;
    editorC[1].value = this.style.height;
    idCont = this.id;
    return false;
  };
  btn.onclick = function() {
    if(editorC[0].value == '' || editorC[1].value == ''){
      alert('Поле эдитора пустое! Заполните поле');
    } else{
      var work = doc.getElementById(idCont);
      work.style.width = editorC[0].value;
      work.style.height = editorC[1].value;
    };
  };
  if(radioButtons[0].checked){
    if(values[0].value > values[1].value){
      circle.style.width = values[0].value + 'px';
      circle.style.height = values[0].value + 'px';
      circle.style.top = +e.layerY - (values[0].value/2) + 'px';
      circle.style.left = +e.layerX - (values[0].value/2) + 'px';
    } else if (values[1].value > values[0].value) {
      circle.style.width = values[1].value + 'px';
      circle.style.height = values[1].value + 'px';
      circle.style.top = +e.layerY - (values[1].value/2) + 'px';
      circle.style.left = +e.layerX - (values[1].value/2) + 'px';
    } else if (values[1].value == values[0].value) {
      circle.style.width = values[0].value + 'px';
      circle.style.height = values[1].value + 'px';
      circle.style.top = +e.layerY - (values[1].value/2) + 'px';
      circle.style.left = +e.layerX - (values[0].value/2) + 'px';
    };
  }else if (radioButtons[1].checked) {
    if(values[0].value > values[1].value){
      circle.style.width = values[0].value + 'px';
      circle.style.height = values[0].value + 'px';
      circle.style.top = +e.layerY - (values[0].value/2) + 'px';
      circle.style.left = +e.layerX - (values[0].value/2) + 'px';
    } else if (values[1].value > values[0].value) {
      circle.style.width = values[1].value + 'px';
      circle.style.height = values[1].value + 'px';
      circle.style.top = +e.layerY - (values[1].value/2) + 'px';
      circle.style.left = +e.layerX - (values[1].value/2) + 'px';
    }else if (values[1].value == values[0].value) {
      circle.style.width = values[0].value + 'px';
      circle.style.height = values[1].value + 'px';
      circle.style.top = +e.layerY - (values[1].value/2) + 'px';
      circle.style.left = +e.layerX - (values[0].value/2) + 'px';
    };
  }else{
    circle.style.width = values[0].value + 'px';
    circle.style.height = values[1].value + 'px';
    circle.style.top = +e.layerY - (values[1].value/2) + 'px';
    circle.style.left = +e.layerX - (values[0].value/2) + 'px';
  };
  area.appendChild(circle);
}
area.addEventListener('click',add);
})();
