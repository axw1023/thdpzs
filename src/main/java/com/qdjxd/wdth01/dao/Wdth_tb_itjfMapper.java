package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_itjf;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface Wdth_tb_itjfMapper {
    int deleteByPrimaryKey(Integer sheetid);

    int insert(Wdth_tb_itjf record);

    int insertSelective(Wdth_tb_itjf record);

    Wdth_tb_itjf selectByPrimaryKey(Integer sheetid);
/*机房查询*/
   List<Wdth_tb_itjf> jf ();

    int updateByPrimaryKeySelective(Wdth_tb_itjf record);

    int updateByPrimaryKey(Wdth_tb_itjf record);
}