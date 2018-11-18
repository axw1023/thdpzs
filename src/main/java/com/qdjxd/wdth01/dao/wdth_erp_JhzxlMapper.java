package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Jhzxl;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface wdth_erp_JhzxlMapper {
    int insert(wdth_erp_Jhzxl record);

    int insertSelective(wdth_erp_Jhzxl record);
    List<wdth_erp_Jhzxl> getJhzxl();
}