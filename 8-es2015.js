(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"t+Ht":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var a=t("xYTU"),r=t("NcP4"),b=t("pMnS"),o=t("8rEH"),c=t("zQui"),i=t("SVse"),s=t("IP0z"),d=t("Xd0L"),f=t("cUpR"),h=t("/HVE"),m=e.qb({encapsulation:2,styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-footer-row,mat-row{min-height:48px}mat-footer-row,mat-header-row,mat-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-footer-row::after,mat-header-row::after,mat-row::after{display:inline-block;min-height:inherit;content:''}mat-cell:first-of-type,mat-footer-cell:first-of-type,mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-footer-cell:last-of-type,mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-footer-cell,mat-header-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-footer-row,tr.mat-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}td.mat-cell,td.mat-footer-cell,th.mat-header-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type,th.mat-header-cell:first-of-type{padding-left:24px}[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type,[dir=rtl] th.mat-header-cell:first-of-type{padding-left:0;padding-right:24px}td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type,th.mat-header-cell:last-of-type{padding-right:24px}[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type,[dir=rtl] th.mat-header-cell:last-of-type{padding-right:0;padding-left:24px}"],data:{}});function p(l){return e.Lb(0,[e.Hb(402653184,1,{_rowOutlet:0}),e.Hb(402653184,2,{_headerRowOutlet:0}),e.Hb(402653184,3,{_footerRowOutlet:0}),e.Cb(null,0),(l()(),e.sb(4,16777216,null,null,1,null,null,null,null,null,null,null)),e.rb(5,16384,[[2,4]],0,c.t,[e.O,e.k],null,null),(l()(),e.sb(6,16777216,null,null,1,null,null,null,null,null,null,null)),e.rb(7,16384,[[1,4]],0,c.r,[e.O,e.k],null,null),(l()(),e.sb(8,16777216,null,null,1,null,null,null,null,null,null,null)),e.rb(9,16384,[[3,4]],0,c.s,[e.O,e.k],null,null)],null,null)}var g=e.qb({encapsulation:2,styles:[],data:{}});function B(l){return e.Lb(0,[(l()(),e.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.rb(1,147456,null,0,c.c,[e.O],null,null)],null,null)}var w=e.qb({encapsulation:2,styles:[],data:{}});function y(l){return e.Lb(0,[(l()(),e.sb(0,16777216,null,null,1,null,null,null,null,null,null,null)),e.rb(1,147456,null,0,c.c,[e.O],null,null)],null,null)}var x=t("Rlre"),k=t("rWV4"),O=t("lzlj"),L=t("igqZ"),v=t("omvX"),D=t("fbMX"),H=t("LRne"),j=t("cp0P"),q=t("vkgz"),S=t("IheW");const _={host:"https://swapi.co/api/"},F=(()=>{class l{constructor(l,n){this.http=l,this.storageService=n}getTabs(){return this.cache(_.host)}getData(l){return this.cache(l)}cache(l){const n=this.storageService.get(l);return n?Object(H.a)(n):this.requestData(l).pipe(Object(q.a)(n=>this.storageService.set(l,n)))}requestAll(l){return Object(j.a)([this.requestData(l),this.requestSchema(l)]).pipe(Object(q.a)(l=>{l[0].schema=l[1]}))}requestData(l){return this.http.get(l)}requestSchema(l){return this.http.get(`${l}schema`)}}return l.ngInjectableDef=e.Ob({factory:function(){return new l(e.Pb(S.c),e.Pb(D.a))},token:l,providedIn:"root"}),l})();class R{constructor(l){this.swapiService=l,this.data={},this.objectKeys=Object.keys}getData(l){return this.swapiService.getData(l)}ngOnInit(){this.data.tabs=this.swapiService.getTabs()}}var I=e.qb({encapsulation:0,styles:[[".page-container[_ngcontent-%COMP%]{margin:1em 0}.page-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{margin:1em}"]],data:{}});function P(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"th",[["class","mat-header-cell"],["mat-header-cell",""],["role","columnheader"]],null,null,null,null,null)),e.rb(1,16384,null,0,o.e,[c.d,e.k],null,null),(l()(),e.Jb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.key)})}function C(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"td",[["class","mat-cell"],["mat-cell",""],["role","gridcell"]],null,null,null,null,null)),e.rb(1,16384,null,0,o.a,[c.d,e.k],null,null),(l()(),e.Jb(2,null,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit[n.parent.context.$implicit.key])})}function G(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,12,null,null,null,null,null,null,null)),e.Gb(6144,null,"MAT_SORT_HEADER_COLUMN_DEF",null,[o.c]),e.rb(2,16384,null,3,o.c,[],{name:[0,"name"]},null),e.Hb(603979776,8,{cell:0}),e.Hb(603979776,9,{headerCell:0}),e.Hb(603979776,10,{footerCell:0}),e.Gb(2048,[[4,4]],c.d,null,[o.c]),(l()(),e.hb(0,null,null,2,null,P)),e.rb(8,16384,null,0,o.f,[e.L],null,null),e.Gb(2048,[[9,4]],c.j,null,[o.f]),(l()(),e.hb(0,null,null,2,null,C)),e.rb(11,16384,null,0,o.b,[e.L],null,null),e.Gb(2048,[[8,4]],c.b,null,[o.b])],function(l,n){l(n,2,0,n.context.$implicit.key)},null)}function K(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"tr",[["class","mat-header-row"],["mat-header-row",""],["role","row"]],null,null,null,B,g)),e.Gb(6144,null,c.k,null,[o.g]),e.rb(2,49152,null,0,o.g,[],null,null)],null,null)}function E(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,2,"tr",[["class","mat-row"],["mat-row",""],["role","row"]],null,null,null,y,w)),e.Gb(6144,null,c.m,null,[o.i]),e.rb(2,49152,null,0,o.i,[],null,null)],null,null)}function z(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,16,"div",[],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,15,"table",[["class","mat-table"],["mat-table",""]],null,null,null,p,m)),e.Gb(6144,null,c.o,null,[o.k]),e.rb(3,2342912,null,4,o.k,[e.r,e.h,e.k,[8,null],[2,s.b],i.d,h.a],{dataSource:[0,"dataSource"]},null),e.Hb(603979776,4,{_contentColumnDefs:1}),e.Hb(603979776,5,{_contentRowDefs:1}),e.Hb(603979776,6,{_contentHeaderRowDefs:1}),e.Hb(603979776,7,{_contentFooterRowDefs:1}),(l()(),e.hb(16777216,null,null,2,null,G)),e.rb(9,278528,null,0,i.k,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),e.Eb(0,i.f,[e.s]),(l()(),e.hb(0,null,null,2,null,K)),e.rb(12,540672,null,0,o.h,[e.L,e.r],{columns:[0,"columns"]},null),e.Gb(2048,[[6,4]],c.l,null,[o.h]),(l()(),e.hb(0,null,null,2,null,E)),e.rb(15,540672,null,0,o.j,[e.L,e.r],{columns:[0,"columns"]},null),e.Gb(2048,[[5,4]],c.n,null,[o.j])],function(l,n){var t=n.component;l(n,3,0,n.context.ngIf.results),l(n,9,0,e.Kb(n,9,0,e.Db(n,10).transform(n.context.ngIf.results[0]))),l(n,12,0,t.objectKeys(n.context.ngIf.results[0])),l(n,15,0,t.objectKeys(n.context.ngIf.results[0]))},null)}function J(l){return e.Lb(0,[(l()(),e.hb(16777216,null,null,2,null,z)),e.rb(1,16384,null,0,i.l,[e.O,e.L],{ngIf:[0,"ngIf"]},null),e.Eb(131072,i.b,[e.h]),(l()(),e.hb(0,null,null,0))],function(l,n){var t=n.component;l(n,1,0,e.Kb(n,1,0,e.Db(n,2).transform(t.getData(n.parent.context.$implicit.value))))},null)}function M(l){return e.Lb(0,[(l()(),e.sb(0,16777216,null,null,5,"mat-tab",[],null,null,null,x.f,x.a)),e.rb(1,770048,[[1,4]],2,k.c,[e.O],{textLabel:[0,"textLabel"]},null),e.Hb(603979776,2,{templateLabel:0}),e.Hb(335544320,3,{_explicitContent:0}),(l()(),e.hb(0,[[3,2]],0,1,null,J)),e.rb(5,16384,null,0,k.f,[e.L],null,null),(l()(),e.hb(0,null,null,0))],function(l,n){l(n,1,0,n.context.$implicit.key)},null)}function T(l){return e.Lb(2,[(l()(),e.sb(0,0,null,null,9,"div",[["class","page-container"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,8,"mat-card",[["class","mat-card"]],null,null,null,O.b,O.a)),e.rb(2,49152,null,0,L.a,[],null,null),(l()(),e.sb(3,0,null,0,6,"mat-tab-group",[["class","mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,x.d,x.b)),e.rb(4,3325952,null,1,k.g,[e.k,e.h,[2,k.a],[2,v.a]],null,null),e.Hb(603979776,1,{_tabs:1}),(l()(),e.hb(16777216,null,null,3,null,M)),e.rb(7,278528,null,0,i.k,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),e.Eb(131072,i.b,[e.h]),e.Eb(0,i.f,[e.s])],function(l,n){var t=n.component;l(n,7,0,e.Kb(n,7,0,e.Db(n,9).transform(e.Kb(n,7,0,e.Db(n,8).transform(t.data.tabs)))))},function(l,n){l(n,3,0,e.Db(n,4).dynamicHeight,"below"===e.Db(n,4).headerPosition)})}function A(l){return e.Lb(0,[(l()(),e.sb(0,0,null,null,1,"ngbm-swapi",[],null,null,null,T,I)),e.rb(1,114688,null,0,R,[F],null,null)],function(l,n){l(n,1,0)},null)}var N=e.ob("ngbm-swapi",R,A,{},{},[]),$=t("/q54"),V=t("s7LF"),X=t("POq0"),Q=t("QQfA"),W=t("gavF"),Z=t("JjoW"),U=t("qJ5m"),Y=t("Mz6y"),ll=t("VDRc"),nl=t("ura0"),tl=t("Nhcz"),el=t("u9T3"),ul=t("5GAg"),al=t("KPQW"),rl=t("Fwaw"),bl=t("kNGD"),ol=t("5Bek"),cl=t("zMNK"),il=t("c9fC"),sl=t("HsOI"),dl=t("FVPZ"),fl=t("Gi4r"),hl=t("oapL"),ml=t("ZwOa"),pl=t("02hT"),gl=t("Q+lL"),Bl=t("hOhj"),wl=t("W5yJ"),yl=t("elxJ"),xl=t("BV1i"),kl=t("lT8R"),Ol=t("dFDH"),Ll=t("qJ50"),vl=t("BzsH"),Dl=t("PCNd"),Hl=t("iInd"),jl=t("dvZr");t.d(n,"SwapiModuleNgFactory",function(){return ql});var ql=e.pb(u,[],function(l){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[a.a,a.b,r.a,b.a,N]],[3,e.j],e.w]),e.Bb(4608,i.n,i.m,[e.t,[2,i.z]]),e.Bb(4608,S.h,S.n,[i.d,e.A,S.l]),e.Bb(4608,S.o,S.o,[S.h,S.m]),e.Bb(5120,S.a,function(l){return[l]},[S.o]),e.Bb(4608,S.k,S.k,[]),e.Bb(6144,S.i,null,[S.k]),e.Bb(4608,S.g,S.g,[S.i]),e.Bb(6144,S.b,null,[S.g]),e.Bb(4608,S.f,S.j,[S.b,e.q]),e.Bb(4608,S.c,S.c,[S.f]),e.Bb(5120,e.b,function(l,n){return[$.k(l,n)]},[i.d,e.A]),e.Bb(4608,V.f,V.f,[]),e.Bb(4608,V.a,V.a,[]),e.Bb(4608,X.c,X.c,[]),e.Bb(4608,d.b,d.b,[]),e.Bb(4608,Q.a,Q.a,[Q.g,Q.c,e.j,Q.f,Q.d,e.q,e.y,i.d,s.b,[2,i.h]]),e.Bb(5120,Q.h,Q.i,[Q.a]),e.Bb(5120,W.c,W.k,[Q.a]),e.Bb(5120,Z.a,Z.b,[Q.a]),e.Bb(4608,f.e,d.c,[[2,d.g],[2,d.k]]),e.Bb(5120,U.b,U.a,[[3,U.b]]),e.Bb(5120,Y.b,Y.c,[Q.a]),e.Bb(1073742336,i.c,i.c,[]),e.Bb(1073742336,S.e,S.e,[]),e.Bb(1073742336,S.d,S.d,[]),e.Bb(1073742336,$.c,$.c,[]),e.Bb(1073742336,s.a,s.a,[]),e.Bb(1073742336,ll.a,ll.a,[]),e.Bb(1073742336,nl.b,nl.b,[]),e.Bb(1073742336,tl.a,tl.a,[]),e.Bb(1073742336,el.a,el.a,[[2,$.h],e.A]),e.Bb(1073742336,V.e,V.e,[]),e.Bb(1073742336,V.b,V.b,[]),e.Bb(1073742336,V.d,V.d,[]),e.Bb(1073742336,h.b,h.b,[]),e.Bb(1073742336,X.d,X.d,[]),e.Bb(1073742336,ul.a,ul.a,[]),e.Bb(1073742336,d.k,d.k,[[2,d.d],[2,f.f]]),e.Bb(1073742336,al.a,al.a,[]),e.Bb(1073742336,d.u,d.u,[]),e.Bb(1073742336,rl.c,rl.c,[]),e.Bb(1073742336,L.d,L.d,[]),e.Bb(1073742336,bl.b,bl.b,[]),e.Bb(1073742336,ol.c,ol.c,[]),e.Bb(1073742336,cl.g,cl.g,[]),e.Bb(1073742336,il.a,il.a,[]),e.Bb(1073742336,sl.a,sl.a,[]),e.Bb(1073742336,d.m,d.m,[]),e.Bb(1073742336,dl.a,dl.a,[]),e.Bb(1073742336,fl.c,fl.c,[]),e.Bb(1073742336,hl.b,hl.b,[]),e.Bb(1073742336,ml.a,ml.a,[]),e.Bb(1073742336,d.s,d.s,[]),e.Bb(1073742336,pl.a,pl.a,[]),e.Bb(1073742336,gl.d,gl.d,[]),e.Bb(1073742336,Bl.c,Bl.c,[]),e.Bb(1073742336,Q.e,Q.e,[]),e.Bb(1073742336,W.j,W.j,[]),e.Bb(1073742336,W.g,W.g,[]),e.Bb(1073742336,wl.a,wl.a,[]),e.Bb(1073742336,yl.a,yl.a,[]),e.Bb(1073742336,d.q,d.q,[]),e.Bb(1073742336,Z.c,Z.c,[]),e.Bb(1073742336,xl.h,xl.h,[]),e.Bb(1073742336,kl.a,kl.a,[]),e.Bb(1073742336,Ol.d,Ol.d,[]),e.Bb(1073742336,Ll.e,Ll.e,[]),e.Bb(1073742336,U.c,U.c,[]),e.Bb(1073742336,c.p,c.p,[]),e.Bb(1073742336,o.l,o.l,[]),e.Bb(1073742336,k.l,k.l,[]),e.Bb(1073742336,vl.b,vl.b,[]),e.Bb(1073742336,Y.e,Y.e,[]),e.Bb(1073742336,Dl.a,Dl.a,[]),e.Bb(1073742336,Hl.o,Hl.o,[[2,Hl.t],[2,Hl.k]]),e.Bb(1073742336,u,u,[]),e.Bb(256,S.l,"XSRF-TOKEN",[]),e.Bb(256,S.m,"X-XSRF-TOKEN",[]),e.Bb(256,bl.a,{separatorKeyCodes:[jl.f]},[]),e.Bb(1024,Hl.i,function(){return[[{path:"",component:R}]]},[])])})}}]);