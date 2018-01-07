(function(i,f,r){var g={},s=!0,p={},u={speed:800,timeout:5E3,autoScroll:!1,pauseOnHover:!1,effect:"scrollVert3d",perspective:1E3};i.jqBoxSlider=g;g.init=function(a){var b=f.extend({},u,a),d=g.slideAnimator(b.effect);return this.each(function(){var a=f(this),h=a.children(),e=f.extend({},b);a.data("bssettings",e);e.slideAnimator=d;e.slideAnimator.initialize(a,h,e);v(a,e);if(e.autoScroll&&(e.autointv=setInterval(function(){n(a)},e.timeout+e.speed),e.pauseOnHover))a.on("hover",o)})};g.playPause=function(){return this.each(function(){o.call(f(this))})};
g.showSlide=function(a){a=parseInt(a,10);return this.each(function(){var b=f(this);q(b);n(b,a)})};g.registerAnimator=function(a,b){f.each(a.split(","),function(a,c){p[c]=b});b._cacheOriginalCSS=w;"function"===typeof b.configure&&b.configure(s,x)};g.slideAnimator=function(a){if("object"===typeof p[a])return p[a];throw Error("The slide animator for the "+a+" effect has not been registered");};g.option=function(a,b){return"undefined"===typeof b?(this.data("bssettings")||{})[a]:this.each(function(){var d=
f(this),c=d.data("bssettings")||{};c[a]=b;q(d,c);"effect"===a?(c.slideAnimator.destroy(d,c),c.slideAnimator=g.slideAnimator(b),c._slideFilter=null,c.bsfaceindex=0,c.slideAnimator.initialize(d,d.children(),c)):"function"===typeof c.slideAnimator.reset&&c.slideAnimator.reset(d,c)})};g.destroy=function(){return this.each(function(){var a=f(this),b=(a.data()||{}).bssettings;b&&"object"===typeof b.slideAnimator&&(b.autointv&&clearInterval(b.autointv),b.slideAnimator.destroy(a,b))})};var v=function(a,b){var d=
f();null!=b.next&&(d=d.add(f(b.next).on("click",{reverse:!1},t)));null!=b.prev&&(d=d.add(f(b.prev).on("click",{reverse:!0},t)));null!=b.pause&&(d=d.add(f(b.pause).on("click",y)));d.data("bsbox",a)},t=function(a){var b=f(this).data("bsbox");q(b);n(b,r,a.data.reverse);a.preventDefault()},y=function(a){var b=f(this),d=b.data("bsbox");o.call(d);b.toggleClass("paused");a.preventDefault()},o=function(a,b,d){var c=f(this);d||(d=c.data("bssettings"));if(null!=d.autointv||b)if(d.autointv=clearInterval(d.autointv),
!b)return;d.autointv=setInterval(function(){n(c)},d.timeout+d.speed)},n=function(a,b,d){var c=a.data("bssettings"),h=a.children(),e,k,j,g;null!=c._slideFilter&&(h="function"===typeof c._slideFilter?h.filter(function(b){return c._slideFilter.call(h,b,c)}):h.filter(c.slideFilter));e=c.bsfaceindex||0;k=z(e,h.length,d,b);a.hasClass("jbs-in-motion")||-1===k||(j=h.eq(e),g=h.eq(k),a.addClass("jbs-in-motion"),"function"===typeof c.onbefore&&c.onbefore.call(a,j,g,e,k),f.extend(c,c.slideAnimator.transition(f.extend({$box:a,
$slides:h,$currSlide:j,$nextSlide:g,reverse:d,currIndex:e,nextIndex:k},c))),setTimeout(function(){a.removeClass("jbs-in-motion");"function"===typeof c.onafter&&c.onafter.call(a,j,g,e,k)},c.speed),c.bsfaceindex=k)},q=function(a,b){b||(b=a.data("bssettings")||{});b.autoScroll&&o.call(a,r,!0,b)},z=function(a,b,d,c){null==c&&(c=d?0>a-1?b-1:a-1:a+1<b?a+1:0);return c===a||c>=b||0>c?-1:c},w=function(a,b,d,c){c="position top left display overflow width height".split(" ").concat(c||[]);d.origCSS||(d.origCSS=
{});d.origCSS[b]||(d.origCSS[b]={});f.each(c,function(h,e){d.origCSS[b][e]=a.css(e)})},x=function(){var a=document.body.style,b="";"webkitTransition"in a&&(b="-webkit-");"MozTransition"in a&&(b="-moz-");s="webkitPerspective"in a||"MozPerspective"in a||"perspective"in a;return b}();f.fn.boxSlider=function(a){return"string"===typeof a&&"function"===typeof g[a]?g[a].apply(this,Array.prototype.slice.call(arguments,1)):g.init.apply(this,arguments)};i.jqBoxSlider.registerAnimator("blindDown,blindLeft",
function(){var a=function(b,a){return this.get(b)!==a.$blinds.get(0)},b=function(b){return b.attr("src")||b.find("img").attr("src")},d=function(b){switch(b.effect){case "blindDown":return{top:"100%"};case "blindLeft":return{width:"0px"}}},c=function(a){var e={backgroundImage:"url("+b(a.$nextSlide)+")"};switch(a.effect){case "blindDown":e.top="0px";break;case "blindLeft":e.width=a.blindSize}return e};return{initialize:function(d,e,c){var j=f(document.createElement("div")),g=b(e.eq(0)),l,m=0;c.blindCount||
(c.blindCount=10);c.blindSpeed=c.speed;c.blindintv=c.speed/c.blindCount;c.speed+=c.blindintv*c.blindCount;c.blindSize=d.width()/c.blindCount;this._cacheOriginalCSS(d,"box",c);for(this._cacheOriginalCSS(e,"slides",c);m<c.blindCount;++m)l=m*c.blindSize,f(document.createElement("div")).css({position:"absolute",top:"0px",left:l+"px",width:c.blindSize+"px",height:"100%",backgroundSize:e.width()+'px 100%',backgroundImage:"url("+g+")",backgroundPosition:-l+"px 0px"}).appendTo(j);d.css("position","relative");d.css({height:e.css("height"),
overflow:"hidden"});e.css({zIndex:1,position:"absolute",top:0,left:0});j.css({position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:2}).appendTo(d);c.$blinds=j;c._slideFilter=a},transition:function(b){ console.log('a'); b.$box.height();var a=b.$blinds.children();b.$slides.hide();b.$nextSlide.show();a.each(function(a,c){(function(){var e=b.blindintv*a,g=f(c);setTimeout(function(){g.animate(d(b),b.blindSpeed)},e)})()});setTimeout(function(){ a.css(c(b));  console.log('z'); },b.speed)},destroy:function(b,a){ a.$blinds.remove(); 
b.css(a.origCSS.box);b.children().css(a.origCSS.slides);a.speed=a.blindSpeed;delete a.blindCount;delete a.blindSpeed;delete a.blindintv;delete a.$blinds;delete a.blindSize}}}());i.jqBoxSlider.registerAnimator("fade",function(){var a={initialize:function(b,d,c){a._cacheOriginalCSS(b,"box",c);a._cacheOriginalCSS(d,"slides",c);-1!=="static inherit".indexOf(b.css("position"))&&b.css("position","relative");b.css({height:d.eq(0).height(),overflow:"hidden"});d.css({position:"absolute",top:0,left:0}).filter(":gt(0)").hide()},
transition:function(b){b.$nextSlide.fadeIn(b.speed);b.$currSlide.fadeOut(b.speed)},destroy:function(b,a){b.children().css(a.origCSS.slides);b.css(a.origCSS.box)}};return a}());i.jqBoxSlider.registerAnimator("scrollVert3d,scrollHorz3d",function(){var a={},b=!1,d="";a.configure=function(a,c){b=a;d=c};a.initialize=function(c,e,f){var g=c.parent(),i=g.innerWidth(),l=g.innerHeight(),m={position:"absolute",top:0,left:0,width:i,height:l};a._cacheOriginalCSS(c,"box",f,[d+"transform",d+"transition",d+"transform-style"]);
a._cacheOriginalCSS(e,"slides",f,[d+"transform"]);a._cacheOriginalCSS(e,"viewport",f,[d+"perspective"]);e.css(m);c.css(m);-1!=="static inherit".indexOf(g.css("position"))&&g.css("position","relative");b?(f.translateZ="scrollVert3d"===f.effect?l/2:i/2,f.bsangle=0,g.css(d+"perspective",f.perspective),g.css("overflow","visible"),c.css(d+"transform-style","preserve-3d"),c.css(d+"transform","translate3d(0, 0, -"+f.translateZ+"px)"),e.eq(0).css(d+"transform","rotate3d(0, 1, 0, 0deg) translate3d(0, 0, "+
f.translateZ+"px)"),setTimeout(function(){a.reset(c,f)},10)):e.filter(":gt(0)").hide()};a.reset=function(b,a){b.css(d+"transition",d+"transform "+(a.speed/1E3+"s"))};a.transition=function(a){var e=a.bsangle+(a.reverse?90:-90),f="scrollVert3d"===a.effect;if(b)return 0===e&&(e=a.reverse?360:-360),a.$currSlide.css("z-index",1),a.$slides.filter(function(b){return a.currIndex!==b}).css(d+"transform","none").css("display","none"),a.$nextSlide.css(d+"transform",c(e,f)+" translate3d(0, 0,"+a.translateZ+"px)").css({display:"block",
zIndex:2}),a.$box.css(d+"transform","translate3d(0, 0, -"+a.translateZ+"px) rotate3d("+(f?"1, 0, 0, ":"0, 1, 0, ")+e+"deg)"),360===Math.abs(e)&&(a.$box.css(d+"transform","translate3d(0, 0, -"+a.translateZ+"px)"),e=0),{bsangle:e};a.$slides.filter(function(b){return a.currIndex!==b}).hide();a.$currSlide.fadeOut(a.speed);a.$nextSlide.fadeIn(a.speed)};a.destroy=function(a,b){var c=a.children(),d=a.parent();b.origCSS&&(a.css(b.origCSS.box),c.css(b.origCSS.slides),d.css(b.origCSS.viewport),delete b.bsangle,
delete b.translateZ)};var c=function(a,b){switch(a){case 360:case -360:return"rotate3d(0, 1, 0, 0deg)";case 90:case -270:return"rotate3d("+(b?"1, 0, 0,":"0, 1, 0,")+" -90deg)";case 180:case -180:return"rotate3d("+(b?"1, 0, 0,":"0, 1, 0,")+" 180deg)";case 270:case -90:return"rotate3d("+(b?"1, 0, 0,":"0, 1, 0,")+" 90deg)"}};return a}());i.jqBoxSlider.registerAnimator("scrollVert,scrollHorz",function(){var a={initialize:function(b,d,c){var f=b.width(),e=d.eq(0).height();a._cacheOriginalCSS(b,"box",c);
a._cacheOriginalCSS(d,"slides",c);-1!=="static inherit".indexOf(b.css("position"))&&b.css("position","relative");b.css({height:e,overflow:"hidden"});d.css({position:"absolute",top:0,left:0,width:f,height:e}).filter(":gt(0)").hide()},transition:function(a){var d=a.$box,c=a.reverse,g={},e={};"scrollVert"===a.effect?(e.top=(c?d.height():-d.height())+"px",g.top=-parseInt(e.top,10)+"px",d={top:"0px"}):(e.left=(c?d.width():-d.width())+"px",g.left=-parseInt(e.left,10)+"px",d={left:"0px"});a.$nextSlide.css(f.extend(e,
{display:"block"})).animate(d,a.speed);a.$currSlide.animate(g,a.speed)},destroy:function(a,d){a.children().css(d.origCSS.slides);a.css(d.origCSS.box)}};return a}())})(window,jQuery||Zepto);
