<style>
  .starter-template {
    padding: 40px 15px;
    text-align: center;
  }
  .input-group-addon {
    min-width:200px;
    text-align:right;
  }
</style>

<template>
  <div class="starter-template">

    <h1>SCHEDA SOGGETTO</h1>
    
    <div class="input-group">
      <span class="input-group-addon" id="txtID">ID</span>
      <input type="text" class="form-control" placeholder="ID" aria-describedby="txtID" readonly v-model="currentPerson.id">
    </div>

    <div class="input-group">
      <span class="input-group-addon" id="txtNominativo">Nominativo</span>
      <input type="text" class="form-control" placeholder="Nominativo" aria-describedby="txtNominativo" readonly v-model="currentPerson.nominativo">
    </div>

    <div class="input-group">
      <span class="input-group-addon" id="txtIndirizzo">Indirizzo</span>
      <input type="text" class="form-control" placeholder="Indirizzo" aria-describedby="txtIndirizzo" readonly v-model="currentPerson.indirizzo">
    </div>

    <br/>

    <button @click="navigateTo('home')">Torna a Elenco</button>

  </div>
</template>

<script>
import {navigateTo} from '../actions'

export default {
  vuex: {
    actions: {
      navigateTo
    },
    getters: {
      currentPerson: state => state.currentPerson
    }
  }
}
</script>