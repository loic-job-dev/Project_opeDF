import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FormulaireView from '@/views/FormulaireView.vue'
import PreviewView from '@/views/PreviewView.vue'
import DataFetcher from '@/components/DataFetcher.vue'

const routes: Array<RouteRecordRaw> = [
    {
     path: '/',
     component: FormulaireView
   },
   {
     path: '/formulaire',
     name: 'Formulaire',
     component: FormulaireView
   },
   {
     path: '/preview',
     name: 'PreviewMarkdown',
     component: PreviewView
   },
    {
    path: '/dataFetcher',
    name: 'DataFetcher',
    component: DataFetcher
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


// 🧭 6. Utilisation des routes dans les composants

// 🔗 Navigation
// 
// <template>
//   <div>
//     <router-link to="/">Accueil</router-link>
//     <router-link to="/about">À propos</router-link>
//   </div>
// </template>

// 🧱 Affichage de la vue
//
// <template>
//   <router-view />
// </template>