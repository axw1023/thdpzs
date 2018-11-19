package com.qdjxd.wdth01.controller;

;
import com.qdjxd.wdth01.model.Wdth_tb_it_gjtj;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/ITchar")
public class ITController {


    @Resource
    com.qdjxd.wdth01.dao.Wdth_tb_it_gjtjMapper it_gjtj;


    @RequestMapping("/ITchar")
    public String index() {
        return "it";
    }

    @RequestMapping(value = "/getNumByGrade", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数
    public List<Wdth_tb_it_gjtj> getNumByGrade() {
        List<Wdth_tb_it_gjtj> getNumByGrade = it_gjtj.selectByPrimaryKey();
        return getNumByGrade;
    }


}

