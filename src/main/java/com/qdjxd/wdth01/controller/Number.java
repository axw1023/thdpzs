package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/Number")
public class Number {

 
    @RequestMapping("/Number")
    public String index(){
        return "Number";
    }
    
    @RequestMapping(value = "/hello", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public  void hello(){
        System.out.println("hello");
    }

  }
