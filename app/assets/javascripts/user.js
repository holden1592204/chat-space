$(document).on('turbolinks:load', function(){


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

  function addDeleteUser(name, id) {
    var html =
               `<divclass="chat-group-user clearfix" id="${id}">
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class="chat-group-user__name">${name}</p>
               </div>`
               $(".js-add-user").append(html);
  }

  function appendUserToGroup(userId){
    var html =
               `<input value="${userId}" name="group[user_ids][]" type="hidden" id="group_user_ids_${userId}" />
                <p class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</p>`
              
    $(`#${userId}`).append(html);
  }

$('#user-search-field').on('keyup', function(e){
  e.preventDefault();
  //console.log(this)
  var input = $("#user-search-field").val();

  $(document).on("click", ".chat-group-user__btn--add", function(){
    const userName = $(this).attr("data-user-name");
    const userId = $(this).attr("data-user-id");
      addDeleteUser(userName, userId);
      appendUserToGroup(userId);
      $(this).parent().remove();
  })
  $(document).on("click", ".chat-group-user__btn--remove", function(){
      $(this).parent().remove();
  });

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