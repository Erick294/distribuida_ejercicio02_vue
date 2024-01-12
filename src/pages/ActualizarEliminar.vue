<template>
    <div id="cont">
      <h2 class="fw-bold">Actualizar Book</h2>
  
      <form @submit.prevent="actualizarBook()">
        <div class="form-group">
          <label for="id">Id:</label>
          <input type="text" class="form-control bordeCaja" id="id" v-model="id" required>
        </div>

        <div class="form-group">
          <label for="isbn">ISBN:</label>
          <input type="text" class="form-control bordeCaja" id="isbn" v-model="isbn" required>
        </div>
  
        <div class="form-group">
          <label for="title">Título:</label>
          <input type="text" class="form-control bordeCaja" id="title" v-model="title" required>
        </div>
  
        <div class="form-group">
          <label for="author">Autor:</label>
          <input type="text" class="form-control bordeCaja" id="author" v-model="author" required>
        </div>

        <div class="form-group">
          <label for="price">Precio:</label>
          <input type="number" class="form-control bordeCaja" id="price" v-model="price" required>
        </div>

        <button type="submit" class="btn btn-danger">Actualizar</button>
     </form>

     <h2 class="fw-bold">Eliminar Book</h2>
  
      <form @submit.prevent="eliminarBook()">
        <div class="form-group">
          <label for="id">Id:</label>
          <input type="text" class="form-control bordeCaja" id="id" v-model="id" required>
        </div>

        <button type="submit" class="btn btn-danger">Eliminar</button>
     </form>

    </div>
  </template>

<script>

import { actualizarBookFachada, eliminarBookFachada } from '@/assets/js/Book'

export default {

  data() {
    return {
      isbn: null,
      price: null,
      title: null,
      author: null,
      id: null
    }
  },
  methods: {
    actualizarBook() {
      const book = {
        isbn: this.isbn,
        price: this.price,
        author: this.author,
        title: this.title,
        id: this.id
      };

      actualizarBookFachada(this.id, book)
        .then((response) => {
          try {
            console.log(response.status);
            if (response.status === 410) {
              alert("Ocurrio un error:")
            } else {
              alert("Book registrado con éxito")
              this.isbn = null;
              this.price = null;
              this.author = null;
              this.title = null;
              this.id = null;
            }
          } catch (error) {
            alert("Ha ocurrido un error al procesar la respuesta del servidor")
            console.log(error);
          }
        })
        .catch((error) => {
          alert("Ha ocurrido un error al guardar")
          console.log(error);
        });
    },
    eliminarBook() {
        eliminarBookFachada(this.id)
        .then(response => {
          alert("Eliminado con exito")
        })
        .catch(error => {
          // Maneja el error en caso de que ocurra
          console.error('Error al eliminar:', error);
        });    
    }
  },
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


.bordeCaja {
  border: 2px solid #efca08;
}

.colorTexto {
  color: #3083dc;
}

.btn {
  margin: 10px 40%;
}

.form-group{
  margin-top: 25px;
}

input{
  margin-left: 15px;
}

</style>