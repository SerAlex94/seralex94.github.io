!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var i,e=86400,s=3600,a={callback:null,step:null,stepCount:1,captionSize:0,countdown:!0,countdownAlertLimit:10,displayCaptions:!1,displayDays:0,displayHours:!0,fontFamily:"Verdana, sans-serif",fontSize:0,lang:"en",languages:{},seconds:0,start:!0,theme:"white",width:25,height:30,gap:11,vals:[0,0,0,0,0,0,0,0,0],limits:[9,9,9,2,9,5,9,5,9],iSec:8,iHour:4,tickTimeout:1e3,intervalId:null,tickCount:0},n={start:function(i){var e;i&&(l.call(this,i),e=setTimeout(r.bind(this),1e3),this.data("ttStartTime",t.now()),this.data("intervalId",e))},stop:function(){var t=this.data();return t.intervalId&&(clearTimeout(t.intervalId),this.data("intervalId",null)),t},reset:function(t){var i=n.stop.call(this),e=void 0===t?i.seconds:t;this.find("div").css({backgroundPosition:"left center"}),this.find("ul").parent().removeClass("timeTo-alert"),l.call(this,e,!0)}},o={en:{days:"дней",hours:"часов",min:"минут",sec:"секунд"},ru:{days:"дней",hours:"часов",min:"минут",sec:"секунд"},ua:{days:"днiв",hours:"годин",min:"хвилин",sec:"секунд"},de:{days:"Tag",hours:"Uhr",min:"Minuten",sec:"Secunden"},fr:{days:"jours",hours:"heures",min:"minutes",sec:"secondes"},sp:{days:"días",hours:"horas",min:"minutos",sec:"segundos"},it:{days:"giorni",hours:"ore",min:"minuti",sec:"secondi"},nl:{days:"dagen",hours:"uren",min:"minuten",sec:"seconden"},no:{days:"dager",hours:"timer",min:"minutter",sec:"sekunder"},pt:{days:"dias",hours:"horas",min:"minutos",sec:"segundos"},tr:{days:"gün",hours:"saat",min:"dakika",sec:"saniye"}};function l(i,a){var n,o,l,d,c,u,h,p,f,m=this.data(),y=this.find("ul"),g=!1;if(m.vals&&0!==y.length){for(i||(i=m.seconds),m.intervalId&&(g=!0,clearTimeout(m.intervalId)),o=(n=Math.floor(i/e))*e,o+=(l=Math.floor((i-o)/s))*s,c=i-(o+=60*(d=Math.floor((i-o)/60))),u=(n<100?"0"+(n<10?"0":""):"")+n+(l<10?"0":"")+l+(d<10?"0":"")+d+(c<10?"0":"")+c,h=m.vals.length-1,p=u.length-1;h>=0;h-=1,p-=1)f=parseInt(u.substr(p,1),10),m.vals[h]=f,y.eq(h).children().html(f);(g||a)&&(m.ttStartTime=t.now(),m.intervalId=setTimeout(r.bind(this),1e3),this.data("intervalId",m.intervalId))}}function r(i){var e,s,a,n,o,l,d=this,c=this.find("ul"),u=this.data();if(!u.vals||0===c.length)return u.intervalId&&(clearTimeout(u.intervalId),this.data("intervalId",null)),void(u.callback&&u.callback());void 0===i&&(i=u.iSec),this.data("tickCount",u.tickCount+1),e=u.vals[i],s=c.eq(i),a=s.children(),n=u.countdown?-1:1,a.eq(1).html(e),e+=n,"function"==typeof u.step&&u.tickCount%u.stepCount==0&&(this.data("tickCount",0),u.step()),i===u.iSec&&(o=u.tickTimeout,l=t.now()-u.ttStartTime,u.sec+=n,o+=Math.abs(u.seconds-u.sec)*o-l,u.intervalId=setTimeout(r.bind(this),o)),e<0||e>u.limits[i]?(e<0?(e=u.limits[i],i===u.iHour&&u.displayDays>0&&0===u.vals[i-1]&&(e=3)):e=0,i>0&&r.call(this,i-1)):!u.countdown&&i===u.iHour&&u.displayDays>0&&2===u.vals[i-1]&&3===u.vals[i]&&(e=0,r.call(this,i-1)),a.eq(0).html(e),t.support.transition?(s.addClass("transition"),s.css({top:0}),setTimeout(function(){s.removeClass("transition"),a.eq(1).html(e),s.css({top:"-"+u.height+"px"}),n>0||i!==u.iSec||(u.sec===u.countdownAlertLimit&&c.parent().addClass("timeTo-alert"),0===u.sec&&(c.parent().removeClass("timeTo-alert"),u.intervalId&&(clearTimeout(u.intervalId),d.data("intervalId",null)),"function"==typeof u.callback&&u.callback()))},410)):s.stop().animate({top:0},400,i!==u.iSec?null:function(){a.eq(1).html(e),s.css({top:"-"+u.height+"px"}),n>0||i!==u.iSec||(u.sec===u.countdownAlertLimit?c.parent().addClass("timeTo-alert"):0===u.sec&&(c.parent().removeClass("timeTo-alert"),u.intervalId&&(clearTimeout(u.intervalId),d.data("intervalId",null)),"function"==typeof u.callback&&u.callback()))}),u.vals[i]=e}return void 0===t.support.transition&&(t.support.transition=void 0!==(i=(document.body||document.documentElement).style).transition||void 0!==i.WebkitTransition||void 0!==i.MozTransition||void 0!==i.MsTransition||void 0!==i.OTransition),t.fn.timeTo=function(){var i,r,d,c,u,h,p,f,m,y={},g=t.now();for(i=0;i<arguments.length;i+=1)r=arguments[i],0===i&&"string"==typeof r?c=r:"object"==typeof r?"function"==typeof r.getTime?y.timeTo=r:y=t.extend(y,r):"function"==typeof r?y.callback=r:(d=parseInt(r,10),isNaN(d)||(y.seconds=d));if(y.timeTo)y.timeTo.getTime?u=y.timeTo.getTime():"number"==typeof y.timeTo&&(u=y.timeTo),y.seconds=u>g?Math.floor((u-g)/1e3):0;else if(y.time||!y.seconds)if((u=y.time)||(u=new Date),"object"==typeof u&&u.getTime)y.seconds=u.getHours()*s+60*u.getMinutes()+u.getSeconds(),y.countdown=!1;else if("string"==typeof u){for(p=u.split(":"),f=0,m=1;p.length;)f+=p.pop()*m,m*=60;y.seconds=f,y.countdown=!1}return!1!==y.countdown&&y.seconds>e&&void 0===y.displayDays?(h=Math.floor(y.seconds/e),y.displayDays=(h<10?1:h<100&&2)||3):!0===y.displayDays?y.displayDays=3:y.displayDays&&(y.displayDays=y.displayDays>0?Math.floor(y.displayDays):3),this.each(function(){var i,e,s,r,d,u,h,p,f,m,g,v,T,w,I,S,x,b,k,C,M,D=t(this),z=D.data();if(z.intervalId&&(clearInterval(z.intervalId),z.intervalId=null),z.vals)"reset"!==c&&t.extend(z,y);else{if(e=z.opt?z.options:y,i=Object.keys(a).reduce(function(t,i){return Array.isArray(a[i])?t[i]=a[i].slice(0):t[i]=a[i],t},{}),(z=t.extend(i,e)).options=e,z.height=Math.round(100*z.fontSize/93)||z.height,z.width=Math.round(.8*z.fontSize+.13*z.height)||z.width,z.displayHours=!(!z.displayDays&&!z.displayHours),r={fontFamily:z.fontFamily},z.fontSize>0&&(r.fontSize=z.fontSize+"px"),d=z.languages[z.lang]||o[z.lang],D.addClass("timeTo").addClass("timeTo-"+z.theme).css(r),u='<ul style="left:'+Math.round(z.height/10)+"px; top:-"+z.height+'px"><li>0</li><li>0</li></ul></div>',p='<div class="first"'+(h=z.fontSize?' style="width:'+z.width+"px; height:"+z.height+'px;"':' style=""')+">"+u,f="<div"+h+">"+u,m="<span>:</span>",g=Math.round(2*z.width+3),T=(v=z.captionSize||z.fontSize&&Math.round(.43*z.fontSize))?"font-size:"+v+"px;":"",w=v?' style="'+T+'"':"",I=(z.displayCaptions?(z.displayHours?'<figure style="max-width:'+g+'px">$1<figcaption'+w+">"+d.hours+"</figcaption></figure>"+m:"")+'<figure style="max-width:'+g+'px">$1<figcaption'+w+">"+d.min+"</figcaption></figure>"+m+'<figure style="max-width:'+g+'px">$1<figcaption'+w+">"+d.sec+"</figcaption></figure>":(z.displayHours?"$1"+m:"")+"$1"+m+"$1").replace(/\$1/g,p+f),z.displayDays>0){for(S=.4*z.fontSize||a.gap,x=p,s=z.displayDays-1;s>0;s-=1)x+=1===s?f.replace('">',"margin-right:"+Math.round(S)+'px">'):f;I=(z.displayCaptions?'<figure style="width:'+Math.round(z.width*z.displayDays+S+4)+'px">$1<figcaption style="'+T+"padding-right:"+Math.round(S)+'px">'+d.days+"</figcaption></figure>":"$1").replace(/\$1/,x)+I}D.html(I)}if((b=D.find("div")).length<z.vals.length){for(k=z.vals.length-b.length,C=z.vals,M=z.limits,z.vals=[],z.limits=[],s=0;s<b.length;s+=1)z.vals[s]=C[k+s],z.limits[s]=M[k+s];z.iSec=z.vals.length-1,z.iHour=z.vals.length-5}z.sec=z.seconds,D.data(z),c&&n[c]?n[c].call(D,z.seconds):z.start?n.start.call(D,z.seconds):l.call(D,z.seconds)})},t});