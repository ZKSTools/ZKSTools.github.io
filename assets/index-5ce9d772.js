import{r as m,j as e}from"./index-2afb3425.js";import{U as oe,S as ce,D as de,e as me,n as E}from"./save_excel-1f716160.js";import{a as he,C as pe}from"./axios-5f53dd84.js";import{F as o,a as D,b as Z,T as xe,P as Y,D as U}from"./index-2debab55.js";import{I as u,S as f,P as ue}from"./index-a8c266b4.js";import{S as R}from"./index-273f5087.js";import{A as ye,_ as H,B as c,E as fe}from"./EditOutlined-aa31d998.js";import{L as ge}from"./index-1dc70f22.js";var Ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm-60 508h-80V292h80v440zm644-436h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8zm-60 364h-80V364h80v296zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8zm-60 145a3 3 0 01-3 3h-74a3 3 0 01-3-3v-74a3 3 0 013-3h74a3 3 0 013 3v74z"}}]},name:"sliders",theme:"outlined"};const je=Ie;var Q=function(i,T){return m.createElement(ye,H(H({},i),{},{ref:T,icon:je}))};Q.displayName="SlidersOutlined";const ke=m.forwardRef(Q),z={bsc:"https://api.bscscan.com",ftm:"https://api.ftmscan.com",metis:"https://andromeda-explorer.metis.io",avax:"https://api.snowtrace.io",matic:"https://api.polygonscan.com",arb:"https://api.arbiscan.io",op:"https://api-optimistic.etherscan.io",eth:"https://api.etherscan.io"},Se={bsc:["IHA6XUNGC9A8CS1EVB4ZKMMNCEVWQYWGNF","35GX1RBQBNKDSS2QFF8YZ9IJ4MUPD8FBV4","KD21NU93H2696XZGUE6IIZX291V2291WBZ"],ftm:["7NS7WM87WNYTDWXFRUP1QFVEGEMEWWTT1R","JUEKUR5XBG5Z4WQUV71IZHJCPGVWADGHY3","YCTIQFTS8AXJQVE84CYY2FSGU9JYHWTEMN"],metis:[null],avax:["XZVMR1A53KHXIEZV2X5QYZ2GSYFDDHUGVS","PX4ZC7BFCMF51E7DC7JKDWERHYCW8JNPM7","B4XCRBZYZX26NGZG1XJB7UIDGDWF8TYSHT"],matic:["5N7B38PZTENUK44XDF3WUPFFN68ICZ87Y3","SIKU51V7YGAYUZF8HJ7R5FE6WHBP4Z6VEI","SMIPK99XJR9IXRSSCDHWJB8CT4YKTKJC4E"],arb:["FTAT7G2F45P8VNVQG66SGF7T4TS6R2QFGY","MXKDX8ZX8H5P34WFXFZF1YEPA6X6DDIV5R","WBCVFF7GVC4XJZFMS3EZJVVPMAH14IT7SU"],op:["C8JSVBMBI2NBBYWUJ99ZR2QCQ8GB33NFGB"],eth:["FPFT5EGK6F4JS97IA4E8SI24UN559W53VI","XHSCQN5JZHT4WY1JCATJTN4IDGX2PU6WHH","ADX2IDIUKD57WAM1GN6YA9E9Y9R3W5CXMC"]};let K={};async function P(n,i){console.log(i);const T=Object.keys(z).map(async d=>{try{const h=z[d];let p;if(i&&d in i&&i[d])p=i[d];else{const y=Se[d],v=Math.floor(Math.random()*y.length);p=y[v]}let C=0;n=n.toLowerCase();let M;p===null?M=`${h}/api?module=account&action=txlist&address=${n}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc`:M=`${h}/api?module=account&action=txlist&address=${n}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=${p}`;const F=await he.get(M);for(let y=0;y<F.data.result.length;y++){const v=F.data.result[y].input.slice(0,10);F.data.result[y].from===n&&F.data.result[y].txreceipt_status==="1"&&["0x9fbf10fc","0x1114cd2a","0xc858f5f9","0x76a9099a","0x2e15238c","0xae30f6ee","0xc45dec27","0x2cdf0b95","0x879762e2","0x656f3d64","0x51905636","0xad660825","0xfe359a0d","0xca23bb4c","0x00000005"].includes(v)&&(C+=1)}return{net:d,tx:C}}catch(h){return console.log(h.message),{net:d,tx:"error"}}}),V=await Promise.all(T);let w=0;return V.forEach(({net:d,tx:h})=>{h!=="error"&&(w+=h),K[d]=h}),K.total=w,K}const{Content:be}=ge,{TextArea:Ce}=u,Oe=()=>{const[n,i]=m.useState([]),[T,V]=m.useState(!1),[w]=o.useForm(),[d]=o.useForm(),[h]=o.useForm(),[p,C]=m.useState([]),[M,F]=m.useState(!1),[y,v]=m.useState(!1),[X,N]=m.useState(!1),[L,W]=m.useState(!1),[O,_]=m.useState(localStorage.getItem("l0_api_key")),$=()=>{me(n,"LayerZeroInfo")},q=()=>{if(!p.length){E.error({message:"错误",description:"请先选择要删除的地址"},2);return}i(n.filter(t=>!p.includes(t.key))),localStorage.setItem("l0_addresses",JSON.stringify(n.filter(t=>!p.includes(t.key)))),C([])},ee=t=>{i(n.filter(l=>l.key!==t)),localStorage.setItem("l0_addresses",JSON.stringify(n.filter(l=>l.key!==t)))},te=async()=>{try{const t=await w.validateFields();if(t.address.startsWith("0x")||(t.address="0x"+t.address),t.address.length!==42){E.error({message:"错误",description:"请输入正确的EVM地址"},2);return}V(!1);const l=n.findIndex(a=>a.address===t.address);if(l!==-1){i(n.map((s,x)=>x===l?{...s,name:t.name}:s));const a=[...n];P(t.address,O).then(({arb:s,avax:x,bsc:r,eth:g,ftm:I,matic:j,metis:k,op:S,total:b})=>{a[l]={...a[l],arb:s,avax:x,bsc:r,eth:g,ftm:I,matic:j,metis:k,op:S,total:b},i(a),localStorage.setItem("l0_addresses",JSON.stringify(n))})}else{const a={key:n.length.toString(),name:t.name,address:t.address,arb:null,avax:null,bsc:null,eth:null,ftm:null,matic:null,metis:null,op:null,total:null},s=[...n,a];i(s),P(t.address,O).then(({arb:x,avax:r,bsc:g,eth:I,ftm:j,matic:k,metis:S,op:b,total:A})=>{a.arb=x,a.avax=r,a.bsc=g,a.eth=I,a.ftm=j,a.matic=k,a.metis=S,a.op=b,a.total=A,i([...s]),localStorage.setItem("l0_addresses",JSON.stringify(s))})}}catch(t){E.error({message:"错误",description:t.message},2)}finally{w.resetFields()}},se=async()=>{if(!p.length){E.error({message:"错误",description:"请先选择要刷新的地址"},2);return}F(!0);try{const t=[...n];for(let l of p){const a=t.findIndex(s=>s.key===l);if(a!==-1){const s=t[a];s.eth=null,s.bsc=null,s.ftm=null,s.matic=null,s.metis=null,s.op=null,s.arb=null,s.avax=null,s.total=null,i([...t]);const{arb:x,avax:r,bsc:g,eth:I,ftm:j,matic:k,metis:S,op:b,total:A}=await P(s.address,O);s.arb=x,s.avax=r,s.bsc=g,s.eth=I,s.ftm=j,s.matic=k,s.metis=S,s.op=b,s.total=A,i([...t]),localStorage.setItem("l0_addresses",JSON.stringify(n))}}}catch(t){E.error({message:"错误",description:t.message},2)}finally{F(!1),C([])}},ae=async()=>{try{const l=(await d.validateFields()).addresses.split(`
`),a=[...n];for(let s of l){if(s.startsWith("0x")||(s="0x"+s),s=s.trim(),s.length!==42){E.error({message:"错误",description:"请输入正确的地址"});continue}const x=a.findIndex(r=>r.address===s);if(x!==-1){const r=[...a],{arb:g,avax:I,bsc:j,eth:k,ftm:S,matic:b,metis:A,op:J,total:B}=await P(s,O);r[x]={...r[x],arb:g,avax:I,bsc:j,eth:k,ftm:S,matic:b,metis:A,op:J,total:B},i(r),localStorage.setItem("l0_addresses",JSON.stringify(r))}else{const r={key:a.length.toString(),address:s,arb:null,avax:null,bsc:null,eth:null,ftm:null,matic:null,metis:null,op:null,total:null};a.push(r),i(a);const{arb:g,avax:I,bsc:j,eth:k,ftm:S,matic:b,metis:A,op:J,total:B}=await P(s,O);r.arb=g,r.avax=I,r.bsc=j,r.eth=k,r.ftm=S,r.matic=b,r.metis=A,r.op=J,r.total=B,i([...a]),localStorage.setItem("l0_addresses",JSON.stringify(a))}}v(!1)}catch(t){E.error({message:"错误",description:t.message})}finally{d.resetFields(),C([])}},[le,G]=m.useState(null),ne=[{title:"#",key:"index",render:(t,l,a)=>a+1,align:"center"},{title:"备注",dataIndex:"name",key:"name",align:"center",render:(t,l)=>l.key===le?e.jsx(u,{placeholder:"请输入备注",defaultValue:t,onPressEnter:s=>{l.name=s.target.value,i([...n]),localStorage.setItem("l0_addresses",JSON.stringify(n)),G(null)}}):e.jsxs(e.Fragment,{children:[e.jsx(Z,{color:"blue",children:t}),e.jsx(c,{shape:"circle",icon:e.jsx(fe,{}),size:"small",onClick:()=>G(l.key)})]})},{title:"地址",dataIndex:"address",key:"address",align:"center"},{title:"ETH",dataIndex:"eth",key:"eth",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"MATIC",dataIndex:"matic",key:"matic",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"BSC",dataIndex:"bsc",key:"bsc",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"ARB",dataIndex:"arb",key:"arb",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"OP",dataIndex:"op",key:"op",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"AVAX",dataIndex:"avax",key:"avax",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"FTM",dataIndex:"ftm",key:"ftm",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"METIS",dataIndex:"metis",key:"metis",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"总Tx",dataIndex:"total",key:"total",render:(t,l)=>t===null?e.jsx(f,{}):t,align:"center"},{title:"操作",key:"action",render:(t,l)=>e.jsx(R,{size:"small",children:e.jsx(Y,{title:"确定删除吗？",onConfirm:()=>ee(l.key),children:e.jsx(c,{icon:e.jsx(U,{})})})}),align:"center"}];m.useEffect(()=>{W(!0);const t=localStorage.getItem("l0_addresses");setTimeout(()=>{W(!1)},500),t&&i(JSON.parse(t))},[]);const re=()=>{localStorage.setItem("l0_api_key",JSON.stringify(h.getFieldsValue())),N(!1),_(JSON.parse(localStorage.getItem("l0_api_key")))};m.useEffect(()=>{const t=localStorage.getItem("l0_api_key");t&&(_(JSON.parse(t)),h.setFieldsValue(JSON.parse(t)))},[]);const ie={selectedRowKeys:p,onChange:t=>{C(t)}};return e.jsx("div",{children:e.jsxs(be,{children:[e.jsx(D,{title:"批量添加地址",open:y,onOk:ae,onCancel:()=>{v(!1),d.resetFields()},okText:"添加地址",cancelText:"取消",children:e.jsx(o,{form:d,layout:"vertical",children:e.jsx(o.Item,{label:"地址",name:"addresses",rules:[{required:!0}],children:e.jsx(Ce,{placeholder:"请输入地址，每行一个",style:{width:"500px",height:"200px"}})})})}),e.jsx(D,{title:"添加地址",open:T,onOk:te,onCancel:()=>V(!1),okText:"添加地址",cancelText:"取消",children:e.jsxs(o,{form:w,layout:"vertical",children:[e.jsx(o.Item,{label:"地址",name:"address",rules:[{required:!0}],children:e.jsx(u,{placeholder:"请输入地址"})}),e.jsx(o.Item,{label:"备注",name:"name",rules:[{required:!0}],children:e.jsx(u,{placeholder:"请输入备注"})})]})}),e.jsx(D,{title:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"更换API Key"}),e.jsx("div",{style:{fontSize:"12px",color:"#888"},children:e.jsxs(R,{children:[e.jsx(c,{type:"link",onClick:()=>window.open("https://etherscan.io/myapikey","_blank"),children:"Eth"}),e.jsx(c,{type:"link",onClick:()=>window.open("https://polygonscan.com/myapikey","_blank"),children:"Matic"}),e.jsx(c,{type:"link",onClick:()=>window.open("https://bscscan.com/myapikey","_blank"),children:"Bsc"}),e.jsx(c,{type:"link",onClick:()=>window.open("https://arbiscan.io/myapikey","_blank"),children:"Arb"}),e.jsx(c,{type:"link",onClick:()=>window.open("https://optimistic.etherscan.io/myapikey","_blank"),children:"Op"}),e.jsx(c,{type:"link",onClick:()=>window.open("https://snowtrace.io/myapikey","_blank"),children:"Avax"}),e.jsx(c,{type:"link",onClick:()=>window.open("https://ftmscan.com/myapikey","_blank"),children:"Ftm"})]})})]}),open:X,onOk:re,onCancel:()=>N(!1),okText:"确定",cancelText:"取消",children:e.jsxs(o,{form:h,layout:"horizontal",children:[e.jsx(o.Item,{label:"Eth",name:"eth",children:e.jsx(u,{placeholder:"请输入Etherscan API Key"})}),e.jsx(o.Item,{label:"Polygon",name:"matic",children:e.jsx(u,{placeholder:"请输入Polygonscan API Key"})}),e.jsx(o.Item,{label:"Bsc",name:"bsc",children:e.jsx(u,{placeholder:"请输入Bscscan API Key"})}),e.jsx(o.Item,{label:"Arb",name:"arb",children:e.jsx(u,{placeholder:"请输入Arbitrumscan API Key"})}),e.jsx(o.Item,{label:"Op",name:"op",children:e.jsx(u,{placeholder:"请输入Optimismscan API Key"})}),e.jsx(o.Item,{label:"Avax",name:"avax",children:e.jsx(u,{placeholder:"请输入Avalanche API Key"})}),e.jsx(o.Item,{label:"Ftm",name:"ftm",children:e.jsx(u,{placeholder:"请输入Fantomscan API Key"})})]})}),e.jsx(Z,{color:"blue",style:{marginBottom:"10px"},children:"获取数据使用的是作者的区块链浏览器API Key，用的人多可能会有卡顿报错的情况，如果有需要请自行更换API Key"}),e.jsx(f,{spinning:L,children:e.jsx(xe,{columns:ne,dataSource:n,rowSelection:ie,pagination:!1,bordered:!0,size:"small"})}),e.jsx(pe,{children:e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[e.jsx(c,{type:"primary",onClick:()=>{V(!0)},size:"large",style:{width:"15%"},icon:e.jsx(ue,{}),children:"添加地址"}),e.jsx(c,{type:"primary",onClick:()=>{v(!0)},size:"large",style:{width:"15%"},icon:e.jsx(oe,{}),children:"批量添加地址"}),e.jsx(c,{type:"primary",onClick:se,loading:M,size:"large",style:{width:"15%"},icon:e.jsx(ce,{}),children:"刷新选中地址"}),e.jsx(Y,{title:"确认删除"+p.length+"个地址？",onConfirm:q,children:e.jsx(c,{type:"primary",danger:!0,size:"large",style:{width:"15%"},icon:e.jsx(U,{}),children:"删除选中地址"})}),e.jsx(c,{type:"primary",onClick:()=>{N(!0)},size:"large",style:{width:"15%"},icon:e.jsx(ke,{}),children:"更换API KEY"}),e.jsx(c,{type:"primary",icon:e.jsx(de,{}),size:"large",style:{width:"8%"},onClick:$})]})})]})})};export{Oe as default};