package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_alllink_data;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Wdth_alllink_dataMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Wdth_alllink_data record);

    int insertSelective(Wdth_alllink_data record);

    Wdth_alllink_data selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Wdth_alllink_data record);

    int updateByPrimaryKey(Wdth_alllink_data record);

    List<Wdth_alllink_data> selectAll();
}