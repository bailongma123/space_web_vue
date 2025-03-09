Vue.component("toso-item", {
    props:['todo1'],
    //表示将  v-bind绑定的todo1 所指的对象中的 text 属性值渲染到 <li> 标签中。
    template:'<li>{{todo1.text}}</li>'
});

var vm = new Vue({
  el: "#app",
  data: {
    greceryList: [
      { id: 0, text: "Vue0" },
      { id: 1, text: "Vue1" },
      { id: 2, text: "Vue2" },
    ],
  },
  methods: {},
});
