(async function () {
  async function test() {
    return 1
  }
  console.log(test(), (await test()) + 1)
})()