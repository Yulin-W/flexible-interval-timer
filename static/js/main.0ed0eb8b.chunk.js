(this["webpackJsonpflexible-interval-timer"]=this["webpackJsonpflexible-interval-timer"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),c=a.n(i),s=a(10),r=a.n(s),l=a(32),u=a(33),d=a(14),o=a(36),j=a(34),h=(a(96),a(77)),b=a(148),m=a(6),f=a(152),x=a(149),O=a(150),p=a(74),v=a.n(p),g=a(75),y=a.n(g),k=a(76),E=a.n(k),S=a(141),C=a(43),w=a.n(C),T=a(138),N=a(142),I=a(110),F=Object(T.a)((function(e){return{timeText:{userSelect:"none"},timerContainer:{width:"100%",borderRadius:200}}}));function V(e){var t=e.hr,a=e.min,i=e.sec,c=F();return Object(n.jsx)(I.a,{variant:"outlined",color:"primary",size:"large",className:c.timerContainer,children:Object(n.jsxs)(S.a,{container:!0,direction:"row",justify:"center",children:[Object(n.jsx)(N.a,{item:!0,variant:"h3",className:c.timeText,children:t}),Object(n.jsx)(N.a,{item:!0,variant:"h3",className:c.timeText,children:":"}),Object(n.jsx)(N.a,{item:!0,variant:"h3",className:c.timeText,children:a}),Object(n.jsx)(N.a,{item:!0,variant:"h3",className:c.timeText,children:":"}),Object(n.jsx)(N.a,{item:!0,variant:"h3",className:c.timeText,children:i})]})})}var P=Object(T.a)((function(e){return{}}));function D(e){var t=e.current,a=e.next;P();return Object(n.jsxs)(S.a,{container:!0,direction:"column",alignItems:"center",children:[Object(n.jsx)(N.a,{item:!0,variant:"h2",children:t}),Object(n.jsx)(N.a,{item:!0,variant:"h5",children:a})]})}var R=a(143),L=function(e){return e.toString().padStart(2,"0")},M=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentTask:"Current Task",nextTask:"Next Task"},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.classes;return Object(n.jsxs)(S.a,{container:!0,direction:"column",alignItems:"center",justify:"space-evenly",className:e.timer,children:[Object(n.jsx)(D,{item:!0,current:"Current task",next:"Next task"}),Object(n.jsx)(w.a,{initialTime:6e5,direction:"backward",lastUnit:"h",startImmediately:!1,onReset:function(){return console.log("onReset hook")},formatValue:L,checkpoints:[{time:0,callback:function(){console.log("Need to put go to next task function here, i think it shoudl be a function that is passed down from parent")}}],children:function(t){var a=t.start,i=t.stop,c=t.reset;return Object(n.jsxs)(S.a,{container:!0,item:!0,direction:"column",alignItems:"center",justify:"space-evenly",className:e.timerActual,children:[Object(n.jsx)(V,{item:!0,hr:Object(n.jsx)(w.a.Hours,{}),min:Object(n.jsx)(w.a.Minutes,{}),sec:Object(n.jsx)(w.a.Seconds,{})}),Object(n.jsxs)(R.a,{color:"primary",size:"large",variant:"contained",item:!0,children:[Object(n.jsx)(I.a,{onClick:a,children:"Start"}),Object(n.jsx)(I.a,{onClick:i,children:"Stop"}),Object(n.jsx)(I.a,{onClick:function(){i(),c()},children:"Reset"})]})]})}})]})}}]),a}(c.a.Component),B=Object(m.a)((function(e){return{timer:{backgroundColor:e.palette.background.paper,flexGrow:1},timerActual:{width:"60%",flexGrow:.6}}}))(M),G=a(144),H=a(146),U=a(68),A=a.n(U),z=a(69),J=a.n(z),W=a(70),Y=a.n(W),q=a(56),K=a.n(q),Q=a(145),X=a(151),Z=function(e){return{hr:(e-e%3600)/3600%60,min:(e-e%60)/60%60,sec:e%60}},$=Object(T.a)((function(e){return{periodInput:{"& .MuiTextField-root":{margin:e.spacing(1)}}}}));function _(e){var t=e.disabled,a=e.defaultValue,i=Z(a),c=$();return Object(n.jsxs)("div",{className:c.periodInput,children:[Object(n.jsx)(X.a,{disabled:t,margin:"dense",label:"Hr",defaultValue:i.hr,type:"number",InputLabelProps:{shrink:!0}}),Object(n.jsx)(X.a,{disabled:t,margin:"dense",label:"Min",defaultValue:i.min,type:"number",InputLabelProps:{shrink:!0}}),Object(n.jsx)(X.a,{disabled:t,margin:"dense",label:"Sec",defaultValue:i.sec,type:"number",InputLabelProps:{shrink:!0}})]})}function ee(e){var t=e.index,a=e.isFirst,i=e.isLast,c=e.editable,s=e.entry,r=e.upFunc,l=e.downFunc,u=e.delFunc,d=e.addFunc;return Object(n.jsx)(Q.a,{divider:!0,children:Object(n.jsxs)(S.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",children:[Object(n.jsx)(S.a,{container:!0,item:!0,xs:2,sm:2,md:2,lg:2,xl:2,justify:"flex-start",alignItems:"center",children:Object(n.jsx)(X.a,{disabled:!c,margin:"dense",defaultValue:s.name})}),Object(n.jsx)(S.a,{container:!0,item:!0,xs:8,sm:8,md:8,lg:8,xl:8,justify:"center",alignItems:"center",children:Object(n.jsx)(_,{disabled:!c,defaultValue:s.period})}),Object(n.jsx)(S.a,{container:!0,item:!0,xs:2,sm:2,md:2,lg:2,xl:2,justify:"flex-end",alignItems:"center",children:Object(n.jsxs)(R.a,{color:"primary",disabled:!c,disableElevation:!0,children:[Object(n.jsx)(H.a,{disabled:a,onClick:function(){r(t)},children:Object(n.jsx)(A.a,{})}),Object(n.jsx)(H.a,{disabled:i,onClick:function(){l(t)},children:Object(n.jsx)(J.a,{})}),Object(n.jsx)(H.a,{onClick:function(){d(t)},children:Object(n.jsx)(K.a,{})}),Object(n.jsx)(H.a,{onClick:function(){u(t)},children:Object(n.jsx)(Y.a,{})})]})})]})})}var te=a(147),ae=a(71),ne=a.n(ae),ie=a(72),ce=a.n(ie),se={false:Object(n.jsx)(ne.a,{}),true:Object(n.jsx)(ce.a,{})},re=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentTask:"Current Task",nextTask:"Next Task",data:e.data,editing:!1},n.setEditing=n.setEditing.bind(Object(d.a)(n)),n.shiftUpEntry=n.shiftUpEntry.bind(Object(d.a)(n)),n.shiftDownEntry=n.shiftDownEntry.bind(Object(d.a)(n)),n.deleteEntry=n.deleteEntry.bind(Object(d.a)(n)),n.addEntry=n.addEntry.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"shiftUpEntry",value:function(e){var t=this.state.data,a=[t[e],t[e-1]];t[e-1]=a[0],t[e]=a[1],this.setState({data:t})}},{key:"shiftDownEntry",value:function(e){var t=this.state.data,a=[t[e+1],t[e]];t[e]=a[0],t[e+1]=a[1],this.setState({data:t})}},{key:"deleteEntry",value:function(e){var t=this.state.data;t.splice(e,1),this.setState({data:t})}},{key:"addEntry",value:function(e){var t=this.state.data;t.splice(e+1,0,{name:"New Task",period:300}),this.setState({data:t})}},{key:"setEditing",value:function(){var e=this.state.editing;this.setState({editing:!e})}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(n.jsxs)("div",{className:t.schedule,children:[Object(n.jsxs)(G.a,{children:[this.state.data.map((function(t,a,i){return Object(n.jsx)(ee,{index:a,isFirst:0===a,isLast:a===i.length-1,editable:e.state.editing,entry:t,upFunc:e.shiftUpEntry,downFunc:e.shiftDownEntry,delFunc:e.deleteEntry,addFunc:e.addEntry})})),Object(n.jsx)(Q.a,{className:t.addButtonContainer,children:Object(n.jsx)(H.a,{disabled:!this.state.editing,color:"primary",onClick:function(){e.addEntry(e.state.data.length-1)},children:Object(n.jsx)(K.a,{})})})]}),Object(n.jsx)(te.a,{color:"secondary",className:t.fab,onClick:this.setEditing,children:se[this.state.editing.toString()]})]})}}]),a}(c.a.Component),le=Object(m.a)((function(e){return{schedule:{backgroundColor:e.palette.background.paper,overflowY:"scroll",flexGrow:1},fab:{position:"absolute",bottom:80,right:40},addButtonContainer:{display:"flex",justifyContent:"center",alignItems:"center"}}}))(re),ue=a(61),de=a(73),oe=["#1976d2","#dc004e","#9c27b0","#ff9800","#4caf50","#f44336","#1a237e","#e57373","#d500f9","#ffee58","#e65100","#b2ff59","#9fa8da","#fff9c4","#f50057","#004d40"],je=a(78),he=Object(T.a)((function(e){return{summary:{backgroundColor:e.palette.background.paper,flexGrow:1,overflowY:"scroll"},pieChart:{transform:"scale(0.6)"}}}));var be={palette:{}},me=Object(h.a)(be),fe={timer:B,schedule:le,summary:function(e){var t=e.data,a=(e.func,c.a.useState(0)),i=Object(ue.a)(a,2),s=i[0],r=i[1],l=he(),u=function(e){for(var t=[],a=0,n=0,i=Object.entries(e);n<i.length;n++){var c=Object(ue.a)(i[n],2),s=c[0],r=c[1];r>0&&(t.push({title:s,value:r,color:oe[a%oe.length]}),a++)}return t.length>0?t:null}(t);return u?Object(n.jsxs)(S.a,{container:!0,item:!0,direction:"column",justify:"center",alignItems:"center","data-tip":"","data-for":"chart",className:l.summary,children:[Object(n.jsx)(de.PieChart,{item:!0,data:u,lineWidth:30,paddingAngle:1,radius:40,labelPosition:55,label:function(e){return e.dataEntry.title},labelStyle:function(e){return{fontSize:"4px",fontFamily:"'Roboto', 'Helvetica', 'Arial', 'sans-serif'",pointerEvents:"none"}},className:l.pieChart,animate:!0,onMouseOver:function(e,t){r(t)},onMouseOut:function(){r(null)}}),Object(n.jsx)(je.a,{id:"chart",getContent:function(){return"number"===typeof s?function(e,t){var a=Object.values(Z(t[e].value));return a=a.map((function(e){return L(e)})),"".concat(a[0],":").concat(a[1],":").concat(a[2])}(s,u):null}})]}):Object(n.jsx)(S.a,{container:!0,item:!0,direction:"column",justify:"center",alignItems:"center",className:l.summary,children:Object(n.jsx)(N.a,{variant:"h4",children:"No tasks have been done"})})}},xe=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={pageValue:"schedule",taskSchedule:[{name:"Read",period:145},{name:"Chill",period:304},{name:"Exercise",period:1800}],taskElapsedTime:{Read:0,Chill:0,Exercise:0},paused:!0},n.fetchPageData=n.fetchPageData.bind(Object(d.a)(n)),n.updateSchedule=n.updateSchedule.bind(Object(d.a)(n)),n.updateScheduleElapsedTime=n.updateScheduleElapsedTime.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"updateScheduleElapsedTime",value:function(e){var t={};this.state.taskSchedule.forEach((function(e){t[e.name]=0})),this.setState({taskElapsedTime:t})}},{key:"updateSchedule",value:function(e){this.setState({taskSchedule:e}),this.updateScheduleElapsedTime(e)}},{key:"fetchPageData",value:function(e){return"timer"===e?null:"schedule"===e?this.state.taskSchedule:"summary"===e?this.state.taskElapsedTime:null}},{key:"fetchPageFunc",value:function(e){return"timer"===e?null:"schedule"===e?this.updateSchedule:null}},{key:"render",value:function(){var e=this,t=this.props.classes,a=fe[this.state.pageValue],i=this.fetchPageData(this.state.pageValue),c=this.fetchPageFunc(this.state.pageValue);return Object(n.jsx)(b.a,{theme:me,children:Object(n.jsxs)(f.a,{className:t.root,children:[Object(n.jsx)(a,{data:i,func:c}),Object(n.jsxs)(x.a,{value:this.state.pageValue,onChange:function(t,a){e.setState({pageValue:a})},showLabels:!0,className:t.navBar,children:[Object(n.jsx)(O.a,{label:"Timer",value:"timer",icon:Object(n.jsx)(v.a,{})}),Object(n.jsx)(O.a,{label:"Schedule",value:"schedule",icon:Object(n.jsx)(y.a,{})}),Object(n.jsx)(O.a,{label:"Summary",value:"summary",icon:Object(n.jsx)(E.a,{})})]})]})})}}]),a}(c.a.Component),Oe=Object(m.a)((function(e){return{root:{minWidth:"100vh",minHeight:"100vh",maxHeight:"100vh",display:"flex",flexFlow:"column",alignItems:"stretch"},page:{flexGrow:1},navBar:{}}}))(xe);a(105);r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(Oe,{})}),document.getElementById("root"))},96:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.0ed0eb8b.chunk.js.map