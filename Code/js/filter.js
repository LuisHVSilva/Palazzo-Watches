function abrirFiltro() {
    var overlay = document.getElementById("filtro-overlay");
    overlay.style.display = "flex";
}

function fecharFiltro() {
    var overlay = document.getElementById("filtro-overlay");
    overlay.style.display = "none";
}

function filtrar() {
    // Obtenha todos os checkboxes
    var checkboxes = document.querySelectorAll("#filtro-content input[type='checkbox']");

    // Obtenha as opções selecionadas
    var opcoesSelecionadas = [];
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            opcoesSelecionadas.push(checkbox.value);
        }
    });

    // Obtenha todos os itens a serem filtrados
    var itens = document.getElementsByClassName("item");

    // Se nenhuma opção estiver selecionada, exiba todos os itens
    if (opcoesSelecionadas.length === 0) {
        for (var l = 0; l < itens.length; l++) {
            itens[l].style.display = "block";
        }
        return; // Saia da função para evitar a filtragem adicional
    }

    // Percorra os itens e verifique se cada item tem uma classe correspondente às opções selecionadas
    for (var j = 0; j < itens.length; j++) {
        var item = itens[j];
        var temClasse = false;
        for (var k = 0; k < opcoesSelecionadas.length; k++) {
            if (item.classList.contains(opcoesSelecionadas[k])) {
                temClasse = true;
                break;
            }
        }
        // Exiba ou oculte o item com base no resultado da verificação
        if (temClasse) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    }
}

function selecionarTodos() {
    var checkboxTodos = document.getElementById("checkbox-todos");
    var checkboxes = document.querySelectorAll("#filtro-content input[type='checkbox']:not(#checkbox-todos)");
  
    if (checkboxTodos.checked) {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      });
    } else {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
    }
  
    filtrar(); // Chame a função filtrar() para aplicar o filtro atualizado
  }
  