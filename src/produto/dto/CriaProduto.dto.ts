import { IsNumber, IsString, MinLength } from "class-validator";

export class CriaProdutoDTO {

    @IsString({ message: 'O nome do produto deve ser uma palavra' })
    @MinLength(3, { message: 'O nome deve ter 3 ou mais letras' })
    nome: string;

    @IsString({ message: 'O nome da categoria deve ser uma palavra' })
    categoria: string;

    @IsNumber(undefined, { message: 'A quantidade deve ser um número' })
    quantidade: number;

    @IsNumber(undefined, { message: 'O preço deve ser um número' })
    preco: number;
}