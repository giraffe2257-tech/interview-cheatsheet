# 面試小抄

私人面試準備筆記。**這個 repo 必須保持 private。**

內容含前公司內部數字、薪資期望、簽證狀態、正在進行的面試、以及回家作業的完整分析。不要開 GitHub Pages，不要轉成 public。

## 怎麼看

```
python3 -m http.server 8899 --directory .
```

然後開 http://localhost:8899

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 版面與互動，不常改 |
| `content.js` | 所有題目與答案，改內容改這裡 |

## content.js 的格式

```
DATA = [ { id, label, section, groups: [ { name, items: [ {q, body} ] } ] } ]
```

- `section` 是左側索引的分區標題，相同的會被歸在同一區
- `body` 用 Markdown：粗體 `**`、表格 `|`、小標 `####`、清單 `-`、分隔線 `---`
- **`body` 裡不能出現反引號**，它是 template literal 的結束符號

改完可以用這行檢查有沒有改壞：

```
node -e "const {DATA}=require('./content.js');let n=0;for(const e of DATA)for(const g of e.groups)n+=g.items.length;console.log('items',n)"
```
