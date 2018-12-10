package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.dao.Wdth_xt_configerMapper;
import com.qdjxd.wdth01.dao.Wdth_xt_pageMapper;
import com.qdjxd.wdth01.model.Wdth_xt_configer;
import com.qdjxd.wdth01.model.Wdth_xt_page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Controller
public class WelcomeController {

    @Resource
    private Wdth_xt_pageMapper pageMapper;

    @Resource
    Wdth_xt_configerMapper configerMapper;

    //登录页
    @RequestMapping("/")
    public String userWelcomeLogin(){
        return "user/Welcomelogin";
    }

    //    欢迎页√1
    @RequestMapping("/welcome")
    public String index() {
        return "welcome";
    }

    //    全产业链√2
    @RequestMapping("/turnToAllLink")
    public String AllLink() {
        return "allLink";
    }

    //    智能制造总体规划3
    @RequestMapping("/turnToOverallPlanning")
    public String turnToOverallPlanning() {
        return "home";
    }

    //    ERP√4
    @RequestMapping("/turnToERPandBI")
    public String ERPandBI() {
        return "ERPandBI";
    }

    //    MES及能源5
    @RequestMapping("/turnToMes")
    public String turnToMes() {
        return "Mes";
    }

    //    实验室6
    @RequestMapping("/turnToLab")
    public String turnToLab() {
        return "Lab";
    }

    //    设备和安环7
    @RequestMapping("/turnToEquipment")
    public String turnToEquipment() {
        return "equipment";
    }



    //    IT基础设施√8
    @RequestMapping("/turnToIT")
    public String IT() {
        return "it";
    }

    //    数字孪生工厂9
    @RequestMapping("/turnToDigitalFactory")
    public String turnToDigitalFactory() {
        return "Number";
    }

    //万达天弘化学概况
    @RequestMapping("/turnToDigitalFactory2")
    public String turnToDigitalFactory2() {
        return "Number2";
    }
    //    大数据10
    @RequestMapping("/turnToBigData")
    public String turnToBigData() {
        return "BigData";
    }

    //    三维数字工厂11
    @RequestMapping("/turnTo3DFactory")
    public String turnTo3DFactory() {
        return "3Dfactory";
    }

//    //    大数据和数据工厂展示-qzy12-备份用
//    @RequestMapping("/turnToDataAndFactory")
//    public String turnToDataAndFactory() {
//        return "3Dfactory1";
//    }

////    工具展示
//    @RequestMapping("/turnToToolShow")
//    public String turnToToolShow() {
//    return "tool";
//}

    //    未来展望13
    @RequestMapping("/turnToFutureProspect")
    public String turnToFutureProspect() {
        return "ai-factory";
    }

    //    结束页面14
    @RequestMapping("/turnToEnd")
    public String turnToEnd() {
        return "end";
    }

//    工具展示
    @RequestMapping("tool/index")
    public String toolShow(){
        return "tool";
    }



//    页面跳转控制
    @RequestMapping(value = "/getTurnToPage", method = RequestMethod.GET)
    @ResponseBody
    List<String> getPointData(@RequestParam("mapper")String mapper){
        List<Wdth_xt_page> page = pageMapper.selectAll();
        List<String> mappers = new ArrayList<>();

        int i = 0;
        for(int j = 0;j < page.size();j++){
            if (page.get(j).getValue().equals(mapper)){
                i = j;
                break;
            }
        }
        if(i == 0){
            mappers.add(page.get(page.size()-1).getValue());
        }else{
            mappers.add(page.get(i-1).getValue());
        }
        if(i == page.size()-1 ){
            mappers.add(page.get(0).getValue());
        }else{
            mappers.add(page.get(i+1).getValue());
        }

        return mappers;
    }



//    获取欢迎页面背景图片
    @RequestMapping(value = "/getWelcomeBackImg", method = RequestMethod.GET)
    @ResponseBody
    //获取ajax参数中信资源
    public Wdth_xt_configer getWelcomeBackImg() {
        int id = 3;
        Wdth_xt_configer data = configerMapper.selectByPrimaryKey(id);
        return data;
    }


}
