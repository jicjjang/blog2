(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"58bR":function(e,a,s){"use strict";s.r(a);var t=s("q1tI"),l=s("xU61"),i=s("WYo3"),n=s("5P1b"),c=t.createElement,r=i.a.postsStore;a.default=function(){return c(l.a,{slide:r.getItem("react-basic")},c("div",{className:"slides"},c("section",null,c("h1",null,"React.js"),c("h3",null,"Javascript View Framework"),c("p",null,c("small",null,"Created by ",c("a",{href:n.f},"Junseok, Choi")))),c("section",null,c("p",null,"\uc2dc\uc791\uc740 \ud398\uc774\uc2a4\ubd81 & \uc778\uc2a4\ud0c0\uadf8\ub7a8 \uac1c\ubc1c\uc790\ub4e4\uc758 View\uc5d0\ub9cc \uc9d1\uc911\ub41c \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ube14\ub77c\ube14\ub77c....(\uc0dd\ub7b5)"),c("br",null),c("h2",{className:"fragment"},c("a",{href:"https://facebook.github.io/react/2013/06/05/why-react.html"},'"\uc9c0\uc18d\ud574\uc11c \ub370\uc774\ud130\uac00 \ubcc0\ud654\ud558\ub294 \ub300\uaddc\ubaa8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud558\uae30" \uc6a9\ub3c4')),c("aside",{className:"notes"},"\ubb3c\ub860 data, routing, action\uc5d0 \ub300\ud55c \uae30\ub2a5\ub4e4 \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),c("section",null,c("section",null,c("h2",null,"React\uc758 \ud2b9\uc9d5"),c("aside",{className:"notes"},"\ub9e8\ub0a0 \uc0ac\ub78c\ub4e4\uc774 React, React\ud558\ub294\ub370 \uc65c \uadf8\ub7f0\uc9c0 \uc7a5\uc810\uc5d0 \ub300\ud574\uc11c \ud55c\ubc88 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Components"),c("p",{style:{width:"60%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/component.png"})),c("small",null,"\ucd9c\ucc98 - http://www.slideshare.net/taggon/react-js-46357445"),c("aside",{className:"notes"},"Component\ub780, \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c UI \uad6c\uc131 \ub2e8\uc704\uc785\ub2c8\ub2e4. React\ub294 \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc73c\uba70 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4\ub54c JSX\ubb38\ubc95\uc774 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc0c1\uc704\uc5d0\uc11c \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8\ub85c \uc5f0\uacb0\ub418\uc5b4 \uc11c\ub85c \uacb0\ud569\ub429\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8 \ubcc4\ub85c \ub370\uc774\ud130\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Components"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/component_example.png"})),c("aside",{className:"notes"},"\uc81c\uac00 \uc608\uc804\uc5d0 \uacf5\ubd80\ud588\ub358 \ucf54\ub4dc\uc785\ub2c8\ub2e4. \ub370\uc774\ud130\ub294 state\uc640 prop\ub97c \uc774\uc6a9\ud558\ub294\ub370, props\ub294 \ubd88\ubcc0\ud558\ub294 \uac1d\uccb4, state \ubcc0\ud558\ub294 \uac1d\uccb4 \uc785\ub2c8\ub2e4. \ub4a4\uc5d0\uc11c \ub354 \uc790\uc138\ud788 \uc124\uba85\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Virtual DOM"),c("p",null,c("span",null,"DOM?")," No..., ",c("span",null,"Virtual DOM?")," Yes!"),c("aside",{className:"notes"},"SPA\uc571\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ub04a\uc784\uc5c6\uc774 data\ub97c \uac00\uc838\uc624\uace0, \ud604\uc7ac \uc0c1\ud0dc\ub97c \ud655\uc778\ud574\uc11c data-binding\uc744 \ud574\uc918\uc57c \ud558\ub294\ub370 \uc774 \uacfc\uc815\uc740 \ud504\ub85c\uc81d\ud2b8\uac00 \ucee4\uc9c8\uc218\ub85d \ubcf5\uc7a1\ud574\uc9d1\ub2c8\ub2e4.",c("br",null),"React\uc5d0\uc11c\ub294 \uac00\uc0c1\uc758 DOM\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. Virtual DOM\uc5d0\uc11c\ub294 Reactive Rendering \uae30\ubc95\uc744 \uc774\uc6a9\ud574 DOM\uc5d0 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc0dd\uae30\uba74 \uc774\ub97c \uac10\uc9c0\ud558\uace0 \ubcc0\uacbd\ub41c \ubd80\ubd84\ub9cc Re-Rendering\uc744 \ud569\ub2c8\ub2e4. \ube0c\ub77c\uc6b0\uc800\uc5d0 \uc758\uc874\uc801\uc774\uc9c0 \uc54a\uace0 / \ube60\ub974\ub2e4\ub294 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),c("section",null,c("h2",null,"\ub2e8\ubc18\ud5a5 \ub370\uc774\ud130 \ud750\ub984"),c("p",null,"\uc0c1\uc704 \ucef4\ud3ec\ub10c\ud2b8 (Parent) to \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8 (Children)"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/tree.png"})),c("aside",{className:"notes"},"\uc55e\uc11c \ubcf4\uc5ec\ub4dc\ub9b0 \ucf54\ub4dc\uc640 \uac19\uc774 CardList, CardItem, CardDetail \uacfc \uac19\uc774 \uc0c1\uc704 -> \ud558\uc704 \ub85c \uc9c4\ud589\ub418\ub294 \uad6c\uc870\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870\ub97c \ub530\ub77c\uac00\uba70 \ub370\uc774\ud130 \ub610\ud55c \ub2e8\ubc29\ud5a5\uc73c\ub85c \uc9c4\ud589\ub418\uac8c \ub429\ub2c8\ub2e4.")),c("section",null,c("h2",null,"JSX"),c("p",null,"Javascript + XML"),c("aside",{className:"notes"},"XML\uc758 \ubb38\ubc95\uc744 \ucc28\uc6a9\ud558\uc5ec \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc790\uccb4\ub85c\ub3c4 \ub9cc\ub4e4 \uc218 \uc788\uace0, \ucc98\uc74c\uc5d4 \ubd88\ud3b8\ud558\uae30\ub3c4 \ud558\uc9c0\ub9cc \uc870\uae08\ub9cc \uc0ac\uc6a9\ud574 \ubcf4\uba74 \ud6e8\uc52c \uac04\ub2e8\ud558\uace0 \uc27d\uac8c Comopnent\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. JSX\ubb38\ubc95\uc73c\ub85c \ub9cc\ub4e0 \ud6c4 JSXTransformer\ub85c JS\ucf54\ub4dc \ucef4\ud30c\uc77c\ub9c1\uc744 \ud569\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Flux"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/mvc.png"})),c("aside",{className:"notes"},"flux \ud328\ud134\uc758 \uc0ac\uc6a9\uc740 \ud544\uc218\ub294 \uc544\ub2d9\ub2c8\ub2e4. \uc6f9\uc758 \uad6c\uc870\uc5d0\uc11c \uc591\ubc29\ud5a5 \ub370\uc774\ud130 \ubc14\uc778\ub529 \ud615\uc2dd\uc778 mvc \ud328\ud134\uc758 \uc0ac\uc9c4\uc785\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Flux"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/flux.png"})),c("aside",{className:"notes"},"flux \ud328\ud134\uc740 MVC\uc640\ub294 \ub2e4\ub974\uac8c \ub2e8\ubc29\ud5a5 \ub370\uc774\ud130 \ud1b5\uc2e0\uc5d0 \ub9de\uac8c \ub098\uc628 \uc0c8\ub85c\uc6b4 \ud328\ud134\uc785\ub2c8\ub2e4. Dispatcher, Stores, View \ub85c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\ub370, action\uc744 \uc2e4\ud589\ud558\uace0, \uc800\uc7a5\ud558\uace0, \ubcf4\uc5ec\uc904 \uc218 \uc788\ub294 \uad6c\uc870\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Flux"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/flux1.png"})),c("aside",{className:"notes"},"state\ub294 \uc561\uc158\ub9c8\ub2e4 \uc7ac\uae30\ub85d \ub418\ub294\ub370, \uac01\uac01\uc758 \uc561\uc158 \uc804, \ud6c4\ub85c state\ub97c \uad6c\ubd84\ud574\uc918\uc57c \ud569\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Flux"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/flux2.png"})),c("aside",{className:"notes"},"\uadf8\ub9ac\uace0 middleware\ub97c \uc27d\uac8c \ubd99\uc77c \uc218 \uc788\uc5b4\uc57c \ud558\ub294\ub370, \uc774 \ub610\ud55c \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Redux"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/redux1.png"})),c("aside",{className:"notes"},"\uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 Flux \uae30\ubc18\uc758 Redux \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc561\uc158 \uc804, \ud6c4\ub85c state\ub97c \uad6c\ubd84\ud558\uc9c0 \ubabb\ud558\ub294 \ubb38\uc81c\ub294 \uc561\uc158 \ub9c8\ub2e4 \uc0c1\ud0dc\ub97c \uc218\uc815\ud558\uc9c0 \uc54a\ub294 \ub300\uc2e0 \uc0c1\ud0dc\ub97c \ubcf5\uc0ac\ud558\uc5ec \uac01\uac01\uc758 \ubcf5\uc0ac\ubcf8\uc744 \uc218\uc815\ud574\uc8fc\ub294 \ubc29\uc2dd\uc744 \ud0dd\ud588\uc2b5\ub2c8\ub2e4.")),c("section",null,c("h2",null,"Redux"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/redux2.png"})),c("aside",{className:"notes"},"\uadf8\ub9ac\uace0 \uc5f0\uacb0\ud558\uae30 \ud798\ub4e0 middleware\ub294 \uc561\uc158\uc5d0\ub9cc \uc801\uc6a9\ud558\uc5ec \ub370\uc774\ud130\uc640\ub294 \uad00\uc2ec\uc0ac\ub97c \ubd84\ub9ac\uc2dc\ucf30\uc2b5\ub2c8\ub2e4."))),c("section",null,c("h2",null,"\uae30\ud0c0 \ub4f1\ub4f1..."),c("p",null,"\uae30\ud0c0 \ub4f1\ub4f1\uc774\ub77c\uace0 \uc911\uc694\ud558\uc9c0 \uc54a\uc740 \uac83\uc740 \uc544\ub2d9\ub2c8\ub2e4."),c("ul",null,c("li",{className:"fragment"},"es6"),c("li",{className:"fragment"},"webpack"),c("li",{className:"fragment"},"npm"),c("li",{className:"fragment"},"...")),c("aside",{className:"notes"},"React\ub85c \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\uba74 \ubb34\uc870\uac74 \ub9cc\ub0a0 \uc218 \ubc16\uc5d0 \uc5c6\ub294 \uc694\uc18c\ub4e4\uc774\uc9c0\ub9cc \uc9c0\uae08 \uc138\ubbf8\ub098\uc5d0\uc120 \uc0dd\ub7b5\ud558\uaca0\uc2b5\ub2c8\ub2e4.")),c("section",null,c("h2",null,"\ud658\uacbd \uc124\uc815"),c("p",{className:"fragment fade-out",style:{position:"absolute"}},"\uc774\uc81c npm\uc73c\ub85c babel\uc640 react, \ubd80\uac00\uc801\uc778 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc124\uce58\ud558\uace0 babel\ub85c JSX\ub97c JS\ub85c \ucef4\ud30c\uc77c \ud558\ub294 \ud658\uacbd\uacfc webpack.config.js\ub85c \uac1c\ubc1c\ud658\uacbd \uc804\uc6a9 \uc11c\ubc84\ub97c \ub3cc\uc544\uac00\uac8c \ud558\ub294 \uc138\ud305\uc744 \ud558\uace0..."),c("h3",{className:"fragment fade-in"},"\uc774 \ubaa8\ub4e0 \uac83\uc744 \uac04\ub2e8\ud558\uac8c!",c("br",null),c("a",{href:"https://github.com/facebookincubator/create-react-app"},"create-react-app!")),c("aside",{className:"notes"},"\ucd08\ubc18\uc5d0\ub294 \uc124\uc815\uc774 \uaf64\ub098 \ubcf5\uc7a1\ud588\uc2b5\ub2c8\ub2e4. React\uc758 \ucee8\ud2b8\ub9ac\ubdf0\ud130\uc778 Dan Abramov \uc774\ub7f0 \ubb38\uc81c\ub97c \uc778\uc9c0\ud558\uace0 \uc788\uc5c8\ub294\ub370, (\uc81c\uac00 \ub4e3\uae30\ub860 Vue.js\uc600\ub358 \uac83 \uac19\uc2b5\ub2c8\ub2e4.) \ucee8\ud37c\ub7f0\uc2a4\uc758 Framework \ub0b4\uc7a5 shell \ud658\uacbd\uc744 \ubcf4\uace0 \uc790\ub3d9\uc73c\ub85c \uc138\ud305\uc744 \ud574\uc8fc\ub294 \ud658\uacbd\uc744 \ub9cc\ub4e4\uc5c8\ub2e4\uace0 \ud569\ub2c8\ub2e4. \uc774 \ud658\uacbd\uc744 install\ud574\uc8fc\uace0, run\ub9cc \ud574\uc8fc\uba74 \ubc14\ub85c React \uc804\uc6a9 \uc11c\ubc84\uac00 \ucf1c\uc9c0\uac8c \ub429\ub2c8\ub2e4. dev\ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc11c\ubc84\uc774\uae30 \ub54c\ubb38\uc5d0, \uac1c\ubc1c\uc774 \ub05d\ub09c \ud6c4 build\ub97c \ud558\uba74 \uac1c\ubc1c \uc2dc \uc0ac\uc6a9\ub418\uc5c8\ub358 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub4e4\uc774 \ud55c\uaebc\ubc88\uc5d0 build\ub418\uc5b4 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.")),c("section",{"data-markdown":!0},c("h2",null,"\ud658\uacbd \uc124\uc815"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/code1.png"})),c("h4",null,"\ub05d")),c("section",null,c("h2",null,"\uac1c\ubc1c"),c("p",{style:{width:"60%",margin:"0 auto"},className:"fragment"},c("img",{src:"/static/slides/image/react-basic/develop.png"})),c("aside",{className:"notes"},"\uc774\uc81c \uc2e4\uc81c \uac1c\ubc1c\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.")),c("section",null,c("section",{"data-markdown":!0,style:{fontSize:"28px"}},c("h2",{id:"data-"},"Data\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ud544\uc694 \uc694\uc18c"),c("h3",{id:"2-state"},"1. props"),c("p",{style:{width:"80%",margin:"0 auto"},className:"fragment"},c("img",{src:"/static/slides/image/react-basic/code2.png"})),c("aside",{className:"notes"},"props\ub294 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub123\uc5b4\uc900 \ub370\uc774\ud130\ub85c, \uc0c1\uc218\ucc98\ub7fc \ubcc0\ud558\uc9c0 \uc54a\ub294 \uac12 \uc785\ub2c8\ub2e4. \uc704 \uc608\uc81c\ucc98\ub7fc \ud638\ucd9c\ud558\uba74\uc11c \ub123\uc5b4\uc900 \ub370\uc774\ud130\ub97c \ud558\uc704 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),c("section",{"data-markdown":!0,style:{fontSize:"28px"}},c("h2",{id:"data-"},"Data\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ud544\uc694 \uc694\uc18c"),c("h3",{id:"2-state"},"2. state"),c("p",{style:{width:"80%",margin:"0 auto"},className:"fragment"},c("img",{src:"/static/slides/image/react-basic/code3.png"})),c("aside",{className:"notes"},"state\ub294 \ubcc0\uc218\ucc98\ub7fc \ubcc0\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\ub97c \ub4e4\uace0\uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec \uc774\ubca4\ud2b8\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0c1\uc704\ucef4\ud3ec\ub10c\ud2b8\uc758 state\ub97c \uc790\uc2dd\uc5d0\uac8c \uc900\ub2e4\uba74 \uc5b4\ub5bb\uac8c \ub420\uae4c\uc694? \uc790\uc2dd\uc5d0\uc11c\ub294 props\ub85c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ubd80\ubaa8 \uc694\uc18c\uc758 this.state.a\uac00 \ubc14\ub010\ub2e4\uace0 \ud558\uba74 Re-Rendering\uc774 \ub418\uae30 \ub54c\ubb38\uc5d0 \uc790\uc2dd \ub610\ud55c \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4.")),c("section",{style:{fontSize:"28px"}},c("h2",null,"Data\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ud544\uc694 \uc694\uc18c"),c("h3",null,"3. Life Cycle"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/lifecycle.png"})),c("small",null,"\ucd9c\ucc98 - https://www.reddit.com/r/javascript/comments/45khex/reactjs_life_cycle_diagram_oc/"),c("aside",{className:"notes"},"\uc0dd\uba85\uc8fc\uae30 \uc785\ub2c8\ub2e4. \ub9cc\ub4e4\uc5b4 \uc9c8 \ub54c, \uc5c5\ub370\uc774\ud2b8 \ub420 \ub54c, \uc5c6\uc5b4\uc9c8 \ub54c 3\uac00\uc9c0 \ucf00\uc774\uc2a4\ub85c \ub098\ub220\uc838 rendering\uc774 \ub418\ub294\ub370 rendering\uc774 \ub418\ub294 \uacfc\uc815\uc5d0 \uac70\uccd0\uac00\ub294 \uba54\uc11c\ub4dc \ub4e4\uc785\ub2c8\ub2e4. \uc774 \uba54\uc11c\ub4dc \ub4e4\uc744 \uc774\uc6a9\ud574 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0dd\uc131\uc774\ub098 \uc5c5\ub370\uc774\ud2b8 \uc804\uc5d0 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uac70\ub098 \ucd08\uae30\ud654 \ud558\ub294 \uae30\ub2a5, \uc9c0\uc6cc\uc9c0\uae30 \uc9c1\uc804\uc5d0 \uc5b4\ub5a0\ud55c \ud589\ub3d9 \ub4f1\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),c("section",null,c("h2",null,"Think about it"),c("h3",{className:"fragment"},"\uc5b4\ub77c?"),c("p",{className:"fragment"},"\uadf8\ub807\ub2e4\uba74 state\uc640 props\ub294",c("br",null),"\uac01\uac01\uc758 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubaa8\ub450 \ub4e4\uace0\uc788\ub294 \uac74\uac00?"),c("h2",{className:"fragment"},"\u3147\u3147"),c("aside",{className:"notes"},"\ub124. \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub294 \uac01\uac01\uc758 state\uc640 props\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uae30\uc5d0 data\uac00 \uc5b4\ub514\uc5d0\uc11c \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\ub418\ub294\uc9c0 \uc8fc\uc758\uae4a\uac8c \uc0b4\ud53c\uace0 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.")),c("section",null,c("section",null,c("h2",null,"\uc774\ucbe4\uc5d0\uc11c \ub2e4\uc2dc\ubcf4\ub294 Redux"),c("p",{style:{width:"80%",margin:"0 auto"},className:"fragment"},c("img",{src:"/static/slides/image/react-basic/withRedux.png"}),c("small",null,"\ucd9c\ucc98 - https://css-tricks.com/learning-react-redux/")),c("aside",{className:"notes"},"Flux \ud328\ud134\uc740 \uaf2d \uc788\uc5b4\uc57c \ud558\ub294 \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc \uac70\uc758 \ud544\uc218\ucc98\ub7fc \uc790\ub9ac\uc7a1\uace0 \uc788\uc2b5\ub2c8\ub2e4. Redux\uac00 \uc5c6\ub294 Flux\uc5d0\uc11c\ub294 \uc67c\ucabd\uacfc \uac19\uc774 \uac01\uac01\uc758 \ub370\uc774\ud130\uac00 \uc5b4\uc9c0\ub7fd\uac8c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 Redux\ub294 Store\ub97c \uacf5\uc720\ud558\uae30\ub54c\ubb38\uc5d0 \uc5b4\ub514\uc11c\ub4e0 \uc790\uc720\ub86d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),c("section",{"data-markdown":!0,style:{fontSize:"28px"}},c("h2",null,"\uc774\ucbe4\uc5d0\uc11c \ub2e4\uc2dc\ubcf4\ub294 Redux"),c("p",{style:{width:"80%",margin:"0 auto"}},c("img",{src:"/static/slides/image/react-basic/code4.png"})),c("aside",{className:"notes"},"\uc774\ub7f0\uc2dd\uc73c\ub85c \ucf54\ub4dc\uac00 \ub098\uc624\ub294\ub370 \uc790\uc138\ud55c \uac83\uc740 \ucf54\ub4dc\ub97c \ubcf4\uba74\uc11c \uc9c4\ud589\ud558\uaca0\uc2b5\ub2c8\ub2e4."))),c("section",null,c("h2",null,"\uc774\uc81c \ucf54\ub4dc\ub97c \ubcf4\uba70 \uc774\ud574\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),c("a",{href:"localhost:3000"},"localhost:3000"))))}},MnKm:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/slides/react-basic",function(){return s("58bR")}])}},[["MnKm",0,1]]]);