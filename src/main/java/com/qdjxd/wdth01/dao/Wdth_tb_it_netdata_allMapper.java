package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_netdata_all;
import org.apache.ibatis.annotations.Mapper;

import java.util.Date;
import java.util.List;

@Mapper
public interface Wdth_tb_it_netdata_allMapper {
    int deleteByPrimaryKey(String id);

    int insert(Wdth_tb_it_netdata_all record);

    int insertSelective(Wdth_tb_it_netdata_all record);

    Wdth_tb_it_netdata_all selectByPrimaryKey(String id);


    /*全部流速*/
    List<Wdth_tb_it_netdata_all> selectSu();


    int updateByPrimaryKeySelective(Wdth_tb_it_netdata_all record);

    int updateByPrimaryKey(Wdth_tb_it_netdata_all record);

    int deleteExpired(Date date);
}