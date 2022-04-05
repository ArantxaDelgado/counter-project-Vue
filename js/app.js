Vue.createApp({
    data() {
        return {
            count: 0,
            color: ''
        }
    },

    methods: {
        addCount(value){
            this.count += value

            this.count > 0 ? this.color = 'text-success': this.color && this.count == 0 ? this.color = '' : this.color;
            
            this.count < 0 ? this.color = 'text-danger' : this.color && this.count == 0 ? this.color = '' : this.color
            
        }
    
    }
}).mount('#app')