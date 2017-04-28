$(window).load(function(){
  // loader hide function
  $('.loader').hide();

  // toggle menu
  $('.toggle-btn.menu,.nav-bg').click(function(){
    if($('.wrapper').hasClass('nav-opened')){
      $('.wrapper').removeClass('nav-opened');
    }
    else{
      $('.wrapper').addClass('nav-opened');
    }
  })
  // toggle menu end
  // toggle Search
  $('.toggle-btn.search,.close-search').click(function(){
    if($('.wrapper').hasClass('search-opened')){
      $('.wrapper').removeClass('search-opened');
    }
    else{
      $('.wrapper').addClass('search-opened');
    }
  })
  // toggle filter
  $('.toggle-btn.filter,.filter-cnt > header .back').click(function(){
    if($('.wrapper').hasClass('filter-opened')){
      $('.wrapper').removeClass('filter-opened');
    }
    else{
      $('.wrapper').addClass('filter-opened');
    }
  })
  // toggle filter end

  // view all menu start
  $('.nav .view-all span').click(function(){
    if($('.nav').hasClass('all-menu')){
      $('.nav').removeClass('all-menu');
      $(this).html('View all');
    }
    else{
      $('.nav').addClass('all-menu');
      $(this).html('View Less');
    }
  })
  // view all menu end

  // lazyload for images plugin calling
  $('img.lazy').Lazy({
      // your configuration goes here
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      visibleOnly: true,
      placeholder: false,
      onError: function(element) {
          console.log('error loading ' + element.data('src'));
      }
  });
})
