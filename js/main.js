var burger = document.getElementById("toggle");
var menu = document.getElementById("toggle-menu");

var search = document.getElementById("search--icon");
var search_block = document.getElementById("search__overlay");

function toggleNav() {
	  burger.addEventListener('click', 
	  function (e) { 
	    menu.classList.toggle('invisible'); 
	    search_block.classList.add('invisible'); 
	    e.preventDefault();
	  });
}

function toggleSearch() {
	  search.addEventListener('click', 
	  function (e) { 
	    search_block.classList.toggle('invisible'); 
	    menu.classList.add('invisible'); 
	    e.preventDefault();
	  });
}


toggleNav();
toggleSearch();