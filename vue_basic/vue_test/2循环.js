var vm = new Vue({
  el: "#app",
  data: {
    seen: true,
    message: "222",
    List: [{ text: "vue0" }, { text: "vue1" }, { text: "vue2" }],
  },
  methods: {},
});

vm.List.push({ text: "111" });
