<div class="panel-body">
    <form>
      <div class="row column-titles">
        <div>Name</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>
      <div
        v-for="item in ItemStore.data.selectedItem"
        :key="item.id"
        class="row product"
      >
        <div >{{item.name}}</div>
        <div >
          {{ item.quantity}}
        </div>
        <div >
          ${{ calculateTotalPrice(item) }}
          <div>
            <!-- ${{ calculateTotalPrice(item) }} -->
            <span class="price-label">${{ item.price }} for each</span>
          </div>
          <button class="remove-button" @click="remove(item)">
            Remove
          </button>
        </div>
      </div>
    </form>
    <div class="total-price">Total: ${{ totalPrice }}</div>
  </div>