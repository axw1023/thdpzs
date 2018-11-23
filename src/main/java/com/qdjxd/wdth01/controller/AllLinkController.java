package com.qdjxd.wdth01.controller;


import com.qdjxd.wdth01.dao.Wdth_alllink_dataMapper;
import com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_allMapper;
import com.qdjxd.wdth01.model.Wdth_alllink_data;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/link")
//全产业链
public class AllLinkController {

    @Resource
    Wdth_alllink_dataMapper alllinkMapper;


//    全产业链页面
    @RequestMapping("/index")
    public String index(){
        return "allLinkController";
    }

    @RequestMapping(value = "/getAllLinkData", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数中信资源
    public List<Wdth_alllink_data> getAllLinkData() {
        List<Wdth_alllink_data> getAllLinkData = alllinkMapper.selectAll();
        return getAllLinkData;
    }
}
