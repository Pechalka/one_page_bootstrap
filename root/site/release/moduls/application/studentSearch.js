define(["knockout","text!./studentSearch.html","vent"],function(e,t,n){return function(n){var r=this;r.q=e.observable(""),r.search=function(e){location="#/students?q="+r.q(),r.q("")},r.html=t}})