package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.model.EquipmentComposition;
import com.qdjxd.wdth01.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

/**
 * 装置Controller
 */
@Controller
@RequestMapping("equip")
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;

    @RequestMapping("index")
    public String showIndex(){
        return "equipment";
    }

    /**
     * 获取设备构成信息
     * @return
     *
     */
    @RequestMapping("num/list")
    public ResponseEntity getEquipNumList(){
        ResponseEntity result = equipmentService.getEquipNumList();
        return result;
    }

    /**
     * 获取设备数量柱状信息
     */
    @RequestMapping("area/list")
    public ResponseEntity getAreaNumList(){

        ResponseEntity result = equipmentService.getAreaNumList();
        return result;
    }

    /**
     * 获取巡检统计信息
     */
    @RequestMapping("inspect/sta/list")
    public ResponseEntity getInspectStaList(){
        ResponseEntity result = equipmentService.getInspectStaList();
        return  result;
    }

    /**
     * 获取预警情况信息
     */
    @RequestMapping("warning/pie")
    public ResponseEntity getWarningPieInfo(){
        ResponseEntity result = equipmentService.getWarningPieInfo();
        return result;
    }

    /**
     * 获取缺陷级别分析数据
     */
    @RequestMapping("defect/list")
    public ResponseEntity getDefectLevelInfo(){
        ResponseEntity result = equipmentService.getDefectLevelInfo();
        return result;
    }

    /**
     * 获取作业备案list
     */
    @RequestMapping("job/record/list")
    public ResponseEntity getJobRecordList(){
        ResponseEntity result = equipmentService.getJobRecordList();
        return result;
    }

    /**
     * 获取外排口信息
     */
    @RequestMapping("waste/list")
    public ResponseEntity getWasteList(){
        ResponseEntity result = equipmentService.getWasteList();
        return result;
    }

    /**
     * 获取ip
     */
    @RequestMapping("ip")
    @ResponseBody
    public String getIpList(){

        FileReader fileReader= null;
        BufferedReader bufferedReader=null;
        StringBuilder stringBuilder=null;


        try {
            stringBuilder=new StringBuilder();
            fileReader=new FileReader("D:\\ip.txt");
            bufferedReader=new BufferedReader(fileReader);
            String str;
            while ((str=bufferedReader.readLine())!=null){
                stringBuilder.append(str).append(";");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            try {
                bufferedReader.close();
                fileReader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return stringBuilder.toString();
    }

}
