// תוספת לקוד של תום - מה שהכפתור עושה עכשיו:
function submitLead() {
    const btn = document.querySelector('#step-3 button');
    btn.innerHTML = 'שולח נתונים...';
    btn.disabled = true;

    // כאן אנחנו מדמים שליחת API
    setTimeout(() => {
        const step3 = document.getElementById('step-3');
        step3.innerHTML = `
            <div class="text-center py-10 animate-bounce">
                <div class="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/50">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 class="text-3xl font-black text-white mb-2">ההצעה בדרך!</h3>
                <p class="text-slate-400">הפרטים התקבלו. מומחה ניקוי יצור איתך קשר בדקות הקרובות.</p>
            </div>
        `;
        console.log("Lead captured successfully!");
    }, 1500);
}