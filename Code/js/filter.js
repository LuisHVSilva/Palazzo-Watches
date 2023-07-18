// ****** FILTRO

function abrirFiltro() {
    const filtro = document.getElementById("filtro");    

    filtro.classList.toggle("open");
    filtro.classList.toggle("closed");
}

function fecharFiltro() {
    const filtro = document.getElementById("filtro")    
    filtro.style.display = "none";
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
    var containers = document.getElementsByClassName("container");

    // Se nenhuma opção estiver selecionada, exiba todos os itens
    if (opcoesSelecionadas.length === 0) {
        for (c = 0; t < containers.length; c++) {
            containers[t].style.display = "flex";
        }
        return; // Saia da função para evitar a filtragem adicional
    }

    // Percorra os itens e verifique se cada item tem uma classe correspondente às opções selecionada
    for (var j = 0; j < containers.length; j++) {
        var container = containers[j];
        var temClasse = false;
        for (var k = 0; k < opcoesSelecionadas.length; k++) {
            if (container.classList.contains(opcoesSelecionadas[k])) {
                temClasse = true;
                break;
            }
        }
        // Exiba ou oculte o item com base no resultado da verificação
        if (temClasse) {
            container.style.display = "flex";

        } else {
            container.style.display = "none";
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

// **** IMAGENS
// Abrir e fechar o Menu Responsivo Toggle