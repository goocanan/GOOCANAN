import cv2
import numpy as np
import os

img_path = r'C:\Users\NanomindGO\.gemini\antigravity\brain\84a1c2b7-f98f-482d-b090-b2defa655d40\.user_uploaded\media_1792663963780_4e9b0977.png'
img = cv2.imread(img_path, cv2.IMREAD_UNCHANGED)
alpha = img[:, :, 3]

os.makedirs(r'public\assets\images', exist_ok=True)

# 1. Full tight crop
y_idx, x_idx = np.where(alpha > 120)
ymin, ymax = int(y_idx.min()), int(y_idx.max())
xmin, xmax = int(x_idx.min()), int(x_idx.max())

cropped = alpha[ymin:ymax+1, xmin:xmax+1]
h, w = cropped.shape
print(f'Full bounding box: w={w}, h={h}')

# Find contours
contours, hierarchy = cv2.findContours((cropped > 120).astype(np.uint8), cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_KCOS)
print(f'Contours found: {len(contours)}')

path_parts = []
for cnt in contours:
    approx = cv2.approxPolyDP(cnt, 0.4, True)
    pts = approx.reshape(-1, 2)
    part = f"M {pts[0][0]} {pts[0][1]} " + " ".join([f"L {p[0]} {p[1]}" for p in pts[1:]]) + " Z"
    path_parts.append(part)

full_d = " ".join(path_parts)
svg_logo = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="{full_d}" />
</svg>'''

with open(r'public\assets\images\goocanan-logo.svg', 'w', encoding='utf-8') as f:
    f.write(svg_logo)
print('Saved public/assets/images/goocanan-logo.svg')

# 2. Mark (Symbol) only
mark_mask = (alpha > 120) & (np.arange(img.shape[0])[:, None] <= 345)
y_m, x_m = np.where(mark_mask)
ymin_m, ymax_m = int(y_m.min()), int(y_m.max())
xmin_m, xmax_m = int(x_m.min()), int(x_m.max())

mark_crop = alpha[ymin_m:ymax_m+1, xmin_m:xmax_m+1]
hm, wm = mark_crop.shape
print(f'Mark bounding box: w={wm}, h={hm}')

contours_m, _ = cv2.findContours((mark_crop > 120).astype(np.uint8), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_KCOS)
cnt_m = contours_m[0]
approx_m = cv2.approxPolyDP(cnt_m, 0.4, True)
pts_m = approx_m.reshape(-1, 2)
mark_d = f"M {pts_m[0][0]} {pts_m[0][1]} " + " ".join([f"L {p[0]} {p[1]}" for p in pts_m[1:]]) + " Z"

svg_mark = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {wm} {hm}" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="{mark_d}" />
</svg>'''

with open(r'public\assets\images\goocanan-mark.svg', 'w', encoding='utf-8') as f:
    f.write(svg_mark)
print('Saved public/assets/images/goocanan-mark.svg')

# Also write favicon.svg
scale_x = round(64.0 / wm, 4)
scale_y = round(68.0 / hm, 4)
favicon_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="gooGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" rx="22" fill="#090d16" />
  <g transform="translate(18, 16) scale({scale_x}, {scale_y})">
    <path fill="url(#gooGrad)" d="{mark_d}" />
  </g>
</svg>'''

with open(r'public\favicon.svg', 'w', encoding='utf-8') as f:
    f.write(favicon_svg)
print('Saved public/favicon.svg')

# 3. Wordmark only
word_mask = (alpha > 120) & (np.arange(img.shape[0])[:, None] >= 355)
y_w, x_w = np.where(word_mask)
ymin_w, ymax_w = int(y_w.min()), int(y_w.max())
xmin_w, xmax_w = int(x_w.min()), int(x_w.max())

word_crop = alpha[ymin_w:ymax_w+1, xmin_w:xmax_w+1]
hw, ww = word_crop.shape
print(f'Wordmark bounding box: w={ww}, h={hw}')

contours_w, _ = cv2.findContours((word_crop > 120).astype(np.uint8), cv2.RETR_TREE, cv2.CHAIN_APPROX_TC89_KCOS)
word_parts = []
for cnt in contours_w:
    approx = cv2.approxPolyDP(cnt, 0.4, True)
    pts = approx.reshape(-1, 2)
    part = f"M {pts[0][0]} {pts[0][1]} " + " ".join([f"L {p[0]} {p[1]}" for p in pts[1:]]) + " Z"
    word_parts.append(part)

word_d = " ".join(word_parts)
svg_word = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {ww} {hw}" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="{word_d}" />
</svg>'''

with open(r'public\assets\images\goocanan-wordmark.svg', 'w', encoding='utf-8') as f:
    f.write(svg_word)
print('Saved public/assets/images/goocanan-wordmark.svg')

# 4. Export JS constants
js_code = f'''// Generated official GOOCANAN vector SVG paths
export const GOOCANAN_MARK_PATH = "{mark_d}";
export const GOOCANAN_MARK_VIEWBOX = "0 0 {wm} {hm}";

export const GOOCANAN_WORDMARK_PATH = "{word_d}";
export const GOOCANAN_WORDMARK_VIEWBOX = "0 0 {ww} {hw}";

export const GOOCANAN_FULL_PATH = "{full_d}";
export const GOOCANAN_FULL_VIEWBOX = "0 0 {w} {h}";
'''

with open(r'src\data\logoData.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
print('Saved src/data/logoData.js')
