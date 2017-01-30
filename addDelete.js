$('#submit').click(function(){
  
 var item = $('#item').val();
  
$('#out').append("<li id="+item+"><button onclick='deleteItem("+item+")'>delete</button>"+item+"</li>");
  
});

function deleteItem(item){
  
 
  item.remove();
}