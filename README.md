Finalizei o curso de criação de API com o NestJS usando typescript, pela instituição Alura. Com isso, criei minha própria API, a fim de fixar o conteúdo.


Introduzindo, criei uma **API com os métodos CRUD** para criação de usuarios e produtos. 
Há 2 rotas fixas; **'/usuarios'** e **'/produtos'**
Ao criar um usuário ou produto, automatizei para que seja atruibuído um id gerado automaticamente. Também criei arquivos .dto para asegurar que o produto ou usuário esteja de acordo com o a formatação padrão da aplicação. Adicionei também a funcionalidade de verificar se um produto ou usuário existe pelo id informado na requisição.
Além disso, usando a biblioteca class-validator e o class-transform, **criei** um validator e garanti que não seja possível criar um usuário com um email existente no banco (neste caso, um arquivo repository que fica salvo na memória enquanto a aplicação está sendo executada). <br>


Para criar um usuário ou produto, é necessário a requisição **Post** e no corpo usar o JSON <br>
{<br>
"nome": **string**,<br>
"email": **email**,<br>
"senha": **string**<br>
}<br>
para usuarios
<br>
<br>
{ <br>
"nome": **string**, <br>
"categora": **string**, <br>
"quantidade": **number**, <br>
"preco": **number**<br>
}<br>
para produtos
<br><br>
Para atualizar o usuario ou produto, é necessário fazer a requisição **Put** na rota desejada, com o id.
<br> Exemplo: localhost:3000/usuarios/:id 
<br><br>
Para deletar o usuario ou produto, é necessário fazer a requisição **Delete** na rota desejada também com o id.
<br> Exemplo: localhost:3000/produtos/:id 
<br><br>
Criar esta API me fez entender alguns conceitos de **MVC**, como o **app.module**, e os **controllers** de cada entidade. Compreendi sobre como o arquivo repository (ou service) obtem os **métodos responsáveis por criar, ler, atualizar ou deletar**.

Esta é a minha primeira API, como pode ver, é bem simples. Tenho noção que posso não estar seguindo todos os padrões esperado, mas bem como disse, esse é apenas o começo estou satisfeito por ser minha primeira API. Posteriormente, penso em evolui-la com um banco de dados, criptografia na senha e consumi-la.
