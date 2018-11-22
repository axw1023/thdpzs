package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_ge1;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Wdth_tb_it_netdata_ge1Mapper {
    int deleteByPrimaryKey(String id);

    int insert(Wdth_tb_it_netdata_ge1 record);

    int insertSelective(Wdth_tb_it_netdata_ge1 record);

    Wdth_tb_it_netdata_ge1 selectByPrimaryKey(String id);
    /*查询全部*/
    List<Wdth_tb_it_netdata_ge1> ByAll();


    int updateByPrimaryKeySelective(Wdth_tb_it_netdata_ge1 record);

    int updateByPrimaryKey(Wdth_tb_it_netdata_ge1 record);
}