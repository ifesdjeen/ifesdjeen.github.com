var Guicheck = {}

Guicheck.CheckView = Backbone.View.extend({
  initialize: function() {
    this.image = $('#sample')
    this.wrapper = $('.wrapper')

    _.bindAll(this, 'start_render_box', 'start_drag_horizontal', 'stop_drag_horizontal', 'start_drag_vertical', 'stop_drag_vertical')
    this.image.click(this.start_render_box)
  },
  start_render_box: function (e) {
    this.box = $("<div class='box'><div class='dragger_horizontal'></div><div class='dragger_vertical'></div></div>")
    this.box.css('top', e.layerY)
    this.box.css('left', e.layerX)

    this.box.find('.dragger_horizontal').mousedown(this.start_drag_horizontal)
    this.box.find('.dragger_horizontal').mouseup(this.stop_drag_horizontal)

    this.box.find('.dragger_vertical').mousedown(this.start_drag_vertical)
    this.box.find('.dragger_vertical').mouseup(this.stop_drag_vertical)

    this.wrapper.append(this.box)
  },
  start_drag_horizontal: function(e) {
    this.image.mousemove(function(e) {
      e.preventDefault()
      e.stopPropagation()
      this.box.css( 'height', e.layerY - this.box.position().top  )
    }.bind(this))
  },
  stop_drag_horizontal: function(e) {
    this.image.unbind('mousemove')
  },
  start_drag_vertical: function(e) {
    this.image.mousemove(function(e) {
      e.preventDefault()
      e.stopPropagation()
      this.box.css( 'width', e.layerX - this.box.position().left  )
    }.bind(this))
  },
  stop_drag_vertical: function(e) {
    this.image.unbind('mousemove')
  },

})

$(function() {
  new Guicheck.CheckView()
})

