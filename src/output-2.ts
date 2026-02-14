import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sofa-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 font-sans text-right" dir="rtl">
      
      <!-- Sticky Header -->
      <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <span class="text-2xl font-black text-slate-800 tracking-tight">Clean<span class="text-blue-600">Sofa</span></span>
          </div>
          
          <a href="tel:0500000000" class="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:animate-pulse">
            <span class="bg-blue-50 p-2 rounded-full uppercase text-xs tracking-widest">זמינים עכשיו:</span>
            050-000-0000
          </a>

          <a href="https://wa.me/972500000000" class="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all shadow-md hover:shadow-emerald-200 active:scale-95">
            <span class="font-bold">ייעוץ בוואטסאפ</span>
          </a>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <!-- Background Decor -->
        <div class="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        
        <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
          
          <!-- Text Content -->
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              12 מנקים זמינים כרגע באזורך
            </div>
            
            <h1 class="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              הספה מוכתמת? <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-l from-blue-600 to-blue-400">נחזיר לה את הנשמה</span>
            </h1>
            
            <p class="text-xl text-slate-600 leading-relaxed max-w-xl">
              אנחנו לא רק מנקים - אנחנו מחטאים. הסרת כתמים קשים, נטרול ריחות רעים והשמדת קרדית האבק בטכנולוגיית הזרקה-יניקה החדישה בעולם.
            </p>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-start gap-3">
                <div class="text-blue-600 mt-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold">חומרים ירוקים</h4>
                  <p class="text-sm text-slate-500">בטוח לתינוקות וכלבים</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="text-blue-600 mt-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold">ייבוש אקספרס</h4>
                  <p class="text-sm text-slate-500">מוכן לישיבה תוך שעות</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Lead Form -->
          <div class="relative">
            <div class="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 opacity-10"></div>
            <div class="relative bg-white rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-slate-100">
              <h3 class="text-2xl font-bold text-slate-800 mb-2">שריינו ניקוי ליום הקרוב</h3>
              <p class="text-slate-500 mb-8">השאירו פרטים ונחזור אליכם עם הצעת מחיר</p>
              
              <form [formGroup]="leadForm" (ngSubmit)="onSubmit()" class="space-y-5">
                <div class="space-y-1">
                  <label class="text-sm font-bold text-slate-700 mr-1">שם המבקש/ת</label>
                  <input formControlName="name" type="text" placeholder="איך קוראים לך?" 
                    class="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all border">
                </div>
                
                <div class="space-y-1">
                  <label class="text-sm font-bold text-slate-700 mr-1">טלפון לחזרה</label>
                  <input formControlName="phone" type="tel" placeholder="05X-XXXXXXX" dir="ltr"
                    class="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all border text-right">
                </div>

                <div class="space-y-1">
                  <label class="text-sm font-bold text-slate-700 mr-1">מה מנקים היום?</label>
                  <select formControlName="service" 
                    class="w-full px-5 py-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all border appearance-none">
                    <option value="corner">ספה פינתית (שזלונג)</option>
                    <option value="3seater">ספה 3 מושבים</option>
                    <option value="mattress">מזרן זוגי</option>
                    <option value="armchair">כורסה / כיסאות אוכל</option>
                  </select>
                </div>

                <button [disabled]="leadForm.invalid || isSubmitting()" 
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 text-lg mt-4">
                  <span>{{ isSubmitting() ? 'שולח...' : 'שלחו לי הצעת מחיר' }}</span>
                  <svg *ngIf="!isSubmitting()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg>
                </button>
              </form>
              
              <div class="mt-6 flex items-center justify-center gap-4 text-xs text-slate-400 font-medium">
                <span class="flex items-center gap-1"><svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> הצפנה SSL</span>
                <span class="flex items-center gap-1"><svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg> ללא התחייבות</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Badges -->
      <section class="bg-white py-12 border-y border-slate-100 italic">
        <div class="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 grayscale opacity-60">
            <span class="text-xl font-bold">Ynet</span>
            <span class="text-xl font-bold">Mako</span>
            <span class="text-xl font-bold">TheMarker</span>
            <span class="text-xl font-bold">Israel Hayom</span>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host { display: block; -webkit-font-smoothing: antialiased; }
    select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23475569'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E"); background-position: left 1rem center; background-repeat: no-repeat; background-size: 1.5em; }
  `]
})
export class SofaLandingComponent {
  leadForm: FormGroup;
  isSubmitting = signal(false);

  constructor(private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^05[0-9]{8}$')]],
      service: ['corner', Validators.required]
    });
  }

  async onSubmit() {
    if (this.leadForm.valid) {
      this.isSubmitting.set(true);
      // סימולציה של שליחה
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Lead Data:', this.leadForm.value);
      alert('תודה ' + this.leadForm.value.name + '! ההצעה בדרך אליך.');
      
      this.isSubmitting.set(false);
      this.leadForm.reset({ service: 'corner' });
    }
  }
}