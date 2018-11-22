package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.BigDataCommon;
import com.qdjxd.wdth01.model.BigDataCoord;
import com.qdjxd.wdth01.model.BigDataFeed;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface wdth_bd_Mapper {

    List<BigDataCoord> getFirstData();

    List<BigDataCoord> getSecondData();

    List<BigDataCoord> getThreeData();

    List<BigDataCoord> getLayerData();

    List<BigDataCommon> getPointData();

    List<BigDataFeed> getFeedData();

    List<BigDataCommon> getCharData();

    List<BigDataCommon> getThreePie();

    List<BigDataCommon> getTemData();

    List<BigDataCommon> getThreeLine();

    List<BigDataCommon> getDoubleBar();
}