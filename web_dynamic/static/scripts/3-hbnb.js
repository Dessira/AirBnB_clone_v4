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
      success: function(data){
	for (let place = 0; place < data.length; place++){
    console.log(data[place])
	  new_sec = $('#pl');
	  new_article = $('<article></article>');
	  title_div = $('<div class="title_box"></div>');
    new_article.append(title_div);
	  title_div.append('<h2>' + data[place].name + '</h2>');
	  title_div.append('<div class="price_by_night">' + data[place].price_by_night + '</div>');
	  info_div = $('<div class="information"></div>');
	  info_div.append('<div class="max_guest">' + data[place].max_guest + '</div>');
	  info_div.append('<div class="number_rooms">' + data[place].number_rooms + '</div>');
	  info_div.append('<div class="number_bathrooms">' + data[place].number_bathrooms + '</div>');
	  new_article.append(info_div);
	  new_article.append('<div class="description">' + data[place].description + '</div>');
	  // $(".places").append(new_article);
    new_sec.append(new_article);
      }
      }
    });
  });
