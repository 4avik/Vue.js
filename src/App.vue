<script setup> 
  import {onMounted, ref} from 'vue';
  import {fakestoreAPI} from "../api/fakestoreAPI";


  const products = ref(null);


  onMounted(async() => {
    
    try {
      products.value = await fakestoreAPI.get('/products');
    } catch(error) {
      console.log(error);
      throw new Error(error);
    }
  });
</script>


<template>

<div class="navbar">
  <div class="navLink">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
  </div>
</div>



  <article v-for="product in products?.data" key="product.id"> 
    <div class="container">
      <div class="container-stuff">
        <img :src="product.image" alt="picture">
        <h4>{{ product.title }}</h4>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </article>
</template>


<style scoped>
.navbar{
    background: #2d0806;
    padding: 1rem;
    font-size: 1.5rem;
    border-bottom: 1px solid white;
}
.navLink{
text-align: center;
}
a{
    text-decoration: none;
    padding: 1rem;
    color:#fff;
    text-align: center;
}
@media only screen and (max-width: 600px) {
    .navLink{
        display: flex;
        flex-direction: column;
    }
}

/*navi üleval*/

/*A-la pildid jne*/

.container{
  background-color: rgb(255, 255, 255);
  border-radius: 5px 5px 5px 5px;

  margin: 15px;
  
  /*test below*/
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;

  /*test 2*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  position: relative;
  width: 50%;
}

.container:hover{
  box-shadow: 3px 3px 3px rgb(19, 137, 255);
}

.container-stuff{
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 2rch;
  text-align: center;
  cursor: pointer;
  width: 50%;
}

h4 {
  text-decoration: underline;
}

img{
  height:80px;
  width:auto;
}

</style>