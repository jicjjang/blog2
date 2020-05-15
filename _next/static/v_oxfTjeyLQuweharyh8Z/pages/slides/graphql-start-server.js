(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{L5Tm:function(l,e,a){"use strict";a.r(e);var s=a("q1tI"),t=a("xU61"),i=a("WYo3"),n=a("5P1b"),r=s.createElement,o=i.a.postsStore;e.default=function(){return r(t.a,{slide:o.getItem("graphql-start-server")},r("div",{className:"slides"},r("section",null,r("h2",null,"GraphQL \uc2dc\uc791\ud558\uae30 1"),r("h3",null,"NHN Bugs"),r("p",null,r("small",null,"Created by"," ",r("a",{href:n.f,target:"_blank"},"Junseok, Choi"))),r("aside",{className:"notes"},"\uc8fc\uc81c\ub97c \uc2dc\uc791\ud558\uae30 1\ub85c \uc815\ud55c\uac83\uc740, \uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \ubaa8\ub450 \uc801\uc6a9\ud574\uc57c \ud558\uae30 \ub54c\ubb38\uc778\ub370, \uae08\uc77c \ubc1c\ud45c\ub294 \uc11c\ubc84\ub97c \uc704\uc8fc\ub85c \ubc1c\ud45c\ub97c \uc9c4\ud589\ud558\uace0, \ucd94\ud6c4 \ubc1c\ud45c\uc5d0\uc11c Vue\uc5d0 \uc801\uc6a9\ud55c \ud074\ub77c\uc774\uc5b8\ud2b8 \uc704\uc8fc\uc758 \ubc1c\ud45c\ub97c \uc9c4\ud589\ud558\uaca0\uc2b5\ub2c8\ub2e4.")),r("section",null,r("div",null,r("h2",null,"\uc21c\uc11c"),r("ul",{style:{listStyle:"none",margin:"0"}},r("li",{className:"fragment"},"1. About GraphQL"),r("li",{className:"fragment"},"2. Example GraphQL"),r("li",{className:"fragment"},"3. Stable GraphQL"),r("li",{className:"fragment"},"Q & A")))),r("section",null,r("section",null,r("h2",null,"1. About GraphQL"),r("div",{style:{width:"90%",margin:"0 auto"}},r("span",{style:{display:"inline-block",width:"58%",margin:"5px",verticalAlign:"top"}},r("img",{className:"fragment","data-fragment-index":"1",src:"/static/slides/image/graphql-start/about1.jpg"}),r("div",{className:"fragment",style:{fontSize:"20px"},"data-fragment-index":"3"},"\ud544\uc694\ud55c \uac83\ub9cc \uc815\ud655\ud788 \ubb3c\uc5b4\ubcfc \uc218\uc788\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uba70 \uc2dc\uac04\uc774 \uc9c0\ub0a8\uc5d0 \ub530\ub77c API\ub97c \uc27d\uac8c \uac1c\ubc1c\ud560 \uc218 \uc788\ub3c4\ub85d...")),r("span",{style:{display:"inline-block",width:"38%",margin:"5px"}},r("img",{className:"fragment","data-fragment-index":"2",src:"/static/slides/image/graphql-start/about2.jpg"}),r("div",{className:"fragment",style:{fontSize:"20px"},"data-fragment-index":"4"},"GraphQL\uc740 \ub2e8\ub3c5 \ubc84\uc804 \uad00\ub9ac\ub97c \ud1b5\ud574 \uae30\uc874 \ucf54\ub4dc \uc218\uc815\uc5c6\uc774 \ubcf4\ub2e4 \uae68\ub057\ud558\uace0 \uc720\uc9c0\ubcf4\uc218\uac00 \uc27d\uac8c \uc0ac\uc6a9\uc774 \uac00\ub2a5..."))),r("aside",{className:"notes"},"4/4",r("br",null),"\uc774\ub7ec\ud55c \uc7a5\uc810\uc774 \uc788\ub294\ub370\uc694, \uc800\ud76c \uc11c\ube44\uc2a4\uc5d0 \uc801\uc6a9\ud55c\ub2e4\uba74 \uc5b4\ub5a4 \ub3c4\uc6c0\uc774 \ub420\uc9c0, \uc5b4\ub5a4 \uc810\uc744 \ubbf8\ub9ac \uc0b4\ud3b4\ubd10\uc57c \ud560 \uc9c0 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.")),r("section",null,r("h2",null,"\ub4e4\uc5b4\uac00\uae30\uc5d0 \uc55e\uc11c..."),r("div",{style:{display:"inline-block",width:"45%",verticalAlign:"top"}},r("img",{className:"fragment","data-fragment-index":"1",src:"/static/slides/image/graphql-start/apollo1.png"}),r("div",{className:"fragment","data-fragment-index":"3"},r("a",{href:"https://graphql-kr.github.io/code/#apollo-server-https-www-apollographql-com-docs-apollo-server-github-https-github-com-apollographql-apollo-server-npm-https-www-npmjs-com-package-apollo-server-express",target:"_blank"},"Apollo\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."))),r("div",{style:{display:"inline-block",width:"50%"}},r("img",{className:"fragment","data-fragment-index":"2",src:"/static/slides/image/graphql-start/apollo2.png"})),r("aside",{className:"notes"},"3/3",r("br",null),"\uadf8 \uc804\uc5d0, GraphQL\uc740 Apollo\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c `GraphQL\uc740 API\ub97c \uc704\ud55c \ucffc\ub9ac\uc5b8\uc5b4` \uc774\ubbc0\ub85c \uc11c\ubc84\ub9cc \uc9c0\uc6d0\uc744 \ud569\ub2c8\ub2e4. \uc11c\ubc84\uc5d0 GraphQL\uc744 \uc801\uc6a9\ud558\uace0, \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ub9cc \ud638\ucd9c\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \ud504\ub860\ud2b8\uc640 \uc11c\ubc84 \uc0ac\uc774 GraphQL \ub370\uc774\ud130\ub97c \ud3b8\ub9ac\ud558\uac8c \uad50\ud658\ud560 \uc218 \uc788\ub3c4\ub85d Apollo\uac00 \ub3c4\uc640\uc90d\ub2c8\ub2e4.",r("br",null),r("br",null),"Apollo\ub294 JavaScript \uc11c\ubc84 \ud504\ub808\uc784\uc6cc\ud06c\ub4e4\uc5d0 \ub300\ud574\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\uc640\uc758 \ub354\uc6b1 \uc26c\uc6b4 \uc5f0\uacb0\uc744 \uc704\ud574 \ubcc4\ub3c4\uc758 \uc9c0\uc6d0 \ub610\ud55c \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4.",r("br",null),r("br",null),"\ub610\ud55c, GraphQL\uc5d0\uc11c\ub3c4 \uacf5\uc2dd\uc801\uc73c\ub85c Apollo\ub97c \uc0ac\uc6a9\ud558\ub77c\uace0 \uac00\uc774\ub4dc\ub97c \uc81c\uacf5\ud574\uc90d\ub2c8\ub2e4. (\ubb3c\ub860 \uc11c\ubc84\uae4c\uc9c0 \ucee4\ubc84\ud574\uc90d\ub2c8\ub2e4.)")),r("section",null,r("h3",null,r("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql/blob/master/api/graphql/typeDefs.js",target:"_blank"},"Type \uc815\uc758")),r("div",null,r("img",{className:"fragment",style:{display:"inline-block",width:"15%",margin:"0 10px"},src:"/static/slides/image/graphql-start-server/type1.jpg"}),r("img",{className:"fragment",style:{display:"inline-block",width:"15%",margin:"0 10px",verticalAlign:"top"},src:"/static/slides/image/graphql-start-server/type2.jpg"}),r("span",{className:"fragment",style:{display:"inline-block",width:"65%",marginTop:"20%",verticalAlign:"top"}},"MVC \ubaa8\ub378\uc5d0\uc11c\uc758 Model\uacfc \ub3d9\uc77c")),r("aside",{className:"notes"},"2/3",r("br",null),"MVC \ubaa8\ub378\uc5d0\uc11c\uc758 Model\uacfc \ub3d9\uc77c\ud558\uac8c DB\uc758 \ud544\ub4dc\uac00 \uc544\ub2cc,",r("br",null),"3/3",r("br",null),"\uac00\uc838\uc62c \ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc0ac\uc804\uc5d0 \uc815\uc758\ub97c \ud574\ub193\uc2b5\ub2c8\ub2e4.")),r("section",null,r("h3",null,r("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql/blob/master/api/graphql/typeDefs.js",target:"_blank"},"Query & Mutation \uc815\uc758")),r("div",null,r("img",{className:"fragment",style:{display:"inline-block",width:"25%",margin:"0 10px"},src:"/static/slides/image/graphql-start-server/query_mutation.jpg"}),r("span",{className:"fragment",style:{display:"inline-block",width:"65%",marginTop:"20%",verticalAlign:"top"}},"\ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\ub294 \uc870\ud569\uc778 Query \ubc0f Mutation\uc744 \uc815\uc758\ud569\ub2c8\ub2e4.")),r("aside",{className:"notes"},"1/2",r("br",null),"\uc800\ud76c\uac00 \uae30\uc874\uc5d0 \ub9cc\ub4e4\ub358 Query\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4. Mutation\uc740 Get\uc774 \uc544\ub2cc Post, Put, Delete, Options \uc694\uccad\ub4e4\uc774\uba70,",r("br",null),"2/2",r("br",null),"\uc815\uc758\uc5d0 \uc788\uc5b4\uc11c Get\uacfc \ud070 \ucc28\uc774\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.")),r("section",null,r("h3",null,"Interface \uc815\uc758"),r("div",null,r("div",{className:"fragment",style:{width:"48%",margin:"0 auto"}},r("img",{src:"/static/slides/image/graphql-start-server/code1.png"})),r("div",{className:"fragment"},"interface\ub97c \uc0c1\uc18d\ud558\uc5ec \ud0c0\uc785 \uad6c\ud604")),r("aside",{className:"notes"},"1/2",r("br",null),"React, Vue\uc5d0 Flow\ub098 Typescript\ub85c \ud0c0\uc785\uc5d0 \uac15\uc81c\uc131\uc744 \ubd80\uc5ec\ub294 \uac83\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c",r("br",null),"2/2",r("br",null),"GraphQL\uc5d0 Interface\ub97c \uc815\uc758 \ud6c4, type\uc5d0\uc11c implements \ud55c \uac12\uc744 \uc815\uc758\ud569\ub2c8\ub2e4.")),r("section",null,r("h3",null,"Resolver"),r("div",{className:"fragment",style:{display:"inline-block",width:"55%",verticalAlign:"top"}},r("img",{src:"/static/slides/image/graphql-start-server/resolvers1.png"})),r("div",{className:"fragment",style:{display:"inline-block",width:"40%",margin:"0 10px"}},r("img",{src:"/static/slides/image/graphql-start-server/resolvers2.png"})),r("div",{className:"fragment"},"\uc815\uc758\ud55c Query\uc640 Mutation\uc5d0 \ub300\ud55c \ub0b4\uc6a9\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."),r("aside",{className:"notes"},"2/3",r("br",null),"type\uc73c\ub85c \uc815\uc758\ud55c \ubaa8\ub378\uc5d0 \ub9de\uac8c \uae30\ub2a5\ub4e4\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4.",r("br",null),"3/3",r("br",null),"\ubaa8\ub378\ub4e4\uc774 \uad6c\ud604\ub418\uc5b4\uc788\ub294 \uc774\uc720\ub294, \ud574\ub2f9 \ubaa8\ub378\uc5d0\uc11c \uc870\uc778\ud558\uc5ec \uac00\uc838\uc624\ub294 \uac12\ub4e4\uc744 \uc5b4\ub5bb\uac8c \uac00\uc838\uc62c\uc9c0\uc5d0 \ub300\ud574 \uc815\uc758\ud55c \uac83\uc785\ub2c8\ub2e4. `pubDetail` Query\ub97c \uc2e4\ud589\ud55c\ub2e4\uace0 \ud558\uc600\uc744 \ub54c, return \uac12\uc740 Pub \ubaa8\ub378\uacfc \uac19\uc740\ub370 Pub \uc5d0\ub294 Feed\uc758 \ubc30\uc5f4\uc778 `_feedList` \uac12\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uac12\uc744 \uad6c\ud604\ud574\uc90d\ub2c8\ub2e4. \ub610\ud55c, Feed\uc5d0\uc11c \uc5f0\uacb0\ub41c, \uc5f0\uacb0\ub41c, \uc5f0\uacb0\ub41c.... \uac12\ub4e4\uc744 \ubaa8\ub450 \uc815\uc758\ud574\uc8fc\uba74 \ud544\uc694\ud560 \uacbd\uc6b0, \uc6d0\ud558\ub294 \ucffc\ub9ac\uc5d0 \ub300\ud55c \uacb0\uacfc\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),r("section",null,r("h3",null,"2. Example GraphQL"),r("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},r("div",{style:{fontSize:"20px"}},r("a",{href:"https://github.com/seouldrinker/seoulDrinkerGraphql",target:"_blank"},"< \uc608\uc81c\ub97c \ubcf4\uba74\uc11c \ud655\uc778\ud574\ubd05\uc2dc\ub2e4! >")))),r("section",null,r("section",null,r("h3",null,"3. Stable GraphQL"),r("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},r("img",{src:"/static/slides/image/graphql-start-server/stable1.png"}),r("div",{style:{fontSize:"20px"}},r("a",{href:"https://www.apollographql.com/docs/#client-section",target:"_blank"},"< Apollo \ud074\ub77c\uc774\uc5b8\ud2b8 >"))),r("div",{className:"fragment",style:{display:"inline-block",width:"40%"}},r("img",{src:"/static/slides/image/graphql-start-server/stable2.png"}),r("div",{style:{fontSize:"20px"}},r("a",{href:"http://graphql.org/code/#server-libraries",target:"_blank"},"< GraphQL \uc11c\ubc84 >"))),r("div",{className:"fragment"},"\uc11c\ubc84\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8 \uac01\uc885 \uc5b8\uc5b4 \ubc0f \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \ub300\uc751"),r("aside",{className:"notes"},"3/3",r("br",null),"GraphQL\uac00 \ub9cc\ub4e4\uc5b4\uc9c4 12\ub144\ub3c4 \uc774\ud6c4\ub85c \uc11c\ubc84\ub294 \uac01\uc885 \uc5b8\uc5b4\uc5d0 \ub300\ud55c \uc9c0\uc6d0\uc744 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. Apollo\ub294 16\ub144 2\uc6d4 \uacbd \uc2dc\uc791\ud558\uc600\uc9c0\ub9cc \ud604\uc7ac \uc2a4\ud0c0 6,500\uc5ec\uac1c\uc5d0 contributor\uac00 700\uba85 \uc774\uc0c1\uc785\ub2c8\ub2e4.")),r("section",null,r("h3",null,"\uc0ac\uc6a9\ud558\uba74\uc11c \ubc1c\uacac\ud55c \uc774\uc288?!"),r("div",{className:"fragment"},"\ub294 \uc544\uc9c1\uae4c\uc9c0 \uc5c6\uc2b5\ub2c8\ub2e4."),r("aside",{className:"notes"},"1/1",r("br",null),"\uc544\uc9c1\uae4c\uc9c0 \ub9cc\ub4e4\uc5b4\ubcf4\uba74\uc11c \ubc1c\uacac\ud55c \uc774\uc288\ub294 \uc5c6\uace0, Get, Post \ub4f1 \ub3d9\uc791\uc740 \ud655\uc778\ud588\uc9c0\ub9cc \ud30c\uc77c\uc774\ub098 \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\uc5d0 \ub300\ud55c \uad6c\ud604\uc744 \ud574\ubcf4\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.")),r("section",null,r("h3",null,"\ubc85\uc2a4\uc5d0 \ub3c4\uc6c0\uc774 \ub420\ub9cc\ud55c \ubd80\ubd84"),r("div",{className:"fragment"},"\ud074\ub77c\uc774\uc5b8\ud2b8 & \uc6f9, \uc9c0\uae08\uc758 API\ub85c \ud55c\ubc88\uc5d0!!"),r("aside",{className:"notes"},"1/1",r("br",null),"\ud074\ub77c\uc774\uc5b8\ud2b8\uc640 \uc6f9 \ubaa8\ub450 API\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uace0 \ud558\uba74, \uc11c\ub85c \ub2e4\ub978 API\ub97c \uac00\uc838\uc624\ub294 \uc774\uc288\uac00 \uc788\ub294\ub370 \uc774\ub97c GrapghQL\ub85c \ud574\uacb0\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),r("section",null,r("h3",null,"\uc0ac\uc6a9 \uc911\uc778 \uae30\uc5c5"),r("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},r("img",{src:"/static/slides/image/graphql-start/users.png"}),r("div",{style:{fontSize:"20px"}},r("a",{href:"http://graphql.org/users/",target:"_blank"},"< \ub354 \ub9ce\uc740 \uae30\uc5c5\ub4e4 >"))),r("aside",{className:"notes"},"1/1",r("br",null),"\ub9ce\uc740 \uae30\uc5c5\uc5d0\uc11c \uc0ac\uc6a9\uc911\uc774\uc9c0\ub9cc, \ub300\ud45c\uc801\uc73c\ub85c \uc774\ubbf8\uc9c0\uc640 \uac19\uc774 \ud398\uc774\uc2a4\ubd81, \uae43\ud5d9, \ud540\ud130\ub808\uc2a4\ud2b8, \ucf54\uc138\ub77c \ub4f1\ub4f1\uc758 \uae30\uc5c5\ub4e4\uc5d0\uc11c \uc0ac\uc6a9 \uc911\uc785\ub2c8\ub2e4.")),r("section",null,r("h3",null,"\ucee8\ud37c\ub7f0\uc2a4"),r("div",{className:"fragment",style:{display:"inline-block",width:"50%",verticalAlign:"top"}},r("img",{src:"/static/slides/image/graphql-start/conference.png"}),r("div",{style:{fontSize:"25px"}},r("a",{href:"https://summit.graphql.com/",target:"_blank"},"< \ubc1c\ud45c\uc790 - \ud398\uc774\uc2a4\ubd81, \uae43\ud5d9, \ud2b8\uc704\uce58, oauth, IBM \ub4f1\ub4f1 \uae30\uc5c5 \uc9c1\uc6d0\ub4e4... >"))),r("aside",{className:"notes"},"1/1",r("br",null),"2016, 2017\ub144\ub3c4\uc5d0 Apollo\uc758 \uc8fc\ub3c4\ub85c \ucee8\ud37c\ub7f0\uc2a4\uac00 \uc774\ub8e8\uc5b4\uc84c\uc73c\uba70 \ub9e4\ub144 \uac1c\ucd5c\ub420 \uc608\uc815\uc785\ub2c8\ub2e4."))),r("section",null,r("section",null,r("h1",null,"Q & A")),r("section",null,r("h1",null,"\ub05d"),r("div",null,"\uac10\uc0ac\ud569\ub2c8\ub2e4.")))))}},kDFV:function(l,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/slides/graphql-start-server",function(){return a("L5Tm")}])}},[["kDFV",0,1]]]);