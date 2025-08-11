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