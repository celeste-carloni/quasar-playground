<template lang="pug">
    .row
      .col-12(v-for="(type, index) in types")
        q-checkbox(
          :label="type.label"
          :val="type.value"
          v-model="modelType"
          @input="toggleChecked(type.value)"
        )

        //-TOOD: conditional required?
        div(v-show="type.checked")
          q-input(
            class="no-margin"
            prefix="$"
            type="number"
            v-model="type.budget"
            min="0"
            @input="updateBudget(type.value)"
          ) 

      .col-12(v-show="calculateTotal > 0") {{calculateTotal}}
</template>

<script src="./project-type.js"/>

<style></style>
