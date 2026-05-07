// ================================
// הגדרות חבילות סטיקרים
// ================================
// כדי להוסיף/להסיר חבילות, משנים רק את המערך הזה.
// בכל חבילה:
// - preview: להחליף לתמונה האמיתית של החבילה
// - downloadUrl: להחליף ללינק ההורדה האמיתי (כרגע "#")
const stickerPacks = [
  {
    title: "הגיפים",
    // החלפה מומלצת: לשים קובץ preview בתוך הפרויקט (למשל ./stickers_output/giphy.webp)
    preview: "https://i.giphy.com/media/8S52zjRY174Aeia9UX/giphy.gif",
    // כרגע מצביע לקובץ שנוצר אצלך במחשב. אם מעלים את האתר לרשת, עדכן ללינק ציבורי/יחסי.
    downloadUrl:
      "https://drive.google.com/uc?export=download&id=1ZOOxJRCdV-K2883zNTKgDN16H5dFg4_2",
  },
  {
    title: "חבילה 1",
    preview: "https://placehold.co/600x600/111827/e2e8f0?text=Pack+1",
    downloadUrl: "#",
  },
  {
    title: "חבילה 2",
    preview: "https://placehold.co/600x600/1f2937/e2e8f0?text=Pack+2",
    downloadUrl: "#",
  },
  {
    title: "חבילה 3",
    preview: "https://placehold.co/600x600/334155/e2e8f0?text=Pack+3",
    downloadUrl: "#",
  },
  {
    title: "חבילה 4",
    preview: "https://placehold.co/600x600/0f172a/e2e8f0?text=Pack+4",
    downloadUrl: "#",
  },
];

const packsGrid = document.querySelector("#packsGrid");
const gifsGallery = document.querySelector("#gifsGallery");
const toggleSelectModeBtn = document.querySelector("#toggleSelectMode");
const downloadSelectedBtn = document.querySelector("#downloadSelected");
const downloadAllBtn = document.querySelector("#downloadAll");
const gifModal = document.querySelector("#gifModal");
const closeGifModalBtn = document.querySelector("#closeGifModal");
const modalGifImage = document.querySelector("#modalGifImage");
const modalGifId = document.querySelector("#modalGifId");
const modalDownloadBtn = document.querySelector("#modalDownloadBtn");

// כל ה-GIFים שלך לגלריה.
// אפשר להוסיף/להסיר לינקים כאן בעתיד.
const gifUrls = [
  "https://i.giphy.com/media/8S52zjRY174Aeia9UX/giphy.gif",
  "https://i.giphy.com/media/RqjYmzJeiXxyfbdAfx/giphy.gif",
  "https://i.giphy.com/media/JHXiqOe3XnjceEUrkG/giphy.gif",
  "https://i.giphy.com/media/K2YzfEamLU1BgWADi0/giphy.gif",
  "https://i.giphy.com/media/tsa3bqz97HBI3UWlpr/giphy.gif",
  "https://i.giphy.com/media/wtgCSQgv9X48AkoeY4/giphy.gif",
  "https://i.giphy.com/media/vzKUlG1VF0rC9hAlOf/giphy.gif",
  "https://i.giphy.com/media/RmLOcZmVl7r1i4M4XQ/giphy.gif",
  "https://i.giphy.com/media/dVUhaapOnpLDV8K1mZ/giphy.gif",
  "https://i.giphy.com/media/WW5piJAHej0yr0WfhG/giphy.gif",
  "https://i.giphy.com/media/gN8Nl71dAhaZi5PCoV/giphy.gif",
  "https://i.giphy.com/media/Uqq5ryRPuYc4ahmOIU/giphy.gif",
  "https://i.giphy.com/media/HPCWqzmcbRFlWJVith/giphy.gif",
  "https://i.giphy.com/media/BdWmnAw0yiVJg3P5z6/giphy.gif",
  "https://i.giphy.com/media/VHw2tVq4UM0B13MW4p/giphy.gif",
  "https://i.giphy.com/media/xc7ONnkEK8v4kXqlnw/giphy.gif",
  "https://i.giphy.com/media/zhH6IhnpLCZrSjJfQa/giphy.gif",
  "https://i.giphy.com/media/4CWcbwhaUaE5Fhxm4u/giphy.gif",
  "https://i.giphy.com/media/bnmhZRDqgVjiT36uPS/giphy.gif",
  "https://i.giphy.com/media/Mqs9wbOjXarWnNVyfR/giphy.gif",
  "https://i.giphy.com/media/EZJ6BBaPbAMWGY4xEb/giphy.gif",
  "https://i.giphy.com/media/3aCqU0m3AtMTSTBwrf/giphy.gif",
  "https://i.giphy.com/media/AQLTA6e1hZlgepbvan/giphy.gif",
  "https://i.giphy.com/media/DRoAHR3HuSsj0DN1Iw/giphy.gif",
  "https://i.giphy.com/media/PSoOvKKcVmqUDTTWv5/giphy.gif",
  "https://i.giphy.com/media/bmWuPyrKPT0njp6eGR/giphy.gif",
  "https://i.giphy.com/media/VbxzksiMRoQNL8mXAF/giphy.gif",
  "https://i.giphy.com/media/hO2GT2Mvv9JJHSEqdq/giphy.gif",
  "https://i.giphy.com/media/kTgbWxfsZt8O5QGkSh/giphy.gif",
  "https://i.giphy.com/media/ElhRQ3byPPsBEuJetG/giphy.gif",
  "https://i.giphy.com/media/v5RqO5bNACxea4CMUF/giphy.gif",
  "https://i.giphy.com/media/KD7WmNGVpd4DNmlpT1/giphy.gif",
  "https://i.giphy.com/media/FW3YEk0V0AlDkrunfM/giphy.gif",
  "https://i.giphy.com/media/vjErQTl1CrTtpdeFw3/giphy.gif",
  "https://i.giphy.com/media/CeOCssZju7yBe7EE2c/giphy.gif",
  "https://i.giphy.com/media/brel8MEQC4QlYPV48S/giphy.gif",
  "https://i.giphy.com/media/18AeP8fviqrBziG05J/giphy.gif",
  "https://i.giphy.com/media/8D4mY6s3UhOxMzOZSV/giphy.gif",
  "https://i.giphy.com/media/N4Giwt0UEyG7uhcPEp/giphy.gif",
  "https://i.giphy.com/media/YyvGIsayDLyySyqnev/giphy.gif",
  "https://i.giphy.com/media/ovsC0o9xYXuYdK2ciB/giphy.gif",
  "https://i.giphy.com/media/VWyAmcw5xAuhOPdfsu/giphy.gif",
  "https://i.giphy.com/media/a1I09C686iQboD5cJ5/giphy.gif",
  "https://i.giphy.com/media/URBID9KzrgZdmPWENK/giphy.gif",
  "https://i.giphy.com/media/ZZpzaKGQmuTWUmDX8U/giphy.gif",
  "https://i.giphy.com/media/DC5i5tKhPvinmQwGxF/giphy.gif",
  "https://i.giphy.com/media/LWnDv3wMVasMlqCpvz/giphy.gif",
  "https://i.giphy.com/media/2ugzM9oOshH5uFrIto/giphy.gif",
  "https://i.giphy.com/media/jlRKcuFcvdq7L8fTex/giphy.gif",
  "https://i.giphy.com/media/IpyWaaU72YjYr4DvwQ/giphy.gif",
  "https://i.giphy.com/media/l9tHisbnF4l9ehG4Ep/giphy.gif",
  "https://i.giphy.com/media/cJqEcsjYsyDBRc1Cpr/giphy.gif",
  "https://i.giphy.com/media/xN4S791N3qdxTSfEAW/giphy.gif",
  "https://i.giphy.com/media/KRBmEzVpgFq511FL66/giphy.gif",
  "https://i.giphy.com/media/b2c4bgWH0P5VetS8nu/giphy.gif",
  "https://i.giphy.com/media/rZuMh61uU2NWCRasmT/giphy.gif",
  "https://i.giphy.com/media/8I7g67XuUB7k7v2Wr8/giphy.gif",
  "https://i.giphy.com/media/aMTdKJ1wOgXGzYGeZZ/giphy.gif",
  "https://i.giphy.com/media/ZU0gp79KGLhUt8fSOg/giphy.gif",
  "https://i.giphy.com/media/GwC8ooj8ArX56T4C69/giphy.gif",
  "https://i.giphy.com/media/qszklOlYwfkPwIY6XG/giphy.gif",
  "https://i.giphy.com/media/6BSf8pgbt1noZ85aui/giphy.gif",
  "https://i.giphy.com/media/SszhtC6KR5J67N4ps9/giphy.gif",
  "https://i.giphy.com/media/RTbPUJqGYNpOmuDkLi/giphy.gif",
  "https://i.giphy.com/media/xR5Q54OC3PIg6EHY6v/giphy.gif",
  "https://i.giphy.com/media/hyZO87ofCqIFHmbqoz/giphy.gif",
  "https://i.giphy.com/media/IlIKHmZhvh4IQVhkU3/giphy.gif",
  "https://i.giphy.com/media/rl2ge6O3rAVYr7gkOa/giphy.gif",
  "https://i.giphy.com/media/S0DaoK50quBnqToifM/giphy.gif",
  "https://i.giphy.com/media/14aXeE3KXfG59ok8j4/giphy.gif",
  "https://i.giphy.com/media/yJlWPHT1ynUeHpWmiz/giphy.gif",
  "https://i.giphy.com/media/u3Kpq2mJrMeD1B1owD/giphy.gif",
  "https://i.giphy.com/media/wxxGny58TOTGELPcxu/giphy.gif",
  "https://i.giphy.com/media/opHc0VCpZGbE6mMqXZ/giphy.gif",
  "https://i.giphy.com/media/Jm6FbSUuQQ48BYEc8x/giphy.gif",
  "https://i.giphy.com/media/iWoeSZvri0ggBKdidH/giphy.gif",
  "https://i.giphy.com/media/6vSs4TNxCwktdQO8Nl/giphy.gif",
  "https://i.giphy.com/media/xOoAUJCDNJ4jBUPGtT/giphy.gif",
  "https://i.giphy.com/media/LoAVVRibOZcySQjLjn/giphy.gif",
  "https://i.giphy.com/media/Hio1r9nVnOigxKubcM/giphy.gif",
  "https://i.giphy.com/media/33tc40GRvhxgSegLGe/giphy.gif",
  "https://i.giphy.com/media/R1PMvkxMvdn2DL5h1H/giphy.gif",
  "https://i.giphy.com/media/GZfKcJJ2YfBi2IAGlL/giphy.gif",
  "https://i.giphy.com/media/nV7XoDziFgtcNF3UAx/giphy.gif",
  "https://i.giphy.com/media/28pT0UADTNmlTDzCnE/giphy.gif",
  "https://i.giphy.com/media/7e8Mrf2HsvwJEvTpd6/giphy.gif",
  "https://i.giphy.com/media/xesPHvet9ErL4TO8go/giphy.gif",
  "https://i.giphy.com/media/PZyQmVnk44PrzdyCkz/giphy.gif",
  "https://i.giphy.com/media/SWvp55HCaBws5sDvH4/giphy.gif",
  "https://i.giphy.com/media/FrZfb0VNTk5y2bFNOD/giphy.gif",
  "https://i.giphy.com/media/caAx3Rn2TggCilwp93/giphy.gif",
  "https://i.giphy.com/media/DmKJZgm0I8GwLVrUId/giphy.gif",
  "https://i.giphy.com/media/Xcxrjy3XqZMvzAlWec/giphy.gif",
  "https://i.giphy.com/media/1pH1LwwRpHXLYBdiD3/giphy.gif",
  "https://i.giphy.com/media/n0U88NOXA6Nm0Hl2yS/giphy.gif",
  "https://i.giphy.com/media/c72tfkjhTvi0bFCXQt/giphy.gif",
  "https://i.giphy.com/media/n6HxK9WpQf6sWEfU4t/giphy.gif",
  "https://i.giphy.com/media/tNneMZ7jw85IC4ypkw/giphy.gif",
  "https://i.giphy.com/media/P6iEPQkDvh2X6ORUZm/giphy.gif",
  "https://i.giphy.com/media/ngHlU3A8ZS4z1Qj1sU/giphy.gif",
  "https://i.giphy.com/media/OOdUkqUCgsKuczotcw/giphy.gif",
  "https://i.giphy.com/media/qW235BkhLV3GA460qj/giphy.gif",
  "https://i.giphy.com/media/NIDo2a11C55fPDiUcx/giphy.gif",
  "https://i.giphy.com/media/iiT2nyRrVSZE7G0rrC/giphy.gif",
  "https://i.giphy.com/media/ywkuOfgTZPAIc50fBK/giphy.gif",
  "https://i.giphy.com/media/q2Xlu823k9URLpJWoj/giphy.gif",
  "https://i.giphy.com/media/KbZrjgVsDwvgOQIMpR/giphy.gif",
  "https://i.giphy.com/media/Xtji5enGkLC2AObF9b/giphy.gif",
  "https://i.giphy.com/media/Ua9ew1ZgLkKNJNw42z/giphy.gif",
  "https://i.giphy.com/media/rCDXhQSfsUUDKyzRx5/giphy.gif",
  "https://i.giphy.com/media/d9ce6OLgXDPObwRlus/giphy.gif",
  "https://i.giphy.com/media/1FSEB8LE9e5kF4z1aJ/giphy.gif",
  "https://i.giphy.com/media/7DOHlu3xt7l0SEcPjn/giphy.gif",
  "https://i.giphy.com/media/bWkxF9yS7vdylWmRsw/giphy.gif",
  "https://i.giphy.com/media/TCYJHXsKASRsOE0qSD/giphy.gif",
  "https://i.giphy.com/media/Ee4UM7ooW8sMYPUIHi/giphy.gif",
  "https://i.giphy.com/media/NL9qnHRjoAUD3dlxww/giphy.gif",
  "https://i.giphy.com/media/pjNVnSHXhTjntj2yta/giphy.gif",
  "https://i.giphy.com/media/fDncNK03MTqKUwa25d/giphy.gif",
  "https://i.giphy.com/media/wAZO62bzKR8QU4G8f8/giphy.gif",
  "https://i.giphy.com/media/ObyqmtSpFFptPrFDoE/giphy.gif",
  "https://i.giphy.com/media/X9Khtf5bQapiN5N2Bq/giphy.gif",
  "https://i.giphy.com/media/ZpIBnRDKaCvf4ks5OU/giphy.gif",
  "https://i.giphy.com/media/Yshs6S7BDb7Ip8AMIv/giphy.gif",
  "https://i.giphy.com/media/8Z1XJTDdPoVxjUZSyk/giphy.gif",
  "https://i.giphy.com/media/o03NTijwUDnGgc5043/giphy.gif",
  "https://i.giphy.com/media/ykp81F7Vd7oG11HiCc/giphy.gif",
  "https://i.giphy.com/media/1Nj6ZNCdlbQssN0rNB/giphy.gif",
  "https://i.giphy.com/media/bxs3QEbmzLMhUtvp7j/giphy.gif",
  "https://i.giphy.com/media/DyuWFQBxu2LeCMbcBF/giphy.gif",
  "https://i.giphy.com/media/r1zpyLQibYZFEiHYXk/giphy.gif",
  "https://i.giphy.com/media/jolgWQwV8VIVGSv981/giphy.gif",
  "https://i.giphy.com/media/PcyOIlheLdjanQVqaz/giphy.gif",
  "https://i.giphy.com/media/yofvX5rYGDC0tTvw6B/giphy.gif",
  "https://i.giphy.com/media/88LPPUG1OGj7VtbIVq/giphy.gif",
  "https://i.giphy.com/media/qB7UAIuxIJbhPUIlQa/giphy.gif",
  "https://i.giphy.com/media/FgySCE1BVFEDe1q8YZ/giphy.gif",
  "https://i.giphy.com/media/xyZ2HaLHVaNfoqKVYK/giphy.gif",
  "https://i.giphy.com/media/jjQXfMLEbFUwjJFwuq/giphy.gif",
  "https://i.giphy.com/media/c4afYff2me1cGw1vdq/giphy.gif",
  "https://i.giphy.com/media/kZzSV5LuOt4N6dW8li/giphy.gif",
  "https://i.giphy.com/media/cjdPpU9F3qHwiFfAlU/giphy.gif",
  "https://i.giphy.com/media/unjFzUYPQs34K3gKBs/giphy.gif",
  "https://i.giphy.com/media/FtZfkWLDCgmLA8s5oS/giphy.gif",
  "https://i.giphy.com/media/ySak0BtHGFzdFnnBdE/giphy.gif",
  "https://i.giphy.com/media/WUsJcvvMhJF6bh8Jt7/giphy.gif",
  "https://i.giphy.com/media/DfesxJbr1whPRMDwnG/giphy.gif",
  "https://i.giphy.com/media/iKHgiPPzlinH3zD9aC/giphy.gif",
  "https://i.giphy.com/media/dp4lkMO0pZ7GIsnORX/giphy.gif",
  "https://i.giphy.com/media/5T6ciZ1p3PJlvGnR0T/giphy.gif",
  "https://i.giphy.com/media/1LkVmsrwL9oOkZN7tq/giphy.gif",
  "https://i.giphy.com/media/WvkkjJ3L0a4h3tDPzJ/giphy.gif",
  "https://i.giphy.com/media/Fj2IwlUFHCTpKz0Sik/giphy.gif",
  "https://i.giphy.com/media/lIiH7yV6RGHa9rh2nN/giphy.gif",
  "https://i.giphy.com/media/bcq4IyAuM9OuOjcQ51/giphy.gif",
  "https://i.giphy.com/media/pd3SKocN5edYucgnoQ/giphy.gif",
  "https://i.giphy.com/media/6LgVLuzxvSlKKbLfv9/giphy.gif",
  "https://i.giphy.com/media/9WcFVnAPwQs7gqDkJ6/giphy.gif",
  "https://i.giphy.com/media/hezUEZutjPDpXEaMxH/giphy.gif",
  "https://i.giphy.com/media/5TqEOQzFhSEo3HNtAx/giphy.gif",
  "https://i.giphy.com/media/NRlUFGNOn19TYlVmwO/giphy.gif",
  "https://i.giphy.com/media/XcE1D7ocdv2OLxbpp5/giphy.gif",
  "https://i.giphy.com/media/hwV1gh6AhaqFjaFHzU/giphy.gif",
  "https://i.giphy.com/media/Kd5Wj55nAAmArjpoUi/giphy.gif",
  "https://i.giphy.com/media/SGncB67GWvRzqzYbwl/giphy.gif",
  "https://i.giphy.com/media/FcZnr3ses6ppzVOzCZ/giphy.gif",
  "https://i.giphy.com/media/sSSsNSdsYepPCJrDOU/giphy.gif",
  "https://i.giphy.com/media/p7DJm5pmlqOKZGLKSR/giphy.gif",
  "https://i.giphy.com/media/WQEOPGY1RFmYe19EfX/giphy.gif",
  "https://i.giphy.com/media/CTaFxtiF69ZbHFdxLI/giphy.gif",
  "https://i.giphy.com/media/smxmLx4KEgkd49BINa/giphy.gif",
  "https://i.giphy.com/media/IJmR5J1CGlNKfIKX57/giphy.gif",
  "https://i.giphy.com/media/O1WR02AtHD5TzwQb8a/giphy.gif",
  "https://i.giphy.com/media/pqXi6uCGFeyHZBlbhg/giphy.gif",
  "https://i.giphy.com/media/ieOADFgj4wwk5sWjuH/giphy.gif",
  "https://i.giphy.com/media/GG0o5yO3X6qrO1b9n9/giphy.gif",
  "https://i.giphy.com/media/p50xHW7Tsx7ecuZBCF/giphy.gif",
  "https://i.giphy.com/media/Su1dLllXo7cETnOF2U/giphy.gif",
  "https://i.giphy.com/media/3om0exRXk0VAlHwwro/giphy.gif",
  "https://i.giphy.com/media/S6S9FFvPpV9GKbp9o1/giphy.gif",
  "https://i.giphy.com/media/dIObmhpmKYVUujHMPe/giphy.gif",
  "https://i.giphy.com/media/UVM002pnANh8SlBprW/giphy.gif",
  "https://i.giphy.com/media/4zjggZL8weanMteJTe/giphy.gif",
  "https://i.giphy.com/media/YdIjUYKcOOhoD9UjHC/giphy.gif",
  "https://i.giphy.com/media/o4yNvuzz5dGbsukIpR/giphy.gif",
  "https://i.giphy.com/media/hNCMyIoDCDsB4CE7Ql/giphy.gif",
  "https://i.giphy.com/media/JQ8jCPnoIR3vTQef7w/giphy.gif",
  "https://i.giphy.com/media/fOdEJcFVlzF7mKKLSH/giphy.gif",
  "https://i.giphy.com/media/coNkhYgVyYoS7xxJOs/giphy.gif",
  "https://i.giphy.com/media/rOSjo666rdOxUfT6JA/giphy.gif",
  "https://i.giphy.com/media/13n7U72zAgaNuOLAfZ/giphy.gif",
  "https://i.giphy.com/media/doY7LKY2WjLQddh4FZ/giphy.gif",
  "https://i.giphy.com/media/rnqB0YGN4qZPD1bzpy/giphy.gif",
  "https://i.giphy.com/media/MAxDLwTMY5GF5TE4Zd/giphy.gif",
  "https://i.giphy.com/media/Ci50IPZGl8kPmNdUkt/giphy.gif",
  "https://i.giphy.com/media/zwX4VYKuBCApbvwzgI/giphy.gif",
  "https://i.giphy.com/media/3GudrR6IfWNRkINcqd/giphy.gif",
  "https://i.giphy.com/media/7cegj1ZYsfET93beyw/giphy.gif",
  "https://i.giphy.com/media/BlhJiEFZrDJfmQfu3b/giphy.gif",
  "https://i.giphy.com/media/KAbwcBbJ95vyFwOG6K/giphy.gif",
  "https://i.giphy.com/media/1EgfnpQjYNfm1Ecrss/giphy.gif",
  "https://i.giphy.com/media/js7vDB0AHL1PBMPvhl/giphy.gif",
  "https://i.giphy.com/media/iy5eavgrIQzWhZtEtf/giphy.gif",
  "https://i.giphy.com/media/Gt48yLEtnWu36dL0Tn/giphy.gif",
  "https://i.giphy.com/media/PhhJbOUxfnwo9eYg1t/giphy.gif",
  "https://i.giphy.com/media/jEMeF82y6nui5t8tsy/giphy.gif",
  "https://i.giphy.com/media/7D8yA7qehIAEPRQZzd/giphy.gif",
  "https://i.giphy.com/media/23kiPIRKu2ywZ7SXPs/giphy.gif",
  "https://i.giphy.com/media/zidIlZIRLoX2HPngjM/giphy.gif",
  "https://i.giphy.com/media/wUW5KLI4cw5U5hwY9K/giphy.gif",
  "https://i.giphy.com/media/2KnE3OXLVbc1S200cy/giphy.gif",
  "https://i.giphy.com/media/AviU5N3HAMk2VnxucY/giphy.gif",
  "https://i.giphy.com/media/Lzzq9abfcXIgN7wtSd/giphy.gif",
  "https://i.giphy.com/media/4eOiom9iDdHVt0Wh33/giphy.gif",
  "https://i.giphy.com/media/GvUhiJ8brlxIPFxDeq/giphy.gif",
  "https://i.giphy.com/media/lbKqRIqG7Q5ttOW4in/giphy.gif",
  "https://i.giphy.com/media/lr8puoSJoYxSFsC1FO/giphy.gif",
  "https://i.giphy.com/media/m738lrzdqUarORiHoN/giphy.gif",
  "https://i.giphy.com/media/vQgjWdXfkKrDurLoKh/giphy.gif",
  "https://i.giphy.com/media/sKnrC0j6N1yp1yVjMZ/giphy.gif",
  "https://i.giphy.com/media/Btg0MOGsVGuO0FSsG7/giphy.gif",
  "https://i.giphy.com/media/plsG0XW1M1sHx1Zckl/giphy.gif",
  "https://i.giphy.com/media/9ip5KtOF3taJQCDXvQ/giphy.gif",
  "https://i.giphy.com/media/92OJCYdPc58Bl3q7ct/giphy.gif",
  "https://i.giphy.com/media/grOTbPUgLLC12doO86/giphy.gif",
  "https://i.giphy.com/media/PCVyjgO1NU48nXhQQD/giphy.gif",
  "https://i.giphy.com/media/JhEdv4AOMWjepzScoh/giphy.gif",
  "https://i.giphy.com/media/KbLmR38x6qx1rOW7di/giphy.gif",
  "https://i.giphy.com/media/J7OnnpTfgTYprjp74Y/giphy.gif",
];

let isSelectMode = false;
const selectedGifs = new Set();
let activeModalUrl = "";
let activeModalIndex = -1;

function getGifHashtag(index) {
  return `#gif${index + 1}`;
}

function buildGifFilename(index) {
  return `ozmep-gif-${index + 1}.gif`;
}

function triggerDownload(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function downloadMany(urls) {
  urls.forEach((url, index) => {
    setTimeout(() => {
      triggerDownload(url, buildGifFilename(index));
    }, index * 120);
  });
}

function updateSelectionUi() {
  const count = selectedGifs.size;
  downloadSelectedBtn.disabled = count === 0;
  downloadSelectedBtn.textContent = `הורד נבחרים (${count})`;
}

function setSelectMode(nextState) {
  isSelectMode = nextState;
  gifsGallery.classList.toggle("select-mode", isSelectMode);
  toggleSelectModeBtn.classList.toggle("is-active", isSelectMode);
  toggleSelectModeBtn.textContent = isSelectMode ? "סיום בחירה" : "בחירה מרובה";

  if (!isSelectMode) {
    selectedGifs.clear();
    gifsGallery
      .querySelectorAll(".gif-item.is-selected")
      .forEach((item) => item.classList.remove("is-selected"));
    gifsGallery
      .querySelectorAll(".gif-select")
      .forEach((checkbox) => (checkbox.checked = false));
  }

  updateSelectionUi();
}

function openGifModal(url, index) {
  activeModalUrl = url;
  activeModalIndex = index;
  modalGifImage.src = url;
  modalGifImage.alt = `GIF מוגדל ${index + 1}`;
  modalGifId.textContent = getGifHashtag(index);
  gifModal.classList.add("is-open");
  gifModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeGifModal() {
  gifModal.classList.remove("is-open");
  gifModal.setAttribute("aria-hidden", "true");
  modalGifImage.src = "";
  activeModalUrl = "";
  activeModalIndex = -1;
  document.body.style.overflow = "";
}

function createPackCard(pack) {
  const card = document.createElement("article");
  card.className = "pack-card";

  card.innerHTML = `
    <img class="pack-preview" src="${pack.preview}" alt="תצוגה מקדימה - ${pack.title}" loading="lazy" />
    <div class="pack-content">
      <h3 class="pack-title">${pack.title}</h3>
      <a class="download-button" href="${pack.downloadUrl}" aria-label="הורדה של ${pack.title}">
        הורדה
      </a>
    </div>
  `;

  return card;
}

function renderPacks() {
  const fragment = document.createDocumentFragment();

  stickerPacks.forEach((pack) => {
    fragment.appendChild(createPackCard(pack));
  });

  packsGrid.appendChild(fragment);
}

function renderGifGallery() {
  const fragment = document.createDocumentFragment();

  gifUrls.forEach((url, index) => {
    const card = document.createElement("article");
    card.className = "gif-item";
    card.dataset.url = url;
    card.dataset.index = String(index);

    card.innerHTML = `
      <input class="gif-select" type="checkbox" aria-label="בחירה של GIF ${index + 1}" />
      <img
        src="${url}"
        alt="GIF מספר ${index + 1}"
        loading="lazy"
        decoding="async"
      />
      <span class="gif-meta">${getGifHashtag(index)}</span>
    `;

    const checkbox = card.querySelector(".gif-select");
    const image = card.querySelector("img");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedGifs.add(url);
        card.classList.add("is-selected");
      } else {
        selectedGifs.delete(url);
        card.classList.remove("is-selected");
      }
      updateSelectionUi();
    });

    image.addEventListener("click", () => {
      if (isSelectMode) {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
        return;
      }
      openGifModal(url, index);
    });

    fragment.appendChild(card);
  });

  gifsGallery.appendChild(fragment);
}

toggleSelectModeBtn.addEventListener("click", () => {
  setSelectMode(!isSelectMode);
});

downloadSelectedBtn.addEventListener("click", () => {
  if (selectedGifs.size === 0) return;
  downloadMany([...selectedGifs]);
});

downloadAllBtn.addEventListener("click", () => {
  downloadMany(gifUrls);
});

modalDownloadBtn.addEventListener("click", () => {
  if (!activeModalUrl) return;
  const index = activeModalIndex >= 0 ? activeModalIndex : 0;
  triggerDownload(activeModalUrl, buildGifFilename(index));
});

closeGifModalBtn.addEventListener("click", closeGifModal);
gifModal.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.dataset.closeModal === "true") {
    closeGifModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && gifModal.classList.contains("is-open")) {
    closeGifModal();
  }
});

renderPacks();
renderGifGallery();
updateSelectionUi();
