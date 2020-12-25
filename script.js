$(function($) 
{
    $('input[name="phone"]').mask("+7 (999) 999-99-99");
});


function carousel() // функция для показа изображений в галерее
{
    // берутся все изображения из галереи, 1-ое записывается в переменную, затем удаляется из блока и добавляется (в конец)
    let carouselItems = document.getElementsByClassName("carousel__item"); 
    let carouselItemFirst = carouselItems[0];
    carouselItemFirst.remove();
    document.getElementById("carousel").append(carouselItemFirst);
}

setInterval(carousel, 1500);

