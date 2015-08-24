jQuery(document).ready(function() {

  // click select all chkbox.
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

    //alert("apt://" + apt_list.join(','));		            //對話視窗 (apturl)。
    alert("sudo apt-get install " + apt_list.join(' '));	//對話視窗。
    location.href="apt://" + apt_list.join(',');	        //導向至 URL。
  });

});
