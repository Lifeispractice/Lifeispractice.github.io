var identification=0

$(function(){
	
	if(window.location.pathname == '/tags/'){
		var elementModuleToparr = []
		$('.elementModule').each(function(index, value) {
			var elementModuleTop = $('.elementModule').eq(index).offset().top
			elementModuleToparr.push(elementModuleTop)
			console.log(elementModuleToparr)
		});
		// $('.smartWaterMarketing').scroll()
		$('.smartWaterMarketing ul li').each(function(i){
			$(this).click(function(){
				$('.smartWaterMarketing ul li').removeClass('active');
				$(this).addClass('active').siblings().removeClass('active');
				$('body,html').animate({scrollTop: $('.elementModule').eq(i).offset().top-80 },400);
			})
		})
		$(document).scroll(function() {
			var scroH = $(document).scrollTop();  //滚动高度
			var viewH = $(window).height();  //可见高度 
			var contentH = $(document).height();  //内容高度
			if(scroH > $('.smartWaterMarketing').offset().top-100 ){
				$('.psos').addClass('active')
			}else{
				$('.psos').removeClass('active')
			}
			if(scroH > 3023){
				$('.psos').removeClass('active')
			}
			elementModuleToparr.forEach(function(event,index){
				if(scroH > Math.ceil(elementModuleToparr[index])-100 ){
					$('.smartWaterMarketing ul li').eq(index).addClass('active').siblings().removeClass('active');
				}
			})
		})
	}
	$('.closeContactUs').click(function(){
		$('.contactUsmask,.contactUsPop').hide()
		var bodyCss = document.querySelector('body')
		bodyCss.style.cssText = "overflow: hidden;";
		//bodyCss.setAttribute("style","overflow: inherit;")
	})
	$('.contactUs,.primary_button').click(function(){
		$('.contactUsmask,.contactUsPop').show()
		var bodyCss = document.querySelector('body')
		bodyCss.style.cssText = "overflow: hidden;";
		//bodyCss.setAttribute("style","overflow: hidden;")
	})
	// 了解详情 左侧导航
	$('.learnMoreSpecialDishes .box2 ul li').each(function(i){
		$(this).click(function(){
			
			
			$('.learnMoreSpecialDishes .box2 ul li').removeClass('on');
			$(this).addClass('on').siblings().removeClass('on');
			if( i == 0){
				$('body,html').animate({scrollTop: $('.product_overview1').offset().top-120  },400);
			}
			if( i == 1){
				$('body,html').animate({scrollTop: $('.product_overview2').offset().top-120  },400);
			}
			if( i == 2){
				$('body,html').animate({scrollTop: $('.product_overview3').offset().top-120  },400);
			}
			if( i == 3){
				$('body,html').animate({scrollTop: $('.product_overview4').offset().top-120  },400);
			}
		})
	})
	// 客户案例
	$('#navbarSupportedContent .nav-item').each(function(i){
		$(this).click(function(){
			$('#navbarSupportedContent .nav-item').removeClass('on');
			$(this).addClass('on').siblings().removeClass('on');
			if( i == 0){
				// alert('企业主页')
				// 首页内容
				$('#hero,#gtco-testimonial').show()
				// 了解详情 hide
				$('#gtco-special-dishes').hide()
				// 首页内容
				$('#hero,#gtco-testimonial').hide()
				// 加入我们 
				$('#gtco-welcome').hide()
				// 客户案例
				$('#gtco-reservation').hide()
			}
			if( i == 1){
				// alert('产品解决方案')
			}
			if( i == 2){
				// alert('客户案例')
				$('#gtco-reservation').show()
				// 了解详情 hide
				$('#gtco-special-dishes').hide()
				// 首页内容
				$('#hero,#gtco-testimonial').hide()
				// 加入我们 
				$('#gtco-welcome').hide()
			}
			if( i == 3){
				// alert('加入我们')
				// 加入我们 show
				$('#gtco-welcome').show()
				// 了解详情 hide
				$('#gtco-special-dishes').hide()
				// 首页内容
				$('#hero,#gtco-testimonial').hide()
				// 客户案例
				$('#gtco-reservation').hide()
			}
		})
	})
	// #gtco-special-dishes 了解详情
	/*
	$('.elementModule').click(function(){
		// 了解详情显示
		alert('了解详情显示')
		$('#gtco-special-dishes').show()
		$('#hero').hide()
	})
	*/
	if(window.location.href.indexOf("#gtco-special-dishes") > 1){
		$('#gtco-special-dishes').show()
		// 首页内容
		$('#hero,#gtco-testimonial').hide()
		
		$(document).scroll(function() {
			var scroH = $(document).scrollTop();  //滚动高度
			var viewH = $(window).height();  //可见高度 
			var contentH = $(document).height();  //内容高度
			console.log('scroH',scroH)
			// $('.learnMoreSpecialDishes .box2').offset().top

			if(scroH > $('.learnMoreSpecialDishes .box2').offset().top ){
				$('.learnMoreSpecialDishes .box2').addClass('active')
			}
			if(scroH < 657 ){
				$('.learnMoreSpecialDishes .box2').removeClass('active');
			}
			
		})
	}
	if($(window).width()  < 1870 ){
// 		$('.smartWaterMarketing ul li').each(function(i){
// 			$(this).click(function(){
// 				$('.smartWaterMarketing ul li').removeClass('active');
// 				$(this).addClass('active').siblings().removeClass('active');
// 				var elementModuleTop = $('.elementModule').eq(i).offset().top-80
// 				var smartWaterMarketingTop = $('.smartWaterMarketing').offset().top
// 				 $('body,html').animate({scrollTop: elementModuleTop },400);
// 				if(i==0){$('.psos').css({ 'top': elementModuleTop-smartWaterMarketingTop +200 + "px" });}
// 				if(i==1){$('.psos').css({ 'top': elementModuleTop-smartWaterMarketingTop +300 + "px" });}
// 				if(i==2){$('.psos').css({ 'top': elementModuleTop-smartWaterMarketingTop +400 + "px" });}
// 				if(i==3){$('.psos').css({ 'top': elementModuleTop-smartWaterMarketingTop +500 + "px" });}
// 				if(i==4){$('.psos').css({ 'top': elementModuleTop-smartWaterMarketingTop +600 + "px" });}
// 				if(i==5){$('.psos').css({ 'top': elementModuleTop-smartWaterMarketingTop +700 + "px" });}
// 			})
// 		})
		$('.smartWaterMarketing ul li').each(function(i){
			$(this).click(function(){
				$('.smartWaterMarketing ul li').removeClass('active');
				$(this).addClass('active').siblings().removeClass('active');
				var elementModuleTop = $('.elementModule').eq(i).offset().top-80
				var smartWaterMarketingTop = $('.smartWaterMarketing').offset().top
				 $('body,html').animate({scrollTop: elementModuleTop },400);
				
				if(i==0){$('.psos').animate({ 'top': elementModuleTop-smartWaterMarketingTop +200 + "px" },400);}
				if(i==1){$('.psos').animate({ 'top': elementModuleTop-smartWaterMarketingTop +300 + "px" },400);}
				if(i==2){$('.psos').animate({ 'top': elementModuleTop-smartWaterMarketingTop +400 + "px" },400);}
				if(i==3){$('.psos').animate({ 'top': elementModuleTop-smartWaterMarketingTop +450 + "px" },400);}
				if(i==4){$('.psos').animate({ 'top': elementModuleTop-smartWaterMarketingTop +500 + "px" },400);}
				if(i==5){$('.psos').animate({ 'top': elementModuleTop-smartWaterMarketingTop +550 + "px" },400);}
				
			})
		})
		
	}
	var elementModuleToparr2 = []
	var smartWaterMarketingTop22 = $('.smartWaterMarketing').offset().top
	$('.elementModule').each(function(index, value) {
		var elementModuleTop = $('.elementModule').eq(index).offset().top - smartWaterMarketingTop22
		elementModuleToparr2.push(elementModuleTop)
		console.log('elementModuleToparr2',elementModuleToparr2)
	});
	$(document).scroll(function() {
		var scroH = $(document).scrollTop();  //滚动高度
		if(scroH < 400 ){
			$('.psos').css({'position':'sticky','top':'0','left':'0'})
		}
		elementModuleToparr2.forEach(function(event,index){
			var math = Math.ceil(elementModuleToparr[index])-100
			if(scroH > math ){
				$('.psos').css({'top': math })
			}
		})

	})
	
})


