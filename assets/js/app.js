//Dev Anim
var devIcon = document.getElementsByClassName('devIcon')[0];
var devText = document.getElementsByClassName('devText')[0];
var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');

appMenuOptionsDiv[0].addEventListener('mouseenter',function(){
  devIcon.style.marginLeft = '18%';
  devIcon.style.transform = 'rotate(360deg)'
  setTimeout(function(){
    devText.style.opacity = '1';
  },1);
});

appMenuOptionsDiv[0].addEventListener('mouseleave',function(){
  devIcon.style.marginLeft = '50%';
  devText.style.opacity = '0';
  devIcon.style.transform = 'rotate(0deg)'
});
//CMS anim
var cmsIcon = document.getElementsByClassName('cmsIcon')[0];
var cmsText = document.getElementsByClassName('cmsText')[0];
var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');

appMenuOptionsDiv[1].addEventListener('mouseenter',function(){
  cmsIcon.style.marginLeft = '18%';
  setTimeout(function(){
    cmsText.style.opacity = '1';
  },10);
});

appMenuOptionsDiv[1].addEventListener('mouseleave',function(){
  cmsIcon.style.marginLeft = '50%';
  cmsText.style.opacity = '0';
});
//Speed Anim
var speedIcon = document.getElementsByClassName('speedIcon')[0];
var speedText = document.getElementsByClassName('speedText')[0];
var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');

appMenuOptionsDiv[2].addEventListener('mouseenter',function(){
  speedIcon.style.marginLeft = '18%';
  setTimeout(function(){
    speedText.style.opacity = '1';
  },10);
});

appMenuOptionsDiv[2].addEventListener('mouseleave',function(){
  speedIcon.style.marginLeft = '50%';
  speedText.style.opacity = '0';
});
//contact Anim
var contactIcon = document.getElementsByClassName('contactIcon')[0];
var contactText = document.getElementsByClassName('contactText')[0];
var appMenuOptionsDiv = document.getElementsByClassName('appMenuOptionsDiv');

appMenuOptionsDiv[3].addEventListener('mouseenter',function(){
  contactIcon.style.marginLeft = '18%';
  setTimeout(function(){
    contactText.style.opacity = '1';
  },10);
});

appMenuOptionsDiv[3].addEventListener('mouseleave',function(){
  contactIcon.style.marginLeft = '50%';
  contactText.style.opacity = '0';
});
// appMenu Selection
// appMenu Selection
// var appMenuOptionsDiv existing in code
var contentOne = document.getElementsByClassName('contentOne')[0];
var contentTwo = document.getElementsByClassName('contentTwo')[0];
var contentThree = document.getElementsByClassName('contentThree')[0];
var contentFour = document.getElementsByClassName('contentFour')[0];
var headingTop = document.getElementsByClassName('headingTop')[0];
var headingBot = document.getElementsByClassName('headingBot')[0];

appMenuOptionsDiv[0].addEventListener('click',function(){
  contentOne.style.display = 'block';
  contentTwo.style.display = 'none';
  contentThree.style.display = 'none';
  contentFour.style.display = 'none';
  headingTop.innerHTML = 'WEB';
  headingBot.innerHTML = 'DEVELOPMENT';
});

appMenuOptionsDiv[1].addEventListener('click',function(){
  contentOne.style.display = 'none';
  contentTwo.style.display = 'block';
  contentThree.style.display = 'none';
  contentFour.style.display = 'none';
  headingTop.innerHTML = 'CMS';
  headingBot.innerHTML = 'DEVELOPMENT';
});

appMenuOptionsDiv[2].addEventListener('click',function(){
  contentOne.style.display = 'none';
  contentTwo.style.display = 'none';
  contentThree.style.display = 'block';
  contentFour.style.display = 'none';
  headingTop.innerHTML = 'SPEED';
  headingBot.innerHTML = 'OPTIMIZATION';
});

appMenuOptionsDiv[3].addEventListener('click',function(){
  contentOne.style.display = 'none';
  contentTwo.style.display = 'none';
  contentThree.style.display = 'none';
  contentFour.style.display = 'block';
  headingTop.innerHTML = '&nbsp';
  headingBot.innerHTML = 'CONTACT US';
});

// appmenu on click goes gray
// appmenu on click goes gray
// appmenu on click goes gray
appMenuOptionsDiv[0].addEventListener('click',function(){
  appMenuOptionsDiv[0].style.background = "rgb(243,37,37)";
  appMenuOptionsDiv[1].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[2].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[3].style.background = "rgb(17,17,17)";
});
appMenuOptionsDiv[1].addEventListener('click',function(){
  appMenuOptionsDiv[1].style.background = "rgb(243,37,37)";
  appMenuOptionsDiv[0].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[2].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[3].style.background = "rgb(17,17,17)";
});
appMenuOptionsDiv[2].addEventListener('click',function(){
  appMenuOptionsDiv[2].style.background = "rgb(243,37,37)";
  appMenuOptionsDiv[1].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[0].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[3].style.background = "rgb(17,17,17)";
});
appMenuOptionsDiv[3].addEventListener('click',function(){
  appMenuOptionsDiv[3].style.background = "rgb(243,37,37)";
  appMenuOptionsDiv[1].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[2].style.background = "rgb(17,17,17)";
  appMenuOptionsDiv[0].style.background = "rgb(17,17,17)";
});

// searchLayer anim
// searchLayer anim
// searchLayer anim
var searchIcon = document.getElementsByClassName('searchIcon')[0];
var SearchDivLayer = document.getElementsByClassName('SearchDivLayer')[0];
var exitButton = document.getElementsByClassName('exitButton')[0];

searchIcon.addEventListener('click',function(){
  SearchDivLayer.className += ' SearchDivLayerAnimOpen';
  setTimeout(function(){
     SearchDivLayer.style.width = '100%';
     SearchDivLayer.className = ' SearchDivLayer';
   }, 1000);
})

exitButton.addEventListener('click',function(){
  SearchDivLayer.className += ' SearchDivLayerAnimClose';
  setTimeout(function(){
     SearchDivLayer.style.width = '0';
     SearchDivLayer.className = ' SearchDivLayer';
   }, 1000);
})
