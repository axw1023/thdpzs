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
        return "test/test";
    }

    //视频测试
    @RequestMapping("/vadio")
    public String vadio(){
        return "test/vadio";
    }


    //图片旋转测试
    @RequestMapping("/rotate")
    public String imgRotate(){
        return "test/imgrotate";
    }


    //图片飞入测试
    @RequestMapping("/img")
    public String imgEffect(){
        return "test/imgEffect";
    }

    //粒子流光背景测试
    @RequestMapping("/lzlg")
    public String lzlg(){
        return "test/guangyun";
    }


    @RequestMapping("/ERP")
    public String ERP(){
        return "ERPandBI";
    }
    @RequestMapping(value = "/getGjtj", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public User getGjtj(@RequestParam("pointType")String pointType){
        User getGjtj = UserImpl.selectByPrimaryKey(pointType);
        return getGjtj;
    }

}