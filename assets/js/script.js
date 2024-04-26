'use strict';

// Função de alternância de elemento
const elementToggleFunc = function(elem) 
{
  elem.classList.toggle("active");
};

// Variáveis da barra lateral
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Funcionalidade de alternância da barra lateral para dispositivos móveis
sidebarBtn.addEventListener("click", function() 
{
  elementToggleFunc(sidebar);
});

// Variáveis de depoimentos
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Variável do modal
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Função de alternância do modal
const testimonialsModalFunc = function() 
{
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Adicionar evento de clique a todos os itens modais
for (let i = 0; i < testimonialsItem.length; i++) 
{
  testimonialsItem[i].addEventListener("click", function() 
  {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

// Adicionar evento de clique ao botão de fechar o modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Variáveis de seleção personalizada
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function() 
{
  elementToggleFunc(this);
});

// Adicionar evento a todos os itens de seleção
for (let i = 0; i < selectItems.length; i++) 
{
  selectItems[i].addEventListener("click", function() 
  {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Variáveis de filtro
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function(selectedValue) 
{
  for (let i = 0; i < filterItems.length; i++) 
  {
    if (selectedValue === "all") 
    {
      filterItems[i].classList.add("active");
    } 
    else if (selectedValue === filterItems[i].dataset.category) 
    {
      filterItems[i].classList.add("active");
    } 
    else 
    {
      filterItems[i].classList.remove("active");
    }
  }
};

// Adicionar evento a todos os botões de filtro para telas grandes
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) 
{
  filterBtn[i].addEventListener("click", function() 
  {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Variáveis do formulário
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Adicionar evento a todos os campos de entrada do formulário
for (let i = 0; i < formInputs.length; i++) 
{
  formInputs[i].addEventListener("input", function() 
  {
    // Verificar validação do formulário
    if (form.checkValidity()) 
    {
      formBtn.removeAttribute("disabled");
    } 
    else 
    {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Variáveis de navegação de página
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Adicionar evento a todos os links de navegação
for (let i = 0; i < navigationLinks.length; i++) 
{
  navigationLinks[i].addEventListener("click", function() 
  {
    for (let i = 0; i < pages.length; i++) 
    {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) 
      {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } 
      else 
      {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
