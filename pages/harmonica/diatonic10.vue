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
      if (textVal === undefined || textVal === '') {
        return
      }
      const blowNodes = ["Đồ", "Mì", "Sòl", "Đô", "Mi", "Sol", "Đố", "Mí", "Sól", "Đốố"]
      const drawNodes = ["", "", "", "", "", "", "", "", "", ""]

      this.convertedText = textVal.split('\n').map((item, idx) => {
        return item.split(' ')
          .map((node, idxNode) => {
            if (!isNumeric(node)) {
              return node
            }
            let nodeInInt = parseInt(node)
            let nodeIndx = Math.abs(nodeInInt)
            if (nodeInInt > 0 && blowNodes[nodeIndx-1] !== undefined) {
              return blowNodes[nodeInInt-1]
            }
            if (nodeInInt < 0 && drawNodes[nodeIndx-1] !== undefined) {
              return drawNodes[nodeIndx-1]
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
