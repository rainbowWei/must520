
//验证手机号是否合法
export function isvalidPhone(str) {
  const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/
  return reg.test(str)
}



//验证邮箱是否合法
export function isvalidMailbox(str){
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  return reg.test(str)
}