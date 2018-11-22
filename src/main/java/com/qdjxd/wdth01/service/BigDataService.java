package com.qdjxd.wdth01.service;
import com.qdjxd.wdth01.model.BigDataCommon;
import com.qdjxd.wdth01.model.BigDataFeed;

import java.util.List;
import java.util.Map;

/**
 *
 * 大数据Service
 */
public interface BigDataService {
    /**
     * 获取坐标数据
     * @return
     */
    Map<String,Object> getCoordData();

    /*
        获取点位信息
     */
    List<BigDataCommon> getPointData();

    /*
    投料化验分析
     */
    List<BigDataFeed> getFeedData();

    List<BigDataCommon> getCharData();

    List<BigDataCommon> getThreePie();

    List<BigDataCommon> getTemData();

    List<BigDataCommon> getThreeLine();

    List<BigDataCommon> getDoubleBar();
}
