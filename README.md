#JavaScript

#[Chrome扩展及应用开发](http://www.ituring.com.cn/minibook/950)

## 第1章　初步接触Chrome扩展应用开发

- 我的第一个Chrome扩展 : clock

## 第2章　Chrome扩展基础

- 操作用户正在浏览的页面 : search_button 
- 跨域请求 : local_ip
- 常驻后台 : website_status
- 带选项页面的扩展 : weather
- 扩展页面间的通信 : runtime_sendMessage_onMessage.demo

## 第3章　Chrome扩展的UI界面

- Browser Actions
	- 图标 : browser_action_icon
- 右键菜单 : google_translate


> manifest.json 模板
> {
    "app": {
        "background": {
            "scripts": ["background.js"]
        }
    },
    "manifest_version": 2,
    "name": "My Extension",
    "version": "versionString",
    "default_locale": "en",
    "description": "A plain text description",
    "icons": {
        "16": "images/icon16.png",
        "48": "images/icon48.png",
        "128": "images/icon128.png"
    },
    "browser_action": {
        "default_icon": {
            "19": "images/icon19.png",
            "38": "images/icon38.png"
        },
        "default_title": "Extension Title",
        "default_popup": "popup.html"
    },
    "page_action": {
        "default_icon": {
            "19": "images/icon19.png",
            "38": "images/icon38.png"
        },
        "default_title": "Extension Title",
        "default_popup": "popup.html"
    },
    "background": {
        "scripts": ["background.js"]
    },
    "content_scripts": [
        {
            "matches": ["http://www.google.com/*"],
            "css": ["mystyles.css"],
            "js": ["jquery.js", "myscript.js"]
        }
    ],
    "options_page": "options.html",
    "permissions": [
        "*://www.google.com/*"
    ],
    "web_accessible_resources": [
        "images/*.png"
    ]
}