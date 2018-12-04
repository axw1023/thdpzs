package com.qdjxd.wdth01.common;

import java.util.List;

public class TableOption {
    private String tableName ;
    private List<Cloumn> columns;

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName;
    }

    public List<Cloumn> getColumns() {
        return columns;
    }

    public void setColumns(List<Cloumn> columns) {
        this.columns = columns;
    }

}
