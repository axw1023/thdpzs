package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Ylly;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface wdth_erp_YllyMapper {
    int insert(wdth_erp_Ylly record);

    int insertSelective(wdth_erp_Ylly record);

    List<wdth_erp_Ylly> getYlly();
}