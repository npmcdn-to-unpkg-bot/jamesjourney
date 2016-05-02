
// Normally would import $ here, but running into problems with
// attaching other libraries onto the imported $

import * as globals   from './controllers/global_controller';
import * as statics   from './controllers/statics_controller';
import * as forms     from './controllers/form_controller';
import * as admins    from './controllers/admin_controller';
import * as blogs     from './controllers/blogs_controller';
import * as galleries from './controllers/galleries_controller';

const currentPath = window.location.pathname;

$(document).ready(function() {

  // all pages
  globals.navbar();
  globals.pushMenu();

  // index
  statics.programSlider();
  statics.slideShow();

  // contact-us
  // statics.googleMap();

  // show_event
  forms.handleDonateSubmit();
  forms.bootstrapSelect();

  // donate
  forms.handleRegisterSubmit();

  // new_blog, new_event?
  // admins.tokenField('#new-blog-tokenfield');
  // admins.tokenField('#edit-blog-tokenfield');
  admins.contentPreviewCount();

  // admin_page
  admins.adminPageRenderer();
  admins.handleAdminEventAttendees();
  admins.handleAdminEventAttendeesMessages();
  admins.formatDate();
  admins.formatDonation();

  // gallery
  galleries.imageGallery();
});