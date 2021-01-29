import Add from './components/add/Add.vue'
import Home from './components/home/Home.vue';

export const routes = [
    {path: '', component: Home, title: 'Home'},
    {path: '/add', component: Add, title: 'Cadastro'}
];