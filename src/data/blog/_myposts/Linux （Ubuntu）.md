---
title: " Linux 双系统安装"
author: Kai Zhou
pubDatetime: 2025-10-09T10:00:00.00+08:00
featured: true
draft: false
tags:
  - Linux
  - 系统
description: "安装 linux 双系统"
---

## 目录

## 必要资源

- 主题（[theme](https://github.com/vinceliuice/WhiteSur-gtk-theme)）
- 图标（[icon](https://github.com/vinceliuice/WhiteSur-icon-theme)）
- 指针（[cursor](https://github.com/vinceliuice/McMojave-cursors)）
- 壁纸（[wallpaper](https://github.com/vinceliuice/WhiteSur-wallpapers)）
- GRUB 启动页面
- ulauncher
- 软件与更新 附加驱动 专用驱动 使用 NVIDIA driver metapackage 来自 nvidia-driver-550 (专有, tested)

## 必要插件

- blur my shell
- user themes
- arc menu
- removable drive menu
- just perfect
- tweaks
- compiz alike magic lamp effect
- workspace indicator
- coverflow alt-tab
- clipboard indicator

## 命令行输入

- 打开dock 栏图标（点击隐藏）功能

```bash
gsettings set org.gnome.shell.extensions.dash-to-dock click-action 'minimize'
```
重设为默认字体

```bash
gsettings reset org.gnome.desktop.interface font-name
gsettings reset org.gnome.desktop.interface document-font-name
gsettings reset org.gnome.desktop.interface monospace-font-name
gsettings reset org.gnome.desktop.wm.preferences titlebar-font
```

grub 默认启动项修改/etc/default/grub

修改后必须要 sudo grub-update