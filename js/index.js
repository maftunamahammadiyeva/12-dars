const elMoviesList = document.querySelector(".movies__list");
const elResult =document.querySelector(".result");

elResult.textContent = movies.length

for (let movie of movies){
//creat elements
const item = document.createElement ("li");
const image = document.createElement ("img");
const wrapper = document.createElement("div");
const title = document.createElement("h5");
const descYear = document.createElement("p");
const desc = document.createElement("p");
const link = document.createElement("a");
const buttonModal =document.createElement("button");
const modalFade = document.createElement("div");
const modalDialog = document.createElement("div");
const modalBody = document.createElement("div");
const modalButton =document.createElement("button");



//setAttribut
item.setAttribute("class","card mb-2");
item.style.width="18rem";
image.setAttribute("class", "card-img-top");
image.setAttribute("src", movie.smallThumbnail);
wrapper.setAttribute("class", "card-body");
title.setAttribute("class", "card-title");
title.textContent= movie.title;
descYear.setAttribute("class", "card-text")
descYear.textContent = movie.year;
desc.setAttribute("class","card-text");
desc.textContent= movie.imdbRating;
link.setAttribute("href", `https://www.youtube.com/results?search_query= ${movie.bigThumbnail}`);
link.setAttribute("class", "btn btn-outline-primary");
link.textContent= "Watch Trailer more";
buttonModal.setAttribute("class", "btn btn-outline-primary");
buttonModal.setAttribute("data-bs-toggle", "modal");
buttonModal.setAttribute("data-bs-target", "#exampleModal");
buttonModal.textContent="More info";
modalFade.setAttribute("class","modal fade");
modalFade.setAttribute("aria-labelledby","exampleModalLabel");
modalFade.setAttribute("aria-hidden","true");
modalFade.setAttribute("tabindex","-1");
modalDialog.setAttribute("class", "modal-dialog")
modalButton.setAttribute("class", "btn-close");
modalButton.setAttribute("data-bs-dismiss", "modal");
modalButton.setAttribute("aria-label", "Close");
modalBody.setAttribute("class", "modal-body");
modalBody.textContent=movie.summary;





//Append

elMoviesList.appendChild(item);
item.appendChild(image);
item.appendChild(wrapper);
wrapper.append(title);
wrapper.appendChild(descYear);
wrapper.appendChild(desc);
wrapper.appendChild(link);
wrapper.appendChild(buttonModal);
wrapper.appendChild(modalFade);
modalFade.append(modalDialog);
modalDialog.appendChild(modalBody);
modalDialog.appendChild(modalButton);



}