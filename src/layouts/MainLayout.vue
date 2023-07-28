<template>
  <v-layout>
    <v-app-bar class="layout__header" color="#FCFCFE">
      <v-app-bar-nav-icon variant="plain" @click="toggleDrawer"></v-app-bar-nav-icon>
      <div class="logo">
        <img class="IsoType" :src="Logo" />
      </div>

      <div class="welcome">
        <h4 class="mt-5">Welcome, bruno</h4>
        <h2>Good Morning!</h2>
      </div>
      <v-spacer></v-spacer>

      <div class="navbar__icono">
        <div class="search__container">
          <input type="text" placeholder="Search" required />
          <div class="search__button">
            <v-btn class="search__icon" prepend-icon="mdi-magnify"></v-btn>
          </div>
        </div>
        <v-icon class="navbar__iconoUno" icon="mdi-bell"></v-icon>
        <v-icon class="navbar__iconoDos" icon="mdi-account-circle"></v-icon>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="navigation"
      prepend-icon="$vuetify"
      expand-on-hover
      rail
      permanent
    >
      <v-list density="compact" class="navigation__list">
        <div class="navigation__itemUno">
          <v-list-item prepend-icon="mdi-home" title="Dashboard" value="Dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-shopping" title="Orders" value="Orders"></v-list-item>
          <v-list-item prepend-icon="mdi-truck" title="Products" value="Products"></v-list-item>
          <v-list-item prepend-icon="mdi-account-circle" title="Users" value="Users"></v-list-item>
          <v-list-item
            prepend-icon="mdi-store-marker"
            title="Marketing"
            value="Marketing"
          ></v-list-item>
        </div>
        <div class="navigation__itemDos">
          <v-list-item prepend-icon="mdi-alert-box" title="Help" value="Help"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Log out"></v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main">
      <div class="main__content">
        <div>
          <h1>Hello</h1>
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/assets/logo/cenius.png'
const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
</script>

<style>
.layout__header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  padding-bottom: 1rem;
}
.v-app-bar-nav-icon {
  display: block;
  color: #000000;
  font-size: 20px;
  margin-top: 5px;
}

.navigation {
  background-color: #fcfcfe;
  color: rgb(44, 44, 44);
  display: flex;
}
.navigation__list {
  width: 100%;
  height: 100%;
}
.navigation__itemUno {
  color: rgb(44, 44, 44);
  font-size: 24px;
  margin-left: -7px;
}
.navigation__itemDos {
  position: relative;
  display: block;
  color: #000000;
  font-size: 24px;
  margin-left: -7px;
  top: 137px;
}
.v-list-item__prepend > .v-icon {
  margin-inline-end: 10px;
}
.v-list-item {
  color: #000000;
  padding: 10px;
}
.mdi:before .mdi-set {
  display: inline-block;
  font: normal normal normal 24px/1 'Material Design Icons';
  font-size: inherit;
  text-rendering: auto;
  line-height: inherit;
}
.v-list-item:hover {
  background-color: #262626;
  color: #fefefe;
}
.logo {
  display: flex;
  padding: 5px;
}
.IsoType {
  width: 50px;
  min-height: 30px;
  margin-top: 7px;
  padding: 2px;
}

.welcome {
  font-size: 18px;
  color: #000000;
  padding: 10px;
  margin-top: -8px;
  opacity: 0;
  animation: slideIn 5s forwards;
}
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
.navbar__icono {
  margin: 15px;
  align-items: center;
  color: #212121;
  font-size: 15px;
}
.navbar__iconoUno {
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-top: 1px;
  color: #212121;
  margin-right: 10px;
}
.navbar__iconoDos {
  width: 50px;
  height: 50px;
  padding: 10px;
  color: #212121;
  margin-top: 1px;
  margin-right: 5px;
}
.mdi:before,
.mdi-set {
  font-size: 35px;
}
.navbar__iconoUno:hover {
  border-radius: 50%;
  background-color: #212121;
  color: #ffffff;
}
.navbar__iconoDos:hover {
  border-radius: 50%;
  background-color: #212121;
  color: #ffffff;
}
.search__container {
  position: absolute;
  padding: 7px;
  right: 135px;
  align-items: center;
}
.search__container input {
  width: 0;
  height: 23px;
  margin: 4px 6px;
  margin-top: 8px;
  padding: 7px;
  color: #fffcfc;
  outline: none;
  border: 1px solid #212121;
  border-radius: 50px;
  transition: all 0.7s ease;
  background: linear-gradient(#212121, #212121);
  text-align: left;
}
.search__button {
  width: 50px;
  height: 50px;
  line-height: 20px;
  top: 2px;
  right: 1px;
  position: absolute;
  background: #fefefe;
  text-align: center;
  color: rgb(225, 225, 225);
  font-size: 15px;
  border-radius: 50%;
  cursor: pointer;
}
.search__icon {
  font-size: 20px;

  top: 7px;
  color: #212121;
}
.search__icon:hover {
  color: #ffffff;
}
.search__button:hover {
  color: rgb(255, 255, 255);
  background-color: #212121;
}
.search__container:hover input {
  width: 220px;
}
.search__container input:focus {
  width: 220px;
}
.main {
  padding-top: 64px;
}
.main__content {
  width: 100%;
  min-height: calc(100vh - 64px);
  padding: 1rem;
}
@media screen and (max-width: 690px) {
  .logo {
    display: flex;
    padding: 5px;
    margin-top: -7px;
  }
  .IsoType {
    width: 55px;
    height: 55px;
  }
  .welcome {
    display: none;
  }
  .navbar__iconoUno {
    margin-top: 5px;
    color: #212121;
    margin-left: 1px;
  }
  .navbar__iconoDos {
    padding: 10px;
    color: #212121;
    margin-top: 5px;
    color: #212121;
    margin-left: 1px;
  }
  .search__container {
    right: 58px;
    padding: 4px;
    margin-top: -7px;
  }
  .search__container input {
    position: relative;
    padding: 7px;
    top: 12px;
    margin-right: 90px;
  }
  .search__button {
    width: 50px;
    height: 50px;
    line-height: 5px;
    top: 12px;
    right: 85px;
    position: absolute;
    background: rgb(251, 251, 251);
    text-align: center;
    color: white;
    font-size: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
  .search__container:hover input {
    width: 140px;
  }
  .search__container input:focus {
    width: 140px;
  }
  .navigation {
    margin-top: -5px;
    min-height: calc(110vh - 64px);
  }
}
@media screen and (max-width: 390px) {
  .layout__header {
    height: 60px;
  }
  .v-app-bar-nav-icon {
    top: -4px;
  }
  .IsoType {
    width: 50px;
    height: 50px;
    margin-top: 5px;
  }
  .welcome {
    display: none;
  }
  .search__container {
    right: 28px;
    padding: 6px;
    margin-top: 1px;
  }
  .search__container input {
    right: 48px;
    padding: 8px;
    top: -5px;
  }
  .search__button {
    width: 50px;
    height: 50px;
    line-height: 5px;
    margin-top: -15px;
    right: 125px;
    position: absolute;
    background: rgb(251, 251, 251);
    text-align: center;
    color: white;
    font-size: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
  .search__icon {
    font-size: 25px;
    color: rgb(0, 0, 0);
  }

  .search__container:hover input {
    width: 90px;
  }
  .search__container input:focus {
    width: 90px;
  }

  .navbar__icono {
    display: flex;
    gap: 1px;
    align-items: center;
    color: #000000;
  }
  .navbar__iconoUno {
    margin-top: -2px;
    padding: 1px;
    margin-left: 1px;
    font-size: 25px;
    color: rgb(0, 0, 0);
  }
  .navbar__iconoDos {
    margin-top: -2px;
    padding: 1px;
    font-size: 22px;
    margin-left: 5px;
    color: rgb(0, 0, 0);
  }

  .navigation__itemDos {
    top: 380px;
  }
}
</style>
