
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  let dogArray = Object.keys(dogs);
  let dogValue = Object.values(dogs);
  let dogLinks = []
  for (let i = 0; i < dogArray.length; i++) {
    const list = document.createElement("li");
    const link = document.createElement("a");
    link.innerHTML = dogArray[i];
    link.href = dogValue[i];
    list.className = "dog-link";
    list.appendChild(link);
    dogLinks.push(list);
  }
  return dogLinks;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator(dogs);
  const dropDown = document.querySelector(".drop-down-dog-list");
  for (let i = 0; i < dogLinks.length; i++) {
    dropDown.appendChild(dogLinks[i]);
  }
}

function removeDogLinks() {
  const dropDown = document.querySelector(".drop-down-dog-list");
  let children = Array.from(dropDown.children);
  children.forEach( (child) => {
    dropDown.removeChild(child);
  });

}

const nav = document.querySelector(".drop-down-dog-nav");
nav.addEventListener("mouseenter", attachDogLinks);
nav.addEventListener("mouseleave", removeDogLinks);
