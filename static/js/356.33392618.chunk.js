"use strict";(self.webpackChunkGooseTrack_frontend=self.webpackChunkGooseTrack_frontend||[]).push([[356],{1658:function(n,e,t){t.d(e,{L:function(){return m}});var i,r,o,a=t(9439),l=t(2791),s=t(7609),c=t(168),d=t(7691),p="@media screen and (max-width: 767px)",x=d.ZP.svg(i||(i=(0,c.Z)(["\n  width: 26px;\n  height: 26px;\n  fill: var(--color-button-period-type);\n  "," {\n    width: 20px;\n    height: 20px;\n  }\n"])),p),h=d.ZP.svg(r||(r=(0,c.Z)(["\n  width: 26px;\n  height: 26px;\n  fill: var(--color-button-period-type);\n  "," {\n    width: 20px;\n    height: 20px;\n  }\n"])),p),g=d.ZP.button(o||(o=(0,c.Z)(["\n  background: none;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20px;\n  text-align: center;\n  padding: 0;\n  margin-right: 17px;\n  margin-left: 27px;\n  cursor: pointer;\n\n  "," {\n    margin-right: 10px;\n    margin-left: 20px;\n  }\n"])),p),f=t(7689),u=t(184),m=function(){var n=(0,f.useLocation)(),e=function(){var n;window.matchMedia&&(n=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var e=(0,l.useState)(localStorage.getItem("app-theme")||"".concat(n)),t=(0,a.Z)(e,2),i=t[0],r=t[1];return(0,l.useLayoutEffect)((function(){document.documentElement.setAttribute("data-theme",i),localStorage.setItem("app-theme",i)}),[i]),{theme:i,setTheme:r}}(),t=e.theme,i=e.setTheme;return"/"!==n.pathname&&(0,u.jsx)(g,{type:"button",onClick:function(n){i("dark"===t?"light":"dark")},children:"light"===t?(0,u.jsx)(x,{children:(0,u.jsx)("use",{href:"".concat(s.Z,"#profile-moon-f")})}):(0,u.jsx)(h,{children:(0,u.jsx)("use",{href:"".concat(s.Z,"#profile-sun-f")})})})}},2671:function(n,e,t){t.r(e),t.d(e,{default:function(){return ft}});var i,r,o,a,l,s,c,d,p,x,h,g,f,u,m,b,v,Z,y,j,w,k,P,A,z,C,N,I,F,L,O,E,R,S,B,H,D,U,T=t(9439),Y=t(7689),X=t(9434),W=t(2791),q=t(1686),M=t(9273),J=t(4217),K=t(168),V=t(7691),Q=V.ZP.button(i||(i=(0,K.Z)(["\n\nwidth: 97px;\nheight: 32px;\n\nbackground: #3E85F3;\nborder-radius: 10px;\nborder: none;\nbackground-color: var(--accent-background-color);\n\nfont-family: 'Inter', sans-serif;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    color: var(--btn-text-color);\n\n&:hover,\n  :focus {\n   cursor: pointer;\n   background-color: var(--hover-btn-background-color);\n\n   "," {\n  width: 130px;\n  font-size: 14px;\n  line-height: 18px;\n}\n  }"])),"@media screen and (min-width: 768px)"),G=t(1153),_=V.ZP.form(r||(r=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),$=V.ZP.label(o||(o=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--task-modal-label-color);\n"]))),nn=(V.ZP.div(a||(a=(0,K.Z)(["\n  position: relative;\n  font-size: 40px;\n  display: inline-block;\n  margin-bottom: 20px;\n  width: 50%;\n  ::before {\n    content: '\u2605\u2605\u2605\u2605\u2605';\n    display: block;\n    color: lightgray;\n  }\n"]))),V.ZP.textarea(l||(l=(0,K.Z)(["\n  width: 100%;\n  height: 127px;\n  background-color: var(--task-input-bg-color);\n  border: 1px solid var(--border-label-color);\n  border-radius: 8px;\n  margin-top: 8px;\n  resize: none;\n  padding-top: 14px;\n  padding-left: 18px;\n  color: var(--primary-text-color);\n  ::placeholder {\n    font-family: 'Inter';\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 18px;\n    color: #343434;\n  }\n"])))),en=V.ZP.button(s||(s=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin-top: 18px;\n  cursor: pointer;\n  background: #3e85f3;\n  border: none;\n  border-radius: 8px;\n"]))),tn=V.ZP.span(c||(c=(0,K.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #ffffff;\n"]))),rn=(V.ZP.div(d||(d=(0,K.Z)(["\n  position: absolute;\n  width: 41%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  /* flex-direction: row-reverse; */\n"]))),V.ZP.label(p||(p=(0,K.Z)(["\n  flex: 0 0 20%;\n  height: 100%;\n  cursor: pointer;\n  color: lightgray;\n  ::before {\n    content: '\u2605';\n    display: block;\n    transition: all 0.3s ease 0s;\n  }\n  :hover,\n  :hover ~ RatingLabel,\n  :checked ~ RatingLabel:hover {\n    color: rgba(255, 172, 51, 0.5);\n  }\n"]))),V.ZP.input(x||(x=(0,K.Z)(["\n  position: absolute;\n  width: 0%;\n  height: 0%;\n  opacity: 0;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  :checked,\n  :checked ~ RatingLabel {\n    color: rgba(255, 172, 51, 1);\n  }\n"]))),t(184)),on=function(){return(0,rn.jsx)("div",{className:"rating",children:(0,rn.jsxs)("div",{className:"rating-items",children:[(0,rn.jsx)("input",{id:"rating-5",type:"radio",name:"rating",className:"rating-item",value:"5"}),(0,rn.jsx)("label",{htmlFor:"rating-5",className:"rating-label"}),(0,rn.jsx)("input",{id:"rating-4",type:"radio",name:"rating",className:"rating-item",value:"4"}),(0,rn.jsx)("label",{htmlFor:"rating-4",className:"rating-label"}),(0,rn.jsx)("input",{id:"rating-3",type:"radio",name:"rating",className:"rating-item",value:"3"}),(0,rn.jsx)("label",{htmlFor:"rating-3",className:"rating-label"}),(0,rn.jsx)("input",{id:"rating-2",type:"radio",name:"rating",className:"rating-item",value:"2"}),(0,rn.jsx)("label",{htmlFor:"rating-2",className:"rating-label"}),(0,rn.jsx)("input",{id:"rating-1",type:"radio",name:"rating",className:"rating-item",value:"1"}),(0,rn.jsx)("label",{htmlFor:"rating-1",className:"rating-label"})]})})},an=function(){return(0,rn.jsx)(rn.Fragment,{children:(0,rn.jsxs)(_,{children:[(0,rn.jsx)($,{children:"Rating"}),(0,rn.jsx)(on,{}),(0,rn.jsxs)($,{children:["Review",(0,rn.jsx)(nn,{placeholder:"Enter text",name:"",id:"feedback-text",cols:"30",rows:"10",className:"text-input"})]}),(0,rn.jsx)(en,{type:"submit",className:"save-btn",children:(0,rn.jsx)(tn,{children:"Save"})})]})})},ln=t(7609),sn=V.ZP.div(h||(h=(0,K.Z)(["\n  position: relative;\n  width: 100%;\n  max-height: 150px;\n  background-color: var(--feedback-label-background-color);\n  border-radius: 8px;\n  margin-top: 32px;\n  position: relative;\n  overflow-y: auto;\n  padding: 16px 0 16px 16px;\n  ::-webkit-scrollbar {\n    height: 90%;\n    width: 8px;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n  }\n  ::-webkit-scrollbar-track {\n    position: absolute;\n    background: #fff;\n    left: 0px;\n    top: 0px;\n  }\n  ::-webkit-scrollbar-thumb {\n    position: absolute;\n    width: 8px;\n    height: 112px;\n    left: 0px;\n    top: 0px;\n    background: rgba(52, 52, 52, 0.2);\n    border-radius: 12px;\n  }\n"]))),cn=V.ZP.div(g||(g=(0,K.Z)(["\n  display: flex;\n  position: relative;\n  max-height: 108px;\n"]))),dn=(V.ZP.div(f||(f=(0,K.Z)(["\n  background-image: url(../../../../../images/avatars/Olena.jpg);\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 12px;\n  background-color: gray;\n"]))),V.ZP.img(u||(u=(0,K.Z)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 12px;\n  outline: 3px solid var(--accent-background-color);\n\n  /* {\nwidth:44px;\nheight:44px;\nmargin-left: 14px;\n  }  */\n"])))),pn=V.ZP.div(m||(m=(0,K.Z)([""]))),xn=V.ZP.p(b||(b=(0,K.Z)(["\n  width: 100%;\n  height: 18px;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 18px;\n  color: var(--calendar-digit-color);\n  margin: 0;\n"]))),hn=V.ZP.p(v||(v=(0,K.Z)(["\n  margin: 0;\n  font-size: 20px;\n"]))),gn=V.ZP.p(Z||(Z=(0,K.Z)(["\n  width: 314px;\n  height: 56px;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  color: var(--feedback-text);\n"]))),fn=V.ZP.div(y||(y=(0,K.Z)(["\n  display: flex;\n  position: absolute;\n  top: 0;\n  right: 15px;\n"]))),un=V.ZP.button(j||(j=(0,K.Z)(["\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  border: none;\n  background: none;\n  cursor: pointer;\n"]))),mn=V.ZP.svg(w||(w=(0,K.Z)(["\n  width: 13px;\n  height: 13px;\n  fill: transparent;\n  stroke: var(--primary-text-color);\n\n  &:hover,\n  &:focus {\n    stroke: var(--accent-background-color);\n  }\n"]))),bn=V.ZP.button(k||(k=(0,K.Z)(["\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  border: none;\n  background: none;\n  cursor: pointer;\n"]))),vn=V.ZP.svg(P||(P=(0,K.Z)(["\n  width: 13px;\n  height: 13px;\n  fill: transparent;\n  stroke: var(--primary-text-color);\n\n  &:hover,\n  &:focus {\n    stroke: var(--accent-background-color);\n  }\n"]))),Zn=V.ZP.form(A||(A=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),yn=V.ZP.div(z||(z=(0,K.Z)(["\n  position: relative;\n  border-radius: 12px;\n  background-color: #fff;\n"]))),jn=(V.ZP.div(C||(C=(0,K.Z)(["\n  position: relative;\n  font-size: 40px;\n  display: inline-block;\n  margin-bottom: 20px;\n  width: 50%;\n  ::before {\n    content: '\u2605\u2605\u2605\u2605\u2605';\n    display: block;\n    color: lightgray;\n  }\n"]))),V.ZP.textarea(N||(N=(0,K.Z)(["\n  width: 100%;\n  height: 127px;\n  background-color: #f7f7f7;\n  border: none;\n  border-radius: 8px;\n  margin-top: 8px;\n  resize: none;\n  margin-bottom: 18px;\n  padding-top: 14px;\n  padding-left: 18px;\n  ::placeholder {\n    font-family: 'Inter';\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 18px;\n    color: #343434;\n  }\n"])))),wn=(V.ZP.div(I||(I=(0,K.Z)(["\n  position: absolute;\n  width: 41%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  display: flex;\n  /* flex-direction: row-reverse; */\n"]))),V.ZP.label(F||(F=(0,K.Z)(["\n  flex: 0 0 20%;\n  height: 100%;\n  cursor: pointer;\n  color: lightgray;\n  ::before {\n    content: '\u2605';\n    display: block;\n    transition: all 0.3s ease 0s;\n  }\n  :hover,\n  :hover ~ RatingLabel,\n  :checked ~ RatingLabel:hover {\n    color: rgba(255, 172, 51, 0.5);\n  }\n"]))),V.ZP.input(L||(L=(0,K.Z)(["\n  position: absolute;\n  width: 0%;\n  height: 0%;\n  opacity: 0;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  :checked,\n  :checked ~ RatingLabel {\n    color: rgba(255, 172, 51, 1);\n  }\n"]))),V.ZP.label(O||(O=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: rgba(52, 52, 52, 0.8);\n"])))),kn=V.ZP.div(E||(E=(0,K.Z)(["\ndisplay: flex;\ngap: 8px;\n"]))),Pn=V.ZP.button(R||(R=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: 198px;\n  height: 48px;\n  cursor: pointer;\n  background: #3e85f3;\n  border: none;\n  border-radius: 8px;\n"]))),An=V.ZP.span(S||(S=(0,K.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #ffffff;\n"]))),zn=V.ZP.button(B||(B=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: 198px;\n  height: 48px;\n  cursor: pointer;\n  background: #E5EDFA;\n  border: none;\n  border-radius: 8px;\n"]))),Cn=V.ZP.span(H||(H=(0,K.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  color: #343434;\n"]))),Nn=(V.ZP.button(D||(D=(0,K.Z)(["\n  position: absolute;\n  top: 18px;\n  right: 18px;\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  border: none;\n  background-color: #fff;\n  cursor: pointer;\n"]))),V.ZP.svg(U||(U=(0,K.Z)(["\n  width: 12px;\n  height: 12px;\n"]))),function(n){var e=n.onCloseModal;return(0,rn.jsx)(G.Z,{onCloseModal:e,children:(0,rn.jsx)(yn,{onClick:function(n){return n.stopPropagation()},children:(0,rn.jsxs)(Zn,{children:[(0,rn.jsx)(wn,{children:"Rating"}),(0,rn.jsx)(on,{}),(0,rn.jsxs)(wn,{children:["Review",(0,rn.jsx)(jn,{placeholder:"Enter text",name:"",id:"feedback-text",cols:"30",rows:"10",className:"text-input"})]}),(0,rn.jsxs)(kn,{children:[(0,rn.jsx)(Pn,{type:"submit",className:"save-btn",children:(0,rn.jsx)(An,{children:"Edit"})}),(0,rn.jsx)(zn,{type:"submit",className:"save-btn",children:(0,rn.jsx)(Cn,{children:"Cancel"})})]})]})})})}),In=function(n){n.active,n.setActive;var e=(0,W.useState)(!1),t=(0,T.Z)(e,2),i=t[0],r=t[1],o=function(){return r(!i)};return(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)(sn,{children:(0,rn.jsxs)(cn,{children:[(0,rn.jsxs)(fn,{children:[(0,rn.jsx)(un,{type:"button",onClick:o,children:(0,rn.jsx)(mn,{children:(0,rn.jsx)("use",{href:"".concat(ln.Z,"#task-edit-sf")})})}),(0,rn.jsx)(bn,{type:"button",children:(0,rn.jsx)(vn,{children:(0,rn.jsx)("use",{href:"".concat(ln.Z,"#task-trash-sf")})})})]}),(0,rn.jsx)(dn,{src:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg",alt:"user avatar"}),(0,rn.jsxs)(pn,{children:[(0,rn.jsx)(xn,{children:"Olena Doe"}),(0,rn.jsx)(hn,{children:"\u2605\u2605\u2605\u2605\u2605"}),(0,rn.jsx)(gn,{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam, inventore velit asperiores error ad."})]})]})}),i&&(0,rn.jsx)(Nn,{onCloseModal:o})]})},Fn=function(n){var e=n.onCloseModal;return(0,rn.jsxs)(G.Z,{onCloseModal:e,children:[(0,rn.jsx)(an,{}),(0,rn.jsx)(In,{})]})},Ln=function(){var n=(0,W.useState)(!1),e=(0,T.Z)(n,2),t=e[0],i=e[1],r=function(){return i(!t)};return(0,rn.jsxs)("div",{children:[(0,rn.jsx)(Q,{type:"button",onClick:r,children:"Feedback"}),t&&(0,rn.jsx)(Fn,{onCloseModal:r})]})},On=t(6265),En=t(3400),Rn=t(6094),Sn=t(9891),Bn=t(8329),Hn=t(983),Dn=t(9230),Un=t(8825),Tn=t(1694),Yn=t.n(Tn);function Xn(){var n=(0,Dn.$G)().t,e=Bn.Z.get("i18next")||"en",t=W.useState(null),i=(0,T.Z)(t,2),r=i[0],o=i[1],a=Boolean(r),l=function(){o(null)};return(0,rn.jsxs)("div",{children:[(0,rn.jsx)(On.Z,{title:n("language"),arrow:!0,children:(0,rn.jsx)(En.Z,{onClick:function(n){o(n.currentTarget)},size:"small",sx:{ml:2},children:(0,rn.jsx)(Hn.Z,{style:{width:"32px",height:"32px",color:"var(--secondary-text-color)"}})})}),(0,rn.jsx)(Rn.Z,{anchorEl:r,open:a,onClose:l,onClick:l,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},disableScrollLock:!0,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,bgcolor:"#F8F8F8","& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"#F8F8F8",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},children:[{code:"en",country_code:"gb",name:"English"},{code:"ua",country_code:"ua",name:"Ukrainian"}].map((function(n){var t=n.code,i=n.name,r=n.country_code;return(0,rn.jsx)(On.Z,{title:i,arrow:!0,placement:"left",children:(0,rn.jsx)(Sn.Z,{style:{backgroundColor:e===t?"#D8D8D8":"#F8F8F8",border:e===t?"1px solid #989898":"#F8F8F8"},children:(0,rn.jsx)(En.Z,{className:Yn()("dropdown-item"),onClick:function(){Un.ZP.changeLanguage(t)},children:(0,rn.jsx)("div",{className:"flag-icons flag-icons-".concat(r),style:{opacity:e===t?1:.3,width:"3rem",height:"2rem"}})})})},t)}))})]})}var Wn,qn,Mn,Jn,Kn,Vn,Qn,Gn,_n,$n,ne,ee,te,ie,re,oe,ae,le,se,ce,de,pe,xe,he,ge,fe,ue,me,be,ve,Ze,ye,je=t(1658),we="@media screen and (min-width: 768px)",ke="@media screen and (min-width: 1440px)",Pe=V.ZP.div(Wn||(Wn=(0,K.Z)(["\n  display: flex;\n  margin-bottom: 32px;\n  justify-content: space-between;\n  position: relative;\n\n  "," {\n    justify-content: space-between;\n  }\n"])),ke),Ae=V.ZP.div(qn||(qn=(0,K.Z)(["\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 0;\n  border-radius: 50%;\n  margin-left: 8px;\n  color: var(--secondary-text-color);\n  background-color: var(--avatar-background-color);\n  font-size: 25px;\n  outline: 2px solid var(--accent-background-color);\n\n  "," {\n    width: 44px;\n    height: 44px;\n    margin-left: 14px;\n  }\n"])),we),ze=V.ZP.div(Mn||(Mn=(0,K.Z)(["\n  display: flex;\n  justify-content: rigth;\n  align-items: center;\n"]))),Ce=V.ZP.img(Jn||(Jn=(0,K.Z)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  margin-left: 8px;\n  outline: 3px solid var(--accent-background-color);\n\n  "," {\n    width: 44px;\n    height: 44px;\n    margin-left: 14px;\n  }\n"])),we),Ne=V.ZP.svg(Kn||(Kn=(0,K.Z)(["\n  width: 34px;\n  height: 34px;\n  stroke: var(--primary-text-color);\n\n  &:hover,\n  :focus {\n    cursor: pointer;\n  }\n"]))),Ie=V.ZP.button(Vn||(Vn=(0,K.Z)(["\n  background: none;\n  border: none;\n\n  "," {\n    display: none;\n  }\n"])),ke),Fe=V.ZP.h2(Qn||(Qn=(0,K.Z)(["\n  font-family: 'Inter', sans-serif;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 32px;\n  color: var(--primary-text-color);\n  letter-spacing: -0.02em;\n  display: none;\n\n  "," {\n    display: block;\n    /* margin-top: 42px; */\n  }\n"])),ke),Le=V.ZP.h4(Gn||(Gn=(0,K.Z)(["\n  text-align: center;\n\n  font-family: 'Inter', sans-serif;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 18px;\n  color: var(--primary-text-color);\n\n  "," {\n    font-size: 18px;\n    line-height: 18px;\n  }\n"])),ke),Oe=V.ZP.div(_n||(_n=(0,K.Z)(["\n  display: flex;\n  text-align: left;\n"]))),Ee=V.ZP.h2($n||($n=(0,K.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 8px;\n  display: none;\n  color: var(--primary-text-color);\n\n  "," {\n    font-size: 18px;\n    line-height: 18px;\n    display: block;\n  }\n"])),ke),Re=V.ZP.span(ne||(ne=(0,K.Z)(["\n  color: var(--accent-text-color);\n"]))),Se=V.ZP.div(ee||(ee=(0,K.Z)(["\n  display: none;\n\n  "," {\n    display: flex;\n    flex-direction: column;\n  }\n"])),ke),Be=V.ZP.img(te||(te=(0,K.Z)(["\n  width: 64px;\n  height: 60px;\n\n  visibility: hidden;\n\n  "," {\n    visibility: visible;\n  }\n"])),ke),He=function(n){var e=n.isOpen,t=n.onOpenClick,i=(0,X.v9)(J.dy),r=i.name,o=i.avatarURL,a=null===r||void 0===r?void 0:r.charAt(0).toUpperCase(),l=(0,Y.useLocation)(),s=(0,Y.useParams)().currentDay;return(0,rn.jsxs)(Pe,{children:[!e&&(0,rn.jsx)(Ie,{onClick:t,children:(0,rn.jsx)(Ne,{children:(0,rn.jsx)("use",{href:"".concat(ln.Z,"#profile-mobile-menu")})})}),(0,rn.jsxs)(Oe,{children:["/calendar"===l.pathname&&(0,rn.jsx)(Fe,{children:" Calendar"}),"/account"===l.pathname&&(0,rn.jsx)(Fe,{children:" User Profile"}),l.pathname==="/calendar/day/".concat(s)&&(0,rn.jsxs)(rn.Fragment,{children:[(0,rn.jsx)(Be,{src:"data:image/png;base64,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",alt:"Goose"}),(0,rn.jsxs)(Se,{children:[(0,rn.jsx)(Fe,{children:"Calendar"}),(0,rn.jsxs)(Ee,{children:[" ",(0,rn.jsx)(Re,{children:"Let go"})," of the past and focus on the present!"]})]})]})]}),(0,rn.jsxs)(ze,{children:[(0,rn.jsx)(Xn,{}),(0,rn.jsx)(Ln,{}),(0,rn.jsx)(je.L,{}),(0,rn.jsx)(Le,{children:r}),o?(0,rn.jsx)(Ce,{src:o,alt:"user avatar"}):(0,rn.jsx)(Ae,{children:a})]})]})},De="@media screen and (min-width: 768px)",Ue="@media screen and (min-width: 1440px)",Te=V.ZP.div(ie||(ie=(0,K.Z)(["\n  padding-top: 24px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background: var(--secondary-background-color);\n  "," {\n    padding-top: 24px;\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n\n  "," {\n    padding-top: 40px;\n    padding-left: 320px;\n  }\n"])),De,Ue),Ye=V.ZP.div(re||(re=(0,K.Z)(["\n visibility: ",";\n"])),(function(n){return n.isOpen?"visible":"none"})),Xe=t(3853),We="@media screen and (min-width: 768px)",qe="@media screen and (min-width: 1440px)",Me=V.ZP.button(oe||(oe=(0,K.Z)(["\nwidth: 131px;\nheight: 46px;\nborder: none;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ngap: 6px;\nposition: absolute;\n\nleft: 20px;\nbottom: 24px;\n\n/* margin-left: 20px;\nmargin-bottom: 24px; */\n\nfont-family: 'Inter', sans-serif;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 18px;\n    color: var(--btn-text-color);\n    letter-spacing: -0.02em;\n  background-color: var(--color-button-period-type);\n  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);\n  border-radius: 16px;\n\n&:hover,\n  :focus {\n   cursor: pointer;\n   background-color: var(--hover-btn-background-color);\n  }\n\n  "," {\n    width: 141px;\n    height: 56px;\n    gap: 11px;\n    left: 32px;\n  }\n\n  "," {\n    width: 141px;\n    height: 56px;\n  left: 24px;\n  }\n"])),We,qe),Je=function(){var n=(0,X.I0)();return(0,rn.jsxs)(Me,{type:"button",onClick:function(){return n((0,M.kS)())},children:["Log out ",(0,rn.jsx)(Xe.xqh,{})," "]})},Ke=t.p+"static/media/GooseLogo@2x.3c0470b19aa18aaef0d8.png",Ve=t(1087),Qe=t(9129),Ge=t(5880),_e="@media screen and (min-width: 768px)",$e="@media screen and (min-width: 1440px)",nt=V.ZP.div(ae||(ae=(0,K.Z)(["\n  z-index: 10;\n  background-color: var(--sidebar-background-color);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 225px;\n  justify-content: flex-start;\n  height: 100%;\n\n  "," {\n    width: 289px;\n  }\n\n  "," {\n    position: fixed;\n  }\n\n  transform: ",";\n  transition: 0.3s ease-in-out;\n"])),_e,$e,(function(n){return n.isOpen?"translateX(0)":"translateX(-100%)"})),et=V.ZP.div(le||(le=(0,K.Z)(["\n  margin-top: 24px;\n  margin-left: 20px;\n  margin-right: 20px;\n\n  "," {\n    margin-left: 32px;\n    margin-right: 32px;\n  }\n"])),_e),tt=V.ZP.div(se||(se=(0,K.Z)(["\n  gap: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),it=V.ZP.div(ce||(ce=(0,K.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--calendar-digit-color);\n"]))),rt=V.ZP.img(de||(de=(0,K.Z)(["\n  width: 36px;\n  height: 35px;\n  margin-right: 6px;\n\n  "," {\n    width: 60px;\n    height: 58px;\n  }\n\n  "," {\n    width: 71px;\n    height: 68px;\n    margin-right: 10px;\n  }\n"])),_e,$e),ot=V.ZP.svg(pe||(pe=(0,K.Z)(["\n  width: 80px;\n  height: 22px;\n  fill: var(--accent-text-color);\n\n  "," {\n    width: 90px;\n    height: 24px;\n  }\n\n  "," {\n    width: 120px;\n  }\n"])),_e,$e),at=(0,V.ZP)(Qe.MvL)(xe||(xe=(0,K.Z)(["\n  margin-right: 8px;\n\n  "," {\n    margin-right: 10px;\n  }\n"])),_e),lt=V.ZP.div(he||(he=(0,K.Z)(["\n  width: 100%;\n  margin-top: 64px;\n\n  "," {\n    margin-top: 50px;\n  }\n"])),_e),st=V.ZP.ul(ge||(ge=(0,K.Z)(["\n  height: 56px;\n\n  "," {\n    gap: 16px;\n  }\n"])),_e),ct=V.ZP.svg(fe||(fe=(0,K.Z)(["\n  margin-right: 8px;\n\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: var(--not-active-item-sidebar-text-color);\n\n  "," {\n    margin-right: 10px;\n  }\n"])),_e),dt=(0,V.ZP)(Ve.OL)(ue||(ue=(0,K.Z)(["\n  display: flex;\n  color: var(--not-active-item-sidebar-text-color);\n  align-items: center;\n  margin-right: 0;\n\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 19px;\n\n  height: 40px;\n  padding-left: 12px;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--sidebar-background-color);\n  margin-bottom: 16px;\n  border-radius: 8px;\n\n  display: flex;\n  justify-content: flex-start;\n\n  > :not(:last-child) {\n    margin-bottom: 18px;\n  }\n\n  &.active,\n  :hover,\n  :focus {\n    fill: var(--accent-text-color);\n    color: var(--accent-text-color);\n    stroke: var(--accent-text-color);\n    background: var(--active-item-sidebar-background);\n\n    &:hover ",", &:focus ",", &.active "," {\n      stroke: var(--accent-text-color); /* change the stroke color */\n    }\n  }\n\n  "," {\n    height: 56px;\n    padding-left: 20px;\n  }\n"])),ct,ct,ct,_e),pt=(V.ZP.svg(me||(me=(0,K.Z)(["\n  width: 34px;\n  height: 34px;\n  stroke: #111111;\n\n  &:hover,\n  :focus {\n    cursor: pointer;\n  }\n"]))),V.ZP.h4(be||(be=(0,K.Z)(["\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  color: grey;\n  margin-bottom: 24px;\n  margin-top: 64px;\n\n  "," {\n    margin-top: 50px;\n  }\n\n  "," {\n    margin-bottom: 32px;\n    margin-top: 32px;\n  }\n"])),_e,$e)),xt=(V.ZP.button(ve||(ve=(0,K.Z)(["\n  background: none;\n  border: none;\n\n  "," {\n    display: none;\n  }\n"])),$e),V.ZP.button(Ze||(Ze=(0,K.Z)(["\n  display: flex;\n  font-size: 20px;\n  align-items: center;\n  text-align: center;\n  border: none;\n  background: none;\n  cursor: pointer;\n\n  "," {\n    font-size: 30px;\n  }\n  "," {\n    display: none;\n  }\n"])),_e,$e)),ht=(0,V.ZP)(Ge.Fk5)(ye||(ye=(0,K.Z)(["\n  color: var(--primary-text-color);\n"]))),gt=function(n){var e=n.isOpen,t=n.onCloseClick,i=(0,Dn.$G)().t;return(0,rn.jsxs)(nt,{isOpen:e,children:[(0,rn.jsxs)(et,{children:[(0,rn.jsxs)(tt,{children:[(0,rn.jsxs)(it,{children:[(0,rn.jsx)(rt,{src:Ke,alt:"logo"}),(0,rn.jsx)(ot,{children:(0,rn.jsx)("use",{href:"".concat(ln.Z,"#icon-logo-text")})})]}),(0,rn.jsx)(xt,{onClick:t,children:(0,rn.jsx)(ht,{color:"--primary-text-color"})})]}),(0,rn.jsxs)(lt,{children:[(0,rn.jsx)(pt,{children:i("user_panel")}),(0,rn.jsxs)(st,{children:[(0,rn.jsx)("li",{children:(0,rn.jsxs)(dt,{to:"account",onClick:t,children:[(0,rn.jsx)(ct,{children:(0,rn.jsx)("use",{href:"".concat(ln.Z,"#icon-user-check")})}),i("my_account")]})}),(0,rn.jsx)("li",{children:(0,rn.jsxs)(dt,{to:"calendar",onClick:t,children:[(0,rn.jsx)(at,{}),i("calendar")]})})]})]})]}),(0,rn.jsx)(Je,{})]})},ft=function(){var n=(0,X.I0)();(0,W.useEffect)((function(){try{n((0,M.Ec)())}catch(e){q.Notify.error("Authorization error")}}),[n]);var e=(0,W.useState)(window.innerWidth>=1440),t=(0,T.Z)(e,2),i=t[0],r=t[1],o=(0,W.useRef)(),a=function(){window.innerWidth>=1440||r(!i)};return(0,W.useEffect)((function(){var n=function(n){window.innerWidth<1440&&(o.current.contains(n.target)||r(!1))};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[]),(0,W.useEffect)((function(){var n=function(){r(window.innerWidth>=1440)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),(0,rn.jsxs)(Te,{children:[(0,rn.jsx)(He,{isOpen:i,onOpenClick:a}),(0,rn.jsx)(Ye,{ref:o,children:(0,rn.jsx)(gt,{isOpen:i,onCloseClick:a})}),(0,rn.jsx)(Y.Outlet,{})]})}}}]);
//# sourceMappingURL=356.33392618.chunk.js.map