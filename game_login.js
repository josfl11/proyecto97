// Crea la función addUser()
function addUser() {
  // Obtén el valor del usuario con id player1_name_input y player2_name_input
  document.getElementById(player1_name_input).value
  document.getElementById(player2_name_input).value
  // Almacena los valores en el almacenamiento local
  localStorage.setItem(player1_name_input)
  localStorage.setItem(player2_name_input)
  //Asigna "game_page.html" a window.location
  window.location="game_page.html"
}

