# backend_jardim_online

# app.js é o core do sistema, puxando todas as rotas e listando a porta
# quando é feito uma requisição no back end, os dados são enviados primeiros para as Routes
FLUXO : ROUTES > AS ROUTas recebem os dados e passam para os CONTROLLERS.
  CONTROLLERS > Recebem os dados e chamam as validções, para verificar erros ou scripts maliciosos.
  SERVICES > Após acionado as validações, se haver algum serviço ou manipulação de dados e arrays, é chamado os SERVIÇES que são funções      de ajuda.
  MODELS FUNCTIONS > Após ter validado e manipulado o dado, são chamadas as funções de modelo estrutural do banco de dados, como querys de busca e inserções, ou seja, se a requisição for a criação de um usuário, será inserido no banco. Se for uma busca, sera feita um query de retorno
  
