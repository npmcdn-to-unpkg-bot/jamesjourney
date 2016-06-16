
// handleRegisterSubmit variables
const $registerForm = $('#event-register-form');
const $fName        = $registerForm.find('.first-name');
const $lName        = $registerForm.find('.last-name');
const $email        = $registerForm.find('.email');
const $message      = $registerForm.find('.message');
const $slug         = $registerForm.find('.hidden-slug');
const $tshirtSize   = $registerForm.find("select[name='tShirtSize']");
const $nameOnCard   = $registerForm.find('#nameOnCard');
const $cardNumber   = $registerForm.find('#cardNumber');
const $expMonth     = $registerForm.find('#expMonth');
const $expYear      = $registerForm.find('#expYear');
const $cvcCode      = $registerForm.find('#cvcCode');

const $regSuccess   = $('.register-success');
const $regError     = $('.register-error');

// handleDonateSubmit variables
const $spinner          = $('<i/>'   , { class: 'fa fa-circle-o-notch fa-spin fa-2x fa-fw' });
const $srOnly           = $('<span/>', { class: 'sr-only' });
const $donateForm       = $('#donate-form');
const $spinnerContainer = $('.spinner-container');

// bootstrapSelect
const $selectPicker = $('.selectpicker');
// showTotalFee
const $totalAmt = $('.show-total-amt');
const $radioRegisterOpts = $("input[name='registerOptions']");


// set stripekey for all functions
// should eventually send the key from the server on the request
Stripe.setPublishableKey('pk_live_2dk81qWEapK2BJ8WrDi0uM8Z');

export function handleRegisterSubmit() {

  $registerForm.on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);

    $spinnerContainer.append($spinner).append($srOnly);
    $form.find('.btn').prop('disabled', true);

    Stripe.card.createToken($form, function(status, response) {
      if (response.error) {
        $form.find('.payment-errors').text(response.error.message);
        $form.find('button').prop('disabled', false);
      } else {
        // response contains id and card, which contains additional card details
        var token = response.id;
        // Insert the token into the form so it gets submitted to the server
        $form.append($('<input type="hidden" name="stripeToken" />').val(token));
        // and submit
        $form.get(0).submit();
      }
    });

  });
}

export function handleDonateSubmit() {
  // need to set the publishable key

  // handle the submission of the donate form
  // append spinner & disable button until finished
  $donateForm.on('submit', function(e) {
    e.preventDefault();
    var $form = $(this);
    $spinnerContainer.append($spinner).append($srOnly);
    $form.find('.btn').prop('disabled', true);

    // console.log($form)

    // create the stripeToken
    Stripe.card.createToken($form, stripeResponseHandler);
  })

  // callback handler that either inserts errors or attaches
  // stripeToken to hidden input, then submits form
  function stripeResponseHandler(status, response) {
    var $form = $donateForm;

    if (response.error) {
      // Show the errors on the form
      $form.find('.payment-errors').text(response.error.message);
      $form.find('button').prop('disabled', false);
    } else {
      // response contains id and card, which contains additional card details
      var token = response.id;
      // Insert the token into the form so it gets submitted to the server
      $form.append($('<input type="hidden" name="stripeToken" />').val(token));
      // and submit
      $form.get(0).submit();
    }
  };
}

export function bootstrapSelect() {
  $selectPicker.selectpicker();
}

export function showTotalFee() {
  $totalAmt.text('$30.00');

  $radioRegisterOpts.on('click', function(e) {
    var radioVal = $(this).val();
    if (radioVal === '1500') {
      $totalAmt.text('$15.00');
    }
    if (radioVal === '3000') {
      $totalAmt.text('$30.00');
    }
  })
}

export function registerOptionsSelect() {
  const $tshirtSelect = $("select[name=tShirtSize]");
  const $registerOptions1 = $('#inlineRadio1');
  const $registerOptions2 = $('#inlineRadio2');

  $registerOptions2.on('click', function(e) {
    $tshirtSelect.val('none');
    $tshirtSelect.change();
  });

  $registerOptions1.on('click', function(e) {
    if ($tshirtSelect.val('none')) {
      $tshirtSelect.val('L');
      $tshirtSelect.change();
    }
  });

  // if () {
  //   console.log('you selected the second option')
  // }
}


export function handleMassEmailSubsmit() {
  var $form = $('#new-mass-email-form');

  console.log('hello handlemassemailsub')
  $form.on('submit', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $subject = $this.find('#subject');
    var $content = $this.find('#content');

    console.log('submitted!!!', $subject.val(), $content.val());
    window.location = 'https://james4eds.com/emails/sent?success=true&recepsLen=3'
  })
}


export function handleEventEmailFunctionality() {
  var $radios = $("input[name='eventId']");
  var $hidden = $("input[name='hiddenCheckedEventId']");
  var $form   = $('#new-event-email-form');

  var firstRadioVal = $radios.first().val();
  $hidden.val(firstRadioVal)

  console.log($hidden.val())

  $radios.on('change', function(e) {
    e.preventDefault();
    var $this = $(this);
    var thisRadioVal = $this.val();

    $hidden.val(thisRadioVal);
    console.log('hiddens val: ', $hidden.val());
  });

  $form.on('submit', function(e) {
    e.preventDefault();
    var $this = $(this);
    var subject = $this.find('#subject').val().trim();
    var content = $this.find('#content').val().trim();
    var hiddenChecked = $this.find('#hiddenCheckedEventId').val();

    // var postData = { eventId: hiddenChecked, subject: subject, content: content };

    $this.get(0).submit();

    // $.post('/emails/newEventOnly', postData)
    //   .done(data => {
    //     console.log('post successfully sent! ', data)
    //   })
    //   .fail(error => {
    //     console.log('there was an error from front end! ', error)
    //   })

  })


}