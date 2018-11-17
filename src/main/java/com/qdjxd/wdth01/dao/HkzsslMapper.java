package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Hkzssl;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HkzsslMapper {
    int insert(Hkzssl record);
    
    int insertSelective(Hkzssl record);
    
    List<Hkzssl> getHkzssl();

    List<Hkzssl> getHkzssl1();
}