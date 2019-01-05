package com.qdjxd.wdth01.service.impl;


import com.qdjxd.wdth01.dao.wdth_bd_Mapper;
import com.qdjxd.wdth01.model.BigDataCommon;
import com.qdjxd.wdth01.model.BigDataCoord;
import com.qdjxd.wdth01.model.BigDataFeed;
import com.qdjxd.wdth01.service.BigDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 *大数据
 */
@Service
public class BigDataServiceImpl implements BigDataService {

    @Autowired
    private wdth_bd_Mapper wdth_bd_Mapper1;
    @Override
    public Map<String,Object> getCoordData() {
        List<BigDataCoord> firstData =wdth_bd_Mapper1.getFirstData();
        List<BigDataCoord> secondData=wdth_bd_Mapper1.getSecondData();
        List<BigDataCoord> threeData=wdth_bd_Mapper1.getThreeData();
        List<BigDataCoord> layerData=wdth_bd_Mapper1.getLayerData();
        Map<String,Object> map=new HashMap<>(3);
        map.put("first",firstData);
        map.put("second",secondData);
        map.put("three",threeData);
        map.put("layer",layerData);
        return map;
    }
    @Override
   public List<BigDataCommon> getPointData(){

        return wdth_bd_Mapper1.getPointData();
    }
    @Override
    public List<BigDataFeed> getFeedData(){
       return wdth_bd_Mapper1.getFeedData();
    }
    @Override
    public List<BigDataCommon> getCharData(){
        return wdth_bd_Mapper1.getCharData();
    }

    @Override
    public List<BigDataCommon> getThreePie(){
        return wdth_bd_Mapper1.getThreePie();
    }
    @Override
    public List<BigDataCommon> getTemData(){
        return wdth_bd_Mapper1.getTemData();
    }
    @Override
    public List<BigDataCommon> getThreeLine(){
        return wdth_bd_Mapper1.getThreeLine();
    }
    @Override
    public List<BigDataCommon> getDoubleBar(){
       return wdth_bd_Mapper1.getDoubleBar();
   }

}
