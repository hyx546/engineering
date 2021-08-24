/**
 * 获取文件后缀名
 * @param fileName
 */
function getExt(fileName: string) {
  return (fileName.split(".").pop() || "").toLowerCase();
}

console.log("----getExt", getExt("1.srr.mp4"));
