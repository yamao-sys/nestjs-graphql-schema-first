# nestjs-graphql-schema-first
NestJSのGraphQL(スキーマファースト)のキャッチアップリポジトリ

## NestJSでREST APIと比較した開発しやすかった点
- 取得したいfieldに絞りやすい(オーバーフェッチ・アンダーフェッチを防げる)

## NestJSのスキーマファーストのGraphQLで開発しやすかった点

## NestJSのスキーマファーストのGraphQLでやりにくい(やりにくそうな)点、注意ポイント

## 参考
- https://docs.nestjs.com/graphql/quick-start
- https://zenn.dev/youcangg/articles/33a8ff2accb774

## GraphQL playground
[http://localhost:8000/graphql](http://localhost:8000/graphql)

## コマンド類
### 開発環境の立ち上げ
```
docker-compose build

docker-compose up
```

### NestJSでresource(resolver, service, module, entity)を一式作成する
```
nest g resource [name]
```

### マイグレーション作成
```
npx ts-node ./node_modules/.bin/typeorm migration:generate -d ./data-source.ts ./migrations/
```

### マイグレーション実行
```
npx ts-node ./node_modules/.bin/typeorm migration:run -d ./data-source.ts
```
