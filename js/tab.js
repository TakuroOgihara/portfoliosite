var toggle1 = new Vue({
  el: "#skillcontainer",
  data: {
    isActive: false,
  },
  methods: {
    active: function () {
      this.isActive = !this.isActive;
    },
  },
});

var toggle2 = new Vue({
  el: "#work",
  data: {
    isActive: false,
  },
  methods: {
    active: function () {
      this.isActive = !this.isActive;
    },
  },
});
