<template>
  <!-- style="background-color: #f5f6f9;" -->
  <div class="cart">
    <v-container>
      <div class="headline mb-3">My cart</div>  
      <div class="cart__container">
        <div class="carts">
          <CartCard v-for="a in 3" :key="a" />  
        </div>
        <div class="cart__checkout white pa-4">
          <div class="d-flex justify-space-between mb-1">
            <span>Sub Total</span>
            <span>$120</span>
          </div>
          <v-divider />
          <div class="d-flex justify-space-between my-1">
            <span>Discount</span>
            <span>$20</span>
          </div>
          <v-divider />
          <div class="d-flex justify-space-between mt-1 mb-3">
            <span>Grant Total</span>
            <span>$100</span>
          </div>
          <div>
            <v-btn rounded block color="primary">checkout</v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>  
</template>

<script>
import CartCard from '../components/CartCard'
export default {
  components: { CartCard }  
}
</script>

<style scoped>
.cart__container {
  display: grid;
  grid-template-columns: calc(100% - 300px) 280px;
  grid-gap: 20px;
}
.carts {
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
}
.cart__checkout {
  border-radius: 6px;
  max-height: 300px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>