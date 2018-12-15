package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.dao.Wdth_xt_configerMapper;
import com.qdjxd.wdth01.model.Wdth_xt_configer;
import com.qdjxd.wdth01.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.io.File;
import java.io.IOException;

/**
 * @author Liujx
 */
@Controller
@RequestMapping("/img")
public class WelcomeImgUploadController {

    @Resource
    private Wdth_xt_configerMapper wdth_xt_configerMapper;

    @Autowired
    private SystemService systemService;

    @RequestMapping(value = "/imgUpdate", produces = "application/json; charset=utf-8", method = RequestMethod.POST)
    @ResponseBody
    public String imgUpdate(@RequestParam(value = "txt_file", required = false) MultipartFile file) {
        if (file.isEmpty()) {
            return ("文件不能为空");
        }
        // 获取文件名
        String fileName = file.getOriginalFilename();
        System.out.println("上传的文件名为：" + fileName);
        // 获取文件的后缀名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));
        System.out.println("上传的后缀名为：" + suffixName);
        if(!".png".equals(suffixName)){
            return("请上传png格式图片");
        }
        fileName = "welcome_upload.png";
        // 文件上传后的路径
        String filePath = "D:/video/";
        // 解决中文问题，liunx下中文路径，图片显示问题
        // fileName = UUID.randomUUID() + suffixName;
        File dest = new File(filePath + fileName);
        // 检测是否存在目录
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
            file.transferTo(dest);
            return ("文件上传成功");
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ("文件上传失败");

    }


    @RequestMapping(value = "/updateWelcomeImg", method = RequestMethod.GET)
    @ResponseBody
    public int updateWelcomeImg(@RequestParam("parm")String urlId){
        Wdth_xt_configer wxc = new Wdth_xt_configer();
        String type = "";
        if("1".equals(urlId)){
            type = "普通";
        }else if("2".equals(urlId)){
            type = "市委";
        }else if("3".equals(urlId)){
            type = "上传图片";
        }
        wxc.setId(3);
        wxc.setName("欢迎页图片");
        wxc.setValue(type);
        int result = wdth_xt_configerMapper.updateByPrimaryKey(wxc);
        return result;
    }

    /**
     * 获取展示页面
     * @return
     */
    @RequestMapping("welcome")
    public ResponseEntity welcomeImg(){
        ResponseEntity result = systemService.welcomeImg();
        return result;
    }

    /**
     * 查询图片列表
     * @return
     */
    @RequestMapping("list")
    public ResponseEntity getImgList(){
        ResponseEntity result = systemService.getImgList();
        return result;
    }

    /**
     * 保存首页方案
     * @param name
     * @param file
     * @return
     */
    @RequestMapping("/entity")
    public ResponseEntity uploadImg(String name , MultipartFile file){
        ResponseEntity result = null;
        try {
            result = systemService.uploadImg(name,file);
            return result;
        } catch (IOException e) {
            e.printStackTrace();
            return  ResponseEntity.status(404).body("上传失败");
        }
    }

    /**
     * 应用
     * @param id
     * @return
     */
    @RequestMapping("use")
    public ResponseEntity useImg(String id){
        ResponseEntity result = systemService.useImg(id);
        return result;
    }

    /**
     * 删除
     * @param id
     * @return
     */
    @RequestMapping("del")
    public ResponseEntity delImg(String id){
        ResponseEntity result = systemService.delImg(id);
        return result;
    }
}
