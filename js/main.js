var identification=0
var width0822 = $(window).width()
var height0822 = $(window).height()
alert(`当前网站信息 屏幕宽度 ${width0822} 屏幕高度 ${height0822} 更新时间 周三 10点32 `)

$(function(){
	
	if(window.location.pathname == '/tags/'){
		var elementModuleToparr = []
		$('.elementModule').each(function(index, value) {
			var elementModuleTop = $('.elementModule').eq(index).offset().top-200
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
			if($(window).width()  > 1870 ){
				
			}
			elementModuleToparr.forEach(function(event,index){
					if(scroH > Math.ceil(elementModuleToparr[index]) ){
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
			// $('.learnMoreSpecialDishes .box2').offset().top $('.mastfoot').offset().top

			if(scroH > $('.learnMoreSpecialDishes .box2').offset().top ){
				$('.learnMoreSpecialDishes .box2').addClass('active')
			}
			if(scroH < 657 ){
				$('.learnMoreSpecialDishes .box2').removeClass('active');
			}
			
		})
	}
	if($(window).width()  < 1870 ){
		// 点击的时候滚动检测不执行
		// var num = 0
		// 点击的时候 num = 1 滚动检测 num = 1 

		$('.smartWaterMarketing ul li').each(function(i){
			$(this).click(function(){
				// num = 1
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
		
		var elementModuleToparr2 = []
		var smartWaterMarketingTop22 = $('.smartWaterMarketing').offset().top
		$('.elementModule').each(function(index, value) {
			
			if(index == 3 || index == 4 ){
				var elementModuleTop = $('.elementModule').eq(index).offset().top - smartWaterMarketingTop22 + 160
			}if(index == 5 ){
				var elementModuleTop = $('.elementModule').eq(index).offset().top - smartWaterMarketingTop22 + 160
			}else{
				var elementModuleTop = $('.elementModule').eq(index).offset().top - smartWaterMarketingTop22
			}
			elementModuleToparr2.push(elementModuleTop)
			console.log('elementModuleToparr2',elementModuleToparr2)
		});
		$(document).scroll(function() {
			// num = 1 只是滚动
			var scroH = $(document).scrollTop();  //滚动高度
			if(scroH < 400 ){
				$('.psos').css({'position':'sticky','top':'0','left':'0'})
			}
			elementModuleToparr2.forEach(function(event,index){
				var math = Math.ceil(elementModuleToparr[index])
				if(scroH > math ){
					$('.psos').css({'top': math })
				}
			})
			
			
		})
		
	}
	
	
})

 // body宽高
  // let cw = 1920,ch = 1080
  let cw = 1920,ch = 935
  let body = document.querySelector('body')
  body.style.width = `${cw}px`
  body.style.height = `${ch}px`

  // 对body进行缩放
  function windowResize() {
    // 窗口宽高
    let w = window.innerWidth, h = window.innerHeight
    // 缩放比例
    let r = w / cw < h / ch ? w / cw : h / ch

    body.style.transform = `scale( ${r})`
    // 因为scale是以body的原中心点为基准进行缩放，所以缩放之后需要调整外边距，使其位于窗口的中心位置
    body.style.marginLeft = (-(cw - r * cw) / 2 + (w - r * cw) / 2) + 'px'
    body.style.marginTop = (-(ch - r * ch) / 2 + (h - r * ch) / 2) + 'px'
    body.style.marginBottom = (-(h>ch?h:ch - r * ch)) + 'px'
    body.style.marginRight = (-(w>cw?w:cw - r * cw)) + 'px'
  }

  if($(window).width()  < 1870 ){
	windowResize()
	// 监听窗口尺寸变化
	window.addEventListener('resize', windowResize);
	  //小屏幕导航定位 sticky
  	$('.psos').addClass('on').css({'position':'sticky','top':'0','left':'0'})
}
