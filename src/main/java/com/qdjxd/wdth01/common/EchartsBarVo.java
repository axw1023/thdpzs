package com.qdjxd.wdth01.common;

import java.util.LinkedList;
import java.util.List;

public class EchartsBarVo extends BaseEchartsVo {

    private List<String> xlineList;

    private List<? extends Number> ylineList;

    public List<String> getXlineList() {
        return xlineList;
    }

    public void setXlineList(List<String> xlineList) {
        this.xlineList = xlineList;
    }

    public List<? extends Number> getYlineList() {
        return ylineList;
    }

    public void setYlineList(LinkedList<? extends Number> ylineList) {
        this.ylineList = ylineList;
    }
}
