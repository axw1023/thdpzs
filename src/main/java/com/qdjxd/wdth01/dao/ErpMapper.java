package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Erp;

public interface ErpMapper {
    int insert(Erp record);

    int insertSelective(Erp record);
}