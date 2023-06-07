$(document).keydown(function(e){
    if (e.keyCode == 97)  
        room_location('A');
    if (e.keyCode == 98) 
        room_location('B');
    if (e.keyCode == 99) 
        room_location('C');
    if (e.keyCode == 100)
        room_location('D');
    if (e.keyCode == 101)
        room_location('E');
    if (e.keyCode == 102)
        room_location('F');

    if (e.keyCode == 37)  
    	 button_direction('l');
    if (e.keyCode == 38) 
        button_direction('f');
    if (e.keyCode == 39) 
    	  button_direction('r');
    if (e.keyCode == 40)
    	 button_direction('b');
    if (e.keyCode == 32)
    	 button_direction('s');
});

function room_location(loc)
{
	$.post("direction.php",
    {
      location: loc
    }
    );
}

function button_direction(val)
{
	// console.log("button val:" + val);
	$.post("direction.php",
    {
      direction: val
    }
    );
}