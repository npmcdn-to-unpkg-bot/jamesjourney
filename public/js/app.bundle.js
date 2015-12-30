

(function($) {

  var root = this;
  App = root.App || {};

  App.typer = function(elem) {
    $(elem).typed({
      strings: [
        'support our cause.',
        'recieve regular updates on events.',
        'help make the world a better place.'
      ],
      typeSpeed: 0,
      loop: true,
      backDelay: 3000,
      backSpeed: -5,
      showCursor: false
    });
  }

  App.tokenField = function(elem) {
    $(elem).tokenfield({
      // autocomplete: {
      //   source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
      //   delay: 100
      // },
      showAutocompleteOnFocus: true
    })
  }

  App.contentPreviewCount = function() {
    var maxNum = 600;
    var currentNum;
    var $contentPreview = $('.content-preview-input');
    var $currentCount = $('.current-count');
    var $maxNum = $('.current-count__max');
    var $currentNum = $('.current-count__current');

    $contentPreview.on('keyup', function() {
      currentNum = $contentPreview.val().length;
      $currentNum.text(currentNum);
    })
  }

  App.scrollFollow = function(elem) {
    $(elem).simpleScrollFollow({
      limit_elem: '.on-left'
    });
  }

  App.navbar = function() {
    var $navbar = $('header');
    var $window = $(window);
    var $logo = $('#header-logo-link');

    $window.on('scroll change', function() {
      // console.log($(this).scrollTop())
      if ($(this).scrollTop() > 20) {
        $navbar.addClass('with-bg');
        // $logo.show();
      } else {
        $navbar.removeClass('with-bg');
      }

    })
  }

  App.pushMenu = function() {
    // var $navMenu = $('#nav')
    var $navbarBtn = $('a#header-menu-link');
    var $mainCont = $('.main-cont');
    var $navMenu = $('#nav-menu');

    // menu link clicked
    $navbarBtn.on('click', function(e) {
      e.preventDefault();

      // if main-cont has class .push-right then remove it
      if ($mainCont.hasClass('push-right')) {
        $(this).css('color', '#aaa');
        $navMenu
          .animate({ width: '0px' }, 200)
        $mainCont
          .removeClass('push-right')
          .animate({ left: '0px' }, 200)
      }
      // add it if there isnt .push-right
      else {
        $(this).css('color', '#fff');
        $navMenu
          .show()
          .animate({ width: '300px' }, 200)
        $mainCont
          .addClass('push-right')
          .animate({ left: '-300px' }, 200)
      }
    })
  }

  root.App = App;

  App.typer('.nl-typer');
  App.tokenField('#new-blog-tokenfield');
  App.tokenField('#edit-blog-tokenfield');
  App.contentPreviewCount();
  App.scrollFollow('#show-blog .on-right, #blogs .on-right');
  App.navbar();
  App.pushMenu();



})(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuKGZ1bmN0aW9uKCQpIHtcblxuICB2YXIgcm9vdCA9IHRoaXM7XG4gIEFwcCA9IHJvb3QuQXBwIHx8IHt9O1xuXG4gIEFwcC50eXBlciA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAkKGVsZW0pLnR5cGVkKHtcbiAgICAgIHN0cmluZ3M6IFtcbiAgICAgICAgJ3N1cHBvcnQgb3VyIGNhdXNlLicsXG4gICAgICAgICdyZWNpZXZlIHJlZ3VsYXIgdXBkYXRlcyBvbiBldmVudHMuJyxcbiAgICAgICAgJ2hlbHAgbWFrZSB0aGUgd29ybGQgYSBiZXR0ZXIgcGxhY2UuJ1xuICAgICAgXSxcbiAgICAgIHR5cGVTcGVlZDogMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBiYWNrRGVsYXk6IDMwMDAsXG4gICAgICBiYWNrU3BlZWQ6IC01LFxuICAgICAgc2hvd0N1cnNvcjogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIEFwcC50b2tlbkZpZWxkID0gZnVuY3Rpb24oZWxlbSkge1xuICAgICQoZWxlbSkudG9rZW5maWVsZCh7XG4gICAgICAvLyBhdXRvY29tcGxldGU6IHtcbiAgICAgIC8vICAgc291cmNlOiBbJ3JlZCcsJ2JsdWUnLCdncmVlbicsJ3llbGxvdycsJ3Zpb2xldCcsJ2Jyb3duJywncHVycGxlJywnYmxhY2snLCd3aGl0ZSddLFxuICAgICAgLy8gICBkZWxheTogMTAwXG4gICAgICAvLyB9LFxuICAgICAgc2hvd0F1dG9jb21wbGV0ZU9uRm9jdXM6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgQXBwLmNvbnRlbnRQcmV2aWV3Q291bnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbWF4TnVtID0gNjAwO1xuICAgIHZhciBjdXJyZW50TnVtO1xuICAgIHZhciAkY29udGVudFByZXZpZXcgPSAkKCcuY29udGVudC1wcmV2aWV3LWlucHV0Jyk7XG4gICAgdmFyICRjdXJyZW50Q291bnQgPSAkKCcuY3VycmVudC1jb3VudCcpO1xuICAgIHZhciAkbWF4TnVtID0gJCgnLmN1cnJlbnQtY291bnRfX21heCcpO1xuICAgIHZhciAkY3VycmVudE51bSA9ICQoJy5jdXJyZW50LWNvdW50X19jdXJyZW50Jyk7XG5cbiAgICAkY29udGVudFByZXZpZXcub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgICBjdXJyZW50TnVtID0gJGNvbnRlbnRQcmV2aWV3LnZhbCgpLmxlbmd0aDtcbiAgICAgICRjdXJyZW50TnVtLnRleHQoY3VycmVudE51bSk7XG4gICAgfSlcbiAgfVxuXG4gIEFwcC5zY3JvbGxGb2xsb3cgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgJChlbGVtKS5zaW1wbGVTY3JvbGxGb2xsb3coe1xuICAgICAgbGltaXRfZWxlbTogJy5vbi1sZWZ0J1xuICAgIH0pO1xuICB9XG5cbiAgQXBwLm5hdmJhciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkbmF2YmFyID0gJCgnaGVhZGVyJyk7XG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgdmFyICRsb2dvID0gJCgnI2hlYWRlci1sb2dvLWxpbmsnKTtcblxuICAgICR3aW5kb3cub24oJ3Njcm9sbCBjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykuc2Nyb2xsVG9wKCkpXG4gICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDIwKSB7XG4gICAgICAgICRuYXZiYXIuYWRkQ2xhc3MoJ3dpdGgtYmcnKTtcbiAgICAgICAgLy8gJGxvZ28uc2hvdygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJG5hdmJhci5yZW1vdmVDbGFzcygnd2l0aC1iZycpO1xuICAgICAgfVxuXG4gICAgfSlcbiAgfVxuXG4gIEFwcC5wdXNoTWVudSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHZhciAkbmF2TWVudSA9ICQoJyNuYXYnKVxuICAgIHZhciAkbmF2YmFyQnRuID0gJCgnYSNoZWFkZXItbWVudS1saW5rJyk7XG4gICAgdmFyICRtYWluQ29udCA9ICQoJy5tYWluLWNvbnQnKTtcbiAgICB2YXIgJG5hdk1lbnUgPSAkKCcjbmF2LW1lbnUnKTtcblxuICAgIC8vIG1lbnUgbGluayBjbGlja2VkXG4gICAgJG5hdmJhckJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIGlmIG1haW4tY29udCBoYXMgY2xhc3MgLnB1c2gtcmlnaHQgdGhlbiByZW1vdmUgaXRcbiAgICAgIGlmICgkbWFpbkNvbnQuaGFzQ2xhc3MoJ3B1c2gtcmlnaHQnKSkge1xuICAgICAgICAkKHRoaXMpLmNzcygnY29sb3InLCAnI2FhYScpO1xuICAgICAgICAkbmF2TWVudVxuICAgICAgICAgIC5hbmltYXRlKHsgd2lkdGg6ICcwcHgnIH0sIDIwMClcbiAgICAgICAgJG1haW5Db250XG4gICAgICAgICAgLnJlbW92ZUNsYXNzKCdwdXNoLXJpZ2h0JylcbiAgICAgICAgICAuYW5pbWF0ZSh7IGxlZnQ6ICcwcHgnIH0sIDIwMClcbiAgICAgIH1cbiAgICAgIC8vIGFkZCBpdCBpZiB0aGVyZSBpc250IC5wdXNoLXJpZ2h0XG4gICAgICBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5jc3MoJ2NvbG9yJywgJyNmZmYnKTtcbiAgICAgICAgJG5hdk1lbnVcbiAgICAgICAgICAuc2hvdygpXG4gICAgICAgICAgLmFuaW1hdGUoeyB3aWR0aDogJzMwMHB4JyB9LCAyMDApXG4gICAgICAgICRtYWluQ29udFxuICAgICAgICAgIC5hZGRDbGFzcygncHVzaC1yaWdodCcpXG4gICAgICAgICAgLmFuaW1hdGUoeyBsZWZ0OiAnLTMwMHB4JyB9LCAyMDApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJvb3QuQXBwID0gQXBwO1xuXG4gIEFwcC50eXBlcignLm5sLXR5cGVyJyk7XG4gIEFwcC50b2tlbkZpZWxkKCcjbmV3LWJsb2ctdG9rZW5maWVsZCcpO1xuICBBcHAudG9rZW5GaWVsZCgnI2VkaXQtYmxvZy10b2tlbmZpZWxkJyk7XG4gIEFwcC5jb250ZW50UHJldmlld0NvdW50KCk7XG4gIEFwcC5zY3JvbGxGb2xsb3coJyNzaG93LWJsb2cgLm9uLXJpZ2h0LCAjYmxvZ3MgLm9uLXJpZ2h0Jyk7XG4gIEFwcC5uYXZiYXIoKTtcbiAgQXBwLnB1c2hNZW51KCk7XG5cblxuXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
