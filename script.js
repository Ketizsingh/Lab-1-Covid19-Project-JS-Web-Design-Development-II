function error_logg(message) {
  
  document.getElementById("error_message").style.display = 'block';
  document.getElementById("error_message").innerHTML = message;

}

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}