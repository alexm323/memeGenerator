const imageURL = document.getElementById('image-link');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const memeForm = document.getElementById('meme-form');
const memeHolder = document.getElementById('meme-holder');
const removeBtn = document.getElementById('removeBtn');

memeForm.addEventListener('submit', (e) => {
	e.preventDefault();
	makeMemeArray(imageURL.value, topText.value, bottomText.value);

	makeMemeDiv(meme);
	imageURL.value = '';
	topText.value = '';
	bottomText.value = '';
});

let makeMemeArray = (image, top, bottom) => {
	meme = [ image, top, bottom ];
	return meme;
};

let makeMemeDiv = (arr) => {
	let memeDiv = document.createElement('div');
	memeDiv.addEventListener('click', function(e) {
		memeDiv.classList.toggle('completed');
	});

	// I can do it with a string literal =D
	memeDiv.style.backgroundImage = `url(${arr[0]})`;
	//If i can do it with an image i can do it with a string literal
	// memeDiv.style.backgroundImage = 'url("https://i.picsum.photos/id/237/200/300.jpg")';
	//ok if I can do it with a color i can do it with an image, working backwards
	// memeDiv.style.backgroundColor = 'red';
	memeDiv.classList.add('new-meme');
	memeHolder.appendChild(memeDiv);
	// creating the variables to hold the
	let memeTopTextDiv = document.createElement('div');
	let memeTopTextHeader = document.createElement('h2');
	let memeBottomTextDiv = document.createElement('div');
	let memeBottomTextHeader = document.createElement('h2');

	memeTopTextDiv.classList.add('meme-text-top');
	memeBottomTextDiv.classList.add('meme-text-bottom');
	//NICE I AM ABLE TO PUT IN THE DIV WITH THE TEXT WHERE I WANT IT TO GO AND ALL I NEED TO DO IS COMPLETE THE BOTTOM ONE AND STYLE NEXT GOOD WORK!!! :)
	memeTopTextHeader.innerText = arr[1];
	memeBottomTextHeader.innerText = arr[2];

	memeDiv.appendChild(memeTopTextDiv);
	memeDiv.appendChild(memeBottomTextDiv);
	memeTopTextDiv.appendChild(memeTopTextHeader);
	memeBottomTextDiv.appendChild(memeBottomTextHeader);

	// let memeBottomTextDiv = document.createElement('div')
};

removeBtn.addEventListener('click', function(e) {
	let complete = document.querySelector('.completed');
	complete.parentNode.removeChild(complete);
});
