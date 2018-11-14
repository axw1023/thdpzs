package com.qdjxd.wdth01;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication

@MapperScan("qdjxd.wdth01.dao")//将项目中对应的mapper类的路径加进来就可以
public class Wdth01Application {

	public static void main(String[] args) {
		SpringApplication.run(Wdth01Application.class, args);
	}
}
