"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=v(function(A,d){
var m=require('@stdlib/number-float64-base-to-float32/dist'),j=require('@stdlib/math-base-assert-is-positive-zerof/dist'),R=require('@stdlib/math-base-assert-is-negative-zerof/dist'),Z=require('@stdlib/math-base-assert-is-nanf/dist');function _(i,r,a,f){var n,t,u,e,s;if(i<=0)return NaN;if(i===1||a===0)return r[f];for(u=f,t=r[u],n=t,s=1;s<i;s++){if(u+=a,e=r[u],Z(e))return e;e<t||e===t&&R(e)?t=e:(e>n||e===n&&j(e))&&(n=e)}return m(m(n+t)/2)}d.exports=_
});var g=v(function(B,c){
var E=require('@stdlib/strided-base-stride2offset/dist'),F=o();function O(i,r,a){return F(i,r,a,E(i,a))}c.exports=O
});var y=v(function(C,p){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),T=o();P(l,"ndarray",T);p.exports=l
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),q,x=h(b(__dirname,"./native.js"));k(x)?q=w:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
