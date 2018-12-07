package com.qdjxd.wdth01.service.impl;

import com.qdjxd.wdth01.common.TableOption;
import com.qdjxd.wdth01.common.TableOptionBuilder;
import com.qdjxd.wdth01.common.TreeNode;
import com.qdjxd.wdth01.dao.SystemMapper;
import com.qdjxd.wdth01.service.SystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class SystemServiceImpl implements SystemService {

    @Autowired
    private TableOptionBuilder builder;

    @Autowired
    private SystemMapper systemMapper;

    @Override
    public ResponseEntity getMenuList() {
        List<TreeNode> nodes = systemMapper.getMenuList();
        List<TreeNode> result = formatNodes(nodes);
        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity getTableFormatData(String type) {
        TableOption tableOption = builder.getTableOptionByKey(type);
        return ResponseEntity.ok(tableOption);
    }

    @Override
    public ResponseEntity getTableList(String type) {
        TableOption tableOption = builder.getTableOptionByKey(type);
        List<Map> dataMap = systemMapper.getTableList(tableOption);
        return ResponseEntity.ok(dataMap);
    }

    private List<TreeNode> formatNodes(List<TreeNode> nodes) {
        List<TreeNode> result = new ArrayList<>();
        for (TreeNode node:
             nodes) {
            if (StringUtils.isEmpty(node.getParent())) result.add(node);
        }
        for (TreeNode node:
             nodes) {
            for (TreeNode r: result){
                if (r.getId().equals(node.getParent()))
                    r.add(node);
            }
        }
        return result;
    }


}
