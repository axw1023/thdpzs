package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.model.Wdth_tb_it_yjszxzy;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface Wdth_tb_it_yjszxzyMapper {
    int deleteByPrimaryKey(Integer sheetid);

    int insert(Wdth_tb_it_yjszxzy record);

    int insertSelective(Wdth_tb_it_yjszxzy record);

    //查询所有数据
    List<Wdth_tb_it_yjszxzy> selectByPrimaryKey();
    List<Wdth_tb_it_yjszxzy> getAll();
    int updateByPrimaryKeySelective(Wdth_tb_it_yjszxzy record);

    int updateByPrimaryKey(Wdth_tb_it_yjszxzy record);
}