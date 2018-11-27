package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_itjf;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Wdth_tb_itjfMapper {
    int deleteByPrimaryKey(Integer sheetid);

    int insert(Wdth_tb_itjf record);

    int insertSelective(Wdth_tb_itjf record);

    Wdth_tb_itjf selectByPrimaryKey(Integer sheetid);

    int updateByPrimaryKeySelective(Wdth_tb_itjf record);

    int updateByPrimaryKey(Wdth_tb_itjf record);

    int deleteAll();
}