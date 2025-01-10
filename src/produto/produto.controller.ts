import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProdutoRepository } from "./produto.repository";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { v4 as uuidv4 } from 'uuid';
import { ProdutoEntity } from "./produto.entity";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";

@Controller('produtos')
export class ProdutoController {

    constructor(private produtoRepository: ProdutoRepository) { }

    @Post()
    async criaProduto(@Body() dadosDoProduto: CriaProdutoDTO) {
        const produtoEntity = new ProdutoEntity();
        produtoEntity.nome = dadosDoProduto.nome;
        produtoEntity.categoria = dadosDoProduto.categoria;
        produtoEntity.preco = dadosDoProduto.preco;
        produtoEntity.quantidade = dadosDoProduto.quantidade;
        produtoEntity.id = uuidv4();

        this.produtoRepository.salvar(produtoEntity);
        return {
            produto: produtoEntity,
            messagem: 'produto cadastrado com sucesso'

        }
    }

    @Get()
    async listaProdutos() {
        return this.produtoRepository.listar();
    }

    @Put('/:id')
    async atualizaProduto(@Param('id') id: string, @Body() novosDados: AtualizaProdutoDTO) {
        const produtoAtualizado = await this.produtoRepository.atualiza(id, novosDados)

        return {
            produto: produtoAtualizado,
            messagem: 'produto atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async deletaProduto(@Param('id') id: string) {
        const produtoDeletado = await this.produtoRepository.deleta(id);

        return {
            produto: produtoDeletado,
            menssagem: 'produto deletado com sucesso'
        }
    }

}