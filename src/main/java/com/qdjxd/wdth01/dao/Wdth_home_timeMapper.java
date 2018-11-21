package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_home_time;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Wdth_home_timeMapper {
    int deleteByPrimaryKey(String trimmeddispname);

    int insert(Wdth_home_time record);

    int insertSelective(Wdth_home_time record);

    Wdth_home_time selectByPrimaryKey(String trimmeddispname);

    int updateByPrimaryKeySelective(Wdth_home_time record);

    int updateByPrimaryKey(Wdth_home_time record);

    List<Wdth_home_time> selectAll();
}