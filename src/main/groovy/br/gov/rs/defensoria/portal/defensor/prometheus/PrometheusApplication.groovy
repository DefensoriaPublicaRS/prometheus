package br.gov.rs.defensoria.portal.defensor.prometheus

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer
import org.springframework.cloud.netflix.zuul.EnableZuulProxy

@EnableEurekaServer
@EnableZuulProxy
@SpringBootApplication
class PrometheusApplication {

	static void main(String[] args) {
		SpringApplication.run PrometheusApplication, args
	}
}
