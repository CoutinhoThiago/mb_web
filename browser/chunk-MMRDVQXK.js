import{a as f}from"./chunk-M23PUTFV.js";import{a as S,b as w,h as P,i as F}from"./chunk-PYDMW3ZS.js";import{F as y,I as M,b as m,d as u,e as l,fa as O,h as p,i as x,ia as h,j as d,l as C,m as i,n as a,o as r,p as b,q as v,v as g}from"./chunk-JSUF3RTZ.js";function B(e,t){if(e&1&&(b(0),i(1,"div",13),r(2,"app-conta",14),a(),v()),e&2){let c=t.$implicit;p(2),d("nome",c.banco.nome)("saldo",c.saldoAtual)("agencia",c.agencia)("numeroConta",c.numeroConta)}}var E='@charset "UTF-8";.main-content[_ngcontent-%COMP%]{margin-left:150px;padding:20px;background-color:#fff}.header[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:32px;color:#000}.dashboard[_ngcontent-%COMP%]{flex:1,1;background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 2px 4px #0003;color:#000}.section-title-dashboard[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:#333;margin-top:20px}.value-container[_ngcontent-%COMP%]{width:100%;background-color:#fff;color:#333;border-radius:8px;box-shadow:0 2px 4px #0003;display:flex;flex-direction:column;align-items:center;padding:20px}.value[_ngcontent-%COMP%]{font-size:24px;font-weight:700;margin-top:10px}.icon-container[_ngcontent-%COMP%]{background-color:#333;border-radius:50%;width:60px;height:60px;display:flex;justify-content:center;align-items:center;margin:0 auto}.icon[_ngcontent-%COMP%]{font-size:30px;color:#fff}.conta-list[_ngcontent-%COMP%]{list-style-type:none;padding:0}.conta-item[_ngcontent-%COMP%]{margin:10px 0;padding:20px;background-color:#fff;border-radius:8px;display:flex;justify-content:space-between;align-items:center}',j=(()=>{let t=class t{constructor(o){this.contaService=o,this.totalBalance=0,this.contas=[]}ngOnInit(){this.fetchData()}fetchData(){this.contaService.listarContas().subscribe(o=>{let n=o.content;this.totalBalance=n.reduce((s,I)=>s+I.saldoAtual,0),this.contas=n},o=>{console.error("Erro ao buscar dados das contas",o)})}};t.\u0275fac=function(n){return new(n||t)(x(f))},t.\u0275cmp=u({type:t,selectors:[["app-contas"]],decls:19,vars:2,consts:[["lang","pt-br"],["charset","UTF-8"],["name","viewport","content","width=device-width, initial-scale=1.0"],["href","https://fonts.googleapis.com/icon?family=Material+Icons","rel","stylesheet"],[1,"container"],[1,"main-content"],[1,"header"],[1,"app-name"],[1,"dashboard"],[1,"contas-container"],[1,"saldo-total"],[3,"totalBalance"],[4,"ngFor","ngForOf"],[1,"conta-item"],[3,"nome","saldo","agencia","numeroConta"]],template:function(n,s){n&1&&(i(0,"html",0)(1,"head"),r(2,"meta",1)(3,"meta",2),i(4,"title"),g(5,"Contas"),a(),r(6,"link",3),a(),i(7,"body")(8,"div",4),r(9,"app-sidebar"),i(10,"main",5)(11,"header",6)(12,"h1",7),g(13,"Contas"),a()(),i(14,"section",8)(15,"div",9)(16,"div",10),r(17,"app-saldo-total",11),a(),C(18,B,3,4,"ng-container",12),a()()()()()()),n&2&&(p(17),d("totalBalance",s.totalBalance),p(1),d("ngForOf",s.contas))},dependencies:[y,S,w,P],styles:[E,E]});let e=t;return e})();var N=[{path:"",component:j}],k=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l({type:t}),t.\u0275inj=m({imports:[h.forChild(N),h]});let e=t;return e})();var X=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l({type:t}),t.\u0275inj=m({providers:[f],imports:[O,M,k,F]});let e=t;return e})();export{X as ContasModule};