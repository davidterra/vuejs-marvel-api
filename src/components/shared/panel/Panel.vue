<template>
  <div class="card" style="width: 18rem">
    <transition name="panel-fade">
      <div v-show="visibled">
        <slot></slot>
      </div>
    </transition>
    <div class="card-body">
      <h5 class="card-title" @dblclick="visibled = !visibled">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <button-panel btnStyle="danger" btnLabel="Excluir" btnType="button" :btnShowMessage="true" @btnFired="remove()"></button-panel>
    </div>
  </div>
</template>

<script>
import ButtonPanel from "../buttonpanel/ButtonPanel.vue";
export default {

  props: ["id", "name", "description"],

  components: { "button-panel": ButtonPanel },

  data() {
    return {
      visibled: true,
    };
  },

  methods: {

    remove() {
      alert(`Removido o herói ${this.name} com o id ${this.id}.`)
    },
  }

};
</script>

<style scoped>
.panel-fade-enter,
.panel-fade-leave-active {
  opacity: 0;
}
.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 2s;
}
</style>