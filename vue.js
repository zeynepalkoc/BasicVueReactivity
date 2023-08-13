
new Vue({

    // Mount Vue instance to DOM with `el`
    // https://vuejs.org/v2/api/#el
    el: '#app',
  
    // State with data
    // http://vuejs.org/v2/guide/instance.html#Data-and-Methods
    data() {
      return {
        darkMode: true,
        title: 'Example Component',
        description: 'I was built with a Class component extending React.Component.'
      }
    },
    
    // Computed properties
    // https://vuejs.org/v2/guide/computed.html
    computed: {
      modeClass(){
        return this.darkMode ? 'dark-mode' : 'light-mode';
      }
    },
    
    // Lifecycle Hooks
    // https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks
    
    beforeCreate(){},
    created(){},
    
    beforeMount(){},
    mounted(){},
    
    beforeUpdate(){},
    updated(){},
    
    beforeDestroy(){},
    destroyed(){}
  
  });