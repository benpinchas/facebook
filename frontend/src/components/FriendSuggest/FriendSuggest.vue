<template>
  <div class>
    <side-box>
      <span slot="headline">People You May Know</span>
      <span slot="main">
        <suggest-preview v-for="suggest in suggests" :user="suggest" />
      </span>
    </side-box>
  </div>
</template>


<script>
//TODO change cmp name to FriendshipSuggest
//cmpc
import SideBox from "../util/SideBox.vue";
import SuggestPreview from "./SuggestPreview.vue";

export default {
  components: {
    SideBox,
    SuggestPreview
  },
  computed: {
    suggests() {
      console.log(' this.$store.getters.suggests', this.$store.getters.suggests)
      return this.$store.getters.suggests
    }
  },
  async created() {
    this.$store.dispatch({type: 'loadSuggests'})
    this.$store.dispatch({type: 'loadFriendshipUsers'})
  }
};
</script>

<style>
.root-el {
  padding: 10px;
}
header {
  margin-bottom: 10px;
}
</style>








