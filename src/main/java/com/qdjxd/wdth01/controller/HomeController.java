package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.model.Wdth_home_time;
import com.qdjxd.wdth01.model.Wdth_tb_it_gjtj;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;



@Controller
@RequestMapping("/home")
public class HomeController {

    @Resource
    com.qdjxd.wdth01.dao.Wdth_home_timeMapper home;

    //  首页
    @RequestMapping("/index")
    public String index() {
        return "home";
    }


    @RequestMapping(value = "/getTime", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数饼图
    public List<Wdth_home_time> getTime() {
        List<Wdth_home_time> getTime = home.selectAll();
        return getTime;
    }
}
