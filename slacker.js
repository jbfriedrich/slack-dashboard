$( function () {
  var config_file = './config.json'
  var config = require(config_file, false)
  var slack_token = config.slack_token
  var def_channel = config.default_channel

  $('#online').click(
    function() {
      set_presence('auto')
    }
  )

  $('#away').click(
    function() {
      set_presence('away')
    }
  )

  $('._status').click(
    function() {
      var status = $(this).attr('id')
      set_status(status)
    }
  )

  $('._message').click(
    function() {
      var message = $(this).attr('id')
      post_message(message)
    }
  )

  function post_message(message) {
    var url = 'https://slack.com/api/chat.postMessage'
    var msg_txt = config['messages'][message]
    var data = {
      "token": slack_token,
      "text": msg_txt,
      "channel": def_channel,
      "as_user": "true"
    }
    var files = config['files'][message]
    if (files) {
      var random_file = files[Math.floor(Math.random()*files.length)];
      var img_baseurl = config.img_baseurl
      var file = img_baseurl + random_file
      //console.log(file)
      data.attachments = '[{"fallback":"image","image_url":"' + file + '"}]'
      //console.log(data)
    }
    $.post(url, data, null, "text")
    .done(function() {
      bootstrap_alert('success')
    })
    .fail(function() {
      bootstrap_alert('fail')
    })
  }

  function set_presence(presence) {
    var url = 'https://slack.com/api/users.setPresence'
    var data = {
      token: slack_token,
      presence: presence,
      pretty: 1
    }
    $.post( url, data, null, "text" )
    .done(function() {
      bootstrap_alert('success')
    })
    .fail(function() {
      bootstrap_alert('fail')
    })
  }

  function set_status(status) {
    var url = 'https://slack.com/api/users.profile.set'
    text = config['statusmsg'][status]
    emoji = config['emoji'][status]
    var profile_data = '{"status_text":"' + text + '","status_emoji":"' + emoji + '"}'
    var data = {
      "token": slack_token,
      "profile": profile_data
    }

    $.post( url, data, null, "text" )
    .done(function() {
      bootstrap_alert('success')
    })
    .fail(function() {
      bootstrap_alert('fail')
    })
  }

  function bootstrap_alert(status) {
    if (status == 'success') {
      $("<div id='#successmessage' class='alert alert-success\
        alert-dismissible fade show mt-2' role='alert'\
        <strong>Successful!</strong><button type='button' class='close'\
        data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>\
        &times;</span></button>").appendTo($("#status"))
    }
    else if (status == 'fail') {
      $("<div id='#failmessage' class='alert alert-danger\
        alert-dismissible fade show mt-2' role='alert'\
        <strong>Failed!</strong><button type='button' class='close'\
        data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>\
        &times;</span></button>").appendTo($("#status"))
    }
  }
}
)
