<template>
  <div class="mytag">
    <a href="javascript:;" data-toggle="modal" @click="openModal"><i class="fa fa-eye"></i></a>

    <div class="modal fade" :id="modalId" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <img :src="user.avatar" width="470px">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modal from './modal'
import { uuid } from 'vue-uuid';

export default {
  components: {
    modal,
  },
  props: {
    user: {
      type: Object
    },
    modalId: {
      type: String,
      default () {
        return uuid.v1()
      }
    }
  },
  methods: {
    openModal () {
      $(`#${this.modalId}`).modal()
    }
  }
}
</script>

<style scoped>
.mytag {
  display: inline-block;
  position: relative;
}
</style>
