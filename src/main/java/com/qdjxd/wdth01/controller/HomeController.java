package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    //  首页
    @RequestMapping("/home")
    public String index() {
        return "home";
    }


}
