const generatorForm = document.getElementById('generator-form');
const sectionResult = document.getElementById('section-result');

generatorForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  e.stopPropagation();

  const { number, stutter, face, action, lorem } = generatorForm;

  const url = `/api/paragraphs?number=${number.value}&stutter=${stutter.value}&face=${face.value}&action=${action.value}&lorem=${lorem.checked}&format=html`;
  const res = await fetch(url);
  const html = await res.text();

  sectionResult.innerHTML = '<h1>Result:</h1>' + html;
});
