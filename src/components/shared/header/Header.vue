<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">            
      <a class="navbar-brand" href="#">        
      <strong>Heroes</strong>
      </a>      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">          
          <li class="nav-item" v-for="route in routes" :key="route.path">
            <router-link class="nav-link" :to="route.path ? route.path : '/'">{{ route.title }}</router-link>
          </li>          
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { routes } from '../../../routes';

export default {

  data() {
    return {
      routes
    }
  }

};
</script>

<style>
</style>