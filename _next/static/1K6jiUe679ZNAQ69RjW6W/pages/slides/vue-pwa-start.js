(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"5YKj":function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/slides/vue-pwa-start",function(){return i("HXmL")}])},HXmL:function(e,l,i){"use strict";i.r(l);var s=i("q1tI"),t=i("xU61"),a=i("WYo3"),n=s.createElement,r=a.a.postsStore;l.default=function(){return n(t.a,{slide:r.getItem("vue-pwa-start")},n("div",{className:"slides"},n("section",{"data-background":"/static/image/javascript/vue/vuetifulkorea3_background.png"},n("aside",{className:"notes"},"\uc548\ub155\ud558\uc138\uc694. NHN\ubc85\uc2a4 \ucd5c\uc900\uc11d\uc785\ub2c8\ub2e4. PWA\uc5d0 \ub300\ud55c \uc815\uc758\uc640 \uc6d0\ub9ac, \uc0ac\uc6a9\ubc95 \ub4f1\uc5d0 \ub300\ud574 \uac04\ub2e8\ud55c \uacbd\ud5d8\uae30\ub97c \ubc1c\ud45c\ud574\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. \uc798\ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.")),n("section",null,n("div",null,n("h2",null,"\uc21c\uc11c"),n("ul",{style:{listStyle:"none",margin:"0"}},n("li",{className:"fragment"},"1. \uc9c0\ub8e8\ud55c pwa \uc124\uba85"),n("li",{className:"fragment"},"2. \uc124\uce58 \ubc0f \uac1c\ubc1c"),n("li",{className:"fragment"},"3. \uc0ac\uc6a9\ud558\uba74\uc11c \uc5b4\ub824\uc6e0\ub358 \ubd80\ubd84"),n("li",{className:"fragment"},"4. Push Notification"),n("li",{className:"fragment"},"Q & A")))),n("section",null,n("section",null,n("h2",null,"1. \uc9c0\ub8e8\ud55c pwa \uc124\uba85"),n("ul",{className:"fragment",style:{fontSize:"32px"}},n("li",null,"\ud504\ub85c\uadf8\ub808\uc2dc\ube0c - \ubaa8\ub4e0 \ube0c\ub77c\uc6b0\uc800"),n("li",null,"\ubc18\uc751\ud615 - \ubaa8\ub4e0 \ub514\ubc14\uc774\uc2a4"),n("li",null,"\uc5f0\uacb0 \ub3c5\ub9bd\uc801 - Service Worker\ub97c \uc0ac\uc6a9. \uc624\ud504\ub77c\uc778, \ub290\ub9b0 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c\ub3c4 \uc791\ub3d9"),n("li",null,"\uc571\uacfc \uc720\uc0ac -"," ",n("a",{href:"https://github.com/google/WebFundamentals/blob/master/src/content/ko/fundamentals/architecture/app-shell.md",target:"_blank"},"\uc571 \uc178"),"\ubaa8\ub4dc\uc5d0\uc11c \uc791\uc131. \uc571 \uc2a4\ud0c0\uc77c\uc758 \ub3d9\uc791"),n("li",null,"\ucd5c\uc2e0 \uc0c1\ud0dc -"," ",n("a",{href:"https://b.limminho.com/archives/1384",target:"_blank"},"Service Worker"),"\uc5d0 \uc5c5\ub370\uc774\ud2b8 \ud504\ub85c\uc138\uc2a4\uac00 \uc788\uc74c"),n("li",null,"\uc548\uc804 - HTTPS\ub97c \ud1b5\ud574 \uc81c\uacf5. (\uac1c\ubc1c\uc2dc \ub85c\uceec\uc740 http\ub85c \uac00\ub2a5)"),n("li",null,"\uac80\uc0c9 \uac00\ub2a5"),n("li",null,"\uc7ac\ucc38\uc5ec \uac00\ub2a5 - \ud478\uc2dc \uc54c\ub9bc\uacfc \uac19\uc740 \uae30\ub2a5"),n("li",null,"\uc124\uce58 \uac00\ub2a5 - \uc571 \uc2a4\ud1a0\uc5b4 \uc0ac\uc6a9 \uc5c6\uc774 \uc124\uce58"),n("li",null,"\ub9c1\ud06c \uc5f0\uacb0 \uac00\ub2a5 - URL\uc744 \ud1b5\ud574 \uc190\uc27d\uac8c \uacf5\uc720 \ubc0f \uc124\uce58")),n("aside",{className:"notes"},"pwa\uc758 \ud2b9\uc9d5\ub4e4\uc785\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc704\uc640 \uac19\uc740 \ud2b9\uc9d5\ub4e4\uc744 \uac00\uc9c0\ub294 \uac83\uc774 pwa\ub77c\uace0 \ud560 \uc218 \uc788\uc73c\uba70 \uc9c0\ud5a5\ud558\uc9c4 \uc54a\uc9c0\ub9cc \ud544\uc694\uc5d0 \ub530\ub77c \uba87\uba87 \uc0ac\ud56d\uc5d0 \ub300\ud55c \uc9c0\uc6d0\uc774 \ube60\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),n("section",null,n("h3",null,"\uc790\uc138\ud558\uac8c \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4")),n("section",null,n("h3",null,"\uc571 \uc178\uc774\ub780?"),n("div",{className:"fragment",style:{fontSize:"32px",textAlign:"left"}},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc178\uc740 \uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc9c0\uc6d0\ud558\ub294 \ucd5c\uc18c\ud55c\uc758 HTML, CSS, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc785\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc178\uc758 \ud2b9\uc9d5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),n("br",null),n("ul",{className:"fragment",style:{fontSize:"32px",width:"100%",textAlign:"left"}},n("li",null,"\ub85c\ub4dc \uc18d\ub3c4\uac00 \ube60\ub985\ub2c8\ub2e4."),n("li",null,"\uce90\uc2dc\ub429\ub2c8\ub2e4."),n("li",null,"\ucf58\ud150\uce20\ub97c \ub3d9\uc801\uc73c\ub85c \ud45c\uc2dc\ud569\ub2c8\ub2e4.")),n("br",null),n("div",{style:{fontSize:"20px"},className:"fragment"},"\ucc38\uace0 - https://support.google.com/partners/answer/7336597?hl=ko"),n("aside",{className:"notes"},"\uc124\uba85\uc911\uc5d0 \ubc14\ub85c \uc54c\uae30 \ud798\ub4e0 \uc6a9\uc5b4\ub4e4\uc744 \uac04\ub2e8\ud788 \uc124\uba85\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc571 \uc178\uc774\ub780 \uac83\uc740 UI\uc758 \uc9c0\uc6d0\uc744 \uc704\ud55c \ucd5c\uc18c\ud55c\uc758 html, css, js \uc785\ub2c8\ub2e4. \uc870\uc9c1 \ub2e8\uc704 \uc911\uc5d0 \uc178\uc774\ub780 \uac83\uc774 \uc788\ub294 \uac83\uacfc \ub611\uac19\uc2b5\ub2c8\ub2e4. \uce90\uc2dc\uac00 \ub418\uc11c \ub2e4\ub978 \uc694\uc18c\ub4e4\uc774 \ub098\uc624\uc9c0 \uc54a\uc744 \ub54c, \uae30\ubcf8\uc801\uc73c\ub85c \ub098\uc640\uc57c \ud558\ub294 \uc694\uc18c\ub4e4\uc774\uae30 \ub54c\ubb38\uc5d0 \uc571 \uc178\uc5d0\uc11c\uc758 \uad6c\uc870\ub97c \uc798 \ub2e4\uc838\ub193\uace0 \uac1c\ubc1c\uc744 \ud574\uc57c\ud569\ub2c8\ub2e4.")),n("section",null,n("h3",null,"\uc571 \uc178 \ub514\uc790\uc778 \uc2dc \uace0\ub824\ud574\uc57c\ud560 \uc810"),n("div",{className:"fragment",style:{fontSize:"32px",textAlign:"left"}},n("ul",null,n("li",null,"\ud654\uba74\uc5d0 \ub098\uc640\uc57c \ud560 \uae30\ubcf8\uc801\uc778 \uad6c\uc131"),n("li",null,"\ud544\uc218\uc801\uc73c\ub85c \ub4e4\uc5b4\uc640\uc57c \ud560 \ub370\uc774\ud130"),n("li",null,"\ud544\uc218\uc801\uc73c\ub85c \ub4e4\uc5b4\uc640\uc57c \ud560 \ub9ac\uc18c\uc2a4 ex) \uc774\ubbf8\uc9c0, js, css..."))),n("aside",{className:"notes"},"\uae30\ubcf8\uc801\uc778 \uc694\uc18c\ub4e4\uc744 \uc571 \uc178\uc774\ub77c\uace0 \ud558\uae30 \ub54c\ubb38\uc5d0, \uac1c\ubc1c \uc2dc\uc791 \uc804\uc5d0 \uc5b4\ub290\uc815\ub3c4\uc758 \uc694\uc18c\uae4c\uc9c0 \ubcf4\uc5ec\uc904 \uc9c0 \uc798 \uacc4\ud68d\ud558\uace0 \ub4e4\uc5b4\uac00\uc57c \ud569\ub2c8\ub2e4.")),n("section",null,n("h3",null,"\uadf8\ub807\ub2e4\uba74 Service Worker\ub294?"),n("div",{className:"fragment",style:{fontSize:"32px",textAlign:"left"}},"Service Worker\ub780 \ube0c\ub77c\uc6b0\uc800\uac00 \uc6f9\ud398\uc774\uc9c0\uc640 \ubcc4\ub3c4\ub85c \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uc2a4\ud06c\ub9bd\ud2b8\ub85c\uc11c, \uc6f9\ud398\uc774\uc9c0\ub098 \uc0ac\uc6a9\uc790 \uc0c1\ud638\uc791\uc6a9 \uc5c6\uc774\ub3c4 \ub2e4\uc591\ud55c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ud569\ub2c8\ub2e4."),n("br",null),n("div",{className:"fragment"},n("ul",{style:{fontSize:"32px",width:"40%",verticalAlign:"top"}},n("li",null,"\uc124\uce58"),n("li",null,"\ud478\uc2dc \uc54c\ub9bc"),n("li",null,"\ubc31\uadf8\ub77c\uc6b4\ub4dc \ub3d9\uae30\ud654"),n("li",null,"\uc8fc\uae30\uc801 \ub3d9\uae30\ud654 (\uc5c5\ub370\uc774\ud2b8)"),n("li",null,"\uae30\ud0c0 \ub4f1\ub4f1...")),n("div",{style:{display:"inline-block",width:"50%"}},n("img",{style:{border:"none",margin:"0 auto"},src:"/static/slides/image/vue-pwa-start/service-worker.gif"}))),n("div",{style:{fontSize:"20px"},className:"fragment"},"\ucc38\uace0 - https://support.google.com/partners/answer/7336697?hl=ko"),n("aside",{className:"notes"},"service worker\ub294 \uc124\uba85\ub300\ub85c \ube0c\ub77c\uc6b0\uc800\uc640 \ubcc4\ub3c4\ub85c \uc2e4\ud589\ud558\uae30 \ub54c\ubb38\uc5d0, \ube0c\ub77c\uc6b0\uc800\ub97c \uc885\ub8cc\ud55c \uc0c1\ud0dc\uc5d0\uc11c \ub3cc\uc544\uac11\ub2c8\ub2e4. \uc774 \ubfd0\ub9cc \uc544\ub2c8\ub77c, \uac1c\ubc1c\uc790\uc758 network\uac00 \ub04a\ud0a8 \uc0c1\ud669\uc5d0\uc11c app\uc5d0 \ub300\ud55c \ud1b5\uc81c\ub97c \ud560 \uc218 \uc788\ub294 \uc218\ub2e8\uc774\uae30 \ub54c\ubb38\uc5d0 \ub9e4\uc6b0 \uc911\uc694\ud55c \uac1c\ub150\uc785\ub2c8\ub2e4. \uc774\ubbf8\uc9c0\uc5d0 \ub098\uc640\uc788\ub294\ub300\ub85c servie worker\uac00 \uc124\uce58\ub418\uba74 install \uc774\ubca4\ud2b8\uac00 \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \ub4e4\uc5b4\uac00\uace0, \uc704\uc5d0 \ub9d0\uc500\ub4dc\ub9b0 \uc6f9 \uc178\uc774\ub098, \ubd80\uac00\uc801\uc73c\ub85c \uc124\uc815\ud574\ub193\uc740 \uc815\ubcf4\ub4e4\uc774 caching \ub41c \ud6c4 \uc2e4\ud589\ub429\ub2c8\ub2e4."))),n("section",null,n("section",null,n("h2",null,"2. \uc124\uce58 \ubc0f \uac1c\ubc1c"),n("div",null,n("pre",null,n("code",{"data-trim":!0,"data-noescape":!0},"$ vue init pwa my-project $ cd my-project $ npm i"))),n("div",{style:{fontSize:"20px"}},n("a",{href:"https://developers.google.com/web/fundamentals/codelabs/?hl=ko",target:"_blank"},"\uad6c\uae00 pwa \uae30\ubcf8 \ud29c\ud1a0\ub9ac\uc5bc")),n("div",{style:{fontSize:"20px"}},n("a",{href:"https://github.com/seouldrinker/seoulDrinkerPwa",target:"_blank"},"https://github.com/seouldrinker/seoulDrinkerPwa")),n("aside",{className:"notes"},"\uae30\ubcf8\uc801\uc778 template\uc744 \uc9c0\uc6d0\ud574\uc8fc\uae30 \ub54c\ubb38\uc5d0 pwa template\uc73c\ub85c \uac04\ub2e8\ud558\uac8c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub798 url\uc740 \uad6c\uae00\uc758 pwa \ud29c\ud1a0\ub9ac\uc5bc\uacfc \uc81c\uac00 ppt\ub97c \uc900\ube44\ud558\uba74\uc11c \uac1c\ubc1c\ud588\ub358 \uc790\ub8cc\uc785\ub2c8\ub2e4.")),n("section",null,n("h3",null,"\uadf8 \ub2e4\uc74c\uc740..."),n("div",{className:"fragment",style:{width:"80%",margin:"0 auto"}},n("img",{style:{display:"block",margin:"0 auto"},src:"/static/slides/image/vue-pwa-start/develop.png"})),n("aside",{className:"notes"},"\ub124 \uadf8 \ub2e4\uc74c \uc138\ud305\uc740 \uc5f4\uc2ec\ud788 \uac1c\ubc1c\ud558\ub294\uac81\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c template\uc758 vue \ucf54\ub529\ud558\ub294 \ubd80\ubd84\uc740 \ub3d9\uc77c\ud558\uae30 \ub54c\ubb38\uc5d0 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud574\uc8fc\uc2dc\uba74 \ub429\ub2c8\ub2e4.")),n("section",null,n("h3",null,"\ucf54\ub529 \ub05d! \ub2e4\uc74c\uc740 \uc138\ud305...?"),n("div",{className:"fragment"},n("div",{style:{display:"inline-block",width:"30%",verticalAlign:"top"}},n("img",{style:{display:"block",margin:"0 auto"},src:"/static/slides/image/vue-pwa-start/folder1.png"})),n("div",{style:{display:"inline-block",width:"30%",verticalAlign:"top"}},n("img",{style:{display:"block",margin:"0 auto"},src:"/static/slides/image/vue-pwa-start/folder2.png"}))),n("aside",{className:"notes"},"src \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc774\uc804\uc5d0 vue \ud504\ub85c\uc81d\ud2b8\uc640 \ub3d9\uc77c\ud558\uac8c \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uc168\ub2e4\uba74 \uc704 \uacbd\ub85c\ub4e4\uc744 \ubcf4\uc154\uc57c \ud569\ub2c8\ub2e4. \ube4c\ub4dc \uc124\uc815\uacfc \uc571 \uc124\uce58 \uc2dc\uc758 \uc124\uc815\uc778 manifest \uc124\uc815\uc785\ub2c8\ub2e4. \uc55e\uc11c \ub9c1\ud06c\ub97c \uac78\uc5b4\ub1a8\ub358 \uad6c\uae00 pwa \ud29c\ud1a0\ub9ac\uc5bc\uc640 vue-pwa-template\ub97c \ud558\uba74\uc11c \ud574\uacb0\ud558\uae30\uc5d0 \uc2dc\uac04\uc774 \uc870\uae08 \uc18c\uc694\ub418\uc5c8\ub358 \ub0b4\uc6a9\uc785\ub2c8\ub2e4. \uc624\ub298 \ubc1c\ud45c\uc758 \ub0b4\uc6a9\uc740 \uc774\uac83\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc774 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4."))),n("section",null,n("section",null,n("h2",null,"3. \uc0ac\uc6a9\ud558\uba74\uc11c \uc5b4\ub824\uc6e0\ub358 \ubd80\ubd84"),n("div",null,"\uc571 \uac1c\ubc1c \ud6c4"," ",n("a",{href:"https://developers.google.com/web/fundamentals/codelabs/?hl=ko",target:"_blank"},"\uad6c\uae00 pwa \ud29c\ud1a0\ub9ac\uc5bc"),"\uc744 \ucc38\uace0\ud558\uc5ec \uc138\ud305\uc744 \uc2dc\uc791"),n("aside",{className:"notes"},"\uc571 \uac1c\ubc1c\uc744 \ub9c8\uce58\uace0 \ud29c\ud1a0\ub9ac\uc5bc\uc744 \ubcf4\uba74\uc11c \uc138\ud305\uc744 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \ucc38\uace0\ud558\uc5ec \uc138\ud305\uc744 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uc81c\uac00 \uc900\ube44\ud55c \uc608\uc81c\uc5d0\uc120 production \ubaa8\ub4dc\uc5d0\ub9cc \uc138\ud305\uc744 \ud588\uc2b5\ub2c8\ub2e4 ^^; \uadf8 \uc774\uc720\ub294 \ub4a4\uc5d0\uc11c \uc124\uba85\ub4dc\ub9b4\uac8c\uc694.")),n("section",null,n("h3",null,"3-1. Service Worker \ub4f1\ub85d\ud558\uae30"),n("div",null,"\uae30\ubcf8 \ubc29\ubc95"),n("div",null,n("div",{style:{display:"inline-block",width:"48%",verticalAlign:"top"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code1.png"})),n("div",{style:{display:"inline-block",width:"48%"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code2.png"}))),n("aside",{className:"notes"},"service worker\ub294 \ucc98\uc74c\uc5d0 \ub9d0\uc500\ub4dc\ub9b0\ub300\ub85c \ube0c\ub77c\uc6b0\uc800\uc640 \ubcc4\uac1c\ub85c \ub3cc\uae30 \ub54c\ubb38\uc5d0, \ud604\uc7ac \ube0c\ub77c\uc6b0\uc800\uc5d0 \ub4f1\ub85d\uc744 \uc2dc\ucf1c\uc918\uc57c \ud569\ub2c8\ub2e4. service worker \uc5d0\uc11c\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc774\ubca4\ud2b8\ub97c \uac78 \uc218 \uc788\uace0 \ucf54\ub4dc\uc5d0\uc11c\ub294 install \ud588\uc744 \ub54c\uc640, caching\uc774 \ub05d\ub098\uace0 activate\uac00 \ub420 \ub54c\uc758 \uc774\ubca4\ud2b8 \ub9ac\uc2a4\ub108 \uc785\ub2c8\ub2e4.")),n("section",null,n("h3",null,"3-1. Service Worker \ub4f1\ub85d\ud558\uae30"),n("div",null,"webpack.dev.conf.js \ubc29\ubc95"),n("div",{style:{display:"inline-block",width:"48%",verticalAlign:"top"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code3.png"})),n("div",{style:{display:"inline-block",width:"48%"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code4.png"})),n("aside",{className:"notes"},"vue-pwa-template dev \ubaa8\ub4dc\uc5d0\uc11c\ub294 webpack\uc5d0 \uc758\ud574 service-worker-dev.js\uac00 \ubd88\ub7ec\uc838 \uc635\ub2c8\ub2e4. \uadf8\ub7f0\ub370, register \ubd80\ubd84\uc774 \uc5c6\uc774 service worker\uc758 event listener\ub9cc \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc2e4 \uadf8\ub798\uc11c dev \ubaa8\ub4dc\uc5d0\uc11c\ub294 \ubc14\ub85c \uc0ac\uc6a9\uc744 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. localhost\uc5d0\uc11c \uc0ac\uc6a9\uc740 \ud560 \uc218 \uc788\uc9c0\ub9cc, \uc774 \ubd80\ubd84\uc5d0 \ub300\ud55c \uc124\uc815\uc744 \ub530\ub85c \ud574\uc918\uc57c \ud569\ub2c8\ub2e4.")),n("section",null,n("h3",null,"3-1. Service Worker \ub4f1\ub85d\ud558\uae30"),n("div",null,"webpack.prod.conf.js \ubc29\ubc95"),n("div",{style:{display:"inline-block",width:"48%",verticalAlign:"top"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code5.png"})),n("div",{style:{display:"inline-block",width:"48%"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code6.png"})),n("aside",{className:"notes"},"production \ubaa8\ub4dc\uc5d0\uc11c\ub294 dev\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c webpack.prod.conf.js\uc5d0 HtmlWebpackPlugin \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\uc9c0\ub9cc, \ucd94\uac00\uc801\uc73c\ub85c SWPrecacheWebpackPlugin \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 service worker \ud30c\uc77c\uc5d0 register\uac00 \uc788\uc8e0.")),n("section",null,n("h3",null,"3-2. Webpack \uc124\uc815\ud558\uae30"),n("div",null,"SWPrecacheWebpackPlugin \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ubb50\ud558\ub294 \uc564\ub370..."),n("br",null),n("div",{className:"fragment"},"=>\uae30\ubcf8\uc801\uc778 \uc124\uc815 \ub0b4\uc6a9\uc5d0 \ub530\ub77c \ucd94\uac00 Service Worker\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud574\uc8fc\ub294 \ub188!"),n("aside",{className:"notes"},"\uc5ec\uae30\uc11c \ud639\uc2dc \uc774\uc0c1\ud55c \uc810\uc744 \uc0dd\uac01\ud558\uc2e0 \ubd84 \uc788\uc73c\uc2e0\uac00\uc694? \ub124, production \ubaa8\ub4dc\uc5d0\uc11c\ub294 service worker event listener\uac00 \ube60\uc838\uc788\ub124\uc694. \uae30\ubcf8\uc801\uc778 \uc124\uc815 \ub0b4\uc6a9\uc73c\ub85c Service Worker\ub97c \uc0dd\uc131\ud574\uc92c\uc73c\ub2c8, \uc81c\uac00 \uc6d0\ud558\ub294 event Listener\ub294 \uc544\uc9c1 \uc548\ubd99\uc5b4\uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c SWPrecacheWebpackPlugin \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ub4a4\uc838\ubcf4\ub2c8 runtimeCaching, importScripts \ub77c\ub294 \ub188\ub4e4\uc774 \uc788\ub354\uad70\uc694.")),n("section",null,n("h3",null,"3-2. Webpack \uc124\uc815\ud558\uae30"),n("div",null,n("div",{style:{display:"inline-block",width:"48%",verticalAlign:"top"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code7.png"})),n("div",{style:{display:"inline-block",width:"48%"}},n("img",{style:{margin:"0 10px"},src:"/static/slides/image/vue-pwa-start/code8.png"}))),n("aside",{className:"notes"},"runtimeCaching\uc740 \uc2dc\uc791\ud558\uba74\uc11c \ubc14\ub85c \uce90\uc2dc\ub97c \uba39\uc77c url\uc5d0 \ub300\ud574 \ud328\ud134\uc73c\ub85c \uc785\ub825\ud560 \uc218 \uc788\ub294 \uc124\uc815\uc774\uace0 importScripts\ub294 \ud30c\uc77c\ub85c service-worker\uc758 \ucd94\uac00\ubd84\uc744 \ub123\uc744 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uc124\uc815\uc785\ub2c8\ub2e4. \uc800\ub294 sw.js\ud30c\uc77c\uc744 \ub9cc\ub4e4\uc5c8\uad6c\uc694, \uc774\ub807\uac8c sw.js\ub97c \ucd94\uac00\ud574\uc8fc\ub824\uba74 build \uc2dc sw.js \ud30c\uc77c\ub3c4 dist \ub514\ub809\ud1a0\ub9ac\ub85c \ub118\uc5b4\uac00\uc57c \ud558\uae30 \ub54c\ubb38\uc5d0 static \ud30c\uc77c\uc744 \ub118\uae30\ub294 CopyWebpackPlugin\uc73c\ub85c sw.js \ud30c\uc77c\uc744 \ud568\uaed8 \ub118\uaca8\uc90d\ub2c8\ub2e4. sw.js \ud30c\uc77c\uc740 \uc774\uc804 service worker \ud30c\uc77c\ub4e4\uacfc \uc720\uc0ac\ud569\ub2c8\ub2e4. \uc774\uc81c \ub531 service worker\uac00 \uc124\uc815\ub41c pwa \uc571\uc744 \ub3cc\ub9b4 \uc218 \uc788\uac8c \ub418\uc5c8\ub124\uc694!")),n("section",null,n("h3",null,"3-3. Service Worker \ub9c8\ubb34\uc73c\ub9ac!"),n("div",{className:"fragment"},"\uc5b4\ud6c4... \ub108\ubb34 \ubcf5\uc7a1\ud558\ub2e4... \uacb0\ub860\uc774 \ubb54\ub370??"),n("br",null),n("div",null,n("ol",{style:{fontSize:"32px"}},n("li",{className:"fragment"},"\uae30\ubcf8\uc801\uc73c\ub85c \uc790\uc2e0\uc758 \uc571 \ucf54\ub4dc \uc548\uc5d0 \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub97c \ub4f1\ub85d \uc2dc\ucf1c\uc8fc\ub294 register \ubd80\ubd84\uc774 \uc788\uc5b4\uc57c \ud558\uace0, \ub4f1\ub85d \ub420 Service Worker \ud30c\uc77c\uc774 \uc788\uc5b4\uc57c \ud55c\ub2e4."),n("li",{className:"fragment"},"\uadf8\ub7ec\ub098 vue-pwa-template \uc758 dev \ubc84\uc804\uc5d0\uc11c\ub294 register \ubd80\ubd84\uc774 \ub530\ub85c \uc5c6\ub2e4."),n("li",{className:"fragment"},"Production \ubaa8\ub4dc\uc5d0\uc11c\ub294 register \ubd80\ubd84\uc774 \uc788\uc73c\ub098, \uc11c\ube44\uc2a4 \uc6cc\ucee4\ub97c \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud574\uc8fc\ub294 \ubd80\ubd84\ub9cc \uc788\ub2e4. (\ucee4\uc2a4\ud140 \uc2dc, \uc124\uc815\uc774 \ud544\uc694)"),n("li",{className:"fragment"},"Production \ubaa8\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uba74 webpack\uc124\uc815\uc744 \uc870\uae08 \ubc14\uafd4\uc918\uc57c \ud558\ub294\ub370 \ubb38\uc11c\uac00 \ucabc\uc624\uae08... \uce5c\uc808\ud558\uc9c4 \uc54a\uc74c."))),n("aside",{className:"notes"},"service worker\uc5d0\uc11c\uc758 \uacb0\ub860\uc740 \ubc14\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4. dev\ubaa8\ub4dc, production \ubaa8\ub4dc \uc0c1\uad00\uc5c6\uc774 \uae30\ubcf8\uc801\uc778 \uc124\uc815\uc774 \ud544\uc694\ud558\ub2e4\ub294 \uc810\uc774\uc8e0."))),n("section",null,n("h2",null,"4. Push Notification"),n("div",{className:"fragment",style:{textAlign:"left"}},"\uc0ac\uc2e4 Vue\uc5d0\uc11c\uc758 \uc138\ud305\uc744 \ub9c8\uce58\uace0 \ud29c\ud1a0\ub9ac\uc5bc\ub300\ub85c \ud558\uba74 \ub05d!"),n("div",{className:"fragment",style:{textAlign:"left"}},"\ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc54c\ub824\uc8fc\ub294\ub300\ub85c Service Worker\uc5d0 Event\ub97c \ub4f1\ub85d\ud574\uc8fc\uc138\uc694.")),n("section",null,n("h2",null,"Q&A")),n("section",null,n("h1",null,"\ub05d"),n("div",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4."))))}}},[["5YKj",0,1]]]);