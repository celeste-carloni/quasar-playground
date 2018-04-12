<template lang="pug">
  <q-page padding>
    section
      h1 Create New Project
      div
        form
          .row.gutter-md
            .col-xs-12.col-md-4
              q-field(
                label="Client"
                orientation="vertical"
                :error="$v.form.client.$error"
                error-label="Please select a client"
              )
                q-select(
                  v-model="form.client"
                  :options="clientOptions"
                  @blur="$v.form.client.$touch"
                )
              //- end: client select
                
            .col-xs-12.col-md-4
              q-field(
                label="Project Managers"
                orientation="vertical"
                :error="$v.form.manager.$error"
                error-label="Please select a project manager"
              )
                q-select(
                  v-model="form.manager"
                  :options="managersOptions"
                  @blur="$v.form.manager.$touch"
                )
              //-end: PM select

            .col-12
              .row
                .col-xs-12.col-md-8
                  q-field(
                    label="Project Name"
                    orientation="vertical"
                    :error="$v.form.projectName.$error"
                    error-label="Please enter a project name"
                  )
                    q-input(
                      type="text"
                      v-model="form.projectName"
                      @blur="$v.form.projectName.$touch"
                    )
                  //-end: project name

            .col-12
              .row
                .col-xs-12.col-md-4
                  q-field(
                    label="Hourly Rate"
                    orientation="vertical"
                    :error="$v.form.hourlyRate.$error"
                    error-label="Please enter a hourly rate"
                    @blur="$v.form.hourlyRate.$touch"
                  )
                    q-input(
                      prefix="$"
                      type="number"
                      min="0"
                      v-model="form.hourlyRate"
                    )
                  //- end: hourly rate

            .col-12
              q-field(
                label="Services to Set Up"
                orientation="vertical"
              )
                q-option-group(
                  inline
                  color="secondary"
                  type="checkbox"
                  v-model="form.services"
                  :options="servicesOptions"
                )
              //- end: services

            .col-12
              q-field(
                label="Project Type"
                orientation="vertical"
              )
                project-type(
                  model="projectTypes" 
                  :types="projectTypeOptions"
                  v-on:update-state="updateProjectTypes"
                  v-on:update-budget="updateBudget"
                )
              //- end Project type

            .col-12
              q-btn(
                color="primary"
                @click="submit"
              ) Create Project
  </q-page>
</template>

<script src="./new-project.js"/>

<style></style>
