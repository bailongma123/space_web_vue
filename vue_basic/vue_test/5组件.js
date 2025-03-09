Vue.component("toso-item", {
  props: ["todo1"],
  //表示将  v-bind绑定的todo1 所指的对象中的 text 属性值渲染到 <li> 标签中。
  //props 是数据的来源，template 是数据的展示方式。
  //总结：props 是组件接收外部数据的接口。template 是组件使用这些数据渲染视图的地方。
  template: "<li>{{todo1.text}}</li>",
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
