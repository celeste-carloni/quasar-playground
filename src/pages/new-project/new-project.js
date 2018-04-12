import { required } from 'vuelidate/lib/validators';
// import { Toast } from 'quasar';
import ProjectType from "./../../components/project-type/ProjectType";

export default {
  name: 'PageName',
  components:{
    ProjectType
  },
  data(){
    return{
      form: {
        client: '',
        hourlyRate: '',
        manager:'',
        projectName: '',
        services: ['op1', 'op2', 'op3', 'op4'] //All checked by default
      },
      clientOptions: [ {'label': 'Adam', 'value': '1111'}, {'label': 'Kris', 'value' : '2222'}], //API
      managersOptions: [ {'label': 'Zoe', 'value': '1111'}, {'label': 'Toby', 'value' : '2222'}], //API
      projectTypeOptions:[
        {'label':'Brand', 'value':'op1','budget':'', 'checked': false},
        {'label':'Messaging', 'value':'op2','budget':'', 'checked': false},
        {'label':'Print', 'value':'op3','budget':'', 'checked': false},
        {'label':'Website', 'value':'op4','budget':'', 'checked': false},
        {'label':'Product', 'value':'op5','budget':'', 'checked': false}
      ],
      projectTypes:'',
      servicesOptions: [ { 'label': 'Asana', 'value': 'op1' },{ 'label': 'Basecamps', 'value': 'op2' },{ 'label': 'Harvest', 'value': 'op3' },{ 'label': 'Dropbox', 'value': 'op4' }],
    }
  },
  computed:{

  },
  validations: {
    form: {
      client: {required},
      hourlyRate: {required},
      manager: {required},
      projectName: {required}
    }
  },
  methods:{
     submit() {
      this.$v.form.$touch();

      console.log('submit');

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
        // Toast.create('Please review fields again.')
        return
      }
    },
    updateBudget(value){ //TODO: delete
      const type = this.projectTypeOptions.find(
        type => type.value === value
      );

      console.log('parent' + type.budget);
    },
    updateProjectTypes(value){
      const type = this.projectTypeOptions.find(
        type => type.value === value
      );

      type.checked = !type.checked;
    }
  }
}