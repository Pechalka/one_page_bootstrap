define(["knockout","text!./userMenu.html","vent"],function(e,t,n){return function(){var r=this;r.change_profile=function(){n.trigger("change_profile")},r.lagout=function(){alert("lagout")},r.selected=e.observable(""),n.on("app:render",function(e,t){t==="catalog"||t==="teachers"?r.selected(t):r.selected("")}),r.html=t}})