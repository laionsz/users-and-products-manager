import { Injectable } from "@nestjs/common";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository {
    private produtos: ProdutoEntity[] = [];

    async salvar(CriaProduto: ProdutoEntity) {
        this.produtos.push(CriaProduto);
    }

    async listar() {
        return this.produtos;
    }

    private buscaPorId(id: string) {
        const possivelProduto = this.produtos.find(
            usuarioSalvo => usuarioSalvo.id === id
        )
        if (!possivelProduto) {
            throw new Error('Usuário não existe');
        }

        return possivelProduto;
    }
    async atualiza(id: string, dadosDeAtualizacao: Partial<ProdutoEntity>) {
        const produto = this.buscaPorId(id);

        Object.entries(dadosDeAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }

            produto[chave] = valor;
        });

        return produto;
    }

    async deleta(id: string) {
        const produto = this.buscaPorId(id);
        this.produtos = this.produtos.filter(
            produtoSalvo => produtoSalvo.id !== id
        );

        return produto;
    }

}