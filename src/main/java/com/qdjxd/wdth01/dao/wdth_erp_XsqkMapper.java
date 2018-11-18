package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Xsqk;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper

public interface wdth_erp_XsqkMapper {
    int insert(wdth_erp_Xsqk record);

    int insertSelective(wdth_erp_Xsqk record);

    List<wdth_erp_Xsqk> getXsqk();
}