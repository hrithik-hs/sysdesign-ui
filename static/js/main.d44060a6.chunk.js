(this["webpackJsonpsysdesign-ui"]=this["webpackJsonpsysdesign-ui"]||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),o=(a(25),a(3)),i=a(4),c=a(6),u=a(5),m=(a(8),n.Component,a(18)),h=a(2),d=a(19),p=a.n(d),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",password_confirmation:"",RegistrationErrors:""},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(i.a)(a,[{key:"handleSubmit",value:function(e){console.log("form submitted"),console.log(this.state),p.a.post("https://sysdesign-auth-qa.herokuapp.com/twirp/twirp.example.haberdasher.Haberdasher/AddUser",{user:{email:this.state.email,password:this.state.password,password_confirmation:this.state.password_confirmation}},{withCredentials:!0}).then((function(e){console.log("registration res",e)})).catch((function(e){console.log("error",e)})),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value)),console.log("handle change")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"email",className:"inputStyle",name:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",className:"inputStyle",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"password",className:"inputStyle",name:"password_confirmation",placeholder:"Confirm Password",value:this.state.password_confirmation,onChange:this.handleChange,required:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.d44060a6.chunk.js.map