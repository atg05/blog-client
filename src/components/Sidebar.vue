<template>
  <aside>
    <div class="menu-toggle-wrap">
      xdcfvh
      <button class="menu-toggle">
        <span class="material-symbols-outlined">keyboard_double_arrow_right </span>
      </button>
    </div>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.menu-toggle-wrap {
  color: red;
  width: var(--sidebar-width);
}
aside {
  display: flex;
  flex-direction: column;
  width: var(--sidebar-width);
  min-height: 100vh;
  overflow: hidden;

  background-color: var(--dark);
  color: var(--light);
}
</style>
