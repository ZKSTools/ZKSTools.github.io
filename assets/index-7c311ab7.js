import{r as e,j as s}from"./index-afe07c5a.js";import{C as L,a as re}from"./axios-978d9c6f.js";import{v as ae,y as se,n as ne,z as A,x as oe,S as ie,R as ce,C as le,t as de,I as ge}from"./index-4613b112.js";import{g as me,m as he,r as pe,s as ue,C as H,c as P,aQ as fe,ag as xe,b as Se}from"./EditOutlined-de6b3128.js";import{T as ve}from"./index-26b60554.js";const T=e.createContext("default"),G=t=>{let{children:i,size:n}=t;const r=e.useContext(T);return e.createElement(T.Provider,{value:n||r},i)},ye=t=>{const{antCls:i,componentCls:n,iconCls:r,avatarBg:o,avatarColor:j,avatarSizeBase:h,avatarSizeLG:v,avatarSizeSM:p,avatarFontSizeBase:S,avatarFontSizeLG:c,avatarFontSizeSM:b,borderRadius:C,borderRadiusLG:z,borderRadiusSM:a,lineWidth:d,lineType:E}=t,u=(l,f,y)=>({width:l,height:l,lineHeight:`${l-d*2}px`,borderRadius:"50%",[`&${n}-square`]:{borderRadius:y},[`${n}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${n}-icon`]:{fontSize:f,[`> ${r}`]:{margin:0}}});return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},pe(t)),{position:"relative",display:"inline-block",overflow:"hidden",color:j,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:o,border:`${d}px ${E} transparent`,["&-image"]:{background:"transparent"},[`${i}-image-img`]:{display:"block"}}),u(h,S,C)),{["&-lg"]:Object.assign({},u(v,c,z)),["&-sm"]:Object.assign({},u(p,b,a)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},be=t=>{const{componentCls:i,avatarGroupBorderColor:n,avatarGroupSpace:r}=t;return{[`${i}-group`]:{display:"inline-flex",[`${i}`]:{borderColor:n},["> *:not(:first-child)"]:{marginInlineStart:r}}}},F=me("Avatar",t=>{const{colorTextLightSolid:i,controlHeight:n,controlHeightLG:r,controlHeightSM:o,fontSize:j,fontSizeLG:h,fontSizeXL:v,fontSizeHeading3:p,marginXS:S,colorBorderBg:c,colorTextPlaceholder:b}=t,C=he(t,{avatarBg:b,avatarColor:i,avatarSizeBase:n,avatarSizeLG:r,avatarSizeSM:o,avatarFontSizeBase:Math.round((h+v)/2),avatarFontSizeLG:p,avatarFontSizeSM:j,avatarGroupSpace:-S,avatarGroupBorderColor:c});return[ye(C),be(C)]});var Ce=globalThis&&globalThis.__rest||function(t,i){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)i.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n};const je=(t,i)=>{const n=e.useContext(T),[r,o]=e.useState(1),[j,h]=e.useState(!1),[v,p]=e.useState(!0),S=e.useRef(null),c=e.useRef(null),b=ue(i,S),{getPrefixCls:C}=e.useContext(H),z=()=>{if(!c.current||!S.current)return;const m=c.current.offsetWidth,x=S.current.offsetWidth;if(m!==0&&x!==0){const{gap:O=4}=t;O*2<x&&o(x-O*2<m?(x-O*2)/m:1)}};e.useEffect(()=>{h(!0)},[]),e.useEffect(()=>{p(!0),o(1)},[t.src]),e.useEffect(()=>{z()},[t.gap]);const a=()=>{const{onError:m}=t;(m?m():void 0)!==!1&&p(!1)},{prefixCls:d,shape:E="circle",size:u="default",src:l,srcSet:f,icon:y,className:V,rootClassName:K,alt:X,draggable:q,children:B,crossOrigin:D}=t,w=Ce(t,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),g=u==="default"?n:u,Q=Object.keys(typeof g=="object"?g||{}:{}).some(m=>["xs","sm","md","lg","xl","xxl"].includes(m)),I=ae(Q),U=e.useMemo(()=>{if(typeof g!="object")return{};const m=se.find(O=>I[O]),x=g[m];return x?{width:x,height:x,lineHeight:`${x}px`,fontSize:y?x/2:18}:{}},[I,g]),$=C("avatar",d),[J,Y]=F($),Z=P({[`${$}-lg`]:g==="large",[`${$}-sm`]:g==="small"}),N=e.isValidElement(l),ee=P($,Z,{[`${$}-${E}`]:!!E,[`${$}-image`]:N||l&&v,[`${$}-icon`]:!!y},V,K,Y),te=typeof g=="number"?{width:g,height:g,lineHeight:`${g}px`,fontSize:y?g/2:18}:{};let R;if(typeof l=="string"&&v)R=e.createElement("img",{src:l,draggable:q,srcSet:f,onError:a,alt:X,crossOrigin:D});else if(N)R=l;else if(y)R=y;else if(j||r!==1){const m=`scale(${r}) translateX(-50%)`,x={msTransform:m,WebkitTransform:m,transform:m},O=typeof g=="number"?{lineHeight:`${g}px`}:{};R=e.createElement(fe,{onResize:z},e.createElement("span",{className:`${$}-string`,ref:c,style:Object.assign(Object.assign({},O),x)},B))}else R=e.createElement("span",{className:`${$}-string`,style:{opacity:0},ref:c},B);return delete w.onError,delete w.gap,J(e.createElement("span",Object.assign({},w,{style:Object.assign(Object.assign(Object.assign({},te),U),w.style),className:ee,ref:b}),R))},ze=e.forwardRef(je),_=ze,$e=t=>{const{getPrefixCls:i,direction:n}=e.useContext(H),{prefixCls:r,className:o,rootClassName:j,maxCount:h,maxStyle:v,size:p}=t,S=i("avatar",r),c=`${S}-group`,[b,C]=F(S),z=P(c,{[`${c}-rtl`]:n==="rtl"},o,j,C),{children:a,maxPopoverPlacement:d="top",maxPopoverTrigger:E="hover"}=t,u=xe(a).map((f,y)=>Se(f,{key:`avatar-key-${y}`})),l=u.length;if(h&&h<l){const f=u.slice(0,h),y=u.slice(h,l);return f.push(e.createElement(ne,{key:"avatar-popover-key",content:y,trigger:E,placement:d,overlayClassName:`${c}-popover`},e.createElement(_,{style:v},`+${l-h}`))),b(e.createElement(G,{size:p},e.createElement("div",{className:z,style:t.style},f)))}return b(e.createElement(G,{size:p},e.createElement("div",{className:z,style:t.style},u)))},Ee=$e,W=_;W.Group=Ee;const Oe=W,{Search:Re}=ge,{Meta:we}=L,{Text:k}=ve,{Option:M}=A,Ne=()=>{const[t,i]=e.useState([]),[n,r]=e.useState(""),[o,j]=e.useState(1),[h,v]=e.useState(!1),[p,S]=e.useState("Time"),c=(a,d,E)=>{v(!0);const u=encodeURIComponent(a),l=`https://api.mirrorbeats.xyz/mirror/Mirror/search?page=${d}&keyword=${u}&sort=${E}`;re.get(l).then(f=>{console.log(f),i(f.data.data)}).catch(f=>{console.log(f)}).finally(()=>{v(!1)})},b=a=>{const d=a||"空投";r(d),c(d,o,p)},C=a=>{j(a),c(n||"空投",a,p)},z=a=>{S(a),c(n,o,a)};return s.jsxs("div",{style:{padding:"20px"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[s.jsx(Re,{placeholder:"输入你想要查询的Mirror关键词",onSearch:b,enterButton:!0,style:{width:"70%",marginRight:"10px"}}),s.jsxs(A,{placeholder:"选择排序方式",defaultValue:p,style:{width:120},onChange:z,children:[s.jsx(M,{value:"Relevance",children:"Relevance"}),s.jsx(M,{value:"Time",children:"Time"})]}),s.jsx(oe,{current:o,onChange:C,total:50,style:{flex:"none"}})]}),h?s.jsx(ie,{size:"large",style:{display:"block",margin:"0 auto"}}):t.length>0?s.jsx(ce,{gutter:[16,16],children:t.map(a=>s.jsx(le,{span:6,children:s.jsx("a",{href:a.link,target:"_blank",rel:"noreferrer",children:s.jsx(L,{style:{borderRadius:"15px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",width:"100%",padding:"10px",marginBottom:"20px"},hoverable:!0,children:s.jsx(we,{title:s.jsx(k,{style:{fontWeight:"bold",fontSize:"16px",whiteSpace:"normal"},children:a.title}),description:s.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx(k,{strong:!0,children:"作者: "}),a.nickname,s.jsx("br",{}),s.jsx(k,{strong:!0,children:"创建时间: "}),new Date(a.creat_time*1e3).toLocaleString()]}),s.jsx("div",{style:{marginLeft:"10px"},children:s.jsx(Oe,{src:a.avatar,size:64,onError:d=>{d.target.src="https://image.theblockbeats.info/icon/mirrorLogo.jpeg"}})})]})})},a.id)})}))}):s.jsx(de,{description:"Nothing"})]})};export{Ne as default};
