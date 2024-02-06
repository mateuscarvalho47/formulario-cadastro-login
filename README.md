# Formulário de Cadastro

Este projeto é um simples formulário de cadastro construído com HTML, CSS e JavaScript.

## Campos do Formulário

O formulário inclui os seguintes campos:

- **Nome**: Campo para inserir o nome do usuário.
- **E-mail**: Campo para inserir o endereço de e-mail do usuário. Usando o type email para garantir que o input seja do tipo correto
- **Telefone**: Campo para inserir o número de telefone do usuário. Este campo possui uma máscara para garantir que o número de telefone seja inserido no formato correto.
- **CPF**: Campo para inserir o CPF do usuário. Este campo possui uma máscara para garantir que o cpf seja inserido no formato correto.
- **Senha**: Campo para inserir a senha do usuário. usando o type Password para garantir que o input seja do tipo correto

Todos eles usam required, o que faz com que não possam ser enviados em branco.

## Funcionalidades cadastro.js

O código JavaScript fornece as seguintes funcionalidades:

- **Formatação do CPF**: O campo CPF é formatado automaticamente à medida que o usuário digita, garantindo que o CPF seja sempre exibido no formato correto (xxx.xxx.xxx-xx).
- **Formatação do Telefone**: O campo Telefone é formatado automaticamente à medida que o usuário digita, garantindo que o número de telefone seja sempre exibido no formato correto ((xx) xxxxx-xxxx).
- **Exibição de Dados**: Quando o formulário é enviado, os dados inseridos pelo usuário são exibidos em um alerta.

## Funcionalidades login.js
- **Exibição de Dados**: Quando o formulário é enviado, os dados inseridos pelo usuário são exibidos em um alerta.

## Como Usar
Insira todos os dados solicitados no formulário cadastro.html e clique em enviar, após isso será mostrado um alerta com todos os dados (O mesmo comportamento acontece com a login.html) 

Use o botão na parte superior direita do conteiner do formulário que alterna entre login e cadastro (Caso esteja em login o botão vai para página de cadastro e caso esteja em cadastro o botão leva para página de login)


