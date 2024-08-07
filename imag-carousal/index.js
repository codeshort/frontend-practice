const itemContainer = document.getElementById("itemContainer");

const handlePrevClick = () =>  {
  itemContainer.scrollLeft-=280;
}

const handleNextClick = () =>  {
  itemContainer.scrollLeft+=280;
}

const prevButton = document.getElementById("prevButton");
console.log(prevButton);
prevButton.addEventListener('click', handlePrevClick);

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener('click', handleNextClick);