import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, Login, Site } from "@/views";
import { Vendas, Leads, Contratos, Lead, VendasPadrao } from "@/components/vendas";
import { Servicos, Servico, Opcoes, Indicadores } from "@/components/servicos";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "site",
    component: Site,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [ //Rotas filhas de home
      {
        path: "vendas",
        name: "vendas",
        component: Vendas,
        children: [ //Rotas filhas de vendas
          {path: '', component: VendasPadrao, name: 'vendaspadrao'}, //Rota vazia(default) para renderizar um componente padrão
          {
            path: "leads",
            name: "leads",
            component: Leads,
          }, 
          {
            path: "leads/:id", props: true, //Passando props para a rota
            name: "lead",
            component: Lead,
          },
          {
            path: "contratos",
            name: "contratos",
            component: Contratos,
          }
        ]
      },
      {
        path: "servicos",
        name: "servicos",
        component: Servicos,
        children: [ //Rotas filhas de servicos
          {
            path: ":id",
            name: "servico",
            components: { //Multiplos router-views
              default: Servico,
              opcoes: Opcoes,
              indicadores: Indicadores
            }
          }
       ]
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/components/dashboard/Dashboard.vue"),
      },
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/:catchAll(.*)*",
    name: "notfound",
    component: Site,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
