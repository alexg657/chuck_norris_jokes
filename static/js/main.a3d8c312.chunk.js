(this.webpackJsonpchuck_norris_jokes=this.webpackJsonpchuck_norris_jokes||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),o=(a(14),a(1)),i=a.n(o),l=a(4),u=a(5),h=a(6),m=a(8),b=a(7),p=(a(16),a(17),function(e){return r.a.createElement("section",{class:"tc pa3 pa5-ns"},r.a.createElement("header",{class:"tc pv4 pv5-ns"},r.a.createElement("img",{src:"https://assets.chucknorris.host/img/avatar/chuck-norris.png",class:"br3 ba b--black-10 h3 w3",alt:"avatar"}),r.a.createElement("h1",{class:"f5 f4-ns fw6 black-70"},"Chuck Nurris Joke Generator")),r.a.createElement("article",{className:"center mw5 mw6-ns hidden ba bw2 mv4"},r.a.createElement("h1",{className:"f4 bg-near-black white mv0 pv2 ph3"},e.title),r.a.createElement("div",{className:"pa3 bt"},r.a.createElement("p",{className:"f5 f4-ns lh-copy measure mv0 b"},e.content))),r.a.createElement("button",{onClick:e.generate,className:"f5 link dim br1 ph3 pv2 mb2 dib white bg-black"},e.btn))}),k=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).getData=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.chucknorris.io/jokes/random");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({getDataState:a.value}),console.log(a);case 8:case"end":return e.stop()}}),e,this)}))),e.state={getDataState:"Press the button!"},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p,{btn:"Generate New Joke",title:"New Joke",content:this.state.getDataState,generate:function(){return e.getData()}})}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(18);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.a3d8c312.chunk.js.map