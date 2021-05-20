const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.hasChildNodes()) {
    let children = Array.from(htmlElement.children);
    
    children.forEach((child) => {
      htmlElement.removeChild(child);
    })
  }

  const stringText = document.createElement("p");
  stringText.textContent = string;
  htmlElement.appendChild(stringText);
};

htmlGenerator('Party Time.', partyHeader);

