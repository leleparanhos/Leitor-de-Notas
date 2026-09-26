
let pedido = 'Leia o cupom fiscal. Seja LITERAL: copie as letras exatamente como estão na imagem, não invente palavras. Responda em UMA linha separando por |. PARTE 1: Emoji da categoria, <strong>NOME DA LOJA</strong> e a lista de itens. CATEGORIAS: 🛒 Mercado, 🚗 Transporte, 🍔 Comida, 💊 Saúde, 🎉 Lazer, 🏠 Casa, 💸 Outros. REGRAS PARA ITENS: 1) Ignore códigos no início da linha (ex: de "38 CERVEJA" escreva só "CERVEJA"). 2) Ignore linhas de cálculo como "1,000 x R$". 3) Formate os preços sempre com duas casas decimais (ex: mude 6,000 para 6,00). Formato: Item — R$ Valor<br>. PARTE 2: Apenas o NÚMERO do valor total pago, com ponto. Se não encontrar valor total do comprovante, retorne R$ 0,00 para não quebrar o cálculo final. Exemplo: 🍔 <strong>EMPRESA TESTE</strong><br>CERVEJA LONGNECK UN — R$ 6,00<br>GATORADE UN — R$ 4,50<br>MONSTER UN — R$ 8,00<br>REDBULL UN — R$ 10,00<br>SUNDAE UN — R$ 6,50<br>CACHORRO 1 SALSICHA UN — R$ 8,00|43.00';
let total = 0;

function atualizarContadorComprovantes(quantidade) {
    const elementoContador = document.getElementById('contadorcomprovantes');

    if (quantidade === 1) {
        elementoContador.textContent = `${quantidade} comprovante lido`;
    } else {
        elementoContador.textContent = `${quantidade} comprovantes lidos`;
    }
}

async function lerFoto(inputClicado) {
    let foto = inputClicado.files[0];
    let resposta = await puter.ai.chat(pedido, foto);
    let texto = resposta.message.content;
    let partes = texto.split("|");
    console.log(texto);

    const novoComprovante = `
    <div class="comprovante">
        <div class="itens">${partes[0]}</div>
        <div class="totalnota">TOTAL DA NOTA: R$ ${partes[1]}</div>
    </div>
    `;
    
    document.querySelector(".lista").insertAdjacentHTML('afterbegin', novoComprovante);


    let valorLido = Number(partes[1]);

    if (!isNaN(valorLido)) {
        total += valorLido;
    } else {
        console.warn("Aviso: A IA devolveu um valor inválido que não pôde ser somado:", partes[1]);
    }

    document.querySelector(".totalgasto").innerHTML = "R$ " + total.toFixed(2);

    let quantidadeNaTela = document.querySelectorAll('.comprovante').length;

    atualizarContadorComprovantes(quantidadeNaTela);
}
