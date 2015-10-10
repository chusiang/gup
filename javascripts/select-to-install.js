jQuery(document).ready(function() {

  // click select all checkbox.
  $('#click_all').click(function(event) {
    if(this.checked) {
      $('.checkbox_list').each(function() {
        this.checked = true;
      });
    }else{
      $('.checkbox_list').each(function() {
        this.checked = false;
      });        
    }
  });

  // click install button.
  $("#install_button").click(function() {
    var apt_list = [];
    $("input[name='chkbox[]']:checked").each(function() {
      apt_list.push( $(this).val() );
    });

    //Alert window.
    alert("If it's not working, you can execute this on terminal. \n\nsudo apt-get install " + apt_list.join(' '));	

    //Track the apturl service.
    location.href="apt://" + apt_list.join(',');
  });

});
