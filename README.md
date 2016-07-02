# ki-cli

[![npm version](https://badge.fury.io/js/ki-cli.svg)](https://badge.fury.io/js/ki-cli)
[![Build Status](https://travis-ci.org/totora0155/ki-cli.svg?branch=master)](https://travis-ci.org/totora0155/ki-cli)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Create custom tree in cli

---

### Install

```
npm -g i ki-cli
```

### Usage

```
$ ki-cli a b c foo.hoge bar.fuga baz.piyo long.long.long.depth
├─ a
├─ b
├─ c
├─ foo
│  └─ hoge
├─ bar
│  └─ fuga
├─ baz
│  └─ piyo
└─ long
   └─ long
      └─ long
         └─ depth
```

### Change log

|version|log|
|:-:|:--|
|0.0.1|Release!|
