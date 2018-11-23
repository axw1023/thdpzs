package com.qdjxd.wdth01.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WelcomeController {

    //    欢迎页√
    @RequestMapping("/")
    public String index() {
        return "welcome";
    }

    //    智能制造总体规划
    @RequestMapping("/turnToOverallPlanning")
    public String turnToOverallPlanning() {
        return "home";
    }

    //    全产业链√
    @RequestMapping("/turnToAllLink")
    public String AllLink() {
        return "allLink";
    }

    //    IT基础设施√
    @RequestMapping("/turnToIT")
    public String IT() {
        return "it";
    }

    //    ERP√
    @RequestMapping("/turnToERPandBI")
    public String ERPandBI() {
        return "ERPandBI";
    }

    //    MES及能源
    @RequestMapping("/turnToMes")
    public String turnToMes() {
        return "Mes";
    }

    //    设备和安环
    @RequestMapping("/turnToEquipment")
    public String turnToEquipment() {
        return "equipment";
    }

    //    实验室
    @RequestMapping("/turnToLab")
    public String turnToLab() {
        return "show/turnToLab";
    }

    //    数字孪生工厂
    @RequestMapping("/turnToDigitalFactory")
    public String turnToDigitalFactory() {
        return "show/turnToDigitalFactory";
    }

    //    大数据
    @RequestMapping("/turnToBigData")
    public String turnToBigData() {
        return "BigData";
    }

    //    三维数字工厂
    @RequestMapping("/turnTo3DFactory")
    public String turnTo3DFactory() {
        return "show/turnTo3DFactory";
    }

    //    大数据和数据工厂展示
    @RequestMapping("/turnToDataAndFactory")
    public String turnToDataAndFactory() {
        return "show/turnToDataAndFactory";
    }

    //    未来展望
    @RequestMapping("/turnToFutureProspect")
    public String turnToFutureProspect() {
        return "ai-factory";
    }
}
