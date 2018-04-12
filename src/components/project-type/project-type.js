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
  computed:{
    calculateTotal(){
      return this.types.reduce((total, projectType) =>{
        return total + projectType.budget;
      }, 0);
    } 
  },
  methods:{
    toggleChecked(value){
      this.$emit('update-state', value);
    },
    updateBudget(value){
      //TODO: delete
      this.$emit('update-budget', value);
    }
  }
}