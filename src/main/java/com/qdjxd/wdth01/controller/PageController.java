package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * 页面顺序配置
 * @author Liujx
 */

@Controller
@RequestMapping("page")
public class PageController {

    @RequestMapping("page")
    public String showIndex(){
        return "system/pageConfiger";
    }


    @RequestMapping("tableData")
    public String showInde1x(@RequestParam("mapper")String mapper){

        return "system/pageConfiger";
    }
}
