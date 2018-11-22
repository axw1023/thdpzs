package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_ge1;

import java.util.List;

public interface Wdth_tb_it_netdata_ge1Mapper {
    int deleteByPrimaryKey(String id);

    int insert(Wdth_tb_it_netdata_ge1 record);

    int insertSelective(Wdth_tb_it_netdata_ge1 record);

    Wdth_tb_it_netdata_ge1 selectByPrimaryKey(String id);

    /*查询流量数据*/
    List<Wdth_tb_it_netdata_ge1> selectLiu();

    int updateByPrimaryKeySelective(Wdth_tb_it_netdata_ge1 record);

    int updateByPrimaryKey(Wdth_tb_it_netdata_ge1 record);
}