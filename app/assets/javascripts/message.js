
   $(function(){
    function buildHTML(message){
      var image_url = (message.image_url)? `<image class="lower-message_image" src="${message.image_url} "class="lower-message__image">`:"";
      var html = `<div class="message" data-message-id = '${message.id}'>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                      <div class="lower-message">
                        <p class="lower-message__content">
                          ${message.content}
                          ${image_url}
                        </p>
                      </div>
                   </div>`
                  return html;
    }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = window.location.href;
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      console.log(message)
      var html = buildHTML(message);
      $('.messages').append(html);  //messageHTMLを変数でappend（追記）に渡す
      $('.form__message')[0];
      $('.hidden')[0];
      $('#new_message')[0]; //text送信後入力した値を消す
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight }, 'fast');
    })
    .fail(function(){
      alert('入力してください');
      $(".form__submit").attr("disabled",false);
    })
  });
   //自動更新機能
   
    $(function autoUpdate() {
      var url = window.location.href;
      if (url.match(/\/groups\/\d+\/messages/)) {
    var last_message_id = $('.message').last().data('message-id');
      $.ajax({
      url: 'api/messages',
      type: 'GET',
      data: { id: last_message_id },
      dataType: 'json'
      })
    .done(function(messages){
      
      if (messages.length > 0) {
        var updatingHTML = '';
        messages.forEach(function(message) {
          updatingHTML = buildHTML(message);
          //console.log(updatingHTML)
        });
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight }, 'fast');
          $('.messages').append(updatingHTML);       
      }
    })
    .fail(function() {
      alert('メッセージを入力してください');
    })
    setInterval(autoUpdate, 5000);
    } 
  });
});
