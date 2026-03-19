// script/index.js

document.addEventListener('DOMContentLoaded', () => {
    const accItems = document.querySelectorAll('.acc-item');

    accItems.forEach(item => {
        const header = item.querySelector('.acc-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            accItems.forEach(acc => {
                acc.classList.remove('active');
                
                // Set to lime closed state
                acc.classList.remove('bg-[#1f1f1f]', 'text-white', 'shadow-md');
                acc.classList.add('bg-primary', 'text-[#2D3436]');
                
                const icon = acc.querySelector('.icon');
                if(icon) icon.textContent = '+';
                
                const content = acc.querySelector('.acc-content');
                if(content) {
                    content.classList.add('hidden');
                    content.classList.remove('block');
                }
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                
                // Set to dark open state
                item.classList.remove('bg-primary', 'text-[#2D3436]');
                item.classList.add('bg-[#1f1f1f]', 'text-white', 'shadow-md');
                
                const icon = item.querySelector('.icon');
                if(icon) icon.textContent = '-';
                
                const content = item.querySelector('.acc-content');
                if(content) {
                    content.classList.remove('hidden');
                    content.classList.add('block');
                }
            }
        });
    });
});
