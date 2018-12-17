window.taskContainer = null;
$(document).ready(function() {
addIdToElement();
$(document.body).on("click","#btn-add-todo-task",function(){
	window.taskContainer = "container-todo";
	$("#myModal").modal();
});
$(document.body).on("click","#add-in-progress",function(){
	window.taskContainer = "container-inwork";
	$("#myModal").modal();
});
$(document.body).on("click","#add-done-task",function(){
	window.taskContainer = "container-done";
	$("#myModal").modal();
});
$(document.body).on("click","#action-to-do",function(){
	var owner= $("#user").val();
	var task = $("#task").val();
	var html = '<li class="box-item">';
        html+='<div class="todo-text">'+task+'</div>';
        html+='<div class="row clearfix"><div class="col-md-6"><i class="fas fa-user-tie fa-2x"></i> '+owner+' </div>';
        html+='<div class="col-md-6"><i class="far fa-clock"></i> 01 Dec, 2018 </div></div>';
        html+='</li>';
		
    var container = window.taskContainer;
	$("#"+container).append(html);
	addIdToElement();
	$("#user").val("");
	$("#task").val("");
	$("#myModal").modal("hide");
});


$('.box-item').draggable({
    cursor: 'move',
    helper: "clone"
});
$(".sortble" ).sortable();
$("#container-todo").droppable({
  drop: function(event, ui) {
    var itemid = $(event.originalEvent.toElement).attr("itemid");
    $('.box-item').each(function() {
      if ($(this).attr("itemid") === itemid) {
        $(this).appendTo("#container-todo");
      }
    });
  }
});

$("#container-inwork").droppable({
  drop: function(event, ui) {
    var itemid = $(event.originalEvent.toElement).attr("itemid");
    $('.box-item').each(function() {
      if ($(this).attr("itemid") === itemid) {
        $(this).appendTo("#container-inwork");
      }
    });
  }
});
$("#container-done").droppable({
  drop: function(event, ui) {
    var itemid = $(event.originalEvent.toElement).attr("itemid");
    $('.box-item').each(function() {
      if ($(this).attr("itemid") === itemid) {
        $(this).appendTo("#container-done");
      }
    });
  }
});

});

var addIdToElement = function(){
	$('.box-item').each(function(index){
		$(this).attr('itemid','block-'+index);
	});
}