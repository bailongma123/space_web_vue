new Vue({
    el:"#app",
    data:{
        a:1
    },
 //created 钩子可以用来在一个实例被创建之后执行代码：
    created:function (){
        console.log('a is: ' + this.a)
    },
    methods:{
    
    }
 })