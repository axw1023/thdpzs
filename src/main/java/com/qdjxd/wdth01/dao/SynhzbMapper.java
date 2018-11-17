package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Synhzb;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SynhzbMapper {
    int insert(Synhzb record);

    int insertSelective(Synhzb record);
    
    List<Synhzb> getSynhzb();
}