package com.qdjxd.wdth01.controller;


import com.qdjxd.wdth01.dao.*;
import com.qdjxd.wdth01.model.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/ERPandBI")
public class ERPandBI {

    @Resource
    wdth_erp_CbgcMapper cbgcMapper;

    @Resource
    wdth_erp_ErpMapper erpMapper;

    @Resource
    wdth_erp_HkzsslMapper hkzsslMapper;

    @Resource
    wdth_erp_JhzxlMapper jhzxlMapper;
    
      @Resource
      wdth_erp_KcMapper kcMapper;
    
      @Resource
      wdth_erp_SynhzbMapper synhzbMapper;
       
      @Resource
      wdth_erp_XsqkMapper xsqkMapper;
      
      @Resource
      wdth_erp_YllyMapper yllyMapper;
    
      
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
    public List<wdth_erp_Cbgc> getCbgc(Model model){
        List<wdth_erp_Cbgc> getCbgc =cbgcMapper.getCbgc();
        return getCbgc;
    }
  
    @RequestMapping(value = "/erp", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<wdth_erp_Erp> getErp(){
        List<wdth_erp_Erp> getErp =erpMapper.getErp();

        return getErp;
    }

    @RequestMapping(value = "/hkzssl", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<wdth_erp_Hkzssl> getHkzssl(){
        List<wdth_erp_Hkzssl> getHkzssl =hkzsslMapper.getHkzssl();
        System.err.println(getHkzssl);
        return getHkzssl;
    }

    @RequestMapping(value = "/jhzxl", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<wdth_erp_Jhzxl> getJhzxl(){
        List<wdth_erp_Jhzxl> getJhzxl =jhzxlMapper.getJhzxl();
        return getJhzxl;
    }

    @RequestMapping(value = "/kc", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<wdth_erp_Kc> getKc(){
        List<wdth_erp_Kc> getKc =kcMapper.getKc();
        return getKc;
    }

    @RequestMapping(value = "/synhzb", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<wdth_erp_Synhzb> getSynhzb(){
        List<wdth_erp_Synhzb> getSynhzb =synhzbMapper.getSynhzb();
        return getSynhzb;
    }

    @RequestMapping(value = "/xsqk", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<wdth_erp_Xsqk> getXsqk(){
        List<wdth_erp_Xsqk> getXsqk =xsqkMapper.getXsqk();
        return getXsqk;
    }

    @RequestMapping(value = "/ylly", method = RequestMethod. POST)
    @ResponseBody
    //获取ajax参数
    public List<wdth_erp_Ylly> getYlly(){
        List<wdth_erp_Ylly> getYlly =yllyMapper.getYlly();
        return getYlly;
    }

}
