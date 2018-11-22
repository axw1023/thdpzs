package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_3d_fkg;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface wdth_3d_fkgMapper {
    int insert(wdth_3d_fkg record);
    int insertSelective(wdth_3d_fkg record);
    List<wdth_3d_fkg> getFkg();
}