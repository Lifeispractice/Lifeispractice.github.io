  
var width0822 = $(window).width()
var height0822 = $(window).height()
alert(`当前网站信息 屏幕宽度 ${width0822} 屏幕高度 ${height0822} 更新时间 16-04 `)


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
