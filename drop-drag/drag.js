const grid = document.querySelector(".dnd-area");
const dragHandles = document.querySelectorAll(".drag-area");
const dropShadow = document.querySelector(".drop-shadow");

const colGap = 8;
const rowGap = 8;
const colCount = 4;
const rowHeight = 150;
const fullRowHeight = rowHeight + rowGap;

let isDragging = false;
let currentItem = null;
let offsetX = 0;
let offsetY = 0;

// ⚠️ Tính lại mỗi lần do resize có thể thay đổi
const getColWidth = () => {
    return (grid.offsetWidth - colGap * (colCount - 1)) / colCount;
};

dragHandles.forEach((dragHandle) => {
    dragHandle.addEventListener("mousedown", (e) => {
        const item = dragHandle.closest(".dnd-items");
        if (!item) return;
        currentItem = item;
        isDragging = true;
        // Đọc span của item hiện tại
        const colSpan = parseInt(getComputedStyle(currentItem).gridColumnEnd?.replace("span", "") || "1", 10);
        const rowSpan = parseInt(getComputedStyle(currentItem).gridRowEnd?.replace("span", "") || "1", 10);

        // Lưu vào currentItem để dùng lại
        currentItem.dataset.colSpan = colSpan;
        currentItem.dataset.rowSpan = rowSpan;

        // Tính toạ độ lưới
        const colStart = parseInt(getComputedStyle(item).gridColumnStart, 10);
        const rowStart = parseInt(getComputedStyle(item).gridRowStart, 10);
        const colWidth = getColWidth();
        const relativeLeft = (colStart - 1) * (colWidth + colGap);
        const relativeTop = (rowStart - 1) * (rowHeight + rowGap);

        const itemRect = item.getBoundingClientRect();
        offsetX = e.clientX - itemRect.left;
        offsetY = e.clientY - itemRect.top;

        // Style kéo
        item.style.gridColumnStart = "auto";
        item.style.gridRowStart = "auto";
        item.style.width = `${itemRect.width}px`;
        item.style.height = `${itemRect.height}px`;
        item.style.position = "absolute";
        item.style.left = `${relativeLeft}px`;
        item.style.top = `${relativeTop}px`;
        item.style.zIndex = "1000";

        // Hiệu ứng nhấn
        item.classList.add("is-pressed");

        // Remove hiệu ứng khi bắt đầu kéo hoặc thả
        const onMove = () => {
            item.classList.remove("is-pressed");
            document.removeEventListener("mousemove", onMove);
        };
        const onUp = () => {
            item.classList.remove("is-pressed");
            document.removeEventListener("mouseup", onUp);
        };
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp, { once: true });

        document.body.style.userSelect = "none";
    });
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging || !currentItem) return;

    const colWidth = getColWidth();
    const gridRect = grid.getBoundingClientRect();
    const x = e.clientX - gridRect.left - offsetX;
    const y = e.clientY - gridRect.top - offsetY;

    // Di chuyển item
    currentItem.style.left = `${x}px`;
    currentItem.style.top = `${y}px`;

    // Tính snap vị trí
    let rawCol = x / (colWidth + colGap);
    let baseCol = Math.floor(rawCol);
    let col = baseCol + ((rawCol - baseCol) >= 0.5 ? 1 : 0) + 1;
    col = Math.max(1, Math.min(colCount, col));

    let rawRow = y / fullRowHeight;
    let baseRow = Math.floor(rawRow);
    let row = baseRow + ((rawRow - baseRow) >= 0.5 ? 1 : 0) + 1;
    row = Math.max(1, row);

    // Hiện preview
    dropShadow.classList.remove("hidden");

    dropShadow.style.gridColumnStart = col;
    dropShadow.style.gridRowStart = row;

    dropShadow.style.gridColumnEnd = `span ${currentItem.dataset.colSpan || 1}`;
    dropShadow.style.gridRowEnd = `span ${currentItem.dataset.rowSpan || 1}`;

});

document.addEventListener("mouseup", (e) => {
    if (!isDragging || !currentItem) return;
    isDragging = false;

    const colWidth = getColWidth();
    const gridRect = grid.getBoundingClientRect();
    const x = e.clientX - gridRect.left - offsetX;
    const y = e.clientY - gridRect.top - offsetY;

    let rawCol = x / (colWidth + colGap);
    let baseCol = Math.floor(rawCol);
    let col = baseCol + ((rawCol - baseCol) >= 0.5 ? 1 : 0) + 1;
    col = Math.max(1, Math.min(colCount, col));

    let rawRow = y / fullRowHeight;
    let baseRow = Math.floor(rawRow);
    let row = baseRow + ((rawRow - baseRow) >= 0.5 ? 1 : 0) + 1;
    row = Math.max(1, row);

    // Reset style kéo
    currentItem.style.position = "";
    currentItem.style.left = "";
    currentItem.style.top = "";
    currentItem.style.zIndex = "";
    currentItem.style.width = "";
    currentItem.style.height = "";

    currentItem.style.gridColumnStart = col;
    currentItem.style.gridRowStart = row;

    currentItem = null;
    dropShadow.classList.add("hidden");
    document.body.style.userSelect = "";
});
