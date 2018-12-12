package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
public class LoginSuccessController {
//    配置页面登录
    @PostMapping("/user/login")
    public String loginMain(@RequestParam("username") String username, @RequestParam("password") String password) {
        if ("admin".equals(username) && "12345".equals(password)) {
            //设置账号为：admin，密码为：123456
            return "system/index";
        } else {
            //账号或者密码错误，返回主页面
            return "user/tess";
        }
    }

//换应页面登录
    @PostMapping("/user/welocmelogin")
    public String welocmelogin(@RequestParam("username") String username, @RequestParam("password") String password) {
        if ("admin".equals(username) && "12345".equals(password)) {
            //设置账号为：admin，密码为：123456
            return "redirect:/welcome";
        } else {
            //账号或者密码错误，返回主页面
            return "user/tess";
        }
    }




}
