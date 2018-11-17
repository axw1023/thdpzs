package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Kc;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface KcMapper {
    int insert(Kc record);

    int insertSelective(Kc record);
    
    List<Kc> getKc();
}