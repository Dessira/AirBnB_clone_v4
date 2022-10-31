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
	/*for (place in data){
	  new_article = $(<article></article>);
	  new_article.append(<div class="title_box">
            <h2>{{ place.name }}</h2><div class="price_by_night">${{ place.price_by_night }}</div>
          </div>)*/
      }
  });
