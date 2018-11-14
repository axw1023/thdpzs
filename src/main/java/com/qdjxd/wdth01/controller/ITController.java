package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

@Controller
@RequestMapping("/IT")
public class ITController {

    @Resource
    com.qdjxd.wdth01.dao.UserMapper UserImpl;

    @RequestMapping("/ITchar")
    public String index(){
        return "it";
    }


}
