package com.qdjxd.wdth01.common;

import java.util.UUID;

public class StringUtils {

    public static String getUUID36(){
        String s = UUID.randomUUID().toString();
        return s;
    }
}
