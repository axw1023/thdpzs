
//package com.qdjxd.wdth01.controller;
//
//import com.alibaba.fastjson.JSONArray;
//import com.alibaba.fastjson.JSONObject;
//import com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_allMapper;
//import com.qdjxd.wdth01.dao.Wdth_tb_it_netdata_ge1Mapper;
//import com.qdjxd.wdth01.dao.Wdth_tb_itjfMapper;
//import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_all;
//import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_ge1;
//import com.qdjxd.wdth01.model.Wdth_tb_itjf;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import javax.annotation.Resource;
//import java.io.BufferedReader;
//import java.io.IOException;
//import java.io.InputStreamReader;
//import java.io.PrintWriter;
//import java.net.HttpURLConnection;
//import java.net.URL;
//import java.net.URLConnection;
//import java.util.*;
//
//@Controller
//@RequestMapping("/ITData")
//public class NetDataController {
///*
//    @Resource
//    Wdth_tb_it_netdata_ge1Mapper ge1_dao;
//    @Resource
//    Wdth_tb_it_netdata_allMapper all_dao;
//    @Resource
//    Wdth_tb_itjfMapper itjf_dao;*/
//
//
//    //循环获取网络流量进出入情况(每隔一个小时)
////    @Scheduled(fixedRate = 86400000)
////    public void deleteExpired() throws Exception {
////
////        //删除一天之前的数据
////        Calendar c = Calendar.getInstance();
////        c.setTime(new Date());
////        c.add(Calendar.DATE, -1);
////        Date date = c.getTime();
////        int result_ge1 = ge1_dao.deleteExpired(date);
////        int result_all = all_dao.deleteExpired(date);
////
////    }
////
////    //获取网路流量进出入情况（每分钟）
////
////    @Scheduled(fixedRate = 60000)
////    public void netData() throws Exception {
////
////        //查询GE1输入输出量
////        Wdth_tb_it_netdata_ge1 ge1 = new Wdth_tb_it_netdata_ge1();
////        Date date = new Date();
////        String id = UUID.randomUUID().toString();
////
////        //url地址
////        String urlStr = "http://10.1.11.114/api/json/device/getInterfaces?apiKey=1152d6804e60e481629e6f2acb678e5f&name=10.0.0.2";
////        String data = (new NetDataController()).getURLContent(urlStr);
////        //先转Array再转object
////        JSONArray objects = JSONArray.parseArray(data);
////        JSONObject object = objects.getJSONObject(27);
////
////        ge1.setId(id);
////        ge1.setTrimmeddispname(object.get("trimmedDispName").toString());
////        ge1.setIntraffic(Double.parseDouble(object.get("inTraffic").toString().split(" ")[0].toString()));
////        ge1.setOuttraffic(Double.parseDouble(object.get("outTraffic").toString().split(" ")[0].toString()));
////        ge1.setTime(date);
////        int recode = ge1_dao.insert(ge1);
////
//////            Thread.sleep(60000);
////
////
////        //查询流量输入、输出总量
////        Wdth_tb_it_netdata_all all = new Wdth_tb_it_netdata_all();
////        String urlStr_all = "http://10.1.11.114/api/json/device/getInterfaces?apiKey=1152d6804e60e481629e6f2acb678e5f&name=10.0.10.9";
////        String data_all = (new NetDataController()).getURLContent(urlStr_all);
////        JSONArray objects_all = JSONArray.parseArray(data_all);
////
////        double inTraffic_sum = 0;
////        double outTraffic_sum = 0;
////
////        for (int i = 0; i < objects_all.size(); i++) {
////            JSONObject object_all = objects_all.getJSONObject(i);
////            String inTraffic = object_all.get("inTraffic").toString();
////            String outTraffic = object_all.get("outTraffic").toString();
////            String[] ints = inTraffic.split(" ");
////            String[] outts = outTraffic.split(" ");
////            if ("M".equals(ints[1])) {
////
////                inTraffic_sum += Double.parseDouble(ints[0]);
////                outTraffic_sum += Double.parseDouble(outts[0]);
////            }
////        }
////        all.setId(id);
////        all.setAllIntraffic(inTraffic_sum);
////        all.setAllOuttraffic(outTraffic_sum);
////        all.setTime(date);
////
////        int result = all_dao.insert(all);
////    }
////
////    /**
////     * 程序中访问http数据接口
////     */
////    public static String getURLContent(String urlStr) {
////        /** 网络的url地址 */
////        URL url = null;
////        /** http连接 */
////        HttpURLConnection httpConn = null;
////        /**//** 输入流 */
////        BufferedReader in = null;
////        StringBuffer sb = new StringBuffer();
////        try {
////            url = new URL(urlStr);
////            in = new BufferedReader(new InputStreamReader(url.openStream(), "GBK"));
////            String str = null;
////            while ((str = in.readLine()) != null) {
////                sb.append(str);
////            }
////        } catch (Exception ex) {
////
////        } finally {
////            try {
////                if (in != null) {
////                    in.close();
////                }
////            } catch (IOException ex) {
////            }
////        }
////        String result = sb.toString();
//////        System.out.println(result);
////        return result;
////    }
////
////
//////    IT机房
////    @Scheduled(fixedRate = 3600000)
////    public void Itjf() {
//////        //发送 GET 请求
//////        String s=sendGet("http://localhost:6144/Home/RequestString", "key=123&v=456");
//////        System.out.println(s);
////
//////        删除历史记录
////        itjf_dao.deleteAll();
////
////        //发送 POST 请求(机柜、漏水、市电、ups)
////        List<String> name = new ArrayList<String>();
////        List<String> value = new ArrayList<String>();
////
////        String jg = sendPost("http://10.0.10.103:16017/ljdimsiface/", "{\"jsonrpc\":\"2.0\",\"id\":84,\"session\":\"1467798515187\",\"method\":\"Rtd_GetByDevAlias\",\"params\":[\"WSD02_\"]}");
////        String ls = sendPost("http://10.0.10.103:16017/ljdimsiface/", "{\"jsonrpc\":\"2.0\",\"id\":84,\"session\":\"1467798515187\",\"method\":\"Rtd_GetByDevAlias\",\"params\":[\"LS01_\"]}");
////        String sd = sendPost("http://10.0.10.103:16017/ljdimsiface/", "{\"jsonrpc\":\"2.0\",\"id\":84,\"session\":\"1467798515187\",\"method\":\"Rtd_GetByDevAlias\",\"params\":[\"SDDLY01_\"]}");
////        String ups = sendPost("http://10.0.10.103:16017/ljdimsiface/", "{\"jsonrpc\":\"2.0\",\"id\":84,\"session\":\"1467798515187\",\"method\":\"Rtd_GetByDevAlias\",\"params\":[\"UPS01_\"]}");
////
////       System.out.println(jg);
////        System.out.println(ls);
////        System.out.println(sd);
////        System.out.println(ups);
////
////        JSONObject jObj = JSONObject.parseObject(jg);
////        JSONObject lsob = JSONObject.parseObject(ls);
////        JSONObject sdob = JSONObject.parseObject(sd);
////        JSONObject upsob = JSONObject.parseObject(ups);
////
//////        温度
////        String wdst = jObj.getJSONArray("result").getJSONObject(1).getString("RtValue");
////        String wdstname = jObj.getJSONArray("result").getJSONObject(1).getString("Name");
////        value.add(wdst);
////        name.add(wdstname);
////
//////        湿度
////        String sdst = jObj.getJSONArray("result").getJSONObject(2).getString("RtValue");
////        String sdstname = jObj.getJSONArray("result").getJSONObject(2).getString("Name");
////        value.add(sdst);
////        name.add(sdstname);
//////        空调漏水
////        String ktlsst = lsob.getJSONArray("result").getJSONObject(1).getString("AlarmType");
////        String ktlsstname = lsob.getJSONArray("result").getJSONObject(1).getString("Name");
////        value.add(ktlsst);
////        name.add(ktlsstname);//        消防报警
////        String xfbjst = lsob.getJSONArray("result").getJSONObject(2).getString("AlarmType");
////        String xfbjstname = lsob.getJSONArray("result").getJSONObject(2).getString("Name");
////        value.add(xfbjst);
////        name.add(xfbjstname);//        市电停电报警
////        String sdtdbj = sdob.getJSONArray("result").getJSONObject(16).getString("AlarmType");
////        String sdtdbjname = sdob.getJSONArray("result").getJSONObject(16).getString("Name");
////        value.add(sdtdbj);
////        name.add(sdtdbjname);//        A相电压断相报警
////        String axddbj = sdob.getJSONArray("result").getJSONObject(15).getString("AlarmType");
////        String axddbjname = sdob.getJSONArray("result").getJSONObject(15).getString("Name");
////        value.add(axddbj);
////        name.add(axddbjname);
//////        B相电压断相报警
////        String bxddbj = sdob.getJSONArray("result").getJSONObject(16).getString("AlarmType");
////        String bxddbjname = sdob.getJSONArray("result").getJSONObject(16).getString("Name");
////        value.add(bxddbj);
////        name.add(bxddbjname);//        C相电压断相报警
////        String cxddbj = sdob.getJSONArray("result").getJSONObject(17).getString("AlarmType");
////        String cxddbjname = sdob.getJSONArray("result").getJSONObject(17).getString("Name");
////        value.add(cxddbj);
////        name.add(cxddbjname);//        A相输出电流
////        String axscdl = upsob.getJSONArray("result").getJSONObject(7).getString("RtValue");
////        String axscdlname = upsob.getJSONArray("result").getJSONObject(7).getString("Name");
////        value.add(axscdl);
////        name.add(axscdlname);//        B相输出电流
////        String bxscdl = upsob.getJSONArray("result").getJSONObject(8).getString("RtValue");
////        String bxscdlname = upsob.getJSONArray("result").getJSONObject(8).getString("Name");
////        value.add(bxscdl);
////        name.add(bxscdlname);//        C相输出电流
////        String cxscdl = upsob.getJSONArray("result").getJSONObject(9).getString("RtValue");
////        String cxscdlname = upsob.getJSONArray("result").getJSONObject(9).getString("Name");
////        value.add(cxscdl);
////        name.add(cxscdlname);//        电池后备时间
////        String dchbsj = upsob.getJSONArray("result").getJSONObject(37).getString("RtValue");
////        String dchbsjname = upsob.getJSONArray("result").getJSONObject(37).getString("Name");
////        value.add(dchbsj);
////        name.add(dchbsjname);
////        for(int i = 0;i < name.size();i++){
////            Wdth_tb_itjf itjf = new Wdth_tb_itjf();
////            itjf.setSheetid(i);
////            itjf.setName(name.get(i));
////            itjf.setValue(Double.parseDouble(value.get(i)));
////            itjf_dao.insert(itjf);
////        }
////
////
////
////
////
////
////
////
////
////
////    }
////
////
//    /**
//     * 向指定URL发送GET方法的请求
//     *
//     * @param url   发送请求的URL
//     * @param param 请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
//     * @return URL 所代表远程资源的响应结果
//     */
//    public static String sendGet(String url, String param) {
//        String result = "";
//        BufferedReader in = null;
//        try {
//            String urlNameString = url + "?" + param;
//            URL realUrl = new URL(urlNameString);
//            // 打开和URL之间的连接
//            URLConnection connection = realUrl.openConnection();
//            // 设置通用的请求属性
//            connection.setRequestProperty("accept", "*/*");
//            connection.setRequestProperty("connection", "Keep-Alive");
//            connection.setRequestProperty("user-agent",
//                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
//            // 建立实际的连接
//            connection.connect();
//            // 获取所有响应头字段
//            Map<String, List<String>> map = connection.getHeaderFields();
//            // 遍历所有的响应头字段
//            for (String key : map.keySet()) {
//                System.out.println(key + "--->" + map.get(key));
//            }
//            // 定义 BufferedReader输入流来读取URL的响应
//            in = new BufferedReader(new InputStreamReader(
//                    connection.getInputStream()));
//            String line;
//            while ((line = in.readLine()) != null) {
//                result += line;
//            }
//        } catch (Exception e) {
//            System.out.println("发送GET请求出现异常！" + e);
//            e.printStackTrace();
//        }
//        // 使用finally块来关闭输入流
//        finally {
//            try {
//                if (in != null) {
//                    in.close();
//                }
//            } catch (Exception e2) {
//                e2.printStackTrace();
//            }
//        }
//        return result;
//    }
//
//
////    @RequestMapping("/data")
////
////
////    /**
////     * 向指定 URL 发送POST方法的请求
////     *
////     * @param url   发送请求的 URL
////     * @param param 请求参数，请求参数应该是 name1=value1&name2=value2 的形式。
////     * @return 所代表远程资源的响应结果
////     */
////    public static String sendPost(String url, String param) {
////        PrintWriter out = null;
////        BufferedReader in = null;
////        String result = "";
////        try {
////            URL realUrl = new URL(url);
////            // 打开和URL之间的连接
////            URLConnection conn = realUrl.openConnection();
////            // 设置通用的请求属性
////            conn.setRequestProperty("accept", "*/*");
////            conn.setRequestProperty("connection", "Keep-Alive");
////            conn.setRequestProperty("user-agent",
////                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
////            // 发送POST请求必须设置如下两行
////            conn.setDoOutput(true);
////            conn.setDoInput(true);
////            // 获取URLConnection对象对应的输出流
////            out = new PrintWriter(conn.getOutputStream());
////            // 发送请求参数
////            out.print(param);
////            // flush输出流的缓冲
////            out.flush();
////            // 定义BufferedReader输入流来读取URL的响应
////            in = new BufferedReader(
////                    new InputStreamReader(conn.getInputStream()));
////            String line;
////            while ((line = in.readLine()) != null) {
////                result += line;
////            }
////        } catch (Exception e) {
////            System.out.println("发送 POST 请求出现异常！" + e);
////            e.printStackTrace();
////        }
////        //使用finally块来关闭输出流、输入流
////        finally {
////            try {
////                if (out != null) {
////                    out.close();
////                }
////                if (in != null) {
////                    in.close();
////                }
////            } catch (IOException ex) {
////                ex.printStackTrace();
////            }
////        }
////        return result;
////    }
//
//
//    @RequestMapping(value = "/BusinessDetailsView", method = RequestMethod.GET)
//    @ResponseBody
//    Map<String,Object> BusinessDetailsView(){
//        String status=sendGet("http://10.1.11.114/api/json/businessview/getBusinessDetailsView","apiKey=1152d6804e60e481629e6f2acb678e5f&viewLength=250&startPoint=1&bvName=tianhong");
//        JSONObject business=JSONObject.parseObject(status);
//        return business;
//    }
//
//
//}
