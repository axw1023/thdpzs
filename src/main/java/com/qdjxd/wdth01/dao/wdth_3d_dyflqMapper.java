package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.wdth_3d_dyflq;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface wdth_3d_dyflqMapper {
    int insert(wdth_3d_dyflq record);

    int insertSelective(wdth_3d_dyflq record);
    List<wdth_3d_dyflq> getDyflq();
}