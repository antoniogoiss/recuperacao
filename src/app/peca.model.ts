export class Peca{
    public cod: string
    public descricao: string
    public tipo: string
    public preco: string
    public qtd: number
    public loja: string

    constructor(cod, descricao, tipo, preco, qtd, loja){
        this.cod = cod
        this.descricao = descricao
        this.tipo = tipo
        this.preco = preco
        this.qtd = qtd
        this.loja = loja
    }
}