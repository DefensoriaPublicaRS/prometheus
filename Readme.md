# Prometheus

Este é um servidor Eureka para desenvolvimento, que permite realizar a cópia das instâncias registradas em outro Eureka.
O objetivo é permitir o desenvolvimento local sem a necessidade de iniciar todos os serviços dependentes.

## Quick start

```
$ ./gradlew bootRun
```

Acessar http://localhost:8585/prometheus.html

## Configuração

Para alterar o endereço do Eureka do qual as instâncias serão copiadas, altere a propriedade `zuul.routes.eureka.url`.
