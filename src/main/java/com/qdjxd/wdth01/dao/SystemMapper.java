package com.qdjxd.wdth01.dao;

import com.qdjxd.wdth01.common.TableInfo;
import com.qdjxd.wdth01.common.TableOption;
import com.qdjxd.wdth01.common.TreeNode;
import com.qdjxd.wdth01.model.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface SystemMapper {
    List<TreeNode> getMenuList();

    List<Map> getTableList(TableOption tableName);

    void updateTableInfo(TableInfo table);

    User login(User user);
}
