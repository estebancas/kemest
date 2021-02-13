<template>
  <transition name="modal-fade">
    <div class="modal-dialog-backdrop" v-if="modalVisible">
      <div
        class="modal-dialog"
      >
        <div class="modal-content">
          <component :is="component"></component>
        </div>
        <!-- <Button text="Close me" aria-label="Close modal" @onClick="hideModal" /> -->
      </div>
    </div>
  </transition>
</template>

<script>
import Button from "../Button";
import Vue from "vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Modal",
  components: {
    Button
  },
  data() {
    return {
      component: false
    };
  },
  methods: {
    ...mapActions("Globals", ["hideModal"])
  },
  computed: {
    ...mapGetters("Globals", ["modalComponent", "modalVisible"])
  },
  watch: {
    modalComponent(componentName) {
      console.log("component name", componentName);
      if (!componentName) return;

      Vue.component(componentName, () =>
        import(`./modals/${componentName}`)
      );

      this.component = componentName;
    }
  }
};
</script>

<style>
.modal-dialog-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.modal-dialog {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex !important;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>