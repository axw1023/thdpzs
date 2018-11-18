package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_tb_it_gjtj;

public interface wdth_tb_it_gjtjMapper {
    int deleteByPrimaryKey(Integer sheetid);

    int insert(wdth_tb_it_gjtj record);

    int insertSelective(wdth_tb_it_gjtj record);

    wdth_tb_it_gjtj selectByPrimaryKey(Integer sheetid);

    int updateByPrimaryKeySelective(wdth_tb_it_gjtj record);

    int updateByPrimaryKey(wdth_tb_it_gjtj record);
}