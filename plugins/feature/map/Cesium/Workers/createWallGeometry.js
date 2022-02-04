define(["./when-229515d6","./Matrix2-46444433","./Transforms-ab7258fe","./ComponentDatatype-692a36d3","./RuntimeError-608565a6","./GeometryAttribute-d3bef603","./GeometryAttributes-b253752a","./IndexDatatype-7c683b18","./VertexFormat-7272aabd","./WallGeometryLibrary-301bf0cc","./combine-35b6d9cb","./WebGLConstants-f63312fc","./arrayRemoveDuplicates-ee080d9d","./PolylinePipeline-3b21ed18","./EllipsoidGeodesic-94d72244","./EllipsoidRhumbLine-9cd85d72","./IntersectionTests-4cf437d5","./Plane-1f2a7880"],(function(e,t,n,i,a,o,r,s,l,m,u,d,p,c,y,f,g,h){"use strict";const C=new t.Cartesian3,b=new t.Cartesian3,x=new t.Cartesian3,A=new t.Cartesian3,_=new t.Cartesian3,E=new t.Cartesian3,w=new t.Cartesian3;function F(n){const a=(n=e.defaultValue(n,e.defaultValue.EMPTY_OBJECT)).positions,o=n.maximumHeights,r=n.minimumHeights,s=e.defaultValue(n.vertexFormat,l.VertexFormat.DEFAULT),m=e.defaultValue(n.granularity,i.CesiumMath.RADIANS_PER_DEGREE),u=e.defaultValue(n.ellipsoid,t.Ellipsoid.WGS84);this._positions=a,this._minimumHeights=r,this._maximumHeights=o,this._vertexFormat=l.VertexFormat.clone(s),this._granularity=m,this._ellipsoid=t.Ellipsoid.clone(u),this._workerName="createWallGeometry";let d=1+a.length*t.Cartesian3.packedLength+2;e.defined(r)&&(d+=r.length),e.defined(o)&&(d+=o.length),this.packedLength=d+t.Ellipsoid.packedLength+l.VertexFormat.packedLength+1}F.pack=function(n,i,a){let o;a=e.defaultValue(a,0);const r=n._positions;let s=r.length;for(i[a++]=s,o=0;o<s;++o,a+=t.Cartesian3.packedLength)t.Cartesian3.pack(r[o],i,a);const m=n._minimumHeights;if(s=e.defined(m)?m.length:0,i[a++]=s,e.defined(m))for(o=0;o<s;++o)i[a++]=m[o];const u=n._maximumHeights;if(s=e.defined(u)?u.length:0,i[a++]=s,e.defined(u))for(o=0;o<s;++o)i[a++]=u[o];return t.Ellipsoid.pack(n._ellipsoid,i,a),a+=t.Ellipsoid.packedLength,l.VertexFormat.pack(n._vertexFormat,i,a),i[a+=l.VertexFormat.packedLength]=n._granularity,i};const v=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),L=new l.VertexFormat,k={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:v,vertexFormat:L,granularity:void 0};return F.unpack=function(n,i,a){let o;i=e.defaultValue(i,0);let r=n[i++];const s=new Array(r);for(o=0;o<r;++o,i+=t.Cartesian3.packedLength)s[o]=t.Cartesian3.unpack(n,i);let m,u;if(r=n[i++],r>0)for(m=new Array(r),o=0;o<r;++o)m[o]=n[i++];if(r=n[i++],r>0)for(u=new Array(r),o=0;o<r;++o)u[o]=n[i++];const d=t.Ellipsoid.unpack(n,i,v);i+=t.Ellipsoid.packedLength;const p=l.VertexFormat.unpack(n,i,L),c=n[i+=l.VertexFormat.packedLength];return e.defined(a)?(a._positions=s,a._minimumHeights=m,a._maximumHeights=u,a._ellipsoid=t.Ellipsoid.clone(d,a._ellipsoid),a._vertexFormat=l.VertexFormat.clone(p,a._vertexFormat),a._granularity=c,a):(k.positions=s,k.minimumHeights=m,k.maximumHeights=u,k.granularity=c,new F(k))},F.fromConstantHeights=function(t){const n=(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions;let i,a;const o=t.minimumHeight,r=t.maximumHeight,s=e.defined(o),l=e.defined(r);if(s||l){const e=n.length;i=s?new Array(e):void 0,a=l?new Array(e):void 0;for(let t=0;t<e;++t)s&&(i[t]=o),l&&(a[t]=r)}return new F({positions:n,maximumHeights:a,minimumHeights:i,ellipsoid:t.ellipsoid,vertexFormat:t.vertexFormat})},F.createGeometry=function(a){const l=a._positions,u=a._minimumHeights,d=a._maximumHeights,p=a._vertexFormat,c=a._granularity,y=a._ellipsoid,f=m.WallGeometryLibrary.computePositions(y,l,d,u,c,!0);if(!e.defined(f))return;const g=f.bottomPositions,h=f.topPositions,F=f.numCorners;let v=h.length,L=2*v;const k=p.position?new Float64Array(L):void 0,H=p.normal?new Float32Array(L):void 0,V=p.tangent?new Float32Array(L):void 0,G=p.bitangent?new Float32Array(L):void 0,D=p.st?new Float32Array(L/3*2):void 0;let P,T=0,z=0,O=0,R=0,S=0,I=w,N=E,M=_,W=!0;v/=3;let B=0;const U=1/(v-F-1);for(P=0;P<v;++P){const e=3*P,n=t.Cartesian3.fromArray(h,e,C),a=t.Cartesian3.fromArray(g,e,b);if(p.position&&(k[T++]=a.x,k[T++]=a.y,k[T++]=a.z,k[T++]=n.x,k[T++]=n.y,k[T++]=n.z),p.st&&(D[S++]=B,D[S++]=0,D[S++]=B,D[S++]=1),p.normal||p.tangent||p.bitangent){let a=t.Cartesian3.clone(t.Cartesian3.ZERO,A);const o=t.Cartesian3.subtract(n,y.geodeticSurfaceNormal(n,b),b);if(P+1<v&&(a=t.Cartesian3.fromArray(h,e+3,A)),W){const e=t.Cartesian3.subtract(a,n,x),i=t.Cartesian3.subtract(o,n,C);I=t.Cartesian3.normalize(t.Cartesian3.cross(i,e,I),I),W=!1}t.Cartesian3.equalsEpsilon(n,a,i.CesiumMath.EPSILON10)?W=!0:(B+=U,p.tangent&&(N=t.Cartesian3.normalize(t.Cartesian3.subtract(a,n,N),N)),p.bitangent&&(M=t.Cartesian3.normalize(t.Cartesian3.cross(I,N,M),M))),p.normal&&(H[z++]=I.x,H[z++]=I.y,H[z++]=I.z,H[z++]=I.x,H[z++]=I.y,H[z++]=I.z),p.tangent&&(V[R++]=N.x,V[R++]=N.y,V[R++]=N.z,V[R++]=N.x,V[R++]=N.y,V[R++]=N.z),p.bitangent&&(G[O++]=M.x,G[O++]=M.y,G[O++]=M.z,G[O++]=M.x,G[O++]=M.y,G[O++]=M.z)}}const q=new r.GeometryAttributes;p.position&&(q.position=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:k})),p.normal&&(q.normal=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:H})),p.tangent&&(q.tangent=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),p.bitangent&&(q.bitangent=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G})),p.st&&(q.st=new o.GeometryAttribute({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:D}));const J=L/3;L-=6*(F+1);const Y=s.IndexDatatype.createTypedArray(J,L);let Z=0;for(P=0;P<J-2;P+=2){const e=P,n=P+2,a=t.Cartesian3.fromArray(k,3*e,C),o=t.Cartesian3.fromArray(k,3*n,b);if(t.Cartesian3.equalsEpsilon(a,o,i.CesiumMath.EPSILON10))continue;const r=P+1,s=P+3;Y[Z++]=r,Y[Z++]=e,Y[Z++]=s,Y[Z++]=s,Y[Z++]=e,Y[Z++]=n}return new o.Geometry({attributes:q,indices:Y,primitiveType:o.PrimitiveType.TRIANGLES,boundingSphere:new n.BoundingSphere.fromVertices(k)})},function(n,i){return e.defined(i)&&(n=F.unpack(n,i)),n._ellipsoid=t.Ellipsoid.clone(n._ellipsoid),F.createGeometry(n)}}));
