Vue.createApp({
  data() {
    return {
      nyuryokugaku: 0,
      balance: 0,
      records: [],
    }
  },
  methods: {
    nyukin: function () {
      this.balance += Number(this.nyuryokugaku)
      const now = new Date()
      this.records.push("日付:" + now)
      this.records.push("操作:+ 入金")
      this.records.push("金額:" + Number(this.nyuryokugaku))
    },

    syukkin: function () {
      this.balance -= Number(this.nyuryokugaku)
      const now = new Date()
      this.records.push("日付" + now)
      this.records.push("操作:+ 出金")
      this.records.push("金額:" + Number(this.nyuryokugaku))
    },
  },
}).mount("#app")
