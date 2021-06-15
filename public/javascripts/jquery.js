$(function() {
    $('#add_phone').click(()=>{
        console.log('Working!!');
        $('.phone').append("<br><input type='number' class='form-control'  name='phone[]' placeholder='Phone'>");
    });
 });