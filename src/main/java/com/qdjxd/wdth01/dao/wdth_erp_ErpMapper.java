package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Erp;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface wdth_erp_ErpMapper {
    int insert(wdth_erp_Erp record);

    int insertSelective(wdth_erp_Erp record);
    List<wdth_erp_Erp> getErp();
}