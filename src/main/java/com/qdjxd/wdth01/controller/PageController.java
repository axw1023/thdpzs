package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.dao.Wdth_xt_pageMapper;
import com.qdjxd.wdth01.model.Wdth_xt_page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

/**
 * 页面顺序配置
 * @author Liujx
 */

@Controller
@RequestMapping("page")
public class PageController {

    @Resource
    private Wdth_xt_pageMapper pageMapper;

    //    菜单配置页面
    @RequestMapping("page")
    public String showIndex(){
        return "system/pageConfiger";
    }


    //    菜单页面
    @RequestMapping("menu")
    public String menu(){
        return "menu";
    }

    //    菜单页面查询全部信息
    @RequestMapping(value = "/selectAll", method = RequestMethod. GET)
    @ResponseBody
    public List<Wdth_xt_page> selectAll(){
        List<Wdth_xt_page> page = pageMapper.selectAll();
        return page;
    }


    @RequestMapping("tableData")
    public String showInde1x(@RequestParam("mapper")String mapper){

        return "system/pageConfiger";
    }
}
