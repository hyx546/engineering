/**
 * 多少秒后执行代码
 * @param delay
 */
function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay, "hello"));
}

const testFun = async () => {
  await sleep(3000);
  console.log("------hello");
};

testFun();
