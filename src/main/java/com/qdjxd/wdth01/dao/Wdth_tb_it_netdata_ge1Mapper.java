package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_ge1;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Wdth_tb_it_netdata_ge1Mapper {
    int deleteByPrimaryKey(String id);

    int insert(Wdth_tb_it_netdata_ge1 record);

    int insertSelective(Wdth_tb_it_netdata_ge1 record);

    Wdth_tb_it_netdata_ge1 selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Wdth_tb_it_netdata_ge1 record);

    int updateByPrimaryKey(Wdth_tb_it_netdata_ge1 record);
}