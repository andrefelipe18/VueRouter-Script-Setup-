#  VueJS - Projeto de estudo do VueRouter e Typescript

## Project setup
```
npm install
```

### Compila e recarrega para desenvolvimento, criando um servidor local
```
npm run serve

json-server --watch db.jso
```

### Compila e minifica para produção
```
npm run build
```

### Estrutura do projeto

Dentro da pasta ./src possui toda a estrutura do projeto, _todo diretório possui um arquivo index.ts que é o arquivo de exportação do diretório, facilitando a importação dos componentes._

- App.vue: Componente principal da aplicação, responsável por carregar os demais componentes, ele contem um router-view que é responsável por renderizar os componentes Site, Login e Home

- scaffold.vue: Componente esqueleto para otimizar a criaçao de novos componentes

- ./components: Pasta com os componentes da aplicação

- ./views: Pasta com os componentes view da aplicação, sendo eles o Home, Login e Site

- ./router: Pasta com os arquivos de configuração do VueRouter

- ./services: Pasta com funções reutilizáveis de chamadas de API

#### Arquivos Individuais (./src)
- App.vue: Componente principal da aplicação, responsável por carregar os demais componentes, ele contem um router-view que é responsável por renderizar os componentes Site, Login e Home

- main.ts: Arquivo principal da aplicação, responsável por carregar fazer a instanciação do Vue a configuração do VueRouter e carregar o componente App.vue

- scaffold.vue: Componente esqueleto para otimizar a criaçao de novos componentes

- shims-vue.d.ts: Arquivo de configuração do TypeScript

##### Diretório ./components/dashboard

- **./components/dashboard/Dashboard.vue:** Componente de dashboard, não possui funcionalidade, serve apenas para compor o projeto

##### Diretório ./components/servicos

- **./components/servicos/Indicadores.vue** Componente de indicadores, não possui funcionalidade, serve apenas para compor o projeto, é renderizado no componente Servicos.vue como router-view nomeado

- **./components/servicos/Opcoes.vue** Componente de opções, não possui funcionalidade, serve apenas para compor o projeto, é renderizado no componente Servicos.vue como router-view nomeado

- **./components/servicos/Servico.vue** Componente de exibição de um serviço, é renderizado no componente Servicos.vue como router-view padrão

- - Possui funcionalidade de exibir os dados de um serviço através de uma chamada de API, e possui um watch observando a mudança de rota para atualizar o componente com os dados do serviço

- **./components/servicos/Servicos.vue** Componente de listagem de serviços, é renderizado no componente Home.vue, possui funcionalidade de exibir os serviços através de uma chamada de API

##### Diretório ./components/vendas

- **./components/vendas/Contratos.vue** Componente de contratos é renderizado no componente Vendas.vue, possui funcionalidade de exibir os contratos através de uma chamada de API
- - Possui a declaração de interface de contrato que contem as interfaces de Lead e Serviço para serem utilizadas no relacionamento de dados vindo do servidor

- **./components/vendas/Lead.vue** Componente de lead unico que é recebido o id como parametro da rota e utilizado como prop(configurado no arquivo de rotas), possui funcionalidade de exibir os dados de um lead através de uma chamada de API
- - Possui a funcionalidade de atualizar os dados de um lead através de uma outra funçao de chamada de API

- **./components/vendas/Leads.vue** Componente de listagem de leads. Realiza uma chamada de API para obter a lista de leads e exibe as informações na forma de uma tabela.

- **./components/Vendas.vue** Componente principal responsável pela seção de vendas. Ele exibe o título "Vendas" e inclui uma `router-view` para renderizar os componentes filhos correspondentes às rotas de vendas.

- **./components/VendasPadrao.vue** Componente de exibição padrão para a seção de vendas. É renderizado na rota vazia no router para ser exibido por padrão no `router-view` do componente `Vendas.vue`. Exibe informações sobre leads e contratos em forma de cartões.

##### Diretório ./router

- **./router/index.ts** Arquivo de configuração do VueRouter, contem a configuração das rotas da aplicação, vale ressaltar alguns pontos como:

- - A função `createWebHistory` é importada do pacote `vue-router` e usada para criar o modo de histórico baseado em histórico da web.

- - A rota `/:catchAll(.*)*` é definida para lidar com todas as URLs que não correspondem a nenhuma rota definida anteriormente. Essa rota é chamada de "catch all" e permite lidar com páginas não encontradas ou realizar redirecionamentos específicos.

- - O uso de `props: true` na rota `/home/vendas/leads/:id` permite passar o parâmetro `id` como prop para o componente `Lead`. Isso facilita o acesso ao parâmetro dentro do componente.

- - O lazy loading é utilizado na rota `/home/dashboard` através do uso da função `import`. Em vez de importar o componente diretamente, é feito o carregamento dinâmico do componente somente quando necessário. Isso melhora o desempenho da aplicação, carregando os componentes sob demanda.

##### Diretório ./services

- **./services/getApi.ts** O arquivo exporta a função getApi, que é responsável por realizar chamadas de API utilizando a biblioteca Axios. Ela recebe dois parâmetros: endpoint e params. O parâmetro endpoint indica o endpoint da API a ser chamado, enquanto o parâmetro params pode ser um número ou um booleano, sendo um parâmetro opcional para a chamada de API.

- **./services/updateLead.ts** O arquivo updateLead.ts contém a implementação da função updateLead, responsável por atualizar os dados de um lead por meio de uma chamada de API usando o método HTTP PUT. A função recebe os seguintes parâmetros: idLead (número), nome (string) e telefone (string), representando o ID do lead a ser atualizado, o novo nome e o novo telefone.

#### Diretório ./views

- **./views/Home.vue** Componente principal da aplicação, responsável por carregar os demais componentes, ele contem um router-view que é responsável por renderizar os componentes que podem ser acessados através do menu lateral

- **./views/Login.vue** Componente de login, possui funcionalidade de realizar o login para acessar a aplicação (Home.vue)

- **./views/Site.vue** Componente inicial(Rota: '/') da aplicação, sua funcionalidade é apenas exibir um formulário falso e ter um link que redireciona para a rota '/login'