package com.qdjxd.wdth01.common;

import com.mysql.cj.xdevapi.Table;
import org.dom4j.Attribute;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;
import org.springframework.util.StringValueResolver;

import java.io.IOException;
import java.io.InputStream;
import java.util.*;

@Repository
public class TableOptionBuilder {

    private final Map<String,TableOption> tableMap = new HashMap<>();
    private static final  String path = "/env/table.xml";

    public TableOptionBuilder() throws DocumentException, IOException {
        //解析dom4j
        analysisTableXml();
        System.out.println(tableMap);
    }

    public TableOption getTableOptionByKey(String key){
        TableOption tableOption = tableMap.get(key);
        return tableOption;
    }

    private void analysisTableXml() throws DocumentException, IOException {
        SAXReader reader = new SAXReader();
        InputStream in = this.getClass().getResourceAsStream(path);
        Document doc = reader.read(in);
        //获取根节点元素
        Element root = doc.getRootElement();
        //获取二级table标签
        Iterator<Element> tables = root.elementIterator("table");
        while(tables.hasNext()){
            Element table = tables.next();
            //获取table下的属性
            String key = table.attribute("key").getValue();
            String tableName = table.attribute("name").getValue();
            TableOption tableOption = new TableOption(tableName);
            //获取Cloumn元素
            Iterator<Element> columns = table.elementIterator();
            //存入TableOption
            insertColumnToTableOption(tableOption,columns);
            tableMap.put(key,tableOption);
        }
        in.close();

    }

    private void insertColumnToTableOption(TableOption tableOption, Iterator<Element> columns) {
        while(columns.hasNext()){
            Element column = columns.next();

            boolean visible = true;

            String field = null;
            String title = null;
            String align = "center";
            String width = null;
            String valign = "middle";
            Attribute fieldArr = column.attribute("field");
            String name = column.getName();
            if ("id".equals(name))
             tableOption.setIdColumn(fieldArr.getValue());
            Attribute titleArr = column.attribute("title");
            Attribute alignArr = column.attribute("align");
            Attribute widthArr = column.attribute("width");
            Attribute radioArr = column.attribute("radio");
            Attribute valignArr = column.attribute("valign");
            //验证
            if (fieldArr!=null) field = fieldArr.getValue();
            if (titleArr==null) visible = false;
            else title = titleArr.getValue();
            if (alignArr!=null) align = alignArr.getValue();
            if (valignArr != null) valign = valignArr.getValue();
            if (widthArr != null) width = widthArr.getValue() +"px";

            tableOption.addColumn(visible,title,align,width,valign,field);
        }
    }
}
