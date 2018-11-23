package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_all;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;

@Mapper
public interface Wdth_tb_it_netdata_allMapper {
    int deleteByPrimaryKey(String id);

    int insert(Wdth_tb_it_netdata_all record);

    int insertSelective(Wdth_tb_it_netdata_all record);

    Wdth_tb_it_netdata_all selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(Wdth_tb_it_netdata_all record);

    int updateByPrimaryKey(Wdth_tb_it_netdata_all record);

    int deleteExpired(Date date);
}