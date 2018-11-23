package com.qdjxd.wdth01.controller;


import com.qdjxd.wdth01.model.BigDataCommon;
import com.qdjxd.wdth01.model.BigDataFeed;
import com.qdjxd.wdth01.service.BigDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/BigData")
public class BigDataController {

    @Autowired
    private BigDataService bigDataService;
    @RequestMapping("/Index")
    public String index(){
        return "BigData";
    }

    @RequestMapping(value = "/getCoordData", method = RequestMethod.GET)
    @ResponseBody
    Map<String,Object> getCoordData(){
        return bigDataService.getCoordData();
    }
/*
  获取点位数据
 */
    @RequestMapping(value = "/getPointData", method = RequestMethod.GET)
    @ResponseBody
    List<BigDataCommon> getPointData(){
        return bigDataService.getPointData();
    }
    /*
    投料化验分析
     */
    @RequestMapping(value = "/getFeedData", method = RequestMethod.GET)
    @ResponseBody
    List<BigDataFeed> getFeedData(){
        return bigDataService.getFeedData();
    }

    /*
    获取变化趋势
     */
    @RequestMapping(value = "/getCharData", method = RequestMethod.GET)
    @ResponseBody
    List<BigDataCommon> getCharData(){
        return bigDataService.getCharData();
    }

    /*
        获取饼图数据
     */
    @RequestMapping(value = "/getThreePie", method = RequestMethod.GET)
    @ResponseBody
    List<BigDataCommon> getThreePie(){
        return bigDataService.getThreePie();
    }

    /*
        获取温度图数据
     */
    @RequestMapping(value = "/getTemData", method = RequestMethod.GET)
    @ResponseBody
    List<BigDataCommon> getTemData(){
        return bigDataService.getTemData();
    }

    /*
    获取三条折线数据
 */
    @RequestMapping(value = "/getThreeLine", method = RequestMethod.GET)
    @ResponseBody
    List<BigDataCommon> getThreeLine(){
        return bigDataService.getThreeLine();
    }

    /*
    获取双柱图
 */
    @RequestMapping(value = "/getDoubleBar", method = RequestMethod.GET)
    @ResponseBody
    List<BigDataCommon> getDoubleBar(){
        return bigDataService.getDoubleBar();
    }


}
