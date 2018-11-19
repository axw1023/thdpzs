package com.qdjxd.wdth01.controller;


import com.qdjxd.wdth01.model.Wdth_tb_it_gjtj;

import com.qdjxd.wdth01.model.Wdth_tb_it_yjszxzy;
import com.qdjxd.wdth01.model.Wdth_tb_it_zcxx;
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

    @Resource

    com.qdjxd.wdth01.dao.Wdth_tb_it_yjszxzyMapper it_yjszx;

    @Resource

    com.qdjxd.wdth01.dao.Wdth_tb_it_zcxxMapper it_zcxx;


    @RequestMapping("/ITchar")
    public String index() {
        return "it";
    }

    @RequestMapping(value = "/getNumByGrade", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数饼图
    public List<Wdth_tb_it_gjtj> getNumByGrade() {
        List<Wdth_tb_it_gjtj> getNumByGrade = it_gjtj.selectByPrimaryKey();
        return getNumByGrade;
    }


    @RequestMapping(value = "/getNumzc", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数资产信息
    public List<Wdth_tb_it_zcxx> getNumzc() {
        List<Wdth_tb_it_zcxx> getNumzc = it_zcxx.selectAll();
        return getNumzc;
    }


    @RequestMapping(value = "/getNumByAll", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数中信资源
    public List<Wdth_tb_it_yjszxzy> getNumByAll() {
        List<Wdth_tb_it_yjszxzy> getNumByAll = it_yjszx.getAll();
        return getNumByAll;
    }

}

