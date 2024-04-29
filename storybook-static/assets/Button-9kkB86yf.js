import{d as u,l as o,o as m,b as c,t as p,n as b,m as d}from"./vue.esm-bundler-CKFjqS-F.js";const y=u({__name:"Button",props:{label:{},primary:{type:Boolean,default:!1},size:{},backgroundColor:{}},emits:["click"],setup(t,{emit:r}){const e=t,a=r,n=o(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),s=o(()=>({backgroundColor:e.backgroundColor})),l=()=>{a("click",1)};return(i,f)=>(m(),c("button",{type:"button",class:b(n.value),onClick:l,style:d(s.value)},p(i.label),7))}});y.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"label",description:"The label of the button",required:!0,type:{name:"string"}},{name:"primary",description:"primary or secondary button",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"size of the button",required:!1,type:{name:"union",elements:[{name:'"small"'},{name:'"medium"'},{name:'"large"'}]}},{name:"backgroundColor",description:"background color of the button",required:!1,type:{name:"string"}}],events:[{name:"click",type:{names:["number"]}}],sourceFiles:["/Users/brianscramlin/LocalWebDev/rorystorybook/src/stories/Button.vue"]};export{y as _};
