$( function (){

  var slack_token = "xoxp-12345"

  $('#online').click(
    function() {
      var data = {
        token: slack_token,
        presence: 'auto',
        pretty: 1
      };
      $.post( "https://slack.com/api/users.setPresence", data, null, "text" )
        .done(function() {
          bootstrap_alert('success')
        })
        .fail(function() {
          bootstrap_alert('fail')
        });
    }
  );

  $('#away').click(
    function() {
      var data = {
        token: slack_token,
        presence: 'away',
        pretty: 1
      };
      $.post( "https://slack.com/api/users.setPresence", data, null, "text" )
      .done(function() {
        bootstrap_alert('success')
      })
      .fail(function() {
        bootstrap_alert('fail')
      });
    }
  );

  $('._status').click(
    function() {
      var status = $(this).attr('id')
      set_status(status)
    }
  );

  function set_status(status) {
    var url = 'https://slack.com/api/users.profile.set'

    if (status == 'homeoffice') {
      var text = 'Home Office'
      var emoji = ':flag-de:'
    }
    else if (status == 'afk') {
      var text = 'Away From Keyboard'
      var emoji = ':coffee:'
    }
    else if (status == 'food') {
      var text = 'Breakfast / Lunch / Dinner'
      var emoji = ':knife_fork_plate:'
    }
    else if (status == 'coding') {
      var text = 'Coding'
      var emoji = ':male-technologist:'
    }
    else if (status == 'bughunting') {
      var text = 'Bug Hunting'
      var emoji = ':bug:'
    }
    else if (status == 'dnd') {
      var text = 'Do Not Disturb'
      var emoji = ':no_entry:'
    }
    else if (status == 'focus') {
      var text = 'Focus Session'
      var emoji = ':headphones:'
    }
    else if (status == 'meeting') {
      var text = 'Meeting'
      var emoji = ':telephone_receiver:'
    }
    else if (status == 'sick') {
      var text = 'Out sick'
      var emoji = ':pill:'
    }
    else if (status == 'traveling') {
      var text = 'Traveling'
      var emoji = ':airplane:'
    }
    else if (status == 'feierabend') {
      var text = 'Done for the day'
      var emoji = ':house:'
    };

    var profile_data = '{"status_text":"' + text + '","status_emoji":"' + emoji + '"}';

    var data = {
      "token": slack_token,
      "profile": profile_data
    };

    $.post( url, data, null, "text" )
    .done(function() {
      bootstrap_alert('success')
      console.log(data)
    })
    .fail(function() {
      bootstrap_alert('fail')
    });
  };

  function bootstrap_alert(status) {
    if(status == 'success') {
      $("#successmessage").removeClass("d-none");
    }
    else if (status == 'fail') {
      $("#failmessage").removeClass("d-none");
      }
    }
}
);
