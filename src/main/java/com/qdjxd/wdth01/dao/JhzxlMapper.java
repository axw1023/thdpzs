package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Jhzxl;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JhzxlMapper {
    int insert(Jhzxl record);

    int insertSelective(Jhzxl record);
    
    List<Jhzxl> getJhzxl();
    List<Jhzxl> getJhzxl1();
}