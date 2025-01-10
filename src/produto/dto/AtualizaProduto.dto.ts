import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class AtualizaProdutoDTO {

    @IsString({ message: 'O nome do produto deve ser uma palavra' })
    @MinLength(3, { message: 'O nome deve ter 3 ou mais letras' })
    @IsOptional()
    nome: string;

    @IsString({ message: 'O nome da categoria deve ser uma palavra' })
    @IsOptional()
    categoria: string;

    @IsNumber(undefined, { message: 'A quantidade deve ser um número' })
    @IsOptional()
    quantidade: number;

    @IsNumber(undefined, { message: 'O preço deve ser um número' })
    @IsOptional()
    preco: number;
}