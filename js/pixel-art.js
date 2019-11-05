var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorElegido.style.backgroundColor = colorActual;
  })
);

///////////// Variables///////////////

var paleta = document.getElementById("paleta");
var grilla = document.getElementById("grilla-pixeles");
var colorElegido = document.getElementById("indicador-de-color");
var mouseApretado = false;
//////////////////////////////////////

function recorrerColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    var divPaletaColor = document.createElement('div');
    divPaletaColor.style.backgroundColor = nombreColores[i];
    divPaletaColor.className = "color-paleta";
    paleta.appendChild(divPaletaColor);
  }
}
recorrerColores();

//////////////////////////////////////

function crearGrilla() {
  for (let i = 0; i < 1750; i++) {
    var pixel = document.createElement("div");
    grilla.appendChild(pixel);
  }
}
crearGrilla();

//////////////////////////////////////

paleta.addEventListener("click", cambiarColor);

function cambiarColor(e) {
  colorElegido.style.backgroundColor = e.target.style.backgroundColor;
}

//////////////////////////////////////

grilla.addEventListener("mousedown", mouseTrue);
grilla.addEventListener("mouseup", mouseFalse);
grilla.addEventListener("click", pintarPixel);
grilla.addEventListener("mouseover", pintarPixelEnMov);

function pintarPixelEnMov(e) {
  if (mouseApretado == true) {
    e.target.style.backgroundColor = colorElegido.style.backgroundColor;
  }
}

function pintarPixel(e) {
  e.target.style.backgroundColor = colorElegido.style.backgroundColor;
}

function mouseTrue() {
  mouseApretado = true;
}

function mouseFalse() {
  mouseApretado = false;
}

////////////////////////////////////

$("#guardar").click(function () {
  guardarPixelArt();
});

$("#borrar").click(function () {
  $("#grilla-pixeles div").each(function () {
    $(this).animate({ "background-color": "#ffffff" }, 2000);
  });
});




/*$("#batman").click(function () {

  cargarSuperheroe(batman);

});

$("#wonder").click(function () {

  cargarSuperheroe(wonder);

});


$("#flash").click(function () {

  cargarSuperheroe(flash);

});


$("#invisible").click(function () {

  cargarSuperheroe(invisible);

});*/


$(".imgs img").on("click", function () {
  var id = $(this).attr("id");
  switch (id) {
    case "batman": cargarSuperheroe(batman);
      break;

    case "wonder": cargarSuperheroe(wonder);
      break;

    case "flash": cargarSuperheroe(flash);
      break;

    case "invisible": cargarSuperheroe(invisible);
      break;
  }
});

