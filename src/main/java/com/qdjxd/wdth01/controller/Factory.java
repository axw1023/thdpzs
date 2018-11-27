package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.dao.*;
import com.qdjxd.wdth01.model.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/3Dfactory")
public class Factory {

    @Resource
    wdth_3d_dyflqMapper wdth_3d_dyflqMapper;

    @Resource
    wdth_3d_fkgMapper wdth_3d_fkgMapper;
     @Resource
     wdth_3d_fltMapper wdth_3d_fltMapper;
     @Resource
     wdth_3d_hhjl1Mapper wdth_3d_hhjl1Mapper;
     @Resource
     wdth_3d_hhjl2Mapper wdth_3d_hhjl2Mapper;
     @Resource
     wdth_3d_ylyrMapper wdth_3d_ylyrMapper;
    
    
    @RequestMapping("/3Dfactory")
    public String index(){
        return "3Dfactory";
    }
    
    @RequestMapping(value = "/hello", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public  void hello(){
        System.out.println("hello");
    }

    @RequestMapping(value = "/1", method = RequestMethod. POST)
    @ResponseBody
    public List<wdth_3d_dyflq> getDyflq(){
        List<wdth_3d_dyflq> getDyflq =wdth_3d_dyflqMapper.getDyflq();
        return getDyflq;
    }
    @RequestMapping(value = "/2", method = RequestMethod. POST)
    @ResponseBody
    public List<wdth_3d_fkg> getFkg(){
        List<wdth_3d_fkg> getFkg =wdth_3d_fkgMapper.getFkg();
        return getFkg;
    }
    @RequestMapping(value = "/3", method = RequestMethod. POST)
    @ResponseBody
    public List<wdth_3d_flt> getFlt(){
        List<wdth_3d_flt> getFlt =wdth_3d_fltMapper.getFlt();
        return getFlt;
    }
   @RequestMapping(value = "/4", method = RequestMethod. POST)
    @ResponseBody
    public List<wdth_3d_hhjl1> getHhjl1(){
        List<wdth_3d_hhjl1> getHhjl1 =wdth_3d_hhjl1Mapper.getHhjl1();
        return getHhjl1;
    }
   @RequestMapping(value = "/5", method = RequestMethod. POST)
    @ResponseBody
    public List<wdth_3d_hhjl2> getHhjl2(){
        List<wdth_3d_hhjl2> getHhjl2 =wdth_3d_hhjl2Mapper.getHhjl2();
        return getHhjl2;
    }
   @RequestMapping(value = "/6", method = RequestMethod. POST)
    @ResponseBody
    public List<wdth_3d_ylyr> getYlyr(){
        List<wdth_3d_ylyr> getYlyr =wdth_3d_ylyrMapper.getYlyr();
        return getYlyr;
    }

    
}
