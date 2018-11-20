package com.qdjxd.wdth01.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/3Dfactory")
public class Factory {

    
    @RequestMapping("/3Dfactory")
    public String index(){
        return "3Dfactory";
    }
    
    @RequestMapping(value = "/hello", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public  void hello(){
        System.out.println("hello");
    }
    
  
}
