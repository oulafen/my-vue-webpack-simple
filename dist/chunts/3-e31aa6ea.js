webpackJsonp([3,10],{11:function(e,t,n){var o,i;n(51),o=n(33);var a=n(47);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,i._scopeId="data-v-66a5f8f3",e.exports=o},18:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<t.length;i++){var r=t[i];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},19:function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=u[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(d(o.parts[a],t))}else{for(var r=[],a=0;a<o.parts.length;a++)r.push(d(o.parts[a],t));u[o.id]={id:o.id,refs:1,parts:r}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],a=i[0],r=i[1],d=i[2],s=i[3],c={css:r,media:d,sourceMap:s};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function i(e,t){var n=m(),o=h[h.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function d(e,t){var n,o,i;if(t.singleton){var d=g++;n=p||(p=r(t)),o=s.bind(null,n,d,!1),i=s.bind(null,n,d,!0)}else n=r(t),o=c.bind(null,n),i=function(){a(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function s(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function c(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},l=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=l(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=l(function(){return document.head||document.getElementsByTagName("head")[0]}),p=null,g=0,h=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=o(e);return n(i,t),function(e){for(var a=[],r=0;r<i.length;r++){var d=i[r],s=u[d.id];s.refs--,a.push(s)}if(e){var c=o(e);n(c,t)}for(var r=0;r<a.length;r++){var s=a[r];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete u[s.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},31:function(e,t,n){t=e.exports=n(18)(),t.push([e.i,".editor-box[data-v-66a5f8f3]{margin-top:40px}.mobile-editor[data-v-66a5f8f3]{background-color:#fff;border-radius:2px;overflow:hidden;border:1px solid #ccc;height:300px}",""])},33:function(e,t,n){"use strict";var o=n(39);n.n(o);t.default={data:function(){return{content:"",uploadUrl:"api/img"}},computed:{},mounted:function(){this.createEditor()},methods:{submit:function(){console.log(this.content)},createEditor:function(){var e=this;___E.config.happy=["http://www.fuhaodq.com/fhimg/1/bqfh0.png","http://www.fuhaodq.com/fhimg/1/bqfh5.png","http://www.fuhaodq.com/fhimg/1/bqfh9.png","http://www.fuhaodq.com/fhimg/1/bqfh13.png","http://www.fuhaodq.com/fhimg/1/bqfh17.png","http://www.fuhaodq.com/fhimg/1/bqfh22.png","http://www.fuhaodq.com/fhimg/1/bqfh26.png","http://www.fuhaodq.com/fhimg/1/bqfh30.png","http://www.fuhaodq.com/fhimg/1/bqfh34.png","http://www.fuhaodq.com/fhimg/1/bqfh38.png","http://www.fuhaodq.com/fhimg/1/bqfh40.png"];var t=new ___E("editorMobile");t.config.menus=["head","bold","color","quote","list","img","happy"],t.config.uploadImgUrl=e.uploadUrl,t.init();var n=t.$txt;n.on("blur",function(){var t=n.html();t!=e.content&&(e.content=t)})}},components:{}}},39:function(e,t){!function(e){e.___E_mod=function(t){var n=e.___E;null!=n&&t(n,e.Zepto)}}(window),function(e){var t=e.Zepto,n=e.___E,o="github.com/wangfupeng1988/wangEditor-mobile";if(null!=n){if(n.gitlink===o)return void alert("不得重复引用wangEditor的js文件");if(!n.gitlink||n.gitlink!==o)return void alert("window.___E 属性名已经被其他程序占用。wangEditor-mobile引用失败")}return null==t?void alert("wangEditor-mobile依赖于zepto，请先引用zepto.js"):document.createRange&&"function"==typeof document.createRange?void 0:void alert("当前浏览器不支持document.createRange，不能生成富文本编辑器")}(window),function(e,t){var n="github.com/wangfupeng1988/wangEditor-mobile",o=function(e){var n=this;n.$body=t("body");var o=t("#"+e);n.$textarea=o,n.checkTapTime=function(e,o){var i,a,r=e.type.toLowerCase(),d=!0;return r.indexOf("tap")<0?d:(e?(i=e.currentTarget||e.target,a=t(i)):a=n.$body,null==a.data("tapTime")?(a.data("tapTime",Date.now().toString()),d=!0):Date.now()-parseInt(a.data("tapTime"))<100?(e.preventDefault(),e.stopPropagation(),d=!1):(a.data("tapTime",Date.now().toString()),d=!0),d)},n.initDefaultConfig(),n.addTxt(),n.addMenus()};o.fn=o.prototype,o.fn.gitlink=n,o.log=function(t,n){e.console?n?console.log(t,n):console.log(t):(alert(t),n&&alert(n))},o.warn=function(t,n){e.console?n?console.warn(t,n):console.warn(t):(alert(t),n&&alert(n))},e.___E=o}(window,window.Zepto),window.___E_mod(function(e,t){}),window.___E_mod(function(e,t){var n=window.navigator.userAgent.toLowerCase();e.isAndroid=n.indexOf("android")>0,e.isUC=n.indexOf("ucbrowser")>0,e.agent=n}),window.___E_mod(function(e,t){e.config={menuColorValue:"red",menuQuoteStyle:{display:"block","border-left":"5px solid #d0e5f2",padding:"4px 0 4px 10px","background-color":"#f1f1f1",margin:"4px 0"},menus:["head","bold","color","quote","list","img","happy","check"],happy:["http://wangeditor.github.io/expressions/1.gif","http://wangeditor.github.io/expressions/2.gif","http://wangeditor.github.io/expressions/3.gif","http://wangeditor.github.io/expressions/4.gif","http://wangeditor.github.io/expressions/5.gif","http://wangeditor.github.io/expressions/6.gif","http://wangeditor.github.io/expressions/7.gif","http://wangeditor.github.io/expressions/8.gif","http://wangeditor.github.io/expressions/9.gif","http://wangeditor.github.io/expressions/10.gif","http://wangeditor.github.io/expressions/11.gif","http://wangeditor.github.io/expressions/12.gif","http://wangeditor.github.io/expressions/13.gif","http://wangeditor.github.io/expressions/14.gif","http://wangeditor.github.io/expressions/15.gif","http://wangeditor.github.io/expressions/16.gif","http://wangeditor.github.io/expressions/17.gif","http://wangeditor.github.io/expressions/18.gif","http://wangeditor.github.io/expressions/19.gif","http://wangeditor.github.io/expressions/20.gif"],uploadImgUrl:"",uploadTimeout:1e4,testHostname:"localhost",loadingImg:"http://images2015.cnblogs.com/blog/138012/201512/138012-20151208194759027-506651939.gif"}}),window.___E_mod(function(e,t){e.fn.initDefaultConfig=function(){var n=this,o=e.config,i=t.extend({},o);n.config=i}}),window.___E_mod(function(e,t){e.isAndroid,e.isUC}),window.___E_mod(function(e,t){e.fn.addTxt=function(){var e=this,n=e.$textarea,o=t.trim(n.val()),i=t('<div contentEditable="true" class="wangEditor-mobile-txt">'+o+"</div>"),a=t('<div class="wangEditor-mobile-modal-container"></div>');e.$txt=i,e.$modalContainer=a,e.insertEmpltyLink()}}),window.___E_mod(function(e,t){e.fn.addMenus=function(){var e=this,n=t('<div class="wangEditor-mobile-menu-container" contentEditable="false"></div>'),o=t('<div class="item-container"></div>'),i=t('<div class="tip"></div>');n.append(i),n.append(o),e.$menuContainer=n,e.$menuItemContainer=o,e.menus={},e.addMenuBold("bold"),e.addMenuHead("head"),e.addMenuColor("color"),e.addMenuQuote("quote"),e.addMenuList("list"),e.addMenuCheck("check"),e.addMenuHappy("happy"),e.addMenuImg("img")}}),window.___E_mod(function(e,t){e.fn.addMenuBold=function(e){var n=this,o=n.menus;o[e]={selected:!1,$trigger:t('<div><i class="icon-wangEditor-m-bold"></i></div>'),$wrap:t('<div class="item"></div>'),bindEvent:function(e){var t=this;t.$trigger.on("singleTap",function(e){n.checkTapTime(e,"bold")!==!1&&n.command("bold",!1,void 0,e)})},updateStyle:function(e){var t=this,n=t.$trigger;document.queryCommandState("bold")?(t.selected=!0,n.addClass("selected")):(t.selected=!1,n.removeClass("selected"))}}}}),window.___E_mod(function(e,t){e.fn.addMenuHead=function(e){var n=this,o=n.menus;o[e]={selected:!1,$trigger:t('<div><i class="icon-wangEditor-m-header"></i></div>'),$wrap:t('<div class="item"></div>'),bindEvent:function(e){var t=this;t.$trigger.on("singleTap",function(e){n.checkTapTime(e,"head")!==!1&&(t.selected?n.command("formatblock",!1,"p",e):n.command("formatblock",!1,"h3",e))})},updateStyle:function(e){var t=this,n=t.$trigger,o=document.queryCommandValue("formatblock");/^h\d{1}$/i.test(o)?(t.selected=!0,n.addClass("selected")):(t.selected=!1,n.removeClass("selected"))}}}}),window.___E_mod(function(e,t){e.fn.addMenuColor=function(e){var n=this,o=n.menus,i=n.config.menuColorValue;o[e]={selected:!1,$trigger:t('<div><i class="icon-wangEditor-m-brush"></i></div>'),$wrap:t('<div class="item"></div>'),bindEvent:function(e){var t=this,o=t.$trigger;o.on("singleTap",function(e){if(n.checkTapTime(e,"color")!==!1){var o=i;t.selected&&(o="#000"),n.command("forecolor",!1,o,e)}})},updateStyle:function(e){var t=this,n=t.$trigger,o=document.queryCommandValue("forecolor");"rgb(0, 0, 0)"!==o?(t.selected=!0,n.addClass("selected")):(t.selected=!1,n.removeClass("selected"))}}}}),window.___E_mod(function(e,t){e.fn.addMenuQuote=function(e){var n=this,o=n.menus,i=(n.$txt,n.config.menuQuoteStyle);o[e]={selected:!1,$trigger:t('<div><i class="icon-wangEditor-m-quote-left"></i></div>'),$wrap:t('<div class="item"></div>'),bindEvent:function(e){var o=this;o.$trigger.on("singleTap",function(e){if(n.checkTapTime(e,"quote")!==!1){var a,r,d,s=n.$focusElem;if(o.selected){if(a="BLOCKQUOTE"===s.get(0).nodeName?s:s.closest("blockquote"),0===a.length)return;r=a.text(),d=function(){var e=t("<p>"+r+"</p>");a.after(e),a.remove()},n.customCommand(!1,d,e)}else n.command("formatblock",!1,"blockquote",e),n.$txt.find("blockquote").each(function(e,n){var o=t(n),a="w_editor_quote_style",r=o.attr(a);null==r&&(o.css(i),o.attr(a,"1"))})}})},updateStyle:function(e){var t=this,n=t.$trigger,o=document.queryCommandValue("formatblock");/^blockquote$/i.test(o)?(t.selected=!0,n.addClass("selected")):(t.selected=!1,n.removeClass("selected"))}}}}),window.___E_mod(function(e,t){e.fn.addMenuList=function(e){var n=this,o=n.menus;o[e]={selected:!1,$trigger:t('<div><i class="icon-wangEditor-m-list-ul"></i></div>'),$wrap:t('<div class="item"></div>'),bindEvent:function(e){var t=this;t.$trigger.on("singleTap",function(e){n.checkTapTime(e,"list")!==!1&&(t.selected||n.$focusElem.removeClass("focus-elem"),n.command("InsertUnorderedList",!1,void 0,e))})},updateStyle:function(e){var t=this,n=t.$trigger;document.queryCommandState("InsertUnorderedList")?(t.selected=!0,n.addClass("selected")):(t.selected=!1,n.removeClass("selected"))}}}}),window.___E_mod(function(e,t){e.fn.addMenuCheck=function(e){var n=this,o=n.menus;o[e]={selected:!1,$trigger:t('<div><i class="icon-wangEditor-m-checkbox-checked"></i></div>'),$wrap:t('<div class="item"></div>'),bindEvent:function(e){var o=Date.now(),i=this;i.$trigger.on("singleTap",function(e){if(n.checkTapTime(e,"check")!==!1){var i=t('<input type="checkbox"/>'),a=t("<p></p>");a.append(i).append("&nbsp;&nbsp;"),i.on("singleTap",function(e){if(!(Date.now()-o<50)){o=Date.now();var n=t(e.target),i=n.is(":checked");n.prop("checked",!i),e.preventDefault(),e.stopPropagation()}});var r=function(){n.$focusElem.after(a)};n.customCommand(!1,r,e)}})},updateStyle:function(e){}}}}),window.___E_mod(function(e,t){e.fn.addMenuHappy=function(n){var o=this,i=o.$body,a=o.menus,r=o.config.happy,d=o.$txt;r.length>0&&0===r[0].indexOf("http://wangeditor.github.io/expressions")&&e.warn("正在使用wangEdior提供的免费表情图标，它们将从 github 下载，速度很慢！！！建议将表情图标重新配置，请参见文档说明"),a[n]={selected:!1,$trigger:t('<div><i class="icon-wangEditor-m-happy"></i></div>'),$wrap:t('<div class="item"</div>'),$modal:t('<div class="wangEditor-mobile-modal"></div>'),renderModal:function(){var e=this,n=e.$modal,a='<span class="command-link" commandValue="#{imgUrl}"><img src="#{imgUrl}"/></span>',d=[];t.each(r,function(e,t){d.push(a.replace(/#{imgUrl}/gi,t))}),n.append(d.join("")),i.append(n);var s=n.width();n.css("margin-left",(0-s)/2),n.on("click",".command-link",function(e){e.preventDefault()}),n.on("singleTap",".command-link",function(n){if(o.checkTapTime(n,"happy command-link")!==!1){var i=t(n.currentTarget),a=i.attr("commandValue");o.command("InsertImage",!1,a,n),e.hideModal()}})},showModal:function(){var e=this,t=e.$modal,n=i.get(0).scrollTop;t.show(),t.css({"margin-top":n+50+"px"});var o=function t(n){e.hideModal(),d.off("singleTap",t)};d.on("singleTap",o)},hideModal:function(){this.$modal.hide()},bindEvent:function(e){function t(){i.renderModal(),i.showModal()}function n(){i.showModal()}var i=this,a=i.$trigger;i.$modal;a.one("singleTap",function(e){o.checkTapTime(e,"happy one")!==!1&&o.customCommand(!0,t,e)}),a.on("singleTap",function(e){o.checkTapTime(e,"happy on")!==!1&&o.customCommand(!0,n,e)})},updateStyle:function(){}}}}),window.___E_mod(function(e,t){e.fn.addMenuImg=function(n){function o(t){c&&e.log(t)}var i=this,a=i.$body,r=(i.$txt,i.menus),d=e.isAndroid,s=e.isUC,c=!1,u="inputfile"+Math.random().toString().slice(2);r[n]={selected:!1,$trigger:function(){return t(d||s?'<div><i class="icon-wangEditor-m-picture"></i></div>':'<label for="'+u+'"><i class="icon-wangEditor-m-picture"></i></label>')}(),$wrap:t('<div class="item"</div>'),renderForm:function(){var e=["<form",'    enctype="multipart/form-data"','    method="post">','    <input id="'+u+'" type="file" accept="image/*">',"</form>"].join(""),n=t('<div style="display:none;"></div>');n.html(e),a.append(n)},bindEvent:function(e){function n(e,t){for(var n=window.atob(e.split(",")[1]),o=new ArrayBuffer(n.length),i=new Uint8Array(o),a=0;a<n.length;a++)i[a]=n.charCodeAt(a);return""!==t&&t||(t="image/png"),new Blob([o],{type:t})}var a=this,r=a.$trigger;a.renderForm();var d=t("#"+u);d.on("change",function(e){var a=i.config,r=a.uploadImgUrl||"",s=a.testHostname||"localhost",u=a.loadingImg,l=a.uploadTimeout||1e4;if(c=s===window.location.hostname,!window.FileReader||!window.FormData)return void alert("当前浏览器不支持html5中的 FileReader 和 FormData，无法上传图片");if(""===r)return void alert("没有配置 uploadImgUrl ，wangEditor 将无法上传图片。\n\n想要配置上传图片，请参见文档说明。\n\n不想要图片上传，可通过配置 menus 隐藏该功能。");var f=d[0].files||[];if(0!==f.length){var m=f[0],p=m.type||"",g=new FileReader,h=i.$focusElem;o("选中的文件为："+m.name),o("服务器端上传地址为："+r),g.onload=function(e){function a(){o("访问超时（配置的超时事件是："+l+"）");var e=t("#"+v);e.remove(),s.abort&&s.abort(),alert("上传超时，请重试"),"wangeditor.github.io"===location.hostname.toLowerCase()&&alert("提示：wangEditor官网demo没有后台服务，因此超时（该alert在实际项目中不会出现）")}var d,s,c,f,g=e.target.result||this.result,v="div"+Math.random().toString().slice(2),w="info"+Math.random().toString().slice(2);window.URL&&window.URL.createObjectURL?(d=window.URL.createObjectURL(m),h.after('<div class="previmg-container" id="'+v+'">   <p class="info" id="'+w+'">上传中...</p>\t<img src="'+d+'" style="opacity:0.2; max-width:100%;"/></div>')):(d=u,h.after('<div class="previmg-container" id="'+v+'">\t<img src="'+d+'" style="max-width:100%;"/></div>')),o("生成预览图片，src是："+d),s=new XMLHttpRequest,c=new FormData,o("准备上传文件..."),s.open("POST",r,!0),f=setTimeout(a,l),s.onload=function(){clearTimeout(f);var e,n,a,r=s.responseText,d=t("#"+v);o("服务器端的返回数据为："+r),0===r.indexOf("error|")?(e=r.split("|")[1],o("很遗憾，后台返回error，错误信息为："+e),alert("上传图片错误: \n"+e),d.remove()):(o("请确认以上图片是否有效，无效将无法显示在页面中"),o("准备下载该图片..."),t("#"+w).text("加载中..."),n=document.createElement("img"),n.src=r,n.onload=function(){o("下载完成，正式呈现在编辑区域"),a=t(n),a.css("max-width","100%"),d.after(a),d.remove(),i.saveSourceCode()},n.onerror=function(){o("图片加载失败，请确定这个url是否能成功得到图片："+r),alert("图片加载失败"),d.remove(),i.saveSourceCode()})},c.append("wangEditorMobileFile",n(g,p)),s.send(c)},g.readAsDataURL(m)}}),r.on("singleTap",function(e){function t(){d.trigger("click")}i.checkTapTime(e,"img")!==!1&&i.customCommand(!0,t,e)})},updateStyle:function(){}}}}),window.___E_mod(function(e,t){e.fn.renderTxt=function(){var e=this,t=e.$textarea,n=e.$txt,o=e.$modalContainer,i=e.$body;t.after(n),t.hide(),i.append(o)}}),window.___E_mod(function(e,t){e.fn.renderMenu=function(){var e=this,n=e.menus,o=e.$menuContainer,i=e.$menuItemContainer,a=(e.$txt,t('<div class="gap"></div>')),r=e.$body,d=e.config.menus;t.each(d,function(e,t){var o=n[t];if(null!=o){var r=o.$trigger,d=o.$wrap;r&&(d?(d.append(r),i.append(d)):i.append(r),i.append(a.clone()))}}),i.children().last().remove(),o.hide(),e.menuDisplayShow=!1,r.append(o)}}),window.___E_mod(function(e,t){e.fn.bindDocumentEvent=function(){var e=t(document),n=this,o=(n.$txt,Date.now());e.on("scroll",function(e){Date.now()-o<=50||(o=Date.now(),n.hideMenuContainer())})}}),window.___E_mod(function(e,t){e.fn.bindTxtEvent=function(){function e(){var e,o;n.saveSelection(),e=n.getWrapRangeElem(),e&&(o=t(e),o.addClass("focus-elem"),n.$focusElem=o),n.updateMenuStyle()}var n=this,o=n.$txt,i=n.$menuContainer,a=i.get(0),r=Date.now();o.on("focus",function(){n.isFocus=!0}),o.on("singleTap",function(i){if(n.checkTapTime(i,"$txt")!==!1&&n.isFocus){var a=t(i.target);if(n.eventTarget(a),a.hasClass("focus-elem"))return void n.hideMenuContainer();if("IMG"===a.get(0).nodeName)return void n.hideMenuContainer();if(a.get(0)===o.get(0))return void n.hideMenuContainer();n.setMenuContainerPosition();var r=n.$focusElem;r&&r.removeClass("focus-elem"),setTimeout(e,n.txtTapDelay),n.txtTapDelay=100,i.stopPropagation()}}),o.on("scroll",function(e){Date.now()-r<=50||(r=Date.now(),n.hideMenuContainer(),e.stopPropagation())}),o.on("keydown",function(e){n.hideMenuContainer();var t=o.html();8===e.keyCode&&/^<(\w+)[^<>]*><br><\/\1>$/.test(t)&&e.preventDefault()}),o.on("longTap, doubleTap",function(){n.hideMenuContainer()}),o.on("blur",function(e){n.isFocus=!1;var t=e.explicitOriginalTarget;return a.contains(t)?void e.preventDefault():(n.saveSourceCode(),void n.hideMenuContainer())})}}),window.___E_mod(function(e,t){e.fn.bindMenuContainerEvent=function(){var e=this,t=e.$menuContainer;t.on("tap",function(e){e.preventDefault(),e.stopPropagation()})}}),window.___E_mod(function(e,t){e.fn.bindMenuBtnEvent=function(){var e=this,n=e.menus;t.each(n,function(t,n){var o=n.bindEvent;o&&"function"==typeof o&&o.call(n,e)})}}),window.___E_mod(function(e,t){e.fn.eventTarget=function(e){var t=this;return null==e?t.$eventTargetElem:void(t.$eventTargetElem=e)},e.fn.saveSourceCode=function(){var e=this,t=e.$txt,n=e.$textarea,o="",i=t.clone(),a=i.find(".focus-elem");a.removeClass("focus-elem"),o=i.html(),o=o.replace(/\s?class=""/g,""),n.val(o)},e.fn.insertEmpltyLink=function(){var e=this,n=e.$txt,o=n.children();return 0===o.length?void n.append(t("<p><br></p>")):void("<br>"!==o.last().html()&&n.append(t("<p><br></p>")))}}),window.___E_mod(function(e,t){e.fn.setMenuContainerPosition=function(){var e=this,t=e.eventTarget(),n=t.offset().top,o=e.$txt,i=o.offset().top,a=o.offset().left,r=e.$menuContainer,d=(r.height(),n);d<i&&(d=i),d-=55,r.css({top:d,left:a+2}),e.showMenuContainer()},e.fn.showMenuContainer=function(){var e=this,t=e.$menuContainer;e.menuDisplayShow===!1&&(t.show(),t.css("opacity","0.9"),e.menuDisplayShow=!0)},e.fn.hideMenuContainer=function(){var e=this,t=e.$menuContainer,n=e.$txt,o=e.$focusElem,i=n.find(".focus-elem");e.menuDisplayShow&&(t.hide(),t.css("opacity","0"),e.menuDisplayShow=!1,o&&(o.removeClass("focus-elem"),i.removeClass("focus-elem")))}}),window.___E_mod(function(e,t){e.fn.updateMenuStyle=function(){var e=this,n=e.menus;t.each(n,function(e,t){var n=t.updateStyle;n&&n.call(t)})}}),window.___E_mod(function(e,t){var n=/insertimage/i;e.fn.command=function(e,t,o,i,a){var r=this,d=n.test(e),s=function(){document.execCommand(e,!!t,o)};r.customCommand(d,s,i,a)},e.fn.customCommand=function(e,t,n,o){var i=this,a=i.currentRange(),r=i.currentWrapRange();i.$txt;e?i.restoreSelection(a):i.restoreSelection(r),t(),i.insertEmpltyLink(),i.saveSelection(),i.restoreSelection(a),n&&(n.preventDefault(),n.stopPropagation()),o&&o.call(i),i.hideMenuContainer()}}),window.___E_mod(function(e,t){e.fn.currentRange=function(e){return e?void(this.currentRangeData=e):this.currentRangeData},e.fn.currentWrapRange=function(e){return e?void(this.currentWrapRangeData=e):this.currentWrapRangeData},e.fn.getWrapRangeElem=function(){var e,t,n=this,o=n.$txt,i=o.attr("class"),a=this.currentWrapRange();n.eventTarget().get(0);if(null!=a)return e=a.commonAncestorContainer,t=3===e.nodeType?e.parentNode:e,t.className===i&&(t=o.children().last().get(0)||t),t},e.fn.saveSelection=function(e){var t,n,o,i=this,a=i.$txt.get(0);e?t=e.commonAncestorContainer:(n=document.getSelection(),n.getRangeAt&&n.rangeCount&&(e=document.getSelection().getRangeAt(0),t=e.commonAncestorContainer)),t&&(a.contains(t)||a===t)&&(i.currentRange(e),o=document.getSelection().getRangeAt(0),o.selectNodeContents(t),i.currentWrapRange(o))},e.fn.restoreSelection=function(e){var t;e&&(t=document.getSelection(),t.removeAllRanges(),t.addRange(e))}}),window.___E_mod(function(e,t){}),window.___E_mod(function(e,t){e.fn.init=function(){var e=this;e.renderTxt(),e.renderMenu(),e.bindDocumentEvent(),e.bindTxtEvent(),e.bindMenuBtnEvent(),e.bindMenuContainerEvent()}})},47:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"mobile-demo"},[_h("div",{staticClass:"editor-box"},[_m(0)," ",_m(1)," ",_h("input",{attrs:{type:"button",name:"name",value:"submit"},on:{click:submit}})])," ",_h("div",{staticClass:"editor-box",attrs:{style:"background:#fff;"}},[_m(2)," ",_h("div",{domProps:{innerHTML:_s(content)}})])])},staticRenderFns:[function(){with(this)return _h("p",["移动端编辑器"])},function(){with(this)return _h("div",{staticClass:"mobile-editor"},[_h("link",{attrs:{rel:"stylesheet",type:"text/css",href:"./statics/css/wangEditor-mobile.css"}})," ",_h("textarea",{attrs:{id:"editorMobile",style:"width:100%;height:300px;"}},[_h("p",["请输入内容..."])])])},function(){with(this)return _h("p",["输入结果"])}]}},51:function(e,t,n){var o=n(31);"string"==typeof o&&(o=[[e.i,o,""]]);n(19)(o,{});o.locals&&(e.exports=o.locals)}});