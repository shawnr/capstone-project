<template>        
 <div class="Music">

    <h1>iTunes Music Finder</h1>
    <h2></h2>
<form v-on:submit.prevent="findmusic">
      <input type="text" id="myInput" v-model="artist" placeholder="Search Favorite Artist.." title="Type in a name">
 <p><input type="submit" value="Submit"></p>
</form>


<ul id="results">
  <li v-bind="result in results">
    <span><a v-bind:href="result.artworkUrl30">{{result.trackCensoredName}}</a></span>
   <span><a v-bind:href="result.artistName">{{ result.artistName }}</a></span>
   <span><a v-bind:href="result.releaseDate">{{ result.country }}</a></span>
  </li>
</ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Music",
  data() {
    return {
      results: null,
      errors: [],
      entity: "",
      atribute: "",
      artist: "",
      msg: "Itunes Search"
    };
  },
  methods: {
    findmusic: function() {
      axios
        .get("https://itunes.apple.com/search", {
          params: { term: this.artist, limit: "25" }
        })
        .then(response => {
          this.results = response.data.results;
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  
  }
};
</script> 

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #010a06;
}
</style>