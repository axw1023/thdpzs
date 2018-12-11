package com.qdjxd.wdth01.controller;


import com.qdjxd.wdth01.model.User;
import com.qdjxd.wdth01.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/*
* 用户登录
* */
@Controller

@RequestMapping("login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @RequestMapping("index")
    public String userLogin(){
        return "user/login";
    }

    @RequestMapping("/system")
    public String login(User user,  HttpServletRequest request){
        String result = loginService.login(user,request);
        return result;
    }
}
