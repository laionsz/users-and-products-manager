import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { EmailEunico } from "../validacao/email-e-unico.validator";


export class AtualizaUsuarioDTO {

    @IsString({ message: 'O nome não pode estar vazio' })
    @IsOptional()
    nome: string;

    @IsEmail(undefined, { message: 'O email não é válido' })
    @EmailEunico({ message: 'Já existe um usuário com esse email' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'A senha tem quer ter pelo menos 6 caracteres' })
    @IsOptional()
    senha: string


}