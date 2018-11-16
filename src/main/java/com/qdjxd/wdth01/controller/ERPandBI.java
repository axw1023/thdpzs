package com.qdjxd.wdth01.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ERPandBI")
public class ERPandBI {


    @RequestMapping("/ERPandBI")
    public String index(){
        return "ERPandBI";
    }
}
