<template lang="">
  <div>
    <div class="pokemon-container">
      <img :src="imgSrc" alt="" class="hidden-pokemon" />
      <img :src="imgSrc" alt="" class="fade-in" v-if="showPokemon" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>
<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.fade-in {
  animation: fadeIn 0.8s;
}
.pokemon-container {
  display: inline-flex;
  justify-content: center;
  height: 200px;
  width: 200px;
}
img {
  height: 200px;
  position: absolute;
  user-select: none;
  --moz-user-select: none;
  --ms-user-select: none;
  --webkit-user-drag: none;
  --webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
