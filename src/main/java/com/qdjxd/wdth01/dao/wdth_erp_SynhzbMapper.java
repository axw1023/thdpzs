package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_erp_Synhzb;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface wdth_erp_SynhzbMapper {
    int insert(wdth_erp_Synhzb record);

    int insertSelective(wdth_erp_Synhzb record);

    List<wdth_erp_Synhzb> getSynhzb();
}