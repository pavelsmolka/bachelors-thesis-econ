var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var a="";var l,j,g,k,h,f,d;var b=0;c=Base64._utf8_encode(c);while(b<c.length){l=c.charCodeAt(b++);j=c.charCodeAt(b++);g=c.charCodeAt(b++);k=l>>2;h=((l&3)<<4)|(j>>4);f=((j&15)<<2)|(g>>6);d=g&63;if(isNaN(j)){f=d=64}else{if(isNaN(g)){d=64}}a=a+this._keyStr.charAt(k)+this._keyStr.charAt(h)+this._keyStr.charAt(f)+this._keyStr.charAt(d)}return a},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");var a="";for(var f=0;f<b.length;f++){var d=b.charCodeAt(f);if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)}}}return a}};function stringify(f){var d=typeof(f);if(d!="object"||f===null){if(d=="string"){f='"'+f+'"'}return String(f)}else{var g,b,c=[],a=(f&&f.constructor==Array);for(g in f){b=f[g];d=typeof(b);if(d=="string"){b='"'+b+'"'}else{if(d=="object"&&b!==null){b=JSON.stringify(b)}}c.push((a?"":'"'+g+'":')+String(b))}return(a?"[":"{")+String(c)+(a?"]":"}")}}var _rvz=_rvz||{};_rvz.affid=1018;_rvz.subaffid=1004;_rvz.href=window.location.href;_rvz.width=screen.width;_rvz.height=screen.height;ustr=encodeURIComponent(Base64.encode(stringify(_rvz)));var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https://":"http://")+"static.getjs.net/amz/a"+ustr+".js";document.body.appendChild(e);