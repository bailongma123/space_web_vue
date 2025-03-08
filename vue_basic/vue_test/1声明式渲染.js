var vm=new Vue({
    el:"#app",
    data:{
        message:"test vue",
        List:[
            {id:0,text:"vue0"},
            {id:1,text:"vue1"}
        ]
    },
    methods:{
    
    }
 })

 var app2=new Vue({
     el:'#app-2',
     data:{
        message:'页面记载于'+new Date().toLocaleString()+"--"+new Date().toDateString()
     },
     methods:{
     
     }
  })