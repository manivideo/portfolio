const works = [
  { id: "tiktok-accounts", title: "SNS運用代行実績", categories: ["縦型動画", "運用代行"], type: "accounts", task: "アカウント設計・企画・構成・撮影・編集・運用" },
  { id: "takara-pr", title: "タカラトミー様 商品PR 広告動画", categories: ["縦型動画", "広告動画"], type: "shorts", youtubeId: "O6GpVNyhmUY", link: "https://youtube.com/shorts/O6GpVNyhmUY", task: "構成作成・撮影指示・編集" },
  { id: "product-pr", title: "商品PR 広告動画", categories: ["縦型動画", "広告動画"], type: "shorts", youtubeId: "HUxkwcy1i38", link: "https://www.youtube.com/shorts/HUxkwcy1i38", task: "構成・台本作成・撮影指示・編集・ナレーション" },
  { id: "app-ad-1", title: "アプリ紹介 広告動画①", categories: ["縦型動画", "広告動画"], type: "shorts", youtubeId: "Crgo53al51g", link: "https://youtube.com/shorts/Crgo53al51g", task: "構成作成・デザイン・編集・ナレーション発注" },
  { id: "app-ad-2", title: "アプリ紹介 広告動画②", categories: ["縦型動画", "広告動画"], type: "shorts", youtubeId: "rLBjE-_B5R8", link: "https://youtube.com/shorts/rLBjE-_B5R8", task: "構成作成・デザイン・編集・ナレーション発注" },
  { id: "tiktok-live", title: "TikTok 実写広告動画", categories: ["縦型動画", "広告動画"], type: "shorts", youtubeId: "2Mv6Zq5BxFA", link: "https://youtube.com/shorts/2Mv6Zq5BxFA", task: "構成作成・絵コンテ作成・撮影指示・編集" },
  { id: "tiktok-pr", title: "TikTok PR動画", categories: ["縦型動画", "広告動画"], type: "shorts", youtubeId: "WURHZydmOMY", link: "https://youtube.com/shorts/WURHZydmOMY", task: "撮影・編集" },
  { id: "tiktok-examples", title: "TikTok 系統別動画作成例", categories: ["縦型動画"], type: "shorts", youtubeId: "VWkocVqG2PM", link: "https://www.youtube.com/shorts/VWkocVqG2PM", task: "編集" },
  { id: "instagram-manga", title: "Instagram 漫画広告", categories: ["縦型動画", "広告動画"], type: "youtube", youtubeId: "g-NZjHNFO_k", link: "https://youtu.be/g-NZjHNFO_k", task: "編集" },
  { id: "takara-mini4", title: "タカラトミー様 ミニ四駆アバンテJr 広告動画", categories: ["横型動画", "広告動画"], type: "youtube", youtubeId: "6TSm_x9Yymc", link: "https://www.youtube.com/watch?v=6TSm_x9Yymc", task: "構成作成・絵コンテ作成・撮影ディレクション・編集" },
  { id: "axa-anim", title: "アクサ生命様 アニメーション広告動画", categories: ["横型動画", "広告動画"], type: "youtube", youtubeId: "Aj_egpYs6YQ", link: "https://youtu.be/Aj_egpYs6YQ", task: "編集（アニメーション）" },
  { id: "yt-anim-ad", title: "YouTube アニメーション広告動画", categories: ["横型動画", "広告動画"], type: "youtube", youtubeId: "rdQcMix4Lig", link: "https://www.youtube.com/watch?v=rdQcMix4Lig", task: "構成作成・デザイン作成・編集・ナレーション発注" },
  { id: "product-explain", title: "商品説明動画", categories: ["横型動画"], type: "youtube", youtubeId: "nfGgvo_wbnI", link: "https://www.youtube.com/watch?v=nfGgvo_wbnI", task: "構成・台本・ナレーション・デザイン・絵コンテ・撮影・編集" },
  { id: "yt-live-ad-1", title: "YouTube 実写広告動画①", categories: ["横型動画", "広告動画"], type: "youtube", youtubeId: "RUtNXIidhgA", link: "https://youtu.be/RUtNXIidhgA", task: "編集" },
  { id: "yt-live-anim", title: "YouTube 実写+アニメーション広告動画", categories: ["横型動画", "広告動画"], type: "youtube", youtubeId: "-oaaWH91agM", link: "https://youtu.be/-oaaWH91agM", task: "編集" },
  { id: "yt-live-ad-2", title: "YouTube 実写広告動画②", categories: ["横型動画", "広告動画"], type: "youtube", youtubeId: "R6BRt2wfeeY", link: "https://youtu.be/R6BRt2wfeeY", task: "編集（素材集め含）" },
  { id: "yt-urban", title: "YouTube 都市伝説系", categories: ["横型動画"], type: "youtube", youtubeId: "0UJ1NcUAzZM", link: "https://www.youtube.com/watch?v=0UJ1NcUAzZM", task: "編集" },
  { id: "corp-report", title: "一般社団法人 活動報告動画", categories: ["横型動画"], type: "youtube", youtubeId: "WaAPZlaISXI", link: "https://www.youtube.com/watch?v=WaAPZlaISXI", task: "構成・撮影・編集" }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function createTag(category) {
  return `<span class="work-tag">${escapeHtml(category)}</span>`;
}

function createCard(work) {
  const card = document.createElement("a");
  card.className = "work-card";
  card.dataset.categories = work.categories.join(",");
  if (work.type === "accounts") {
    card.href = "accounts/";
  } else {
    card.href = work.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
  }
  card.setAttribute("aria-label", `${work.title}を開く`);

  const tags = work.categories.map(createTag).join("");
  const safeTitle = escapeHtml(work.title);
  const safeTask = escapeHtml(work.task);
  const primaryCategory = escapeHtml(work.categories[0]);

  if (work.type === "accounts") {
    card.innerHTML = `
      <div class="work-thumb">
        <div class="accounts-placeholder">
          <span class="label">Account Growth</span>
          <p>SNS運用代行実績</p>
          <small>フォロワー 0 → 最大 30万人</small>
        </div>
      </div>
      <div class="work-info">
        <p class="work-title">${safeTitle}</p>
        <div class="work-tags">${tags}</div>
        <p class="work-task">${safeTask}</p>
      </div>`;
    return card;
  }

  const thumb = `https://img.youtube.com/vi/${encodeURIComponent(work.youtubeId)}/hqdefault.jpg`;
  card.innerHTML = `
    <div class="work-thumb">
      <img src="${thumb}" alt="${safeTitle}" data-fallback-title="${safeTitle}" data-fallback-category="${primaryCategory}">
      <div class="play-overlay" aria-hidden="true"><span class="play-icon">▶</span></div>
    </div>
    <div class="work-info">
      <p class="work-title">${safeTitle}</p>
      <div class="work-tags">${tags}</div>
      <p class="work-task">${safeTask}</p>
    </div>`;
  return card;
}

function initImageFallbacks() {
  document.querySelectorAll(".work-thumb img").forEach((image) => {
    image.addEventListener("error", () => {
      const fallback = document.createElement("div");
      fallback.className = "thumb-fallback";
      fallback.innerHTML = `
        <span class="label">${image.dataset.fallbackCategory}</span>
        <p>${image.dataset.fallbackTitle}</p>
        <small>YouTubeで開く</small>`;
      image.classList.add("is-hidden");
      image.insertAdjacentElement("afterend", fallback);
    }, { once: true });
  });
}

function updateWorkCount(count) {
  const counter = document.getElementById("workCount");
  if (counter) {
    counter.textContent = `${count}件表示`;
  }
}

function initWorks() {
  const grid = document.getElementById("worksGrid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  works.forEach((work) => fragment.appendChild(createCard(work)));
  grid.appendChild(fragment);
  updateWorkCount(works.length);
}

function initFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".work-card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
      let visibleCount = 0;

      cards.forEach((card) => {
        const categories = card.dataset.categories.split(",");
        const visible = filter === "all" || categories.includes(filter);
        card.classList.toggle("hidden", !visible);
        if (visible) visibleCount += 1;
      });

      updateWorkCount(visibleCount);
    });
  });
}

function initNav() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  const syncNav = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  };

  syncNav();
  window.addEventListener("scroll", syncNav, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initWorks();
  initImageFallbacks();
  initFilter();
  initNav();
});
