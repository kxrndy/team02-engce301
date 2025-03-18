# 🚀 **team02-engce301**

## 📝 **Project Overview**

โครงงานรายวิชา **ENGCE301**  
**การออกแบบและพัฒนาซอฟต์แวร์** _(Software Design and Development)_  
ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์  
มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา เชียงใหม่  
ภาคการศึกษาที่ 2 ปีการศึกษา 2567  

##  **API Specification**
- Endpoint API
  - [/api/v1/login](./endpoint-api/login.md)
  - [/api/v1/logout](./endpoint-api/logout.md)
  - [/api/v1/postOnlineAgentStatus](./endpoint-api/postOnlineAgentStatus.md)
  - [/api/v1/postSendMessage](./endpoint-api/postSendMessage.md)

- Parse server
  - [/hello](./parse-server/hello.md)
  - [/OnlineAgentByAgentCode](./parse-server/OnlineAgentByAgentCode.md)
  - [/postOnlineAgentListByTeam](./parse-server/postOnlineAgentListByTeam.md)
  - [/getUserLoginHistories](./parse-server/getUserLoginHistories.md)
  - [/getAgentStatusHistories](./parse-server/getAgentStatusHistories.md)
  - [/getAgentMessageHistories](./parse-server/getAgentMessageHistories.md)

## Test Case Overview
รอต่อไป~

## Data Flow Diagrams
<p align="center">
    <br>
    <img src="https://imgur.com/a/QcdRCeC.png" alt="DFD">
    <br>
<p>

## **Activity Flow Diagram**
```mermaid
    flowchart LR
    A["Start"] ---> B("PC (Agent)") & C("PC (Agent)")
    B ---> D("Agent-Notification")
    C ---> E("Agent-Notification")
    D ---> n1["Send / Recieve Message"] 
    E ---> n2["Login / Logoutget Agent / UpdateAgent"]
    n1 ---> F["Endpoint-api"]
    n2 ---> F
    F ---> G["MS SQL"]
    G ---> F

    A1["PC (Master)"] ---> B2["Wallboard-fe"]
    B2 ---> C2["Parse-Server"]
    C2 ---> B2
    C2 ---> n3["UpdateAgentstatus"]
    n3 ---> F 
    C2 ---> D2["MOngoDB"]
    D2 ---> C2

    n1@{ shape: text}
    n2@{ shape: text}
    n3@{ shape: text}
```

## 👨🏻‍💻 **Members**

| 👤 **ชื่อ - นามสกุล**            | 🎓 **รหัสนักศึกษา** |
| -------------------------------- | ------------------- |
| **นายกรณ์ดนัย ศรีสุริยานุรักษ์** | `65543206001-1`     |
| **นายณัฐภัทร สุระธง**            | `65543206012-8`     |
| **นายกฤษฎา วิริยา**              | `65543206041-7`     |
| **นายสุขสันต์ คำยา**             | `65543206084-7`     |
