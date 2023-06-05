"use strict";(self.webpackChunkGooseTrack_frontend=self.webpackChunkGooseTrack_frontend||[]).push([[398],{1398:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r=t(9439),o=t(7689),a=t(2791),i=t(9297),s=t(8527),c=t(4522);function d(n,e){(0,c.Z)(2,arguments);var t=(0,s.Z)(n),r=(0,i.Z)(e);if(isNaN(r))return new Date(NaN);if(!r)return t;var o=t.getDate(),a=new Date(t.getTime());a.setMonth(t.getMonth()+r+1,0);var d=a.getDate();return o>=d?a:(t.setFullYear(a.getFullYear(),a.getMonth(),o),t)}function l(n,e){(0,c.Z)(2,arguments);var t=(0,i.Z)(e);return d(n,-t)}var u,x,f,p,h,g,v=t(7609),j=t(168),b=t(6444),Z=b.ZP.div(u||(u=(0,j.Z)(["\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.29;\n\n  text-align: center;\n  text-transform: uppercase;\n  background-color: var(--color-button-period-type);\n  color: var(--btn-text-color);\n"]))),y=b.ZP.button(x||(x=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 7px 10px;\n  border-top-left: 8px;\n  color: var(--calendar-digit-color);\n  border-bottom-left-radius: 8px;\n  border-top-left-radius: 8px;\n\n  background-color: var(--primary-background-color);\n  border: 1px solid rgba(220, 227, 229, 0.5);\n  & > svg {\n    stroke: currentColor;\n    fill: transparent;\n  }\n"]))),D=b.ZP.div(f||(f=(0,j.Z)(["\n  display: flex;\n  border-radius: 8px;\n  overflow: hidden;\n"]))),w=b.ZP.div(p||(p=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n  @media screen and (min-width: 768px) {\n    justify-content: flex-start;\n    gap: 8px;\n  }\n"]))),m=t(184),k=function(n){var e=n.setCurrentDate,t=n.currentDate;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{children:t}),(0,m.jsxs)(D,{children:[(0,m.jsx)(y,{onClick:function(){e(l(t,1))},children:(0,m.jsx)("svg",{width:"16",height:"16",children:(0,m.jsx)("use",{href:"".concat(v.Z,"#calendar-right-sf")})})}),(0,m.jsx)(y,{style:{transform:"rotate(180deg)"},onClick:function(){e(d(t,1))},children:(0,m.jsx)("svg",{width:"16",height:"16",children:(0,m.jsx)("use",{href:"".concat(v.Z,"#calendar-right-sf")})})})]})]})},C=t(1087),M=b.ZP.div(h||(h=(0,j.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  border-radius: 8px;\n  overflow: hidden;\n"]))),P=(0,b.ZP)(C.rU)(g||(g=(0,j.Z)(["\n  color: var(--color-button-period-type);\n  padding: 8px 16px;\n  background-color: var(--button-period-type);\n  min-width: 76px;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n\n  text-align: center;\n  &:hover,\n  &:focus,\n  &:active,\n  &.active {\n    background-color: var(--active-button-period-type);\n  }\n"]))),N=function(){return(0,m.jsx)("div",{style:{width:"100%",marginTop:"18px",display:"flex",justifyContent:"flex-start"},children:(0,m.jsxs)(M,{children:[(0,m.jsx)(P,{to:"month/:currentDate",children:"Month"}),(0,m.jsx)(P,{to:"day/:currentDay",children:"Day"})]})})},T=function(n){var e=n.setCurrentDate,t=n.currentDate;return(0,m.jsx)("div",{children:(0,m.jsxs)(w,{children:[(0,m.jsx)(k,{nextMonth:function(){e(d(t,1))},prevMonth:function(){e(l(t,1))}}),(0,m.jsx)(N,{})]})})},F=t(6640),S=function(){var n=(0,a.useState)(new Date),e=(0,r.Z)(n,2),t=e[0],i=e[1],s=(0,a.useState)(new Date),c=(0,r.Z)(s,2),d=c[0],l=c[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)(T,{setCurrentDate:i,currentDate:t}),(0,m.jsx)(F.Z,{setCurrentDate:i,currentDate:t,selectedDate:d,setSelectedDate:l}),(0,m.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=398.a6f4f140.chunk.js.map