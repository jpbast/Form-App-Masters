# Front-end - Processo Seletivo App Masters

Esta aplicação foi desenvolvida com Next.js e TypeScript para o processo seletivo da empresa App Masters.

Site da empresa: https://appmasters.io/en/

Link para a aplicação: https://form-app-masters.vercel.app/

## Funcionamento

A aplicação possui um formulário com uma série de campos onde o usuário precisa preenchê-los. Após preencher os campos, quando o usuário envia o formulário, é feito uma consulta numa API fornecida para o processo de seleção, que retorna se existem campos inválidos ou não.

Os campos que estiverem inválidos são sinalizados na tela informando qual o erro. Caso esteja tudo certo, o formulário é enviado e uma mensagem é mostrada na tela.

Caso a API retorne algum erro (status diferente de 200 e 400) quando o formulário é enviado, é mostrado uma mensagem na tela com um botão indicando para o usuário aguardar alguns instantes. Enquanto isso, o formulário fica bloqueado e só pode ser manipulado e enviado novamente após o usuário apertar no botão `Tentar novamente`. Além disso, o formulário também fica bloqueado enquanto aguarda uma requisição feita para qualquer API, mostrando um símbolo de *loading* na tela.

Sobre os estados utilizados, alguns foram criados através do `Context API`, facilitando a organização e a manipulação do código.

Referente à estilização, foi feita com Styled Components. Além disso, a aplicação está responsiva e pode ser acessada por diversos dispositivos.
### CEP

O campo de CEP possui um funcionamento um pouco diferente dos demais. Quando ele é preenchido, a aplicação realiza uma consulta na API [ViaCEP](https://viacep.com.br/) que nos informa se o CEP inserido é válido. Neste caso, toda vez que o CEP for válido, os campos relacionados com o endereço são automaticamente preenchidos e apresentados ao usuário. Por outro lado, sempre que o CEP tiver todos os dígitos e for inválido, estes campos não aparecem e não são preenchidos. É importante salientar que apenas os campos `Número` e `Complemento` não são preenchidos automaticamente, sendo preciso que o usuário faça isso.

## Tecnologias Utilizadas

- TypeScript
- Next.js
- Axios
- Context API
- Styled Components