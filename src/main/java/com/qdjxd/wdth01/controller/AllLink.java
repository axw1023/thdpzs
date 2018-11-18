package com.qdjxd.wdth01.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/link")
//全产业链
public class AllLink {

//    全产业链页面
    @RequestMapping("/index")
    public String index(){
        return "allLink";
    }
}
