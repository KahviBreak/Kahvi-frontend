import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroView from '@/views/CadastroView.vue'
import LoginView from '@/views/LoginView.vue'
import PedidoView from '@/views/PedidoView.vue'
import CardapioView from '@/views/CardapioView.vue'
import EditarProdView from '@/views/EditarProdView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: PedidoView
    },
    {
      path: '/cardapio',
      name: 'cardapio',
      component: CardapioView,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView,
    },
    {
      path: '/editarproduto',
      name: 'editar produto',
      component: EditarProdView,
    }
  ],
})

export default router
