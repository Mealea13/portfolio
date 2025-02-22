// show content on scroll function
const showContentOnScroll = () => {
  
    const backTopBtn = $("#back-to-top");
    const contents   = $("#main [data-content]");
    
    // add 0 opacity to each contents except first content
    // contents.addClass("opacity-0 duration-300");
    contents.css({
        "opacity": "0",
        "transition": "0.5s"
    });
    
    // window scroll
    $(window).scroll(function() {
      
      // hide & show back to top btn on scroll
      if ( $(window).scrollTop() > 0 ) {
        backTopBtn.fadeIn();
      } else {
        backTopBtn.fadeOut();
      }
      
      // onclick back to top
      backTopBtn.click(function(e) {
        e.preventDefault();
        $('html,body').stop(true, false).animate({scrollTop:0}, 0);
      });
      
      contents.each(function(i) {
        
        const bottomOfObject = $(this).position().top + $(this).outerHeight();
        const bottomOfWindow = $(window).scrollTop() + $(window).height();

        
        // show on scroll down
        if ( bottomOfWindow >= bottomOfObject ) {
            $(this).css({
                "opacity": "1",
            });
        }
        
        // hide on scroll up
        if ( bottomOfWindow < bottomOfObject ) {
            $(this).css({
                "opacity": "0",
            });
        }
        
      });
      
    });
    
  }
  
  // call function
  showContentOnScroll();