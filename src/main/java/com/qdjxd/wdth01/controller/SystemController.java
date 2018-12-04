package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 后台管理controller
 */
@Controller
@RequestMapping("system")
public class SystemController {

    @RequestMapping("index")
    public String showIndex(){
        return "system/index";
    }
}
