package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.dao.Wdth_xt_pageMapper;
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

    //    欢迎页√1
    @RequestMapping("/")
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

//    工具展示
    @RequestMapping("/turnToToolShow")
    public String turnToToolShow() {
    return "tool";
}

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

    @RequestMapping("tool/index")
    public String toolShow(){
        return "tool";
    }




    @RequestMapping(value = "/getTurnToPage", method = RequestMethod.GET)
    @ResponseBody
    List<Wdth_xt_page> getPointData(@RequestParam("mapper")String mapper){
        List<Wdth_xt_page> page = pageMapper.selectAll();
        List<String> mappers = new ArrayList<>();
        for(int i = 0;i < page.size();i++){
        }
        return page;
    }


}
