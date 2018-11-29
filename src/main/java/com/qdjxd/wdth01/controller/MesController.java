package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.dao.Wdth_alllink_dataMapper;
import com.qdjxd.wdth01.dao.Wdth_xt_configerMapper;
import com.qdjxd.wdth01.model.Wdth_alllink_data;
import com.qdjxd.wdth01.model.Wdth_xt_configer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Liujx
 */

@Controller
@RequestMapping("/Mes")
public class MesController {

    @Resource
    Wdth_xt_configerMapper configerMapper;

    @RequestMapping(value = "/getMesUrl", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数中信资源
    public Wdth_xt_configer getMesUrl() {
        int id = 1;
        Wdth_xt_configer data = configerMapper.selectByPrimaryKey(id);
        return data;
    }
}
