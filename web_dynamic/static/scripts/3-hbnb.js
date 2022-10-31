$(document).ready(function () {
    let mydict = {};
    $(document).on('change', "input[type='checkbox']", function () {
      if (this.checked) {
        mydict[$(this).data('id')] = $(this).data('name');
      } else {
        delete mydict[$(this).data('id')];
      }
      let lst = Object.values(mydict);
      if (lst.length > 0) {
        $('div.amenities > h4').prepend(Object.values(mydict).join(', '));
      } else {
        $('div.amenities > h4').html('&nbsp;');
      }
    });
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
      if (textStatus === 'success') {
        if (data.status==='OK') {
          $('#api_status').addClass('available');
        }
        else{
            $('#api_status').removeClass('available');
        }
      }
    });
    $.ajax({
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      type: "POST",
      data: JSON.stringify({data:"test"}),
      contentType: "application/json",
      sucess: function(data){
<<<<<<< HEAD
	for (place in data){
	  new_article = $('<article></article>');
	  title_div = $('<div class="title_box"></div>');
	  title_div.append('<h2>' + place.name + '</h2>');
	  title_div.append('<div class="price_by_night">' + place.price_by_night + '</div>');
	  new_article.append(title_div);
	  info_div = $('<div class="information"></div>');
	  info_div.append('<div class="max_guest">' + place.max_guest + '</div>');
	  info_div.append('<div class="number_rooms">' + place.number_rooms + '</div>');
	  info_div.append('<div class="number_bathrooms">' + place.number_bathrooms + '</div>');
	  new_article.append(info_div);
	  new_article.append('<div class="description">' + place.description + '</div>');
	  $(".places").append(new_article);
      }
      }
    });
=======
	/*for (place in data){
	  new_article = $(<article></article>);
	  new_article.append(<div class="title_box">
            <h2>{{ place.name }}</h2><div class="price_by_night">${{ place.price_by_night }}</div>
          </div>)*/
      }
>>>>>>> d206eb5da95db11417bbe867bfba93afa1502688
  });
