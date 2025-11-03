import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CadastroView from '@/views/CadastroView.vue'
import LoginView from '@/views/LoginView.vue'
import PagDetalheView from '@/views/PagDetalheView.vue'
import SobreView from '@/views/SobreView.vue'
import PedidoView from '@/views/PedidoView.vue'
import CardapioView from '@/views/CardapioView.vue'
import EditarProdView from '@/views/EditarProdView.vue'
import PerfilClienteView from '@/views/PerfilClienteView.vue'
import PagCarrinhoView from '@/views/PagCarrinhoView.vue'
import RelatorioView from '@/views/RelatorioView.vue'
import AddProdutoView from '@/views/AddProdutoView.vue'
import ProdutosAdmView from '@/views/ProdutosAdmView.vue'
import LocalizacaoView from '@/views/LocalizacaoView.vue'
import AddCategoriaView from '@/views/AddCategoriaView.vue'
import PagFinalizarView from '@/views/PagFinalizarView.vue'
import StatusAdminView from '@/views/StatusAdminView.vue'

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
      path: '/detalhe/:id',
      name: 'detalhe',
      component: PagDetalheView,
      props: true,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView,
    },
    {
      path: '/pedido',
      name: 'pedido',
      component: PedidoView,
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
    },
    {
      path: '/perfil',
      name: 'perfilCliente',
      component: PerfilClienteView
    },
    {
      path: '/cart',
      name: 'carrinho',
      component: PagCarrinhoView
    },
    {
      path: '/relatorio',
      name: 'relatorio',
      component: RelatorioView
    },
    {
      path: '/add',
      name: 'add',
      component: AddProdutoView
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: ProdutosAdmView
    },
    {
      path: '/localizacao',
      name: 'localizacao',
      component: LocalizacaoView
    },
    {
      path: '/addcategoria',
      name: 'categoria',
      component: AddCategoriaView
    },
    {
      path: '/finalizarcompra',
      name: 'finalizar',
      component: PagFinalizarView,
      props: true
    },
    {
      path: '/statusadmin',
      name: 'statusadmin',
      component: StatusAdminView
    },
  ]});

export default router
