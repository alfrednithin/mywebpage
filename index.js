<!DOCTYPE html>
<html>
<body>
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`);
}
</body>
</html>
