AFRAME.registerComponent('gameplay', {

init: function () {
this.el.addEventListener("collide", function (e){
e.detail.body.el.remove()

})

}


})
