import{_ as a,n as t,e as o,a as s}from"./index-BGtKTbSj.js";var n=typeof globalThis.Worker>"u"&&typeof globalThis.WorkerNavigator>"u",_="node:w-orker-_threa-ds",i=()=>_.replace(/-/g,"");async function r(){const{parentPort:e}=await a(()=>import(i()),__vite__mapDeps([])).catch();return t(e)}function p(e){n?(async()=>o(e,await r()))():o(e)}s.expose&&(async()=>(await a(()=>import("./inside-KOB7JHHP-86lugS3R.js"),__vite__mapDeps([0,1,2])),(globalThis.postMessage?globalThis:await r()).postMessage("comlink-exposed")))();var d=import.meta.url;const c=Object.freeze(Object.defineProperty({__proto__:null,WORKER_ENTRY_FILE_URL:d},Symbol.toStringTag,{value:"Module"}));export{p as e,c as s};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/inside-KOB7JHHP-86lugS3R.js","assets/index-BGtKTbSj.js","assets/index-CJLoQAjR.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
