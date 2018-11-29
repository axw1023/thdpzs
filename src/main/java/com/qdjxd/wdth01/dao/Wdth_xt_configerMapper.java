package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_xt_configer;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Wdth_xt_configerMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Wdth_xt_configer record);

    int insertSelective(Wdth_xt_configer record);

    Wdth_xt_configer selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Wdth_xt_configer record);

    int updateByPrimaryKey(Wdth_xt_configer record);
}