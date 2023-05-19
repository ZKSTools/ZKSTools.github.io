var Xe=Object.defineProperty;var et=(t,e,n)=>e in t?Xe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ze=(t,e,n)=>(et(t,typeof e!="symbol"?e+"":e,n),n),Ae=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var f=(t,e,n)=>(Ae(t,e,"read from private field"),n?n.call(t):e.get(t)),O=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},be=(t,e,n,r)=>(Ae(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);var _=(t,e,n)=>(Ae(t,e,"access private method"),n);import{r as M,j as u}from"./index-2afb3425.js";import{a as q,C as tt}from"./axios-5f53dd84.js";import{U as nt,S as rt,D as st,n as V,e as it}from"./save_excel-1f716160.js";import{F as H,a as Le,T as at,P as De,D as Je,b as lt}from"./index-2debab55.js";import{I as we,S as w,P as ot}from"./index-a8c266b4.js";import{B as Z,E as ct}from"./EditOutlined-aa31d998.js";import{L as dt}from"./index-1dc70f22.js";import{S as ut}from"./index-273f5087.js";const mt={ethereum:"https://eth.llamarpc.com",optimism:"https://optimism-mainnet.public.blastapi.io",arbitrum:"https://rpc.ankr.com/arbitrum",polygon:"https://polygon-bor.publicnode.com",bsc:"https://bscrpc.com"};async function le(t,e){try{let n=mt[e];if(!n)return"Error: Invalid Network Name";let i=(await q.post(n,{jsonrpc:"2.0",method:"eth_getBalance",params:[t,"latest"],id:1})).data.result;return(parseInt(i,16)/10**18).toFixed(3)}catch(n){return console.error(n),"Error"}}const ft={ethereum:"https://eth.llamarpc.com",optimism:"https://optimism-mainnet.public.blastapi.io",arbitrum:"https://rpc.ankr.com/arbitrum",polygon:"https://polygon-bor.publicnode.com",bsc:"https://bscrpc.com"};async function oe(t,e){try{let n=ft[e];if(!n)return"Error: Invalid Network Name";const i=(await q.post(n,{jsonrpc:"2.0",method:"eth_getTransactionCount",params:[t,"latest"],id:1})).data.result;return parseInt(i,16)}catch(n){return console.error(n),"Error"}}async function ce(t){try{let e="https://zksync2-mainnet-explorer.zksync.io/address/"+t;const n=await q.get(e);let r,i,d;return"0x0000000000000000000000000000000000000000"in n.data.info.balances?i=(parseInt(n.data.info.balances["0x0000000000000000000000000000000000000000"].balance,16)/10**18).toFixed(3):i=0,"0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4"in n.data.info.balances?d=(parseInt(n.data.info.balances["0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4"].balance,16)/10**6).toFixed(3):d=0,r=n.data.info.sealedNonce,{balance2:i,tx2:r,usdcBalance:d}}catch(e){return console.error(e),{balance2:"Error",tx2:"Error",usdcBalance:"Error"}}}async function de(t){try{let e="https://api.zksync.io/jsrpc";const n=await q.post(e,{id:1,jsonrpc:"2.0",method:"account_info",params:[t]});let r;"ETH"in n.data.result.committed.balances?r=(n.data.result.committed.balances.ETH/10**18).toFixed(3):r=0;let i=n.data.result.committed.nonce;return{balance1:r,tx1:i}}catch(e){return console.error(e),{balance1:"Error",tx1:"Error"}}}const ht="6.3.0";function gt(t,e,n){const r=e.split("|").map(d=>d.trim());for(let d=0;d<r.length;d++)switch(e){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof t===e)return}const i=new Error(`invalid value for type ${e}`);throw i.code="INVALID_ARGUMENT",i.argument=`value.${n}`,i.value=t,i}function Ve(t,e,n){for(let r in e){let i=e[r];const d=n?n[r]:null;d&&gt(i,d,r),Object.defineProperty(t,r,{enumerable:!0,value:i,writable:!1})}}function W(t){if(t==null)return"null";if(Array.isArray(t))return"[ "+t.map(W).join(", ")+" ]";if(t instanceof Uint8Array){const e="0123456789abcdef";let n="0x";for(let r=0;r<t.length;r++)n+=e[t[r]>>4],n+=e[t[r]&15];return n}if(typeof t=="object"&&typeof t.toJSON=="function")return W(t.toJSON());switch(typeof t){case"boolean":case"symbol":return t.toString();case"bigint":return BigInt(t).toString();case"number":return t.toString();case"string":return JSON.stringify(t);case"object":{const e=Object.keys(t);return e.sort(),"{ "+e.map(n=>`${W(n)}: ${W(t[n])}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function yt(t,e,n){{const i=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${W(n)}`);for(const d in n){const h=n[d];i.push(d+"="+W(h))}}i.push(`code=${e}`),i.push(`version=${ht}`),i.length&&(t+=" ("+i.join(", ")+")")}let r;switch(e){case"INVALID_ARGUMENT":r=new TypeError(t);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":r=new RangeError(t);break;default:r=new Error(t)}return Ve(r,{code:e}),n&&Object.assign(r,n),r}function v(t,e,n,r){if(!t)throw yt(e,n,r)}function S(t,e,n,r){v(t,e,"INVALID_ARGUMENT",{argument:n,value:r})}["NFD","NFC","NFKD","NFKC"].reduce((t,e)=>{try{if("test".normalize(e)!=="test")throw new Error("bad");if(e==="NFD"){const n=String.fromCharCode(233).normalize("NFD"),r=String.fromCharCode(101,769);if(n!==r)throw new Error("broken")}t.push(e)}catch{}return t},[]);function pt(t,e,n){if(n==null&&(n=""),t!==e){let r=n,i="new";n&&(r+=".",i+=" "+n),v(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:i})}}function xt(t,e,n){if(t instanceof Uint8Array)return n?new Uint8Array(t):t;if(typeof t=="string"&&t.match(/^0x([0-9a-f][0-9a-f])*$/i)){const r=new Uint8Array((t.length-2)/2);let i=2;for(let d=0;d<r.length;d++)r[d]=parseInt(t.substring(i,i+2),16),i+=2;return r}S(!1,"invalid BytesLike value",e||"value",t)}function kt(t,e){return xt(t,e,!1)}const He=BigInt(0),X=BigInt(1),ee=9007199254740991;function ve(t,e){const n=Ze(t,"value"),r=BigInt(Se(e,"width"));if(v(n>>r===He,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:t}),n>>r-X){const i=(X<<r)-X;return-((~n&i)+X)}return n}function Me(t,e){const n=Ze(t,"value"),r=BigInt(Se(e,"bits"));return n&(X<<r)-X}function Ce(t,e){switch(typeof t){case"bigint":return t;case"number":return S(Number.isInteger(t),"underflow",e||"value",t),S(t>=-ee&&t<=ee,"overflow",e||"value",t),BigInt(t);case"string":try{if(t==="")throw new Error("empty string");return t[0]==="-"&&t[1]!=="-"?-BigInt(t.substring(1)):BigInt(t)}catch(n){S(!1,`invalid BigNumberish string: ${n.message}`,e||"value",t)}}S(!1,"invalid BigNumberish value",e||"value",t)}function Ze(t,e){const n=Ce(t,e);return v(n>=He,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:t}),n}const Re="0123456789abcdef";function _t(t){if(t instanceof Uint8Array){let e="0x0";for(const n of t)e+=Re[n>>4],e+=Re[n&15];return BigInt(e)}return Ce(t)}function Se(t,e){switch(typeof t){case"bigint":return S(t>=-ee&&t<=ee,"overflow",e||"value",t),Number(t);case"number":return S(Number.isInteger(t),"underflow",e||"value",t),S(t>=-ee&&t<=ee,"overflow",e||"value",t),t;case"string":try{if(t==="")throw new Error("empty string");return Se(BigInt(t),e)}catch(n){S(!1,`invalid numeric string: ${n.message}`,e||"value",t)}}S(!1,"invalid numeric value",e||"value",t)}const bt=BigInt(-1),F=BigInt(0),te=BigInt(1),wt=BigInt(5),Q={};let ne="0000";for(;ne.length<80;)ne+=ne;function K(t){let e=ne;for(;e.length<t;)e+=e;return BigInt("1"+e.substring(0,t))}function ue(t,e,n){const r=BigInt(e.width);if(e.signed){const i=te<<r-te;v(n==null||t>=-i&&t<i,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t>F?t=ve(Me(t,r),r):t=-ve(Me(-t,r),r)}else{const i=te<<r;v(n==null||t>=0&&t<i,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t=(t%i+i)%i&i-te}return t}function Ne(t){typeof t=="number"&&(t=`fixed128x${t}`);let e=!0,n=128,r=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")e=!1;else{const d=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);S(d,"invalid fixed format","format",t),e=d[1]!=="u",n=parseInt(d[2]),r=parseInt(d[3])}}else if(t){const d=t,h=(x,E,T)=>d[x]==null?T:(S(typeof d[x]===E,"invalid fixed format ("+x+" not "+E+")","format."+x,d[x]),d[x]);e=h("signed","boolean",e),n=h("width","number",n),r=h("decimals","number",r)}S(n%8===0,"invalid FixedNumber width (not byte aligned)","format.width",n),S(r<=80,"invalid FixedNumber decimals (too large)","format.decimals",r);const i=(e?"":"u")+"fixed"+String(n)+"x"+String(r);return{signed:e,width:n,decimals:r,name:i}}function St(t,e){let n="";t<F&&(n="-",t*=bt);let r=t.toString();if(e===0)return n+r;for(;r.length<=e;)r=ne+r;const i=r.length-e;for(r=r.substring(0,i)+"."+r.substring(i);r[0]==="0"&&r[1]!==".";)r=r.substring(1);for(;r[r.length-1]==="0"&&r[r.length-2]!==".";)r=r.substring(0,r.length-1);return n+r}var B,p,A,J,Y,U,D,he,je,ge,Fe,ye,Be,pe,Ue;const R=class{constructor(e,n,r){O(this,J);O(this,U);O(this,he);O(this,ge);O(this,ye);O(this,pe);ze(this,"format");O(this,B,void 0);O(this,p,void 0);O(this,A,void 0);ze(this,"_value");pt(e,Q,"FixedNumber"),be(this,p,n),be(this,B,r);const i=St(n,r.decimals);Ve(this,{format:r.name,_value:i}),be(this,A,K(r.decimals))}get signed(){return f(this,B).signed}get width(){return f(this,B).width}get decimals(){return f(this,B).decimals}get value(){return f(this,p)}addUnsafe(e){return _(this,he,je).call(this,e)}add(e){return _(this,he,je).call(this,e,"add")}subUnsafe(e){return _(this,ge,Fe).call(this,e)}sub(e){return _(this,ge,Fe).call(this,e,"sub")}mulUnsafe(e){return _(this,ye,Be).call(this,e)}mul(e){return _(this,ye,Be).call(this,e,"mul")}mulSignal(e){_(this,J,Y).call(this,e);const n=f(this,p)*f(e,p);return v(n%f(this,A)===F,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),_(this,U,D).call(this,n/f(this,A),"mulSignal")}divUnsafe(e){return _(this,pe,Ue).call(this,e)}div(e){return _(this,pe,Ue).call(this,e,"div")}divSignal(e){v(f(e,p)!==F,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),_(this,J,Y).call(this,e);const n=f(this,p)*f(this,A);return v(n%f(e,p)===F,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),_(this,U,D).call(this,n/f(e,p),"divSignal")}cmp(e){let n=this.value,r=e.value;const i=this.decimals-e.decimals;return i>0?r*=K(i):i<0&&(n*=K(-i)),n<r||n>r?-1:0}eq(e){return this.cmp(e)===0}lt(e){return this.cmp(e)<0}lte(e){return this.cmp(e)<=0}gt(e){return this.cmp(e)>0}gte(e){return this.cmp(e)>=0}floor(){let e=f(this,p);return f(this,p)<F&&(e-=f(this,A)-te),e=f(this,p)/f(this,A)*f(this,A),_(this,U,D).call(this,e,"floor")}ceiling(){let e=f(this,p);return f(this,p)>F&&(e+=f(this,A)-te),e=f(this,p)/f(this,A)*f(this,A),_(this,U,D).call(this,e,"ceiling")}round(e){if(e==null&&(e=0),e>=this.decimals)return this;const n=this.decimals-e,r=wt*K(n-1);let i=this.value+r;const d=K(n);return i=i/d*d,ue(i,f(this,B),"round"),new R(Q,i,f(this,B))}isZero(){return f(this,p)===F}isNegative(){return f(this,p)<F}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return R.fromString(this.toString(),e)}static fromValue(e,n,r){n==null&&(n=0);const i=Ne(r);let d=Ce(e,"value");const h=n-i.decimals;if(h>0){const x=K(h);v(d%x===F,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:e}),d/=x}else h<0&&(d*=K(-h));return ue(d,i,"fromValue"),new R(Q,d,i)}static fromString(e,n){const r=e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);S(r&&r[2].length+r[3].length>0,"invalid FixedNumber string value","value",e);const i=Ne(n);let d=r[2]||"0",h=r[3]||"";for(;h.length<i.decimals;)h+=ne;v(h.substring(i.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:e}),h=h.substring(0,i.decimals);const x=BigInt(r[1]+d+h);return ue(x,i,"fromString"),new R(Q,x,i)}static fromBytes(e,n){let r=_t(kt(e,"value"));const i=Ne(n);return i.signed&&(r=ve(r,i.width)),ue(r,i,"fromBytes"),new R(Q,r,i)}};let Ee=R;B=new WeakMap,p=new WeakMap,A=new WeakMap,J=new WeakSet,Y=function(e){S(this.format===e.format,"incompatible format; use fixedNumber.toFormat","other",e)},U=new WeakSet,D=function(e,n){return e=ue(e,f(this,B),n),new R(Q,e,f(this,B))},he=new WeakSet,je=function(e,n){return _(this,J,Y).call(this,e),_(this,U,D).call(this,f(this,p)+f(e,p),n)},ge=new WeakSet,Fe=function(e,n){return _(this,J,Y).call(this,e),_(this,U,D).call(this,f(this,p)-f(e,p),n)},ye=new WeakSet,Be=function(e,n){return _(this,J,Y).call(this,e),_(this,U,D).call(this,f(this,p)*f(e,p)/f(this,A),n)},pe=new WeakSet,Ue=function(e,n){return v(f(e,p)!==F,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),_(this,J,Y).call(this,e),_(this,U,D).call(this,f(this,p)*f(this,A)/f(e,p),n)};const Tt=["wei","kwei","mwei","gwei","szabo","finney","ether"];function It(t,e){let n=18;if(typeof e=="string"){const r=Tt.indexOf(e);S(r>=0,"invalid unit","unit",e),n=3*r}else e!=null&&(n=Se(e,"unit"));return Ee.fromValue(t,n,{decimals:n}).toString()}function $e(t){return It(t,18)}function zt(t){return`${t.getUTCFullYear()}-${t.getUTCMonth()+1}-${t.getUTCDate()}`}function At(t){t=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())),t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));let e=new Date(Date.UTC(t.getUTCFullYear(),0,1)),n=Math.ceil(((t-e)/864e5+1)/7);return t.getUTCFullYear()+"W"+n}function Nt(t){return console.log(t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)),t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)}async function Pe(t,e,n,r,i,d,h,x,E,T,I){for(let b=0;b<h.length;b++){if(h[b].balanceChanges[0].from.toLowerCase()===t.toLowerCase()){const z=new Date(Date.parse(h[b].receivedAt)),C=h[b].data.contractAddress,$=(parseInt(h[b].fee,16)/10**18).toFixed(5);e+=parseFloat($),n.add(C),r.add(zt(z)),i.add(At(z)),d.add(Nt(z))}if(h[b].isL1Originated===!0){x++;const z=$e(h[b].data.value);E+=parseFloat(z)}else if(h[b].data.contractAddress==="0x000000000000000000000000000000000000800a"){T++;const z=$e(h[b].data.value);I+=parseFloat(z)}}return[e,n,r,i,d,x,E,T,I]}async function me(t){try{let e=new Set,n=new Set,r=new Set,i=new Set,d,h,x,E,T=0,I=0,b=0,z=0,C=0,$=0,re=null,se=null;const Te="https://zksync2-mainnet-explorer.zksync.io/transactions?limit=100&direction=older&accountAddress="+t,G=await q.get(Te),Ie=G.data.total;if([T,e,n,r,i,I,b,z,C]=await Pe(t,T,e,n,r,i,G.data.list,I,b,z,C),Ie>100)for(re=G.data.list[0].blockNumber,se=G.data.list[0].indexInBlock;;){let xe=`https://zksync2-mainnet-explorer.zksync.io/transactions?limit=100&direction=older&accountAddress=${t}`;re!==void 0&&se!==void 0&&$!==0&&(xe+=`&fromBlockNumber=${re}&fromTxIndex=${se}&offset=${$}`);const ke=await q.get(xe),_e=ke.data.list.length;if([T,e,n,r,i,I,b,z,C]=await Pe(t,T,e,n,r,i,ke.data.list,I,b,z,C),_e===100)$+=_e;else break}return d=n.size,h=r.size,x=i.size,E=e.size,{totalFee:T.toFixed(4),contractActivity:E,dayActivity:d,weekActivity:h,monthActivity:x,l1Tol2Times:I,l1Tol2Amount:b.toFixed(3),l2Tol1Times:z,l2Tol1Amount:C.toFixed(3)}}catch(e){return console.log(e),{totalFee:"Error",contractActivity:"Error",dayActivity:"Error",weekActivity:"Error",monthActivity:"Error",l1Tol2Times:"Error",l1Tol2Amount:"Error",l2Tol1Times:"Error",l2Tol1Amount:"Error"}}}async function fe(t){const e="https://zksync2-mainnet-explorer.zksync.io/transactions?limit=5&direction=older&accountAddress="+t;try{const n=await q.get(e);if(n.data.total===0)return{zkSyncLastTx:"无交易"};{const r=n.data.list[0].receivedAt,i=new Date(r),d=8,h=new Date(i.getTime()+d*3600*1e3),x=new Date,T=new Date(x.getTime()+d*3600*1e3)-h,I=Math.floor(T/(1e3*60*60)),b=Math.floor(I/24);return b>0?{zkSyncLastTx:`${b} 天前`}:I>0?{zkSyncLastTx:`${I} 小时前`}:{zkSyncLastTx:"刚刚"}}}catch(n){return console.error(n),{zkSyncLastTx:"Error"}}}const{Content:vt}=dt,{TextArea:Et}=we;function Mt(){const[t,e]=M.useState([]),[n,r]=M.useState(!1),[i]=H.useForm(),[d,h]=M.useState([]),[x]=H.useForm(),[E,T]=M.useState(!1),[I,b]=M.useState(!1),[z,C]=M.useState(!1),$=async()=>{try{const s=await x.validateFields();if(s.address.length!==42){V.error({message:"错误",description:"请输入正确的地址"},2);return}T(!1);const m=t.findIndex(a=>a.address===s.address);if(m!==-1){e(t.map((o,g)=>g===m?{...o,name:s.name}:o));const a=[...t];ce(s.address).then(({balance2:o,tx2:g,usdcBalance:l})=>{a[m]={...a[m],zks2_balance:o,zks2_tx_amount:g,zks2_usdcBalance:l},e(a),localStorage.setItem("addresses",JSON.stringify(t))}),fe(s.address).then(({zkSyncLastTx:o})=>{a[m]={...a[m],zks2_last_tx:o},e(a),localStorage.setItem("addresses",JSON.stringify(t))}),de(s.address).then(({balance1:o,tx1:g})=>{a[m]={...a[m],zks1_balance:o,zks1_tx_amount:g},e(a),localStorage.setItem("addresses",JSON.stringify(t))}),le(s.address,"ethereum").then(o=>{a[m]={...a[m],eth_balance:o},e(a),localStorage.setItem("addresses",JSON.stringify(t))}),oe(s.address,"ethereum").then(o=>{a[m]={...a[m],eth_tx_amount:o},e(a),localStorage.setItem("addresses",JSON.stringify(t))}),me(s.address).then(({totalFee:o,contractActivity:g,dayActivity:l,weekActivity:y,monthActivity:c,l1Tol2Times:k,l1Tol2Amount:N,l2Tol1Times:j,l2Tol1Amount:L})=>{a[m]={...a[m],totalFee:o,contractActivity:g,dayActivity:l,weekActivity:y,monthActivity:c,l1Tol2Times:k,l1Tol2Amount:N,l2Tol1Times:j,l2Tol1Amount:L},e(a),localStorage.setItem("addresses",JSON.stringify(t))})}else{const a={key:t.length.toString(),name:s.name,address:s.address,eth_balance:null,eth_tx_amount:null,zks2_balance:null,zks2_tx_amount:null,zks2_usdcBalance:null,zks2_last_tx:null,zks1_balance:null,zks1_tx_amount:null,dayActivity:null,weekActivity:null,monthActivity:null,l1Tol2Times:null,l1Tol2Amount:null,l2Tol1Times:null,l2Tol1Amount:null,contractActivity:null,totalFee:null},o=[...t,a];e(o),ce(s.address).then(({balance2:g,tx2:l,usdcBalance:y})=>{a.zks2_balance=g,a.zks2_tx_amount=l,a.zks2_usdcBalance=y,e([...o]),localStorage.setItem("addresses",JSON.stringify(o))}),fe(s.address).then(({zkSyncLastTx:g})=>{a.zks2_last_tx=g,e([...o]),localStorage.setItem("addresses",JSON.stringify(o))}),de(s.address).then(({balance1:g,tx1:l})=>{a.zks1_balance=g,a.zks1_tx_amount=l,e([...o]),localStorage.setItem("addresses",JSON.stringify(o))}),le(s.address,"ethereum").then(g=>{a.eth_balance=g,e([...o]),localStorage.setItem("addresses",JSON.stringify(o))}),oe(s.address,"ethereum").then(g=>{a.eth_tx_amount=g,e([...o]),localStorage.setItem("addresses",JSON.stringify(o))}),me(s.address).then(({totalFee:g,contractActivity:l,dayActivity:y,weekActivity:c,monthActivity:k,l1Tol2Times:N,l1Tol2Amount:j,l2Tol1Times:L,l2Tol1Amount:P})=>{a.totalFee=g,a.contractActivity=l,a.dayActivity=y,a.weekActivity=c,a.monthActivity=k,a.l1Tol2Times=N,a.l1Tol2Amount=j,a.l2Tol1Times=L,a.l2Tol1Amount=P,e([...o]),localStorage.setItem("addresses",JSON.stringify(o))})}}catch(s){V.error({message:"错误",description:s.message},2)}finally{x.resetFields()}},re=async()=>{if(!d.length){V.error({message:"错误",description:"请先选择要刷新的地址"},2);return}b(!0);try{let m=0,a=[];const o=[...t],g=()=>{if(a.length===0||m>=10)return;const l=a.shift();m+=1,l().finally(()=>{m-=1,g()})};for(let l of d){const y=o.findIndex(c=>c.key===l);if(y!==-1){const c=o[y];c.eth_balance=null,c.eth_tx_amount=null,c.zks1_balance=null,c.zks1_tx_amount=null,c.zks2_balance=null,c.zks2_tx_amount=null,c.zks2_usdcBalance=null,c.zks2_last_tx=null,c.dayActivity=null,c.weekActivity=null,c.monthActivity=null,c.l1Tol2Times=null,c.l1Tol2Amount=null,c.l2Tol1Times=null,c.l2Tol1Amount=null,c.contractActivity=null,c.totalFee=null,e([...o]),a.push(()=>ce(c.address).then(({balance2:k,tx2:N,usdcBalance:j})=>{c.zks2_balance=k,c.zks2_tx_amount=N,c.zks2_usdcBalance=j,e([...o]),localStorage.setItem("addresses",JSON.stringify(t))})),a.push(()=>fe(c.address).then(({zkSyncLastTx:k})=>{c.zks2_last_tx=k,e([...o]),localStorage.setItem("addresses",JSON.stringify(t))})),a.push(()=>de(c.address).then(({balance1:k,tx1:N})=>{c.zks1_balance=k,c.zks1_tx_amount=N,e([...o]),localStorage.setItem("addresses",JSON.stringify(t))})),a.push(()=>le(c.address,"ethereum").then(k=>{c.eth_balance=k,e([...o]),localStorage.setItem("addresses",JSON.stringify(t))})),a.push(()=>oe(c.address,"ethereum").then(k=>{c.eth_tx_amount=k,e([...o]),localStorage.setItem("addresses",JSON.stringify(t))})),a.push(()=>me(c.address).then(({totalFee:k,contractActivity:N,dayActivity:j,weekActivity:L,monthActivity:P,l1Tol2Times:ie,l1Tol2Amount:ae,l2Tol1Times:Qe,l2Tol1Amount:We})=>{c.totalFee=k,c.contractActivity=N,c.dayActivity=j,c.weekActivity=L,c.monthActivity=P,c.l1Tol2Times=ie,c.l1Tol2Amount=ae,c.l2Tol1Times=Qe,c.l2Tol1Amount=We,e([...o]),localStorage.setItem("addresses",JSON.stringify(t))})),g()}}for(;m>0||a.length>0;)await new Promise(l=>setTimeout(l,100))}catch(s){V.error({message:"错误",description:s.message},2)}finally{b(!1),h([])}},se=async()=>{try{const m=(await i.validateFields()).addresses.split(`
`),a=[...t];for(let o of m){if(o=o.trim(),o.length!==42){V.error({message:"错误",description:"请输入正确的地址"});continue}const g=a.findIndex(l=>l.address===o);if(g!==-1){const l=[...a];ce(o).then(({balance2:y,tx2:c,usdcBalance:k})=>{l[g]={...l[g],zks2_balance:y,zks2_tx_amount:c,zks2_usdcBalance:k},e(l),localStorage.setItem("addresses",JSON.stringify(l))}),fe(o).then(({zkSyncLastTx:y})=>{l[g]={...l[g],zks2_last_tx:y},e(l),localStorage.setItem("addresses",JSON.stringify(l))}),de(o).then(({balance1:y,tx1:c})=>{l[g]={...l[g],zks1_balance:y,zks1_tx_amount:c},e(l),localStorage.setItem("addresses",JSON.stringify(l))}),le(o,"ethereum").then(y=>{l[g]={...l[g],eth_balance:y},e(l),localStorage.setItem("addresses",JSON.stringify(l))}),oe(o,"ethereum").then(y=>{l[g]={...l[g],eth_tx_amount:y},e(l),localStorage.setItem("addresses",JSON.stringify(l))}),me(o).then(({totalFee:y,contractActivity:c,dayActivity:k,weekActivity:N,monthActivity:j,l1Tol2Times:L,l1Tol2Amount:P,l2Tol1Times:ie,l2Tol1Amount:ae})=>{l[g]={...l[g],totalFee:y,contractActivity:c,dayActivity:k,weekActivity:N,monthActivity:j,l1Tol2Times:L,l1Tol2Amount:P,l2Tol1Times:ie,l2Tol1Amount:ae},e(l),localStorage.setItem("addresses",JSON.stringify(l))})}else{const l={key:a.length.toString(),address:o,eth_balance:null,eth_tx_amount:null,zks2_balance:null,zks2_tx_amount:null,zks2_usdcBalance:null,zks1_balance:null,zks1_tx_amount:null,zks2_last_tx:null,dayActivity:null,weekActivity:null,monthActivity:null,l1Tol2Times:null,l1Tol2Amount:null,l2Tol1Times:null,l2Tol1Amount:null,contractActivity:null,totalFee:null};a.push(l),e(a),ce(o).then(({balance2:y,tx2:c,usdcBalance:k})=>{l.zks2_balance=y,l.zks2_tx_amount=c,l.zks2_usdcBalance=k,e([...a]),localStorage.setItem("addresses",JSON.stringify(a))}),fe(o).then(({zkSyncLastTx:y})=>{l.zks2_last_tx=y,e([...a]),localStorage.setItem("addresses",JSON.stringify(a))}),de(o).then(({balance1:y,tx1:c})=>{l.zks1_balance=y,l.zks1_tx_amount=c,e([...a]),localStorage.setItem("addresses",JSON.stringify(a))}),le(o,"ethereum").then(y=>{l.eth_balance=y,e([...a]),localStorage.setItem("addresses",JSON.stringify(a))}),oe(o,"ethereum").then(y=>{l.eth_tx_amount=y,e([...a]),localStorage.setItem("addresses",JSON.stringify(a))}),me(o).then(({totalFee:y,contractActivity:c,dayActivity:k,weekActivity:N,monthActivity:j,l1Tol2Times:L,l1Tol2Amount:P,l2Tol1Times:ie,l2Tol1Amount:ae})=>{l.totalFee=y,l.contractActivity=c,l.dayActivity=k,l.weekActivity=N,l.monthActivity=j,l.l1Tol2Times=L,l.l1Tol2Amount=P,l.l2Tol1Times=ie,l.l2Tol1Amount=ae,e([...a]),localStorage.setItem("addresses",JSON.stringify(a))})}}r(!1)}catch(s){V.error({message:"错误",description:s.message})}finally{i.resetFields(),h([])}},Te=()=>{T(!0)},G=()=>{r(!0)},Ie=()=>{it(t,"walletInfo")};M.useEffect(()=>{C(!0);const s=localStorage.getItem("addresses");setTimeout(()=>{C(!1)},500),s&&e(JSON.parse(s))},[]);const xe=()=>{T(!1)},ke=s=>{e(t.filter(m=>m.key!==s)),localStorage.setItem("addresses",JSON.stringify(t.filter(m=>m.key!==s)))},_e=()=>{if(!d.length){V.error({message:"错误",description:"请先选择要删除的地址"},2);return}e(t.filter(s=>!d.includes(s.key))),localStorage.setItem("addresses",JSON.stringify(t.filter(s=>!d.includes(s.key)))),h([])},Ke={selectedRowKeys:d,onChange:s=>{h(s)}},Ye=()=>{r(!1)},[qe,Oe]=M.useState(null),Ge=[{title:"#",key:"index",align:"center",render:(s,m,a)=>a+1},{title:"备注",dataIndex:"name",key:"name",align:"center",render:(s,m)=>m.key===qe?u.jsx(we,{placeholder:"请输入备注",defaultValue:s,onPressEnter:o=>{m.name=o.target.value,e([...t]),localStorage.setItem("addresses",JSON.stringify(t)),Oe(null)}}):u.jsxs(u.Fragment,{children:[u.jsx(lt,{color:"blue",children:s}),u.jsx(Z,{shape:"circle",icon:u.jsx(ct,{}),size:"small",onClick:()=>Oe(m.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center"},{title:"ETH",key:"eth_group",className:"zks_eth",children:[{title:"ETH",dataIndex:"eth_balance",key:"eth_balance",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"Tx",dataIndex:"eth_tx_amount",key:"eth_tx_amount",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s}]},{title:"zkSyncLite",key:"zks_lite_group",className:"zks_lite",children:[{title:"ETH",dataIndex:"zks1_balance",key:"zks1_balance",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"Tx",dataIndex:"zks1_tx_amount",key:"zks1_tx_amount",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s}]},{title:"zkSyncEra",key:"zks_era_group",className:"zks_era",children:[{title:"ETH",dataIndex:"zks2_balance",key:"zks2_balance",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"USDC",dataIndex:"zks2_usdcBalance",key:"zks2_usdcBalance",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"Tx",dataIndex:"zks2_tx_amount",key:"zks2_tx_amount",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"最后交易",dataIndex:"zks2_last_tx",key:"zks2_last_tx",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):u.jsx("a",{href:"https://explorer.zksync.io/address/"+m.address,target:"_blank",children:s})},{title:"官方桥跨链Tx数",key:"cross_chain_tx_count_group",children:[{title:"L1->L2",dataIndex:"l1Tol2Times",key:"l1Tol2Times",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"L2->L1",dataIndex:"l2Tol1Times",key:"l2Tol1Times",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s}]},{title:"官方桥跨链金额(ETH)",key:"cross_chain_amount_group",children:[{title:"L1->L2",dataIndex:"l1Tol2Amount",key:"l1Tol2Amount",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"L2->L1",dataIndex:"l2Tol1Amount",key:"l2Tol1Amount",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s}]},{title:"活跃统计",key:"activity_stats_group",children:[{title:"日",dataIndex:"dayActivity",key:"dayActivity",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"周",dataIndex:"weekActivity",key:"weekActivity",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"月",dataIndex:"monthActivity",key:"monthActivity",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"不同合约",dataIndex:"contractActivity",key:"contractActivity",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s},{title:"Fee",dataIndex:"totalFee",key:"totalFee",align:"center",render:(s,m)=>s===null?u.jsx(w,{}):s}]}]},{title:"操作",key:"action",align:"center",render:(s,m)=>u.jsx(ut,{size:"small",children:u.jsx(De,{title:"确认删除？",onConfirm:()=>ke(m.key),children:u.jsx(Z,{icon:u.jsx(Je,{})})})})}];return u.jsx("div",{children:u.jsxs(vt,{children:[u.jsx(Le,{title:"批量添加地址",open:n,onOk:se,onCancel:Ye,okButtonProps:{loading:I},okText:"添加地址",cancelText:"取消",children:u.jsx(H,{form:i,layout:"vertical",children:u.jsx(H.Item,{label:"地址",name:"addresses",rules:[{required:!0}],children:u.jsx(Et,{placeholder:"请输入地址，每行一个",style:{width:"500px",height:"200px"}})})})}),u.jsx(Le,{title:"添加地址",open:E,onOk:$,onCancel:xe,okButtonProps:{loading:I},okText:"添加地址",cancelText:"取消",children:u.jsxs(H,{form:x,layout:"vertical",children:[u.jsx(H.Item,{label:"地址",name:"address",rules:[{required:!0}],children:u.jsx(we,{placeholder:"请输入地址"})}),u.jsx(H.Item,{label:"备注",name:"name",children:u.jsx(we,{placeholder:"请输入备注"})})]})}),u.jsx(w,{spinning:z,children:u.jsx(at,{rowSelection:Ke,dataSource:t,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:Ge})}),u.jsx(tt,{children:u.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",gap:"10px"},children:[u.jsx(Z,{type:"primary",onClick:Te,size:"large",style:{width:"20%"},icon:u.jsx(ot,{}),children:"添加地址"}),u.jsx(Z,{type:"primary",onClick:G,size:"large",style:{width:"20%"},icon:u.jsx(nt,{}),children:"批量添加地址"}),u.jsx(Z,{type:"primary",onClick:re,loading:I,size:"large",style:{width:"20%"},icon:u.jsx(rt,{}),children:"刷新选中地址"}),u.jsx(De,{title:"确认删除"+d.length+"个地址？",onConfirm:_e,children:u.jsx(Z,{type:"primary",danger:!0,size:"large",style:{width:"20%"},icon:u.jsx(Je,{}),children:"删除选中地址"})}),u.jsx(Z,{type:"primary",icon:u.jsx(st,{}),size:"large",style:{width:"8%"},onClick:Ie})]})})]})})}export{Mt as default};
