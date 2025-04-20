function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabContents.forEach(content => content.style.display = 'none');
    tabButtons.forEach(button => button.classList.remove('active'));

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.material-icons');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.textContent = "expand_less";
    } else {
        content.style.display = "none";
        icon.textContent = "expand_more";
    }
}

function initializeModal() {
    const buttons = document.querySelectorAll('[id^="moreinfo-"]');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = this.id.replace('moreinfo-', 'popupModal-');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    const closeButtons = document.querySelectorAll('.modal .close');
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', function (event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeModal);

function togglePanel() {
    const panel = document.getElementById('leftPanel');
    panel.classList.toggle('open');
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
}