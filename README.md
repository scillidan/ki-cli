# ki-cli-hyphen

Only modified the print style of [ki-cli](https://github.com/nju33/ki-cli). Maybe can be used with [mkdirs](https://github.com/dolanor/mkdirs).

## Install

```sh
npm install -g ki-cli-hyphen
```

## Usage

```sh
$ ki a b c foo.hoge bar.fuga baz.piyo long.long.long.depth
- a
- b
- c
- foo
   - hoge
- bar
   - fuga
- baz
   - piyo
- long
   - long
      - long
         - depth
```