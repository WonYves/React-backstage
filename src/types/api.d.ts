// 这个文件专门定义请求参数和响应参数的类型

//  验证码响应类型约束
interface CaptchaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}