# PaiChat-Golang+Ollama LLM应用

<div align="center">  

![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)  

</div>  

---

## 📂 项目结构  

```plaintext
PaiChat/
├── cmd/                 # 主程序入口
│   └── main.go          # 程序启动入口
├── internal/            # 内部核心模块
│   ├── chat/            # 聊天核心逻辑
│   │   ├── chat.go      # 聊天会话实现
│   │   ├── pool.go      # LLM连接池实现
│   │   └── service.go   # 聊天服务接口
│   ├── config/          # 配置管理
│   │   └── config.go    # 配置加载实现
│   ├── models/          # 数据模型
│   │   └── models.go    # API数据结构定义
│   └── server/          # Web服务
│       └── server.go    # HTTP服务器实现
├── static/              # 静态资源
│   ├── css/             
│   ├── js/              
│   └── index.html       
├── go.mod               # Go模块定义
├── go.sum               # 依赖校验文件
└── config.json          # 配置文件(可选)
```

---

## 功能特性
- 支持多种LLM模型对话
- 提供命令行交互界面
- 内置Web服务接口
- 对话历史记录功能
- 连接池管理LLM实例
- 完善的配置系统

---

## 🚀 快速开始
### 环境要求
- Go 1.20+
- Ollama服务(本地或远程)
### 启动方式 
```bash
git clone https://github.com/liaotxcn/PaiChat.git  # 克隆仓库
```
### 命令行模式
```bash
go run cmd/main.go
```
### 交互支持：
- help 查看帮助
- exit 退出程序
- clear 清空记录
- history 查看历史对话
### Web服务(默认自启动)，访问 https://localhost:8080

### 研发中，持续更新...
