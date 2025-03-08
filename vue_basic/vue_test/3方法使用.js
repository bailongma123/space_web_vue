new Vue({
    el:"#app",
    data:{
        message:'ceshi'
    },
    methods:{
        reverMssage:function(){
            this.message=this.message.split('').reverse().join('')
        },
        handClick(param){
            console.log(param)
        }
    }
 })