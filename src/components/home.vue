<style>
  .starter-template {
    padding: 40px 15px;
    text-align: center;
  }
</style>

<template>
  <div class="starter-template">
    <h1>ELENCO SOGGETTI</h1>

    <table id="grid-basic" class="table table-condensed table-hover table-striped">
        <thead>
            <tr>
                <th data-column-id="id" data-type="numeric">ID</th>
                <th data-column-id="nominativo">Nominativo</th>
                <th data-column-id="indirizzo">Indirizzo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mario Rossi</td>
                <td>via roma 1, Jesi(AN)</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Anna Verdi</td>
                <td>via torino 2, Apiro(MC)</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Gianni Neri</td>
                <td>via ascoli piceno 3, Maiolati Spontini(AN)</td>
            </tr>
        </tbody>
    </table>

  </div>
</template>

<script>
import {setCurrentPerson, navigateTo} from '../actions'

export default {
  ready() {
    $("#grid-basic").bootgrid({
      navigation: 0
    })
    .on("click.rs.jquery.bootgrid", (e, columns, row) => {
      this.setCurrentPerson(row);
      this.navigateTo('about');
    }); 
  },
  vuex: {
    actions: {
      setCurrentPerson,
      navigateTo
    },
    getters: {
    }
  }
}
</script>