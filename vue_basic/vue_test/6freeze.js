var obj={
    foo:'baz'
}

//这里唯一的例外是使用 Object.freeze()，这会阻止修改现有的 property，也意味着响应系统无法再追踪变化。
Object.freeze(obj)

var vm=new Vue({
    el:"#app",
    data:obj,
    methods:{
    
    }
 })