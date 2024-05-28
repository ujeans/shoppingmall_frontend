export const isValidEmail = (email) => {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  console.log("이메일 유효성 검사 :: ", regExp.test(email), email);
  return regExp.test(email);
};

export const isValidPassword = (password) => {
  var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;
  console.log("비밀번호 유효성 검사 :: ", regExp.test(password), password);
  return regExp.test(password);
};

export const isValidPhone = (phone) => {
  var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  console.log("핸드폰번호 유효성 검사 :: ", regExp.test(phone), phone);
  return regExp.test(phone);
};
