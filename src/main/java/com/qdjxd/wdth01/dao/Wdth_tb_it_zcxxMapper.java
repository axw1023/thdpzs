package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_zcxx;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Wdth_tb_it_zcxxMapper {
    int deleteByPrimaryKey(Integer sheetid);

    int insert(Wdth_tb_it_zcxx record);

    int insertSelective(Wdth_tb_it_zcxx record);

    /*查询数据*/

    Wdth_tb_it_zcxx selectByPrimaryKey(Integer sheetid);

    List<Wdth_tb_it_zcxx> selectAll();

    int updateByPrimaryKeySelective(Wdth_tb_it_zcxx record);

    int updateByPrimaryKey(Wdth_tb_it_zcxx record);
}