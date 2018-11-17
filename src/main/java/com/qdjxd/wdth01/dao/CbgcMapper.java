package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Cbgc;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CbgcMapper {
    int insert(Cbgc record);

    int insertSelective(Cbgc record);
    
    List<Cbgc> getCbgc();
}