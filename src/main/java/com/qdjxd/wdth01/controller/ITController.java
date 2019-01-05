package com.qdjxd.wdth01.controller;


import com.qdjxd.wdth01.dao.Wdth_tb_itjfMapper;
import com.qdjxd.wdth01.model.*;

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

    @Resource

    com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_ge1Mapper itNetdataGe1;



/* 总体应用流速*/
@Resource
com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_allMapper it_netdata_all;

/*jf*/
@Resource
com.qdjxd.wdth01.dao.Wdth_tb_itjfMapper itjf;



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

    @RequestMapping(value = "/getNumByLiu", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数中全部流量
    public List<Wdth_tb_it_netdata_ge1> getNumByLiu() throws Exception {
      List<Wdth_tb_it_netdata_ge1> getNumByLiu = itNetdataGe1.ByAll();
        return getNumByLiu;
    }


    @RequestMapping(value = "/getZ", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数中总体
    public List<Wdth_tb_it_netdata_all> getZ() throws Exception {
//
        List<Wdth_tb_it_netdata_all> getZ =  it_netdata_all.selectSu();
        return getZ;
    }



    /* 机房1*/
    @RequestMapping(value = "/SD", method = RequestMethod.GET)
    @ResponseBody

    public List<Wdth_tb_itjf> jf()  {
//
        List<Wdth_tb_itjf> jf =itjf.jf();
        return jf;
    }

}

