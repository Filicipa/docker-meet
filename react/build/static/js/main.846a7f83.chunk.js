(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(3),i=n.n(r);n(9);class c extends l.a.Component{render(){return l.a.createElement("div",{className:"component-display"},l.a.createElement("div",null,this.props.value))}}n(10);class o extends l.a.Component{constructor(){super(...arguments),this.handleClick=()=>{this.props.clickHandler(this.props.name)}}render(){const e=["component-button",this.props.orange?"orange":"",this.props.wide?"wide":""];return l.a.createElement("div",{className:e.join(" ").trim()},l.a.createElement("button",{onClick:this.handleClick},this.props.name))}}n(11);class s extends l.a.Component{constructor(){super(...arguments),this.handleClick=e=>{this.props.clickHandler(e)}}render(){return l.a.createElement("div",{className:"component-button-panel"},l.a.createElement("div",null,l.a.createElement(o,{name:"AC",clickHandler:this.handleClick}),l.a.createElement(o,{name:"+/-",clickHandler:this.handleClick}),l.a.createElement(o,{name:"%",clickHandler:this.handleClick}),l.a.createElement(o,{name:"\xf7",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(o,{name:"7",clickHandler:this.handleClick}),l.a.createElement(o,{name:"8",clickHandler:this.handleClick}),l.a.createElement(o,{name:"9",clickHandler:this.handleClick}),l.a.createElement(o,{name:"x",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(o,{name:"4",clickHandler:this.handleClick}),l.a.createElement(o,{name:"5",clickHandler:this.handleClick}),l.a.createElement(o,{name:"6",clickHandler:this.handleClick}),l.a.createElement(o,{name:"-",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(o,{name:"1",clickHandler:this.handleClick}),l.a.createElement(o,{name:"2",clickHandler:this.handleClick}),l.a.createElement(o,{name:"3",clickHandler:this.handleClick}),l.a.createElement(o,{name:"+",clickHandler:this.handleClick,orange:!0})),l.a.createElement("div",null,l.a.createElement(o,{name:"0",clickHandler:this.handleClick,wide:!0}),l.a.createElement(o,{name:".",clickHandler:this.handleClick}),l.a.createElement(o,{name:"=",clickHandler:this.handleClick,orange:!0})))}}var d=n(1),m=n.n(d);function u(e,t,n){const a=m()(e||"0"),l=m()(t||("\xf7"===n||"x"===n?"1":"0"));if("+"===n)return a.plus(l).toString();if("-"===n)return a.minus(l).toString();if("x"===n)return a.times(l).toString();if("\xf7"===n)return"0"===l?(alert("Divide by 0 error"),"0"):a.div(l).toString();throw Error(`Unknown operation '${n}'`)}n(12);class h extends l.a.Component{constructor(){super(...arguments),this.state={total:null,next:null,operation:null},this.handleClick=e=>{this.setState(function(e,t){if("AC"===t)return{total:null,next:null,operation:null};if(/[0-9]+/.test(t)){if("0"===t&&"0"===e.next)return{};if(e.operation)return e.next?{next:e.next+t}:{next:t};if(e.next){return{next:"0"===e.next?t:e.next+t,total:null}}return{next:t,total:null}}if("%"===t){if(e.operation&&e.next){const t=u(e.total,e.next,e.operation);return{total:m()(t).div(m()("100")).toString(),next:null,operation:null}}return e.next?{next:m()(e.next).div(m()("100")).toString()}:{}}return"."===t?e.next?e.next.includes(".")?{}:{next:e.next+"."}:{next:"0."}:"="===t?e.next&&e.operation?{total:u(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===t?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.operation?{total:u(e.total,e.next,e.operation),next:null,operation:t}:e.next?{total:e.next,next:null,operation:t}:{operation:t}}(this.state,e))}}render(){return l.a.createElement("div",{className:"component-app"},l.a.createElement(c,{value:this.state.next||this.state.total||"0"}),l.a.createElement(s,{clickHandler:this.handleClick}))}}n(13),n(14);i.a.render(l.a.createElement(h,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.846a7f83.chunk.js.map