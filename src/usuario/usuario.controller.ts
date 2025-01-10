import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { v4 as uuidv4 } from 'uuid';
import { UsuarioEntity } from "./usuario.entity";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";


@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioRepository: UsuarioRepository) { }

    @Post()
    async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        usuarioEntity.email = dadosDoUsuario.email;
        usuarioEntity.senha = dadosDoUsuario.senha;
        usuarioEntity.nome = dadosDoUsuario.nome;
        usuarioEntity.id = uuidv4();

        this.usuarioRepository.salvar(usuarioEntity)
        return {
            usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
            message: 'usuario criado com sucesso'
        };
    }

    @Get()
    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.listar()
        const usuariosLista = usuariosSalvos.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome
            )
        );

        return usuariosLista;
    };

    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
        const usuarioAtualizado = await this.usuarioRepository.atualiza(id, novosDados)

        return {
            usuario: usuarioAtualizado,
            messagem: 'usuario atualizado com sucesso'
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioRepository.remove(id);

        return {
            usuario: usuarioRemovido,
            messagem: 'usuario removido com êxito'
        }
    }

}