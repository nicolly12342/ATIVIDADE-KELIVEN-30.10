// Dados iniciais padrão
let recados = [
  { id: 1, texto: 'Entregar atividade até sexta', importante: false },
  { id: 2, texto: 'Trazer notebook na próxima aula', importante: true }
];

const inputRecado = document.getElementById('inputRecado');
const listaRecados = document.getElementById('listaRecados');

// Adiciona recado ao pressionar Enter
function verificarEnter(event) {
  if (event.key === 'Enter' && inputRecado.value.trim() !== '') {
    const novoRecado = {
      id: Date.now(),
      texto: inputRecado.value.trim(),
      importante: false
    };
    recados.push(novoRecado);
    inputRecado.value = '';
    renderizarRecados();
  }
}

// Alterna o status de importante
function alternarImportante(id) {
  recados = recados.map(recado => {
    if (recado.id === id) {
      return { ...recado, importante: !recado.importante };
    }
    return recado;
  });
  renderizarRecados();
}

// Remove o recado da lista
function removerRecado(id) {
  recados = recados.filter(recado => recado.id !== id);
  renderizarRecados();
}

// Renderiza a lista na tela
function renderizarRecados() {
  listaRecados.innerHTML = '';

  recados.forEach(recado => {
    const divItem = document.createElement('div');
    divItem.className = `item-recado ${recado.importante ? 'destaque' : ''}`;

    divItem.innerHTML = `
      <div class="texto-recado">${recado.texto}</div>
      <div class="acoes">
        <button class="btn btn-importante" onclick="alternarImportante(${recado.id})">
          ${recado.importante ? 'Desmarcar' : 'Importante'}
        </button>
        <button class="btn btn-remover" onclick="removerRecado(${recado.id})">
          Remover
        </button>
      </div>
    `;

    listaRecados.appendChild(divItem);
  });
}

// Inicializa a exibição dos recados
renderizarRecados();