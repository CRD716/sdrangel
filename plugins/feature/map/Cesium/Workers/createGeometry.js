define(["./when-229515d6","./PrimitivePipeline-002aba0b","./createTaskProcessorWorker","./Transforms-ab7258fe","./Matrix2-46444433","./RuntimeError-608565a6","./ComponentDatatype-692a36d3","./WebGLConstants-f63312fc","./combine-35b6d9cb","./GeometryAttribute-d3bef603","./GeometryAttributes-b253752a","./GeometryPipeline-dfaf2218","./AttributeCompression-95366034","./EncodedCartesian3-d9d33966","./IndexDatatype-7c683b18","./IntersectionTests-4cf437d5","./Plane-1f2a7880","./WebMercatorProjection-aa53f15d"],(function(e,t,r,n,o,i,s,a,c,f,u,d,b,m,l,p,y,P){"use strict";const k={};function C(t){let r=k[t];return e.defined(r)||("object"==typeof exports?k[r]=r=require("Workers/"+t):require(["Workers/"+t],(function(e){r=e,k[r]=e}))),r}return r((function(r,n){const o=r.subTasks,i=o.length,s=new Array(i);for(let t=0;t<i;t++){const r=o[t],n=r.geometry,i=r.moduleName;if(e.defined(i)){const e=C(i);s[t]=e(n,r.offset)}else s[t]=n}return e.when.all(s,(function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));
