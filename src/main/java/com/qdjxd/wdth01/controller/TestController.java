package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
@RequestMapping("/IT")
public class TestController {

    @Resource
    com.qdjxd.wdth01.dao.UserMapper UserImpl;

    @RequestMapping("/IT")
    public String index(){
        return "test";
    }

    @RequestMapping(value = "/getGjtj", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public User getGjtj(@RequestParam("pointType")String pointType){
        User getGjtj = UserImpl.selectByPrimaryKey(pointType);
        return getGjtj;
    }

}