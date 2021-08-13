var Pizza_List=["Paneer Pizza","Sweet Corn Pizza","Simply Veg Pizza","Capsicum Pizza","Peri-Peri pizza","Olive Curnch Pizza","Paneer Tikka Pizza","Paneer Masala Pizza"];
function getmenu()
{ var htmldata="";
Pizza_List.sort();
for(var i=0;i<Pizza_List.length;i++)
{ htmldata=htmldata+ Pizza_List[i] + '<br>' } 
document.getElementById("display_menu").innerHTML = htmldata;
}
function add_item(){ var htmldata;
var imgtags='<img id="im1" src="Pizza.png"/>' 
var item=document.getElementById("add_item").value; 
Pizza_List.sort(); 
htmldata="" ;
for(var i=0;i<Pizza_List.length;i++)
{ htmldata=htmldata+imgtags+ Pizza_List[i]+'<br>'; } 
document.getElementById("display_addedmenu").innerHTML = htmldata;
}
function add_top(){ var item=document.getElementById("add_item").value;Pizza_List.push(item); add_item(); }