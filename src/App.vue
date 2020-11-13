<template>
  <v-app>
    <v-app-bar
            app
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Un restau dans le quartier</v-toolbar-title>
      <v-text-field
              label="Chercher"
              class="ml-8"
              style="max-width: 350px"
              prepend-inner-icon="mdi-magnify"
              outlined
              rounded
              dense
              hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn>Se connecter</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
