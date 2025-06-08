fetch('/detect-smoke', {
  method: 'POST',
  body: imageFile
})
.then(res => res.json())
.then(data => {
  if (data.smoke) { /* show alert */ }
});
