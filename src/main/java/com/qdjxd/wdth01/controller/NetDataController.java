package com.qdjxd.wdth01.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_ge1Mapper;
import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_ge1;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Date;
import java.util.UUID;

@Controller
@RequestMapping("/IT")
public class NetDataController {

    @Resource
    Wdth_tb_it_netdata_ge1Mapper ge1_dao;

    @RequestMapping("/data")
    public void main(String[] args) throws Exception {

        for(int i = 0;i < 500;i++) {

            Wdth_tb_it_netdata_ge1 ge1 = new Wdth_tb_it_netdata_ge1();
            Date date = new Date();
            String id = UUID.randomUUID().toString();
//        url地址
            String urlStr = "http://10.1.11.114/api/json/device/getInterfaces?apiKey=1152d6804e60e481629e6f2acb678e5f&name=10.0.0.2";
            String data = (new NetDataController()).getURLContent(urlStr);
            JSONArray objects = JSONArray.parseArray(data);
            JSONObject object = objects.getJSONObject(27);

            ge1.setId(id);
            ge1.setTrimmeddispname(object.get("trimmedDispName").toString());
            ge1.setIntraffic(object.get("inTraffic").toString());
            ge1.setOuttraffic(object.get("outTraffic").toString());
            ge1.setTime(date);
            int recode = ge1_dao.insert(ge1);

            Thread.sleep(6000);

        }

//        //all
//
//        String urlStr_all = "http://10.1.11.114/api/json/device/getInterfaces?apiKey=1152d6804e60e481629e6f2acb678e5f&name=10.0.10.9";
//        String data_all = (new NetDataController()).getURLContent(urlStr_all);
//        JSONArray objects_all = JSONArray.parseArray(data_all);

















    }




    /**
     * 程序中访问http数据接口
     */
    public static String getURLContent(String urlStr) {
        /** 网络的url地址 */
        URL url = null;
        /** http连接 */
        HttpURLConnection httpConn = null;
        /**//** 输入流 */
        BufferedReader in = null;
        StringBuffer sb = new StringBuffer();
        try {
            url = new URL(urlStr);
            in = new BufferedReader(new InputStreamReader(url.openStream(), "GBK"));
            String str = null;
            while ((str = in.readLine()) != null) {
                sb.append(str);
            }
        } catch (Exception ex) {

        } finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (IOException ex) {
            }
        }
        String result = sb.toString();
//        System.out.println(result);
        return result;
    }

}
