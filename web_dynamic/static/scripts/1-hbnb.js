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
  });