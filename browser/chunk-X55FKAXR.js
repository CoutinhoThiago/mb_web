import{a as C}from"./chunk-M23PUTFV.js";import{a as b,b as M,d as v,e as y,f as S,g as w,i as O}from"./chunk-PYDMW3ZS.js";import{I as u,b as s,d,e as c,fa as x,h as f,i as h,ia as l,j as g,m as i,n as a,o as r,v as p}from"./chunk-JSUF3RTZ.js";var P='@charset "UTF-8";.main-content[_ngcontent-%COMP%]{margin-left:150px;padding:20px;background-color:#fff}.header[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#000}.dashboard[_ngcontent-%COMP%]{background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 4px #0003;color:#000}.section-title-dashboard[_ngcontent-%COMP%]{font-size:16px;color:#333;text-align:center;margin-top:10px;align-items:flex-start}.value-container[_ngcontent-%COMP%]{width:100%;background-color:#fff;color:#000;border-radius:8px;box-shadow:0 2px 4px #0003;display:flex;flex-direction:column;align-items:center}.value[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:700;margin-bottom:10px}.icon-container[_ngcontent-%COMP%]{background-color:#000;border-radius:8px;width:80px;height:60px;display:flex;justify-content:center;align-items:center;margin:0 auto}.icon[_ngcontent-%COMP%]{font-size:30px;color:orange}.expenses-incomes-container[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-between;align-items:flex-start;width:100%}',j=(()=>{let t=class t{constructor(o){this.contaService=o,this.balance=0,this.transactions=[]}ngOnInit(){this.fetchData()}fetchData(){this.contaService.listarContas().subscribe(o=>{let n=o.content;this.balance=n.reduce((m,F)=>m+F.saldoAtual,0)},o=>{console.error("Erro ao buscar dados das contas",o)}),this.transactions=[{description:"Supermercado",amount:-150.5},{description:"Sal\xE1rio",amount:3e3}],this.creditCardInfo={cardType:"Visa",lastFourDigits:"1234",dueAmount:1788}}};t.\u0275fac=function(n){return new(n||t)(h(C))},t.\u0275cmp=d({type:t,selectors:[["app-home"]],decls:23,vars:1,consts:[["lang","pt-br"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href","https://fonts.googleapis.com/icon?family=Material+Icons","rel","stylesheet"],[1,"container"],[1,"main-content"],[1,"header"],[1,"header-content"],[1,"app-name"],[1,"dashboard"],[3,"totalBalance"],[1,"expenses-incomes-container"],[2,"flex","1"]],template:function(n,m){n&1&&(i(0,"html",0)(1,"head"),r(2,"meta",1)(3,"meta",2),i(4,"title"),p(5,"Meu Bolso"),a(),r(6,"link",3),a(),i(7,"body")(8,"div",4),r(9,"app-sidebar"),i(10,"main",5)(11,"header",6)(12,"div",7)(13,"h1",8),p(14,"Home"),a()()(),i(15,"section",9),r(16,"app-saldo-total",10),i(17,"div",11),r(18,"app-expenses",12)(19,"app-incomes",12),a(),i(20,"div",11),r(21,"app-investments",12)(22,"app-credit-card",12),a()()()()()()),n&2&&(f(16),g("totalBalance",m.balance))},dependencies:[b,M,v,y,S,w],styles:[P,P]});let e=t;return e})();var k=[{path:"",component:j}],E=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=s({imports:[l.forChild(k),l]});let e=t;return e})();var W=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c({type:t}),t.\u0275inj=s({imports:[x,u,E,O]});let e=t;return e})();export{W as HomeModule};
