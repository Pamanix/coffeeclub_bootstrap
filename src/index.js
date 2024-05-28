import './styles.scss';

// Titulo
document.addEventListener('DOMContentLoaded', function () {
  const h1Element = document.querySelector('h1');
  if (h1Element) {
    setTimeout(function () {
      h1Element.classList.add('h1-normal');
    }, 1000); // 1000 milissegundos = 1 segundo
  }

  // Função para alternar a visibilidade do dropdown
  function toggleDropdown(id) {
    const element = document.getElementById(id);
    if (element) {
      element.style.display =
        element.style.display === 'block' ? 'none' : 'block';
    }
  }

  // Adiciona eventos de clique para os botões de dropdown
  const dropdownButtons = [
    { buttonId: 'btnTiposCafe', menuId: 'menuCafe' },
    { buttonId: 'btnTiposGraos', menuId: 'menuGraos' },
    { buttonId: 'btnCategorias', menuId: 'menuCategorias' },
  ];

  dropdownButtons.forEach(({ buttonId, menuId }) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => toggleDropdown(menuId));
    }
  });

  // Fecha o dropdown se o usuário clicar fora dele
  window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-button')) {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      dropdowns.forEach((dropdown) => {
        if (dropdown.style.display === 'block') {
          dropdown.style.display = 'none';
        }
      });
    }
  });

  // Texto
  const h4Elements = document.querySelectorAll('h4.tipos');

  h4Elements.forEach((h4) => {
    h4.addEventListener('mouseover', function () {
      const textoElement = this.nextElementSibling;
      if (textoElement) {
        textoElement.classList.add('mostrar');
      }
    });

    h4.addEventListener('mouseout', function () {
      const textoElement = this.nextElementSibling;
      if (textoElement) {
        textoElement.classList.remove('mostrar');
      }
    });
  });

  // CONTEUDO
  const h3Elements = document.querySelectorAll('h3.caixa');

  h3Elements.forEach((h3) => {
    h3.addEventListener('mouseover', function () {
      const caixaElement = this.nextElementSibling;
      if (caixaElement) {
        caixaElement.classList.add('mostrar');
      }
    });
  });
});

function destacarDia(dia) {
  // Adicione o estilo de destaque ao dia clicado
  const celula = document.querySelector(`td a[href="#"][onclick="destacarDia(${dia})"]`);
  celula.classList.toggle("text-danger"); // Alterne a cor (por exemplo, vermelho)
}