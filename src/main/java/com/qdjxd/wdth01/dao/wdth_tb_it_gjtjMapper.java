package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_gjtj;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Wdth_tb_it_gjtjMapper {
    int deleteByPrimaryKey(Integer sheetid);

    int insert(Wdth_tb_it_gjtj record);

    int insertSelective(Wdth_tb_it_gjtj record);

    //告警统计数据查询
    Wdth_tb_it_gjtj selectgjtjData();
    //告警统计数据查询 带参
    List<Wdth_tb_it_gjtj> selectByPrimaryKey();

    int updateByPrimaryKeySelective(Wdth_tb_it_gjtj record);

    int updateByPrimaryKey(Wdth_tb_it_gjtj record);
}