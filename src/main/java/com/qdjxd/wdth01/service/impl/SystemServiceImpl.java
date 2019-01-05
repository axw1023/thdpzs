package com.qdjxd.wdth01.service.impl;

import com.qdjxd.wdth01.common.TableInfo;
import com.qdjxd.wdth01.common.TableOption;
import com.qdjxd.wdth01.common.TableOptionBuilder;
import com.qdjxd.wdth01.common.TreeNode;
import com.qdjxd.wdth01.dao.SystemMapper;
import com.qdjxd.wdth01.service.SystemService;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional(propagation = Propagation.SUPPORTS,readOnly = true)
public class SystemServiceImpl implements SystemService {

    @Autowired
    private TableOptionBuilder builder;

    @Autowired
    private SystemMapper systemMapper;

    @Autowired
    private Environment env;

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

    @Override
    @Transactional
    public ResponseEntity updateTableInfo(TableInfo table) {
        systemMapper.updateTableInfo(table);
        return null;
    }

    @Override
    public ResponseEntity welcomeImg() {
        HashMap<String,Object> dataMap =  systemMapper.welcomeImg();
        return ResponseEntity.ok(dataMap);
    }

    @Override
    public ResponseEntity getImgList() {
        List<HashMap<String , Object>> dataMap = systemMapper.getImgList();
            return ResponseEntity.ok(dataMap);
    }

    @Override
    @Transactional
    public ResponseEntity uploadImg(String name, MultipartFile file) throws IOException {
        String id = com.qdjxd.wdth01.common.StringUtils.getUUID36();
        String fileName = id+".png";
        String path = env.getProperty("img-http-head")+fileName;
        HashMap<String , String> insertImg = new HashMap<>();
        insertImg.put("id",id);
        insertImg.put("name",name);
        insertImg.put("path",path);
        InputStream in = file.getInputStream();
        FileOutputStream out = new FileOutputStream("D://video/welcome/"+fileName);
        IOUtils.copy(in,out);
        in.close();
        out.close();
        systemMapper.insertImg(insertImg);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity useImg(String id) {
        systemMapper.emptyUse();
        systemMapper.useImg(id);
        return ResponseEntity.ok(null);
    }

    @Override
    public ResponseEntity delImg(String id) {
        systemMapper.delImg(id);
        return ResponseEntity.ok(null);
    }

    private List<TreeNode> formatNodes(List<TreeNode> nodes) {
        List<TreeNode> result = new ArrayList<>();
        for (TreeNode node:
             nodes) {
            if (StringUtils.isEmpty(node.getParent())){
                result.add(node);
            }
        }
        for (TreeNode node:
             nodes) {
            for (TreeNode r: result){
                if (r.getId().equals(node.getParent())){
                    r.add(node);
                }
            }
        }
        return result;
    }

}
