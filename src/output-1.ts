// sofa-landing.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sofa-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-slate-50 font-sans text-right" dir="rtl">
      
      <!-- Sticky Header -->
      <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div class="text-2xl font-bold text-blue-700">CleanSofa Pro</div>
          <a href="https://wa.me/972500000000" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all">
            <span>שלחו וואטסאפ</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.653a11.883 11.883 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </a>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="relative py-12 lg:py-24 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          
          <!-- Content -->
          <div>
            <h1 class="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              הספה שלכם יכולה להיראות <span class="text-blue-600 underline">חדשה</span> שוב.
            </h1>
            <p class="mt-6 text-xl text-slate-600 leading-relaxed">
              הסרת כתמים קשים, נטרול ריחות רעים וחיטוי עמוק מחיידקים. אצלכם בסלון, תוך פחות משעה. 
              <br><strong>לא נקי? לא שילמת!</strong>
            </p>
            
            <!-- Features List -->
            <ul class="mt-8 space-y-4">
              <li class="flex items-center gap-3 text-slate-700">
                <div class="bg-green-100 p-1 rounded-full text-green-600">✓</div>
                חומרים ידידותיים לילדים ובעלי חיים
              </li>
              <li class="flex items-center gap-3 text-slate-700">
                <div class="bg-green-100 p-1 rounded-full text-green-600">✓</div>
                ייבוש מהיר בטכנולוגיית הזרקה-יניקה
              </li>
              <li class="flex items-center gap-3 text-slate-700">
                <div class="bg-green-100 p-1 rounded-full text-green-600">✓</div>
                זמינות מיידית באזור המרכז והשרון
              </li>
            </ul>
          </div>

          <!-- Lead Form Card -->
          <div class="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100 relative">
            <div class="absolute -top-4 right-8 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">מבצע החודש: 15% הנחה</div>
            <h3 class="text-2xl font-bold text-slate-800 mb-6">קבלו הצעת מחיר חינם</h3>
            
            <form [formGroup]="leadForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">שם מלא</label>
                <input formControlName="name" type="text" placeholder="ישראל ישראלי" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
              </div>
              
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">טלפון</label>
                <input formControlName="phone" type="tel" placeholder="050-0000000" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-left" dir="ltr">
              </div>

              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">סוג הניקוי</label>
                <select formControlName="service" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                  <option value="corner">ספה פינתית</option>
                  <option value="3seater">ספה 3 מושבים</option>
                  <option value="mattress">מזרן זוגי</option>
                  <option value="armchair">כורסה</option>
                </select>
              </div>

              <button [disabled]="leadForm.invalid" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
                שלחו לי הצעת מחיר משתלמת ⚡
              </button>
            </form>
            
            <p class="text-center text-xs text-slate-400 mt-4 italic">הפרטים שלכם מאובטחים ולא יועברו לאף אחד.</p>
          </div>
        </div>
      </section>

      <!-- Transformation Slide Section -->
      <section class="bg-slate-900 py-20 text-white overflow-hidden">
        <div class="max-w-4xl mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-12">התוצאות מדברות בעד עצמן</h2>
          
          <!-- Mockup Before/After -->
          <div class="relative rounded-2xl overflow-hidden border-4 border-slate-700 aspect-video group">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000')] bg-cover grayscale opacity-50">
              <div class="absolute inset-0 flex items-center justify-center font-bold text-4xl opacity-30">לפני</div>
            </div>
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000')] bg-cover w-1/2 border-l-4 border-blue-500 transition-all group-hover:w-[70%]">
              <div class="absolute inset-x-0 bottom-10 flex items-center justify-center font-bold text-4xl text-white drop-shadow-lg">אחרי</div>
            </div>
          </div>
          <p class="mt-6 text-slate-400">הזיזו את העכבר על התמונה כדי לראות את הקסם</p>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-12 border-t border-slate-200 text-center text-slate-500">
        <p>© 2024 CleanSofa Pro - שירות ניקוי ספות בפריסה ארצית</p>
      </footer>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class SofaLandingComponent {
  leadForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.leadForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,10}$')]],
      service: ['corner', Validators.required]
    });
  }

  onSubmit() {
    if (this.leadForm.valid) {
      console.log('Lead Sent:', this.leadForm.value);
      alert('תודה! נחזור אליך תוך פחות מ-30 דקות.');
      this.leadForm.reset();
    }
  }
}