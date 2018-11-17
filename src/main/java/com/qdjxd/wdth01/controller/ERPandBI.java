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
@RequestMapping("/ERPandBI")
public class ERPandBI {

    @Resource
    com.qdjxd.wdth01.dao.CbgcMapper cbgcMapper;

    @Resource
    ErpMapper erpMapper;

    @Resource
    HkzsslMapper hkzsslMapper;

    @Resource
    JhzxlMapper jhzxlMapper;
    
      @Resource
      KcMapper kcMapper;
    
      @Resource
      SynhzbMapper synhzbMapper;
       
      @Resource
      XsqkMapper xsqkMapper;
      
      @Resource
      YllyMapper yllyMapper;
    
      
    @RequestMapping("/ERPandBI")
    public String index(){
        return "ERPandBI";
    }
    
    @RequestMapping(value = "/hello", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public  void hello(){
        System.out.println("hello");
    }
    
    @RequestMapping(value = "/cbgc", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Cbgc> getCbgc(){
        List<Cbgc> getCbgc =cbgcMapper.getCbgc();
        return getCbgc;
    }
    
    @RequestMapping(value = "/erp", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Erp> getErp(){
        List<Erp> getErp =erpMapper.getErp();
       
        return getErp;
    }

    @RequestMapping(value = "/hkzssl", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Hkzssl> getHkzssl(){
        List<Hkzssl> getHkzssl =hkzsslMapper.getHkzssl();
        List<Hkzssl> getHkzssl1 =hkzsslMapper.getHkzssl1();
        
        return getHkzssl;
    }

    @RequestMapping(value = "/jhzxl", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Jhzxl> getJhzxl(){
        List<Jhzxl> getJhzxl =jhzxlMapper.getJhzxl();
        List<Jhzxl> getJhzxl1 =jhzxlMapper.getJhzxl1();

        return getJhzxl;
    }

    @RequestMapping(value = "/kc", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Kc> getKc(){
        List<Kc> getKc =kcMapper.getKc();
        return getKc;
    }
   
    @RequestMapping(value = "/synhzb", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Synhzb> getSynhzb(){
        List<Synhzb> getSynhzb =synhzbMapper.getSynhzb();
        return getSynhzb;
    }
       
    @RequestMapping(value = "/xsqk", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Xsqk> getXsqk(){
        List<Xsqk> getXsqk =xsqkMapper.getXsqk();
        return getXsqk;
    }
           
    @RequestMapping(value = "/ylly", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<Ylly> getYlly(){
        List<Ylly> getYlly =yllyMapper.getYlly();
        return getYlly;
    }
    
}
