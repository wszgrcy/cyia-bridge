          cursor: pointer;
          color: ${n?t?"white":"#aaa":t?"black":"#ccc"};
        `)})),Kre=(ge.forwardRef(({className:e,value:t,...n},r)=>{const i=t.document.nodes.map(o=>o.text).toArray().join("\n");return(0,Ya.jsxs)("div",{ref:r,...n,className:Nv(e,N8`
            margin: 30px -20px 0;
          `),children:[(0,Ya.jsx)("div",{className:N8`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `,children:"Slate's value as text"}),(0,Ya.jsx)("div",{className:N8`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `,children:i})]})}),ge.forwardRef(({className:e,...t},n)=>(0,Ya.jsx)("span",{...t,ref:n,className:Nv("material-icons",e,N8`
          font-size: 18px;
          vertical-align: text-bottom;
        `)}))),aNe=(ge.forwardRef(({className:e,...t},n)=>(0,Ya.jsx)("div",{...t,ref:n,className:Nv(e,N8`
          white-space: pre-wrap;
          margin: 0 -20px 10px;
          padding: 10px 20px;
          font-size: 14px;
          background: #f8f8e8;
        `)})),ge.forwardRef(({className:e,...t},n)=>(0,Ya.jsx)("div",{...t,"data-test-id":"menu",ref:n,className:Nv(e,N8`
          & > * {
            display: inline-block;
          }

          & > * + * {
            margin-left: 15px;
          }
        `)}))),sNe=ge.forwardRef(({className:e,...t},n)=>(0,Ya.jsx)(aNe,{...t,ref:n,className:Nv(e,N8`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,UWe=rf`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ZWe=rf`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,WWe=ah("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${GWe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${UWe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ZWe} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,$We=rf`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,YWe=ah("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${$We} 1s linear infinite;
`,KWe=rf`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,qWe=rf`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,XWe=ah("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${KWe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${qWe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,JWe=ah("div")`
  position: absolute;
`,e$e=ah("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,t$e=rf`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,n$e=ah("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${t$e} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,r$e=({toast:e})=>{let{icon:t,type:n,iconTheme:r}=e;return void 0!==t?"string"==typeof t?ge.createElement(n$e,null,t):t:"blank"===n?null:ge.createElement(e$e,null,ge.createElement(YWe,{...r}),"loading"!==n&&ge.createElement(JWe,null,ge.createElement("error"===n?WWe:XWe,{...r})))},i$e=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,o$e=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,c$e=ah("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,l$e=ah("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,d$e=ge.memo(({toast:e,position:t,style:n,children:r})=>{let i=e.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=t0e()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[i$e(n),o$e(n)];return{animation:t?`${rf(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${rf(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=ge.createElement(r$e,{toast:e}),a=ge.createElement(l$e,{...e.ariaProps},CS(e.message,e));return ge.createElement(c$e,{className:e.className,style:{...i,...n,...e.style}},"function"==typeof r?r({icon:o,message:a}):ge.createElement(ge.Fragment,null,o,a))});!function TWe(e,t,n,r){oh.p=t,e0e=e,gP=n,vP=r}(ge.createElement);var f$e=({id:e,className:t,style:n,onHeightUpdate:r,children:i})=>{let o=ge.useCallback(a=>{if(a){let s=()=>{let c=a.getBoundingClientRect().height;r(e,c)};s(),new MutationObserver(s).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return ge.createElement("div",{ref:o,className:t,style:n},i)},p$e=wS`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }