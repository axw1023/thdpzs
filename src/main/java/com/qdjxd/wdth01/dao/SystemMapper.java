package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.common.TreeNode;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface SystemMapper {
    List<TreeNode> getMenuList();
}
