AutoForm.hooks({
	editContent: {
		onSuccess: function(updateDoc, result) {
			var newsletterValue = _.uniq(Contents.find({}, {
		    sort: {newsletter: 1}, fields: {newsletter: true}
		  }).fetch().map(function(x) {
		    return x.newsletter;
		  }), true);
			console.log(newsletterValue);

			if (newsletterValue[0] === true) {
				Session.set('newsletter', true);
			} else {
				Session.set('newsletter', false);
		  }

			Router.go('home');
			FlashMessages.sendSuccess('Content updated');
		},
			onSuccess: function(updateDoc, result) {
				var overlayValue = _.uniq(Contents.find({}, {
					sort: {overlay: 1}, fields: {overlay: true}
				}).fetch().map(function(x) {
					return x.overlay;
					}), true);
					console.log(overlayValue);


				if (overlayValue != 0 ) {
						Session.set('overlay', true);
					} else {
						Session.set('overlay', false);
					}

				Router.go('home');
				FlashMessages.sendSuccess('Content updated');
			}
		}
  });
