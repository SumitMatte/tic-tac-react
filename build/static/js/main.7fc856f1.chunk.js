(this.webpackJsonpstarter=this.webpackJsonpstarter||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(7),i=r.n(s),o=(r(14),r(8)),u=r(1),c=r(2),l=r(4),h=r(3),m=r(5);r(15);function d(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(n.a.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(o.a)(t[r],3),n=a[0],s=a[1],i=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[i])return e[n]}return null}var f=function(e){function t(e){var r;return Object(u.a)(this,t),(r=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();b(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],s=b(a.squares),i=r.map((function(e,r){var a=r?"Go to move #"+r:"Go to game start";return n.a.createElement("li",{key:r},n.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))}));return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(v,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,i)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,r){e.exports=r(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7fc856f1.chunk.js.map