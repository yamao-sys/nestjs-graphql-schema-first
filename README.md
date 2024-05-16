# nestjs-graphql-schema-first
NestJSのGraphQL(スキーマファースト)のキャッチアップリポジトリ

## NestJSでREST APIと比較した開発しやすかった点
- 取得したいfieldに絞りやすい(オーバーフェッチ・アンダーフェッチを防げる)

## NestJSのスキーマファーストのGraphQLで開発しやすかった点
- あまり感じられれず...
- GraphQLの構文の書き方に沿ってスキーマを書く必要があり、コードファーストと比べると学習コストがかかるかも

## NestJSのスキーマファーストのGraphQLでやりにくい(やりにくそうな)点、注意ポイント
- スキーマファイルの更新だけでは自動で型ファイルの生成が行われず...(アプリケーションコードの更新時に行われる)
	- このあたりもコードファーストの方がやりやすい

スキーマファイル自体をフロントエンドで共通で使用するのであればアリかもだけど、

全体的にコードファーストの方が簡単で速く開発できそう

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

### 単体テストの実行
```
npm run test
```

### E2Eテストの実行
```
npm run test:e2e
```
