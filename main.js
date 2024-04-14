const form = document.getElementById('download-form');
const urlInput = document.getElementById('url-input');
const button = document.getElementById('download-button');
const cleanedHtmlContainer = document.getElementById('cleaned-html');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const url = urlInput.value;

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const cleanedHtml = html.replace(/filter:\s*blur\(\d+px\)\s*!important;/g, '');

      const cleanedHtmlElement = document.createElement('div');
      cleanedHtmlElement.innerHTML = cleanedHtml;
      cleanedHtmlContainer.appendChild(cleanedHtmlElement);
    })
    .catch(error => {
      console.error('Error downloading HTML:', error);
    });
})
