<template lang="">
  <div v-if="!pokemon">
    <h1>Espere por favor....</h1>
  </div>
  <div v-else>
    <h1>Who is this Pokemon?</h1>
    <div>
      <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    </div>
    <div>
      <pokemon-options :pokemons="pokemonArr" @selection="checkAnswer" />
    </div>
    <template v-if="messagePokemon !== ''">
      <h2>{{ messagePokemon }}</h2>
      <div>
        <button @click="newGame">Next -></button>
      </div>
    </template>
  </div>
</template>
<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";

import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemon: null,
      pokemonArr: null,
      showPokemon: false,
      messagePokemon: "",
    };
  },
  methods: {
    async makePokemonArray() {
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemonArr = await getPokemonOptions();
      this.pokemon = this.pokemonArr[rndInt];
    },

    checkAnswer(pokemonId) {
      console.log("Poke Answer", pokemonId);
      this.showPokemon = pokemonId === this.pokemon.id;
      if (this.showPokemon) {
        this.messagePokemon = `Yes! This pokemon is ${this.pokemon.name}`;
      }
    },

    async newGame() {
      this.pokemon = null;
      this.pokemonArr = null;
      this.showPokemon = false;
      (this.messagePokemon = ""), await this.makePokemonArray();
    },
  },
  mounted() {
    this.makePokemonArray();
  },
};
</script>
<style lang=""></style>
