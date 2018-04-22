# selenium-grid-testcase

## 1. git cloneする

```
git clone https://github.com/kzhr2/selenium-grid-testcase.git
```

## 2. 「npm install」する
「package.json」と同じ階層で実行。

```
npm install
```

## 3. 「sampleTest01.js」の「config.gridhost」を書き換える。

```
config.gridhost = '192.168.0.13';
```

※GridのPortがデフォルト以外の場合はこっちも書き換える。
``` 
config.gridport = 4444;
```

## 4. 「npm test」する

```
npm test
```

