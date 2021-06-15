$(function() {
    $('#add_phone').click(()=>{
        $('.phone').append("<br><input type='number' class='form-control'  name='phone[]' placeholder='Phone'>");
    });
 });