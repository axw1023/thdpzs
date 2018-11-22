package com.qdjxd.wdth01.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_allMapper;
import com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_ge1Mapper;
import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_all;
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
    @Resource
    Wdth_tb_it_netdata_allMapper all_dao;

    @RequestMapping("/data")
    public void main(String[] args) throws Exception {

            //查询GE1输入输出量
            Wdth_tb_it_netdata_ge1 ge1 = new Wdth_tb_it_netdata_ge1();
            Date date = new Date();
            String id = UUID.randomUUID().toString();

            //url地址
            String urlStr = "http://10.1.11.114/api/json/device/getInterfaces?apiKey=1152d6804e60e481629e6f2acb678e5f&name=10.0.0.2";
            String data = (new NetDataController()).getURLContent(urlStr);
            //先转Array再转object
            JSONArray objects = JSONArray.parseArray(data);
            JSONObject object = objects.getJSONObject(27);

            ge1.setId(id);
            ge1.setTrimmeddispname(object.get("trimmedDispName").toString());
            ge1.setIntraffic(Double.parseDouble(object.get("inTraffic").toString().split(" ")[0].toString()));
            ge1.setOuttraffic(Double.parseDouble(object.get("outTraffic").toString().split(" ")[0].toString()));
            ge1.setTime(date);
            int recode = ge1_dao.insert(ge1);

//            Thread.sleep(60000);


        //查询流量输入、输出总量
        Wdth_tb_it_netdata_all all = new Wdth_tb_it_netdata_all();
        String urlStr_all = "http://10.1.11.114/api/json/device/getInterfaces?apiKey=1152d6804e60e481629e6f2acb678e5f&name=10.0.10.9";
        String data_all = (new NetDataController()).getURLContent(urlStr_all);
        JSONArray objects_all = JSONArray.parseArray(data_all);

        double inTraffic_sum = 0;
        double outTraffic_sum = 0;

        for(int i = 0;i < objects_all.size();i++){
            JSONObject object_all = objects_all.getJSONObject(i);
            String inTraffic = object_all.get("inTraffic").toString();
            String outTraffic = object_all.get("outTraffic").toString();
            String[] ints = inTraffic.split(" ");
            String[] outts = outTraffic.split(" ");
            if("M".equals(ints[1])){

                inTraffic_sum += Double.parseDouble(ints[0]);
                outTraffic_sum += Double.parseDouble(outts[0]);
            }
        }
        all.setId(id);
        all.setAllIntraffic(inTraffic_sum);
        all.setAllOuttraffic(outTraffic_sum);
        all.setTime(date);

        int result = all_dao.insert(all);

















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
