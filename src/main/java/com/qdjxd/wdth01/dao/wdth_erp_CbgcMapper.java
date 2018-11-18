package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Cbgc;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface wdth_erp_CbgcMapper {
    int insert(wdth_erp_Cbgc record);

    int insertSelective(wdth_erp_Cbgc record);
    List<wdth_erp_Cbgc> getCbgc();
}