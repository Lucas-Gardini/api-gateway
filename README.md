# Api Gateway com NestJs

Exemplo de api gateway construído com NestJs, onde o objetivo é redirecionar múltiplas requisições de um host para diferentes serviços REST.

Autenticação e banco de dados pode ser implementados para dinamizar as rotas, gerando algo do tipo:

## Exemplo:

| Requisição | Encaminhamento    |
| ---------- | ----------------- |
| /google    | www.google.com    |
| /facebook  | www.facebook.com  |
| /twitter   | www.twitter.com   |
| /instagram | www.instagram.com |
