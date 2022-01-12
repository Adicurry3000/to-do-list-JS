let all_item = []
let i = 1
function Add() {

    var item = document.getElementById('box').value;

    all_item.push(item);
    //console.log(all_item)
    console.log(all_item.length);
    console.log('hi');


        var target = document.getElementById('list');

        target.innerHTML +="<li id='li_item_"+i+"' class='list-group-item'></li>";
        xx= "li_item_"+i

        let target2 = document.getElementById(xx);
        target2.innerHTML += item
        i+=1;



};



document.getElementById("add").onclick = function(){Add();};


