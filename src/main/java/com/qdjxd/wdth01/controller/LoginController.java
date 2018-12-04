package com.qdjxd.wdth01.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/*
* 用户登录
* */
@Controller

@RequestMapping("user")
public class LoginController {
    @RequestMapping("login")
    public String userLogin(){
        return "user/login";
    }
}
