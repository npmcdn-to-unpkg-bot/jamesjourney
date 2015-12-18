

;(function($) {

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

  root.App = App;

  App.typer('.nl-typer');
  App.tokenField('#new-blog-tokenfield')
  App.tokenField('#edit-blog-tokenfield')

})(jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuOyhmdW5jdGlvbigkKSB7XG5cbiAgdmFyIHJvb3QgPSB0aGlzO1xuICBBcHAgPSByb290LkFwcCB8fCB7fTtcblxuICBBcHAudHlwZXIgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgJChlbGVtKS50eXBlZCh7XG4gICAgICBzdHJpbmdzOiBbXG4gICAgICAgICdzdXBwb3J0IG91ciBjYXVzZS4nLFxuICAgICAgICAncmVjaWV2ZSByZWd1bGFyIHVwZGF0ZXMgb24gZXZlbnRzLicsXG4gICAgICAgICdoZWxwIG1ha2UgdGhlIHdvcmxkIGEgYmV0dGVyIHBsYWNlLidcbiAgICAgIF0sXG4gICAgICB0eXBlU3BlZWQ6IDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgYmFja0RlbGF5OiAzMDAwLFxuICAgICAgYmFja1NwZWVkOiAtNSxcbiAgICAgIHNob3dDdXJzb3I6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICBBcHAudG9rZW5GaWVsZCA9IGZ1bmN0aW9uKGVsZW0pIHtcbiAgICAkKGVsZW0pLnRva2VuZmllbGQoe1xuICAgICAgLy8gYXV0b2NvbXBsZXRlOiB7XG4gICAgICAvLyAgIHNvdXJjZTogWydyZWQnLCdibHVlJywnZ3JlZW4nLCd5ZWxsb3cnLCd2aW9sZXQnLCdicm93bicsJ3B1cnBsZScsJ2JsYWNrJywnd2hpdGUnXSxcbiAgICAgIC8vICAgZGVsYXk6IDEwMFxuICAgICAgLy8gfSxcbiAgICAgIHNob3dBdXRvY29tcGxldGVPbkZvY3VzOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJvb3QuQXBwID0gQXBwO1xuXG4gIEFwcC50eXBlcignLm5sLXR5cGVyJyk7XG4gIEFwcC50b2tlbkZpZWxkKCcjbmV3LWJsb2ctdG9rZW5maWVsZCcpXG4gIEFwcC50b2tlbkZpZWxkKCcjZWRpdC1ibG9nLXRva2VuZmllbGQnKVxuXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
