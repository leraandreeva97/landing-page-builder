Meteor.methods({
  submitSubscription: function(attributes) {
    // get mailchimp fields from db
		// get input values from subscribe form
		// send data to mailchimp

    // allow other methods on the same connection to run in the mean time
    this.unblock();

    // check if name was entered
    if (!attributes.name) {
      throw new Meteor.Error('no-name-input', 'Please enter your full name');
    }
    // check if email was entered
    if (!attributes.email) {
      throw new Meteor.Error('no-email-input', 'Please enter your email');
    }

    var formData = _.extend(_.pick(attributes, 'name', 'email'), {
      c: 'JSON_CALLBACK',
      u: '800bfb6e2a03c12de30b3eff1',
      id: '9a5ebe0d08'
    });

    try {
      var result = HTTP.call("//damir.us11.list-manage.com/subscribe/post-json",
        {data: formData});
      return result;
    } catch (e) {
      // Got a network error, time-out or HTTP error in the 400 or 500 range
      throw new Meteor.Error('network-error', 'Something went wrong with the HTTP call to mailchimp');
      return false;
    }
  }
});
