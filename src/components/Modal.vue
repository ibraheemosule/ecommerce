<template>
  <div>
    <div
      id="myModal"
      class="modal"
      :style="modal === true ? { display: 'block' } : { display: 'none' }"
    >
      <div class="modal-content">
        <p>{{ modalText }}</p>
        <span class="close" @click="close">&times;</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  props: {
    modal: Boolean,
    modalText: String,
    signup: Boolean,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const data = reactive({});

    const close = () => {
      emit("close");
      router.replace("/products");
    };

    window.onclick = function (event) {
      const modal = document.getElementById("myModal");
      if (event.target == modal) {
        emit("close");
        router.replace("/products");
      }
    };
    return {
      ...toRefs(data),
      close,
      open,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  display: flex;
  justify-content: space-between;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  border-radius: 20px;
}

.close {
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  margin-top: -10px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
