function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ntln:function(e,t,a){"use strict";a.r(t);var n,c=a("tyNb"),r=a("M0ag"),i=a("fbMX"),o=a("fXoL"),s=((n=function(){function e(t){_classCallCheck(this,e),this.storageService=t}return _createClass(e,[{key:"getTabs",value:function(){return this.storageService.getOrCache("https://swapi.co/api/")}},{key:"getData",value:function(e){return this.storageService.getOrCache(e)}}]),e}()).\u0275fac=function(e){return new(e||n)(o.Yb(i.a))},n.\u0275prov=o.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),l=a("Wp6s"),f=a("wZkO"),b=a("ofXK"),u=a("+0xr");function m(e,t){if(1&e&&(o.Ub(0,"th",12),o.zc(1),o.Tb()),2&e){var a=o.fc().$implicit;o.Cb(1),o.Bc(" ",a.key," ")}}function p(e,t){if(1&e&&(o.Ub(0,"td",13),o.zc(1),o.Tb()),2&e){var a=t.$implicit,n=o.fc().$implicit;o.Cb(1),o.Bc(" ",a[n.key]," ")}}function g(e,t){1&e&&(o.Sb(0,9),o.xc(1,m,2,1,"th",10),o.xc(2,p,2,1,"td",11),o.Rb()),2&e&&o.kc("matColumnDef",t.$implicit.key)}function h(e,t){1&e&&o.Pb(0,"tr",14)}function d(e,t){1&e&&o.Pb(0,"tr",15)}function C(e,t){if(1&e&&(o.Ub(0,"div"),o.Ub(1,"table",5),o.xc(2,g,3,1,"ng-container",6),o.gc(3,"keyvalue"),o.xc(4,h,1,0,"tr",7),o.xc(5,d,1,0,"tr",8),o.Tb(),o.Tb()),2&e){var a=t.ngIf,n=o.fc(3);o.Cb(1),o.kc("dataSource",a.results),o.Cb(1),o.kc("ngForOf",o.hc(3,4,a.results[0])),o.Cb(2),o.kc("matHeaderRowDef",n.objectKeys(a.results[0])),o.Cb(1),o.kc("matRowDefColumns",n.objectKeys(a.results[0]))}}function v(e,t){if(1&e&&(o.xc(0,C,6,6,"div",4),o.gc(1,"async")),2&e){var a=o.fc().$implicit,n=o.fc();o.kc("ngIf",o.hc(1,1,n.getData(a.value)))}}function k(e,t){1&e&&(o.Ub(0,"mat-tab",2),o.xc(1,v,2,3,"ng-template",3),o.Tb()),2&e&&o.kc("label",t.$implicit.key)}var w,y=((w=function(){function e(t){_classCallCheck(this,e),this.swapiService=t,this.data={},this.objectKeys=Object.keys}return _createClass(e,[{key:"getData",value:function(e){return this.swapiService.getData(e)}},{key:"ngOnInit",value:function(){this.data.tabs=this.swapiService.getTabs()}}]),e}()).\u0275fac=function(e){return new(e||w)(o.Ob(s))},w.\u0275cmp=o.Ib({type:w,selectors:[["ngbm-swapi"]],decls:6,vars:5,consts:[[1,"page-container"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["matTabContent",""],[4,"ngIf"],["mat-table","",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"mat-card"),o.Ub(2,"mat-tab-group"),o.xc(3,k,2,1,"mat-tab",1),o.gc(4,"keyvalue"),o.gc(5,"async"),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Cb(3),o.kc("ngForOf",o.hc(4,1,o.hc(5,3,t.data.tabs))))},directives:[l.a,f.c,b.k,f.a,f.b,b.l,u.j,u.g,u.i,u.c,u.e,u.b,u.d,u.a,u.f,u.h],pipes:[b.f,b.b],styles:[".page-container[_ngcontent-%COMP%]{margin:1em 0}.page-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{margin:1em}"],changeDetection:0}),w);a.d(t,"SwapiModule",(function(){return O}));var D,O=((D=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:D}),D.\u0275inj=o.Lb({factory:function(e){return new(e||D)},imports:[[r.a,c.d.forChild([{path:"",component:y}])]]}),D)}}]);