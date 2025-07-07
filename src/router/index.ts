import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import FormulaireView from '@/views/FormulaireView.vue'
import PreviewView from '@/views/PreviewView.vue'
import TextWithAIView from '@/views/TextWithAIView.vue'

const routes: Array<RouteRecordRaw> = [
    {
     path: '/',
     component: TextWithAIView
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
     path: '/withai',
     name: 'TextWithAIView',
     component: TextWithAIView
   },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router