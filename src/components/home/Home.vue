<template>
  <div>
    <nav-header></nav-header>
    <section class="jumbotron text-center">
      <div class="container">
        <div class="input-group input-group-lg">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg"
              ><b-icon-funnel></b-icon-funnel
            ></span>
          </div>
          <input
            type="search"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Digite aqui o nome do herói"
            v-on:input="filter = $event.target.value"
          />
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div v-for="hero in heroesByFilter" :key="hero.id" class="col">
            <card-panel
              :id="hero.id"
              :name="hero.name"
              :description="hero.description"
            >
              <img
                class="card-img-top"
                :src="hero.thumbnail"
                :alt="hero.name"
              />
            </card-panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
import Header from "../shared/header/Header.vue";
import Panel from "../shared/panel/Panel.vue";

const PRIVATE_KEY = process.env.VUE_APP_PRIVATE_KEY;
const PUBLIC_KEY = process.env.VUE_APP_PUBLIC_KEY;
const characters = ["wolverine", "iron man", "hulk"];

export default {
  components: {
    "card-panel": Panel,
    "nav-header": Header,
  },

  data() {
    return {
      title: "Heroes",
      heroes: [],
      filter: "",
    };
  },

  created() {
    characters.forEach(this.getHero);
  },

  computed: {
    heroesByFilter() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), "i");
        return this.heroes.filter((hero) => exp.test(hero.name));
      } else {
        return this.heroes;
      }
    },
  },

  methods: {
    getHero(name) {
      var ts = new Date().getTime();
      var hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

      var url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}&name=${name}`;

      this.$http
        .get(url)
        .then((response) => response.json())
        .then(
          (data) => {
            let char = data.data.results.map((item) => {
              const character = {};
              character.id = item.id;
              character.name = item.name;
              character.description = item.description;
              character.thumbnail =
                item.thumbnail.path + "." + item.thumbnail.extension;
              return character;
            });

            this.heroes.push(char[0]);
          },
          (err) => console.log(err)
        );
    },
  },
};
</script>

<style>
</style>
