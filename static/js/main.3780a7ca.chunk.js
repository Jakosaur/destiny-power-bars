(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={characterDisplay:"CharacterDisplay_characterDisplay__20O9A",header:"CharacterDisplay_header__2fx5d",emblemBackground:"CharacterDisplay_emblemBackground__2pAjE",name:"CharacterDisplay_name__2j8PA",power:"CharacterDisplay_power__1p583",details:"CharacterDisplay_details__2ZMpw",hints:"CharacterDisplay_hints__6LSq6",detailsRow:"CharacterDisplay_detailsRow__QQFTB",hint:"CharacterDisplay_hint__37yjz",detailsLabel:"CharacterDisplay_detailsLabel__s8ZLQ",detailsInlineIcon:"CharacterDisplay_detailsInlineIcon__Wzpbv",detailsValue:"CharacterDisplay_detailsValue__3wf4f",worldDropHint:"CharacterDisplay_worldDropHint__jKU-s",powerfulHint:"CharacterDisplay_powerfulHint__3lLnw",pinnacleHint:"CharacterDisplay_pinnacleHint__3p81I",separator:"CharacterDisplay_separator__k4z6W",hintExtra:"CharacterDisplay_hintExtra__2jJV6",hintExtraInner:"CharacterDisplay_hintExtraInner__2Qfbj",powerBars:"CharacterDisplay_powerBars__3t0B5",powerRange:"CharacterDisplay_powerRange__1d86z",rangeLine:"CharacterDisplay_rangeLine__358zP",powerLabel:"CharacterDisplay_powerLabel__3EDmr",indicator:"CharacterDisplay_indicator__3CaQK",barWrapper:"CharacterDisplay_barWrapper__2x1f3",iconWrapper:"CharacterDisplay_iconWrapper__3hOkU",icon:"CharacterDisplay_icon__1e0L7",barContainer:"CharacterDisplay_barContainer__1OnNQ",barLine:"CharacterDisplay_barLine__2qulu",filledBar:"CharacterDisplay_filledBar__3UpB_",label:"CharacterDisplay_label__mYBsn",max:"CharacterDisplay_max__3m5Pg",belowAverage:"CharacterDisplay_belowAverage__1XnJf"}},11:function(e,t,a){e.exports={anchor:"LoadingSpinner_anchor__78Pnm",spinner:"LoadingSpinner_spinner__32tWn",spin:"LoadingSpinner_spin__3FVoi",loadingSpinnerContainer:"LoadingSpinner_loadingSpinnerContainer__2QV5S",spinnerLarge:"LoadingSpinner_spinnerLarge__KooL0",spinnerSmall:"LoadingSpinner_spinnerSmall__27lWl",status:"LoadingSpinner_status__3sgCR"}},14:function(e,t,a){e.exports={App:"App_App__15LM-",loadingContainer:"App_loadingContainer__1Pa9s",charactersContainer:"App_charactersContainer__1RSU_",characters:"App_characters__1GhrS",loadingStatus:"App_loadingStatus__3QEhd"}},170:function(e,t,a){},171:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(62),o=a.n(c),i=a(2),s=a.n(i),l=a(4),u=a(5),p=a(15);p.a.initialize("UA-149614480-1",{debug:!1}),p.a.set({anonymizeIp:!0}),p.a.pageview(window.location.pathname+window.location.search);var m,f,h,d=p.a,b=a(63),v=a(37),g=a(25),y=function(){var e=Object(l.a)(s.a.mark(function e(t){var a,r,n,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=k(),r={"x-api-key":j},a&&(r.Authorization="Bearer ".concat(a)),n="".concat(t.url).concat(t.params?"?"+Object.entries(t.params).map(function(e){var t=Object(u.a)(e,2),a=t[0],r=t[1];return"".concat(encodeURIComponent(a),"=").concat(encodeURIComponent(r))}):""),e.next=7,fetch(n,{headers:r});case 7:return c=e.sent,e.next=10,c.json();case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}},e,null,[[0,13]])}));return function(t){return e.apply(this,arguments)}}(),w=["DestinyInventoryItemDefinition"],_=function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading manifest data from IDB"),e.next=3,Object(v.a)("MANIFEST_DATA");case 3:return t=e.sent,console.log("Finished loading manifest data from IDB"),e.abrupt("return",t);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(s.a.mark(function e(t){var a,r,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw Error("No manifest!");case 2:return a=t.version,console.log("Fetching fresh manifest data"),e.next=6,fetch("https://www.bungie.net".concat(t.jsonWorldContentPaths.en));case 6:return r=e.sent,e.next=9,r.json();case 9:return n=e.sent,console.log("Pruning manifest data"),Object.keys(n).forEach(function(e){w.includes(e)||delete n[e]}),console.log("Storing manifest data in IDB"),e.next=15,Object(v.b)("MANIFEST_DATA",n);case 15:return localStorage.setItem("MANIFEST_VERSION",a),e.abrupt("return",n);case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f||(f=Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d.event({category:"Data",action:"Attempt load manifest",nonInteraction:!0}),e.next=3,Object(g.getDestinyManifest)(y);case 3:if(t=e.sent,a=localStorage.getItem("MANIFEST_VERSION"),!t||!t.Response||t.Response.version!==a||window.location.search.includes("updateManifest")){e.next=11;break}if(m){e.next=10;break}return e.next=9,_();case 9:m=e.sent;case 10:return e.abrupt("return",m);case 11:if(!t||!t.ErrorStatus||"Success"===t.ErrorStatus){e.next=14;break}throw d.event({category:"Errors",action:'Error status "'.concat(t.ErrorStatus,'" returned from manifest request'),nonInteraction:!0}),Error('Error status "'.concat(t.ErrorStatus,'" returned from manifest request'));case 14:if(t&&t.Response){e.next=16;break}throw Error("No manifest received!");case 16:return m=void 0,d.event({category:"Data",action:"Fetch remote manifest",nonInteraction:!0}),e.next=20,E(t.Response);case 20:return r=e.sent,m=r,e.abrupt("return",r);case 23:case"end":return e.stop()}},e)}))()),e.abrupt("return",f);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),D=function(e,t){return d.event({category:"Character Data",action:"Fetch full profile",nonInteraction:!0}),Object(g.getProfile)(y,{components:[200,201,205,102,300],destinyMembershipId:t,membershipType:e})},j="d94be1e34632448fafdaf77c7afbb501",S=function(){localStorage.removeItem("bungieAccessToken"),localStorage.removeItem("bungieAccessTokenExpiryTime"),localStorage.removeItem("bungieMembershipId"),localStorage.removeItem("destinyMemberships"),localStorage.removeItem("destinyMembership")},I=function(){var e=Object(l.a)(s.a.mark(function e(t){var a,r,n,c,o,i,l,u=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u.length>1&&void 0!==u[1]&&u[1],console.log("handleTokenResponse"),S(),200!==t.status){e.next=26;break}return e.next=6,t.json();case 6:return a=e.sent,r=a.access_token,n=a.expires_in,c=Date.now()+1e3*n,o=a.membership_id,localStorage.setItem("bungieAccessToken",r),localStorage.setItem("bungieAccessTokenExpiryTime",c.toString()),localStorage.setItem("bungieMembershipId",o),e.next=16,Object(b.getMembershipDataById)(y,{membershipId:o,membershipType:254});case 16:if((i=e.sent)&&i.Response&&(!i.ErrorStatus||"Success"===i.ErrorStatus)){e.next=20;break}return d.event({category:"Errors",action:"Destiny membership fetch error, status: ".concat(i.ErrorStatus),nonInteraction:!0}),e.abrupt("return",{authSuccess:!1,error:"Status code ".concat(i.ErrorStatus," from memberships endpoint")});case 20:return l=i.Response.destinyMemberships,localStorage.setItem("destinyMemberships",JSON.stringify(l)),1===l.length&&M(l[0]),e.abrupt("return",{accessToken:r,authSuccess:!0});case 26:if(200===t.status){e.next=29;break}return d.event({category:"Auth",action:"Status code ".concat(t.status," from authentication request"),nonInteraction:!0}),e.abrupt("return",{authSuccess:!1,error:"Status code ".concat(t.status," from authentication request")});case 29:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetchAuthToken",t),S(),d.event({category:"Auth",action:"Oauth token request",nonInteraction:!0}),e.next=5,fetch("https://www.bungie.net/platform/app/oauth/token/",{body:"grant_type=authorization_code&code=".concat(t,"&client_id=").concat("27213"),cache:"no-cache",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",redirect:"follow",referrer:"no-referrer"});case 5:return a=e.sent,e.next=8,I(a);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),k=function(){return localStorage.getItem("bungieAccessToken")},N=function(){var e=k(),t=parseInt(localStorage.getItem("bungieAccessTokenExpiryTime")||"-1",10),a=localStorage.getItem("bungieMembershipId");return!(!e||Date.now()>=t||!a)},P=function(){var e=localStorage.getItem("destinyMemberships");try{if(e)return JSON.parse(e)}catch(t){d.event({category:"Data",action:"Error loading destiny memberships from local storage",nonInteraction:!0}),console.error("Error loading destiny memberships",t.message)}},C=function(){var e=localStorage.getItem("destinyMembership");try{if(e)return JSON.parse(e)}catch(t){d.event({category:"Data",action:"Error loading destiny membership from local storage",nonInteraction:!0}),console.error("Error loading destiny membership",t.message)}},M=function(e){localStorage.setItem("destinyMembership",JSON.stringify(e))},R=function(){var e=Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(window.location.search),!(a=t.get("code"))||N()){e.next=10;break}return console.log("Fetching access token with auth code"),e.next=6,x(a);case 6:if(!(r=e.sent)||!1!==r.authSuccess){e.next=10;break}return console.error(r.error),e.abrupt("return",!1);case 10:if(a&&window.location.replace("".concat(window.location.origin).concat(window.location.pathname)),!N()||!P()){e.next=13;break}return e.abrupt("return",!0);case 13:d.event({category:"System",action:"Redirect for fresh authentication",nonInteraction:!0}),console.log("Redirecting to fresh authentication for missing or expired access token, or missing destiny memberships"),S(),console.log("Redirect to auth"),S(),d.event({category:"Auth",action:"Redirect to oauth",nonInteraction:!0}),window.location.replace("".concat("https://www.bungie.net/en/OAuth/Authorize","?response_type=code&client_id=").concat("27213"));case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),A=a(36),T=a(3),L=a(8),B=a.n(L);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var z=(h={},Object(T.a)(h,"kinetic",1498876634),Object(T.a)(h,"energy",2465295065),Object(T.a)(h,"power",953998645),Object(T.a)(h,"head",3448274439),Object(T.a)(h,"gloves",3551918588),Object(T.a)(h,"chest",14239492),Object(T.a)(h,"legs",20886954),Object(T.a)(h,"classItem",1585787867),h),q=Object.entries(z).reduce(function(e,t){var a=Object(u.a)(t,2),r=a[0],n=a[1];return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(T.a)({},n,r))},{}),H=[].concat(["kinetic","energy","power"],["head","gloves","chest","legs","classItem"]),F=2,V=3,U=["titan","hunter","warlock"],J=a(1),Q=a.n(J);function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var G=function(e){var t,a=e.min,r=e.max,c=e.value,o=e.avgValue,i=e.label,s=e.icon,l=r-a,u=Math.floor((c-a)/l*1e3)/10,p=Math.floor((o-a)/l*1e3)/10,m="".concat(c," ").concat(i),f=n.a.createElement("span",{className:Q.a.label},n.a.createElement("span",{className:B()(Q.a.power,(t={},Object(T.a)(t,Q.a.max,c>=r),Object(T.a)(t,Q.a.belowAverage,c<o),t))},c),n.a.createElement("span",{className:Q.a.slotName},i));return n.a.createElement("div",{className:Q.a.barWrapper},n.a.createElement("div",{className:Q.a.iconWrapper},s&&n.a.createElement("img",{className:Q.a.icon,src:"https://www.bungie.net".concat(s),alt:m})),n.a.createElement("div",{className:Q.a.barContainer},n.a.createElement("div",{className:Q.a.filledBar,style:{width:"".concat(u,"%")}},f),n.a.createElement("div",{className:Q.a.barLine,style:{left:"".concat(p,"%")}})))},Y=function(e){var t,a,r=e.data,c={chest:"Chest Armor",classItem:{hunter:"Hunter Cloak",titan:"Titan Mark",warlock:"Warlock Bond"}[r.className],energy:"Energy Weapon",gloves:"Gauntlets",head:"Helmet",kinetic:"Kinetic Weapon",legs:"Leg Armor",power:"Power Weapon"},o=H.reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(T.a)({},t,r.topItemBySlot?r.topItemBySlot[t].instanceData.primaryStat.value:r.overallPower))},{}),i=Math.min.apply(Math,Object(A.a)(Object.values(o))),s=Math.max(50*Math.floor(i/50)-50,0),l=Math.max.apply(Math,Object(A.a)(Object.values(o))),p=r.maxItemPower||50*Math.ceil(l/50),m=Math.floor(r.overallPower),f=p-s,h=Math.floor((m-s)/f*1e3)/10,d=r.artifactData?r.artifactData.bonusPower:0;return n.a.createElement("div",{className:B()(Q.a.characterDisplay,Q.a["class_".concat(r.className)]),style:{backgroundColor:function(e){var t=e.red,a=e.green,r=e.blue;return"rgb(".concat(t,",").concat(a,",").concat(r,")")}(r.character.emblemColor)}},n.a.createElement("div",{className:Q.a.header},n.a.createElement("img",{className:Q.a.emblemBackground,src:"https://www.bungie.net".concat(r.character.emblemBackgroundPath),alt:""}),n.a.createElement("div",{className:Q.a.name},(a=r.className).substr(0,1).toUpperCase()+a.substr(1)),n.a.createElement("div",{className:Q.a.power},m+d)),n.a.createElement("div",{className:Q.a.details},n.a.createElement("div",{className:Q.a.detailsRow},n.a.createElement("div",{className:Q.a.detailsLabel},"Max equippable gear power:"),n.a.createElement("div",{className:Q.a.defailsValue},m)),r.artifactData?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:Q.a.detailsRow},n.a.createElement("div",{className:Q.a.detailsLabel},n.a.createElement("img",{className:Q.a.detailsInlineIcon,src:"https://www.bungie.net".concat(r.artifactData.iconPath),alt:""}),r.artifactData.name," bonus power:"),n.a.createElement("div",{className:Q.a.detailsValue},(t=r.artifactData.bonusPower)>=0?"+".concat(t):"".concat(t))),n.a.createElement("div",{className:Q.a.detailsRow},n.a.createElement("div",{className:Q.a.detailsLabel},"Total combined power:"),n.a.createElement("div",{className:Q.a.detailsValue},m+d))):null),n.a.createElement("div",{className:Q.a.powerBars},n.a.createElement("div",{className:Q.a.powerRange},n.a.createElement("div",{className:Q.a.minPower},s),n.a.createElement("div",{className:Q.a.rangeLine}),n.a.createElement("div",{className:Q.a.maxPower},p)),n.a.createElement("div",{className:Q.a.bars},Object.entries(o).map(function(e){var t=Object(u.a)(e,2),a=t[0],o=t[1],i=r.topItemBySlot&&r.topItemBySlot[a];return n.a.createElement(G,{key:"".concat(r.id,"_").concat(a),min:s,max:p,value:o,avgValue:m,label:c[a]||a,icon:i&&i.itemDefinition&&i.itemDefinition.displayProperties.icon})})),n.a.createElement("div",{className:Q.a.powerLabel},n.a.createElement("div",{className:Q.a.indicator,style:{left:"".concat(h,"%")}},m))),n.a.createElement("div",{className:Q.a.hints},r.potentialOverallPower&&r.potentialOverallPower>r.overallPower?n.a.createElement("div",{className:B()(Q.a.hint,Q.a.worldDropHint)},n.a.createElement("span",null,"World drops can increase your overall gear power to"," ",r.potentialOverallPower),n.a.createElement("div",{className:Q.a.hintExtra},n.a.createElement("div",{className:Q.a.hintExtraInner},n.a.createElement("p",null,"World drops (from strikes, public events, non-powerful legendary rewards) used to replace items lower than your current overall gear power can be used to increase your overall gear power to ",r.potentialOverallPower,"."),n.a.createElement("p",null,"This process may take multiple replacements of the same slots if this is far beyond your current overall power.")))):null,r.potentialOverallPower===r.overallPower&&r.overallPower>=900&&r.overallPower<950?n.a.createElement("div",{className:B()(Q.a.hint,Q.a.powerfulHint)},n.a.createElement("span",null,"Powerful rewards can increase your overall gear power up to the powerful cap of 950"),n.a.createElement("div",{className:Q.a.hintExtra},n.a.createElement("div",{className:Q.a.hintExtraInner},n.a.createElement("p",null,"Powerful and pinnacle reward sources (Weekly challenges, Year 3 raids) will give you items above your overall gear power, with powerful rewards capped at 950."),n.a.createElement("p",null,"Powerful rewards (Tier 1) will give items up to 3 levels above your overall gear power"),n.a.createElement("p",null,"Powerful rewards (Tier 2) will give items up to 5 levels above your overall gear power"),n.a.createElement("p",null,"Pinnacle rewards will give items up to 8 levels above your overall gear power"),n.a.createElement("p",null,"After getting a powerful reward, check back here to see if it's beneficial to catch up the rest of your slots with world drops before getting another!")))):null,r.potentialOverallPower===r.overallPower&&r.overallPower>=950&&r.overallPower<960?n.a.createElement("div",{className:B()(Q.a.hint,Q.a.pinnacleHint)},n.a.createElement("span",null,"Pinnacle rewards can increase your overall gear power up to the pinnacle cap of 960"),n.a.createElement("div",{className:Q.a.hintExtra},n.a.createElement("p",null,"Pinnacle reward sources (Weekly challenges, Year 3 raids) will give you items above your overall gear power, capped at 960."),n.a.createElement("p",null,"Pinnacle rewards will give items up to 8 levels above your overall gear power"),n.a.createElement("p",null,"After getting a pinnacle reward, check back here to see if it's beneficial to catch up the rest of your slots with world drops before getting another!"))):null))},Z=a(11),X=a.n(Z),$=function(e){var t=e.status;return n.a.createElement("div",{className:X.a.loadingSpinnerContainer},n.a.createElement("div",{className:X.a.anchor},n.a.createElement("div",{className:X.a.spinnerLarge}),n.a.createElement("div",{className:X.a.spinnerSmall}),n.a.createElement("div",{className:X.a.status},t)))},ee=a(26),te=a.n(ee),ae=function(e){var t=e.onMembershipSelect,a=P();if(!a)return null;if(0===a.length)return n.a.createElement("div",null,"No destiny memberships!");var r={1:"xbox",2:"psn",3:"steam",4:"blizzard"};return n.a.createElement("div",{className:te.a.membershipSelect},a.map(function(e){return n.a.createElement("div",{key:e.membershipId,className:B()(te.a.membership,te.a["platform_".concat(r[e.membershipType])]),onClick:function(){return t(e)}},e.displayName)}))},re=a(64),ne=a.n(re),ce=a(34),oe=a.n(ce),ie=a(35),se=a.n(ie),le=a(27),ue=a.n(le),pe=a(65),me=a.n(pe);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function he(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach(function(t){Object(T.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var de,be=function(e){return se()(e,function(e){return e.instanceData.primaryStat.value})},ve=function(e){return Math.floor(Object.values(e).reduce(function(e,t){return e+t},0)/Object.keys(z).length)},ge=function(e){return Object.values(e).reduce(function(e,t){return e.concat(t.items)},[])},ye=function(e,t){return!!e.instanceData.canEquip||(16===e.instanceData.cannotEquipReason||!(e.instanceData.equipRequiredLevel>t.baseCharacterLevel)&&(3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType))},we=function(){var e=Object(l.a)(s.a.mark(function e(t){var a,r,n,c,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if((a=e.sent)&&a.Response&&a.Response.characters){e.next=5;break}return e.abrupt("return");case 5:if(!(r=a.Response.characters.data)){e.next=11;break}return n=function(e){var t=r[e];return{character:t,className:U[t.classType],id:e,overallPower:t.light}},c=Object.keys(r),o=c.map(function(e){return n(e)}),e.abrupt("return",o);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=Object(l.a)(s.a.mark(function e(t,a){var r,n,c,o,i,u,p,m,f,h,b,v,w,_,E,j,S,I,x=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=x.length>2&&void 0!==x[2]&&x[2],e.prev=1,e.next=4,R();case 4:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:if(n=O(),a(!0),c=C()){e.next=12;break}return e.abrupt("return");case 12:return i=!0,r&&(k=c.membershipType,N=c.membershipId,d.event({category:"Character Data",action:"Fetch minimal profile",nonInteraction:!0}),(o=Object(g.getProfile)(y,{components:[200,205],destinyMembershipId:N,membershipType:k})).catch(function(){}),u=we(o).catch(function(e){}),Object(l.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u;case 2:(a=e.sent)&&i&&t(a);case 4:case"end":return e.stop()}},e)}))()),e.next=16,D(c.membershipType,c.membershipId);case 16:if(p=e.sent,a(!1),p&&p.Response&&p.Response.characters&&p.Response.characters.data&&p.Response.characterEquipment&&p.Response.characterEquipment.data&&p.Response.characterInventories&&p.Response.characterInventories.data&&p.Response.profileInventory&&p.Response.profileInventory.data&&p.Response.itemComponents&&p.Response.itemComponents.instances&&p.Response.itemComponents.instances.data){e.next=20;break}return e.abrupt("return");case 20:return m=p.Response.characters.data,f=p.Response.characterEquipment.data,h=p.Response.characterInventories.data,b=p.Response.profileInventory.data,v=p.Response.itemComponents.instances.data,e.next=27,n;case 27:if(w=e.sent){e.next=30;break}return e.abrupt("return");case 30:_=ge(h).concat(ge(f)).concat(b.items),E=_.filter(function(e){var t=e.itemHash&&w.DestinyInventoryItemDefinition[e.itemHash];return t&&t.itemType===V}),j=function(e){var t=m[e],a=U[t.classType],r=function(e){return e.map(function(e){return he({},e,{instanceData:e.itemInstanceId?v[e.itemInstanceId]:void 0,itemDefinition:w.DestinyInventoryItemDefinition[e.itemHash]})}).filter(function(e){return e.instanceData&&e.itemDefinition&&[F,V].includes(e.itemDefinition.itemType)}).map(function(e){return he({},e,{instanceData:e.instanceData,itemDefinition:e.itemDefinition})}).map(function(e){return he({},e,{slotName:q[e.itemDefinition.inventory.bucketTypeHash]})}).filter(function(e){return ye(e,t)})},n=r(h[e].items.concat(f[e].items).concat(E)),c=r(b.items).filter(function(e){return 3===e.itemDefinition.classType||e.itemDefinition.classType===t.classType}),o=n.concat(c),i=function(e){if(!e||!e.instanceData||!e.instanceData.primaryStat)return 0;var t=e.instanceData.primaryStat.value;return e.instanceData.isEquipped&&(t+=.1),1===e.location&&(t+=.05),t},s=function(e){return e.itemDefinition.equippingBlock.uniqueLabel},l=oe()(o,function(e){return e.slotName}),u=se()(l,function(e){return ue()(e,i)}),p=oe()(Object.values(u).filter(s),s);ne()(p,function(e){if(!(e.length<=1)){var t=[];if(e.forEach(function(a){var r=e.filter(function(e){return e!==a}),n=!0,c=he({},u);r.forEach(function(e){var t=l[e.slotName].filter(function(e){return!s(e)});t.length>0?c[e.slotName]=ue()(t,i):n=!1}),n&&t.push(c)}),t.length>0){var a=ue()(t,function(e){return me()(Object.values(e),i)});u=a}}});var d,g=be(u),y=ve(g),_=Object.values(f).flatMap(function(e){return e.items}).find(function(e){return 1387688628===e.itemHash});if(_&&_.itemInstanceId){var O=w.DestinyInventoryItemDefinition[_.itemHash];d={bonusPower:v[_.itemInstanceId].primaryStat.value,iconPath:O.displayProperties.icon,name:O.displayProperties.name}}for(var D=he({},g),j=function(){var e=ve(D);Object.keys(D).forEach(function(t){return D[t]=Math.max(900,Math.max(e,D[t]))})};Object.values(D).some(function(e){return e<ve(D)||e<900});)j();var S=ve(D);return{artifactData:d,character:t,className:a,id:e,overallPower:y,potentialOverallPower:S,potentialPowerBySlot:D,topItemBySlot:u}},S=Object.keys(m),I=S.map(function(e){return j(e)}),i=!1,t(I),e.next=44;break;case 39:return e.prev=39,e.t0=e.catch(1),console.error("Error fetching manifest and character data",e.t0),a(!1),e.abrupt("return");case 44:case"end":return e.stop()}var k,N},e,null,[[1,39]])}));return function(t,a){return e.apply(this,arguments)}}(),Ee=(a(169),a(14)),Oe=a.n(Ee),De=function(){var e=Object(r.useState)(N()),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(!1),i=Object(u.a)(o,2),p=i[0],m=i[1],f=Object(r.useState)(!!C()),h=Object(u.a)(f,2),b=h[0],v=h[1],g=Object(r.useState)(!1),y=Object(u.a)(g,2),w=y[0],_=y[1],E=Object(r.useState)(!1),D=Object(u.a)(E,2),j=D[0],S=D[1],I=Object(r.useState)(!1),x=Object(u.a)(I,2),k=x[0],P=x[1],A=Object(r.useState)(void 0),T=Object(u.a)(A,2),L=T[0],B=T[1];Object(r.useEffect)(function(){a||function(){var e=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:e.sent?c(!0):m(!0);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()}),Object(r.useEffect)(function(){Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:_(!0),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0.message),S(!0);case 10:case"end":return e.stop()}},e,null,[[0,6]])}))()}),Object(r.useEffect)(function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return _e(B,P,e)};a&&b&&!k&&(de||(de=setInterval(e,1e4),e(!0)))},[a,b,w,k]);var W=function(e){d.event({category:"Platform",action:"Select platform",label:"Membership type: ".concat(e.membershipType)}),M(e),v(!0)},z="";return p?z="Authentication error, refresh page to try again!":j?z="Error fetching manifest, refresh page to try again!":a?b?w?L&&0!==L.length||(z=k?"Fetching character data...":"No character data"):z="Fetching Destiny item manifest...":z="Waiting for Destiny platform selection...":z="Authenticating...",window.characterData=L,L&&L.length>0?n.a.createElement("div",{className:Oe.a.App},n.a.createElement(ae,{onMembershipSelect:W}),n.a.createElement("div",{className:Oe.a.charactersContainer},n.a.createElement("div",{className:Oe.a.characters},L.map(function(e){return n.a.createElement(Y,{key:e.id,data:e})}))),z&&n.a.createElement($,{status:z})):n.a.createElement("div",{className:Oe.a.App},n.a.createElement($,{status:z}),n.a.createElement(ae,{onMembershipSelect:W}))};a(170),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,t,a){e.exports={membershipSelect:"MembershipSelect_membershipSelect__3GbZz",membership:"MembershipSelect_membership__3vKKK",platform_xbox:"MembershipSelect_platform_xbox__1EgLN",platform_psn:"MembershipSelect_platform_psn__2ASN8",platform_steam:"MembershipSelect_platform_steam__3zG5m",platform_blizzard:"MembershipSelect_platform_blizzard__1zLDb"}},66:function(e,t,a){e.exports=a(171)}},[[66,1,2]]]);
//# sourceMappingURL=main.3780a7ca.chunk.js.map