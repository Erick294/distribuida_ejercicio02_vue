<template>
    <h2 class="fw-bold">Listar Books</h2>

    <div id="app" class="container">
        <table border="1">
            <thead>
                <th>Id</th>
                <th>Isbn</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Precio</th>
            </thead>
                <tr v-for="data in books ">
                    <td>{{data.id}}</td>
                    <td>{{data.isbn}}</td>
                    <td>{{data.title}}</td>
                    <td>{{data.author}}</td>
                    <td>{{data.price}}</td>
                </tr>
        </table>
    </div>

    <h2 class="fw-bold">Listar Book Id</h2>

    <div id="app" class="container">
      <form @submit.prevent="buscarBookId()">
        <div class="form-group">
          <label for="id">Id:</label>
          <input type="text" class="form-control bordeCaja" id="id" v-model="id" required>
        </div>

        <button type="submit" class="btn btn-danger">Buscar</button>
     </form>

        <table border="1">
            <thead>
                <th>Id</th>
                <th>Isbn</th>
                <th>Título</th>
                <th>Autor</th>
                <th>Precio</th>
            </thead>
                <tr>
                    <td>{{book.id}}</td>
                    <td>{{book.isbn}}</td>
                    <td>{{book.title}}</td>
                    <td>{{book.author}}</td>
                    <td>{{book.price}}</td>
                </tr>
        </table>
    </div>
</template>

<script>
import { listarBookFachada } from '@/assets/js/Book'
import { buscarBookFachada } from '@/assets/js/Book'

export default {

  data() {
    return {
      books: [],
      book: null,
      id: null
    }
  },
  mounted(){
    this.listarBooks();
  },
  methods: {
    listarBooks() {
        listarBookFachada()
        .then(response => {
          // Maneja la respuesta exitosa y actualiza la lista de personas
          this.books = response.data;
        })
        .catch(error => {
          // Maneja el error en caso de que ocurra
          console.error('Error al obtener books:', error);
        });    
    },
    buscarBookId() {
        buscarBookFachada(this.id)
        .then(response => {
          // Maneja la respuesta exitosa y actualiza la lista de personas
          this.book = response.data;
        })
        .catch(error => {
          // Maneja el error en caso de que ocurra
          console.error('Error al obtener book:', error);
        });    
    }
  }
}

</script>

<style scoped>
#cont {
  width: 40%;
  margin: 20px auto;
  background-color: #fff2f1;
  border: 5px solid #003153;
  border-radius: 12px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  padding-top: 20px;
}

h2 {
  text-align: center;
  color: #003153;
}
table{
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    border-collapse: collapse;
}

th{
    padding: 10px;
}

</style>