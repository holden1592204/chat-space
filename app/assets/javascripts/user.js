$(document).on('turbolinks:load', function(){
var search_list = $("#user-search-result");

    function appendUser(user){
      var html =
                 `<div class="chat-group-user clearfix">
                 <p class="chat-group-user__name">${user.name}</p>
                 <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id=${user.id} data-user-name=${user.name}>追加</div>
               </div>`;
               $("#user-search-result").append(html);
                return html;
    }

    function appendErrMsgToHTML(msg){
      var html =
                  `<div class="chat-group-user clearfix">
                    ${msg}
                  </div>`;
                  $("#user-search-result").append(html);
    }

    function appendUserToGroup(userId, userName){
      var html =
                  `<div class="chat-group-user clearfix js-chat-member" id=chat-group-user-${userId}'>
                  <input name="group[user_ids][]" type="hidden" value="${userId}">
                  <p class="chat-group-user__name">${userName}</p>`
    }
  
    $('#chat-search-result').on('click', 'chat-group-user__btn--add', function(){
      var userId = $(html).data("user-name")
      var userName = $(html)
    })

  $('#user-search-field').on('keyup', function(e){
    e.preventDefault();
    var input = $("#user-search-field").val();

    $.ajax({
      type: "GET",
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users){
      $("#user-search-result").empty();
      if (users.length == 0){
        $("#user-search-result").empty();
      }

      else if (users.length !== 0){
        $('#user-search-result').empty();
        users.forEach(function(user){
          appendUser(user)
        });
      }

      else {
        $('#user-seach-result').empty();
        appendErrMsgToHTML("一致するユーザーが見つかりません");
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  });
});

