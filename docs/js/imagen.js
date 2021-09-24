function imagenes_temp(argument) {

    let imagen = document.querySelectorAll("img");

    for (var i = 0; i < imagen.length; i++) {
        let dataimg = Math.floor((Math.random() * 100) + 1);

        if (dataimg >= 10 && dataimg <= 99) {
            dataimg = "0" + dataimg;
        } else if (dataimg < 10) {
            dataimg = "00" + dataimg;
        }

        let url = "img/" + dataimg + ".png";
        imagen[i].src = url;
    }
}
imagenes_temp();