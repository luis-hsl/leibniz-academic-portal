import os, time
from io import BytesIO
from PIL import Image

PASTA = r'D:\marcelo\Downloads\lovable-uploads'
MIN_GANHO = 0.03          # otimiza só se economizar ≥ 3 %
CORES_MAX = 256           # 256 cores (PNG-8)
COMPRESS_LVL = 9          # compressão máxima

for nome in os.listdir(PASTA):
    if not nome.lower().endswith(".png"):
        continue

    caminho = os.path.join(PASTA, nome)
    size_orig = os.path.getsize(caminho)

    # --- otimiza em memória ---------------------------
    with Image.open(caminho) as im:
        # converte p/ paleta adaptativa (PNG-8)
        if im.mode != "P" or len(im.getcolors(maxcolors=CORES_MAX+1) or []) > CORES_MAX:
            im = im.convert("RGBA").convert(
                "P", palette=Image.ADAPTIVE, colors=CORES_MAX
            )

        buf = BytesIO()
        im.save(
            buf,
            format="PNG",
            optimize=True,
            compress_level=COMPRESS_LVL,
        )

    dados = buf.getvalue()
    size_new = len(dados)
    ganho = (size_orig - size_new) / size_orig

    # --- grava só se realmente ficou menor -------------
    if ganho >= MIN_GANHO and size_new < size_orig:
        with open(caminho, "wb") as f:
            f.write(dados)
        print(
            f"✅ {nome}: {size_orig/1024:.0f} KB → {size_new/1024:.0f} KB "
            f"({ganho*100:.1f}% menor)"
        )
    else:
        print(
            f"⏩ {nome}: não compensa (ganho {ganho*100:.1f}%, "
            f"{'maior' if size_new>=size_orig else 'pequeno demais'})"
        )
