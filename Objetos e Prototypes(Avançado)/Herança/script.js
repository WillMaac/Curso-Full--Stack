function Produto(nome, preco){
this.nome = nome;
this.preco = preco;
}

Produto.prototype.aumento = function(quantidade){
    this.preco += quantidade;
};

Produto.prototype.desconto = function(quantidade){
    this.preco -= quantidade;
};

function Camiseta(nome, preco, cor){
Produto.call(this, nome, preco);
this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Caneca (nome, preco, material, estoque){
    Produto.call(this,nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
get: function (valor){
    return estoque;
},
set: function(valor){
    if(typeof valor !== 'number') return;
    estoque = valor;
}
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;


const camiseta = new Camiseta('Regata', 7.5, 'branca');
const caneca = new Caneca('portin', 10.00, 'Porcelana', 100)

caneca.aumento(20)
camiseta.aumento(100);
console.log(camiseta);
console.log(caneca);

