# ENGSE203 LAB 01 — Developer Environment & GitHub Repository Setup

## ผู้จัดทำ

- ชื่อ-นามสกุล: จิรายุ วงศ์ต่อม
- รหัสนักศึกษา: 68543210022-8
- ระบบปฏิบัติการที่ใช้: macOS / Windows

## วัตถุประสงค์ของงาน

- เพื่อตรวจสอบและเตรียมความพร้อมสำหรับการพัฒนาโปรแกรมให้พร้อมใช้งาน

- เพื่อฝึกฝนการสร้างและตั้งค่า JavaScript , Node.js

- เพื่อทำความเข้าใจและใช้งาน Git / GitHub

## เครื่องมือที่ใช้

- Git และ GitHub
- WSL2
- Visual Studio Code (VS Code)

## วิธีติดตั้งและรัน

```bash
# สร้างพื้นที่ทำงานของรายวิชา
mkdir -p ~/workspace/engse203
cd ~/workspace/engse203
mkdir engse203-lab01
cd engse203-lab01
npm init -y
mkdir src
code .

# เข้าสู่โฟลเดอร์ของโปรเจกต์
cd engse203-lab01

# สร้างไฟล์ใน src/hello.js
# เขียนและรันโปรแกรม JavaScript ตามตัวอย่าง
# เปิดไฟล์ package.json และแก้ส่วน scripts ให้มีคำสั่ง start

# จากนั้นรันโปรแกรม
npm run start
```

## โครงสร้างไฟล์

```text
engse203-lab01/
├── src/
│   └── hello.js
├── package.json
└── README.md
```

## หลักฐานผลลัพธ์

![ภาพหน้าจอผลลัพธ์](https://raw.githubusercontent.com/jirayuwongtomrmutl/images/refs/heads/main/Screenshot%202026-06-25%20203827.png)

Hello จิรายุ วงศ์ต่อม (68543210022-8) | OS: linux | Node: v24.18.0

## ปัญหาที่พบและวิธีแก้ไข

- ปัญหา: ไม่สามารถติดตั้ง WSL2 ได้ (Download แล้วค้างอยู่ที่ 0.1)
- วิธีแก้: ใช้คำสั่ง  wsl --update เพื่อ อัปเดตตัวติดตั้ง WSL

## References & AI Assistance

- Source / Documentation:   
https://github.com/se-rmutl/engse203-lab/blob/main/docs/part-1-wsl2-ubuntu-24.04-windows-11.md
https://github.com/se-rmutl/engse203-lab/blob/main/docs/part-2-developer-tools-git-github-vscode.md
- AI tool used: Gemini
- Used for: ตรวจสอบคำสั่งที่ใช้ในการติดตั้ง WSL2 และแก้ปัญหาที่ไม่สามารถติดตั้ง WSL2 ได้ , หาวิธีนำรูปภาพเข้าไปใส่ใน README.md
- My adaptation: นำ README template เพิ่มข้อมูลส่วนตัวลงไป