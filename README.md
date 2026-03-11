# Wanderlust – Landing page tour du lịch

Landing page giới thiệu tour du lịch, giao diện hiện đại, bắt mắt. Dự án dùng **Vite + React** và **Tailwind CSS**.

## Công nghệ

- **Vite** – Build tool
- **React 19**
- **Tailwind CSS v4**

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:5173](http://localhost:5173).

## Build production

```bash
npm run build
npm run preview   # xem bản build local
```

## Deploy

### 1. Đẩy source lên GitHub

```bash
git init
git add .
git commit -m "feat: landing page tour du lịch Wanderlust"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### 2. Deploy lên Vercel

1. Vào [vercel.com](https://vercel.com), đăng nhập bằng GitHub.
2. **Add New Project** → import repo GitHub vừa tạo.
3. Vercel tự nhận **Vite**: không cần đổi Framework Preset, giữ **Build Command**: `npm run build`, **Output Directory**: `dist`.
4. Bấm **Deploy**. Sau khi xong, site sẽ có dạng `https://<tên-project>.vercel.app`.

**Lưu ý:** Mỗi lần push lên `main`, Vercel sẽ tự deploy lại (CI/CD).

## Cấu trúc giao diện

- **Hero**: full-screen với ảnh nền, CTA “Xem tour” và “Tư vấn”.
- **Tour nổi bật**: 3 tour mẫu (Hạ Long – Sapa, Miền Trung, Phú Quốc) dạng card.
- **Vì sao chọn chúng tôi**: 4 lý do (chất lượng, bảo hiểm, HDV, giá).
- **CTA**: form nhận email để tư vấn.
- **Footer**: tên thương hiệu, năm, link mạng xã hội.

Đã tối ưu responsive và trải nghiệm mobile.
