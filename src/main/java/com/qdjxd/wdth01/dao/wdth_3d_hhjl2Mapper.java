package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_3d_hhjl2;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface wdth_3d_hhjl2Mapper {
    int insert(wdth_3d_hhjl2 record);

    int insertSelective(wdth_3d_hhjl2 record);
    List<wdth_3d_hhjl2> getHhjl2();
}