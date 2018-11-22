package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_3d_ylyr;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface wdth_3d_ylyrMapper {
    int insert(wdth_3d_ylyr record);

    int insertSelective(wdth_3d_ylyr record);
    List<wdth_3d_ylyr> getYlyr();
}