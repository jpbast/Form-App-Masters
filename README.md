# Front-end - Processo Seletivo App Masters

Esta aplicação foi desenvolvida para o processo seletivo da empresa App Masters.

Site da empresa: https://appmasters.io/en/

Link para a aplicação: 

## Funcionamento
A aplicação conta com um formulário com uma série de campos onde o usuário precisa preenchê-los. Após preencher os campos, quando o usuário envia o formulário, é feito uma consulta numa API fornecida para o processo de seleção, que retorna se existem campos inválidos ou não.

Os campos que estiverem inválidos são sinalizados na tela informando qual o erro. Caso esteja tudo certo, o formulário é enviado e uma mensagem é mostrada na tela.

Durante as requisições às APIs, é mostrado na tela um símbolo de *loading* enquanto o usuário aguarda.

### CEP
O campo de CEP possui um funcionamento um pouco diferente dos demais. Quando ele é preenchido, a aplicação realiza uma consulta na API [ViaCEP](https://viacep.com.br/) que nos informa se o CEP inserido é válido. Neste caso, toda vez que o CEP for válido, os campos relacionados com o endereço são automaticamente preenchidos e apresentados ao usuário. Por outro lado, sempre que o CEP for inválido, estes campos não aparecem e não são preenchidos. É importante salientar que apenas os campos `Número` e `Complemento` não são preenchidos automaticamente, sendo preciso que o usuário faça isso.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- Axios
- ReactJS
- NextJS
- Context API
- Styled Components