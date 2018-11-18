package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Kc;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface wdth_erp_KcMapper {
    int insert(wdth_erp_Kc record);

    int insertSelective(wdth_erp_Kc record);

    List<wdth_erp_Kc> getKc();
}