let totalGeral = 0;

let carrinho = [
{
    nomeItem: 'Fone de Ouvido',
    numeroDeItens: 0,
    custoIndividual: 100
},
{

    nomeItem: 'Celular',
    numeroDeItens: 0,
    custoIndividual: 1400

},
{
    nomeItem: 'Oculus VR',
    numeroDeItens: 0,
    custoIndividual: 5000

}
]

function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').valueAsNumber;
    let nomePorduto = produto.split(' - ')[0];
    let valorIndividualProduto = parseInt(produto.split('R$')[1]);
    let valorTotalAddCarrinho = valorIndividualProduto * quantidade;
    totalGeral += valorTotalAddCarrinho;
    let i = 0;;
    document.getElementById('quantidade').value = null

    switch (nomePorduto){
        case 'Fone de Ouvido' : i = 0 ; break;
        case 'Celular' : i = 1; break;
        case 'Oculus VR' : i = 2; break;
        default: break;
    }

    carrinho[i].numeroDeItens += quantidade;

    let icarrinho = 0;
    let listaNaTela = '';

    while(icarrinho < carrinho.length){
    
       if(carrinho[icarrinho].numeroDeItens > 0){

        listaNaTela += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${carrinho[icarrinho].numeroDeItens}x </span>${ carrinho[icarrinho].nomeItem } <span class="texto-azul">R$${ carrinho[icarrinho].custoIndividual}</span>          
        </section>`;

       }
       icarrinho ++;
    }
    
    document.getElementById('lista-produtos').innerHTML = listaNaTela;

    document.getElementById('valor-total').innerHTML = `${totalGeral.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})}</span>`

}

function limpar(){
    totalGeral = 0;
    i = 0;
    carrinho[0].numeroDeItens = 0
    carrinho[1].numeroDeItens = 0  
    carrinho[2].numeroDeItens = 0
    document.getElementById('lista-produtos').innerHTML = ` <section class="carrinho__produtos__produto">
                    </section>`

    document.getElementById('valor-total').innerHTML = `${totalGeral.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})}</span>`
}

