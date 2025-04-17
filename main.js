document.addEventListener('DOMContentLoaded', () => {
    // Função de busca para a página de receitas (se necessário)
    const searchInputReceita = document.getElementById('searchInput');

    if (searchInputReceita) {
        searchInputReceita.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const elementosPesquisaveis = document.querySelectorAll('.ingredientes li, .preparo li, .receita-principal h1'); // Ajuste os seletores conforme sua necessidade
            console.log('Termo de busca (receita):', searchTerm);

            elementosPesquisaveis.forEach(elemento => {
                const textoElemento = elemento.textContent.toLowerCase();
                console.log('Texto do elemento (receita):', textoElemento);
                const shouldDisplay = textoElemento.includes(searchTerm);
                // Para mostrar/ocultar a seção inteira da receita, você precisaria subir no DOM até o elemento pai apropriado.
                // A lógica exata dependerá da estrutura do seu HTML de receita.
                // Exemplo simplificado (pode não funcionar perfeitamente dependendo da sua estrutura):
                const receitaContainer = elemento.closest('.receita-principal');
                if (receitaContainer) {
                    receitaContainer.style.display = shouldDisplay ? 'block' : 'none';
                }
            });
        });
    }

    // Efeito hover dinâmico para receitas relacionadas (se houver)
    document.querySelectorAll('.receitas-relacionadas .card-receita').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)'; // Adiciona um efeito de sombra ao levantar
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none'; // Remove a sombra ao voltar
        });
    });
});