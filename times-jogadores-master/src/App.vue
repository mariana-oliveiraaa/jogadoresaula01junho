<template>
  <header class="menu-superior">
    <div class="menu-esquerdo">
      <span>Home</span>
      <span>|</span>
      <span>Times</span>
      <span>|</span>
      <span>Jogadores</span>
      <span>|</span>
    </div>
    <div class="menu-direito"></div>
    <span>sair</span>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  height: 100vh;
  font-weight: normal;
}

header,
footer {
  background-color: rgb(99, 4, 136);
  color: rgb(255, 255, 255);
  height: 15%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
}

main {
  height: 70%;
}
header span {
  padding: 0 20px;
}

.menu-superior {
  justify-content: space-between;
}
</style>
