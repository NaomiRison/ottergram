 var DETAIL_IMAGE_SELECTOR='[data-image-role="target"]';
 var DETAIL_TITLE_SELECTOR='[data-image-role="title"]';
 var THUMBNAIL_LINK_SELECTOR='[data-image-role="trigger"]';
 //  querySelector method finds
 //  1 element that matches string [data-image-role="target"]'
 //querySelectorAll method finds a list of elements that a string
 // getAttribute retireves what the atrribute is already assigned to
 //setAttribute sets the attribute

 var detailImage= document.querySelector(DETAIL_IMAGE_SELECTOR);

function setDetails(imageUrl, titleText){
	'use strict';

	 var detailImage= document.querySelector(DETAIL_IMAGE_SELECTOR);
	 // gives back  detail image of  data-image-role="target" which
	 // is img/otter3.jpg below changing the jpg image and title
	 // detailImage.setAttribute('src','img/otter3.jpg');
	 // wrote parameter, imageUrl instead of img/otter3.jpg
	 detailImage.setAttribute('src',imageUrl);

	 var detailTitle= document.querySelector(DETAIL_TITLE_SELECTOR);
	 
	 // detailTitle.textContent='You should be Dancing';
	 //  texteContent poperty allows one to change text in html element
	 detailTitle.textContent=titleText;
}

// function sent a reference of the  element conating a 
//string,THUMBNAIL_LINK_SELECTOR
// return whats inside the attribute data-image-url so that
// we get the jpg image
function imageFromThumb(thumbnail){
	'use strict';
	return thumbnail.getAttribute('data-image-url');
	/* from console:
		var firstthumbnail=document.querySelector(THUMBNAIL_LINK_SELECTOR);
			undefined
		imageFromThumb(firstthumbnail);
				"img/otter1.jpg"


	*/

}

function titleFromThumb(thumbnail){
	'use strict';
	return thumbnail.getAttribute('data-image-title');
	/* from console:
		var firstthumbnail=document.querySelector(THUMBNAIL_LINK_SELECTOR);
       undefined
                 titleFromThumb(firstthumbnail);
                   "Stayin alive"


	*/

}
//combines 2 previous functions
function setDetailsFromThumb(thumbnail){
	'use strict';
	setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}
//click handler function
function addThumbClick(thumbnail){
	thumbnail.addEventListener('click',function(event){
  	event.preventDefault();
  	console.log("clicked thumbnail!!!");
  	setDetailsFromThumb(thumbnail)

  });
}

  // var firstThumbnail=document.querySelector(THUMBNAIL_LINK_SELECTOR);
  // firstThumbnail.addEventListener('click',function(event){
  // 	event.preventDefault();
  // 	console.log("clicked thumbnail!!!");

  // });

  function getThumbArray(){
  	'use strict';
  	//below assigns nodelist of all elements that match the string
  	// from the variable THUMBNAIL_LINK_SELECTOR
  	var nodelist=document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  	//below converts nodelist to array
  	var thumbnailArray=[].slice.call(nodelist)
  	return thumbnailArray;
  }

  // forEach() method calls a function on each element
  // passes addThumbClick) as A callback function

  function initializeEvents(){
  	'use strict'
  	var thumbnails=getThumbArray();
  	thumbnails.forEach(addThumbClick);
  }

  // last line calls function to get prpgram started
  // and make the gallery interactive with each click
  initializeEvents();