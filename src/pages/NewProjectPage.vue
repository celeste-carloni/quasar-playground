<template lang="pug">
  <q-page padding>
    section
      h1 Create New Project
      div
        form
          .row.gutter-md
            //-NOTE: gutter-sm: 16px
            .col-xs-12.col-md-4
              q-select(
                class="no-margin"
                float-label="Client"
                v-model="client"
                :options="clientOptions"
              )
            .col-xs-12.col-md-4
              q-select(
              class="no-margin"
                float-label="Project Managers"
                v-model="managers"
                :options="managersOptions"
              )

            .col-12
              .row
                .col-xs-12.col-md-8
                  q-input(
                    class="no-margin"
                    float-label="Project Name"
                    type="text"
                    v-model="projectName"
                  )

            .col-12
              .row
                .col-xs-12.col-md-4
                  q-input(
                    prefix="$"
                    class="no-margin"
                    float-label="Hourly Rate"
                    type="number"
                    v-model="hourlyRate"
                  )

            .col-12
              q-option-group(
                inline
                color="secondary"
                type="checkbox"
                v-model="services"
                :options="servicesOptions"
              )

            .col-12
              | Type component
              project-type(model="projectTypes" :types="projectTypeOptions")
            .col-12
              button Create Project
  </q-page>
</template>

<script>
import ProjectType from "./../components/project/ProjectType"
export default {
  name: 'PageName',
  components:{
    ProjectType
  },
  data(){
    return{
          client: '',
          clientOptions: [ {'label': 'Adam', 'value': '1111'}, {'label': 'Kris', 'value' : '2222'}], //API
          hourlyRate: '',
          managersOptions: [ {'label': 'Zoe', 'value': '1111'}, {'label': 'Toby', 'value' : '2222'}], //API
          managers:'',
          projectName: '',
          projectTypeOptions:[
            {'label':'Brand', 'value':'op1','budget':'', 'checked': false},
            {'label':'Messaging', 'value':'op2','budget':'', 'checked': false},
            {'label':'Print', 'value':'op3','budget':'', 'checked': false},
            {'label':'Website', 'value':'op4','budget':'', 'checked': false},
            {'label':'Product', 'value':'op5','budget':'', 'checked': false}
          ],
          projectTypes:'',
          servicesOptions: [ { 'label': 'Asana', 'value': 'op1' },{ 'label': 'Basecamps', 'value': 'op2' },{ 'label': 'Harvest', 'value': 'op3' },{ 'label': 'Dropbox', 'value': 'op4' }],
          services: []
    }
  },
  computed:{

  },
  methods:{
  }
}
</script>

<style>
</style>
