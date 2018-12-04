package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 后台管理controller
 */
@Controller
@RequestMapping("system")
public class SystemController {

    @Autowired
    private SystemService systemService;

    @RequestMapping("index")
    public String showIndex(){
        return "system/index";
    }

    @RequestMapping("menu")
    public ResponseEntity getMenuList(){
        ResponseEntity result = systemService.getMenuList();
        return result;
    }

    @RequestMapping("table/{type}")
    public ResponseEntity getTableFormatData(@PathVariable String type){
        ResponseEntity result = systemService.getTableFormatData(type);
        return null;
    }
}
