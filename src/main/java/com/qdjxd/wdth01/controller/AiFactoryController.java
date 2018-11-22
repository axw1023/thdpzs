package com.qdjxd.wdth01.controller;

import com.qdjxd.wdth01.service.AiFactroyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 智能工厂Controller
 */
@Controller
@RequestMapping("ai")
public class AiFactoryController {

    @Autowired
    private AiFactroyService aiFactroyService;

    @RequestMapping("index")
    public String showIndex(){
        return "ai-factory";
    }

    /**
     * 获取页面文本信息
     */
    @RequestMapping("text/list")
    public ResponseEntity getAiFactroyText(){
        ResponseEntity result = aiFactroyService.getAiFactroyText();

        return result;
    }
}
