package com.qdjxd.wdth01.common;

import java.util.LinkedList;
import java.util.List;

public class TreeNode {

    private String id;
    private String name;
    private String path;
    private String parent;
    private List<TreeNode> childrenNodes;

    public String getParent() {
        return parent;
    }

    public void setParent(String parent) {
        this.parent = parent;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public List<?> getChildrenNodes() {
        return childrenNodes;
    }

    public void setChildrenNodes(List<TreeNode> childrenNodes) {
        this.childrenNodes = childrenNodes;
    }

    public void add(TreeNode node){
        if (childrenNodes == null){ childrenNodes=new LinkedList<>();}
        childrenNodes.add(node);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (obj==null|| !(obj instanceof TreeNode)){ return false;}
        return this.id.equals(((TreeNode) obj).getId());
    }
}
