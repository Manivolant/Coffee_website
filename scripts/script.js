let left_panel = false;

document.getElementById("menu").addEventListener("click",()=>{
	if (left_panel == false)
	{
		left_panel = true
		document.getElementById("panel").classList.remove("-translate-x-full");
	}else {
		left_panel = false
		document.getElementById("panel").classList.add("-translate-x-full");
	}
});

window.addEventListener("scroll",()=>{
	let scroll_y = window.scrollY;
	let add_class_remove = ["fixed","top-0","right-0","w-lvw","bg-black/15","backdrop-blur-md","z-49","h-12","py-10"];
	if (scroll_y >= 120)
	{
		for (let i=0;i<add_class_remove.length;i++)
		{
			document.getElementById("header").classList.add(add_class_remove[i]);
		}
	}else{
		for (let i=0;i<add_class_remove.length;i++)
		{
			document.getElementById("header").classList.remove(add_class_remove[i]);
		}
	}
	if (scroll_y >= 640)
	{
		document.getElementById("upbutton").classList.add("block");
		document.getElementById("upbutton").classList.add("m-5");
		document.getElementById("upbutton").classList.remove("translate-y-full");
		document.getElementById("upbutton").classList.remove("translate-x-full");
	}else{
		document.getElementById("upbutton").classList.remove("block");
		document.getElementById("upbutton").classList.remove("m-5");
		document.getElementById("upbutton").classList.add("translate-y-full");
		document.getElementById("upbutton").classList.add("translate-x-full");
	}
});
document.getElementById("upbutton").addEventListener("click",()=>{
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
});