(this["webpackJsonpbestow-wings.github.io"]=this["webpackJsonpbestow-wings.github.io"]||[]).push([[0],{140:function(e,t,n){},273:function(e,t){},274:function(e,t){},282:function(e,t){},292:function(e,t){},293:function(e,t){},294:function(e,t){},295:function(e,t){},303:function(e,t){},305:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var i=n(30),c=n.n(i),r=n(239),s=n.n(r),a=n(143),o=n(40),l=(n(140),n(20)),j=function(e){var t=e.links;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"navbar",children:t.map((function(e){return Object(l.jsx)(a.b,{to:e.link,className:"navbar-btn",children:e.text},e.key)}))})})},d=[{key:1,text:"Home",link:"/"},{key:2,text:"About",link:"/titanic-survivor"},{key:3,text:"Contact",link:"/"}];var u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("div",{className:"logo",children:"aukibit"}),Object(l.jsx)(j,{links:d})]}),Object(l.jsx)(o.a,{})]})},b=n.p+"static/media/magic-book.51ec30e9.png",h=function(){return Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Let your people do people work."}),Object(l.jsx)("h3",{children:"We have robots for the robot work."}),Object(l.jsx)("button",{children:"Contact"})]}),Object(l.jsxs)("div",{className:"hero-card",children:[Object(l.jsx)("div",{className:"hero-icon",children:Object(l.jsx)("img",{alt:"icon",src:b,height:100})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Works like magic."}),Object(l.jsxs)("h3",{children:["Tech that makes your barriers to growth ",Object(l.jsx)("span",{className:"hero-gradient-text",children:"disappear"})]})]})]})]})},p=function(e){var t=e.title,n=e.description,i=e.imgsrc,c=e.link;return Object(l.jsx)("a",{href:c,rel:"noreferrer",className:"card-image",style:{backgroundImage:'url("'.concat(i,'")')},children:Object(l.jsx)("div",{className:"card-background",children:Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsx)("h3",{children:t}),n&&Object(l.jsx)("p",{"data-testid":"card-description",children:n})]})})})},x=function(e){var t=e.data;return Object(l.jsx)("div",{className:"cards",children:t.map((function(e){return Object(l.jsx)(p,{title:e.title,description:e.description,imgsrc:e.imgsrc,link:e.link},e.id)}))})},O=[{id:1,title:"Chess AI",description:"Playable Chess AI with TensorFlow",imgsrc:n.p+"static/media/chess_ai.5d90db09.gif",link:"https://medium.com/@dylanjsw/playable-chess-ai-with-tensorflow-26c318207452"},{id:2,title:"Titanic Survivor",description:"Native JavaScript TensorFlowJS implementation",imgsrc:n.p+"static/media/titanic.9f2432de.jpg",link:"/titanic-survivor"},{id:3,title:"Project 3",description:"A project",imgsrc:""},{id:4,title:"Project 4",description:"A project",imgsrc:""}],m=[{key:1,text:"Medium",link:"https://medium.com/@dylanjsw"},{key:2,text:"GitHub",link:"https://github.com/bestow-wings/"},{key:3,text:"Email",link:"mailto:dylanjsw@outlook.com"}];var v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)(x,{data:O}),Object(l.jsxs)("div",{style:{textAlign:"center",marginBottom:"5rem"},children:[Object(l.jsx)("p",{children:"Some information"}),Object(l.jsx)("button",{children:"Contact"})]}),Object(l.jsx)(j,{links:m})]})]})},g=n(5),f=n.n(g),y=n(4),k=n(11),w=n(240),S=n(304);function N(e){for(var t=0,n=1;n<e.length;n++)e[n]<e[t]&&(t=n);return t}function C(e){return 0===e?"Yes!":"No :("}function I(){return(I=Object(k.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.loadLayersModel("saved_model/model.json");case 2:return(t=e.sent).compile({optimizer:S.train.adam(),loss:"sparseCategoricalCrossentropy",metrics:["accuracy"]}),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(k.a)(f.a.mark((function e(t,n,i){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.predict(S.tensor(i)).dataSync();case 2:c=e.sent,n(C(N(c)));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(i.useState)(" "),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(-1),s=Object(y.a)(r,2),a=s[0],o=s[1],j=Object(i.useState)(-1),d=Object(y.a)(j,2),u=d[0],b=d[1],h=Object(i.useState)(-1),p=Object(y.a)(h,2),x=p[0],O=p[1],m=Object(i.useState)(-1),v=Object(y.a)(m,2),g=v[0],f=v[1],k=Object(i.useState)(-1),S=Object(y.a)(k,2),N=S[0],C=S[1],F=Object(i.useState)(-1),A=Object(y.a)(F,2),H=A[0],J=A[1],W=Object(i.useState)(-1),M=Object(y.a)(W,2),L=M[0],P=M[1];return Object(l.jsxs)("div",{className:"titanic-survivor-super",children:[Object(l.jsxs)("div",{className:"titanic-survivor-parent",children:[Object(l.jsxs)("div",{className:"titanic-survivor",children:[Object(l.jsx)("h1",{children:"Why is this interesting?"}),Object(l.jsxs)("p",{children:["This relies on a machine learning algorithm built natively in JavaScript using TensorFlowJS. It was trained on the",Object(l.jsx)("a",{href:"https://www.kaggle.com/c/titanic/data",children:" Titanic - Machine Learning from Disaster"})," dataset from Kaggle. This model is about 75% accurate depending on the validation dataset. The best models, built by teams of machine learning specialists, only get about 81%."]}),Object(l.jsx)("p",{children:"The source code used to train the model is reproduced below."})]}),Object(l.jsxs)("div",{className:"titanic-survivor",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Titanic Survivor"})}),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c("Loading model...");var t=[[x,u,a,N,H,g,L]];(function(){return I.apply(this,arguments)})().then((function(e){return function(e,t,n){return T.apply(this,arguments)}(e,c,t)}))},children:[Object(l.jsx)("input",{type:"text",onChange:function(e){o(parseInt(e.target.value))},placeholder:"How old are you?"}),Object(l.jsxs)("select",{onChange:function(e){b(parseInt(e.target.value))},children:[Object(l.jsx)("option",{value:-1,hidden:!0,children:"Sex"}),Object(l.jsx)("option",{value:1,children:"Male"}),Object(l.jsx)("option",{value:2,children:"Female"})]}),Object(l.jsxs)("select",{value:x,onChange:function(e){O(parseInt(e.target.value))},children:[Object(l.jsx)("option",{value:-1,hidden:!0,children:"What class ticket did you buy?"}),Object(l.jsx)("option",{value:1,children:"First Class"}),Object(l.jsx)("option",{value:2,children:"Second Class"}),Object(l.jsx)("option",{value:3,children:"Third Class"})]}),Object(l.jsx)("input",{type:"text",placeholder:"How much did you pay for your fare?",onChange:function(e){f(parseInt(e.target.value.replace(/[^0-9.-]/g,"")))}}),Object(l.jsx)("input",{type:"text",placeholder:"How many of your siblings and/or spouses are travelling with you?",onChange:function(e){C(parseInt(e.target.value))}}),Object(l.jsx)("input",{type:"text",placeholder:"How many of your parents and/or children are travelling with you?",onChange:function(e){J(parseInt(e.target.value))}}),Object(l.jsxs)("select",{value:L,onChange:function(e){P(parseInt(e.target.value))},children:[Object(l.jsx)("option",{value:-1,hidden:!0,children:"What port did you board from?"}),Object(l.jsx)("option",{value:1,children:"Cherbourg"}),Object(l.jsx)("option",{value:2,children:"Queenstown"}),Object(l.jsx)("option",{value:3,children:"Southampton"})]}),Object(l.jsx)("p",{}),Object(l.jsx)("button",{type:"submit",value:"Submit",children:"Submit"}),Object(l.jsx)("p",{})]})}),Object(l.jsxs)("div",{className:"titanic-survivor",children:[Object(l.jsx)("h3",{children:"Would you have survived?"}),Object(l.jsx)("h2",{children:n})]})]})]}),Object(l.jsx)("div",{style:{width:"60%",margin:"auto"},children:Object(l.jsx)(w.a,{id:"787386ded49d2bdf37238d90a895b69c"})})]})};function A(){return Object(l.jsx)(a.a,{children:Object(l.jsx)(o.d,{children:Object(l.jsxs)(o.b,{path:"/",element:Object(l.jsx)(u,{}),children:[Object(l.jsx)(o.b,{index:!0,element:Object(l.jsx)(v,{})}),Object(l.jsx)(o.b,{path:"/titanic-survivor",element:Object(l.jsx)(F,{})})]})})})}s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root"))}},[[305,1,2]]]);
//# sourceMappingURL=main.1d46d584.chunk.js.map