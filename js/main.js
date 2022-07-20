var slicedMovies = movies.slice(0,10);

var elWrapper = document.querySelector(".card__wrapper");

function renderMovies(array, wrapper){
  wrapper.innerHTML = null;
  
  // for (let i = 0; i < array.length; i++){
  //   var newH5= document.createElement("h5");
  //   newH5.textContent = array[i].Title;
  //   newH5.classList =  "card-title text-truncate";
  //   newH5.setAttribute("id",i);
    
  //   var newWrapperDiv = document.createElement("div");
  //   newWrapperDiv.classList = "card-body";
  //   newWrapperDiv.appendChild(newH5);
    
  //   var newImg = document.createElement("img");
  //   newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
  //   newImg.classList = "card-img-top";
    
  //   var newDivCard = document.createElement("div");
  //   newDivCard.classList = "card h-100";
    
  //   newDivCard.appendChild(newImg);
  //   newDivCard.appendChild(newWrapperDiv);
    
  //   var newCardWrapper = document.createElement("div");
  //   newCardWrapper.classList = "col mb-3";
    
  //   newCardWrapper.appendChild(newDivCard);
    
  //   wrapper.appendChild(newCardWrapper);
  // }

  for (var item of array ){
    var newH5= document.createElement("h5");
    newH5.textContent = item.Title;
    newH5.classList =  "card-title text-truncate";
    newH5.setAttribute("id",item);
    
    var newWrapperDiv = document.createElement("div");
    newWrapperDiv.classList = "card-body";
    newWrapperDiv.appendChild(newH5);
    
    var newImg = document.createElement("img");
    newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
    newImg.classList = "card-img-top";
    
    var newDivCard = document.createElement("div");
    newDivCard.classList = "card h-100";
    
    newDivCard.appendChild(newImg);
    newDivCard.appendChild(newWrapperDiv);
    
    var newCardWrapper = document.createElement("div");
    newCardWrapper.classList = "col mb-3";
    
    newCardWrapper.appendChild(newDivCard);
    
    wrapper.appendChild(newCardWrapper);
  }

}

renderMovies(slicedMovies , elWrapper);


// console.log(newUL);
