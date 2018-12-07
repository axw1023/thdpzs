package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.common.TableOption;
import com.qdjxd.wdth01.common.TreeNode;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface SystemMapper {
    List<TreeNode> getMenuList();

    List<Map> getTableList(TableOption tableName);
}
