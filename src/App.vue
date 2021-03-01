<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html, body { width: 100vw; height: 100vh; font-size: 62.5%; }

* { padding: 0; margin: 0}
* { padding: 0; margin: 0; box-sizing: border-box; }

input { font-size: 100%;}

.centered { text-align: center; }
.lefted { text-align: left; }
.righted { text-align: right; }

p { text-align: left; margin: 2px; padding: 2px; }

#app {
  width: 100vw;
  height: 100vh;
  font-size: 1.6rem;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #232323;
  background-color: #fff;
  margin: 0px auto;
  padding-bottom: 180px;
}

.home { 
  width: 100vw; 
  margin: 0 10vw auto;
}

.border-radius {
  border-radius: 20%;
}

.border-thickness-sm {
  border: 5px;
  border-style: solid;
}

.border-thickness-md {
  border: 10px;
  border-style: solid;
}

.border-thickness-lg {
  border:15px;
  border-style: solid;
}

.card-mini {
  width: 10vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
