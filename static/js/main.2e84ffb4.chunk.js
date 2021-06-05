(this.webpackJsonpnqueens=this.webpackJsonpnqueens||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){},24:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var s=n(2),i=n.n(s),a=n(8),o=n.n(a),r=(n(17),n(4)),l=n(5),c=n(12),u=n(11),d=(n(18),n(9)),h=n(10),b=(n(24),n(0));var f=function(t){return Object(b.jsx)("div",{className:"solutions",children:t.solutions&&-1!==t.index&&""!==t.n&&t.isNum&&t.solutions[t.index].length===parseInt(t.n)?Object(b.jsx)("table",{className:"chess-board",children:Object(b.jsx)("tbody",{children:t.solutions[t.index].map((function(e,n){return Object(b.jsx)("tr",{children:new Array(parseInt(t.n)).fill(!0).map((function(t,n){return Object(b.jsx)("td",{children:e===n?Object(b.jsx)(d.a,{icon:h.a}):" "},"td"+n)}))},"tr"+n)}))})}):Object(b.jsx)("div",{className:"chess-board-structure",children:""!==t.n&&t.isNum?Object(b.jsx)("table",{className:"chess-board",children:Object(b.jsx)("tbody",{children:new Array(parseInt(t.n)).fill(!1).map((function(e,n){return Object(b.jsx)("tr",{children:new Array(parseInt(t.n)).fill(!1).map((function(t,e){return Object(b.jsx)("td",{children:"\xa0"},"td-structure"+e)}))},"tr-structure"+n)}))})}):Object(b.jsx)("div",{className:"message",children:Object(b.jsx)("h1",{children:"The nxn chessboard will be displayed here. Give your 'N' and click on 'Solve'"})})})})},v=function(){function t(e){Object(r.a)(this,t),this.n=e,this.solutions=[],this.board=new Array(e),this.constructBoard()}return Object(l.a)(t,[{key:"constructBoard",value:function(){for(var t=0;t<this.board.length;t++)this.board[t]=new Array(this.n).fill(!1)}},{key:"collidingVertically",value:function(t,e){for(;--t>=0;)if(this.board[t][e])return!0;return!1}},{key:"collidingDiagonally",value:function(t,e){for(var n=t-1,s=e-1;n>=0&&s>=0;){if(this.board[n][s])return!0;n--,s--}for(n=t-1,s=e+1;n>=0&&s<this.board.length;){if(this.board[n][s])return!0;n--,s++}return!1}},{key:"isSafe",value:function(t,e){return!(this.collidingVertically(t,e)||this.collidingDiagonally(t,e))}},{key:"extractSolution",value:function(){for(var t=[],e=0;e<this.n;e++)for(var n=0;n<this.n;n++)if(this.board[e][n]){t.push(n);break}return t}},{key:"solve",value:function(t){if(t!==this.n){for(var e=0;e<this.n;e++)this.isSafe(t,e)&&(this.board[t][e]=!0,this.solve(t+1),this.board[t][e]=!1);return this.solutions}var n=this.extractSolution();this.solutions.push(n)}}]),t}(),j=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).solve=function(){var t=parseInt(s.state.n),e=new v(t);s.setState({solutions:e.solve(0),index:0})},s.initShortcutOnBody=function(t){70===t.keyCode?s.ref.current.focus():s.initShortcutOnInput(t)},s.initShortcutOnInput=function(t){t.stopPropagation(),13===t.keyCode&&""!==s.state.n&&s.state.isNum?s.solve():107===t.keyCode&&s.state.solutions&&s.state.index+1<s.state.solutions.length?s.next():109===t.keyCode&&s.state.solutions&&s.state.index-1>=0&&s.prev()},s.prev=function(){s.setState((function(t){return{index:t.index-1}}))},s.next=function(){s.setState((function(t){return{index:t.index+1}}))},s.setN=function(t){var e=t.target.value;e=e.replace(/[\+\-f]+/gi,"");var n=s.validateN(e);s.setState({n:e,isNum:n.isNum,validationMsg:n.validationMsg})},s.validateN=function(t){var e=!0,n="";return/^\-[\d]+$/gi.test(t)?(e=!1,n="Negative number's are not allowed"):/^\-[\d]+\.[\d]+$/gi.test(t)?(e=!1,n="Negative decimal number's are not allowed"):/^\.[\d]+$/gi.test(t)||/^[\d]+\.[\d]+$/gi.test(t)?(e=!1,n="Decimal number's are not allowed"):/[^0-9]+/gi.test(t)?(e=!1,n="Only number's are allowed"):parseInt(t)<4?(e=!1,n="You can only calculate solution's for more than 3 queens"):parseInt(t)>13&&(e=!1,n="You cannot calculate solution's for more than 13 queens"),{isNum:e,validationMsg:n}},s.state={n:"",index:-1,solutions:null,isNum:!1,validationMsg:""},s.ref=i.a.createRef(),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.body.addEventListener("keydown",this.initShortcutOnBody)}},{key:"componentWillUnmount",value:function(){document.body.removeEventListener("keydown",this.initShortcutOnBody)}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-6 chess-board",children:[""!==this.state.n&&this.state.solutions&&this.state.solutions[0].length===parseInt(this.state.n)&&this.state.isNum?Object(b.jsxs)("div",{className:"header",children:[Object(b.jsxs)("h1",{children:["No. of solutions for ",this.state.n," queens is ",this.state.solutions.length]}),Object(b.jsxs)("h2",{className:"solution-count",children:["Solution #",this.state.index+1]})]}):"",Object(b.jsx)(f,{solutions:this.state.solutions,index:this.state.index,n:this.state.n,isNum:this.state.isNum})]}),Object(b.jsx)("div",{className:"col-md-6 controls",children:Object(b.jsxs)("form",{onSubmit:function(t){return t.preventDefault()},children:[Object(b.jsxs)("div",{className:"input-group has-validation",children:[Object(b.jsx)("input",{type:"text",placeholder:"N",className:"form-control",value:this.state.n,onChange:this.setN,onKeyDown:this.initShortcutOnInput,ref:this.ref,autoFocus:!0}),Object(b.jsx)("div",{className:"invalid-feedback",style:{display:this.state.isNum?"none":"block"},children:this.state.validationMsg})]}),Object(b.jsx)("input",{type:"button",value:"Solve",className:"btn btn-primary",disabled:""===this.state.n||""!==this.state.n&&!this.state.isNum,onClick:this.solve}),Object(b.jsx)("input",{type:"button",value:"Prev",className:"btn btn-primary",disabled:""===this.state.n||""!==this.state.n&&!this.state.isNum||this.state.solutions&&this.state.solutions[0].length!==parseInt(this.state.n)||this.state.index-1<0,onClick:this.prev}),Object(b.jsx)("input",{type:"button",value:"Next",className:"btn btn-primary",disabled:""===this.state.n||""!==this.state.n&&!this.state.isNum||this.state.solutions&&this.state.solutions[0].length!==parseInt(this.state.n)||this.state.index<0||this.state.solutions&&this.state.index+1>=this.state.solutions.length,onClick:this.next})]})})]})})}}]),n}(s.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),i(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),m()}},[[26,1,2]]]);
//# sourceMappingURL=main.2e84ffb4.chunk.js.map