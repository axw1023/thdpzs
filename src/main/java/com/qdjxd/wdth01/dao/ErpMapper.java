package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Erp;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ErpMapper {
    int insert(Erp record);

    int insertSelective(Erp record);
    
    List<Erp> getErp();
}