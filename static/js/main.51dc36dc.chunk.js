(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/cc.6e862d88.png"},function(e,t,n){e.exports=n.p+"static/media/tpmi.182f2cd9.png"},function(e,t,n){e.exports=n.p+"static/media/cacc.4d16278f.png"},function(e,t,n){e.exports=n.p+"static/media/pm.d8f74582.png"},function(e,t,n){e.exports=n.p+"static/media/bcdm.2bcc8c84.png"},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),i=(n(17),n(1)),l=n(2),s=n(3),p=n(4),m=(n(18),n(19),function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",{className:"logoH1"},"Jibra"),c.a.createElement("h2",{className:"logoH2"},"A Software Design Studio"))}}]),n}(a.Component)),u=(n(20),function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).scrollToPastWork=function(){var e=document.getElementById("cacc");null!=e&&e.scrollIntoView()},e.scrollToTechStack=function(){var e=document.getElementById("techStack");null!=e&&e.scrollIntoView()},e.scrollToContact=function(){var e=document.getElementById("contact");null!=e&&e.scrollIntoView()},e}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"navBar"},c.a.createElement("h1",{className:"navBarButton",onClick:this.scrollToPastWork},"Past Work"),c.a.createElement("h1",{className:"navBarButton",onClick:this.scrollToTechStack},"Our Tech Stacks"),c.a.createElement("h1",{className:"navBarButton",onClick:this.scrollToContact},"Contact"))}}]),n}(a.Component)),d=(n(21),n(7)),h=n.n(d),f=n(8),b=n.n(f),v=n(9),w=n.n(v),g=n(10),k=n.n(g),E=n(11),y=n.n(E),j=function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).openWebsite=function(){var t=e.props.displayID;"cc"===t?window.open("https://apps.apple.com/gb/app/cajun-connection/id1498694017?ign-mpt=uo%3D2"):"pmi"===t?window.open("https://theproductmanagementintern.com/"):"cacc"===t?window.open("http://carsagainstcc.com/"):"pm"===t?window.open("https://apps.apple.com/tt/app/page-master/id1474563270"):"bcdm"===t&&window.open("https://apps.apple.com/us/app/bc-dining-menus/id1459940062")},e}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"sample",onClick:this.openWebsite},c.a.createElement("img",{className:"sampleImage",id:this.props.displayID,src:(e=this.props.displayID,"cc"===e?h.a:"pmi"===e?b.a:"cacc"===e?w.a:"pm"===e?k.a:"bcdm"===e?y.a:void 0),alt:"Screenshot"}));var e}}]),n}(a.Component),O=(n(22),function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"techStack",id:"techStack"},c.a.createElement("h1",{className:"techStackHeader"},"Our Tech Stacks"),c.a.createElement("p",{className:"techStackText"}," We use a variety of Tech Stacks. With Web, it's mostly React.js on the frontend with NoSQL on the backend. With Mobile, we work with Swift on the frontend and also NoSQL on the backend. We provide all of our clients with DNS management and google analytics accounts. We love to learn new technologies and are always willing to work with something new."))}}]),n}(a.Component)),N=(n(23),function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"contact",id:"contact"},c.a.createElement("h1",{className:"contactHeader"},"Contact Us!"),c.a.createElement("p",{className:"contactText"},"Please text us at +1 (860) 614-4966 to discuss building your next website or mobile app."))}}]),n}(a.Component)),C=function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"appContainerOne"},c.a.createElement(m,null),c.a.createElement(u,null)),c.a.createElement("div",{className:"appContainerTwo"},c.a.createElement(j,{title:"BC Dining Menus",displayID:"bcdm"}),c.a.createElement(j,{title:"Page Master",displayID:"pm"}),c.a.createElement(j,{title:"Cajun Connection",displayID:"cc"})),c.a.createElement(O,null),c.a.createElement(N,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.51dc36dc.chunk.js.map