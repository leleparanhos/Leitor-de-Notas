# 🧾 Leitor de Notas

O Leitor de Notas é uma aplicação web inteligente que ajuda você a controlar suas despesas de forma rápida e automatizada. Chega de digitar item por item: basta tirar uma foto do seu cupom fiscal e deixar a Inteligência Artificial fazer o trabalho duro!

## 🎯 Sobre o Projeto e Minhas Melhorias

Este projeto nasceu originalmente como um desafio do workshop **"Programação com IA do Zero"** ministrado pela **DevClub**. Nome original: “Gasto na Foto”.

No entanto, decidi ir além da proposta inicial da aula. Peguei a base lógica ensinada e **recriei totalmente a Experiência do Usuário (UX) e a Interface (UI)** para deixar a aplicação com um visual muito mais agradável, moderno e profissional.

**O que eu adicionei/melhorei em relação à versão original:**

* **UX Redesenhado:** Interface mais limpa, intuitiva e com um design de alto nível (Dark Mode nativo).

* **Feed Inteligente:** Alterei a lógica de inserção no DOM (`insertAdjacentHTML`) para que os comprovantes mais recentes apareçam sempre no **topo** da tela, melhorando a navegabilidade.

* **Contador Dinâmico:** Implementei um contador em tempo real que pluraliza corretamente a quantidade de comprovantes processados na sessão.

* **Prevenção de Erros (Tratamento de Exceções):** Criei uma camada de segurança com verificação `isNaN` que impede que o cálculo do valor total "quebre" caso a Inteligência Artificial sofra alucinações ou formate os dados incorretamente.

## ✨ Funcionalidades

* **Leitura de Cupons por Imagem:** Upload de fotos ou captura direta pela câmera do celular.

* **Extração com Inteligência Artificial:** Identificação precisa de itens, preços e nome do estabelecimento ignorando "lixos" textuais do cupom.

* **Categorização Automática:** A IA atribui emojis correspondentes à categoria da compra (ex: 🛒 Mercado, 🍔 Comida, 💊 Saúde).

* **Cálculo Dinâmico:** O sistema soma automaticamente os valores totais de cada nota lida e exibe o montante geral.

## 🛠️ Tecnologias Usadas

O projeto foi construído com foco em simplicidade e performance, unindo tecnologias clássicas de front-end com IA moderna:

* **HTML5:** Estrutura semântica.

* **CSS3:** Estilização customizada e responsiva.

* **JavaScript (Vanilla):** Lógica assíncrona (`async/await`), manipulação do DOM e regras de negócio.

* [**Puter.js**](https://puter.com/?utm_source=gemini)**:** API de Inteligência Artificial utilizada para o processamento de Visão Computacional (OCR + LLM) direto no front-end.

## 💻 Como Acessar

Você pode testar o projeto diretamente pelo seu navegador, sem precisar instalar nada!

**Acesse o projeto online:**

$$
https://github.com/leleparanhos/Leitor-de-Nota
$$

*Se desejar rodar o projeto localmente na sua máquina:*

1. Faça o clone deste repositório:

   ```
   git clone https://github.com/leleparanhos/Leitor-de-Nota.git
   
   
   ```

2. Abra a pasta do projeto.

3. Como o projeto utiliza requisições assíncronas, abra o arquivo `index.html` através de uma extensão de Live Server (no VS Code) ou hospede num servidor local simples.

## 📱 Como Usar

1. Acesse a página inicial da aplicação.

2. Clique no botão pontilhado **"Toque para fotografar o comprovante"**.

3. Escolha uma foto da sua galeria ou tire uma na hora.

4. Aguarde alguns segundos enquanto a Inteligência Artificial lê o documento.

5. Pronto! O comprovante aparecerá no topo da tela detalhado, e o seu saldo total e contador serão atualizados.

Desenvolvido com 🩵 e muita dedicação. Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/leticiaferreiraparanhos/)!