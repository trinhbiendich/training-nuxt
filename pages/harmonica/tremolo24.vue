<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <textarea @change="updateInfo" class="form-control lefttext" rows="30"></textarea>
      </div>
      <div class="col-6">
        <textarea class="form-control righttext" v-model="convertedText" rows="30"></textarea>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      rawCode: '',
      convertedText: ''
    }
  },
  methods: {
    updateInfo (event, req) {
      let elem = event.target
      let textVal = elem.value
      if (textVal === undefined || textVal === '' || textVal.length < 40) {
        return
      }
      const nodes = [
        "Sòòl", "Rề", "Đồ", "Fà", "Mì", "Là", "Sòl", "Sì",
        "Đô", "Rê", "Mi", "Fa", "Sol", "La", "Đố", "Si", "Mí",
        "Rế", "Sól", "Fá", "Đốố", "Lá", "Míí", "Sí"
      ]

      this.convertedText = textVal.split('\n').map((item, idx) => {
        return item.split(' ')
          .map((node, idxNode) => {
            if (node === undefined || node === '' || isNaN(node)) {
              return node
            }
            let nodeInInt = parseInt(node)
            if (nodes[nodeInInt-1] !== undefined) {
              return nodes[nodeInInt-1]
            }
            return node
          })
          .join(' ')
      }).join('\n')
    },
  }
}
</script>

<style scoped>

</style>
