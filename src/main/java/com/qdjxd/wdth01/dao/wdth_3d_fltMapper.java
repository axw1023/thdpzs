package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_3d_flt;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface wdth_3d_fltMapper {
    int insert(wdth_3d_flt record);

    int insertSelective(wdth_3d_flt record);
    
    List<wdth_3d_flt> getFlt();
}