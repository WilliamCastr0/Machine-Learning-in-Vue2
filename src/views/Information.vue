<template>
  <div class="info">
    <form action class="form" @submit.prevent="addInfo">
      <label class="form-label" for="#name">Nombre:</label>
      <input v-model="name" class="form-input" type="name" id="name" required placeholder="Ejm: Juana de Arco">
      <label class="form-label" for="#age">Edad:</label>
      <input v-model="age" class="form-input" type="age" id="age" placeholder="Ejm: 23">
      <input class="form-submit" type="submit" value="Enviar mi información">
    </form>
  </div>
</template>

<script>
import auth from '@/logic/auth.js';
export default {
  data: () => ({
    name: "",
    age: "",
  }),

  methods: {
    async addInfo() {
      const response = await auth.addInfo(this.name, this.age);
        console.log(response);
      }   
    }
};
</script>

<style lang="scss" scoped>
.info {
  padding: 2rem;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
</style>
