package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.common.TableInfo;
import com.qdjxd.wdth01.common.TableOptionBuilder;
import com.qdjxd.wdth01.service.SystemService;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * 后台管理controller
 */
@Controller
@RequestMapping("system")
public class SystemController {
    @Autowired
    private SystemService systemService;

    @RequestMapping("index")
    public String showIndex(){
        return "system/index";
    }

    @RequestMapping("menu")
    public ResponseEntity getMenuList(){
        ResponseEntity result = systemService.getMenuList();
        return result;
    }

    @RequestMapping("table/{type}")
    public ResponseEntity getTableFormatData(@PathVariable String type){
        ResponseEntity result = systemService.getTableFormatData(type);
        return result;
    }

    @RequestMapping("table/info/{type}")
    public ResponseEntity getTableList(@PathVariable String type){
        ResponseEntity result = systemService.getTableList(type);
        return result;
    }

    @RequestMapping("table/update")
    public ResponseEntity updateTableInfo(TableInfo table){
        ResponseEntity result = systemService.updateTableInfo(table);
        return result;
    }

//    @ResponseBody
//    @RequestMapping(value = "/apk_upload" ,method = RequestMethod.POST)
//    public Map<String, Object> uploadApkFile(HttpServletRequest request, HttpServletResponse response)
//            throws Exception {
//        request.setCharacterEncoding("UTF-8");
//
//        Map<String, Object> json = new HashMap<String, Object>();
//        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
//
//        /** 页面控件的文件流* */
//        MultipartFile multipartFile = null;
//        Map map =multipartRequest.getFileMap();
//        for (Iterator i = map.keySet().iterator(); i.hasNext();) {
//            Object obj = i.next();
//            multipartFile=(MultipartFile) map.get(obj);
//
//        }
//        /** 获取文件的后缀* */
//        String filename = multipartFile.getOriginalFilename();
//
//        InputStream inputStream;
//        String path = "";
//        String newVersionName = "";
//        String fileMd5 = "";
//        try {
//
//            inputStream = multipartFile.getInputStream();
//            File tmpFile = File.createTempFile(filename,
//                    filename.substring(filename.lastIndexOf(".")));
//            fileMd5 = Files.hash(tmpFile, Hashing.md5()).toString();
//            FileUtils.copyInputStreamToFile(inputStream, tmpFile);
//            // 上传UpYun后返回的path
//            String versionGbk = AnalysisApk.unZip(tmpFile.getPath(), "")[0];
//            byte[] versionNam = versionGbk.getBytes("iso8859-1");// 这里写转换前的编码方式
//            newVersionName = new String(versionNam, "utf-8");// 这里写转换后的编码方式
//            path = UpyunUtils.uploadApk(tmpFile,
//                    multipartFile.getOriginalFilename(), true, newVersionName);
//            System.err.println(path);
//            tmpFile.delete();
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        json.put("newVersionName", newVersionName);
//        json.put("fileMd5", fileMd5);
//        json.put("message", "应用上传成功");
//        json.put("status", true);
//        json.put("filePath", path);
//        return json;
//    }
}
