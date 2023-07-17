<template>
  <v-layout class="layout">
    <v-app-bar class="layout__header" color="#000102">
      <v-div class="logo">
        <img class="logoUno" src="src/assets/logo/cenius.png" />
        <div class="logoDos">enius</div>
      </v-div>

      <div class="welcome">
        <h4 class="mt-5">Welcome, bruno</h4>
        <h2>Good Morning!</h2>
      </div>

      <div class="search">
        <input type="text" placeholder="Search" required />

        <div class="search__btn">
          <v-btn class="search__button" prepend-icon="mdi-magnify"></v-btn>
        </div>
      </div>
      <div class="navbar__icono">
        <v-btn class="navbar__iconoUno" icon="mdi-bell"></v-btn>
        <v-btn class="navbar__iconoDos" icon="mdi-account-circle"></v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer class="navigation" expand-on-hover rail permanent>
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
          <v-list-item prepend-icon="mdi-logout" title="Log out" value="Log out"></v-list-item>
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

<style>
* {
  margin: 0;
  padding: 0;
  margin-top: 0;
  font-family: Poppins;
}
.layout {
  display: flex;
}

.layout__header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 11%;
  padding-bottom: 1rem;
}

.navigation {
  background-color: #161616;
  display: flex;
  padding: -10px;
}
.navigation__list {
  width: 100%;
  height: 100%;
  padding: -7px;
  margin-top: -5px;
  
  
}

.navigation__itemUno {
  color: #f0eff6;
  font-size: 24px;
  
}

.navigation__itemDos {
  position: relative;
  display: block;
  color: #f0eff6;
  font-size: 24px;
  top: 17%;
  
}

.v-list-item {
  color: #f0eff6;
  padding: 10px;
  left: -7px;
}
.v-list-item:hover {
  background-color: #dedede;
  color: #111013;
}
.logo {
  display: flex;
  padding: 5px;
  gap: 5px;
  
}

.logoUno {
  width: 50px;
  aspect-ratio: 1/1;
  
}

.logoDos {
  font-size: 40px;
  color: #f0eff6;
  margin-top: 1px;
  padding: 2px;
  
}




.welcome {
  font-size: 22px;
  color: #f0eff6;
  padding:10px;
  margin-top: -14px;
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
  position: relative;
  right: -59%;
  display: flex;
  padding: 10px;
  gap: -25px;
  align-items: center;
  color: #f0eff6;
}

.navbar__iconoUno {
  padding: 10px;
  margin-top: 1px;
  color: white;
}
.navbar__iconoDos {
  padding: 10px;
  color: white;
  padding: 10px;
  margin-top: 1px;
}
.navbar__iconoUno:hover {
  border-radius: 50%;
  background-color: white;
  color: #000000;
}
.navbar__iconoDos:hover {
  border-radius: 50%;
  background-color: white;
  color: #000000;
}
.search {
  position: absolute;
  padding: 6px;
  right:9%;
  align-items: center;
}
.search input {
  width: 0;
  height: 23px;
  margin: 8px 2px;
  padding: 6px;
  font-size: 18px;
  color: #222;
  outline: none;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 50px;
  transition: all 0.7s ease;
  background: linear-gradient(#f7f7f7, #ffffff);
  text-align: left;
}
.search__btn {
  width: 50px;
  height: 50px;
  line-height: 25px;
  top: 1px;
  right: -8px;
  position: absolute;
  background: #000000;
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 15px;
  border-radius: 50%;
  cursor: pointer;
}
.search__button {
  font-size: 20px;
  right: -1px;
  top: 9px;
  color: white;
}
.search__button:hover {
  color: #000000;
}
.search__btn:hover {
  color: black;
  background-color: white;
}
.search:hover input {
  width: 240px;
}
.search input:focus {
  width: 240px;
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
  .logo{
    display: flex;
    padding: 5px;
    margin-top: -7px;
  }
  .logoUno {
    width: 15%;
    height: 15%;
  }

  .logoDos {
    font-size: 38px;
    width: 20%;
    height: 20%;
  }

  .welcome {
    display: none;
  }

  .navbar__icono {
    right: -36%;
    padding: 5px;
    margin-top: -7px;
  }

  .search {
    right: 6%;
    padding: 4px;
    margin-top: -7px;
  }

  .search input {
    position: relative;
    margin: 10px 80px;
  }

  .search__btn {
    width: 35%;
    height: 32px;
    right: 222px;
  }

  .search__btn {
    width: 50px;
    height: 50px;
    line-height: 5px;
    top: 1px;
    right: 60px;
    position: absolute;
    background: #000000;
    text-align: center;
    color: rgb(0, 0, 0);
    font-size: 15px;
    border-radius: 50%;
    cursor: pointer;
  }

  .search:hover input {
    width: 110px;
  }

  .search input:focus {
    width: 110px;
  }
  .navigation{
    margin-top: -8px;
    min-height: calc(110vh - 64px);
    
  }
  
  }
  .navigation__itemDos {
    padding: 1px;
    margin-top: 48px;

  }
  

@media screen and (max-width: 390px) {
  .layout__header{
    height: 7%;
  }
  .logoUno {
    width: 15%;
    height: 15%;
    margin-top: 5px;
  }

  .logoDos {
    font-size: 38px;
    width: 20%;
    height: 20%;
    margin-top: 1px;
  }

  .welcome {
    display: none;
  }

  .navbar__icono {
    right: 1%;
    gap: 25px;
  }

  .search {
    right: 28%;
    padding: 4px;
    margin-top: -9px;
  }

  .search input {
    right: -32%;
    padding: 5px;
    margin-top: 10px;
   
  }

  .search__btn {
    right: -8px;
    font-size: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
  .search__button {
    font-size: 20px;
    color: white;
  }
  .search__button:hover {
    color: #000000;
  }
  .search__btn:hover {
    color: black;
    background-color: white;
  }
  .search:hover input {
    width: 120px;
  }

  .search input:focus {
    width: 120px;
  }
.navbar__icono{
  right: 1%;
  padding: 1px;
  margin-top: -9px;
  gap: 1px;
}
  .navbar__iconoUno {
    margin-top: 1px;
    padding: -10px;
    color: white;
  }
  .navbar__iconoDos {
    margin-top: 1px;
    padding: 1px;
    color: white;
  }
  
  .navigation__itemUno {
    top: 2%;
  }

  .navigation__itemDos {
    position: relative;
    padding: 1px;
    top: 3%;
  }
}
</style>
