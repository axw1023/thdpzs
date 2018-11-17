package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Xsqk;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface XsqkMapper {
    int insert(Xsqk record);

    int insertSelective(Xsqk record);

    List<Xsqk> getXsqk();
}