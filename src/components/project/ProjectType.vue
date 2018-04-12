<template lang="pug">
  div Project Type component
    .row
      .col-12(v-for="(type, index) in types")
        q-checkbox(
          :label="type.label"
          :val="type.value"
          v-model="modelType"
          @input="toggleChecked(type)"
        )

        div(v-show="type.checked")
          q-input(
            class="no-margin"
            prefix="$"
            float-label="Project Budget"
            type="number"
            v-model="type.budget"
          )

    //- http://quasar-framework.org/components/checkbox.html
</template>

<script>
export default {
  name: 'ProjectType',
  data () {
    return {
      modelType: []
    }
  },
  props:{
    model: String,
    types: Array
  },
  methods:{
    toggleChecked(type){
      console.log('emit event');
    }
  }
}
</script>

<style>
</style>
