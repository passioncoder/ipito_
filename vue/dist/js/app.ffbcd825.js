(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],f=0,m=[];f<r.length;f++)i=r[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0309":function(t,e,n){"use strict";n("3edb")},"036c":function(t,e,n){"use strict";n("8534")},"05dd":function(t,e,n){"use strict";n("5652")},"08bf":function(t,e,n){"use strict";n("747a")},"08c9":function(t,e,n){"use strict";n("f190")},"0bf7":function(t,e,n){},"10df":function(t,e,n){},"1b1c":function(t,e,n){},"1e36":function(t,e,n){},"1f0e":function(t,e,n){},"201f":function(t,e,n){"use strict";n("49f6")},"204a":function(t,e,n){},2723:function(t,e,n){t.exports=n.p+"img/logo_dark.c7308a0b.svg"},2890:function(t,e,n){t.exports=n.p+"img/arrow_next.cb20a108.svg"},3086:function(t,e,n){},"31df":function(t,e,n){},"38b9":function(t,e,n){"use strict";n("38d1")},"38d1":function(t,e,n){},"3ae1":function(t,e,n){"use strict";n("758a")},"3c3d":function(t,e,n){"use strict";n("9e4e")},"3ca0":function(t,e,n){},"3cb4":function(t,e,n){"use strict";n("6cf6")},"3edb":function(t,e,n){},"443a":function(t,e,n){t.exports=n.p+"img/post_img.fd2ef7f7.jpg"},4517:function(t,e,n){"use strict";n("204a")},"463a":function(t,e,n){},4960:function(t,e,n){"use strict";n("cb86")},4964:function(t,e,n){},"49ec":function(t,e,n){t.exports=n.p+"img/moon.eec7fc21.png"},"49f6":function(t,e,n){},5e3:function(t,e,n){t.exports=n.p+"img/avatar.60ebacea.jpg"},"52a7":function(t,e,n){"use strict";n("d629")},5314:function(t,e,n){"use strict";n("5abc")},5652:function(t,e,n){},5683:function(t,e,n){"use strict";n("efbf")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("TopHeaderBright"),t.showCompsOnMobile?t._e():n("SocialBar")],1),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{class:{moon:t.whiteSocialBar},attrs:{href:"#"}},[t._v("Facebook")])]),n("li",[n("a",{class:{moon:t.whiteSocialBar},attrs:{href:"#"}},[t._v("Instagram")])]),n("li",[n("a",{class:{moon:t.whiteSocialBar},attrs:{href:"#"}},[t._v("Twitter")])])])},r=[],c={name:"socialbar",data:function(){return{whiteSocialBar:!1}},watch:{$route:function(){"/moon"===this.$route.path||"/login"===this.$route.path?this.whiteSocialBar=!0:this.whiteSocialBar=!1}}},l=c,u=(n("4960"),n("7434"),n("2877")),f=Object(u["a"])(l,i,r,!1,null,"78c001e2",null),m=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{sticky:t.scrollPosition>0,stickyDark:t.isMoon&&t.scrollPosition>0}},[n("Navbar")],1)},p=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"wrapper"},[n("router-link",{attrs:{to:"/"}},[n("Logo")],1),n("NavBright",{class:{open:t.showNav}}),n("button",{class:{close_btn:!t.showNav},on:{click:function(e){t.showNav=!t.showNav}}})],1)},v=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.whiteLogo?t._e():s("img",{staticClass:"logo",attrs:{src:n("7e1a"),alt:"Logo"}}),t.whiteLogo?s("img",{staticClass:"logo",attrs:{src:n("2723"),alt:"Logo"}}):t._e(),s("p",{staticClass:"logo-text",class:{logoTextWhite:t.whiteLogo}},[t._v("I"),s("span",{staticClass:"red logo_text"},[t._v("p")]),t._v("ito")])])},b=[],g={name:"logo",data:function(){return{whiteLogo:!1}},watch:{$route:function(){"/moon"===this.$route.path?this.whiteLogo=!0:this.whiteLogo=!1}}},C=g,x=(n("ca53"),Object(u["a"])(C,h,b,!1,null,"17e90faf",null)),w=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-menu-list"},[n("span",{staticClass:"mobile-menu-item"},[t._v("Spain")]),n("div",{staticClass:"mobile-menu-item-flex"},[n("div",{staticClass:"sub-mobile-menu-flex"},[n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"mundaka"}}}},[t._v("Mundaka")]),n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"razo"}}}},[t._v("Razo")]),n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"Nemiña"}}}},[t._v("Nemiña")])],1)]),n("span",{staticClass:"mobile-menu-item"},[t._v("France")]),n("div",{staticClass:"mobile-menu-item-flex"},[n("div",{staticClass:"sub-mobile-menu-flex"},[n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"baie-des-trépassés"}}}},[t._v("Baie des Trépassés")]),n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"les-conches"}}}},[t._v("Les Conches")]),n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"côte-sauvage"}}}},[t._v("Côte-sauvage")])],1)]),n("span",{staticClass:"mobile-menu-item"},[t._v("Portugal")]),n("div",{staticClass:"mobile-menu-item-flex"},[n("div",{staticClass:"sub-mobile-menu-flex"},[n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"ericeira"}}}},[t._v("Ericeira")]),n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"nazare"}}}},[t._v("Nazare")]),n("router-link",{staticClass:"sub-mobile-menu-item",attrs:{to:{name:"Spot",params:{id:"peniche"}}}},[t._v("Peniche")])],1)]),n("router-link",{staticClass:"mobile-menu-item extern-link",attrs:{to:{name:"Moon"}}},[t._v("Moon")]),n("router-link",{staticClass:"mobile-menu-item extern-link",attrs:{to:{name:"Login"}}},[t._v("Login")]),t.mobileView?n("div",{staticClass:"social-list"},[t._m(0),t._m(1)]):t._e()],1)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[n("i",{staticClass:"scial_icon fab fa-instagram fa-lg"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[n("i",{staticClass:"scial_icon fab fa-twitter fa-lg"})])}],E={name:"navbright",data:function(){return{mobileView:!0}},methods:{handleView:function(){this.mobileView=window.innerWidth<=990}},created:function(){this.handleView()}},$=E,y=(n("7e99"),Object(u["a"])($,S,k,!1,null,"36546b09",null)),O=y.exports,j={name:"navbar",components:{Logo:w,NavBright:O},data:function(){return{showNav:!0}}},T=j,P=(n("0309"),Object(u["a"])(T,_,v,!1,null,"e90d48ea",null)),B=P.exports,M={name:"topheaderbright",components:{Navbar:B},data:function(){return{scrollPosition:null,isMoon:!1}},watch:{$route:function(){"/moon"===this.$route.path?this.isMoon=!0:this.isMoon=!1}},methods:{updateScroll:function(){this.scrollPosition=window.scrollY}},mounted:function(){window.addEventListener("scroll",this.updateScroll)}},F=M,L=(n("d41a"),Object(u["a"])(F,d,p,!1,null,"0705bdba",null)),H=L.exports,N={name:"app",components:{SocialBar:m,TopHeaderBright:H},data:function(){return{showCompsOnMobile:!0}},methods:{handleMobileComps:function(){this.showCompsOnMobile=window.innerWidth<=990}},created:function(){this.handleMobileComps()}},I=N,D=(n("5c64"),Object(u["a"])(I,a,o,!1,null,null,null)),W=D.exports,A=n("8c4f"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HomeTemplate")],1)},J=[],Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("HomeHeroSection"),n("CenterTextSection",{attrs:{title:t.homeCenterText.title,text:t.homeCenterText.text}}),n("EuropePostsSection"),n("Footer")],1)},q=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero-section"},[n("div",{staticClass:"content-wrapper"},[n("Headline",{staticClass:"hero-head",attrs:{title:"yey dude, wanna surf"}}),n("p",[t._v(" Sand bottom jumbled shorebreak send it monsters. Wave kook in da wa spit Nat Young, hollow pose on the nose, sets keyhole big finner? Back dooring reef kook of the day pitter dredging, double-up longboard smooth quad fin the OB. ")])],1),n("TeaserCard")],1)},V=[],U=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"teaser_card_container"},[s("h3",[t._v("Ericeira")]),s("p",[t._v(" Sand bottom jumbled shorebreak send it monsters. Wave kook in da wa spit Nat Young, hollow pose on the ")]),s("span",{staticClass:"coordinates"},[t._v("38° 58′ N , 9° 25′ Wv")]),s("span",{staticClass:"wave"},[t._v("Wave Alert")]),s("div",{staticClass:"info-container"},[s("div",{staticClass:"info-item"},[s("button",{staticClass:"wave-btn"},[s("img",{attrs:{src:n("eb17"),alt:"wave icon"}})]),s("div",{staticClass:"btn-text"},[t._v("3-4ft")])]),s("div",{staticClass:"info-item"},[s("button",{staticClass:"wave-btn"},[s("img",{attrs:{src:n("73df"),alt:"wave icon"}})]),s("div",{staticClass:"btn-text"},[t._v("17° Water")])])])])}],G={name:"teasercard"},K=G,X=(n("cc0a"),Object(u["a"])(K,U,Q,!1,null,"6646d330",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(" "+t._s(t.title)+" ")])},et=[],nt={name:"headline",props:{title:String}},st=nt,at=(n("b176"),Object(u["a"])(st,tt,et,!1,null,"76264100",null)),ot=at.exports,it={name:"herosection",components:{TeaserCard:Z,Headline:ot},data:function(){return{showTeaser:!0}},methods:{handleTeaser:function(){this.showTeaser=window.innerWidth<=990}},created:function(){this.handleTeaser()}},rt=it,ct=(n("5683"),Object(u["a"])(rt,R,V,!1,null,"08d59a61",null)),lt=ct.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"eu_post_container"},[t._m(0),n("PostList"),n("SliderControll",{attrs:{text:"swipe"}}),n("ReadPost")],1)},ft=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Top Posts "),n("span",{staticClass:"red"},[t._v(" of ")]),t._v(" Europe")])}],mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post_list_container"},[n("Post"),n("Post"),n("Post")],1)},dt=[],pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"single_post_container"},[s("div",{staticClass:"post_top_flex"},[s("div",{staticClass:"like_flex"},[s("img",{attrs:{src:n("965c"),alt:"Shaka hand",width:"100"}}),s("span",[t._v("435")])]),s("div",{staticClass:"avatar_flex"},[s("span",[t._v("Jordan")]),s("img",{attrs:{src:n("5000"),alt:"User Bild",width:"200"}})])]),s("div",{staticClass:"img_flex"},[s("div",{staticClass:"img_container"},[s("img",{attrs:{src:n("443a"),alt:"Surfer",width:"200"}})]),s("button",{staticClass:"like_btn"},[s("img",{attrs:{src:n("965c"),alt:"shaka hand",width:"100"}})]),s("span",{staticClass:"post_spot"},[t._v(" Ericeira ")])]),s("button",[t._v("Read "),s("span",{staticClass:"red"},[t._v("the ")]),t._v("Post")])])])}],vt={name:"post",data:function(){return{posts:[{likes:343,userFirstName:"Jordan",avatarImagePath:"@/assets/images/avatar/avatar.jpg",postImagePath:"@/assets/images/post_img/post_1.jpg"},{likes:343,userFirstName:"Jordan",avatarImagePath:"@/assets/images/avatar/avatar.jpg",postImagePath:"@/assets/images/post_img/post_1.jpg"},{likes:343,userFirstName:"Jordan",avatarImagePath:"@/assets/images/avatar/avatar.jpg",postImagePath:"@/assets/images/post_img/post_1.jpg"},{likes:343,userFirstName:"Jordan",avatarImagePath:"@/assets/images/avatar/avatar.jpg",postImagePath:"@/assets/images/post_img/post_1.jpg"}]}}},ht=vt,bt=(n("036c"),Object(u["a"])(ht,pt,_t,!1,null,"3f07a438",null)),gt=bt.exports,Ct={name:"postlist",components:{Post:gt}},xt=Ct,wt=(n("3ae1"),Object(u["a"])(xt,mt,dt,!1,null,"6bf734d4",null)),St=wt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider_controll_container"},[n("SliderBtnPrev"),n("span",{staticClass:"slider-text"},[t._v(t._s(t.text))]),n("SliderBtnNext")],1)},Et=[],$t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",[s("img",{attrs:{src:n("2890"),alt:"next button arrow"}})])}],Ot={name:"sliderbtnnext"},jt=Ot,Tt=(n("08c9"),Object(u["a"])(jt,$t,yt,!1,null,"0396aa78",null)),Pt=Tt.exports,Bt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",[s("img",{attrs:{src:n("617f"),alt:"prev button arrow"}})])}],Ft={name:"sliderbtnprev"},Lt=Ft,Ht=(n("d62e"),Object(u["a"])(Lt,Bt,Mt,!1,null,"2c191b2f",null)),Nt=Ht.exports,It={name:"slidercontroll",components:{SliderBtnNext:Pt,SliderBtnPrev:Nt},props:{text:String}},Dt=It,Wt=(n("ea53"),Object(u["a"])(Dt,kt,Et,!1,null,"083e43e4",null)),At=Wt.exports,zt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Jt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"read-post-container"},[s("div",{staticClass:"post_top_flex"},[s("div",{staticClass:"like_flex"},[s("img",{attrs:{src:n("965c"),alt:"Shaka hand",width:"100"}}),s("span",[t._v("435")])]),s("div",{staticClass:"avatar_flex"},[s("span",[t._v("Jordan")]),s("img",{attrs:{src:n("5000"),alt:"User Bild",width:"200"}})])]),s("div",{staticClass:"read-post-content"},[s("div",{staticClass:"post-img-container"},[s("img",{attrs:{src:n("443a"),alt:"surfer",width:"100"}})]),s("div",{staticClass:"text-container"},[s("h3",[t._v("Perfect day in Ericeira!")]),s("h4",[t._v("Ericeira")]),s("p",[t._v(" Sand bottom jumbled shorebreak send it monsters. Wave kook in da wa spit Nat Young, hollow pose on the nose, sets keyhole big finner? Back dooring reef kook of the day pitter dredging, double-up longboard smooth quad fin the OB. Line-up grommet spit goin’ mad air section? ")])])]),s("div",{staticClass:"back-btn-flex"},[s("button",{staticClass:"back-btn"},[t._v("Back")])])])}],Yt={name:"createpost",components:{}},qt=Yt,Rt=(n("52a7"),Object(u["a"])(qt,zt,Jt,!1,null,"1b5ee230",null)),Vt=Rt.exports,Ut={name:"europepostsection",components:{PostList:St,SliderControll:At,ReadPost:Vt}},Qt=Ut,Gt=(n("ccac"),Object(u["a"])(Qt,ut,ft,!1,null,"4f9eae6c",null)),Kt=Gt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"content-wrapper"},[n("h2",[t._v(" "+t._s(t.title)+" ")]),n("p",[t._v(" "+t._s(t.text)+" ")])])},Zt=[],te={name:"centertextsection",props:{title:String,text:String}},ee=te,ne=(n("bb4a"),Object(u["a"])(ee,Xt,Zt,!1,null,"58e59c19",null)),se=ne.exports,ae=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("video",{staticClass:"footer_video",attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[s("source",{attrs:{src:n("c4f0"),type:"video/mp4"}})]),t._m(0)])},oe=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-text-flex footer-wrapper"},[n("div",{staticClass:"dia-flex"},[n("a",{attrs:{href:"#"}},[t._v("Datenschutz")]),n("a",{attrs:{href:"#"}},[t._v("Impressum")]),n("a",{attrs:{href:"#"}},[t._v("Agbs")])]),n("div",[t._v("IP"),n("span",{staticClass:"red"},[t._v("I")]),t._v("TO 2020")])])}],ie={name:"Footer",components:{}},re=ie,ce=(n("7595"),Object(u["a"])(re,ae,oe,!1,null,"473dde38",null)),le=ce.exports,ue={name:"test",components:{HomeHeroSection:lt,EuropePostsSection:Kt,CenterTextSection:se,Footer:le},data:function(){return{homeCenterText:{title:"Never miss a wave again",text:"Sand bottom jumbled shorebreak send it monsters. Wave kook in da wa spit Nat Young, hollow pose on the nose, sets keyhole big finner? Back dooring reef kook of the day pitter dredging, double-up longboard smooth quad fin the OB. Line-up grommet spit goin’ mad air section? "}}}},fe=ue,me=(n("823e"),Object(u["a"])(fe,Y,q,!1,null,"05054568",null)),de=me.exports,pe={name:"Home",components:{HomeTemplate:de}},_e=pe,ve=(n("f46d"),Object(u["a"])(_e,z,J,!1,null,"7698ec02",null)),he=ve.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MoonTemplate")],1)},ge=[],Ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MoonHeroSection"),n("MoonDetailSection"),n("MoonFooter")],1)},xe=[],we=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"moon-hero-section",attrs:{id:"scene"}},[s("img",{attrs:{src:n("f7bf"),alt:"Stars Image"}}),s("div",{staticClass:"headline-container content-wrapper"},[s("Headline",{staticClass:"moon-headline ",attrs:{title:"Lets Talk about Moon and Tides"}})],1),s("MoonBg")],1)},Se=[],ke=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ee=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"moon-img-container"},[s("img",{attrs:{src:n("49ec"),alt:"Moon Image"}}),s("div",{staticClass:"phase-container"},[s("div",{staticClass:"phase"},[s("div",{staticClass:"phase-text"},[s("span",{staticClass:"red"},[t._v("Waxing")]),t._v(" Crescent")])]),s("div",{staticClass:"phase"},[s("div",{staticClass:"phase-text"},[t._v("First "),s("span",{staticClass:"red"},[t._v("Quater")])])]),s("div",{staticClass:"phase"},[s("div",{staticClass:"phase-text"},[s("span",{staticClass:"red"},[t._v("Full")]),t._v(" Moon")])]),s("div",{staticClass:"phase"},[s("div",{staticClass:"phase-text"},[t._v("Last "),s("span",{staticClass:"red"},[t._v("Quater")])])]),s("div",{staticClass:"phase"},[s("div",{staticClass:"phase-text"},[s("span",{staticClass:"red"},[t._v("Waning")]),t._v(" Crescent")])])])])}],$e={name:"moonbg"},ye=$e,Oe=(n("3c3d"),Object(u["a"])(ye,ke,Ee,!1,null,"202822d2",null)),je=Oe.exports,Te={name:"herosection",components:{Headline:ot,MoonBg:je}},Pe=Te,Be=(n("82d2"),Object(u["a"])(Pe,we,Se,!1,null,"3414c5a3",null)),Me=Be.exports,Fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"moon-detail-section"},[n("Headline",{staticClass:"moon-headline",attrs:{title:"Full Moon"}}),t._m(0)],1)},Le=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"moon-text-flex"},[s("img",{attrs:{src:n("49ec"),alt:""}}),s("p",[t._v(" Sand bottom jumbled shorebreak send it monsters. Wave kook in da wa spit Nat Young, hollow pose on the nose, sets keyhole big finner? Back dooring reef kook of the day pitter dredging, double-up longboard smooth quad fin the OB. Line-up grommet spit goin’ mad air section? ")])])}],He={name:"herosection",components:{Headline:ot},data:function(){return{phases:[{phaseName:"Waxing Crescent"}]}}},Ne=He,Ie=(n("b993"),Object(u["a"])(Ne,Fe,Le,!1,null,"c2516512",null)),De=Ie.exports,We=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ae=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer-text-flex footer-wrapper"},[n("div",{staticClass:"dia-flex"},[n("a",{attrs:{href:"#"}},[t._v("Daten"),n("span",{staticClass:"red"},[t._v("s")]),t._v("chutz")]),n("a",{attrs:{href:"#"}},[t._v("Im"),n("span",{staticClass:"red"},[t._v("p")]),t._v("ressum")]),n("a",{attrs:{href:"#"}},[t._v("A"),n("span",{staticClass:"red"},[t._v("g")]),t._v("bs")])]),n("div",[t._v("IPITO 20"),n("span",{staticClass:"red"},[t._v("20")])])])])}],ze={name:"moonfooter",components:{}},Je=ze,Ye=(n("cef9"),Object(u["a"])(Je,We,Ae,!1,null,"6b00bc72",null)),qe=Ye.exports,Re={name:"moontemplate",components:{MoonHeroSection:Me,MoonDetailSection:De,MoonFooter:qe}},Ve=Re,Ue=(n("995b"),Object(u["a"])(Ve,Ce,xe,!1,null,"6ce97aa1",null)),Qe=Ue.exports,Ge={name:"login",components:{MoonTemplate:Qe}},Ke=Ge,Xe=(n("7c37"),Object(u["a"])(Ke,be,ge,!1,null,"7267d31f",null)),Ze=Xe.exports,tn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LoginTemplate")],1)},en=[],nn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-template"},[n("Auth")],1)},sn=[],an=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-container"},[t.cmp?n("button",{staticClass:"back-btn",on:{click:function(e){return t.backToChoose()}}},[t._v(" BACK ")]):t._e(),t.showChoose?n("div",{staticClass:"auth-start-flex"},[t._m(0),n("p",[t._v("Stay always up to date!")]),n("TextBtn",{attrs:{text:"Login here"},on:{click:function(e){return t.displayForm("loginform")}}}),n("TextBtn",{attrs:{text:"Sign in here"},on:{click:function(e){return t.displayForm("signinform")}}})],1):t._e(),n(t.cmp,{tag:"component"})],1)},on=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("Join "),n("span",{staticClass:"red"},[t._v("the")]),t._v(" community")])}],rn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-form-container"},[n("h3",[t._v("Login")]),n("form",{attrs:{action:"#"}},[t._m(0),t._m(1),n("SubmitBtn",{attrs:{text:"Login"}})],1)])},cn=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-flex"},[n("label",{attrs:{for:"login_username"}},[t._v("Username:")]),n("input",{attrs:{type:"text",id:"login_username"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-flex"},[n("label",{attrs:{for:"login_password"}},[t._v("Password:")]),n("input",{attrs:{type:"text",id:"login_password"}})])}],ln=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{type:"submit"}},[t._v(" "+t._s(t.text)+" ")])},un=[],fn={name:"submitbtn",props:{text:String}},mn=fn,dn=(n("ef13"),Object(u["a"])(mn,ln,un,!1,null,"66c127e3",null)),pn=dn.exports,_n={name:"loginform",components:{SubmitBtn:pn}},vn=_n,hn=(n("c1ac"),Object(u["a"])(vn,rn,cn,!1,null,"56ec696c",null)),bn=hn.exports,gn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signin-form-container"},[n("h3",[t._v("Sign In")]),n("form",{attrs:{action:"#"}},[t._m(0),t._m(1),t._m(2),t._m(3),n("SubmitBtn",{attrs:{text:"Login"}})],1)])},Cn=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-flex"},[n("label",{attrs:{for:"signin_username"}},[t._v("Username:")]),n("input",{attrs:{type:"text",id:"signin_username"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-flex"},[n("label",{attrs:{for:"signin_email"}},[t._v("Email:")]),n("input",{attrs:{type:"email",id:"signin_email"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-flex"},[n("label",{attrs:{for:"signin_password"}},[t._v("Password:")]),n("input",{attrs:{type:"text",id:"signin_password"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-flex"},[n("label",{attrs:{for:"signin_password_rp"}},[t._v("Repeat Password:")]),n("input",{attrs:{type:"text",id:"signin_password_rp"}})])}],xn={name:"",components:{SubmitBtn:pn}},wn=xn,Sn=(n("8c03"),Object(u["a"])(wn,gn,Cn,!1,null,"5a0dbe41",null)),kn=Sn.exports,En=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[t._v(" "+t._s(t.text)+" ")])},$n=[],yn={name:"submitbtn",props:{text:String}},On=yn,jn=(n("5314"),Object(u["a"])(On,En,$n,!1,null,"37b4ca7b",null)),Tn=jn.exports,Pn={name:"auth",components:{loginform:bn,signinform:kn,TextBtn:Tn},data:function(){return{showChoose:!0,cmp:""}},methods:{displayForm:function(t){this.cmp=t,this.showChoose=!1},backToChoose:function(){this.cmp="",this.showChoose=!0}}},Bn=Pn,Mn=(n("38b9"),Object(u["a"])(Bn,an,on,!1,null,"a0103758",null)),Fn=Mn.exports,Ln={name:"logintemplate",components:{Auth:Fn}},Hn=Ln,Nn=(n("66d9"),Object(u["a"])(Hn,nn,sn,!1,null,"5c28ad42",null)),In=Nn.exports,Dn={name:"login",components:{LoginTemplate:In}},Wn=Dn,An=(n("4517"),Object(u["a"])(Wn,tn,en,!1,null,"3749083b",null)),zn=An.exports,Jn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spot"},[n("SpotTemplate")],1)},Yn=[],qn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("SpotHeroSection"),n("CenterTextSection",{attrs:{title:t.spotCenterText.title,text:t.spotCenterText.text}}),n("ForecastSection"),n("CenterTextSection",{attrs:{title:t.impressionsText.title,text:t.impressionsText.text}}),n("CreatePostSection"),n("SpotPostsSection"),n("Footer")],1)},Rn=[],Vn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero-section"},[n("div",{staticClass:"content-wrapper"},[n("Headline",{attrs:{title:this.$route.params.id}}),n("div",{staticClass:"hero-data-flex"},[n("span",[t._v("Tide: "+t._s(t.weatherData.type))]),n("span",[t._v("Swell: ")]),n("span",[t._v("Wind: ")]),n("span",[t._v("Water:")])])],1)])},Un=[],Qn={name:"spotherosection",components:{Headline:ot},data:function(){return{weatherData:[]}},methods:{}},Gn=Qn,Kn=(n("f854"),Object(u["a"])(Gn,Vn,Un,!1,null,"486a4fdc",null)),Xn=Kn.exports,Zn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"forecast-container"},[t._m(0),n("SliderControll",{attrs:{text:"22.10.2020"}}),n("ForecastSingleDay")],1)},ts=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"forecast-text"},[t._v(" 7 "),n("span",{staticClass:"red"},[t._v(" Day ")]),t._v(" Forecast ")])}],es=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"forecast-day-flex"},t._l(t.weekdays,(function(e){return n("div",{key:e.day,staticClass:"single-day-container"},[n("h3",[t._v(t._s(e.day))]),n("p",[t._v(t._s(e.wave))]),n("p",[t._v("Low Tide: "+t._s(e.lTide))]),n("p",[t._v("High Tide: "+t._s(e.hTide))]),n("p",[t._v(t._s(e.moon))]),n("p",[t._v(t._s(e.wind))]),n("p",[t._v(t._s(e.temp))])])})),0)},ns=[],ss={name:"forecastsingleday",components:{},data:function(){return{weekdays:[{day:"monday",date:"20.10.2020",wave:"3ft - 4ft",lTide:"12:30",hTide:"0:30",moon:"Full-Moon",wind:"On-Shore",temp:"20°"},{day:"thuesday",date:"21.10.2020",wave:"2ft - 3ft",lTide:"13:30",hTide:"1:30",moon:"Full-Moon",wind:"Off-Shore",temp:"17°"},{day:"wednesday",date:"22.10.2020",wave:"3.5ft - 4ft",lTide:"14:30",hTide:"2:30",moon:"Full-Moon",wind:"On-Shore",temp:"19°"},{day:"thursday",date:"23.10.2020",wave:"1ft - 2ft",lTide:"15:30",hTide:"3:30",moon:"Full-Moon",wind:"Off-Shore",temp:"23°"},{day:"friday",date:"24.10.2020",wave:"0.5ft - 2ft",lTide:"16:30",hTide:"4:30",moon:"Full-Moon",wind:"On-Shore",temp:"22°"},{day:"saturday",date:"25.10.2020",wave:"5ft - 6ft",lTide:"17:30",hTide:"5:30",moon:"Full-Moon",wind:"Off-Shore",temp:"19°"},{day:"sunday",date:"26.10.2020",wave:"2ft - 4ft",lTide:"18:30",hTide:"6:30",moon:"Full-Moon",wind:"On-Shore",temp:"25°"}]}},methods:{}},as=ss,os=(n("201f"),Object(u["a"])(as,es,ns,!1,null,"5361413d",null)),is=os.exports,rs={name:"forecastsection",components:{ForecastSingleDay:is,SliderControll:At}},cs=rs,ls=(n("9111"),Object(u["a"])(cs,Zn,ts,!1,null,"1a9e829f",null)),us=ls.exports,fs=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"create-post-section"},[n("CreatePost")],1)},ms=[],ds=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"create-post-container",attrs:{action:"#"}},[n("CreatePostDragAndDrop"),t._m(0),n("CreatePostForm")],1)},ps=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Create "),n("span",{staticClass:"red"},[t._v("A")]),t._v(" Post")])}],_s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vs=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"drop-zone"},[s("div",{staticClass:"drop-zone-text-container"},[s("img",{attrs:{src:n("9f3e"),alt:"Drag and Drop Icon"}}),s("span",{staticClass:"drop-zone-text"},[t._v("Drag and Drop A Pic")])])])}],hs={name:""},bs=hs,gs=(n("fef4"),Object(u["a"])(bs,_s,vs,!1,null,"92e81fbc",null)),Cs=gs.exports,xs=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"post-input-container"},[t._m(0),t._m(1),t._m(2),s("button",{attrs:{type:"submit"},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[s("img",{attrs:{src:n("8d53"),alt:"Paper Plane"}})])])},ws=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-input-flex"},[n("label",{attrs:{for:"postheadline"}},[t._v("Headline:")]),n("input",{attrs:{type:"text",id:"postheadline"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-input-flex"},[n("label",{attrs:{for:"postspot"}},[t._v("Spot:")]),n("input",{attrs:{type:"text",id:"postspot"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-input-flex textarea-flex"},[n("label",{attrs:{for:"postheadline"}},[t._v("Text:")]),n("textarea",{attrs:{name:"text",id:"text",cols:"40",rows:"5"}})])}],Ss={name:"createpostform"},ks=Ss,Es=(n("c3d7"),Object(u["a"])(ks,xs,ws,!1,null,"eba86332",null)),$s=Es.exports,ys={name:"createpost",components:{CreatePostDragAndDrop:Cs,CreatePostForm:$s}},Os=ys,js=(n("3cb4"),Object(u["a"])(Os,ds,ps,!1,null,"16707bf1",null)),Ts=js.exports,Ps={name:"createpostsection",components:{CreatePost:Ts}},Bs=Ps,Ms=(n("fda8"),Object(u["a"])(Bs,fs,ms,!1,null,"1a204c20",null)),Fs=Ms.exports,Ls=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"spot-post-container"},[n("Headline2",{attrs:{title:this.$route.params.id}}),n("PostList"),n("SliderControll",{attrs:{text:"Swipe"}})],1)},Hs=[],Ns=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v(" "+t._s(t.title)+" ")])},Is=[],Ds={name:"headline",props:{title:String}},Ws=Ds,As=(n("5f07"),Object(u["a"])(Ws,Ns,Is,!1,null,"bf76d1ae",null)),zs=As.exports,Js={name:"europepostsection",components:{PostList:St,SliderControll:At,Headline2:zs},data:function(){return{headlineText:{text:"Top Posts of"}}}},Ys=Js,qs=(n("7786"),Object(u["a"])(Ys,Ls,Hs,!1,null,"191d9a23",null)),Rs=qs.exports,Vs={name:"test",components:{SpotHeroSection:Xn,CenterTextSection:se,ForecastSection:us,CreatePostSection:Fs,SpotPostsSection:Rs,Footer:le},data:function(){return{spotCenterText:{title:"Surf Capital of Portugal",text:"Sand bottom jumbled shorebreak send it monsters. Wave kook in da wa spit Nat Young, hollow pose on the nose, sets keyhole big finner? Back dooring reef kook of the day pitter dredging, double-up longboard smooth quad fin the OB. Line-up grommet spit goin’ mad air section? "},impressionsText:{title:"Spot Impressions!",text:"Got some good impressions of this spot? Take some time and create an Article or just look for other cool posts!"}}}},Us=Vs,Qs=(n("08bf"),Object(u["a"])(Us,qn,Rn,!1,null,"5875dbad",null)),Gs=Qs.exports,Ks={name:"Home",components:{SpotTemplate:Gs}},Xs=Ks,Zs=(n("05dd"),Object(u["a"])(Xs,Jn,Yn,!1,null,"1bfb5717",null)),ta=Zs.exports;s["a"].use(A["a"]);var ea=[{path:"/",name:"Home",component:he},{path:"/moon",name:"Moon",component:Ze},{path:"/moon/:id",name:"MoonDetail",component:Ze},{path:"/spot/:id",name:"Spot",component:ta},{path:"/login",name:"Login",component:zn}],na=new A["a"]({routes:ea}),sa=na,aa=n("2f62");s["a"].use(aa["a"]);var oa=new aa["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:sa,store:oa,render:function(t){return t(W)}}).$mount("#app")},"5abc":function(t,e,n){},"5c64":function(t,e,n){"use strict";n("d32a")},"5f07":function(t,e,n){"use strict";n("10df")},"617f":function(t,e,n){t.exports=n.p+"img/arrow_prev.e499cef8.svg"},6460:function(t,e,n){},"66d9":function(t,e,n){"use strict";n("0bf7")},"6cf6":function(t,e,n){},"73df":function(t,e,n){t.exports=n.p+"img/temp.65ba519a.svg"},7434:function(t,e,n){"use strict";n("dfa6")},"747a":function(t,e,n){},"758a":function(t,e,n){},7595:function(t,e,n){"use strict";n("3086")},7786:function(t,e,n){"use strict";n("1f0e")},"78c9":function(t,e,n){},"7c37":function(t,e,n){"use strict";n("b484")},"7e1a":function(t,e,n){t.exports=n.p+"img/logo_bright.bf83f2ee.svg"},"7e99":function(t,e,n){"use strict";n("9325")},"823e":function(t,e,n){"use strict";n("8d2d")},"82d2":function(t,e,n){"use strict";n("bfed")},8534:function(t,e,n){},"8c03":function(t,e,n){"use strict";n("78c9")},"8d2d":function(t,e,n){},"8d53":function(t,e,n){t.exports=n.p+"img/submit_icon.89c74d09.svg"},9111:function(t,e,n){"use strict";n("d19d")},9325:function(t,e,n){},"94e0":function(t,e,n){},"965c":function(t,e,n){t.exports=n.p+"img/shaka.f483baf4.svg"},"995b":function(t,e,n){"use strict";n("af2c")},"9e4e":function(t,e,n){},"9f3e":function(t,e,n){t.exports=n.p+"img/upload_icon.55d4a17c.svg"},af2c:function(t,e,n){},b176:function(t,e,n){"use strict";n("1e36")},b484:function(t,e,n){},b993:function(t,e,n){"use strict";n("ce5c")},bb4a:function(t,e,n){"use strict";n("d4c1")},bfed:function(t,e,n){},c0d7:function(t,e,n){},c1ac:function(t,e,n){"use strict";n("eab4")},c3d7:function(t,e,n){"use strict";n("fee1")},c4f0:function(t,e,n){t.exports=n.p+"media/yoooo.0d14c2fa.mp4"},ca53:function(t,e,n){"use strict";n("4964")},cb86:function(t,e,n){},cc0a:function(t,e,n){"use strict";n("f468")},ccac:function(t,e,n){"use strict";n("f2a9")},cd84:function(t,e,n){},ce5c:function(t,e,n){},cef9:function(t,e,n){"use strict";n("3ca0")},d19d:function(t,e,n){},d32a:function(t,e,n){},d41a:function(t,e,n){"use strict";n("31df")},d4c1:function(t,e,n){},d629:function(t,e,n){},d62e:function(t,e,n){"use strict";n("1b1c")},dfa6:function(t,e,n){},e75a:function(t,e,n){},ea53:function(t,e,n){"use strict";n("c0d7")},eab4:function(t,e,n){},eb17:function(t,e,n){t.exports=n.p+"img/wave.21c7b229.svg"},ef13:function(t,e,n){"use strict";n("e75a")},efbf:function(t,e,n){},f190:function(t,e,n){},f2a9:function(t,e,n){},f468:function(t,e,n){},f46d:function(t,e,n){"use strict";n("cd84")},f7bf:function(t,e,n){t.exports=n.p+"img/moon-bg.e7c14892.jpg"},f854:function(t,e,n){"use strict";n("94e0")},fda8:function(t,e,n){"use strict";n("6460")},fee1:function(t,e,n){},fef4:function(t,e,n){"use strict";n("463a")}});
//# sourceMappingURL=app.ffbcd825.js.map