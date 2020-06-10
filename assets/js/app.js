$(document).ready(function(){
	$(window).scroll(function(){
		// $('#site').removeClass('open-menu-respon')
		// $('#icon-menu-respon').removeClass('fa-times').addClass('fa-navicon');
		// $('#wrapper').removeClass('opened')
		return false;
	});
	$("#icon-menu-respon").click(function(){
		$(".wp-mark").css({'display' : 'block'})
		$('#icon-menu-respon').toggleClass('fa fa-navicon fa fa-times');
		$('#site').toggleClass('open-menu-respon');
		$('#wrapper').toggleClass('opened');
		return false;
	});
	$(".wp-mark").click(function(){
		$(".wp-mark").css({'display' : 'none'})
		$('#site').removeClass('open-menu-respon')
		$('#icon-menu-respon').removeClass('fa-times').addClass('fa-navicon');
		$("#wrapper").removeClass('opened')
	});

	$(window).scroll(function(){
		$("#site").removeClass('open-menu-respon');
		$("#icon-menu-respon").removeClass('fa-times').addClass('fa-navicon');
		$('#wrapper').removeClass('opened');
	});
	$(".has-sub-menu").click(function(){
		$('#sub-menu').slideToggle();
		return false;
	});

	$(window).resize(function(){
		if ($(document).width() >768) {
			$('#wrapper').removeClass('opened')
			$('#icon-menu-respon').removeClass('fa-times').addClass('fa-navicon');
			$('#site').removeClass('open-menu-respon');
		}
	});


	$(window).scroll(function(){
		var lastsc = 80;
		$('#header').toggleClass('fix-top',$(window).scrollTop()>lastsc);
		lastsc=$(window).scrollTop();
		if ($(this).scrollTop() > 80) { 
            $('#bt-goTop').fadeIn(); 
        } else { 
            $('#bt-goTop').fadeOut(); 
        } 
	})

	
    $('#bt-goTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
});