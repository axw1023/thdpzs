package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_xt_page;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Wdth_xt_pageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Wdth_xt_page record);

    int insertSelective(Wdth_xt_page record);

    Wdth_xt_page selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Wdth_xt_page record);

    int updateByPrimaryKey(Wdth_xt_page record);

    List<Wdth_xt_page> selectAll();
}