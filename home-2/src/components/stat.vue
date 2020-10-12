<template>
  <div class="stat-container">
    <h2 class="stat-num">{{ value }}</h2>
    <hr class="stat-divider" />
    <h3 class="stat-label">{{ label }}</h3>
  </div>
</template>

<script>
export default {
  name: "stat",
  props: {
    value: String,
    label: String
  }
};
</script>

<style scoped lang="scss">
.stat-container {
  min-width: 9.5rem;
}

.stat-num {
  font-family: Montserrat, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 42px;
}

.stat-label {
  font-family: Raleway, sans-serif;
  color: white;
  font-weight: 900;
  font-size: 26px;
}

.stat-divider {
  color: #387948;
  border-top: 0.3rem solid;
  width: 7rem;
  margin-left: 0;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
}
</style>
