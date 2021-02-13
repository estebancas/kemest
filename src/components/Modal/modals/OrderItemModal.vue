<template>
  <div>
    <h2>This is a modal!</h2>

    <Button text="close modal" @onClick="closeModal" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Button } from "../../../components";

export default {
  name: "OrderItemModal",
  components: {
    Button
  },
  methods: {
    ...mapActions("Globals", ["hideModal"]),
    closeModal() {
      console.log('close modal')
      this.hideModal();
    }
  }
};
</script>
