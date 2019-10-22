  $(function(){

    function buildHTML(message){
      var image_url = (message.image_url)? `<image class="lower-message_image" src="${message.image_url} "class="lower-message__image">`:"";
      var html = `<div class="message" id = '${message.id}'>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.name}
                      </div>
                      <div class="upper-message__date">
                        ${message.time}
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
      datatype: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html =buildHTML(message);
      $('.messages').append(html);  //messageHTMLを変数でappend（追記）に渡す
      $('.form__message').val("");
      $('.hidden').val("");
      $('#new_message')[0].reset(); //text送信後入力した値を消す
      $('.form__submit').prop('disabled', false);
      $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight }, 'fast');
    })
    .fail(function(){
      alert('入力してください');
      $(".form__submit").attr("disabled",false);
    })
  });

  //  自動更新機能

  // $(function(){
  //   setInterval(autoUpdate, 3000);
  //   });
  //   function autoUpdate() {
  //     var url = window.location.href;
  //     if (url.match(/\/groups\/\d+\/messages/)) {
  //       var message_id = $('.message').last().data('message-id');
  //         $.ajax({
  //         url: url,
  //         type: 'GET',
  //         data: { id: message_id },
  //         dataType: 'json'
  //       })
  //   .done(function(messages){
  //     if (messages.length !== 0) {
  //       messages.forEach(function(message) {
  //         var html =buildHTML(message);
  //         $('.messages').append(html);
  //         $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight }, 'fast');
  //       });
  //     }
  //   })
  //   .fail(function() {
  //     alert('自動更新に失敗しました');
  //   })
  //  } else {
  //     clearInterval(autoUpdate);
  //   }
  // };
});