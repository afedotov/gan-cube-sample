import{A as J,b as L}from"./index-ytOBkwvO.js";var M=7;function O(e){if(e<2)return e;let t=1;for(let n=2;n<=e;n++)t*=n;return t}function b(e,t){if(t<0||t>e)return 0;if(t===0||t===e)return 1;let n=1;for(let r=0;r<t;r++)n=n*(e-r)/(r+1)|0;return n}function N(e){e=e.slice();let t=e.length,n=O(t-1),r=0;for(;t>1;){t--;let l=e[0];r+=l*n;for(let o=0;o<t;o++){let i=e[o+1];e[o]=i-(i>l)}n/=t}return r}function k(e){let t=e.length,n=0;for(let r=0;r<t-1;r++)for(let l=r;l<t;l++)e[r]>e[l]&&(n^=1);return n}function B(e){return N(e)>>1}var[D,K]=(()=>{let e=new Int8Array(10240),t=new Int8Array(1024*10);for(let l=0;l<1024;l++)for(let o=0,i=0;o<10;o++)l>>>o&1&&(e[o<<10|l]=i,t[i<<10|l]=o,i++);function n(l){let o=1023,i=181440,a=0;for(let f=0;f<8;f++){let u=l[f];a+=e[o|u<<10]*i,o&=~(1<<u),i/=9-f}return a}function r(l,o){let i=1023,a=181440,f=0;for(let u=0;u<8;u++){let _=l/a|0;l-=_*a,f^=_&1;let s=t[i|_<<10];o[u]=s,i&=~(1<<s),a/=9-u}return o[8]=t[i|f<<10],o[9]=t[i|(f^1)<<10],o}return[n,r]})();function E(e){let t=e.length,n=0;for(let i=0;i<t;i++)n+=+(e[i]===1);let r=t-n;if(r===0||n===0||t===1)return 0;let l=b(t-1,n),o=0;for(let i=0;r>0&&n>0&&t>1;i++)t--,e[i]===0?l=l*--r/t:(o+=l,l=l*n--/t);return o}function P(e,t,n){let r=n-t,l=b(n-1,t),o=[],i=n-1;for(let a=0;a<i;a++)n--,e<l?(o.push(0),l=l*--r/n):(o.push(1),e-=l,l=l*t--/n);return o.push(t),o}function m(e,t){let n=[];for(let r=0;r<t.length;r++)n[r]=e[t[r]];return n}function R(e,t){let n=m(e[0],t[0]),r=[],l=t[0].length;for(let o=0;o<l;o++)r[o]=(e[1][t[0][o]]+t[1][o])%3;return[n,r]}function x(e,t){let n=[];for(let r=0;r<t;r++)n[r]=r;for(let r=0;r<e.length;r++)n[e[r]]=e[(r+1)%e.length];return n}function v(e,t){let n=Array(t).fill(0);for(let r in e)n[r]=e[r];return n}var T=[x([0,1,2,3,4],20),v({},20)],C=[x([4,3,11,12,13],20),v({4:2,3:1,11:1,12:1,13:1},20)],I=[x([3,2,9,10,11],20),v({3:2,2:1,9:1,10:1,11:1},20)],G=[x([2,1,7,8,9],20),v({2:2,1:1,7:1,8:1,9:1},20)],Q=[x([1,0,5,6,7],20),v({1:2,0:1,5:1,6:1,7:1},20)],V=[x([0,4,13,14,5],20),v({0:2,4:1,13:1,14:1,5:1},20)],j=[[15,16,17,18,19,10,9,8,7,6,5,14,13,12,11,0,1,2,3,4],v({},20)];v({},20);var d=[T,C,I,G,Q,V,j],W=["U","R","F","L","BL","BR","x2"],X=R(j,j),g=[];for(let e=0;e<d.length;e++){g[e]=[X];for(let t=1;t<5;t++)g[e][t]=R(g[e][t-1],d[e])}function Y(){let e=[0];for(let n=1;n<20;n++){let r=L(n+1);e[n]=e[r],e[r]=n}k(e)===1&&([e[0],e[1]]=[e[1],e[0]]);let t=Array(20).fill(0);for(let n=0;n<19;n++)t[n]=L(3),t[19]+=3-t[n];return t[19]%=3,[e,t]}function Z(e){let t=["0","","2","2'","'"];return e.map(([r,l])=>W[r]+t[l]).join(" ")}function $(e,t){for(let[n,r]of t)for(let l=0;l<r;l++)e=R(e,d[n]);return e}function ee(){return fe(Y())}function te(e){let t=e[0];if(t.slice(15,20).every(o=>o<15))return[];if(t.slice(0,5).every(o=>o<15))return[[6,1]];let n=t.map(o=>o>=15),r=0,l;for(;l===void 0;)r++,l=q(n,r,-1);return l.push([6,1]),l}function q(e,t,n){if(t===0)return e.slice(0,5).some(r=>r)?void 0:[];for(let r=0;r<6;r++)if(r!==n)for(let l=1;l<5;l++){let o=m(e,g[r][l][0]),i=q(o,t-1,r);if(i!==void 0)return[[r,l]].concat(i)}}function re(e){let t=e[0].slice(0,15),n=e[1],l=243*E(t.map(i=>+(i>=15)));for(let i=0,a=0;i<15;i++)t[i]<15||(l+=n[i]*Math.pow(3,a),a++);let o=0;for(let i=0;i<5;i++)o+=t.indexOf(15+i)*Math.pow(15,i);return[l,o]}function ne(e){let t=[y(),A()],n=[ue(),se()];return S(re(e),t,n).concat([[6,1]])}function le(e){let t=[5,6,7,8,14],n=e[0].slice(0,15),r=e[1],o=243*E(n.map(a=>+(t.indexOf(a)!==-1)));for(let a=0,f=0;a<15;a++)t.indexOf(n[a])!==-1&&(o+=r[a]*Math.pow(3,f),f++);let i=0;for(let a=0;a<5;a++)i+=n.indexOf(t[a])*Math.pow(15,a);return[o,i]}function oe(e){let t=[y(),A()],n=[pe(),_e()];return S(le(e),t,n)}function ie(e){let t=e[0].slice(0,14),n=e[1],r=0,l=[],o=0;for(let i of[0,1,2,3,4,9,10,11,12,13])i!==13&&(r+=n[i]*Math.pow(3,o)),l[o]=t[i]<5?t[i]:t[i]-4,o++;return[r,B(l)]}function ae(e){return de(ie(e))}function fe(e){let t=[];for(let n of[te,ne,oe,ae]){let r=n(e);e=$(e,r),t=t.concat(r)}return t}var p={};function y(){if(p.phase23om)return p.phase23om;const e=b(15,5),t=[1,3,9,27,81,243];let n=Array(b(15,5)*t[5]);p.phase23om=n;for(let r=0;r<e;r++){let l=P(r,5,15).concat(Array(5).fill(0)),o=[];for(let i=0;i<6;i++){let a=m(l,d[i][0]).slice(0,15);o[i]=E(a)}for(let i=0;i<t[5];i++){n[i+243*r]=[];let a=[];for(let f=0,u=0;f<20;f++)l[f]===1?(a[f]=(i/t[u]|0)%3,u++):a[f]=99;for(let f=0;f<6;f++){let u=d[f],_=[];for(let c=0;c<15;c++)_[c]=a[u[0][c]]+u[1][c];let s=_.filter(c=>c<10),h=0;for(let c=0;c<5;c++)h+=s[c]%3*t[c];n[i+243*r][f]=h+243*o[f]}}}return n}function ue(){if(p.phase2op)return p.phase2op;let e=y();return p.phase2op=w(e,[243*3002])}function pe(){if(p.phase3op)return p.phase3op;let e=y();return p.phase3op=w(e,[243*246])}function A(){if(p.phase23pm)return p.phase23pm;const e=[1,15,225,Math.pow(15,3),Math.pow(15,4),Math.pow(15,5)];let t=Array(e[5]),n=Array(15);for(let l=0;l<15;l++){n[l]=Array(6);for(let o=0;o<6;o++)n[l][o]=d[o][0].indexOf(l)}let r=[0,0,0,0,0];for(let l=0;l<e[5];l++){t[l]=Array(6);for(let o=0;o<6;o++){let i=0;for(let a=0;a<5;a++)i+=n[r[a]][o]*e[a];t[l][o]=i}r[0]++;for(let o=0;o<4;o++)r[o]===15&&(r[o]=0,r[o+1]++)}return p.phase23pm=t}function se(){if(p.phase2pp)return p.phase2pp;let e=A();return p.phase2pp=w(e,[213090])}function _e(){if(p.phase3pp)return p.phase3pp;let e=A();return p.phase3pp=w(e,[737420])}function F(){if(p.phase4om)return p.phase4om;const e=[1,3,9,27,81,243,729,2187,6561,19683,59049];let t=Array(e[9]);for(let n=0;n<e[9];n++){let r=Array(14).fill(0);for(let l=0;l<9;l++){let o=l<5?l:l+4;r[o]=(n/e[l]|0)%3,r[13]-=r[o]}r[13]=(r[13]+999)%3,t[n]=[];for(let l=0;l<3;l++){let o=d[l],i=[0,1,2,3,4,9,10,11,12,13].map(f=>r[o[0][f]]+o[1][f]),a=0;for(let f=0;f<9;f++)a+=i[f]%3*e[f];t[n][l]=a}}return p.phase4om=t}function H(){if(p.phase4pm)return p.phase4pm;const e=O(10)/2;let t=[0,1,2,3,4,-1,-1,-1,-1,5,6,7,8,9],n=[0,1,2,3,4,9,10,11,12,13],r=[m(t,m(T[0],n)),m(t,m(C[0],n)),m(t,m(I[0],n))],l=Array(e),o=Array(10);for(let i=0;i<e;i++){K(i,o),l[i]=[];for(let a=0;a<3;a++){let f=m(o,r[a]);l[i][a]=D(f)}}return p.phase4pm=l}function he(){if(p.phase4op)return p.phase4op;let e=F();return p.phase4op=w(e,[0])}function ce(){if(p.phase4pp)return p.phase4pp;let e=H();return p.phase4pp=w(e,[0])}function me(e){if(p.phase4np_list&&p.phase4np_list.threshold===e)return p.phase4np_list;let t=[F(),H()],n=Math.pow(3,9),r=[0];l(e,[0,0],-1);function l(a,f,u){if(r.push(f[0]+n*f[1]),a===0)return;let _=[];for(let s=0;s<3;s++)if(s!==u){_[0]=f[0],_[1]=f[1];for(let h=1;h<5;h++)_[0]=t[0][_[0]][s],_[1]=t[1][_[1]][s],l(a-1,_,s)}}r.sort((a,f)=>a-f);let o=[],i=-1;for(let a of r)a!==i&&o.push(i=a);return o.threshold=e,p.phase4np_list=o}function ve(e,t){let n=0,r=e.length-1;for(;r-n>1;){let l=n+r>>1;t>e[l]?n=l+1:r=l}return t===e[n]||t===e[r]}function w(e,t){let n=e.length,r=e[0].length,l=Array(n).fill(-1);for(let a of t)l[a]=0;let o=0,i=!1;for(;!i;){i=!0;for(let a=0;a<n;a++)if(l[a]===o)for(let f=0;f<r;f++){let u=e[a][f];for(;u!==a;)l[u]===-1&&(i=!1,l[u]=o+1),u=e[u][f]}o++}return l}function S(e,t,n){let r=e.length,l=0;for(let o=0;o<r;o++)l=Math.max(l,n[o][e[o]]);for(;;){let o=U(e,t,n,l,-1);if(o!==void 0)return o;l++}}function U(e,t,n,r,l){let o=e.length,i=t[0][0].length,a=0;for(let f=0;f<o;f++)a=Math.max(a,n[f][e[f]]);if(!(a>r)){if(r===0||a===0)return[];for(let f=0;f<i;f++){if(f===l)continue;let u=e.slice();for(let s=0;s<o;s++)u[s]=t[s][e[s]][f];let _=1;for(;e.some((s,h)=>e[h]!==u[h]);){let s=U(u,t,n,r-1,f);if(s!==void 0)return[[f,_]].concat(s);for(let h=0;h<o;h++)u[h]=t[h][u[h]][f];_++}}}}function de(e){let t=F(),n=H(),r=he(),l=ce(),o=me(M),i=Math.max(r[e[0]],l[e[1]]);for(;;){let a=z(e,i,-1,t,n,r,l,o);if(a!==void 0)return a;i++}}function z(e,t,n,r,l,o,i,a){let f=Math.max(o[e[0]],i[e[1]]);if(!(f>t)&&(f<=M&&!ve(a,e[0]+19683*e[1])&&(f=M+1),!(f>t))){if(t===0||f===0)return[];for(let u=0;u<3;u++){if(u===n)continue;let _=e.slice();for(let s=1;s<5;s++){_[0]=r[_[0]][u],_[1]=l[_[1]][u];let h=z(_,t-1,u,r,l,o,i,a);if(h!==void 0)return[[u,s]].concat(h)}}}}function we(){return new J(Z(ee()))}export{we as getRandomKilominxScramble};
