<template>
  <v-layout>
    <v-app-bar class="layout__header" color="#FCFCFE">
      <v-app-bar-nav-icon variant="plain" @click="toggleDrawer"></v-app-bar-nav-icon>
      <div class="logo">
        <img class="isotype" :src="Logo" />
      </div>

      <div class="welcome">
        <p class="mt-5">Welcome, bruno</p>
        <p class="welcome__greetings">Good morning, check the news</p>
      </div>
      <v-spacer></v-spacer>

      <div class="navbar__icons">
        <div class="search__container">
          <input type="text" placeholder="Search" required />
          <div class="search__button">
            <v-btn class="search__icon" prepend-icon="mdi-magnify"></v-btn>
          </div>
        </div>
        <v-icon class="navbar_icon--bell" icon="mdi-bell"></v-icon>
        <v-icon class="navbar_icon--account--circle" icon="mdi-account-circle"></v-icon>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      class="navigation"
      prepend-icon="$vuetify"
      expand-on-hover
      rail
      permanent
      :class="{ dark: darkMode }"
    >
      <v-list density="compact" class="navigation__list">
        <div class="navigation__itemOne" :class="{ 'dark--text': darkMode }">
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
            value="Dashboard"
            to="/dashboard"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-shopping-outline"
            title="Orders"
            value="Orders"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-tag-outline"
            title="Products"
            value="Products"
            to="/products"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="Users"
            to="/Users"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-storefront-outline"
            title="Marketing"
            value="Marketing"
          ></v-list-item>
        </div>

        <div class="navigation__itemTwo" :class="{ 'dark--text': darkMode }">
          <v-list-item prepend-icon="mdi-cog-outline" title="Setting" value="Setting"></v-list-item>
          <v-list-item prepend-icon="mdi-brightness-6" title="Dark Mode" @click="toggleDarkMode">
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-help-circle-outline"
            title="Help"
            value="Help"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Log out"></v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-main class="main">
      <div class="main__content">
        <div>
          <slot></slot>
        </div>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/assets/logo/cenius.png'
const drawer = ref(true)
const toggleDrawer = () => {
  drawer.value = !drawer.value
}
const darkMode = ref(false)
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
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
  color: #000000;
  font-size: 20px;
  margin-top: 5px;
  display: none;
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
.navigation__itemOne {
  color: rgb(44, 44, 44);
  font-size: 20px;
  margin-left: -4px;
  cursor: pointer;
}
.navigation__itemTwo {
  color: rgb(44, 44, 44);
  font-size: 20px;
  margin-left: -4px;
  margin-top: 52px;
  min-height: 50px;
  cursor: pointer;
}
.v-list-item__prepend > .v-icon {
  margin-inline-end: 18px;
  min-height: 45px;
  text-decoration: none;
}

.mdi:before .mdi-set {
  display: inline-block;
  font: normal normal normal 24px/1 'Material Design Icons';
  font-size: inherit;
  text-rendering: auto;
  line-height: inherit;
}
.v-list-item:hover {
  background-color: #2d6c9f;
  color: #fefefe;
  text-decoration: none;
}
.logo {
  display: flex;
  padding: 5px;
  margin-left: 20px;
}
.isotype {
  width: 50px;
  min-height: 30px;
  margin-top: 7px;
  padding: 2px;
}

.welcome {
  font-size: 20px;
  color: #000000;
  padding: 8px;
  margin-left: 15px;
  margin-top: -10px;
  opacity: 0;
  animation: slideIn 5s forwards;
}
.welcome__greetings {
  font-size: 15px;
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
.navbar__icons {
  margin: 15px;
  align-items: center;
  color: rgb(44, 44, 44);
  font-size: 15px;
}
.navbar_icon--bell {
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-top: 2px;
  color: rgb(44, 44, 44);
  margin-right: 10px;
}
.navbar_icon--account--circle {
  width: 50px;
  height: 50px;
  padding: 10px;
  color: rgb(44, 44, 44);
  margin-top: 2px;
  margin-right: 5px;
}
.mdi:before,
.mdi-set {
  font-size: 29x;
}
.navbar_icon--bell:hover {
  border-radius: 50%;
  background-color: #2d6c9f;
  color: #ffffff;
}
.navbar_icon--account--circle:hover {
  border-radius: 50%;
  background-color: #2d6c9f;
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
  padding: 10px;
  color: #212121;
  outline: none;
  border: 1px solid #212121;
  border-radius: 50px;
  transition: all 0.7s ease;
  background: linear-gradient(#e2e2e2);
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
  background-color: #2d6c9f;
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
.v-navigation-drawer.dark {
  background-color: #1c1c1c;
  color: yellow;
}
.navigation__itemOne.dark--text {
  color: white;
  margin: 10 0px;
}
.navigation__itemTwo.dark title {
  color: white;
}
.navigation__itemOne.dark--text .v-icon {
  color: yellow;
}
.navigation__itemTwo.dark--text {
  color: white;
  margin: 10 0px;
}

.navigation__itemTwo.dark--text .v-icon {
  color: yellow;
}
@media screen and (max-width: 390px) {
  .layout__header {
    height: 60px;
  }
  .v-app-bar-nav-icon {
    top: -4px;
    display: flex;
  }
  .isotype {
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

  .navbar__icons {
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-top: 1px;
    display: flex;
    gap: 1px;
    align-items: center;
    color: rgb(44, 44, 44);
  }
  .navbar__icons navbar_icon--bell {
    margin-top: -2px;
    padding: 1px;
    margin-left: 1px;
    font-size: 25px;
    color: rgb(0, 0, 0);
  }
  .navbar__icons navbar_icon--account--circleo {
    margin-top: -2px;
    padding: 1px;
    font-size: 22px;
    margin-left: 5px;
    color: rgb(0, 0, 0);
  }

  .navigation__itemTwo {
    margin-top: 290px;
  }
}
@media screen and (max-width: 690px) {
  .logo {
    display: flex;
    padding: 5px;
    margin-top: -7px;
  }
  .isoType {
    width: 55px;
    height: 55px;
  }
  .welcome {
    display: none;
  }
  .v-app-bar-nav-icon {
    display: flex;
  }
  .navbar__icons {
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-top: 1px;
    color: rgb(44, 44, 44);
  }
  .navbar__icons navbar_icon--bell {
    margin-top: 5px;
    color: #212121;
    margin-left: 1px;
  }
  .navbar__icons navbar_icon--account--circle {
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
</style>
