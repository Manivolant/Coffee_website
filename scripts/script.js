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
});

window.addEventListener("load",()=>{
	document.getElementById("loading").classList.add("hidden");
	document.getElementById("loading").classList.add("opacity-0");
	document.getElementById("loading").classList.remove("opacity-100");
});