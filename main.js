const form = document.getElementById('download-form');
const urlInput = document.getElementById('url-input');
const button = document.getElementById('download-button');
const cleanedHtmlContainer = document.getElementById('cleaned-html');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = urlInput.value;

  fetch(url)
    .then(response => response.text())
    .then(html => {
      const cleanedHtml = html.replace(/filter:\s*blur\(\d+px\)\s*!important;/g, '');
      const answer = cleanedHtml.match(/<article[^>]*>[\s\S]*<\/article>/g);


      const cleanedHtmlElement = document.createElement('div');
      cleanedHtmlElement.innerHTML = answer;
      cleanedHtmlContainer.appendChild(cleanedHtmlElement);
      errorMessage.style.display = 'none';
    })
    .catch(error => {
      errorMessage.textContent = 'Verifique a URL e tente novamente';
      errorMessage.style.display = 'block';
    });
});
