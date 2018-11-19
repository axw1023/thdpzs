package com.qdjxd.wdth01.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/BigData")
public class BigDataController {
    @RequestMapping("/index")
    public String index(){
        return "BigData";
    }
}
