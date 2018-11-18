package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Hkzssl;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface wdth_erp_HkzsslMapper {
    int insert(wdth_erp_Hkzssl record);

    int insertSelective(wdth_erp_Hkzssl record);
    List<wdth_erp_Hkzssl> getHkzssl();
}