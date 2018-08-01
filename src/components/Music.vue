<template>        
 <div class="Music">

    <h1>iTunes Music Finder</h1>
    
<form v-on:submit.prevent="findmusic">
      <input type="text" id="myInput" v-model="artist" placeholder="Search Favorite Artist.." title="Type in a name">
 <p><input type="submit" value="Submit"></p>
</form>


<ul id="results">
  <li v-for="result in results">
    <span><img v-bind:src="result.artworkUrl100"></span>
    <div><span><a v-bind:href="result.trackViewUrl" target="_blank">{{result.trackCensoredName}}</a></span> -
   <br><span><a v-bind:href="result.artistViewUrl" target="_blank">{{ result.artistName }}</a></span></div>
 
<div>
<audio controls preload="none" style="width:480px;">
 <source  v-bind:src="result.previewUrl" />
 </audio>
 </div>
   
   
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
      results: [],
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
          params: { term: this.artist, limit: "15" }
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