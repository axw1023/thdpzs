package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class LoginSuccessController {
    @PostMapping("/user/login")
    public String loginMain(@RequestParam("username") String username,
                              @RequestParam("password") String password) {
        if ("admin".equals(username) && "12345".equals(password)) {
            //设置账号为：admin，密码为：123456
            return "system/index";
        } else {
            //账号或者密码错误，返回主页面
            return "user/tess";
        }
    }

}
