package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Ylly;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface YllyMapper {
    int insert(Ylly record);

    int insertSelective(Ylly record);
    
    List<Ylly> getYlly();
}