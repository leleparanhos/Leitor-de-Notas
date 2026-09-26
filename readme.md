# 🧾 Leitor de Notas

O Leitor de Notas é uma aplicação web inteligente que ajuda você a controlar suas despesas de forma rápida e automatizada. Chega de digitar item por item: basta tirar uma foto do seu cupom fiscal e deixar a Inteligência Artificial fazer o trabalho duro!

## 🎯 Sobre o Projeto e Minhas Melhorias

Este projeto nasceu originalmente como um desafio do workshop "Programação com IA do Zero" ministrado pela DevClub. Nome original: “Gasto na Foto”.

No entanto, decidi ir além da proposta inicial da aula. Peguei a base lógica ensinada e recriei totalmente a Experiência do Usuário (UX) e a Interface (UI) para deixar a aplicação com um visual muito mais agradável, moderno, acessível no celular e profissional.

**O que eu adicionei/melhorei em relação à versão original:**

*   **UX Redesenhado:** Interface mais limpa, intuitiva e com um design de alto nível (Dark Mode nativo).
*   **UX Mobile Aprimorado:** Separação clara entre os botões de "📸 Tirar Foto na Hora" (ativando a câmera nativa do celular via `capture="environment"`) e "📁 Abrir Galeria ou Arquivos", resolvendo conflitos comuns em navegadores móveis.
*   **Feedback Visual (Loading State):** Inclusão de um aviso dinâmico de carregamento (⏳) enquanto a IA processa a imagem. Isso evita que o usuário ache que o app travou caso a internet (3G/4G) esteja lenta.
*   **Feed Inteligente:** Alterei a lógica de inserção no DOM (`insertAdjacentHTML`) para que os comprovantes mais recentes apareçam sempre no topo da tela, melhorando a navegabilidade.
*   **Contador Dinâmico:** Implementei um contador em tempo real que pluraliza corretamente a quantidade de comprovantes processados na sessão.
*   **Tratamento de Exceções e Segurança:** 
    *   Criei uma camada de segurança com verificação `isNaN` que impede que o cálculo do valor total "quebre" caso a Inteligência Artificial sofra alucinações ou formate os dados incorretamente.
    *   Adicionei proteção contra fluxos vazios (se o usuário abre a galeria e fecha sem escolher nada, a aplicação reconhece e não gera erros no console).

## ✨ Funcionalidades

*   **Leitura de Cupons por Imagem:** Upload de fotos ou captura direta pela câmera com botões dedicados e otimizados para smartphones.
*   **Extração com Inteligência Artificial:** Identificação precisa de itens, preços e nome do estabelecimento ignorando "lixos" textuais do cupom.
*   **Categorização Automática:** A IA atribui emojis correspondentes à categoria da compra (ex: 🛒 Mercado, 🍔 Comida, 💊 Saúde).
*   **Cálculo Dinâmico:** O sistema soma automaticamente os valores totais de cada nota lida e exibe o montante geral.

## 🛠️ Tecnologias Usadas

O projeto foi construído com foco em simplicidade e performance, unindo tecnologias clássicas de front-end com IA moderna:

*   **HTML5:** Estrutura semântica.
*   **CSS3:** Estilização customizada e responsiva.
*   **JavaScript (Vanilla):** Lógica assíncrona (`async/await`), manipulação do DOM e regras de negócio.
*   **Puter.js:** API de Inteligência Artificial utilizada para o processamento de Visão Computacional (OCR + LLM) direto no front-end.

## 💻 Como Acessar

Você pode testar o projeto diretamente pelo seu navegador, sem precisar instalar nada!

🌐 **Acesse o projeto online ao vivo:**
[https://leleparanhos.github.io/Leitor-de-Notas/](https://leleparanhos.github.io/Leitor-de-Notas/)

🔗 **Repositório oficial:**
[https://github.com/leleparanhos/Leitor-de-Notas](https://github.com/leleparanhos/Leitor-de-Notas)

📱 Como Usar
Acesse a página inicial da aplicação.

Escolha entre clicar em "📸 Tirar Foto na Hora" ou "📁 Abrir Galeria ou Arquivos".

Selecione ou tire a foto do seu cupom fiscal.

Aguarde alguns segundos enquanto a Inteligência Artificial lê o documento (você verá um aviso de carregamento na tela).

Pronto! O comprovante aparecerá detalhado no topo da lista, e o seu saldo total e contador serão atualizados automaticamente.

Desenvolvido com 💜 e muita dedicação. Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/leticiaferreiraparanhos/)!
